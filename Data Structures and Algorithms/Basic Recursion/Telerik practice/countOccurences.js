let input = ["71415677412"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const numToSum = +gets();
let counter = 0;

function countOccurs(num) {
  if (num === 0) {
    return;
  }

  const lastDigit = num % 10;
  countOccurs(Math.floor(num / 10));

  return lastDigit === 7 ? (counter += 1) : counter;
}

print(countOccurs(numToSum));
