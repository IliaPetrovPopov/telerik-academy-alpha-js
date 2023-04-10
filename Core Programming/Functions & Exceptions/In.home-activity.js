function subtract(num1, num2) {
    return num1 - num2;
  }
  
function multiply(num1, num2) {
    return num1 * num2;
  }
  
function divide(num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  }

function add(...arguments) {
    for (let item of arguments) {
     if(typeof item !== 'number') {
        throw new Error(`${item} is not a number`);
    }

    let sum = arguments.reduce((acc, currVal) => acc + currVal);
    return sum;
    }
}

// try {
//     add('Telerik', 1, 2);
// } catch (error) {
//     console.log(error);
// }

const extend = (...arguments) => {
        for (let item of arguments) {
         if(typeof item !== 'number') {
            throw new Error(`${item} is not a number`);
        }
    }
}

function additional(a, b, ...operations){
    let array = [];
    for(let operation of operations) {
        array.push(operation(a, b));
    }

    return array;
} 


let total = additional(1, 2, add, subtract, multiply);

console.log(additional(1, 2, add, subtract, multiply));