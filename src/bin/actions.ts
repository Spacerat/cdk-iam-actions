import * as fs from "fs";
import * as ts from "typescript";
import * as process from "process";

import { extractServiceInfo, load } from "./parse";
import { render, addDocComment, exportEnum } from "./render";

type EnumInfo = {
  fullName: string;
  iamUrl: string;
  identifier: string;
  actions: { name: string; value: string }[];
};

export function makeEnumNode({
  identifier,
  fullName,
  actions,
  iamUrl
}: EnumInfo) {
  const enumDeclaration = exportEnum(identifier, actions);
  return addDocComment(enumDeclaration, [
    `Actions for ${fullName}`,
    `See: ${iamUrl}`
  ]);
}

function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const enumNodes = info.map(makeEnumNode);

  fs.writeFileSync(process.argv[3], render(enumNodes));
}

main();
