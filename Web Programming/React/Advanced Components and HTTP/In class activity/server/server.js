import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const app = express();

app.use(cors());
app.use(express.json());

let data = {
  todos: [],
  nextId: 1,
};

(async () => {
  const text = await fs.readFile('data.json', { encoding: 'utf-8' });
  data = JSON.parse(text);
})().catch((e) => console.log(`Something went wrong.\n\n${e.message}`));

const save = async () => {
  try {
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), { encoding: 'utf-8' });
  } catch (e) {
    console.log(`Something went wrong.\n\n${e.message}`)
  }
};

app.get('/todos', (req, res) => {
  res.json(data.todos);
});

app.post('/todos', async (req, res) => {
  if (typeof req.body.name !== 'string' || req.body.name.length < 2 || req.body.name.length > 24) {
    return res.status(400).json({
      message: 'Property name is invalid',
    });
  }
  if (typeof req.body.due !== 'string') {
    return res.status(400).json({
      message: 'Property due is invalid',
    });
  }
  if (typeof req.body.isDone !== 'boolean') {
    return res.status(400).json({
      message: 'Property isDone is invalid',
    });
  }

  data.todos.push({
    id: data.nextId++,
    name: req.body.name,
    due: req.body.due,
    isDone: req.body.isDone,
  });

  await save();

  res.status(201).json(data.todos.at(-1));
});

app.put('/todos/:id', async (req, res) => {
  const todoIndex = data.todos.findIndex(t => t.id === +req.params.id);

  if (todoIndex < 0) return res.status(404).json({
    message: `Todo with id=${req.params.id} not found!`,
  });

  const todo = data.todos[todoIndex];

  if (req.body.name !== undefined && (typeof req.body.name !== 'string' || req.body.name.length < 2 || req.body.name.length > 24)) {
    return res.status(400).json({
      message: 'Property name is invalid',
    });
  }
  if (req.body.due !== undefined && typeof req.body.due !== 'string') {
    return res.status(400).json({
      message: 'Property due is invalid',
    });
  }
  if (req.body.isDone !== undefined && typeof req.body.isDone !== 'boolean') {
    return res.status(400).json({
      message: 'Property isDone is invalid',
    });
  }

  data.todos[todoIndex] = {
    id: todo.id,
    name: req.body.name || todo.name,
    due: req.body.due || todo.due,
    isDone: req.body.isDone !== undefined ? req.body.isDone : todo.isDone,
  };

  await save();

  res.status(201).json(data.todos.at(todoIndex));
});

app.listen(5555, () => console.log('Server is listening on port 5555...'));
