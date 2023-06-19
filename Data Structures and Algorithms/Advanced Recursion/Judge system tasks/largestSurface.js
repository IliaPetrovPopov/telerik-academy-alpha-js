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
  
  function largestSurface(matrix, visited, row, col, value) {
      if (row < 0  || col < 0  || row >= matrix.length  || col >= matrix[0].length  || visited[row][col] || matrix[row][col] !== value) {
        return 0;
      }
  
      visited[row][col] = true;
  
      let size = 1;
      size += largestSurface(matrix, visited, row - 1, col, value);
      size += largestSurface(matrix, visited, row + 1, col, value); 
      size += largestSurface(matrix, visited, row, col - 1, value); 
      size += largestSurface(matrix, visited, row, col + 1, value); 
  
      return size;
    }
  
    function findLargestArea(matrix) {
      const n = matrix.length;
      const m = matrix[0].length;
  
      const visited = Array.from({ length: n }, () => Array(m).fill(false));
  
      let largestArea = 0;
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
          if (!visited[row][col]) {
            const value = matrix[row][col];
            const area = largestSurface(matrix, visited, row, col, value);
            largestArea = Math.max(largestArea, area);
          }
        }
      }
  
      return largestArea;
    }
  
    const largestArea = findLargestArea(matrix);
    console.log(largestArea);