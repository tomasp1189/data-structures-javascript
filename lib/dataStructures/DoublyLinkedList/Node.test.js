describe('Double Ended Linked List Node', () => {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const Node = require('./Node');
  describe('toString', () => {
    it('should return a string', () => {
      const node = new Node('test');
      const nodeString = node.toString();
      expect(nodeString).equal('test');
    });
  });
  describe('setNextNode', () => {
    it('should correctly attach next node', () => {
      const node = new Node('test');
      const nextNode = new Node('test next node');
      node.setNextNode(nextNode);
      expect(node.nextNode).to.equal(nextNode);
    });
  });
  describe('getNextNode', () => {
    it('should correctly return next node', () => {
      const node = new Node('test');
      expect(node.getNextNode()).to.equal(null);
      const nextNode = new Node('test next node');
      node.setNextNode(nextNode);
      expect(node.getNextNode()).to.equal(nextNode);
    });
  });
});
