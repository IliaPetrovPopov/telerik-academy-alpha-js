// Grouping by property
export default function (data) {
  // your code starts here
  const name = data.dataProp;
  const propToFilterBy = data.groupByProp;

  return data[name].reduce((acc, currentEl) => {
    const currentVal = currentEl[propToFilterBy];

    if( !acc[currentVal] ) {
      acc[currentVal] = [];
    }

    acc[currentVal].push(currentEl);
    return acc;
  }, {});
  // your code ends here
}
