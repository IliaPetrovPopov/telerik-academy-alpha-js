<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## DSA - 05. Map

### Definition

**Map** is a non-linear data structure that implements the abstract data srtucture **Associate Array**, usually by using **hash table** or **binary trees**.

Map is a collection of elements where each element is stored as a key-value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key-value pair in the same order as inserted.

Map allows values to be found by user-defined unique keys​.

> Why hash tables are good choice for map's implementation?

### Operations

The operations that one may use with the Map are:​

- `add(key, value)`  →  adds given key-value pair to the map.  →  **​O(1)**
  - The key must be unique
- `remove(key)` →  removes element with specified key from the map  →  **​O(1)**
- `update(key, newValue)`  →  updates the value of element with specified key  →  ​**​O(1)**
- `get(key)`  →  returns the value associated with the key​  →  **​O(1)**


> Think why these operations have these complexities?

### Implementation & Testing

Maps were introduced with ES6 in javascript. Let's get familiar with their interface.

1. Creating a map

    ```js
    const mapFromIterable = new Map(it);
    const mapEmpty = new Map();
    ```

    **Parameter**: 
    it - It is any iterable object whose values are stored as 
    key-value pair, if the parameter is not specified then a new map is created is empty

    **Returns**:
    A new map object

2. Get the size
   Use the `size` property of the map. It returns the number of elements (like .length for arrays)

   ```js
    console.log('Size: ' + map.size);
   ```

3. Add element

    ```js
      map.set('Sofia', 1500000);
      map.set('Varna', 200000);
      map.set('Burgas', 70000);
    ```

    **Parameter**:
    val - It is a value to be added to the set.

    **Returns**: 
    The set object

    > What happens if we add an element with that key already exists?

    ```js
      map.set('Sofia', 1500000);
      map.set('Varna', 200000);
      map.set('Burgas', 70000);

      console.log([...map]);
      map.set('Burgas', 70001);
      console.log([...map]); // ?
    ```

4. Delete element

    ```js
      console.log(map.delete('Burgas')); // true
      console.log(map.delete('Sliven')); // false
    ```
    
    **Parameters**:
    k - Key which is to be deleted from the map 

    **Returns**:
    true if the value is found and deleted from the map otherwise, it returns false

5. Contains element

    ```js
      console.log('Sofia exists? ' + map.has('Sofia'));
      console.log('Burgas exists? ' + map.has('Burgas'));
    ```

    **Parameters**:
    k - Key of the element to checked 

    **Returns**:
    true if the element with the specified key is present or else returns false.

6. Get value by key

    ```js
      console.log('Population of Sofia? ' + map.get('Sofia'));
      console.log('Population of does not exist? ' + map.get('does not exist'));
    ```

    **Parameters**:
    k - Key, whose value is to be returned

    **Returns**:
    The value associated with the key, if it is present in Map, otherwise returns undefined

7. Maps are iterable objects

    ```js
      // 1. can used inside for-of
      for (const [key,value] of map) {
          const output = `${key} population: ${value}`
          console.log(output);
      }
      // 2. can be spread with ... operator
      const asArray = [...map];
    ```

8. Array higher-order-functions and Sets

    ```js
      // 1. maps support .forEach()
      map.forEach(x => console.log(x));

      // 2. no support for .map(), .filter(), or .reduce()
      // this will throw and error: map.reduce((s, e) => s + e);

      // However, you can work with map keys:
      console.log();
      const sum = [...map.keys()].reduce((s, k) => s + map.get(k), 0);
      console.log(sum);
    ```

### Tasks

1. Counting occurrences of specific element in collection
   We can use map to implement function that counts how many times each element is presented in a collection. The idea here is to use each element as key and its occurences as values. We will get use of the fact that set is updating the element and it's doing it fast.

    ```js
      const countOccurrences = array => {
          const map = new Map();

          for (const element of array) {
              const count = map.get(element) || 0;
              map.set(element, count + 1);
          }

          return map;
      }

      const occurrences = countOccurrences(['js', 'c#', 'js', 'c#', 'c++']);
    ```

2. Grouping by key
   Using similar technique we can group a collection of objects by some of its properties. We will use the property we want to group by as a key of our map and set values all objects (or some parts of them) that have similar key.

      1. Let's consider this array:

          ```js
            const cities = [
                { country: 'BG', city: 'Sofia' },
                { country: 'UK', city: 'London' },
                { country: 'UK', city: 'Manchester' },
                { country: 'BG', city: 'Plovdiv' },
                { country: 'US', city: 'Chicago' },
            ];
          ```

      2. We would like to know how many cities we have per each country. This means we want to group by `coutry` property.
      3. Our function will need to know how to select key and how to select values. This means it's signature should look like this:

          ```js
            const groupBy = (
              data,
              keySelector,
              valueSelector
          ) => {...}
          ```

      4. Let's think about values - for solving this particular problem we'll need just the city name. What if we had the postal code and wanted this information as well? At some cases we will just group the whole objects. We can set this as our default `valueSelector` - function that just return the object itself.

          ```js
            const groupBy = (
              data,
              keySelector,
              valueSelector = (x => x)
          ) => {...}
          ```
      
      5. Now we'll create an empty map and start filling it by traversing the data we got. We will get the key from each element using the `keySelector` function and its corresponding value in similar manner - by using the `valueSelector`
      6. For each key, our map has an array of items (why?)
         1. If this is the first time we get this key, we are adding it to the map and initialize the array. 
         2. Now we can safely get the array value for the current key and add the new value to it.

          ```js
            const map = new Map();

            for (const obj of data) {
                const key = keySelector(obj);
                const value = valueSelector(obj);

                if (!map.has(key)) {
                    map.set(key, []);
                }

                map.get(key).push(value);
            }
          ```

          > We talked that using `set` method we update map's value for specified key, if the latter is already in the map. Why we just `push` in this code? How does this work?

          fdsfdsf

     7. Now we only have to return the map

        ```js
          return map;
        ```
          
      1. Let's test it out
      
          ```js
            // just create groups of objects:
            const byCountry = groupBy(cities, c => c.country);

            // create groups with specified values:
            const byCountry2 = groupBy(cities, c => c.country, c => c.city);
          ```

   > Modify the `countOccurrences` method to count occurences of specified key:
      ```js
        const countOccurrences = (
          data,
          keySelector) => {...}
      ```
