export default [
  // case 1
  {
    input: [
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
    ],
    output: {},
    test: [
      {
        name: 'John',
        age: 20,
      },
      {
        first: 10,
        second: 12,
      },
    ],
  },

  // case 2
  {
    input: [
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        usable: ['a', 'c'],
      },
    ],
    output: {},
    test: [
      {
        a: 1,
        c: 3,
      },
    ],
  },

  // case 3
  {
    input: [
      {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        usable: [],
      },
    ],
    output: {},
    test: [
      {},
    ],
  },

  // case 4
  {
    input: [
      {
        ...[1, 2, 3, 4, 5],
        usable: ['2'],
      },
    ],
    output: {},
    test: [
      {
        2: 3,
      },
    ],
  },

  // case 5
  {
    input: [],
    output: {},
    test: [],
  },
];
