import {toLowerCase, transpose} from './test-driven-development';

interface ToLowerCaseTestDataProps {
  input: string;
  expectedOutput: string;
}

interface TransposeTestDataProps {
  input: number[][];
  expectedOutput: number[][];
}

const toLowerCaseTestData: ToLowerCaseTestDataProps[] = [
  {
    input: 'Hello',
    expectedOutput: 'hello',
  },
  {
    input: 'here',
    expectedOutput: 'here',
  },
  {
    input: 'LOVELY',
    expectedOutput: 'lovely',
  },
  {
    input: 'ThIS iS a TeSt',
    expectedOutput: 'this is a test',
  },
  {
    input: 'aBcDeFgHiJkLmNoPqRsTuVwXyZ',
    expectedOutput: 'abcdefghijklmnopqrstuvwxyz',
  },
  {
    input: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    expectedOutput: 'abcdefghijklmnopqrstuvwxyz',
  },
];

const transposeTestData: TransposeTestDataProps[] = [
  {
    input: [[0]],
    expectedOutput: [[0]],
  },
  {
    input: [[8, 2]],
    expectedOutput: [[8], [2]],
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    expectedOutput: [
      [1, 4],
      [2, 5],
      [3, 6],
    ],
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expectedOutput: [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
  },
  {
    input: [
      [7, 5, 8],
      [9, 4, 3],
      [9, 8, 7],
      [1, 7, 6],
    ],
    expectedOutput: [
      [7, 9, 9, 1],
      [5, 4, 8, 7],
      [8, 3, 7, 6],
    ],
  },
];

describe.skip('Test Driven Development (TDD) implementation', () => {
  describe('toLowerCase()', () => {
    test.each(toLowerCaseTestData)(
      'returns $expectedOutput for toLowerCase($input)',
      ({input, expectedOutput}) => {
        expect(toLowerCase(input)).toEqual(expectedOutput);
      }
    );
  });

  describe('transpose()', () => {
    test.each(transposeTestData)(
      'returns $expectedOutput for transpose($input)',
      ({input, expectedOutput}) => {
        expect(transpose(input)).toEqual(expectedOutput);
      }
    );
  });
});

