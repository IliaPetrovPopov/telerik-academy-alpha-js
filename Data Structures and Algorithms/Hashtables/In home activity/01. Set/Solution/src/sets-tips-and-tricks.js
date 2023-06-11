
// 1. check if all elements are unique

const areAllElementsUnique = iterable => {
  const asSet = new Set(iterable);

  return asSet.size === iterable.length;
}

console.log(areAllElementsUnique('telerik'));
console.log(areAllElementsUnique('agnerik'));

// works for arrays, too
console.log(areAllElementsUnique([1, 2, 3, 4]));
console.log(areAllElementsUnique([1, 2, 3, 3]));


// 2. Remove duplicates

const distinct = iterable => {
  const asSet = new Set(iterable);

  // back to array
  return [...asSet];
}

const uniqueChars = distinct('abbbc').join('');      // 'abc'
const uniqueNumbers = distinct([1, 2, 3, 3, 4, 1]);  // [ 1, 2, 3, 4 ]


// 3. Union:

const union = (first, second) => new Set([...first, ...second]);

const union1 = union(new Set('abc'), new Set('bce'));             // { 'a', 'b', 'c', 'e' }
const union2 = union(new Set('abc'), new Set('def'));             // { 'a', 'b', 'c', 'd', 'e', 'f' }
const union3 = union(new Set([1, 5, 9]), new Set([3, 5, 8]));     // { 1, 5, 9, 3, 8 }


// 4. Intersection:

const intersection = (first, second) => {
  const intersection = new Set();

  for (const element of second) {
    if (first.has(element)) {
      intersection.add(element);
    }
  }

  return intersection;
}

const intersection1 = intersection(new Set('abc'), new Set('bce'));             // { 'b', 'c' }
const intersection2 = intersection(new Set('abc'), new Set('def'));             // {}
const intersection3 = intersection(new Set([1, 5, 9]), new Set([3, 5, 8]));     // { 5 }


// 5. Difference of Sets
const diff = (s1, s2) => [...s1].filter(x => ![...s2].includes(x));

const s1 = new Set([1, 3, 5, 7, 9]);
const s2 = new Set([2, 3, 4, 6]);

console.log(diff(s1, s2));

// 6. Symmetric Difference of Sets - search what it is and implement it yourself
