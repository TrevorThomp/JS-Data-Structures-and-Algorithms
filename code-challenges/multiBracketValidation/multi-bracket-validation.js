'use strict';

const {Stack} = require('../../data-structures/stacksAndQueues/stacks-and-queues');


/**
 * Returns boolean based on balanced or unbalanced brackets
 * @param {string} str 
 */
function multiBracketValidation(str) {
  let stack = new Stack();

  let open = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  let closed = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];

    if (open[bracket]) {
      stack.push(bracket);
      
    } else if (closed[bracket]) {
      if (open[stack.pop().value] !== bracket) return false;
    }
  }
  return true;
}

module.exports = multiBracketValidation;