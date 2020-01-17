'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let temp;
    let top = this.top;
    temp = top;
    top = top.next;
    temp.next = null;

    return temp;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    let top = this.top;

    if (!top) return true;

    return false;
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
}

