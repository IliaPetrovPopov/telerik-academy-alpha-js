const getName = person => person.name;
const uppercase = string => string.toUpperCase();
const get3Characters = string => string.substring(0, 3)

const pipe = (...fns) => (person) => fns.reduce((p, fn) => fn(p), person);
console.log(pipe(getName, uppercase, get3Characters)({ name: 'Pesho' }));