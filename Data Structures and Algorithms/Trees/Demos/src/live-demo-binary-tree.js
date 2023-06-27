// Binary Tree Node
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//              / 
//             G

// 1. Recreate tree using Node
const root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");
root.right.right = new Node("F");
root.right.right.left = new Node("G");

//  Pre-Order Traversal
//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//              / 
//             G
function preOrderTraversal(node) {
	if (node === null) {
		return;
	}

	console.log(node.value);
	preOrderTraversal(node.left);
	preOrderTraversal(node.right);
}
console.log("Pre-Order Traversal");
preOrderTraversal(root); // A B D E C F G

//  In-Order Traversal
//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//              / 
//             G
function inOrderTraversal(node) {
	if (node === null) {
		return;
	}

	inOrderTraversal(node.left);
	console.log(node.value); // visit the node
	inOrderTraversal(node.right);
}
console.log("In-Order Traversal");
inOrderTraversal(root); // D B E A C G F

//  Post-Order Traversal
//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//              / 
//             G
function postOrderTraversal(node) {
	if (node === null) {
		return;
	}
	
	postOrderTraversal(node.left);
	postOrderTraversal(node.right);
	console.log(node.value);
}
console.log("Post-Order Traversal");
postOrderTraversal(root); // D E B G F C A
