import * as fs from "fs";
import * as process from "process";
import { makeConditionNode } from "./nodes";
import { extractServiceInfo, load } from "./parse";
import { render } from "./render";

/** Create the Conditions library */
function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const infoWithConditions = info.filter(x => x.conditions !== undefined);

  const conditionNodes = infoWithConditions.map(makeConditionNode);

  fs.writeFileSync(process.argv[3], render(conditionNodes));
}

main();
