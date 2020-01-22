'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe('Animal Shelter', () => {

  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  it('Should successfully add dogs and cats to queues', () => {
    shelter.enqueue('dog');
    expect(shelter.dog.front.value).toEqual('dog');
    shelter.enqueue('cat');
    expect(shelter.cat.front.value).toEqual('cat');
  });

  it('Should return null if cat or dog is not specified', () => {
    shelter.enqueue('dog');
    expect(shelter.dequeue()).toBeNull();
  });

  it('Should remove animal from shelter', () => {
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.dequeue('cat');
    expect(shelter.cat.length).toBe(1);
  });

});