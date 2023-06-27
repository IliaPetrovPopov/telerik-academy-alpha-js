class Node {
	constructor(value) {
		this.value = value;
		this.children = [];
	}
}

//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//              / 
//             G
const a = new Node("A"); // root
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");

a.children.push(b, c);
b.children.push(d, e);
c.children.push(f);
f.children.push(g);

// Traversal Methods
// 1. Breadth-First Search (BFS)
// 		- level-order traversal
// 		- implemented with queue
// 		- used in alg. for finding the shortest path 
// 		- consumes more memory
//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//              / 
//             G
function bfsTraversal(root) {
	const queue = [root];

	// while queue not empty
	while (queue.length > 0) {
		// shift / extract the first node in the queue
		const node = queue.shift();
		// visit node / print value /
		console.log(node.value);
		// push node.children to queue
		queue.push(...node.children); // using spread operator, can be done with regular cycle
	}
}
// bfsTraversal(a); // A B C D E F G

// 2. Depth-First Search (DFS)
// 		- explore all available paths in a tree
// 		- implemented with stack
// 		- consumes less memory
//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//              / 
//             G
function dfsTraversal(root) {
	const stack = [root];

	// while stack not empty
	while (stack.length > 0) {
		//  pop top node
		const node = stack.pop();
		//  visit / print
		console.log(node.value);
		//  push node.children to stack in reversed order
		for (let i = node.children.length - 1; i >= 0; i--) {
			stack.push(node.children[i]);
		}
	}
}
dfsTraversal(a); // root