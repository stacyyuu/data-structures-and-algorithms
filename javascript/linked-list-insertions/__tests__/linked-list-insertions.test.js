'use strict';
const LinkedList = require('../linked-list-insertions.js');

describe('Linked List Insertion Testing', () => {
  test('Append: able to append new node to end of list', () => {
    let appendLinkedList = new LinkedList();
    appendLinkedList.head = ({
      value: 1,
      next: { value: 3, next: { value: 4, next: null } },
    });
    let newList = appendLinkedList.append(4);
    expect(newList).toEqual({
      value: 1,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    });
  });
  test('Append: able to append multiple nodes to end of list', () => {
    let appendLinkedList = new LinkedList();
    appendLinkedList.head = ({
      value: 1,
      next: { value: 3, next: { value: 4, next: null } },
    });
    let newList = appendLinkedList.append(4, 5, 6);
    expect(newList).toEqual({
      value: 1,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 4,
            next: {
              value: 5,
              next: {
                value: 6,
                next: null
              }
            },
          },
        },
      },
    });
  });
  test('insertBefore: able to insert a node before first node', () => {
    let insertBeforeLinkedList = new LinkedList();
    insertBeforeLinkedList.head = ({
      value: 2,
      next: { value: 3, next: { value: 4, next: null } },
    });
    let newList = insertBeforeLinkedList.insertBefore(2, 1);
    expect(newList).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    });
  });
  test('insertAfter: able to insert a node after the last node', () => {
    let insertAfterLinkedList = new LinkedList();
    insertAfterLinkedList.head = ({
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    });
    let newList = insertAfterLinkedList.insertAfter(3, 4);
    expect(newList).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    });
  });
});
