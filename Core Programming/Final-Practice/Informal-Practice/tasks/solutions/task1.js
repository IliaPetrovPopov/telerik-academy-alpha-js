// Reduced matrix transposition
export default function (data) {
  // your code starts here 
  return data.reduce(( acc, currV, index ) => {
    currV.reduce(( subAcc, subV, subIndex) => {
      if( index === 0 ) {
        acc.push([subV / data[index].reduce((acc1, value) => acc1 + value)]);
      } else {
        acc[subIndex].push(subV / data[index].reduce((acc1, value) => acc1 + value));
      }
      return subAcc;
    }, 0);

    return acc;
  }, []);
  // your code ends here
}
