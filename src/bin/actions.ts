import * as fs from "fs";
import * as process from "process";
import { makeEnumNode } from "./nodes";
import { extractServiceInfo, load } from "./parse";
import { render } from "./render";

function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const enumNodes = info.map(makeEnumNode);

  fs.writeFileSync(process.argv[3], render(enumNodes));
}

main();
