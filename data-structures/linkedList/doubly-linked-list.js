'use strict';

/**
 * @class
 */
class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * @class
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
}

module.exports = DoublyLinkedList;