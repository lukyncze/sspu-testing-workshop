import {containsDuplicate, hasExactString} from './basic';

const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];

describe('the shopping list', () => {
  it('should have a beer on it', () => {
    expect(shoppingList).toContain('beer');
  });

  it(`should not have a cocoa on it`, () => {
    expect(shoppingList).not.toContain('cocoa');
  });
});

describe('hasExactString', () => {
  describe('should return true when list contains', () => {
    it('beer', () => {
      expect(hasExactString(shoppingList, 'beer')).toBe(true);
    });

    it('diapers', () => {
      expect(hasExactString(shoppingList, 'diapers')).toBe(true);
    });
  });

  describe('should return false when list does not contain', () => {
    it('steak', () => {
      expect(hasExactString(shoppingList, 'steak')).toBe(false);
    });

    it('milk', () => {
      expect(hasExactString(shoppingList, 'milk')).toBe(false);
    });
  });

  it('should return false when the list is empty', () => {
    expect(hasExactString([], 'beer')).toBe(false);
  });
});

describe('containsDuplicate', () => {
  it('should return true when there is a duplicate number', () => {
    expect(containsDuplicate([5, 2, 4, 2, 3, 1])).toBe(true);
  });

  it('should return false when there is not a duplicate number', () => {
    expect(containsDuplicate([1, 2, 3, 4, 5, 6])).toBe(false);
  });
});
