'use strict';

const binarySearch = require('../array-binary-search');

describe('function should return index of provided key', () => {

  it('should should return -1 if key is not within array', () => {
    const array = [1,2,3,4,5];
    const key = 6;
    expect(binarySearch(array,key)).toEqual(-1);
  });


  it('should return index of key if located in array', () => {
    const array = [1,2,3,4,5,6,7,8,9,10];
    const key = 2;
    expect(binarySearch(array,key)).toBe(1);
  });

  it('benchmark for array containing 100', () => {
    const arrayRange = Array.from({length: 100}, (v,k) => k+1);
    const key = 45;
    expect(binarySearch(arrayRange,key)).toBeTruthy();
  });

  it('benchmark for array containing 1000', () => {
    const arrayRange = Array.from({length: 1000}, (v,k) => k+1);
    const key = 25;
    expect(binarySearch(arrayRange,key)).toBeTruthy();
  });

  it('benchmark for array containing 100000', () => {
    const arrayRange = Array.from({length: 100000}, (v,k) => k+1);
    const key = 999;
    expect(binarySearch(arrayRange,key)).toBeTruthy();
  });

});