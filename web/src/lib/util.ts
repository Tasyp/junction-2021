export const takeFirst = <T>(a: T[] | T): T => (Array.isArray(a) ? a[0] : a);

export const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const arrayStrToNumber = (str: string[] | string | undefined, defaultValue: number) => {
  if (str === undefined) {
    return defaultValue;
  }

  const first = takeFirst(str);
  return parseInt(first);
}