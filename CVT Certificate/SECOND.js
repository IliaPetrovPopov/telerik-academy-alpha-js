let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let rowsCount = 5;
let colsCount = 5;

// let nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// let rowsCount = 5
// let colsCount = 4
if (rowsCount * colsCount !== nums.length) {
  return false;
}

let result = [];
let resultCol = 0;
let snakeGoingUp = false;

for (let i = 0; i < rowsCount; i++) {
  result.push(Array.from([]));
}

for (let i = 0; i < colsCount * rowsCount; i++) {
  if (i % rowsCount === 0 && i > 0 && (colsCount > 1 && rowsCount > 1)) {
    snakeGoingUp === true
      ? ((snakeGoingUp = false), (resultCol = 0))
      : ((snakeGoingUp = true), (resultCol = rowsCount - 1));
  }

  if(rowsCount === 1) {
    result[resultCol].push(nums[i]);
  } else {
      if (snakeGoingUp) {
        result[resultCol].push(nums[i]);
        --resultCol;
      } else {
        result[resultCol].push(nums[i]);
        ++resultCol;
      }

  }
}

console.log(result);