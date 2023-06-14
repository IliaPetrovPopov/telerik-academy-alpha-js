export const compareArrays = (expected, actual) => {
  return (
    actual.length === expected.length &&
    expected.reduce(
      (areEqual, _, index) => areEqual && expected[index] === actual[index],
      true
    )
  );
};

export const deepCompareObjects = (expected, actual) => {
  if (typeof expected !== 'object') {
    return expected === actual;
  }

  return Object.keys(expected).every((key) => {
    if (typeof expected[key] === 'object' && expected[key] !== null) {
      return (
        expected[key] !== actual[key] &&
        deepCompareObjects(expected[key], actual[key])
      );
    }

    return expected[key] === actual[key];
  });
};

export const compareArraysOfMatrices = (expected, actual) => {
  return (
    actual.length === expected.length &&
    expected.every((_, pathIndex) => {
      for (let row = 0; row < expected[pathIndex].length; row++) {
        for (let col = 0; col < expected[pathIndex][0].length; col++) {
          if (expected[pathIndex][row][col] !== actual[pathIndex][row][col]) {
            return false;
          }
        }
      }

      return true;
    })
  );
};

export const formatArray = (array) => array.join(' ');

export const formatObject = (object) => JSON.stringify(object);

export const formatArrayOfMatrices = (arrayOfMatrices) => {
  return (
    '\n' +
    arrayOfMatrices
      .map((matrix) => {
        return matrix
          .map((row) => {
            return formatArray(row.map((el) => (el === null ? ' ' : el)));
          })
          .join('\n');
      })
      .join('\n\n') +
    '\n'
  );
};
