'use strict';

const {Hashmap} = require('../../data-structures/hashTable/hashTable');

/**
 * Function accepts str value and converts them into array.
 * @param {*} str 
 * @returns Returns array of words
 */
function _split(str) {
  return str.match(/\b\w+\b/g);
}

/**
 * Function takes string and converts to array and stores in hash table. If string is in the hash table, then return the value.
 * @param {*} string 
 */
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