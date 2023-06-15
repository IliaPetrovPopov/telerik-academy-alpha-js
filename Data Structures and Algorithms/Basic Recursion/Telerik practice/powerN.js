let input = ['3' , '1'];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const num = +gets();
const pow = +gets();

function powerN(x, n) {
    if(n <= 1) {
        return x;
    } 

    return x * powerN(x, n - 1);
}

print(powerN(num, pow));