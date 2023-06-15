let input = ["3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const numOfBunnies = +gets();

function countOccurs(bunnies) {
  if (bunnies === 0) {
    return 0;
  }

  if (bunnies % 2 !== 0) {
    return countOccurs(bunnies - 1) + 2;
  } else {
    return countOccurs(bunnies - 1) + 3;
  }
}

print(countOccurs(numOfBunnies));
