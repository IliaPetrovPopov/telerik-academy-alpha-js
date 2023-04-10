let input = ["1 6"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

  let [rows, columns] = gets().split(" ").map(Number);
  let matrix = [];
  
  for(let i = 0; i < rows; i++) {
      matrix[i] = []
      for(let j = 0; j < columns; j++) {
          matrix[i][j] = 2n ** BigInt(i + j);
      }
  }
  
  let i = 1n;
  let j = 1n;
  
  let moveI = 1n;
  let moveJ = 1n;
  
  let sum = matrix[0n][0n];
  
  let direction = "right";
  let up = false;
  let down = true;
  
  while(true) {
    if((rows === 1 && columns === 1) || rows === 1 || columns === 1) {
      break;
    } else {  
      sum += matrix[i][j];
    }
    
    if ((i === BigInt(matrix.length) - 1n && j === BigInt(matrix[0].length) - 1n) || (i === BigInt(matrix.length) - 1n && j === 0n) || (i === 0n && j === BigInt(matrix[0].length) - 1n) || (i === 0n && j === 0n)) {
      break;
    }
  
    if (i === BigInt(matrix.length) - 1n) {
      if(direction === "right") {
          moveI = -1n;
          moveJ = 1n;
      } else {
          moveI = -1n;
          moveJ = -1n;
      }
  
      down = false;
      up = true;
  
    } else if (i === 0n) {
      if(direction === "right") {
          moveI = 1n;
          moveJ = 1n;
      } else {
          moveI = 1n;
          moveJ = -1n;
      }
  
      down = true;
      up = false;
    } else if (j === BigInt(matrix[0].length) - 1n) {
      if(up) {
          moveI = -1n;
          moveJ = -1n;
      } else if(down) {
          moveI = 1n;
          moveJ = -1n;
      }   
  
      direction = "left";
      
    } else if (j === 0n) {
      if(up) {
          moveI = -1n;
          moveJ = 1n;
      } else if(down) {
          moveI = 1n;
          moveJ = 1n;
      }   
  
      direction = "right";
    }
  
    i += moveI;
    j += moveJ;
  }

print(sum);