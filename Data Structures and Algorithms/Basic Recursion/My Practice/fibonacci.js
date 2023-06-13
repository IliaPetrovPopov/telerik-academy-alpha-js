// Fibonacci sequence: Write a recursive function to
// generate the nth number in the Fibonacci sequence.

// Example: fibonacci(6) = 8 (sequence: 0, 1, 1, 2, 3, 5, 8, ...)

function fibonacci(n) {
    if(n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));