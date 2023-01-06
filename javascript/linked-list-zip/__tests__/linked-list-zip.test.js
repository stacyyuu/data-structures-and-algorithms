'use strict';
const LinkedList = require('../linked-list-zip');

describe('Linked List Zip', () => {
  test('Creates a new zipped linked list', () => {
    let ll1 = new LinkedList();
    ll1.head = {
      value: 1,
      next: {
        value: 3,
        next: {
          value: 2,
          next: null,
        },
      },
    };
    let ll2 = new LinkedList();
    ll2.head = {
      value: 5,
      next: {
        value: 9,
        next: {
          value: 4,
          next: null,
        },
      },
    };
    expect(zipLists(ll1, ll2)).toEqual({
      value: 1,
      next: {
        value: 5,
        next: {
          value: 3,
          next: {
            value: 9,
            next: {
              value: 2,
              next: {
                value: 4,
                next: null,
              }
            }
          }
        },
      },
    });
  });
});
