import { Board } from './models/board.model.js';
import { Task } from './models/board-items/task.model.js';
import { Issue } from './models/board-items/issue.model.js';
import { Note } from './models/board-items/note.model.js';
import { noteImportance } from './common/note-importance.enum.js';

const newline = () => console.log('\n \x1b[35m* * * * *\x1b[37m \n');

const board = new Board();

const task1 = new Task('Validate fields', new Date('2023/09/03'));
const task2 = new Task('Write unit tests', new Date('2023/09/04'));
const task3 = new Task('Remove console.log', new Date('2023/09/05'));
const issue1 = new Issue('Undefined?!', 'Can\'t read property name of undefined');
const note1 = new Note('Server is slow', 'Can\'t handle too many requests, I have to wait for my data.', noteImportance.HIGH);

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