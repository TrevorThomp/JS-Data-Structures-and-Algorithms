'use strict';

const PseudoQueue = require('../queue-with-stacks');

describe('PseudoQueue Module', () => {

  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });


  it('Should add new value to stackOne', () => {
    queue.enqueue(1);

    expect(queue.stackOne.length).toEqual(1);
    queue.enqueue(2);
    expect(queue.stackOne.length).toEqual(2);
  });

  it('Should empty all nodes in stackOne', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.stackOne.length).toEqual(3);
    queue.dequeue();
    expect(queue.stackOne.length).toEqual(0);
  });

  it('stackTwo should contain stackOne nodes minus one', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.stackTwo.length).toEqual(0);
    queue.dequeue();
    expect(queue.stackTwo.length).toEqual(2);
  });


});