let input = ["xpi"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const strToIterate = gets();
let finalStr = strToIterate;

function countX(str) {
  if (str.length === 0) {
    return str;
  }

  let firstL = str.slice(0, 1);
  let restOfStr = str.substring(1);

  countX(restOfStr);

  let nextL = str.slice(1, 2);

  return firstL === "p" && nextL === "i" ? finalStr = finalStr.replace("pi", "3.14") : finalStr;
}
print(countX(strToIterate));
