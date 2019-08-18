describe('Linked List', () => {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const Node = require('./Node');
  const LinkedList = require('./LinkedList');
  describe('insertElementAtHead', () => {
    it('should insert value at the head of the list', () => {
      const node = new Node('test');
      const linkedList = new LinkedList(node);
      expect(linkedList.head).to.equal(node);
      linkedList.insertElementAtHead('test next node');
      expect(linkedList.head.data).to.equal('test next node');
      expect(linkedList.head.nextNode).to.equal(node);
    });
  });
  describe('sortedInsert', () => {
    it('should insert value at the head of the list when list is empty', () => {
      const linkedList = new LinkedList();
      linkedList.sortedInsert('test');
      expect(linkedList.head.data).to.equal('test');
    });
    it('should insert value at the head of the list when list has one element bigger than the inserted value', () => {
      const node = new Node('b');
      const linkedList = new LinkedList(node);
      linkedList.sortedInsert('a');
      expect(linkedList.head.data).to.equal('a');
      expect(linkedList.head.nextNode).to.equal(node);
    });
    it('should insert values at the correct position in the list', () => {
      const node = new Node('a');
      const linkedList = new LinkedList(node);
      expect(linkedList.head).to.equal(node);
      linkedList.sortedInsert('f');
      linkedList.sortedInsert('g');
      linkedList.sortedInsert('c');
      linkedList.sortedInsert('d');
      linkedList.sortedInsert('b');
      linkedList.sortedInsert('e');
      expect(linkedList.toString()).equal('[a, b, c, d, e, f, g]');
    });
  });
  describe('deleteElementAtHead', () => {
    it('should delete element at the head of the list', () => {
      const node = new Node('test');
      const linkedList = new LinkedList(node);
      linkedList.insertElementAtHead('test 1');
      expect(linkedList.length()).to.equal(2);
      linkedList.deleteElementAtHead();
      expect(linkedList.length()).to.equal(1);
      expect(linkedList.head).to.equal(node);
      linkedList.deleteElementAtHead();
      expect(linkedList.length()).to.equal(0);
      expect(linkedList.head).to.equal(null);
    });
  });
  describe('find', () => {
    it('should return null if list is empty', () => {
      const linkedList = new LinkedList();
      expect(linkedList.find('test 8')).to.be.null;
    });
    it('should return null if element is not present', () => {
      const linkedList = new LinkedList();
      linkedList.insertElementAtHead('test 1');
      linkedList.insertElementAtHead('test 2');
      linkedList.insertElementAtHead('test 3');
      linkedList.insertElementAtHead('test 4');
      linkedList.insertElementAtHead('test 5');
      linkedList.insertElementAtHead('test 6');
      expect(linkedList.find('test 8')).to.be.null;
    });
    it('should return the element if it is present', () => {
      const linkedList = new LinkedList();
      linkedList.insertElementAtHead('test 1');
      linkedList.insertElementAtHead('test 2');
      linkedList.insertElementAtHead('test 3');
      linkedList.insertElementAtHead('test 4');
      linkedList.insertElementAtHead('test 5');
      linkedList.insertElementAtHead('test 6');
      expect(linkedList.find('test 5')).to.not.be.null;
      expect(linkedList.find('test 5').data).to.equal('test 5');
    });
  });
  describe('length', () => {
    it('should return a number equal to the amount of elements in the list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.length()).to.equal(0);
      linkedList.insertElementAtHead('test 1');
      expect(linkedList.length()).to.equal(1);
      linkedList.insertElementAtHead('test 2');
      expect(linkedList.length()).to.equal(2);
    });
  });
  describe('toString', () => {
    it('should return a string representing the elements in the list', () => {
      const node = new Node('test');
      const linkedList = new LinkedList(node);
      let listString = linkedList.toString();
      expect(listString).equal('[test]');
      linkedList.insertElementAtHead('test next node');
      listString = linkedList.toString();
      expect(listString).equal('[test next node, test]');
    });
  });
});
