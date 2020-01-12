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
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.val !== value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }


}

module.exports = LinkedList;