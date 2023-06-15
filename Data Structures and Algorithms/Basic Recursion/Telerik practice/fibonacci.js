let input = ["9"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const nums = +gets();
const memoization = {}

function fibonacci(x) {
      if (x <= 1) {
        return x;
      }
  
      if (memoization[x]) {
        return memoization[x];
      }
  
      memoization[x] = fibonacci(x - 1) + fibonacci(x - 2);
      return memoization[x];
    
};

print(fibonacci(nums));