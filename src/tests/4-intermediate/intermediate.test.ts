import fizzBuzz, {InputProps, OutputType} from './intermediate';

interface TestDataProps {
  input: InputProps;
  expectedOutput: OutputType;
}

const testData: TestDataProps[] = [
  {
    input: 0,
    expectedOutput: [],
  },
  {
    input: 3,
    expectedOutput: ['1', '2', 'Fizz'],
  },
  {
    input: 6,
    expectedOutput: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz'],
  },
  {
    input: 15,
    expectedOutput: [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ],
  },
];

describe('fizzBuzz()', () => {
  test.each(testData)('returns $expectedOutput for fizzBuzz($input)', ({input, expectedOutput}) => {
    expect(fizzBuzz(input)).toEqual(expectedOutput);
  });
});

