'use strict';

/**
 * Node Class
 * @class
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Stack Class
 * @class
 */
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  /**
   * Pushes node on to the top of the stack
   * @param {*} value 
   */
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  /**
   * Removes the top node on the stack
   */
  pop() {
    let temp;

    temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  /**
   * Return the top node on the stack
   */
  peek() {
    return this.top;
  }
}

/**
 * PseudoQueue class
 * @class
 */
class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  /**
   * Adds new node to stack inside of pseudoQueue
   * @param {*} value 
   */
  enqueue(value) {
    let newNode = new Node(value);

    if(!this.front) {
      this.front = this.stackTwo;
      this.rear = this.stackOne;
    }
    this.stackOne.push(newNode);
  }

  /**
   * Pushes stackOne to stackTwo then pops top value off of stackTwo
   */
  dequeue() {
    if (this.stackTwo.length === 0) {
      if(this.stackOne.length > 0) {
        while (this.stackOne.length > 0) {
          let popped = this.stackOne.pop();
          this.stackTwo.push(popped);
        }
      }
    }
    return this.stackTwo.pop();
  }

}

module.exports = PseudoQueue;