import {hasExactString} from './basic';

const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];

describe('the shopping list', () => {
  test('should have beer on it', () => {
    expect(shoppingList).toContain('beer');
  });

  test(`should not have cocoa on it`, () => {
    expect(shoppingList).not.toContain('cocoa');
  });
});

describe('hasExactString', () => {
  describe('should return true when list contains', () => {
    test('beer', () => {
      expect(hasExactString(shoppingList, 'beer')).toBe(true);
    });

    test('diapers', () => {
      expect(hasExactString(shoppingList, 'diapers')).toBe(true);
    });
  });

  describe('should return false when list does not contain', () => {
    test('steak', () => {
      expect(hasExactString(shoppingList, 'steak')).toBe(false);
    });

    test('milk', () => {
      expect(hasExactString(shoppingList, 'milk')).toBe(false);
    });
  });
});

export {};

