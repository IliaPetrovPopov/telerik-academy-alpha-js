let input = ["3"];

let print = this.print || console.log;
let gets =
this.gets ||
(
    (arr, index) => () =>
      arr[index++]
)(input, 0);

let size = Number(gets());

for (let i = 0; i < size; i++) {
    let matrix = '';
    for (let j = 0; j < size; j++) {
        matrix += i + (j * size) + 1 + " ";
    }

    print(matrix);
} 