const add = (a, b) => a + b;
 
const decorateWithLogging = func => {
  let counter = 0;
 
  const packedFunction = (a, b) => {
    console.log(`Invoked times: ${++counter}`);
    return func(a, b);
  }
 
  return packedFunction;
};
 
const decoratedAdd = decorateWithLogging(add);
const result = decoratedAdd(1, 2);
 
console.log(result);