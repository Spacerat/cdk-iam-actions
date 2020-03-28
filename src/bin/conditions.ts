import * as ts from "typescript";
import * as fs from "fs";
import * as process from "process";

import { extractServiceInfo, load } from "./parse";
import { render } from "./render";

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
  const decl = ts.createEnumDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    identifier,
    conditions.map(({ name, value }) =>
      ts.createEnumMember(name, ts.createStringLiteral(value))
    )
  );
  return ts.addSyntheticLeadingComment(
    decl,
    ts.SyntaxKind.MultiLineCommentTrivia,
    `* Condition keys for ${fullName}\n  * See: ${iamUrl}\n  `,
    true
  );
}

function main() {
  const serviceMapFile = process.argv[2];
  const info = extractServiceInfo(load(serviceMapFile));

  const infoWithConditions = info.filter(
    x => x.conditions !== undefined
  ) as ConditionInfo[];

  //   console.log(JSON.stringify(infoWithConditions[0].conditions));
  const conditionNodes = infoWithConditions.map(makeConditionNode);

  fs.writeFileSync(process.argv[3], render(conditionNodes.slice(0, 10)));
}

main();
