export default function (data) {
  // your code starts here
      const result = data.reduce((acc, currObj) => {
    let currentObject = {};

    currObj.usable.map((element) => {
      currentObject[element] = currObj[element];
    });

    acc.push(currentObject);
    return acc;
  }, []);

  return result;
  // your code ends here
}