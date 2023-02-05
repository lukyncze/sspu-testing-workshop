import fetchData from '../tests/3-async/async';
import ticTacToe from '../tests/5-classic-development/classic-development';
import {toLowerCase, transpose} from '../tests/6-test-driven-development/test-driven-development';
import Counter from '../tests/7-mocking-and-UI-testing/Counter';

///////////////////////////////////////////////////////////////////
// 3 - Async
console.log(`🚀 ~ file: main.ts ~ async`);

const data = await fetchData(1);
console.log(data);

///////////////////////////////////////////////////////////////////
// 5 - classic development (Tic Tac Toe)
console.log(`--------------------------------------------------`);
console.log(`🚀 ~ file: main.ts ~ classic development`);

const result = ticTacToe([
  [0, 0],
  [1, 1],
  [2, 0],
  [1, 0],
]);
console.log(`Tic Tac Toe result: ${result}`);

///////////////////////////////////////////////////////////////////
// 6 - Test Driven Development (TDD)
console.log(`--------------------------------------------------`);
console.log(`🚀 ~ file: main.ts ~ Test Driven Development (TDD)`);

const lowerCase = toLowerCase('Hello World!');
console.log(`lowerCase: ${lowerCase}`);

const arrayTranspose = transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(`array:`);
console.log(arrayTranspose);

/////////////////////////////////////////////////////////////////
// 7 - mocking and UI testing (Counter)
console.log(`--------------------------------------------------`);
console.log(`🚀 ~ file: main.ts ~ mocking and UI testing`);

const counterElement = document.querySelector<HTMLButtonElement>('#counter')!;
const counter = new Counter(counterElement);

counterElement.addEventListener('click', () => counter.handleClick());

