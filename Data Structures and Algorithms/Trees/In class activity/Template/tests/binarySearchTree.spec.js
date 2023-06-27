import { BinarySearchTree } from "../src/binarySearchTree.js";
import { BinarySearchTreeNode } from "../src/binarySearchTreeNode.js";

const createDefaultTestNodes = () => {
  const tree = new BinarySearchTreeNode(5);
  tree.left = new BinarySearchTreeNode(2);
  tree.right = new BinarySearchTreeNode(8);
  tree.left.right = new BinarySearchTreeNode(3);
  tree.right.left = new BinarySearchTreeNode(6);
  tree.right.right = new BinarySearchTreeNode(10);

  return tree;
};
describe('height should', () => {
  it('return correct value (empty tree)', () => {
    const bst = new BinarySearchTree();

    expect(bst.height).toBe(0);
  });

  it('return correct value', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    expect(bst.height).toBe(2);
  });
});

describe('search() should', () => {
  it('return true when value exists', () => {
    const testNodes = createDefaultTestNodes();
    const bst = new BinarySearchTree();
    bst.__testSetup(testNodes);

    expect(bst.search(testNodes.value)).toBe(true);
    expect(bst.search(testNodes.left.value)).toBe(true);
    expect(bst.search(testNodes.right.value)).toBe(true);
    expect(bst.search(testNodes.left.right.value)).toBe(true);
    expect(bst.search(testNodes.right.left.value)).toBe(true);
    expect(bst.search(testNodes.right.right.value)).toBe(true);
  });

  it('return false when value does not exist', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    expect(bst.search(300)).toBe(false);
  });
});

describe('insert() should', () => {
  it('insert values at correct positions', () => {
    const bst = new BinarySearchTree();

    [5, 2, 3, 9, 10, 12, 5, 6, 12, 33, 41, -5].forEach(v => bst.insert(v));

    const root = bst.root;

    expect(root.value).toBe(5);
    expect(root.left.value).toBe(2);
    expect(root.left.right.value).toBe(3);
    expect(root.right.value).toBe(9);
    expect(root.right.right.value).toBe(10);
    expect(root.right.right.right.value).toBe(12);
    expect(root.right.left.value).toBe(6);
    expect(root.right.right.right.right.value).toBe(33);
    expect(root.right.right.right.right.right.value).toBe(41);
    expect(root.left.left.value).toBe(-5);
  });
});

describe('remove() should', () => {
  it('remove leaf node', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    bst.remove(6);

    expect(bst.root.right.left).toBe(null);
  });

  it('remove node with one child', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    bst.remove(2);

    expect(bst.root.left.value).toBe(3);
    expect(bst.root.left.right).toBe(null);
  });

  it('remove node with two children', () => {

    // this test expects that this case is implemented by finding minValue in right tree
    // if you tried the other approach - maxValue in left tree, the test will fail. 
    // Sorry about that.
    const bst = new BinarySearchTree();

    bst.__testSetup(createDefaultTestNodes());

    bst.remove(5);
    expect(bst.root.value).toBe(6);
    expect(bst.root.right.left).toBe(null);
  });

  it('do nothing when such value does not exist', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    bst.remove(300);

    expect(bst.root.left.right.value).toBe(3);
    expect(bst.root.right.left.value).toBe(6);
    expect(bst.root.right.right.value).toBe(10);
  });
});

describe('dfsInorder should', () => {
  it('return values in correct order', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    expect(bst.dfsInorder).toEqual([2, 3, 5, 6, 8, 10]);
  });
});

describe('dfsPreorder should', () => {
  it('return values in correct order', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    expect(bst.dfsPreorder).toEqual([5, 2, 3, 8, 6, 10]);
  });
});

describe('dfsPostorder should', () => {
  it('return values in correct order', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    expect(bst.dfsPostorder).toEqual([3, 2, 6, 10, 8, 5]);
  });
});

describe('bfs should', () => {
  it('return values in correct order', () => {
    const bst = new BinarySearchTree();
    bst.__testSetup(createDefaultTestNodes());

    expect(bst.bfs).toEqual([5, 2, 8, 3, 6, 10]);
  });
});

