let input = ["2"];

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

let i = size - 1;
let j = 0;

while (counter <= size * size) {
  if (i > j) {
    for (let cI = i; cI < size; cI++) {
      matrix[cI][j] = counter;
      counter++;
      j++;
    }

    j = 0;
    i--;
  } else if (i === j) {
    for (let cI = i; cI < size; cI++) {
      matrix[cI][j] = counter;
      counter++;
      j++;
    }

    j = 1;
  } else if (i < j) {
    for (let cJ = j; cJ < size; cJ++) {
      matrix[i][cJ] = counter;
      counter++;
      i++;
    }

    i = 0;
    j++;
  }
}


for(let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += matrix[i][j] + " ";
    }

    print(row);
}