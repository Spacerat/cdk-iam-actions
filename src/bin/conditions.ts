import * as fs from "fs";
import * as process from "process";
import { extractServiceInfo, load, ServiceInfo } from "./parse";
import { addDocComment, createExportEnum, render } from "./render";

export function makeConditionNode(props: ServiceInfo) {
  const enumDeclaration = createExportEnum(
    props.identifier,
    props?.conditions ?? []
  );
  return addDocComment(enumDeclaration, [
    `Condition keys for ${props.fullName}`,
    `See: ${props.iamUrl}`
  ]);
}

/** Create the conditions.ts library file */
function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const infoWithConditions = info.filter(x => x.conditions !== undefined);

  const conditionNodes = infoWithConditions.map(makeConditionNode);

  fs.writeFileSync(process.argv[3], render(conditionNodes));
}

main();
