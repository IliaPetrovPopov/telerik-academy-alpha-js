// Special mapping function

/**
 * 
 * @param {(param: any) => 1 | 2 | 3} data 
 */
export default function (data /* a function - data: (param: any) => 1 | 2 | 3 */) {
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
  }
  // your code ends here
}
