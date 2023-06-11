
// 1. counting occurrences:

const countOccurrences = array => {
    const map = new Map();

    for (const element of array) {
        const count = map.get(element) || 0;
        map.set(element, count + 1);
    }

    return map;
}

const occurrences = countOccurrences(['js', 'c#', 'js', 'c#', 'c++']);


// 2. grouping by key:

const groupBy = (
    data,
    keySelector,
    valueSelector = (x => x)
) => {
    const map = new Map();

    for (const obj of data) {
        const key = keySelector(obj);
        const value = valueSelector(obj);

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(value);
    }

    return map;
}

const cities = [
    { country: 'BG', city: 'Sofia' },
    { country: 'UK', city: 'London' },
    { country: 'UK', city: 'Manchester' },
    { country: 'BG', city: 'Plovdiv' },
    { country: 'US', city: 'Chicago' },
];

// just create groups of objects:
const byCountry = groupBy(cities, c => c.country);

// create groups with specified values:
const byCountry2 = groupBy(cities, c => c.country, c => c.city);

