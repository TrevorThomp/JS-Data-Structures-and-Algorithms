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

  peek() {
    return this.top;
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
}

