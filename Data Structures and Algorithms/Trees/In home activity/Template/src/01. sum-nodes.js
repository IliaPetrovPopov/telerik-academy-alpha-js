// A recursive structure with branches to iterate over
const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 4,
    left: null,
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
};

const sumNodes = (root) => {
  // code goes here
};

// should print 15
console.log(sumNodes(root));

