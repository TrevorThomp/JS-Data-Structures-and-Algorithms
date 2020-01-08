'use strict';

const binarySearch = require('../array-binary-search');

describe('function should return index of provided key', () => {
  it('should should return -1 if key is not within array', () => {
    const array = [1,2,3,4,5];
    const key = 6;
    expect(binarySearch(array,key)).toEqual(-1);
  });

});