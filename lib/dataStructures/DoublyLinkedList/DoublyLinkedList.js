const Node = require('./Node');

class DoublyLinkedList {
  constructor(node = null) {
    this.head = this.tail = node;
  }

  insertElementAtHead(data) {
    let newNode = new Node(data);
    if (!this.tail) {
      newNode.setPrevNode(this.tail);
      this.tail = newNode;
    }
    if (this.head) this.head.setPrevNode(newNode);
    newNode.setNextNode(this.head);
    this.head = newNode;
  }

  insertElementAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      newNode.setNextNode(this.head);
      this.head = newNode;
    }
    if (this.tail) this.tail.setNextNode(newNode);
    newNode.setPrevNode(this.tail);
    this.tail = newNode;
  }

  deleteElementAtHead() {
    this.head = this.head.getNextNode();
    if (this.head) this.head.setPrevNode(null);
    else this.tail = null;
  }

  deleteElementAtTail() {
    this.tail = this.tail.getPrevNode();
    if (this.tail) this.tail.setNextNode(null);
    else this.head = null;
  }

  length() {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.getNextNode();
    }
    return length;
  }

  find(data) {
    let current = this.head;
    while (current && current.data !== data) {
      current = current.getNextNode();
    }
    return current;
  }

  toString() {
    let current = this.head;
    let listString = `[${current.toString()}`;
    while (current.nextNode) {
      listString = `${listString}, ${current.nextNode.toString()}`;
      current = current.nextNode;
    }
    listString = `${listString}]`;
    return listString;
  }
}

module.exports = DoublyLinkedList;
