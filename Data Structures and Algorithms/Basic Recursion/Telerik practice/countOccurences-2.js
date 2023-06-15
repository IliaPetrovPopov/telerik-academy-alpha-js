let input = ["0"];

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
    return counter;
  }

  const lastDigit = num % 10;
  countOccurs(Math.floor(num / 10));

  if (lastDigit === 8) {
    let nextToLastDigit = Math.floor(num / 10) % 10;
    return nextToLastDigit === 8 ? (counter += 2) : (counter += 1);
  } else {
    return counter;
  }
}

print(countOccurs(numToSum));
