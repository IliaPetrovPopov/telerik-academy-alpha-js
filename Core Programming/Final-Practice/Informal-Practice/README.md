# Informal tasks

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
}
```

Each function solution except only one parameter `data` which will be in specific format described below for each task. The function should return the calculated value following the task's description.

<br>

### Task 1: Reduced matrix transposition

The function will receive the `data` value which will **always** be a **matrix** an array of arrays (inner arrays have the same length). You must return a new matrix transformed following the rule below. Try solving the task using **array methods**. You might be awarded partial points.

You will receive a matrix with **N** rows and **M** columns. You need to return a new matrix with the size of **M** rows and **N** columns, where each element from the original matrix is moved from row **I**, column **J** to row **J**, column **I**. Additionally, the element should be divided by the sum of all elements on the row **I** of the matrix passed to the `data` parameter.

```js
export default function (data /* always a matrix N by M */) {
  // your code starts here
  // your code ends here
}
```

Example `data` value:

```js
[
  [2, 2],
  [4, 4],
  [0, 2],
];
```

Expected return:

```js
[
  [0.5, 0.5, 0],
  [0.5, 0.5, 1],
];
```

Explanation: You receive a matrix of **3** rows and **2** columns, and you return a new matrix of **2** rows and **3** columns. The first element (2) on position _[row=0, col=0]_ is copied to the new matrix on position _[row=0, col=0]_, where the value of the element (2) is divided by the sum of all elements on _[row=0]_ in the original matrix (2 + 2). The same applies for the rest of the elements. I.e., element at position _[row=2, col=1]_ is 2, and is copied to position _[row=1, col=2]_ in the new matrix, but is also divided by the sum of elements on _[row=2]_ (0 + 2) = 1.

**Constraints:**

- **N** will be in the range of [0, 10]
- **M** will be in the range of [0, 10]
- calculations don't need to be rounded to a specific digit, you are allowed margin of error of 0.1
- there will be no cases of division by 0

<br>

### Task 2: Function spy

The function will receive the `data` value which will **always** be a function. The function passed to `data` will **always** accept just one parameter and the parameter value will always be either _string_ or _number_. You need to return a new function complying to the requirements below.

The return function should:

- cache the return value of the function passed to `data` for every different parameter `param`
- evaluate the passed function for the same parameter value only once, every consequent function call should return the cached value
- return an object in the same format `{ value: any, calls: number }` where the `value` is the return value of the `data` function and `calls` is the number of times the `data` function has been called with the same parameter `param`.

```js
export default function (data /* always a function */) {
  // your code starts here

  // missing implementation

  return (param) => {
    // missing implementation
  };
  // your code ends here
}
```

Example test (you can implement tests in another file you create yourself, this is just an example of what is expected of the solution and how it will be tested internally):

```js
import task2fn from "./task2.js";

const fn = (x) => x + 1;

const spiedFn = task2fn(fn);

// the passed fn will be called once with param=1 and the value 2 will be cached
console.log(spiedFn(1)); // { value: 2, calls: 1}

// the passed fn will be called once with param=2 and the value 3 will be cached
console.log(spiedFn(2)); // { value: 3, calls: 1}

// the passed fn will not be called now, instead the cached value 2 will be retrieved from the cache, but calls property will be incremented to 2 because the same parameter param=1 was used 2 times now
console.log(spiedFn(1)); // { value: 2, calls: 2}
```

<br>

### Task 3: Grouping by property

The function will receive the `data` value which will **always** be an object. You must return a new collection of objects transformed following the rule below.

The object passed to data will have the following properties:

```ts
type data = {
  dataProp: string;
  groupByProp: string;
  [string]: object[];
};
```

where `[string]: object[]` is a property with an arbitrary name and the value of the property will **always** be an array of objects. `dataProp` is the name of the arbitrary property (`[string]: object[]`), and the `groupByProp` is the name of the property every object in the `[string]: object[]` collection of objects will have.

You need to return a new object grouping the collection of objects by the unique values of their `[groupByProp]` property. The order of the objects should be preserved.

## Example input, output and explanation

```js
export default function (data /* always an object */) {
  // your code starts here
  // your code ends here
}
```

Example `data` value:

```js
{
  dataProp: 'students',
  groupByProp: 'age',
  students: [
    {
      name: 'Peter',
      age: 20,
    },
    {
      name: 'George',
      age: 24,
    },
    {
      name: 'Maria',
      age: 20,
    },
  ],
}
```

Expected return:

```js
{
  '20': [
    {
      name: 'Peter',
      age: 20,
    },
    {
      name: 'Maria',
      age: 20,
    },
  ],
  '24': [
    {
      name: 'George',
      age: 24,
    },
  ],
}
```

Explanation: the `dataProp` value is `students` which means the object passed to `data` will have a `students` property with its value being a collection of objects. Every object in that collection will have `groupByProp` property, where the actual property name will come from `data.groupByProp` which in this case is `age`, i.e. each object in `data.students` will have the `age` property. You need to return a new object with its property set to the unique `age` values. In this case there are two unique `age` values - `20` and `24` which become the keys of the return object. Their values are collections of all object having the exact `age` value.

**Note:** keep in mind `dataProp` and `groupByProp` values are dynamic and will be different for each case. The `students` property name should be calculated based on the `dataProp` value, i.e. if `dataProp` value is `cars` the passed `data` object will have its collection of objects contained in `data.cars`. If this is confusing to you, research `computer property names`.

<br>
