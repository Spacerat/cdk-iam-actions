import { ServiceMap, Entry } from "./serviceMap";

import * as fs from "fs";

/** Load a Service Map downloaded from AWS  */
export function load(path: string) {
  return JSON.parse(fs.readFileSync(path, { encoding: "utf8" })) as ServiceMap;
}

/** Uppercase the first character of a string */
function upperFirst(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

/**
 * Generate an name for a service entry
 *
 * @param key The key of the service in the Service Map
 * @param entry The value of the service in the Service map
 */
function getName(key: string, entry: Entry) {
  let name = entry.StringPrefix;

  if (key == "Elastic Load Balancing V2") {
    // Deal with the "V2" case
    return "ElasticLoadBalancingV2";
  }

  // Use case from the service map key, if - without case - the prefix matches the service map key
  const stripped = key.replace(/\s/g, "");
  const prefixWithoutHyphen = entry.StringPrefix.replace("-", "");
  const index = stripped.toLowerCase().indexOf(prefixWithoutHyphen);
  if (index >= 0) {
    return stripped.slice(index, index + prefixWithoutHyphen.length);
  }

  // Return title case
  return name
    .split("-")
    .map(part => (part.length <= 3 ? part.toUpperCase() : upperFirst(part)))
    .join("");
}

/** Convert a Condition Key value to a nice enum identifier */
function conditionName(value: string) {
  return value
    .split(":")[1]
    .split("/")[0]
    .split(/[-\._]/g)
    .map(upperFirst)
    .join("");
}

/** Return true of the Condition Key can be converted to an enum member */
function validCondition(key: string): boolean {
  return (
    !key.includes("<") &&
    !key.includes("/") &&
    key.includes(":") &&
    !key.startsWith(" ")
  );
}

/** Extract and compute the content of an enum for a service map entry */
export function extractServiceInfo(map: ServiceMap) {
  return Object.entries(map).map(([key, entry]) => {
    const identifier = getName(key, entry);
    const actions = entry.Actions.map(action => ({
      name: action,
      value: `${entry.StringPrefix}:${action}`
    }));
    const urlName = key.replace(/[\s-]/g, "").toLowerCase();
    const iamUrl = `https://docs.aws.amazon.com/IAM/latest/UserGuide/list_${urlName}.html`;

    const conditions = entry.conditionKeys
      ?.filter(validCondition)
      .map(condition => ({
        name: conditionName(condition),
        value: condition
      }));

    return {
      fullName: key,
      iamUrl: iamUrl,
      identifier,
      actions,
      conditions
    };
  });
}
