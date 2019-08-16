class Node {
  constructor(data, nextNode = null, prevNode = null) {
    this.data = data;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }

  setPrevNode(prevNode) {
    this.prevNode = prevNode;
  }

  getPrevNode() {
    return this.prevNode;
  }
  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  getNextNode() {
    return this.nextNode;
  }

  toString() {
    return `${this.data}`;
  }
}

module.exports = Node;
