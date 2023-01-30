test('true show be equal to true', () => {
  expect(true).toEqual(true);
});

test('true show not be equal to false', () => {
  expect(true).not.toEqual(false);
});

test('expression should return correct answer', () => {
  expect(1 + 2).toBe(3);
});

test('sum function returns 3 for 1 and 2', () => {
  expect(sum(3, 4)).toBe(7);
});

describe('the shopping list', () => {
  const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];

  test('has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });

  test(`hasn't cocoa on it`, () => {
    expect(shoppingList).not.toContain('cocoa');
  });
});

function sum(a: number, b: number) {
  return a + b;
}

export {};

