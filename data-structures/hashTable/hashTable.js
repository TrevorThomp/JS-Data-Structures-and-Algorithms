'use strict';

/**
 * @class
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
   * Adds value to the end of the linked list
   * @param {*} value 
   */
  add(value) {
    if(!value) throw new Error('Invalid value');

    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;
  }

  /**
   * Accepts key and returns value of that key
   * @param {*} key 
   */
  getKey(key) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value[0] === key) return current.value[1]; 
      current = current.next;
    }

    return;
  }

  /**
   * Pushes values into array
   */
  values() {
    let values = [];
    let current = this.head;

    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}

/**
 * @class
 */
class Hashmap {
  constructor(size) {
    this.size = size || 5,
    this.buckets = new Array(this.size);
  }

  /**
   * Returns hashed string value
   * @param {string} key 
   * @returns {string}
   */
  hash(key) {
    key = key.toString();
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    },0) * 599 % this.size;
  }

  /**
   * Adds key and value to stored buckets array
   * @param {*} key 
   * @param {*} value 
   */
  add(key, value) {
    // if (!key) throw new Error('Invalid key provided');
    if (this.contains(key)) return 'Key already being used';

    let index = this.hash(key);

    if (!this.buckets[index])  { this.buckets[index] = new LinkedList(); }

    this.buckets[index].add([key, value]);
  
  }

  /**
   * Accepts a key argument and returns the value of the indexed argument
   * @param {*} key 
   * @returns Returns the value of the index
   */
  get(key) {
    if (!key) throw new Error('Invalid key provided');

    let index = this.hash(key);

    if (!this.buckets[index])  { return null; }

    return this.buckets[index].getKey(key);
  }

  /**
   * Checks array to see if key exists
   * @param {*} key 
   * @returns Returns boolean if key is within current hash table
   */
  contains(key) {
    if (!key) throw new Error('Invalid key provided');

    let index = this.hash(key);

    if (!this.buckets[index])  { return null; }

    return this.buckets[index].getKey(key) ? true : false;
  }
}

module.exports = {LinkedList, Hashmap};