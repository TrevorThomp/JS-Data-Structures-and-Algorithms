'use strict';

const mergeSort = require('../quickSort');

describe('Quick', () => {

  it('Returns error when given no array', () => {
    expect(mergeSort()).toBe('No Array Given');
  });

  it('Properly sorts array', () => {
    const array = [8,4,23,15,42,16];
    expect(mergeSort(array)).toEqual([4,8,15,16,23,42]);
  });

  it('Returns error when given empty array', () => {
    const array = [];
    expect(mergeSort(array)).toBe('Empty Array');
  });
});