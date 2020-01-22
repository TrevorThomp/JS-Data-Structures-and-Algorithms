'use strict';

const multiValidatorFunction = require('../multi-bracket-validation');

describe('Multivalidator function', () => {

  it('Should return true with balanced brackets', () => {
    expect(multiValidatorFunction('()()()()()')).toEqual(true);
  });

  it('Should return false with unbalanced brackets', () => {
    expect(multiValidatorFunction('(){)')).toEqual(false);
  });
});