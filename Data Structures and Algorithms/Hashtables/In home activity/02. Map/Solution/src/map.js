
const map = new Map();

// add
map.set('Sofia', 1500000);
map.set('Varna', 200000);
map.set('Burgas', 70000);

// size
console.log('Size: ' + map.size);
console.log([...map]);

// update
map.set('Burgas', 70001);
console.log([...map]);

// delete
console.log(map.delete('Burgas')); // true
console.log(map.delete('Sliven')); // false

// check for existence
console.log('Sofia exists? ' + map.has('Sofia'));
console.log('Burgas exists? ' + map.has('Burgas'));

// get value
console.log('Population of Sofia? ' + map.get('Sofia'));
console.log('Population of does not exist? ' + map.get('does not exist'));

// iterate:
for (const [key,value] of map) {
    const output = `${key} population: ${value}`
    console.log(output);
}

// 1. maps support .forEach()
console.log("**********");
map.forEach(x => console.log(x));

// 2. no support for .map(), .filter(), or .reduce()
// this will throw and error: map.reduce((s, e) => s + e);

// However, you can work with map keys:
console.log();
const sum = [...map.keys()].reduce((s, k) => s + map.get(k), 0);
console.log(sum);

