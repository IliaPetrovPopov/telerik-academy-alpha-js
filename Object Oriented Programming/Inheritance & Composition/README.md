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

Today, we will continue to upgrade the application with new logic and features. The **goal** is to design a scalable architecture, **encapsulate** the state of the classes, apply **validation** to state changes and increase extendability, move repeating logic to a base class and reuse that logic through inheritance.

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

The project structure has been changed a bit from the last time. You will notice there are a few more enums added to the `common` folder: `issueStatus`, `noteImportance` and `noteStatus`. You will need those in order to extend the application with new logic. Also, the `Task` model has been moved to the new `board-items` folder, which will be a container for other models similar to `Task`.

The `Board` model has also been updated, more on this below.

You are provided yet again with the skeleton of the models and you need to implement all the missing functionality - this time following the rules of the **encapsulation** principle - all data (state) should be private and those parts of the state that need to be exposed to the outside world should do that through **getters** and **setters**, validating all values before changes are made to the state. This is a necessary step because we want to keep our model instances in a valid state throughout their lifecycle in the application.

<br>

### 6. The `Task` model

The `Task` model should hold three pieces of information - the `name` of the task, the `dueDate` and the `status`. These fields need to be private to the class and you can see they have already been declared. You will also notice the `Task` model is extending the base `BoardItem` class which for now has no state and behavior.

```js
export class Task extends BoardItem {
  #name;
  #dueDate;
  #status;

  // rest of the model
}
```

What we ended up with on the last exercise was the following:

Properties:

- `name` - string, it should never be **null, undefined or an empty string**, its length should be between **6 and 20 characters**
- `dueDate` - Date object, the date of the deadline. Think of what validation will be needed here.
- `status` - **readonly** enum, the task's status should be one of the three `TODO`, `IN_PROGRESS`, or `DONE`. Think of what is the best way to represent the value and its type. The status can only be changed through the `reset`, `advance` and `complete` methods. Think of what is needed to achieve this.

Changing the value of the fields should throw an error if the new value is invalid.

Methods:

- `reset()` - It should set the status of the task to `TODO`
- `advance()` - It should set the status of the task to `IN_PROGRESS`
- `complete()` - It should set the status of the task to `DONE`

You have been provided with the implementation of the `toString()` method for convenience.

<br>

### 7. The `BoardItem` model

You will notice that the `Task` model already extends the `BoardItem` model, and that the `BoardItem` model lacks any implementation at the moment. You will need to figure out how to utilize the `BoardItem` model, keeping in mind repeating code in similar classes (more on this below). Inheritance for the win!

<br>

### 8. The `Issue` model

You will need to fully implement the `Issue` model. It is very similar to the `Task` model with a few exceptions. Here are the requirements for the `Issue` model.

Properties:

- `name` - string, it should never be **null, undefined or an empty string**, its length should be between **6 and 20 characters**
- `createdOn` - **readonly** Date object, the date when the issue was created (initialized)
- `resolvedOn` - **readonly** Date object, the date then the issue was resolved (the status was set to `RESOLVED`). It should be *null* when the status is different from `RESOLVED`
- `description` - a string with length in the range of `[10 - 40]`, setting the description to invalid value should throw
- `status` - **readonly** enum, the task's status should be one of the three `RAISED`, `IN_REVIEW`, or `RESOLVED`. The status can only be changed through the `reset`, `advance` and `complete` methods. Think of what is needed to achieve this.

Changing the value of the fields should throw an error if the new value is invalid.

Methods:

- `reset()` - It should set the status of the task to `RAISED`
- `advance()` - It should set the status of the task to `IN_REVIEW`
- `complete()` - It should set the status of the task to `RESOLVED`
- `toString()` - It should return a string with detailed description of the issue, i.e.

  ```txt
  * Issue *
  Name: Undefined?!
  Status: Resolved
  Description: Can't read property name of undefined
  Created on: August 17th 2022, 10:58:43
  Resolved on: August 17th 2022, 10:58:43
  ```

<br>

### 9. The `Note` model

You will need to fully implement the `Note` model as well. Here are the requirements.

Properties:

- `name` - string, it should never be **null, undefined or an empty string**, its length should be between **6 and 20 characters**
- `description` - a string with length in the range of `[6 - 60]`, setting the description to invalid value should throw
- `importance` - **readonly** enum, can be one of the three `LOW`, `AVERAGE`, and `HIGH`
- `status` - **readonly** enum, the task's status should be one of the three `CREATED`, `PENDING`, or `APPROVED`. The status can only be changed through the `reset`, `advance` and `complete` methods. Think of what is needed to achieve this.

Changing the value of the fields should throw an error if the new value is invalid.

Methods:

- `reset()` - It should set the status of the task to `CREATED`
- `advance()` - It should set the status of the task to `PENDING`
- `complete()` - It should set the status of the task to `APPROVED`
- `toString()` - It should return a string with detailed description of the note, i.e.

  ```txt
  * Note *
  Name: Server is slow
  Status: Created
  Description: Can't handle too many requests, I have to wait for my data.
  ```

<br>

### 10. The `Board` model

The `Board` has been updated to match the new business requirements of the application. Now that it will hold all kinds of board items, some of the properties and variables have been renamed in order to match the new usage of the board. There is one tiny flaw with type validation you will need to find and fix and the model should be good to go.

<br>

### 11. Unit tests

To help you with the validations and implementation of missing functionality you have been provided with unit tests, which test specific results of your code implementation. There are two ways to run the tests:

- `npm run test` (shorthand `npm test` or `npm t`) - This will run the tests in the console
- `npm run test:browser` - This will run the test in interactive mode in the browser where you can control when and how tests are run

Unit test will provide you with feedback on what is working in your code and what is not (and why).

<br>

### 12. Testing the application

When you're done you can use the following test code to verify everything is working as intended. Do not be concerned with exact dates and text indentation.

```javascript
import { Board } from './models/board.model.js';
import { Task } from './models/board-items/task.model.js';
import { Issue } from './models/board-items/issue.model.js';
import { Note } from './models/board-items/note.model.js';
import { noteImportance } from './common/note-importance.enum.js';

const newline = () => console.log('\n \x1b[35m* * * * *\x1b[37m \n');

const board = new Board();

const task1 = new Task('Validate fields', new Date('2022/09/03'));
const task2 = new Task('Write unit tests', new Date('2022/09/04'));
const task3 = new Task('Remove console.log', new Date('2022/09/05'));
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
```

Sample output text:

```text
---Items Board---       

Items:

No items at the moment.

 * * * * * 

---Items Board---

Items:

* Task *
Name: Validate fields|   
Status: In progress      
Due: 9/3/2022 12:00:00 AM
--------
* Task *
Name: Write unit tests|
Status: Done
Due: 9/4/2022 12:00:00 AM
--------
* Task *
Name: Remove console.log|
Status: Todo
Due: 9/5/2022 12:00:00 AM
--------
* Issue *
Name: Undefined?!
Status: Resolved
Description: Can't read property name of undefined
Created on: August 17th 2022, 10:58:43
Resolved on: August 17th 2022, 10:58:43
--------
* Note *
Name: Server is slow
Status: Created
Description: Can't handle too many requests, I have to wait for my data.

 * * * * *

* Task *
Name: Validate fields|
Status: In progress
Due: 9/3/2022 12:00:00 AM
Board items count: 4
```