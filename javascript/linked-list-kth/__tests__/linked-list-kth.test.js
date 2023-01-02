"use strict";
const LinkedList = require("../linked-list-kth.js");

describe("Linked List kthFromEnd", () => {
  test("Finding the node value kth places from end of linked list", () => {
    let linkedList = new LinkedList();
    linkedList.head = {
      value: 2,
      next: {
        value: 4,
        next: {
          value: 6,
          next: {
            value: 8,
            next: null,
          },
        },
      },
    };
    let newList = linkedList.kthFromEnd(2);
    expect(newList).toEqual(4);
  });
  test("Where k is greater than the length of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.head = {
      value: 2,
      next: {
        value: 4,
        next: {
          value: 6,
          next: {
            value: 8,
            next: null,
          },
        },
      },
    };
    let newList = linkedList.kthFromEnd(5);
    expect(newList).toEqual(undefined);
  });
  test("Where k and the length of the list are the same", () => {
    let linkedList = new LinkedList();
    linkedList.head = {
      value: 2,
      next: {
        value: 4,
        next: {
          value: 6,
          next: {
            value: 8,
            next: null,
          },
        },
      },
    };
    let newList = linkedList.kthFromEnd(4);
    expect(newList).toEqual(4);
  });
  test("Where the linked list is a size of 1", () => {
    let linkedList = new LinkedList();
    linkedList.head = {
      value: 8,
      next: null,
    };
    let newList = linkedList.kthFromEnd(0);
    expect(newList).toEqual(8);
  });
  test("Where k is not at the end, but somewhere in the middle", () => {
    let linkedList = new LinkedList();
    linkedList.head = {
      value: 2,
      next: {
        value: 4,
        next: {
          value: 6,
          next: {
            value: 8,
            next: {
              value: 10,
              next: null,
            },
          },
        },
      },
    };
    let newList = linkedList.kthFromEnd(3);
    expect(newList).toEqual(4);
  });
});
