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
        if(j % 2 !== 0) {
            matrix += j * size + size - i + " ";
        } else {
            matrix += 1 + (j * size) + i + " ";
        }
    }

    print(matrix);
}