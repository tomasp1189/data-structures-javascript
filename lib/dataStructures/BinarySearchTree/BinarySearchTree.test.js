describe('Binary Search Tree', () => {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const BinarySearchTree = require('./BinarySearchTree');
  describe('compare', () => {
    it('should use default comparator method if none is provided on construction', () => {
      const bst = new BinarySearchTree();
      const comparisonResult = bst.compare({ value: 1 }, { value: 2 });
      expect(comparisonResult).to.not.be.undefined;
    });
    it('should use comparator method provided in constructor', () => {
      const comparator = sinon.fake.returns(1);
      const bst = new BinarySearchTree(comparator);
      bst.compare({ value: 1 }, { value: 2 });
      expect(comparator.callCount).to.equal(1);
    });
  });
  describe('insert', () => {
    it('should insert value in root node if no root node exists', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      expect(bst.root.value).to.equal(55);
    });
    it('should insert smaller values than root to the left', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      bst.insert(25);
      expect(bst.root.left).to.not.be.null;
      expect(bst.root.left.value).to.equal(25);
    });
    it('should insert larger values than root to the right', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      bst.insert(75);
      expect(bst.root.right).to.not.be.null;
      expect(bst.root.right.value).to.equal(75);
    });
    it('should insert nodes adequately to the left and right depending on the value', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      bst.insert(25);
      bst.insert(15);
      bst.insert(35);
      bst.insert(75);
      bst.insert(65);
      bst.insert(85);
      bst.insert(76);
      //console.log(JSON.stringify(bst));
      expect(bst.root).to.not.be.null;
      expect(bst.root.value).to.equal(55);
      // left tree
      expect(bst.root.left).to.not.be.null;
      expect(bst.root.left.value).to.equal(25);
      expect(bst.root.left.left).to.not.be.null;
      expect(bst.root.left.left.value).to.equal(15);
      // right tree
      expect(bst.root.right).to.not.be.null;
      expect(bst.root.right.value).to.equal(75);
      expect(bst.root.right.left).to.not.be.null;
      expect(bst.root.right.left.value).to.equal(65);
      expect(bst.root.right.right).to.not.be.null;
      expect(bst.root.right.right.value).to.equal(85);
      expect(bst.root.right.right.left).to.not.be.null;
      expect(bst.root.right.right.left.value).to.equal(76);
    });
  });
  describe('find', () => {
    it('should return node if found', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      bst.insert(25);
      bst.insert(15);
      bst.insert(35);
      bst.insert(75);
      bst.insert(65);
      bst.insert(85);
      bst.insert(76);
      const node = bst.find(75);
      expect(node.value).to.equal(75);
      expect(node.left).to.not.be.null;
      expect(node.right).to.not.be.null;
    });
    it('should return null if not found', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      bst.insert(25);
      bst.insert(15);
      bst.insert(35);
      bst.insert(75);
      bst.insert(65);
      bst.insert(85);
      bst.insert(76);
      const node = bst.find(99);
      expect(node).to.be.null;
    });
  });
  describe('delete', () => {
    it('should delete node if found and replace value with biggest value to the left', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      bst.insert(25);
      bst.insert(15);
      bst.insert(35);
      bst.insert(75);
      bst.insert(65);
      bst.insert(85);
      bst.insert(76);

      let node = bst.find(75);
      expect(node.value).to.equal(75);
      expect(node.left).to.not.be.null;
      expect(node.right).to.not.be.null;
      bst.delete(75);
      node = bst.find(75);
      expect(node).to.be.null;
    });
  });
  describe('findBiggestNode', () => {
    it('should return biggest node', () => {
      const bst = new BinarySearchTree();
      bst.insert(55);
      bst.insert(25);
      bst.insert(15);
      bst.insert(35);
      bst.insert(75);
      bst.insert(65);
      bst.insert(85);
      bst.insert(76);
      const biggestFromRoot = BinarySearchTree.findBiggestNode(bst.root);
      expect(biggestFromRoot.value).to.equal(85);
    });
  });
});
