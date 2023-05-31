import { Board } from './models/board.model.js';
import { Task } from './models/board-items/task.model.js';
import { Issue } from './models/board-items/issue.model.js';
import { Note } from './models/board-items/note.model.js';
import { noteImportance } from './common/note-importance.enum.js';
import { Employee } from './models/employee.model.js';
import { ProgrammerTask } from './models/board-items/tasks/programmer-task.model.js';
import { programmerLevel } from './common/programmer-level.enum.js';
import { ManagerTask } from './models/board-items/tasks/manager-task.model.js';
import { projectType } from './common/project-type.enum.js';
import { TaskBoard } from './models/task-board.model.js';

const newline = () => console.log('\n \x1b[35m* * * * *\x1b[37m \n');

const testGenericBoard = () => {
  const board = new Board();

  const task1 = new Task('Validate fields', new Date('2023/09/03'));
  const task2 = new Task('Write unit tests', new Date('2023/09/04'));
  const task3 = new Task('Remove console.log', new Date('2023/09/05'));
  const issue1 = new Issue('Undefined?!', 'Can\'t read property name of undefined');
  const note1 = new Note('Server is slow', 'Can\'t handle too many requests, I have to wait for my data.', noteImportance.High);

  console.log(`${board}`);
  newline();

  board.add(task1);
  board.add(task2);
  board.add(task3);
  board.add(issue1);
  board.add(note1);


  task1.advance();
  task2.complete();

  issue1.complete();

  console.log(`${board}`);
  newline();

  board.remove(task3);

  console.log(`${task1}`);
  console.log(`Board items count: ${board.count}`);
};

const testTaskBoard = () => {
  const ada = new Employee('Ada Lovelace');
  const steve = new Employee('Steve Denning');

  const programmerTask = new ProgrammerTask('Fix bug #37', new Date('12/12/2023'), programmerLevel.SENIOR, ada);
  const managerTask = new ManagerTask('Assign case #80072F8', new Date('03/07/2024'), projectType.INTERNAL_PRODUCT, steve);

  const taskBoard = new TaskBoard();
  taskBoard.add(programmerTask);
  taskBoard.add(managerTask);

  console.log(`${taskBoard}`);
};

console.log('--- Testing generic board and board items ---\n\n');

testGenericBoard();

newline();

console.log('--- Testing tasks board and tasks ---\n\n');

testTaskBoard();
