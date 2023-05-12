export default [
  // case 1
  {
    input: x => x + 1,
    output: [
      { calls: 1, value: 2 },
      { calls: 1, value: 3 },
      { calls: 2, value: 2 },
    ],
    test: [1, 2, 1],
  },

  // case 2
  {
    input: (x = '') => x.toUpperCase(),
    output: [
      { calls: 1, value: 'AAAAA!' },
      { calls: 1, value: 'MONOCHROME' },
      { calls: 2, value: 'AAAAA!' },
    ],
    test: ['aaaaa!', 'monochrome', 'aaaaa!'],
  },

  // case 3
  {
    input: x => x * x,
    output: [
      { calls: 1, value: 1 },
      { calls: 2, value: 1 },
      { calls: 3, value: 1 },
    ],
    test: [1, 1, 1],
  },



  // case 4
  {
    input: x => x / 3,
    output: [
      { calls: 1, value: 1 },
      { calls: 1, value: 2 },
      { calls: 2, value: 1 },
      { calls: 1, value: 3 },
      { calls: 3, value: 1 },
      { calls: 1, value: 4 },
    ],
    test: [3, 6, 3, 9, 3, '12'],
  },

];