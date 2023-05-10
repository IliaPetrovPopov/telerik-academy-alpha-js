export default [
  // case 1
  {
    input: x => {
      if (Number(x) === x) {
        return 1;
      } else if (String(x) === x) {
        return 2;
      }

      return 3;
    },
    output: [1, 'John', [1, 2, 3]],
    test: [2, { name: 'John' }, [1, 4, 9]],
  },

  // case 2
  {
    input: x => typeof x === 'number'
      ? 1
      : typeof x === 'string'
        ? 2
        : 3,
    output: [1, 3, 'Peter', ['5', '6', 7]],
    test: [2, 4, { name: 'Peter' }, [25, 36, 49]],
  },

  // case 3
  {
    input(x) { return Array.isArray(x) ? 3 : x > 10 ? 2 : 1; },
    output: [1, 2, [3], 4, 5, [6], [7], [8, 9, 10], 11, 12],
    test: [
      2,
      3,
      [9],
      5,
      6,
      [36],
      [49],
      [64, 81, 100],
      { name: 11 },
      { name: 12 },
    ],
  },

  // case 4
  {
    input: x => Array.isArray(x) ? 3 : 1,
    output: [NaN, NaN, NaN, NaN, NaN, ['Batman']],
    test: [NaN, NaN, NaN, NaN, NaN, [NaN]],
  },

  // case 5
  {
    input: (x, { index = 1, arr = [2, 1, 3] } = {}) => arr[index],
    output: [100, '-99', -'98', 97e0, 9_6, 95., .94e2, Number(93n)],
    test: [
      101, '-991', -97,
      98, 97, 96,
      95, 94,
    ],
  },

];
