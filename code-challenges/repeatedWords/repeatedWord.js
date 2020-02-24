'use strict';

const {Hashmap} = require('../../data-structures/hashTable/hashTable');

const repeatedWords = (string) => {
  if (!string) return 'No String Provided';

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
  return 'No Duplicate Words Found';
};

module.exports = repeatedWords;