export const takeFirst = <T>(a: T[] | T): T => (Array.isArray(a) ? a[0] : a);
