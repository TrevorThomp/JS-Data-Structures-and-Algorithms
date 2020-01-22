'use strict';

const {Queue} = require('../stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  enqueue(animal) {
    animal === 'cat' ? this.cat.enqueue(animal) : 'Evil Cat';
    animal === 'dog' ? this.dog.enqueue(animal) : 'Evil Dog';
  }

  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') return null;
    pref === 'cat' ? this.cat.dequeue() : 'Evil Cat';
    pref === 'dog' ? this.dog.dequeue() : 'Evil Dog';
  }

}

const shelter = new AnimalShelter();

shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('dog');

console.log(shelter)

shelter.dequeue('cat');

console.log(shelter)