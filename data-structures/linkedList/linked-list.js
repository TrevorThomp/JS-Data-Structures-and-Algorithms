'use strict';

/**
 * @class
 */
class Node {
  constructor(value ,next) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @class
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Inserts value into list
   * @param {number} value 
   */
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Tests to see if value is in list
   * @param {number} value 
   */
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  /**
   * Returns value in list as Head -> 2 -> 1 -> NULL
   */
  toString() {
    let current = this.head;
    let string = 'Head';
    while (current !== null) {
      string = `${string} -> ${current.value}`;
      current = current.next;
    }
    return `${string} -> NULL`;
  }

  /**
   * Appends value to the end of the list
   * @param {*} value 
   */
  append(value) {
    let newNode = new Node(value);
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = null;
  }

  /**
   * Inserts newValue before val in the list
   * @param {*} val 
   * @param {*} newValue 
   */
  insertBefore(val, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    if(current.value === val) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (current.next.value !== val) {
        current = current.next;
      } 
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  
  /**
 * Inserts newValue after val in the list
 * @param {*} val 
 * @param {*} newValue 
 */
  insertAfter(val, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while (current.value !== val) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  /**
   * Removes value from linked list
   * @param {*} value 
   */
  remove(value) {
    let current = this.head;
    let previousList;

    if (current.value === value) {
      current.next = current.next.next;  
    } else {
      while (current.value !== value) {
        previousList = current;
        current = current.next;
      }
      previousList.next = current.next;
    }
  }

  /**
   * Returns the listC value based on given input from length of array
   * @param {*} k 
   */
  kthFromEnd(k) {
    let current = this.head;
    let counter = 0;

    while (current !== null) {
      counter++;
      current = current.next;
    }

    current= this.head;

    if (k < 0) return 'Error';

    for (let i = 0; i < counter - k; i++) {
      current = current.next;
    }

    if (k > counter - 1) return 'Error';

    return current.value;
  }
}

/**
 * @function
 * @param {object} listA 
 * @param {object} listB 
 * @returns {object}
 */
function mergeLists(listA, listB) {
  let listC = new LinkedList();
  let nodeA = listA.head;
  let nodeB = listB.head;

  if (!nodeA && !nodeB) return 'Error';
  
  while (nodeA !== null && nodeB !== null) {
    if (nodeA.value <= nodeB.value) { 
      listC.next = nodeA;
      nodeA = nodeA.next;
    } else {
      listC.next = nodeB;
      nodeB = nodeB.next;
    }
    listC = listC.next;
  }

  if (nodeA === null) { listC.next = nodeB; }
  if (nodeB === null) { listC.next = nodeA; }

  return listC;
}

module.exports = {LinkedList, mergeLists};