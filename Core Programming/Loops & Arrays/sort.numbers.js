let input = ["2 3 1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let nums = gets().split(" ").map(Number).sort((a, b) => a - b);
let list = '';
for (let i = 0; i < nums.length; i++) {
    list += nums[i] + " ";
}
  
print(list);