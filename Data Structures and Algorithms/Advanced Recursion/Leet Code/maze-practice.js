let input = ["5 6",
"1 3 2 2 2 4",
"3 3 3 2 4 4",
"4 3 1 2 3 3",
"4 3 1 3 3 1",
"4 3 3 3 1 1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const data = gets(); 
const [n, m] = data.split(' ').map(Number);
const matrix = [];

for (let i = 0; i < n; i++) {
  matrix.push(gets().split(' ').map(Number));
}

const largestSurface = () => {
  let max = 0;
  const values = Array.from({ length: n }, () => Array(m).fill(false));

  const mazeSolver = (x, y, matrix, visitedCells, currCell) => {
    if( x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length || visitedCells[x][y] || matrix[x][y] !== currCell) {
      return 0;
    }

    visitedCells[x][y] = true;

    let size = 1;

    size += mazeSolver(x+1, y, matrix, visitedCells, currCell);
    size += mazeSolver(x-1, y, matrix, visitedCells, currCell);
    size += mazeSolver(x, y+1, matrix, visitedCells, currCell);
    size += mazeSolver(x, y-1, matrix, visitedCells, currCell);

    return size;
  }

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(!values[i][j]) {
        const currentVal = matrix[i][j];
        const currentSize = mazeSolver(i, j, matrix, values, currentVal);
        max = Math.max(max, currentSize);
      }
    }
  }

  return max;
}

console.log(largestSurface());
