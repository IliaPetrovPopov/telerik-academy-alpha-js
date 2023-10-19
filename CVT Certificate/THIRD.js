let input = [
  "5 3",
  "Djoko Nadal Roger Alex Medi",
  "Alex Djoko",
  "Djoko Medi",
  "Medi Alex",
];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.length = 1;
    this.tail = this.head;
  }

  printList() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join(" "));
    return this;
  }

  append(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;

    this.length++;
  }

  indexOf(value) {
    let index = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  insert(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
      console.log(`Invalid index. Current length is ${this.length}.`);
      return this;
    }

    if (index === 0) {
      this.prepend(value);
      return this;
    }

    if (index === this.length) {
      this.append(value);
      return this;
    }

    let newNode = new Node(value);
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }

    let nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    nextNode.previous = newNode;

    this.length++;
  }

  remove(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.length) {
      console.log(`Invalid index. Current length is ${this.length}.`);
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;

      this.length--;
      this.printList();
      return this;
    }

    if (index === this.length - 1) {
      this.tail = this.tail.previous;
      this.tail.next = null;

      this.length--;
      this.printList();
      return this;
    }

    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }
    let deleteNode = previousNode.next;
    let nextNode = deleteNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    this.length--;
    return this;
  }
}

const [N, K] = gets().split(" ");
const players = gets().split(" ");

let ranking = new DoublyLinkedList();
players.forEach((player) => ranking.append(player));

for( let i = 0; i < K; i++) {
    const currentSwap = gets().split(" ");
    const playerToMoveIndex = ranking.indexOf(currentSwap[0]);
    const moveBeforeIndex = ranking.indexOf(currentSwap[1]);
    ranking.remove(playerToMoveIndex);
    ranking.insert(moveBeforeIndex, currentSwap[0]);
}

ranking.printList();