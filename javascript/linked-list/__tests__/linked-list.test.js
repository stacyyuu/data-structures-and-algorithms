'use strict';
const LinkedList = require('../linked-list.js');

describe('testing the linked list methods', () => {
  test('can instantiate an empty linked list', () => {
    let newLinkedList = new LinkedList();
    expect(newLinkedList.head).toStrictEqual(null);
  });
  test('can insert a value into the linked list', () => {
    // create any needed variables
    let newLinkedList = new LinkedList();
    newLinkedList.insert(5);
    expect(newLinkedList.head.value).toStrictEqual(5);
  });
  test('head points to first node in the linked list', () => {
    let newLinkedList = new LinkedList();
    // not sure about this one...
    expect(newLinkedList.head).toStrictEqual(newLinkedList.head);
  });
  test('can insert multiple nodes into linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('a', 'b', 'c');
    expect(newLinkedList.head.value).toStrictEqual('a', 'b', 'c');
  });
  test('will return true when finding a value within the linked list that exists', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(15);
    expect(newLinkedList.includes(15)).toStrictEqual(true);
  });
  test('will return false when finding a value within the linked list that does not exist', () => {
    let newLinkedList = new LinkedList();
    expect(newLinkedList.includes(20)).toStrictEqual(false);
  });
  test('can return a collection of all values that exist in linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('hello');
    expect(newLinkedList.toString()).toStrictEqual('{ hello } -> NULL');
  });
});
