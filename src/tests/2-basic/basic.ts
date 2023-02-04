export function hasExactString(arr: Array<unknown>, str: string): boolean {
  return arr.includes(str);
}

export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

