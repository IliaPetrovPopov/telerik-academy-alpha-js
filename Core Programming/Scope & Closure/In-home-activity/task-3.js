const add = (a, b) => a + b;
 
const decorateWithCache = func => {
  const cache = {};
 
  const inner = (...args) => {
    const key = args.sort().join(' '); 

    if (!cache[key]) {
      console.log(`-- Caching the result of ${args}`);
 
      cache[key] = func(...args);
    } else {
      console.log(`-- Getting the result of ${args}`);
    }
 
    return cache[key];
  }
 
  return inner;
};
 
const addWithCache = decorateWithCache(add);
console.log(addWithCache(1, 2));
console.log(addWithCache(1, 2));
 
for (let i = 0; i < 1000; i++) {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  console.log(addWithCache(number1, number2));
}