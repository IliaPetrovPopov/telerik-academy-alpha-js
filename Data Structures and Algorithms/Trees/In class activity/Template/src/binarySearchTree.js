import { BinarySearchTreeNode } from "./binarySearchTreeNode.js";

export class BinarySearchTree {
  #root = null;

  get root() {
    return this.#root;
  }

  // this function is used to help with testing
  __testSetup(root) {
    this.#root = root;
  }
}
