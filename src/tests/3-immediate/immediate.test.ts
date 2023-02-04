import {parseString} from './immediate';

describe('parseString', () => {
  it('should parse given string', () => {
    expect(parseString('5')).toBe(5);
  });

  it('should parse given string', () => {
    expect(parseString('{"a": 5, "b": 10}')).toEqual({a: 5, b: 10});
  });
});

