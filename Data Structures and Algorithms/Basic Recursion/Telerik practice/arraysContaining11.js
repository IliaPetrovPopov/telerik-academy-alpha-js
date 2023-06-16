let input = ["121,11,12,13,11,1,2,11", "0"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const arr = gets().split(",").map(Number);
const startI = +gets();

const contain11 = function (array, startingPt) {
  let count11 = 0;

  const counting = function () {
      const movingArr = array.slice(startingPt);
      let elToCompare = movingArr[0];

    if (movingArr.length <= 1) {
      return movingArr[0] === 11 ? (count11 += 1) : count11;
    }

    counting(movingArr, startingPt += 1);

    return elToCompare === 11 ? (count11 += 1) : count11;
  };

  return counting();
};

print(contain11(arr, startI));
