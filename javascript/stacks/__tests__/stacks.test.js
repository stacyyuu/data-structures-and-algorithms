'use strict';
const Stack = require('../stacks');

// let stack = new Stack ();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// arrange, act, assert

describe('Stack tests', () => {
  test('Push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });
  test('Push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(5);
    stack.push(6);
    expect(stack).toEqual({
      top: { value: 6, next: { value: 5, next: { value: 4, next: null } } },
    });
  });
  test('Pop off the stack', () => {
    let stack = new Stack();
    stack.push(7);
    stack.push(6);
    expect(stack.pop()).toEqual(6);
  });
  test('Empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(7);
    stack.push(6);
    stack.push(5);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack).toEqual({ top: null });
  });
  test('Peek the next item on stack', () => {
    let stack = new Stack();
    stack.push(9);
    expect(stack.peek()).toEqual(9);
  });
  test('Instantiate an empty stack', () => {
    expect(new Stack()).toEqual({ top: null });
  });
  test('Calling pop on an empty stack raises exception', () => {
    let stack = new Stack();
    expect(stack.pop()).toEqual();
  });
});
