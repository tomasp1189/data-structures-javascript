class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(comparator = null) {
    this.comparator = comparator;
    this.root = null;
  }

  compare(node1, node2) {
    if (typeof this.comparator !== 'function') {
      if (node1.value === node2.value) return 0;
      // if node2 value is bigger than node1 value
      else if (node1.value < node2.value) return 1;
      // if node2 value is smaller than node1 value
      else return -1;
    }
    return this.comparator(node1, node2);
  }

  /*
    INSERT 
    if no root node exists, insert node as root.
    else 
      while we haven't reached the end of the tree
        continue to navigate the tree
        left if the value inserted is smaller than value compared to
        right if value is bigger
  */
  insert(value, left = null, right = null) {
    const node = { value, left, right };
    if (!this.root) this.root = node;
    else {
      let auxNode = this.root;
      while (!!auxNode) {
        const comparison = this.compare(auxNode, node);
        if (comparison === 0) return console.log('duplicate value');
        else if (comparison === 1) {
          if (!auxNode.right) {
            auxNode.right = node;
            return;
          }
          auxNode = auxNode.right;
          continue;
        } else {
          if (!auxNode.left) {
            auxNode.left = node;
            return;
          }
          auxNode = auxNode.left;
          continue;
        }
      }
    }
  }

  find(value) {
    const node = { value, left: null, right: null };

    let auxNode = this.root;
    while (!!auxNode) {
      const comparison = this.compare(auxNode, node);
      if (comparison === 0) {
        break;
      } else if (comparison === 1) {
        auxNode = auxNode.right;
        continue;
      } else {
        auxNode = auxNode.left;
        continue;
      }
    }
    return auxNode;
  }

  delete(value) {
    const nodeToDelete = this.find(value);

    if (!nodeToDelete) return;

    const biggest = BinarySearchTree.findBiggestNode(nodeToDelete, true);
    nodeToDelete.value = biggest.value;

    if (!biggest.left) biggest.parent.right = null;
    else biggest.parent.right = biggest.left;
  }

  static findBiggestNode(bstRoot, withParent = false) {
    if (!bstRoot) return null;
    else {
      let parent = null;
      let auxNode = bstRoot;
      while (!!auxNode) {
        if (!auxNode.right) {
          if (withParent) auxNode.parent = parent;
          return auxNode;
        } else {
          parent = auxNode;
          auxNode = auxNode.right;
        }
      }
    }
  }

  static isLeaf(node) {
    return !node.left && !node.right;
  }
}

module.exports = BinarySearchTree;
