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

  const findStartingPt = (matrix) => {
    for (let i = 1; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          return { row: i, column: j };
        }
      }
    }
  };
  
  const collectCoins = (maze) => {
  
    maze.unshift(Array(maze[0].length).fill(0));
    maze.push(Array(maze[0].length).fill(0));
  
    let scroogeCoins = 0;
    let moves = 0;
  
    const startingPt = findStartingPt(maze, 0);
  
    let x = startingPt.column;
    let y = startingPt.row;

    const moveTo = (maze, y, x) => {
      // Out of the borders
      if (x < 0 || x > maze[0].length - 1 || y < 0 || y > maze.length - 1 || (!maze[y][x] && moves)) {
        return null;
      }

      // Stuck and need to exit
      if (!maze[y][x-1] && !maze[y][x+1] && !maze[y-1][x] && !maze[y+1][x]) {
        --maze[y][x];
        ++scroogeCoins;
        return scroogeCoins;
      } 
  
      if(moves > 0 && maze[y][x]) {
        --maze[y][x];
        ++scroogeCoins;
      }
  
      moves++;
  
      // Main Movement
      if (maze[y][x-1] > (maze[y][x+1] || true) && maze[y][x-1] > (maze[y-1][x] || true) && maze[y][x-1] > (maze[y+1][x] || true)) {
        return moveTo(maze, y, x-1);
  
      } else if (maze[y][x+1] > (maze[y][x-1] || true) && maze[y][x+1] > (maze[y-1][x] || true) && maze[y][x+1] > (maze[y+1][x] || true)) {
        return moveTo(maze, y, x+1);
  
      } else if (maze[y-1][x] > (maze[y][x+1] || true) && maze[y-1][x] > (maze[y][x-1] || true) && maze[y-1][x] > (maze[y+1][x] || true)) {
        return moveTo(maze, y-1, x);
  
      } else if (maze[y+1][x] > (maze[y][x+1] || true) && maze[y+1][x] > (maze[y-1][x] || true) && maze[y+1][x] > (maze[y][x-1] || true)) {
        return moveTo(maze, y+1, x);
  
      } else {

        const maxVal = Math.max(maze[y][x-1] || 0, maze[y][x+1] || 0, maze[y-1][x] || 0, maze[y+1][x] || 0);
        let leftMax = maze[y][x-1] === maxVal;
        let rightMax = maze[y][x+1] === maxVal;
        let upMax = maze[y-1][x] === maxVal;
        let downMax = maze[y+1][x] === maxVal;

        return (leftMax ? moveTo(maze, y, x - 1) : false||
          rightMax ? moveTo(maze, y, x + 1) : false||
          upMax ? moveTo(maze, y - 1, x) : false|| 
          downMax ? moveTo(maze, y + 1, x) : false);
          }
      }
  
    return moveTo(maze, y, x);
};
  
  const [labRows, labCols] = gets().split(" ").map(Number);
  const labyrinth = [];
  
  for (let i = 0; i < labRows; i++) {
    labyrinth.push(gets().split(" ").map(Number));
  }
  
  print(collectCoins(labyrinth));