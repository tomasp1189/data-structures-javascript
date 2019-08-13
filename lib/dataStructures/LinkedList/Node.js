class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
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
