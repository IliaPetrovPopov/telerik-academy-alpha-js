<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Boardr - Task organizing system

### 1. Description

In its complete form, _Boardr_ will be a system for creating, updating, organizing, and managing tasks, issues, and notes. The application will be built **using the best practices for object-oriented design** (OOD) and **object-oriented programming** (OOP).

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 14.0+**
- Core Packages: **ESLint**, **JSDoc**

<br>

### 3. Goals

Today, we will continue to upgrade the application with new logic and features. The **goal** is to design a scalable architecture, **encapsulate** the state of the classes, apply **validation** to state changes and increase extendability, move repeating logic to a base class and reuse that logic through inheritance and apply all OOP and other principles like single responsibility, KISS, DRY, etc.

The ultimate goal is to extend the application with a new type of board - the `TaskBoard` which will handle only *task* items and their derivatives.

- Working with classes - writing classes and creating instances of those classes.
- Modeling classes using `fields` (state) and `methods` (behavior).
- Protecting the state by making it private.
- Expose state via **getters** and **setters**.
- Apply validation to state changes inside **setters**.
- Writing basic code documentation using **JSDoc**.
- Extending a class' state and behavior through inheritance.
- Achieve polymorphic behavior when class inheritors implement the same methods in a different way.
- Extracting constants (magic numbers and strings) to static class members.

<br>

### 4. Setup

To get the project up and running, follow these steps:

1. Go inside the `Template` folder.
1. Run `npm install` to restore all dependencies.
1. After that, there are a few scripts you can run:

   - `npm run start` (shorthand: `npm start`) - Runs the `src/main.js` file.
   - `npm run lint` - Lints the code inside the `src` folder using **ESLint**.
   - `npm run docs` - Generates documentation in a `docs` folder using **JSDoc**.
   - `npm run test` (shorthand: `npm test` or `npm t`) - Runs the unit tests in the console.
   - `npm run test:browser` - Runs the unit tests in the browser in interactive mode.

<br>

### 5. Project architecture

There are few new classes and enums which you will need to implement.

You are provided yet again with the skeleton of the models and you need to implement all the missing functionality - this time following the rules of the **encapsulation** principle - all data (state) should be private and those parts of the state that need to be exposed to the outside world should do that through **getters** and **setters**, validating all values before changes are made to the state. This is a necessary step because we want to keep our model instances in a valid state throughout their lifecycle in the application.

> Question about enums - why did we add `Object.freeze` to their definition?

<br>

### 6. The `TaskBoard` model

As the name suggests, the `TaskBoard` model is a special kind of board that will only handle *task* instances (of the `Task` model and its derivatives - `ProgrammerTask` and `ManagerTask`). Its function and properties are identical to the `Board` model with the exception that the `add(item)` method should allow only instances of the `Task` model to be added to the board.

Think of what you need to add to the model in order to achieve the above. Don't forger the KISS principle.

<br>

### 7. The `Employee` model

We introduce employees to the application. `Employee` instances can be assigned to *task* items.

Properties:

- `name` - string, it should never be **null, undefined or an empty string**, its length should be between **5 and \40 characters**, constructor should take the name as a parameter and throw if it's invalid
- `id` - a number, the first instantiated employee should have `id=1`, the second `id=2`, etc. Think of what is the best way to achieve that

<br>

### 8. The `ManagerTask` model

The `ManagerTask` model is identical to the `Task` model except for the following properties added to the model:

- `projectType` - *enum* (project-type.enum.js): can be one of the following `EXTERNAL_PRODUCT`, `INTERNAL_PRODUCT`, `EXTERNAL_SERVICE`, and `INTERNAL_SERVICE`
- `assignee` -  instance of the `Employee` model, cannot be **null**. Constructor should take all the properties and throw if any of them is invalid

<br>

### 9. The `ProgrammerTask` model

The `ProgrammerTask` model is identical to the `Task` model except for the following properties added to the model:

- `programmerLevel` - *enum* (programmer-level.enum.js): can be one of the following `JUNIOR`, `REGULAR`, and `SENIOR`
- `assignee` - instance of the `Employee` model, cannot be **null**. Constructor should take all the properties and throw if any of them is invalid

<br>

### 10. The `Task` model

Little to no changes are required in the `Task` model, depending on the direction you choose - either implement the property `assignee` in the `Task` class as non-required, or implement it in each of the derived classes only. Think of the KISS and DRY principles.

Changes made to the `Task` model (if any) should not break the existing tests for the model.

<br>

### 11. Unit testing

You have already seen plenty of unit tests in previous workshops and activities, now it's your turn to test your code. You need to implement the following tests:

- `ManagerTask`
  - should extend the `Task` model
  - constructor should throw if passed `projectType` is invalid
  - constructor should throw if passed `assignee` is not a `Employee` object
  - constructor should assign correctly the values of `projectType` and `assignee`
  - should not be able to change the value of `projectType`
  - should not be able to change the value of `assignee`

- `ProgrammerTask`
  - should extend the `Task` model
  - constructor should throw if passed `programmerLevel` is invalid
  - constructor should throw if passed `assignee` is not a `Employee` object
  - constructor should assign correctly the values of `programmerLevel` and `assignee`
  - should not be able to change the value of `programmerLevel`
  - should not be able to change the value of `assignee`

- `TaskBoard`
  - should extend the `Board` model
  - `add(item)` should throw if **item** is not a instance of `Task`, `ManagerTask`, or `ProgrammerTask`
  - `add(item)` should not throw if **item** is an instance of `Task`, `ManagerTask`, or `ProgrammerTask`
  - `add(item)` should correctly add the **item** when **item** is an instance of `Task`, `ManagerTask`, or `ProgrammerTask`

<br>

### 12. Testing the application

When you're done you can use the following test code to verify everything is working as intended. Do not be concerned with exact dates and text indentation.

Note that changes done to the `Task` model (if any) should not affect code that already works as intended (the `testGenericBoard` tests).

```javascript
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

  const task1 = new Task('Validate fields', new Date('2022/09/03'));
  const task2 = new Task('Write unit tests', new Date('2022/09/04'));
  const task3 = new Task('Remove console.log', new Date('2022/09/05'));
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

  const programmerTask = new ProgrammerTask('Fix bug #37', new Date('12/12/2022'), programmerLevel.SENIOR, ada);
  const managerTask = new ManagerTask('Assign case #80072F8', new Date('03/07/2022'), projectType.INTERNAL_PRODUCT, steve);

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
```

Sample output text:

```text
--- Testing generic board and board items ---


---Items Board---

Items:

No items at the moment.

 * * * * *

---Items Board---

Items:

* Task *
Name: Validate fields
Status: In progress
Due: 9/3/2022 12:00:00 AM
--------
* Task *
Name: Write unit tests
Status: Done
Due: 9/4/2022 12:00:00 AM
--------
* Task *
Name: Remove console.log
Status: Todo
Due: 9/5/2022 12:00:00 AM
--------
* Issue *
Name: Undefined?!
Status: Resolved
Description: Can't read property name of undefined
Created on: August 23rd 2022, 05:10:37
Resolved on: August 23rd 2022, 05:10:37
--------
* Note *
Name: Server is slow
Status: Created
Description: Can't handle too many requests, I have to wait for my data.

 * * * * *

* Task *
Name: Validate fields
Status: In progress
Due: 9/3/2022 12:00:00 AM
Board items count: 4

 * * * * *

--- Testing tasks board and tasks ---


---Items Board---

Items:

* ProgrammerTask *
Name: Fix bug #37
Status: Todo
Due: 12/12/2022 12:00:00 AM
--------
* ManagerTask *
Name: Assign case #80072F8
Status: Todo
Due: 3/7/2022 12:00:00 AM
```