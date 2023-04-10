let input = [
  "0",
  "1,2,3,4,5",
  "2 forward 1",
  "2 backwards 1",
  "3 forward 2",
  "3 backwards 2",
  "exit",
];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let start = Number(gets());

let array = gets().split(",").map(Number);
let forwardSum = 0;
let backwardsSum = 0;

while (true) {
  let line = gets();
  if (line === "exit") {
    break;
  }

  let [steps, direction, size] = line.split(" ");
  steps = Number(steps);
  size = Number(size);

  for (let i = 0; i < steps; i++) {
    if (direction === "forward") {
      start = (start + size) % array.length;
      forwardSum += array[start];
    } else {
      start = (start - size + array.length) % array.length;
      
      if (start < 0) {
        start += array.length;
      }
      
      backwardsSum += array[start];
    }
  }
}

print(`Forward: ${forwardSum}`);
print(`Backwards: ${backwardsSum}`);