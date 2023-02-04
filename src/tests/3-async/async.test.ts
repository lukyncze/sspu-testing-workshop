import fetchData, {Todo} from './async';

const testData: {input: number; expectedOutput: string}[] = [
  {
    input: 1,
    expectedOutput: 'delectus aut autem',
  },
  {
    input: 2,
    expectedOutput: 'quis ut nam facilis et officia qui',
  },
  {
    input: 3,
    expectedOutput: 'fugiat veniam minus',
  },
  {
    input: 4,
    expectedOutput: 'et porro tempora',
  },
];

describe('fetchData', () => {
  describe('when correct id is passed into function', () => {
    it('should successfully return correct todo', async () => {
      const todo = await fetchData(1);
      const expectedTodo: Todo = {userId: 1, id: 1, title: 'delectus aut autem', completed: false};

      expect(todo).toStrictEqual(expectedTodo);
    });

    it('should successfully return correct todo', async () => {
      const todo = await fetchData(5);
      const expectedTodo: Todo = {
        userId: 1,
        id: 5,
        title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: false,
      };

      expect(todo).toStrictEqual(expectedTodo);
    });
  });

  // ---------------------------------------------------------------------------------------
  // TODO: try to write a test that tests getting correct titles for given IDs from the API
  // Some data is already prepared for you in constant `testData`
  //
  // Hint: try to understand the problem first, just after that try to write down the test
  // (you can write this test under 10 lines of code)
});

