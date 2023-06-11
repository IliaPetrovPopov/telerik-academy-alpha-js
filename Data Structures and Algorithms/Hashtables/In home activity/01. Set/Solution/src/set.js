const set = new Set();

// .add(element) method - adds an element; 
set.add(1);
set.add(2);
set.add(3);

// no effect if the element exists
set.add(1);
set.add(2);

// .size property - returns the number of elements (like .length for arrays)
console.log('Size: ' + set.size);

// .delete() method - removes an element. Returns true if something was deleted.
console.log('Deleted 2: ' + set.delete(2)); // true
console.log('Deleted 2: ' + set.delete(2)); // false

// we have only two elements after we removed the '2'
console.log('Size: ' + set.size);

// .has(element)
console.log('Contains 3: ' + set.has(3));
console.log('Contains 5: ' + set.has(5));

// sets are iterable: 
   // 1. can used inside for-of
for (const v of set) {
    console.log(v);
}
   // 2. can be spread with ... operator
const asArray = [...set];

// Array higher-order-functions and Sets
   // 1. sets support .forEach()
set.forEach(x => console.log(x));

   // 2. no support for .map(), .filter(), or .reduce()
   // this will throw and error: set.reduce((s, e) => s + e);

   // However, you can copy to array first:
const sum = [...set].reduce((s, e) => s + e); 
const even = [...set].filter(e => e % 2 === 0);
const formatted = [...set].map((e, i) => `At pos ${i+1}: ${e}`);
