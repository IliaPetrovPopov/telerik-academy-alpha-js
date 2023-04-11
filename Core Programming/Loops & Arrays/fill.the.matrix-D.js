let input = ["6"];

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
  matrix[i] = [];
  for (let j = 0; j < size; j++) {
    matrix[i][j] = 0;
  }
}

let counter = 1;
let row = 0;
let column = 0;

for (let count = 0; count < size / 2; count++) {
  
  for (let i = row; i < size - row; i++) {

    matrix[i][column] = counter;
    counter++;
  }

  for (let i = row + 1; i < size - column; i++) {

    matrix[size - 1 - row][i] = counter;
    counter++;
  }

  for (let i = size - 2 - row; i >= 0 + row; i--) {

    matrix[i][size - 1 - column] = counter;
    counter++;
  }

  for (let i = size - 2 - column; i > column; i--) {

    matrix[row][i] = counter;
    counter++;
  }
  row++;
  column++;
}

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    row += matrix[i][j] + " ";
  }

  print(row);
}