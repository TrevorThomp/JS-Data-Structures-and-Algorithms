# Challenge Summary
Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Challenge Description
Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
The approach was to create a set and two empty arrays that will hold the values as the graph is traversed through. If the set has current values then they get pushed onto the queue and then dequeue into the result array as the iteration completes. Once the queue is empty, then return the result array containing the order the graph was traversed through.

 ## Link to Code
 * [Code Link](./graph-edge.js)
 * [Test Link](./__tests__/graph-edge.test.js)

## Solution
![whiteBoard](./assets/whiteboardOne.jpg)
![whiteBoard](./assets/whiteboardTwo.jpg)
