'use strict';

const {Hashmap} = require('../../data-structures/hashTable/hashTable');
const {BinarySearchTree} = require('../../data-structures/tree/tree');

function treeIntersect(treeOne, treeTwo) {
  const arr = [];
  const HT = new Hashmap(1);
  let add;

  let traverse = node => {
    if (node.left) traverse(node.left);
    if(node.val) {
      add = HT.add(node.val, node.val)
    }
    if (add === 'Key already being used') arr.push(node.val)
    if(node.right) traverse(node.right)
  };


  traverse(treeOne.root);
  traverse(treeTwo.root);

  return arr;
}

let BST = new BinarySearchTree();
let test = new BinarySearchTree();

BST.add(10)
BST.add(2)
BST.add(3)

test.add(10)
test.add(4)
test.add(5)

console.log(treeIntersect(BST,test))