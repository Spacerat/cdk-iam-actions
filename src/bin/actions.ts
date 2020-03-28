import * as fs from "fs";
import * as ts from "typescript";
import * as process from "process";

import { extractServiceInfo, load } from "./parse";
import { render } from "./render";

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
  const decl = ts.createEnumDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    identifier,
    actions.map(({ name, value }) =>
      ts.createEnumMember(name, ts.createStringLiteral(value))
    )
  );
  return ts.addSyntheticLeadingComment(
    decl,
    ts.SyntaxKind.MultiLineCommentTrivia,
    `* Actions for ${fullName}\n  * See: ${iamUrl}\n  `,
    true
  );
}

function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const enumNodes = info.map(makeEnumNode);

  fs.writeFileSync(process.argv[3], render(enumNodes));
}

main();
