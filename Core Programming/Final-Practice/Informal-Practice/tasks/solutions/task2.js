// Function spy
export default function (data /* always a function */) {
  // your code starts here
  const output = [];

  return (param) => {
    const value = data(param);

      if( !output.includes(value) ) {
        output.push(value);
        return { calls: 1, value: value};
      } else {
        output.push(value);
        return { calls: output.filter(localV => localV === value).length, value: value}
      }
    }
    // your code ends here
  }
