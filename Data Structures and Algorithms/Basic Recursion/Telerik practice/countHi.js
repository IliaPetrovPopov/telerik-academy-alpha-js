let input = ["xxhixx"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const strToIterate = gets();
let counter = 0;

function countX(str) {
  if (str.length === 0) {
    return counter;
  }

  let firstLetter = str.slice(0, 1);
  let restOfStr = str.substring(1);

  countingX(restOfStr);

  let nextLetter = str.slice(1, 2);
  return firstLetter === "h" && nextLetter === "i" ? (counter += 1) : counter;
}

print(countingX(strToIterate));
