const Node = require('./Node');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertElementAtHead(data) {
    let newNode = new Node(data);
    newNode.setNextNode(this.head);
    this.head = newNode;
  }

  deleteElementAtHead() {
    this.head = this.head.getNextNode();
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

module.exports = LinkedList;
