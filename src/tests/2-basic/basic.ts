export function hasExactString(arr: string[], str: string): boolean {
  return arr.includes(str);
}

export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

