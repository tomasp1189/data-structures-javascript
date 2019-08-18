const Node = require('./Node');

class LinkedList {
  constructor(head = null, comparator = null) {
    this.head = head;
    this.comparator = comparator;
  }
  compare(node1, node2) {
    if (typeof this.comparator !== 'function') {
      if (node1.data === node2.data) return 0;
      // if node2 value is bigger than node1 value
      else if (node1.data < node2.data) return -1;
      // if node2 value is smaller than node1 value
      else return 1;
    }
    return this.comparator(node1, node2);
  }

  insertElementAtHead(data) {
    let newNode = new Node(data);
    newNode.setNextNode(this.head);
    this.head = newNode;
  }

  sortedInsert(data) {
    let newNode = new Node(data);
    let currentNode = this.head;
    if (currentNode === null) {
      this.head = newNode;
      return;
    }

    let comparison = this.compare(newNode, currentNode);
    if (comparison === -1) {
      newNode.setNextNode(this.head);
      this.head = newNode;
      return;
    }

    while (currentNode !== null) {
      if (currentNode.getNextNode() === null) {
        currentNode.setNextNode(newNode);
        return;
      }
      comparison = this.compare(newNode, currentNode.getNextNode());
      if (comparison === -1) {
        newNode.setNextNode(currentNode.getNextNode());
        currentNode.setNextNode(newNode);
        return;
      }
      currentNode = currentNode.getNextNode();
    }
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
