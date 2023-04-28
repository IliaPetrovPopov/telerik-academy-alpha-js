// People with cities and population
/**
 * 
 * @param {{cities: Array<{ id: number, name: string }>, people: Array<{ name: string, city: number }>}} data 
 */
export default function (data) {
  // your code starts here
  const result = data.people.reduce((acc, person) => {

  const findTown = data.cities.find(city => city.id === person.city);

  const population = data.people.filter(pId => pId.city === findTown.id).length;
    
    acc.push({
      name: person.name,
      city: {
        name: findTown.name,
        population: population,
      }
    })

    return acc;
  }, [])

  return result;
  // your code ends here
}