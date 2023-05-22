import { Board } from './models/board.model.js';
import { Task } from './models/board-items/task.model.js';

const newline = () => console.log('\n \x1b[35m* * * * *\x1b[37m \n');

const board = new Board();

const task1 = new Task('Validate fields', new Date('2022/09/03'));
const task2 = new Task('Write unit tests', new Date('2022/09/04'));
const task3 = new Task('Remove console.log', new Date('2022/09/05'));

console.log(board.toString());

newline();

board.add(task1);
board.add(task2);
board.add(task3);

task1.advance();
task2.complete();

console.log(board.toString());

newline();

board.remove(task3);

console.log(task1.toString());

newline();

console.log('board.itemCount:', board.taskCount);