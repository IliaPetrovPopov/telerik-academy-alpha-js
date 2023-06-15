let input = ["4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const numOfRows = +gets();

function countOccurs(numOfRows) {
  if (numOfRows === 0) {
    return 0;
  }

  if (numOfRows === 1) {
    return 1;
  }

  return countOccurs(numOfRows - 1) + numOfRows;
}

print(countOccurs(numOfRows));
