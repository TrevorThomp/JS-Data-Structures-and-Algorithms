'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

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

  getKey(key) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value[0] === key) return current.value[1]; 
      current = current.next;
    }

    return;
  }

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

class Hashmap {
  constructor(size) {
    this.size = size || 5,
    this.buckets = new Array(this.size);
  }

  hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    },0) * 599 % this.size;
  }

  add(key, value) {
    if (!key) throw new Error('Invalid key provided');
    if (this.contains(key)) return 'Key already being used';

    let index = this.hash(key);

    if (!this.buckets[index])  { this.buckets[index] = new LinkedList(); }

    this.buckets[index].add([key, value]);
  
  }

  get(key) {
    if (!key) throw new Error('Invalid key provided');

    let index = this.hash(key);

    if (!this.buckets[index])  { return null; }

    return this.buckets[index].getKey(key);
  }

  contains(key) {
    if (!key) throw new Error('Invalid key provided');

    let index = this.hash(key);

    if (!this.buckets[index])  { return null; }

    return this.buckets[index].getWithKey(key) ? true : false;
  }
}

let myhash = new Hashmap(1024);
myhash.add('John','Boss');
myhash.add('Cathy','The Real Boss');
myhash.add('Zach','Kid 1');
myhash.add('Allie','Kid 2');
myhash.add('Rosie','Dog');
myhash.add('Cat','TA');
myhash.add('Justin','Student');
myhash.add('Jason','Student');
myhash.add('Ben','Student');
myhash.add('Timea','Student');
myhash.add('Jen','Student');
myhash.add('Khalil','Student');
myhash.add('Michael','Student');
myhash.add('Ovi','Student');


let get = myhash.get('Timea');
console.log(get)
