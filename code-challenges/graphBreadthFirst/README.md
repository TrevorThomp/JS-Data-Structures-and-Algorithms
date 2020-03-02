# Challenge Summary
Write a function that traverses through a graph in a breadth first search.

## Challenge Description
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach & Efficiency
The approach was to write a two functions. Once that takes in a tree and returns the values of those nodes within that true in array format. The other function being returned is going to loop through the given tree until it reaches the end. This will then enqueue values on the way through, then dequeue them and push them into the array. Once it reaches the end it will return the array.

 ## Link to Code
 * [Code Link](./graph-bfs.js)
 * [Test Link](./__tests__/graph-bfs.test.js)

## Solution
![whiteBoard](./assets/whiteboardOne.jpg)
