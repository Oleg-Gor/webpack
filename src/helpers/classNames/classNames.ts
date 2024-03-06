export function classNames(
  cls: string,
  mods: Record<string, boolean | string>,
  additional: string[]
): string {
  const convertMods = Object.entries(mods).reduce((acc, [cls, value]) => {
    return value ? [...acc, cls] : acc;
  }, []);

  return [cls, ...additional, ...convertMods].join(" ");
}
