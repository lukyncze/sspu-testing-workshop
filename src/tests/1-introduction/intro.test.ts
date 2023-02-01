const sum = 5 + 15;

it('true should be equal to true', () => {
  expect(true).toEqual(true);
});

it('true should not be equal to false', () => {
  expect(true).not.toEqual(false);
});

it('expression should return the correct answer', () => {
  expect(1 + 2).toBe(3);
});

test('value from variable should return also the correct answer', () => {
  const sum = 10 + 5;
  expect(sum).toBe(15);
});

test('value from variable should return also the correct answer', () => {
  expect(sum).toBe(20);
});

test('sum function value should again return the right value', () => {
  expect(getSum(3, 4)).toBe(7);
});

function getSum(a: number, b: number) {
  return a + b;
}

export {};

