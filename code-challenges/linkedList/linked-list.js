'use strict';

class Node {
  constructor(value ,next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = this.value;
    newNode.next = this.head;
    this.head = newNode;
  }
}

module.exports = {LinkedList, Node};