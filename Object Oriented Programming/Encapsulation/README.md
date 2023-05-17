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

Today, we will start building the architecture of this system and improve upon the classes we designed in the previous exercise. The **goal** is to design a scalable architecture, **encapsulate** the state of the classes and apply **validation** to state changes.

- Working with classes - writing classes and creating instances of those classes.
- Modeling classes using `fields` (state) and `methods` (behavior).
- Protecting the state by making it private.
- Expose state via **getters** and **setters**.
- Apply validation to state changes inside **setters**.
- Writing basic code documentation using **JSDoc**.

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

When you take a look at the project structure you will notice that there are a couple of folders in `src` - the `models` folder which holds the model classes and the `common` folder where the `status` enum is placed. You will also notice that each file has the extension of the role it plays in the application - model files end with `.model.js` and enum files end with `.enum.js`. This is a convention we adhere to in order to make folder and file naming more declarative.

You are provided yet again with the skeleton of the models and you need to implement all the missing functionality - this time following the rules of the **encapsulation** principle - all data (state) should be private and those parts of the state that need to be exposed to the outside world should do that through **getters** and **setters**, validating all values before changes are made to the state. This is a necessary step because we want to keep our model instances in a valid state throughout their lifecycle in the application.

<br>

### 6. The `Task` model

The `Task` model should hold three pieces of information - the `name` of the task, the `dueDate` and the `status`. These fields need to be private to the class and you can see they have already been declared

```js
export class Task {
  #name;
  #dueDate;
  #status;

  // rest of the model
}
```

However, those fields have no value - they need to be initialized during instance *construction*.

In order to expose those fields to the outer world (outside the class) you need to define **getters** and **setters** for the following properties:

- `name` - It should never be **null, undefined or an empty string**, its length should be between **6 and 20 characters**
- `dueDate` - The date of the deadline. Think of what validation will be needed here.
- `status` - The task's status should be one of the three `TODO`, `IN_PROGRESS`, or `DONE`. Think of what is the best way to represent the value and its type. The status can only be changed through the `reset`, `advance` and `complete` methods. Think of what is needed to achieve this.

Changing the value of the fields should throw an error if the new value is invalid.

The following methods should also be implemented:

- `reset()` - It should set the status of the task to `TODO`
- `advance()` - It should set the status of the task to `IN_PROGRESS`
- `complete()` - It should set the status of the task to `DONE`

You have been provided with the implementation of the `toString()` method for convenience.

<br>

### 7. The `Board` model

The `Board` model should hold only one thing in its state - the array of all tasks added to the board. This field should be private to the class and exposed through a **getter**. Because the array is a reference type we can make changes to it and *mutate* it from outside the class once be obtain a reference to it. Think of a way to avoid that.

The `Board` model should have the following properties:

- `tasks` - The array of tasks added to the board. We should not be able to mutate the array from outside the class.
- `taskCount` - Should return the number of tasks in the array. We should not be able to change its value - only read it.

The following methods should also be implemented:

- `add(task)` - It should add a task to the list of tasks in the board. A single task can be added only once! It should validate if the value we want to add is an instance of the `Task` model and throw and error if it's not.
- `remove(task)` - It should remove a task from the list of tasks. The board should not allow for a task to be removed if it's not in the list!

You have been provided with the implementation of the `toString()` method for convenience.

<br>

### 8. Unit tests

To help you with the validations and implementation of missing functionality you have been provided with unit tests, which test specific results of your code implementation. There are two ways to run the tests:

- `npm run test` (shorthand `npm test` or `npm t`) - This will run the tests in the console
- `npm run test:browser` - This will run the test in interactive mode in the browser where you can control when and how tests are run

Unit test will provide you with feedback on what is working in your code and what is not (and why).

<br>

### 9. Document the code

Document the code using the JSDoc syntax. Write a short description of what each **field** and **method** does. For example:

```javascript
/** Adds a new task to the board, only if it is valid.*/
add(task) {
  ....
}
```

Then proceed to generate the `docs` folder using `npm run docs`.

<br>

### 10. Testing the `Board` and the `Task` classes

You can paste the following sample code inside the `main.js` file. Running this code should produce the output shown below. Even if the outo:

```javascript
import { Board } from './models/board.model.js';
import { Task } from './models/task.model.js';

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
```

Sample output text:

```text
---Task Board---       

Tasks:

No tasks at the moment.

 * * * * *      

---Task Board---

Tasks:

Name: Validate fields
Status: In progress
Due: 9/3/2022 12:00:00 AM
--------
Name: Write unit tests
Status: Done
Due: 9/4/2022 12:00:00 AM
--------
Name: Remove console.log
Status: Todo
Due: 9/5/2022 12:00:00 AM

 * * * * *

Name: Validate fields
Status: In progress
Due: 9/3/2022 12:00:00 AM

 * * * * *

board.itemCount: 2
```