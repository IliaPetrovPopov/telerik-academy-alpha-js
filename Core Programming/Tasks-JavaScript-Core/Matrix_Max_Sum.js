let input = [
  "5",
"1 22 3 41 5 2",
"2 13 4 -5 6 5",
"-6 5 9 31 2 8",
"3 14 5 -6 7 4",
"4 -5 6 -7 8 7",
"-3 -3 3 3 4 -3 -4 3"
];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let size = Number(gets());
let matrix = [];

for (let i = 0; i < size; i++) {
  matrix[i] = gets().split(" ").map(Number);
}

let coordinates = gets().split(" ").map(Number);
let i = 0;
let maxSum = -1;

while (i < coordinates.length) {
  let toRight = 0;
  let toLeft = 0;
  let currentSum = 0;

  let row = coordinates[i];
  let column = coordinates[i + 1];

  if (row > 0 && column > 0) {
    row -= 1;
    column -= 1;

    while (toRight <= column) {
      currentSum += matrix[row][toRight];
      toRight++;
    }
    let up = row - 1;

    while (up >= 0) {
      currentSum += matrix[up][column];
      up--;
    }
  } else if (row < 0 && column > 0) {
    row += 1;
    column -= 1;

    toLeft = matrix[0].length - 1;
    while (toLeft >= column) {
      currentSum += matrix[Math.abs(row)][toLeft];
      toLeft--;
    }
    let up = row + 1;

    while (up <= 0) {
      currentSum += matrix[Math.abs(up)][column];
      up++;
    }
  } else if (row > 0 && column < 0) {
    row -= 1;
    column += 1;

    while (toRight <= Math.abs(column)) {
      currentSum += matrix[row][toRight];
      toRight++;
    }

    let down = row + 1;

    while (down <= matrix.length - 1) {
      currentSum += matrix[down][Math.abs(column)];
      down++;
    }
  } else if (row < 0 && column < 0) {
    row += 1;
    column += 1;

    toLeft = matrix[0].length - 1;

    while (toLeft >= Math.abs(column)) {
      currentSum += matrix[Math.abs(row)][toLeft];
      toLeft--;
    }

    let down = Math.abs(row) + 1;

    while (down <= matrix.length - 1) {
      currentSum += matrix[down][Math.abs(column)];
      down++;
    }
  }

  if (currentSum > maxSum) {
    maxSum = currentSum;
  }

  i += 2;
}

print(maxSum);