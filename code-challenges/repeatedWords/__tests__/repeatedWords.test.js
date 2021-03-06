'use strict';

const repeatedWords = require('../repeatedWord');

describe('Repeated Words Functionality', () => {

  it('Returns first word to repeat', () => {
    const string = 'test a test a';
    expect(repeatedWords(string)).toBe('test');
  });

  it('Should not return second word that repeats', () => {
    const string = 'test a test a';
    expect(repeatedWords(string)).not.toBe('a');
  });

  it('Returns error when no string is provided', () => {
    expect(repeatedWords()).toBe('No String Provided');
  });
});