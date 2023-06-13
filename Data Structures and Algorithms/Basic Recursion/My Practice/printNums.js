// Print numbers: Write a recursive function to print numbers from 1 to n.

// Example: print_numbers(5) prints 1, 2, 3, 4, 5

const printNums = (numbers) => {
    const currentNum = numbers;

    if(currentNum === 1) {
        return currentNum;
    }

    return printNums(numbers - 1) + ',' + ' ' + currentNum;
}

console.log(printNums(10));