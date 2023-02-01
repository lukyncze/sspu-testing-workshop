import {containsDuplicate} from './intermediate';

describe('containsDuplicate', () => {
  it('when there is a duplicate number', () => {
    expect(containsDuplicate([5, 2, 4, 2, 3, 1])).toBe(true);
  });

  it('when there is not a duplicate number', () => {
    expect(containsDuplicate([1, 2, 3, 4, 5, 6])).toBe(false);
  });
});

export {};

