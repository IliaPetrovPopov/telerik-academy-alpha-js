let matrix = [];

let square = 4;
let reverseDiagonal = []

for(let i=0; i < square; i++) {
    matrix[i] = [];
    for(let j = 0; j < square; j++) {
        matrix[i][j] = String.fromCharCode(97 + j + (i * 3) + i);

        if( i === j ) {
            console.log(matrix[i][j]);
        }

        if( square - 1 - i === j ) {
            reverseDiagonal.push(matrix[i][square - 1 - i])
        }
    }
}