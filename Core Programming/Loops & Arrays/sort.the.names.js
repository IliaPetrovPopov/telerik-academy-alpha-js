let input = ["Ivan Maria Stoyan Petar Iva"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let nums = gets().split(" ").sort((a, b) => a - b);
let matrix = [];

for (let i = 0; i < nums.length; i++) {
  let element = nums[i].split("").sort().join('');
  matrix.push(element);
}

matrix.sort()
let list = "";

for (let i = 0; i < matrix.length; i++) {
  list += matrix[i] + " ";
}

print(list);