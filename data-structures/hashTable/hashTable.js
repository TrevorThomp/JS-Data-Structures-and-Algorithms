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
    const node = new Node(value);
    if ( ! this.head ) {
      this.head = node;
      return;
    }

    let current = this.head;
    while( current.next ) {
      current = current.next;
    }
    current.next = node;
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

  getKey(key) {
    if (!key) return 'No Key Provided';

    let current = this.head;

    while (current) {
      if (current.value[0] === key) return current.value[1]
      current = current.next;
    }
    return;
  }
}

class Hashmap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size); //.fill();
  }

  hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    },0) * 599 % this.size;
    
  }

  add(key,value) {
    let hash = this.hash(key);
    if(! this.map[hash] ) { this.map[hash] = new LinkedList(); }

    // We used an object here, but this could be anything...
    let entry = { [key]: value };
    //this.map[has] is an instance of the LL that you can add an etry to
    this.map[hash].add( entry );
  }

  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {string}
   */
  get(key) {

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

myhash.map.forEach( (data,i) => {
  console.log(i, data && data.values());
});
