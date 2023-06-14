<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Recursion

### 1. Description

In this exercise, we are going to practice classic problems involving recursion. Try your best by following the guides, debugging your implementation, and if all else fails, consulting with the solutions. These tasks are common interview questions and you are **very likely to encounter them again**.

### 2. Project information

- Requires node.js version >= 14
- Running:
  - `npm run reverse` - runs the **Reverse Array** task
  - `npm run deepcopy` - runs the **Deep Copy** task
- The task setup is already done for you, **you must write code only in the provided function**.
- Consult with the @jsdoc above the function to get a better idea about the input parameters and the expected return value
- If still struggling, consult with the tests. They are located in the same file.

### 3. Tasks

#### 1. Reverse Array

Implement the `reverse` function **recursively**:

```js
const reverse = (array) => {
  // your implementation:
};
```

The function takes an array and reverses its elements:

```
array: [1,2,3]
returns: [3,2,1]

array: [1]
returns: [1]
```

- Rule 1: A reversed array of **n** elements (5 for example) is an reversed array of **n-1** elements (4) with the first element attached at the back.
- Rule 2: A reversed array of 1 or 0 elements is the same array.

#### 2. Deep Copy

Implement the `deepCopy` function **recursively**:

```js
const deepCopy = (object) => {
  // your implementation:
};
```

The function takes an object and creates a deep copy of it:

```
object: {
      name: 'Pesho',
      address: {
        street: 'Al Malinov',
        number: 31,
      },
    }
returns: {
      name: 'Pesho',
      address: {
        street: 'Al Malinov',
        number: 31,
      },
    }

object: {}
returns: {}
```

- Rule 1: If the property of the object to copy is of type **object** itself and does not have the value of **null**, apply **deepCopy** to it.
- Rule 2: If the property of the object to copy is not of type **object** itself or it has the value of **null**, copy it directly.
- _Hint:_ [typeof null === 'object'](https://www.google.com/search?rlz=1C1CHBF_enBG808BG808&sxsrf=ALeKk00PKn5ukNamP49dFP2iam4KAweoIQ%3A1597299443044&ei=89o0X5OxAsGqrgS7h7-oAQ&q=typeof+null+in+javascript&oq=typeof+null&gs_lcp=CgZwc3ktYWIQAxgBMgUIABCRAjIHCAAQFBCHAjICCAAyAggAMgIIADICCAAyAggAMgUIABDLATICCAAyAggAOgQIABBHOgcILhAnEJMCOgQIIxAnOgQILhAnOgQIABBDOggILhDHARCjAjoECC4QQzoCCC46BAgAEApQheAlWPTrJWC49SVoAHABeACAAYwBiAGoCJIBAzUuNpgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab)

#### 3. Solve Expression

You are given an expression in the format {number}{operator}({expression}).
The expression will always be valid, you have to calculate it.

|  Input | Output |
|---|---|
| 45+(55) | 100 | 
| 45+(24*(12+3)) | 405 |  
| 12*(35-(46*(5+15))) | -10620 | 