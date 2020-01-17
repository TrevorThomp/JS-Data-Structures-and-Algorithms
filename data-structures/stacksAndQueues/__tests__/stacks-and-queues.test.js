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

    console.log(stack)
  })

});

// describe('Queue Tests', () => {




// });