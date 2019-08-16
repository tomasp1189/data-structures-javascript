describe('Doubly Linked List', () => {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const Node = require('./Node');
  const DoublyLinkedList = require('./DoublyLinkedList');
  describe('insertElementAtHead', () => {
    it('should insert value at the head of the list', () => {
      const node = new Node('test');
      const doublyLinkedList = new DoublyLinkedList(node);
      expect(doublyLinkedList.head).to.equal(node);
      doublyLinkedList.insertElementAtHead('test next node');
      expect(doublyLinkedList.head.data).to.equal('test next node');
      expect(doublyLinkedList.head.nextNode).to.equal(node);
    });
    it('should insert value at the head and tail of the list if it is empty', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.insertElementAtHead('test next node');
      expect(doublyLinkedList.head.data).to.equal('test next node');
      expect(doublyLinkedList.head.nextNode).to.equal(null);
      expect(doublyLinkedList.head.prevNode).to.equal(null);
      expect(doublyLinkedList.tail.data).to.equal('test next node');
      expect(doublyLinkedList.tail.nextNode).to.equal(null);
      expect(doublyLinkedList.tail.prevNode).to.equal(null);
    });
  });
  describe('insertElementAtTail', () => {
    it('should insert value at the head of the list', () => {
      const node = new Node('test');
      const doublyLinkedList = new DoublyLinkedList(node);
      expect(doublyLinkedList.head).to.equal(node);
      doublyLinkedList.insertElementAtHead('test next node');
      expect(doublyLinkedList.head.data).to.equal('test next node');
      expect(doublyLinkedList.head.nextNode).to.equal(node);
    });
    it('should insert value at the tail and head of the list if it is empty', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.insertElementAtTail('test next node');
      expect(doublyLinkedList.tail.data).to.equal('test next node');
      expect(doublyLinkedList.tail.nextNode).to.equal(null);
      expect(doublyLinkedList.tail.prevNode).to.equal(null);
      expect(doublyLinkedList.head.data).to.equal('test next node');
      expect(doublyLinkedList.head.nextNode).to.equal(null);
      expect(doublyLinkedList.head.prevNode).to.equal(null);
    });
  });
  describe('deleteElementAtHead', () => {
    it('should delete element at the head of the list', () => {
      const node = new Node('test');
      const doublyLinkedList = new DoublyLinkedList(node);
      doublyLinkedList.insertElementAtHead('test 1');
      expect(doublyLinkedList.length()).to.equal(2);
      doublyLinkedList.deleteElementAtHead();
      expect(doublyLinkedList.length()).to.equal(1);
      expect(doublyLinkedList.head).to.equal(node);
      doublyLinkedList.deleteElementAtHead();
      expect(doublyLinkedList.length()).to.equal(0);
      expect(doublyLinkedList.head).to.equal(null);
    });
  });
  describe('deleteElementAtTail', () => {
    it('should delete element at the tail of the list', () => {
      const node = new Node('test');
      const doublyLinkedList = new DoublyLinkedList(node);
      doublyLinkedList.insertElementAtTail('test 1');
      expect(doublyLinkedList.length()).to.equal(2);
      doublyLinkedList.deleteElementAtTail();
      expect(doublyLinkedList.length()).to.equal(1);
      expect(doublyLinkedList.tail).to.equal(node);
      doublyLinkedList.deleteElementAtTail();
      expect(doublyLinkedList.length()).to.equal(0);
      expect(doublyLinkedList.tail).to.equal(null);
    });
  });
  describe('find', () => {
    it('should return null if list is empty', () => {
      const doublyLinkedList = new DoublyLinkedList();
      expect(doublyLinkedList.find('test 8')).to.be.null;
    });
    it('should return null if element is not present', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.insertElementAtHead('test 1');
      doublyLinkedList.insertElementAtHead('test 2');
      doublyLinkedList.insertElementAtHead('test 3');
      doublyLinkedList.insertElementAtHead('test 4');
      doublyLinkedList.insertElementAtHead('test 5');
      doublyLinkedList.insertElementAtHead('test 6');
      expect(doublyLinkedList.find('test 8')).to.be.null;
    });
    it('should return the element if it is present', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.insertElementAtHead('test 1');
      doublyLinkedList.insertElementAtHead('test 2');
      doublyLinkedList.insertElementAtHead('test 3');
      doublyLinkedList.insertElementAtHead('test 4');
      doublyLinkedList.insertElementAtHead('test 5');
      doublyLinkedList.insertElementAtHead('test 6');
      expect(doublyLinkedList.find('test 5')).to.not.be.null;
      expect(doublyLinkedList.find('test 5').data).to.equal('test 5');
    });
  });
  describe('length', () => {
    it('should return a number equal to the amount of elements in the list', () => {
      const doublyLinkedList = new DoublyLinkedList();
      expect(doublyLinkedList.length()).to.equal(0);
      doublyLinkedList.insertElementAtHead('test 1');
      expect(doublyLinkedList.length()).to.equal(1);
      doublyLinkedList.insertElementAtHead('test 2');
      expect(doublyLinkedList.length()).to.equal(2);
    });
  });
  describe('toString', () => {
    it('should return a string representing the elements in the list', () => {
      const node = new Node('test');
      const doublyLinkedList = new DoublyLinkedList(node);
      let listString = doublyLinkedList.toString();
      expect(listString).equal('[test]');
      doublyLinkedList.insertElementAtHead('test next node');
      listString = doublyLinkedList.toString();
      expect(listString).equal('[test next node, test]');
    });
  });
});
