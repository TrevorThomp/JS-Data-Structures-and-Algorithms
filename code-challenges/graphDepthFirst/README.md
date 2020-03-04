# Challenge Summary
Write a function that traverses through a graph in a depth first search.

## Challenge Description
Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

## Approach & Efficiency
The approach was to create a set and two empty arrays that will hold the values as the graph is traversed through. If the set has current values then they get pushed onto the queue and then dequeue into the result array as the iteration completes. Once the queue is empty, then return the result array containing the order the graph was traversed through.

 ## Link to Code
 * [Code Link](./graph-dfs.js)
 * [Test Link](./__tests__/graph-dfs.test.js)

## Solution
![whiteBoard](./assets/whiteboardOne.jpg)
![whiteBoard](./assets/whiteboardTwo.jpg)
