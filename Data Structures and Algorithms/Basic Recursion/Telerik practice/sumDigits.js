let input = ["49"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const numToSum = +gets();

function countOccurs(num) {
  if (num / 10 < 1) {
    return num;
  }

  const lastDigit = num % 10;
  return countOccurs(Math.floor(num / 10)) + lastDigit;
}

print(countOccurs(numToSum));
