export let id = 0;
export const nextId = () => id++;

const todosData = [
  {
    id: nextId(),
    name: 'Buy Milk',
    due: '2023-07-20',
    isDone: false
  },
  {
    id: nextId(),
    name: 'Learn JavaScript',
    due: '2023-09-01',
    isDone: false
  },
  {
    id: nextId(),
    name: 'Learn React',
    due: '2023-8-20',
    isDone: false
  },
];

export default todosData;