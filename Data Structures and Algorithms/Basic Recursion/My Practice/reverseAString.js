// Reverse a string: Write a recursive function to reverse a given string.

// Example: reverse_string("Hello") = "olleH"

const reverseString = (string) => {
    if(string.length <= 1) {
        return string;
    }

    const letter = string[0];
    const strAdvance = string.slice(1);

    return reverseString(strAdvance) + letter;
}

console.log(reverseString('Hello'));