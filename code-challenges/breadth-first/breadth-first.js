'use strict';

const {BinarySearchTree} = require('../../data-structures/tree/tree');
const {BinaryTreeNode} = require('../../data-structures/tree/tree');
const {Queue} = require('../../data-structures/stacksAndQueues/stacks-and-queues');

let BT = new BinarySearchTree(45);
BT.add(75);
BT.add(65);
BT.add(55);
BT.add(45);
BT.add(35);
BT.add(25);
BT.add(15);

function breadthFirst(tree) {
  let queue = new Queue();
  queue.enqueue(tree.root)
 
  let currentNode = queue.dequeue();
  console.log(currentNode)


  while (currentNode) {
    console.log(currentNode.val);
    queue.enqueue(currentNode.left);
    queue.enqueue(currentNode.right);
    currentNode = queue.dequeue();
  }
}

console.log(breadthFirst(BT))