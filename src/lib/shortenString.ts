export function shortenString(str: string, length: number) {
  return str.length > length ? str.slice(0, length - 1) + '...' : str;
}
