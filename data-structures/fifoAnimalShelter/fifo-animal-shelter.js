'use strict';

const {Queue} = require('../stacksAndQueues/stacks-and-queues');

/**
 * Creates two queues for cats and dogs for use of FIFO
 * @class
 */
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

module.exports = AnimalShelter;