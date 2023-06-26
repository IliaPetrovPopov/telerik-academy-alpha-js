<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# DSA - Trees in-home activity

## Tasks

### 1. Sum the values of all nodes in recursive structure

file: `01. sum-nodes.js`

> What is a recursive structure? Can you think of some recursive real-world examples?

Let's review the following recursive structure:

```js
// A recursive structure with branches to iterate over
const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 4,
    left: null,
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
};
```

Let's determine the structure of a single node:
```js
// node:
{
  value: number,
  left: node || null
  right: node || null
}
```
So, nodes can either be null or have some numeric value and possibly, left and right child, which are also nodes.

Let's try to determine what is the 'sum' of the two possible variants of nodes:
1. variant `null` - this can be assumed to have a sum of `0`
2. variant that's not null - this can be assumed to have a sum equal to the value in `node.value`  
    1. **However**, a node that is not null can also have left and right, so to assume that the sum of a single node is equal to it's value alone, would be incorrect.
    2. In other words, the sum of each node must be equal to the sum of   
    `node.value + sum of node.left + sum of node.right`
3. This can be defined recursively as:

```js
// 'root' is convention for naming a single node that can have children
const sumNodes = (root) => {
  // variant 1 - node is null - return sum of 0
  if (root === null) {
    return 0;
  }

  // variant 2 - node is not null
  // sum is equal to value + sum of left + sum of right:
  return root.value + /* calc sum in root.left */ + /* calc sum in root.right */;
};
```

The function is almost complete, you need to only figure out how to calculate the sums in left and right children.

Remember, left and right are also nodes, and from a certain perspective: roots of another subtree.


### 2. Traverse 'HTML' tree

file: `02. traverse-html-tree.js`

Check the `domTree` object in the file that represents our 'HTML tree'.

We are given the structure of an imaginary HTML tree. Study the provided object - it is created by recursively nesting 'nodes' that can have a `tag`, `id`, and `children`. The children is an array - that means that each HTML node can have 0 or infinite (in theory) children.

Our task is to return the first element that has a certain `id`. Ids are unique. To search in a recursive structure, we can try the [Depth-first Search Algorithm](https://programmer.ink/think/depth-first-traversal-dfs-and-breadth-first-traversal-bfs-of-js-algorithm.html) 

We will use the recursive definition of the algorithm to return a reference to the node that has the specified ID.


```js
const dfs = (root, id) => {
  // code goes here
};
```

How to implement the function:
```
if ...
  Variant 1: If the current element is null, return null

else if ...
  Variant 2: If the current element's id is the searched id, then return it - that's our elemnet

else ...
  If none of the previous two variants is true, then apply the dfs function to each child in the children collection. 
  If one of the children returns something that is NOT null, stop checking other children and return the result - 
  that's the element we are looking for.
```
