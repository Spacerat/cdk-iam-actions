import * as ts from "typescript";

/** Render a list of nodes to a string, with one line between ach
 *
 * @param nodes List of typescript nodes to render
 */
export function render(nodes: ts.Node[]) {
  const resultFile = ts.createSourceFile(
    "someFileName.ts",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  );

  return (
    nodes
      .map(node =>
        ts
          .createPrinter({
            newLine: ts.NewLineKind.LineFeed
          })
          .printNode(ts.EmitHint.Unspecified, node, resultFile)
      )
      .join("\n\n") + "\n"
  );
}

/** Add a jsdoc comment to any node
 *
 * @param node node to add the comment to
 * @param lines comment lines
 */
export function addDocComment<T extends ts.Node>(node: T, lines: string[]): T {
  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    lines.map(x => `* ${x}\n  `).join(""),
    true
  );
}

/** Create a node which looks like
 * "export enum {key=value; key=value...}"
 *
 * @param identifier name of the enum
 * @param values list of enum members
 */
export function createExportEnum(
  identifier: string,
  values: { name: string; value: string }[]
) {
  return ts.createEnumDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    identifier,
    values.map(({ name, value }) =>
      ts.createEnumMember(name, ts.createStringLiteral(value))
    )
  );
}
