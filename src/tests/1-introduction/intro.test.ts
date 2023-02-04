const globalSum = 5 + 15;

it('true should be equal to true', () => {
  expect(true).toEqual(true);
});

it('true should not be equal to false', () => {
  expect(true).not.toEqual(false);
});

it('expression should return the correct value', () => {
  expect(1 + 2).toBe(3);
});

test('variable should return also the correct value', () => {
  const sum = 10 + 5;
  expect(sum).toBe(15);
});

test('variable should return also the correct value (2)', () => {
  expect(globalSum).toBe(20);
});

test('getSum function should again return the right value', () => {
  expect(getSum(3, 4)).toBe(7);
});

function getSum(a: number = 0, b: number = 0) {
  return a + b;
}

// just to make sure that this file is a module
export {};

