'use strict';

/**
 * Node Class
 * @class
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  enqueue(animal) {
    let newNode = new Node(animal);

    if(!this.front) {
      this.front = newNode;
      this.rear = newNode;
    }

    this.rear.next = newNode;
    this.rear = newNode;
    this.rear.next= null;
  }

  dequeue(pref) {

    if (pref !== 'dog' || pref !== 'cat') return null;

  }
}

const shelter = new AnimalShelter();

shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('dog');

console.log(shelter)