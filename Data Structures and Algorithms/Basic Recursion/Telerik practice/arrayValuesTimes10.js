let input = ["3", "0"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const arr = gets().split(",").map(Number);
const startI = +gets();

const valuesTimes10 = function(array, startingIndex) {
    let isTimes10 = false;

    if(array.length === 1) {
        return isTimes10;
    }
    
    const counter = function(arr, startPt) {
        const movingArr = arr.slice(startPt);
        const firstElement = movingArr[0] * 10;

        if(movingArr.length <= 1) {
            return firstElement;
        }

        const nextElement = movingArr[1];

        counter(arr, startPt += 1);

        return firstElement === nextElement ? isTimes10 = true : isTimes10;
    }

    return counter(array, startingIndex);
}

print(valuesTimes10(arr, startI));