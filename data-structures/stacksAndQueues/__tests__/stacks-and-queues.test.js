'use strict';

const { Stack } = require('../stacks-and-queues');
const { Queue } = require('../stacks-and-queues');

describe('Stack Tests', () => {

  it('Properly add a node to the top of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it('Removes node from the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop()

    expect(stack.top.value).toEqual(1);
  });

  it('Returns top node', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.peek().value).toEqual(2);
  });

  it('Checks if stack is empty', () => {
    let stack = new Stack();

    expect(stack.isEmpty()).toEqual(true);
  });

});

// describe('Queue Tests', () => {




// });