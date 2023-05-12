# Formal Tasks

## How to run tasks

You are provided with a Node.js client application which will run and test your solutions. You don't need to install any packages. The project has been set up to work with ES modules and you have one built-in command: `npm start` which will execute and test your code (provided you don't have any syntax errors).

Important: You don't need to get familiar with the project code, you will work exclusively in the `tasks/solutions` folder. You are not allowed to modify any code outside that folder.

The project structure:

- `index.js` - the code execution starts from here
- `src` - includes the core logic of the application that will run and test your code
- `tasks/data` - includes the test data for each tasks, you might refer to the test cases, but keep in mind:
  - some of the test data might confuse you more than help you - if you nail the task logic, the data complexity is not important
  - you are **not allowed** to hardcode solutions to specific cases (except for boundary conditions: zero, one or more input elements)
- `tasks/solutions` - includes the solution files you will be working with

<br>

## How to solve tasks

You can find each task in its file, i.e. task #1 is in `tasks/solutions/task1.js`, etc.

You will see one default function export. You are not allowed to change anything outside the function or even its parameter. You can write the solution inside the function's body:

```js
export default function (data) {
  // your code starts here

  // your code ends here
};
```
Each function solution except only one parameter `data` which will be in specific format described below for each task. The function should return the calculated value following the task's description.

<br>

### Task 1: Neighboring cells

The function will receive the `data` value which will **always** be a matrix - an array of arrays. You must return a new matrix with the same size transformed following the rule below. You can use loops, but try to challenge yourself by using Array methods instead.

You will receive a matrix of numbers. You should return a new matrix where each element is the sum of the top and bottom element minus the sum of the left and the right element. If any of the top, bottom, left and right elements are out of range (outside the matrix), consider them being 0.

```js
export default function (data /* always a matrix */) {
  // your code starts here

  // your code ends here
};
```

Example `data` value:

```js
[
  [2, 5, 6],
  [1, 4, 8],
  [9, 7, 3],
]
```

Expected return:

```js
[
  [-4, -4, 3],
  [7, 3, 5],
  [-6, -8, 1],
]
```

Explanation: the first element of the matrix [row=0, col=0] is the sum of the top element (since there is no top element [row=-1, col=0] consider it 0) and the bottom element 1 minus the sum of the left element ([row=0, col=-1] hence 0) and the right element 5 resulting in total (0 + 1) - (0 + 5) = -4.

**Note:** You are **allowed** to use loops, there is no restrictions to use only array methods.

<br>

### Task 2: Special mapping function

The function will receive the `data` value which will **always** be a function with the following signature `(el: any) => 1 | 2 | 3` or a function that has exactly one parameter and returns either `1`, `2`, or `3`.

You must return a new function that has one parameter that will **always** be an _array_. The returned function should map each element of the array using the passed `data` function. If the `data` executed for the element is `1`, the element should be mapped to its value + 1, if `data` executed for the element returns `2`, the element should be mapped to `{ name: value }` where `value` is the element's value, and if `data` executed for the element returns `3`, the element is **guaranteed** an array and the element should be mapped to a new array, where each of the new array's element is mapped to its **square** value.

Make sure you use Array methods.

```js
export default function (data /* always an object */) {
  // your code starts here

  // your code ends here
};
```

You can use the following test (create a new test file inside the `solutions` folder) to verify you have implemented the solution correctly.

```js
import solution from './task2.js';

const dataFn = x => {
  if (Number(x) === x) {
    return 1;
  } else if (String(x) === x) {
    return 2;
  }

  return 3;
};

const mapFn = solution(dataFn); // typeof mapFn = 'function'

const input = [1, 'John', [1, 2, 3]];

const output = mapFn(input);

console.log(output); // [ 2, { name: 'John' }, [ 1, 4, 9 ] ]

```

<br>

### Task 3: Students graduation

The function will receive the `data` value which will **always** be an object. You must return a new object, composed following the rules below.

The `data` value will be an object of the type `Course`, i.e. it will have a property `course` which is the name of the course, a `passingGrade` which is the minimum grade for a student to graduate, `students` - an array of `Student` objects, `grades` - an array of **partial** grades, meaning each `PartialGrade` will always have the `grade` property and either `studentId` matching one of the student's ids, or `studentName` matching one of the students names.

<br>

## Types

```ts
type Course = {
  course: string,
  passingGrade: number,
  students: Student[],
  grades: PartialGrade[],
  exams: PartialGrade[],
}

type Student = {
  id: number,
  name: string,
}

type PartialGrade = {
  studentId?: number,
  studentName?: string;
  grade: number;
}
```

You must return a new object of the type `GraduationCorse` containing the `name` of the course, `graduates` - the array of all graduated `Graduate` students, and `nonGraduates` - the array of all `NonGraduate` students.

The `grade` of each students is calculated based on 40% of the average of their normal grades `Course.grades` and 60% of the average of all exams `Course.exams` they attended.

In order for a student to become graduate they should follow these two rules:
  - have a total `grade` equal or greater than the course `passingGrade`
  - attended at least two exams

In any other case the student is a `NonGraduate` and the reason is one of the three strings `'score' | 'exams' | 'score and exams'`:
  - if they have attended less than two exams AND have total grade lower than the passing one the reason is `score and exams`
  - if they have attended two or more exams but have a lower grade - `score`
  - if they have grade equal or greater than the minimum passing grade but they have attended less than two exams - `exams`

```ts
type GraduationCorse = {
  name: string,
  graduates: Graduate[],
  nonGraduates: NonGraduate[],
}

type Graduate = {
  id: number,
  name: string,
  grade: number,
}

type NonGraduate = {
  id: number,
  name: string,
  reason: 'score' | 'exams' | 'score and exams',
}
```

## Example input and output

```js
export default function (data /* always an object */) {
  // your code starts here

  // your code ends here
};
```

Example `data` value:

```js
{
  course: 'JS Core',
  passingGrade: 3.5,
  students: [{ id: 1, name: 'Pesho' }, { id: 2, name: 'Gosho' }],
  grades: [{ studentId: 1, grade: 4 }, { studentName: 'Pesho', grade: 5 }, { studentId: 2, grade: 6 }],
  exams: [{ studentId: 1, grade: 5 }, { studentName: 'Pesho', grade: 6 }, { studentId: 2, grade: 6 }],
}
```
Expected return:

```js
{
  name: 'JS Core',
  graduates: [{ id: 1, name: 'Pesho', grade: 5.1 }],
  nonGraduates: [{ id: 2, name: 'Gosho', reason: 'exams' }]
}
```

**Constraints:**
  - you must preserve the original student order of the passed `students` array

<br>