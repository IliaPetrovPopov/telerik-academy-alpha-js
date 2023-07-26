let idGen = 0;

const idGenerator = () => idGen++;

export const todos = [
    {
      id: idGenerator(),
      name: 'Buy Milk',
      due: '2023-07-20',
      isDone: true
    },
    {
      id: idGenerator(),
      name: 'Learn JavaScript',
      due: '2023-09-01',
      isDone: false
    },
    {
      id: idGenerator(),
      name: 'Learn React',
      due: '2023-8-20',
      isDone: false
    },
  ];
  
todos.forEach(x => console.log(x.id));
  export default todos;