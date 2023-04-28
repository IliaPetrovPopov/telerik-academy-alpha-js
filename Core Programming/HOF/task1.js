export default function (data) {
  // your code starts here

    return data.map(person => {
        const modification = person.usable.reduce((acc, currentElement) => {
            acc[currentElement] = person[currentElement];

            return acc;
        }, {})

        return modification;
    })
  // your code ends here
}

