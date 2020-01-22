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



});