// Neighboring cells

/**
 * 
 * @param {Array<number[]>} data
 */
export default function (data /* a matrix */) {
  // your code starts here
  const matrix = [];

  for (let row = 0; row < data.length; row++) {
    matrix[row] = [];
    for (let col = 0; col < data[row].length; col++) {
      let element = 0;

      if ( data.length === 1 && data[0].length === 1 ) {
        matrix[row].push(0);
        return matrix;
      }

      if ( row === 0 ) {
        if ( col === 0 ) {
          matrix[row].push(( element = data[row + 1][col] - data[row][col + 1] ));
          continue;
        } else if ( col === data[row].length - 1 ) {
          matrix[row].push(( element = data[row + 1][col] - data[row][col - 1] ));
          continue;
        } else {
          matrix[row].push(( element = data[row + 1][col] - (data[row][col + 1] + data[row][col - 1]) ));
          continue;
        }
      } else if ( row === data.length - 1 ) {
        if ( col === 0 ) {
          matrix[row].push(( element = data[row - 1][col] - data[row][col + 1] ));
          continue;
        } else if ( col === data[row].length - 1 ) {
          matrix[row].push(( element = data[row - 1][col] - data[row][col - 1] ));
          continue;
        } else {
          matrix[row].push(( element = data[row - 1][col] - (data[row][col - 1] + data[row][col + 1]) ));
          continue;
        }
      } else if ( col === 0 && row > 0 && row < data.length - 1 ) {
        matrix[row].push(( element = data[row - 1][col] + data[row + 1][col] - data[row][col + 1] ));
        continue;
      } else if ( col === data[row].length - 1 && row > 0 && row < data.length - 1 ) {
        matrix[row].push(( element = data[row - 1][col] + data[row + 1][col] - data[row][col - 1] ));
      } else {
        matrix[row].push(( element = data[row - 1][col] + data[row + 1][col] - (data[row][col - 1] + data[row][col + 1]) ));
      }
    }
  }

  return matrix;
}
