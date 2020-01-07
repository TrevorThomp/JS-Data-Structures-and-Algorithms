'use strict';

const shiftArray = require('../array-shift.js');

describe('Function appends value to the middle of given array', () => {

  it('Should place value in middle index', () => {
    let array = [1,2,3,4,5,6,7,8,9,10];
    let value = 8;
    let newArray = shiftArray(array,value);
    expect(newArray[5]).toEqual(8);
  });

  it('Array should be longer by one index', () => {
    let array = [1,2,3];
    let value = 5;
    let newArray = shiftArray(array,value);
    expect(newArray.length).toEqual(4);
  });

  it('Should not replace other current indexes', () => {
    let array = [1,2,3,4,5,6];
    let value = 10;
    let newArray = shiftArray(array, value);
    expect(newArray[2]).not.toEqual(10);
  });
});