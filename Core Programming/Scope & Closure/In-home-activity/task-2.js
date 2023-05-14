const createPerson = (name, age, gender) => {
    return {
      name,
      age,
      gender
    };
  };
   
  const add = (a, b) => a + b;
   
  const decorateWithLogging = func => {
    let counter = 0;
   
    const packedFunction = (...args) => {
      console.log(`Invoked times: ${++counter}`);
      return func(...args);
    }
   
    return packedFunction;
  };
   
  const decoratedAdd = decorateWithLogging(add);
  let result = decoratedAdd(1, 2);
   
  console.log(result);
   
  decoratedAdd(10, 20);
   
  const decoratedCreate = decorateWithLogging(createPerson);
  result = decoratedCreate(`John`, 30, `Male`);
   
  console.log(result);