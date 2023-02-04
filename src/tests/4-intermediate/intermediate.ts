export type InputProps = number;
export type OutputType = string[];

function fizzBuzz(n: InputProps): OutputType {
  const result: OutputType = [];

  for (let i = 1; i < n + 1; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

export default fizzBuzz;

