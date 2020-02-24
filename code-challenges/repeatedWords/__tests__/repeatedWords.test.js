'use strict';

const repeatedWords = require('../repeatedWord');

describe('Repeated Words Functionality', () => {

  it('Returns first word to repeat', () => {
    const string = 'Test a Test a';
    expect(repeatedWords(string)).toBe('test');
  });

  it('Should not return second word that repeats', () => {
    const string = 'Test a Test a';
    expect(repeatedWords(string)).not.toBe('a');
  });

});