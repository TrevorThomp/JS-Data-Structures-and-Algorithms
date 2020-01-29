'use strict';

const {BinarySearchTree} = require('../../data-structures/tree/tree');
const {Queue} = require('../../data-structures/stacksAndQueues/stacks-and-queues');

let tree = new BinarySearchTree(4);
tree.add(2);
tree.add(4);
tree.add(5);
tree.add(6);

function breadthFirstList(tree){
  return breadthFirst(tree.root);
}

function breadthFirst(root){
  const values = new Array();
  const queue = new Queue();
  if(!root) return null;
  queue.enqueue(root);
  while(!queue.isEmpty()){
    let node = queue.dequeue();
    values.push(node.val);
    if(node.left) queue.enqueue(node.left);
    if(node.right) queue.enqueue(node.right);
  }
  return values;
}

module.exports = breadthFirstList;