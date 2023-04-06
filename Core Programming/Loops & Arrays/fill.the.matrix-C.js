let input = ["3"];

let print = this.print || console.log;
let gets =
this.gets ||
(
    (arr, index) => () =>
      arr[index++]
)(input, 0);

let size = Number(gets());

for (let row = 0; row < size; row++) {
    let matrix = '';

    for (let col = 0; col < size; col++) {
        if (row > col) {
            if (col % 2 !== 0) {
                matrix += size + " ";
            } else {   
                matrix += size - row + " ";
            }
        }

        if (row === col) {
            matrix += size + size - 2 + col + " ";
        }

        if (row < col) {
            if (col % 2 !== 0) {
                matrix += size + (size + size - 2) + " ";
            } else {
                matrix += Math.pow(size, 2) - row + " ";
            }
        }
    }

    print(matrix);
}