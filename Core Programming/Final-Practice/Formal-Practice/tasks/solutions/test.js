const udri = function (data) {
    // your code starts here
    return (array /* always array */)  => {
       return array.reduce((acc, currEl) => {
        if(data(currEl) === 1) {
          acc.push(currEl+1);
        } else if(data(currEl) === 2) {
          acc.push({name: currEl});
        } else {
          acc.push(currEl.map(x => x**2));
        }
  
        return acc;
      }, []);
    };
}

const dataFn = x => {
    if (Number(x) === x) {
      return 1;
    } else if (String(x) === x) {
      return 2;
    }
  
    return 3;
  };
  
  const mapFn = udri(dataFn); // typeof mapFn = 'function'
  
  const input = [1, 'John', [1, 2, 3]];
  
  const output = mapFn(input);
  
  console.log(output); // [ 2, { name: 'John' }, [ 1, 4, 9 ] ]