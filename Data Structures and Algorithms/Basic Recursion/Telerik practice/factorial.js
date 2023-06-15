let input = ["1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const factor = +gets();

function factorial(x) {
    if(x <= 1) {
        return 1;
    }

    return x * factorial(x-1);
}

print(factorial(factor));