'use strict';

const quickSort = require('../quickSort');

describe('Quick', () => {

  it('Returns error when given no array', () => {
    expect(quickSort()).toBe('No Array Given');
  });

  it('Properly sorts array', () => {
    const array = [8,4,23,15,42,16];
    expect(quickSort(array)).toEqual([4,8,15,16,23,42]);
  });
});