let input = ["abbCCCcddBBBxx"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let stringToCheck = gets().split("");
let max = 0;
let current = 1;

let startIndex = 0;
let endIndex = 0;
let longestString = "";

for (let i = 0; i < stringToCheck.length; i++) {
  if (current === 1) {
    startIndex = i;
  }

  if (stringToCheck[i] === stringToCheck[i + 1]) {
    current++;
    continue;
  } else {
    if (current > max) {
      let copy = "";
      max = current;
      endIndex = i;
      copy = stringToCheck.slice(startIndex, endIndex + 1);
      longestString = copy.join("");
    }
  }

  current = 1;
}

print(longestString);