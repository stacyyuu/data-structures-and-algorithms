'use strict';
const Queue = require('../queues');

describe('Queue tests', () => {
  test('Enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(8);
    expect(queue.front.value).toEqual(8);
  });
  test('Enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
  });
  test('Dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(11);
    expect(queue.dequeue()).toEqual(10);
  });
  test('Peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(14);
    queue.enqueue(15);
    expect(queue.peek()).toEqual(14);
  });
  test('Empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(8);
    queue.enqueue(9);
    queue.enqueue(10);
    queue.dequeue;
    queue.dequeue;
    queue.dequeue;
    expect(queue.front).toEqual({ next: { next: { next: null, value: 10 }, value: 9 }, value: 8 } );
  });
  test('Instantiate an empty queue', () => {
    expect(new Queue()).toEqual({ front: null, rear: null });
  });
  test('Peek an empty queue raises exception', () => {
    let queue = new Queue();
    expect(queue.peek()).toEqual();
  });
});
