import * as ts from "typescript";
import * as fs from "fs";
import * as process from "process";

import { extractServiceInfo, load } from "./parse";
import { render, addDocComment, exportEnum } from "./render";

type ConditionInfo = {
  fullName: string;
  iamUrl: string;
  identifier: string;
  conditions: { name: string; value: string }[];
};

export function makeConditionNode({
  identifier,
  fullName,
  conditions,
  iamUrl
}: ConditionInfo) {
  const enumDeclaration = exportEnum(identifier, conditions);
  return addDocComment(enumDeclaration, [
    `Condition keys for ${fullName}`,
    `See: ${iamUrl}`
  ]);
}

function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const infoWithConditions = info.filter(
    x => x.conditions !== undefined
  ) as ConditionInfo[];

  const conditionNodes = infoWithConditions.map(makeConditionNode);

  fs.writeFileSync(process.argv[3], render(conditionNodes));
}

main();
