let input = ["6", "0"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const arr = gets().split(",").map(Number);
const startPt = +gets();
let containsSix = false;

function arrayWith6(array, startingI) {
  if (array.length <= 1) {
    return array[0] === 6 ? containsSix = true : containsSix;
  }
  const arrMovement = array.slice(startingI);

  arrayWith6(arrMovement, 1);

  return array[startingI] === 6 ? containsSix = true : containsSix;
}

print(arrayWith6(arr, startPt));
