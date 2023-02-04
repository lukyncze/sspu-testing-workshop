import axios from 'axios';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchData(id: number): Promise<Todo> {
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return data;
}

export default fetchData;

