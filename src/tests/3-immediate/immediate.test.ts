import {setCounter} from './immediate';

interface TestDataProps {
  input: number;
  expectedOutput: number;
}

const testData: TestDataProps[] = [
  {
    input: 0,
    expectedOutput: 0,
  },
  {
    input: 1,
    expectedOutput: 10,
  },
  {
    input: 5,
    expectedOutput: 50,
  },
  {
    input: 10,
    expectedOutput: 100,
  },
  {
    input: 100,
    expectedOutput: 1000,
  },
];

describe('setCounter()', () => {
  test.each(testData)(
    'returns $expectedOutput for setCounter($input)',
    ({input, expectedOutput}) => {
      expect(setCounter(input)).toEqual(expectedOutput);
    }
  );
});

