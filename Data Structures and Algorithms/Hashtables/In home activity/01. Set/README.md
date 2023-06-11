<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## DSA - 04. Set

### Definition

**Set** is a non-linear data structure that implements the abstract data srtucture **Set**, usually by using **hash table**.

They have two characteristics:
  1. Elements are unique​
  2. Order is not important. ​

> Why hash tables are good choice for set's implementation?

### Operations

The operations that one may use with the Set are:​

- `add(item)`  →  adds given element to the set  →  **​O(1)**
  - The element is added somewhere, in no order or place
  - If the such element already exists in the set, nothing happens - elements are unique.
- `remove(item)` →  removes element from the set  →  **​O(1)**
- `contains(item)`  →  determines whether the element is in the set  →  ​**​O(1)**
- `size()`  →  return the current number of items​  →  **​O(n)**


> Think why these operations have these complexities?

### Implementation & Testing

Sets were introduced with ES6 in javascript. Let's get familiar with their interface.

1. Creating a set

    ```js
    const setFromIterable = new Set(it);
    const setEmpty = new Set();
    ```

    **Parameter**: 
    it - It is an iterable object whose all elements are 
    added to the new set created, 
    If the parameter is not specified or null is passed 
    then a new set created is empty.

    **Returns**:
    A new set object

2. Get the size
   Use the `size` property of the set. It returns the number of elements (like .length for arrays)

   ```js
    console.log('Size: ' + set.size);
   ```

3. Add element

    ```js
      set.add(1);
      set.add(2);
      set.add(3);
    ```

    **Parameter**:
    val - It is a value to be added to the set.

    **Returns**: 
    The set object

    > What happens if we add an element that is already added?

    ```js
      set.add(1);
      set.add(2);
      set.add(3);

      console.log('Size: ' + set.size);
      set.add(1);
      console.log('Size: ' + set.size); // ?
    ```

4. Delete element

    ```js
      console.log('Deleted 2: ' + set.delete(2)); // true
      console.log('Deleted 2: ' + set.delete(2)); // false
    ```
    
    **Parameter**:
    val - It is a value to be deleted from the set.

    **Returns**: 
    true if the value is successfully deleted from the set else returns false.

5. Contains element

    ```js
      console.log('Contains 3: ' + set.has(3));
      console.log('Contains 5: ' + set.has(5));
    ```

    **Parameter**:
    val - The value to be searched in the Set

    **Returns**: 
    True if the value is present else it returns false.

6. Sets are iterable objects

    ```js
      // 1. can used inside for-of
      for (const v of set) {
          console.log(v);
      }
      // 2. can be spread with ... operator
      const asArray = [...set];
    ```

    > Do you remember how we made our lists iterable?

7. Array higher-order-functions and Sets

    ```js
      // 1. sets support .forEach()
      set.forEach(x => console.log(x));

        // 2. no support for .map(), .filter(), or .reduce()
        // this will throw and error: set.reduce((s, e) => s + e);

        // However, you can copy to array first:
      const sum = [...set].reduce((s, e) => s + e); 
      const even = [...set].filter(e => e % 2 === 0);
      const formatted = [...set].map((e, i) => `At pos ${i+1}: ${e}`);
    ```

### Tasks

1. Check if all elements are unique
   We can use set to implement function that checks whether the elements of some iterable collection are unique. The idea here is that set elements are always unique, so if we create set over the iterable and its size is the same as the initial collection - hooray the collection's elements are all unique.

    ```js
      const areAllElementsUnique = iterable => {
        const asSet = new Set(iterable);

        return asSet.size === iterable.length;
      }

      console.log(areAllElementsUnique('telerik'));
      console.log(areAllElementsUnique('agnerik'));

      // works for arrays, too
      console.log(areAllElementsUnique([1, 2, 3, 4]));
      console.log(areAllElementsUnique([1, 2, 3, 3]));
    ```

2. Remove duplicates
   Having the previous thoughts in mind - the set we created over the iterable is actually all unique elements of it. Hence the result of removing the duplicates.

   ```js
    const distinct = iterable => {
        const asSet = new Set(iterable);

        // back to array
        return [...asSet];
    }

    const uniqueChars = distinct('abbbc').join('');      // 'abc'
    const uniqueNumbers = distinct([1, 2, 3, 3, 4, 1]);  // [ 1, 2, 3, 4 ]
   ```
3. Union of two sets
   > What will happen with elements that present in both sets?

   > In what order will elements be added? Does it matter which set is the first and which is the second?

   ```js
    const union = (first, second) => new Set([...first, ...second]);

    const union1 = union(new Set('abc'), new Set('bce'));             // { 'a', 'b', 'c', 'e' }
    const union2 = union(new Set('abc'), new Set('def'));             // { 'a', 'b', 'c', 'd', 'e', 'f' }
    const union3 = union(new Set([1, 5, 9]), new Set([3, 5, 8]));     // { 1, 5, 9, 3, 8 }
   ```
4. Intersection of two sets
   We need to get the elements that exist in both sets and create new one with them. The idea here is to traverse (good thing set is iterable) over the one set and if the second has the element, add it to the result.

   ```js
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
   ``` 
5. Difference of Sets
   The difference of two sets is the set containing elements that are in the first set, but not in the second set. 

   Let's find the difference of [1, 3, 5, 7, 9] and [2, 3, 4, 6].

   It would be nice to have `filter` function here, right? Fortuntely we can use destructuring of set to get an array and use its filter method.

   Did you implemented it in some similar manner to:

   ```js
    const diff = (s1, s2) => [...s1].filter(x => ![...s2].includes(x));

    const s1 = new Set([1, 3, 5, 7, 9]);
    const s2 = new Set([2, 3, 4, 6]);

    console.log(diff(s1, s2));
   ```

> Did you research the `Symmetric` Difference of Sets? Can you implemented it?
