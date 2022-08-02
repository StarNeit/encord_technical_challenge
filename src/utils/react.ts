export function concatClassNames(...classNames: (string | undefined)[]) {
  return classNames.join(" ").trim();
}
