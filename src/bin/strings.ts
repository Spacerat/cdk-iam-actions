/** Return the components of a TitleCase string */
export function splitTitleCase(s: string): string[] {
  const result = s.match(/([A-Z]|^[a-z])([a-z]+|[A-Z]+)(?=[A-Z]|$)/g);
  return result ?? [s.toUpperCase()];
}

/** Convert TitleCase to ENUM_CASE */
export function titleCaseToEnumCase(s: string): string {
  return splitTitleCase(s)
    .join("_")
    .toUpperCase();
}

/** Uppercase the first character of a string */
export function upperFirst(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}
