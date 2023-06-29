let input = ["2 4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const [startK, numToStop] = gets().split(' ').map(Number);
const numToFollow = [];

const operations = (startValue, stopNum) => {
    
    let start = startValue;

    let iterator = 1;
    let numForOperations = 0;

    let desiredNum = 0;

    while(true) {

    if(iterator === stopNum) {
      desiredNum = start;
      break;
    }

    const firstOperation = start + 1;
    numToFollow.push(firstOperation);
    ++iterator;

    if(iterator === stopNum) {
      desiredNum = firstOperation;
      break;
    }

    const secondOperation = (2 * start) + 1;
    numToFollow.push(secondOperation);
    ++iterator;

    if(iterator === stopNum) {
      desiredNum = secondOperation; 
      break;
    }

    const thirdOperation = start + 2;
    numToFollow.push(thirdOperation);
    ++iterator;

    if(iterator === stopNum) {
      desiredNum = thirdOperation;
      break;
    }

    start = numToFollow[numForOperations];
    ++numForOperations;
  }

  return desiredNum;
}

print(operations(startK, numToStop));