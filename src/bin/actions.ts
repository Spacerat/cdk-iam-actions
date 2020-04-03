import * as fs from "fs";
import * as process from "process";
import { extractServiceInfo, load, ServiceInfo } from "./parse";
import { addDocComment, createExportEnum, render } from "./render";

export function makeEnumNode(props: ServiceInfo) {
  const enumDeclaration = createExportEnum(props.identifier, props.actions);
  return addDocComment(enumDeclaration, [
    `Actions for ${props.fullName}`,
    `See: ${props.iamUrl}`
  ]);
}

/** Render the actions.ts library file */
function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const enumNodes = info.map(makeEnumNode);

  fs.writeFileSync(process.argv[3], render(enumNodes));
}

main();
