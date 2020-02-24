'use strict';

const {Hashmap} = require('../../data-structures/hashTable/hashTable');

const repeatedWords = (string) => {
  let hashTable = new Hashmap;
  let arrayWords = string.split(' ');
  for(let i = 0; i < arrayWords.length; i++){
    let value = arrayWords[i].toLowerCase();
    let key = value;
    if(hashTable.contains(value)){
      return value;
    }
    hashTable.add(key, value);
  }

  return 'No words found';


};

const string = 'Well this is a test to see what the this well of array of words looks like this';

console.log(repeatedWords(string))