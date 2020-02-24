'use strict';

const {Hashmap} = require('../../data-structures/hashTable/hashTable');

function _split(str) {
  return str.match(/\b\w+\b/g);
}


const repeatedWords = (string) => {
  if (!string) return 'No String Provided';

  let hashTable = new Hashmap();
  let arrayWords = _split(string);
  for(let i = 0; i < arrayWords.length; i++){
    let value = arrayWords[i];
    let key = value;
    if(hashTable.contains(value)){
      return value;
    }
    hashTable.add(key, value);
  }
  return 'No Duplicate Words Found';
};

module.exports = repeatedWords;