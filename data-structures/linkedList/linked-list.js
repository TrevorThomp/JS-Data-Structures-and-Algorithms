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

  mergeLists(listB) {
  
    var listC = new LinkedList();
    let nodeA = this.head;
    let nodeB = listB.head;
    
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
  
    if (nodeB === null) { listC.next = nodeA; }
    if (nodeA === null) { listC.next = nodeB; }
  
    return listC.next;
  }
}



module.exports = LinkedList;




const listA = new LinkedList();
const listB = new LinkedList();

listA.insert(3);
listA.insert(2);
listA.insert(1);

listB.insert(6);
listB.insert(5);
listB.insert(4);

let merged = listA.mergeLists(listA,listB);

console.log(merged);