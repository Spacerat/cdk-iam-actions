import * as ts from "typescript";

export function render(nodes: ts.Node[]) {
  const resultFile = ts.createSourceFile(
    "someFileName.ts",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  );

  return nodes
    .map(node =>
      ts
        .createPrinter({
          newLine: ts.NewLineKind.LineFeed
        })
        .printNode(ts.EmitHint.Unspecified, node, resultFile)
    )
    .join("\n\n");
}
