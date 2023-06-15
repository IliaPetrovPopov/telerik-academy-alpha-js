let input = ["4"];

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

  if (bunnies <= 1) {
    return 2;
  }

  return countOccurs(bunnies - 1) + 2;
}

print(countOccurs(numOfBunnies));
