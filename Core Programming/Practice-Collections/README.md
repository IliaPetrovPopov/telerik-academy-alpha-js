# Practice 2: Collections

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

<br />

## How to solve tasks

You can find each task in its file, i.e. task #1 is in `tasks/solutions/task1.js`, etc.

You will see one default function export. You are not allowed to change anything outside the function or even its parameter. You can write the solution inside the function's body:

```js
export default function (data) {
  // your code starts here

  // your code ends here
};
```
Each solution function accepts only one parameter - `data`. This parameter will be in a specific format depending on the task. Last but not least, read the task descriptions carefully since they specify what value each solution function should return.

Good luck!

<br />

### Task 1: Usable properties

The function will receive the `data` value which will **always** be an array of objects. You must return a new collection of objects transformed following the rule below. Make sure you use **Array** and **Object** methods. You will be awarded partial points for correct output and full points if you use the semantically correct array methods.

You will receive a collection of objects. Each object has a different set of properties except for the `usable` property which is always an array of strings. The `usable` property contains the name of the properties that **can** exist in the returned object. More on that in the example below

```js
export default function (data /* always an array of objects */) {
  // your code starts here

  // your code ends here
};
```

Example `data` value:

```js
[
  {
    name: 'John',
    age: 20,
    street: 'Main',
    usable: ['name', 'age'],
  },
  {
    first: 10,
    second: 12,
    third: 16,
    usable: ['first', 'second'],
  },
]
```

Expected return:

```js
[
  {
    name: 'John',
    age: 20,
  },
  {
    first: 10,
    second: 12,
  },
]
```

Explanation: You will return a collection with the same amount of objects transformed into new object including only the properties described in `usable`. I.e.

```js
{
  name: 'John',
  age: 20,
  street: 'Main',
  usable: ['name', 'age'],
}
```

has its **usable** properties set to `name` and `age`, so you must transform it to a new object containing only the two properties `name` and `age` with their values. If the values are references (objects, functions, arrays) you can copy them directly, don't bother cloning the values of the properties.

<br />

### Task 2: People with cities and population

The function will receive the `data` value which will **always** be an object. You must return a new collection of objects transformed following the rule below. Make sure you use **Array** methods. You will be awarded partial points for correct output and full points if you use the semantically correct array methods.

You will receive an object with two properties - `cities` and `people`, each of which is a collection of **city** and **person** objects described as below. You must return a new collection of people transformed to match the output also described below.

```js
export default function (data /* always an object */) {
  // your code starts here

  // your code ends here
};
```

Example `data` value:

Each **city** object consist of the city's `name` and city's `id`.
Each **person** object consist of the person's `name` and the person's `city` id which will match one of the **city** ids.

```js
{
  cities: [
    {
      id: 1,
      name: 'Plovdiv',
    },
    {
      id: 2,
      name: 'Sofia',
    },
    {
      id: 3,
      name: 'Varna',
    },
  ],
  people: [
    {
      name: 'Peter',
      city: 2,
    },
    {
      name: 'Marry',
      city: 1,
    },
    {
      name: 'John',
      city: 3,
    },
    {
      name: 'George',
      city: 3,
    },
    {
      name: 'Anika',
      city: 1,
    },
  ],
}
```

Expected return:

Collection of all the people transformed to include the person's `name` and the person's `city` which is now not an `id`, but an **object** consisting of the city's `name` and the city's `population` which is calculated based on how many **people** live in the city.

**Note:** The collection of people should be return in the same order as they came in the input `people` array. All people names and city names are guaranteed **unique**.

```js
[
  {
    name: 'Peter',
    city: {
      name: 'Sofia',
      population: 1,
    },
  },
  {
    name: 'Marry',
    city: {
      name: 'Plovdiv',
      population: 2,
    },
  },
  {
    name: 'John',
    city: {
      name: 'Varna',
      population: 2,
    },
  },
  {
    name: 'George',
    city: {
      name: 'Varna',
      population: 2,
    },
  },
  {
    name: 'Anika',
    city: {
      name: 'Plovdiv',
      population: 2,
    },
  },
]
```

<br />

### Task 3: Powerful pets

The function receives an array of **player** objects. Each **player** has a `name` and `pets` where `pets` is an array of **pet** objects. Each **pet** object has `name` and `power`.

Your task is to return a new collection of **detailed** pet objects where each object has a `name`, `totalPower` and `mostPowerfulPlayer`.
 - `name` is the name of a pet
 - `totalPower` is the sum of the power of all pets with the same `name` across all **player** objects.
 - `mostPowerfulPlayer` is the **player** object with the most powerful pet of the same `name`.

The returned collection must have the *detailed* pet objects sorted by their name.
A more detailed explanation of the transformation steps can be found in the examples below. 

Before you proceed, it is important to mention that you have to try and use the **Array** methods you learned in your last session.You will be awarded partial points for correct output and full points if you use the semantically correct array methods.

<br />

## Example input, output and explanation

```js
export default function (data /* always an object */) {
  // your code starts here

  // your code ends here
};
```

Example `data` value:

**Note:** Pet names are **not** unique. A player might have one or more pets of the same name, and multiple players might have multiple pets of the same name.

```js
[
  // Player object
  {
    name: 'Dave',
    pets: [
      // Pet object
      {
        name: 'Owl',
        power: 100,
      },
      // Pet object
      {
        name: 'Raven',
        power: 200,
      },
    ],
  },
  // Player object
  {
    name: 'Steve',
    pets: [
      // Pet object
      {
        name: 'Owl',
        power: 50,
      },
      // Pet object
      {
        name: 'Raven',
        power: 300,
      },
    ],
  },
]
```

Expected return:

All the unique pet names collected in an object with the pet's `name`, the `totalPower` which is the sum of all the pets of the same `name` across all **players** and the `mostPowerfulPlayer` object which is the **player** object with the most powerful pet of the same `name`.

```js
[
  // DetailedPet object
  {
    name: 'Owl',
    totalPower: 150,
    // Player object
    mostPowerfulPlayer: {
      name: 'Dave',
      pets: [
        {
          name: 'Owl',
          power: 100,
        },
        {
          name: 'Raven',
          power: 200,
        },
      ],
    },
  },
  // DetailedPet object
  {
    name: 'Raven',
    totalPower: 500,
    // Player object
    mostPowerfulPlayer: {
      name: 'Steve',
      pets: [
        {
          name: 'Owl',
          power: 50,
        },
        {
          name: 'Raven',
          power: 300,
        },
      ],
    },
  },
]
```

Explanation: There are two **players** - `Dave` and `Steve`. Overall they have two `unique` pet names - `Owl` and `Raven`. You must return a collection of `DetailedPet` objects sorted by their names, so `Owl` first and then `Raven`.

The first - `Owl` - **DetailedPet** has the name `Owl`, `totalPower` of 150 (100 from Dave and 50 from Steve) and the `mostPowerfulPlayer` is a reference to the `Dave` **player** object, because Dave has the most powerful `Owl`.

The second - `Raven` - **DetailedPet** has the name `Raven`, `totalPower` of 500 (200 from Dave and 300 from Steve) and the `mostPowerfulPlayer` is a reference to the `Steve` **player** object, because Steve has the most powerful `Raven`.

**Constraints:**
  - there will never be the two pets with the same `name` and `power`
  - you don't need to clone the **player** objects, you can directly reference them.

<br />