const people = [1,15,2,8,31,5,9];

const isPrime = function(num) {

    for ( let i = 2; i <= Math.sqrt(num); i++) {
        if ( num % i === 0) {
            return false;
        }
    }

    return num > 1;
}
const start = people.filter(p => isPrime(p));

const list = ['cat', 'dog', 'elephant', 'cucumber'];

const longerThan5Symb = list.filter(str => str.length > 5);

const list1 = ['cat', 'dog', 'elephant', 'duck', 'cucumber'];

const includesSymbol = list1.filter(curr => curr.includes('uc'));

console.log(includesSymbol);