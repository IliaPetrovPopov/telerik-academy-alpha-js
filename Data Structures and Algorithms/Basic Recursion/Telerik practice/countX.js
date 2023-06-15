let input = ["xxdilonxx"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const strToIterate = gets();

const countingX = function (string) {
  let count = 0;

  const counter = function (str) {
    if (str.length === 0) {
      return count;
    }

    let firstLetter = str.slice(0, 1);
    let restOfStr = str.substring(1);

    counter(restOfStr);

    return firstLetter === "x" ? (count += 1) : count;
  };

  return counter(string);
};

print(countingX(strToIterate));
