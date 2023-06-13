// Power function: Write a recursive function to compute the power of a number.

// Example: power(2, 3) = 2^3 = 8

const pow = (num, power) => {
    if(power === 1) {
        return num;
    }

    return num * pow(num, power - 1);
}

console.log(pow(2, 3));