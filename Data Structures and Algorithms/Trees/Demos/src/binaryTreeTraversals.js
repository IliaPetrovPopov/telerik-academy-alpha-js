class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// const binary_tree = new BinaryTreeNode(
//   7,
//   left = new BinaryTreeNode(
//     4,
//     left = new BinaryTreeNode(2),
//     right = new BinaryTreeNode(
//       5,
//       right = new BinaryTreeNode(6))),
//   right = new BinaryTreeNode(
//     11,
//     left = new BinaryTreeNode(8),
//     right = new BinaryTreeNode(
//       14,
//       right = new BinaryTreeNode(18))));

let binaryTree = new BinaryTreeNode(
  7,
  new BinaryTreeNode(
    4,
    new BinaryTreeNode(2),
    new BinaryTreeNode(
      5,
      undefined,
      new BinaryTreeNode(6))),
  new BinaryTreeNode(
    11,
    new BinaryTreeNode(8),
    new BinaryTreeNode(
      14,
      undefined,
      new BinaryTreeNode(18))));

function dfs_preorder(root) {
  if (root === null) {
    return;
  }

  console.log(root.value);
  dfs_preorder(root.left);
  dfs_preorder(root.right);
}

function dfs_inorder(root) {
  if (root === null) {
    return;
  }

  dfs_inorder(root.left);
  console.log(root.value);
  dfs_inorder(root.right);
}

function dfs_postorder(root) {
  if (root === null) {
    return;
  }

  dfs_postorder(root.left);
  dfs_postorder(root.right);
  console.log(root.value);
}

function bfs(root) {
  const q = [];
  q.push(root);

  while (q.length > 0) {
    const next = q.shift();

    console.log(next.value)

    if (next.left) {
      q.push(next.left);
    }
    if (next.right) {
      q.push(next.right);
    }
  }
}

console.log("\nDFS Pre-Order\n");
dfs_preorder(binaryTree);

console.log("\nDFS In-Order\n");
dfs_inorder(binaryTree);

console.log("\nDFS Post-Order\n");
dfs_postorder(binaryTree);

console.log("\nBFS\n");
bfs(binaryTree);