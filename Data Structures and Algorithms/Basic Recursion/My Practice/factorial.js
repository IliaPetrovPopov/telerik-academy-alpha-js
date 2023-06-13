// Factorial: Write a recursive function to calculate 
// the factorial of a given positive integer n.

// Example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120


function factorial(n) {
    if(n <= 1) {
        return n;
    }

    return n * factorial(n - 1);
} 

const x = 5;
console.log(factorial(x));