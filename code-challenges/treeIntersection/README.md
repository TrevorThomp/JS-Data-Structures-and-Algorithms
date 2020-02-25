# Challenge Summary
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Challenge Description
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
The efficiency that was used is 0(n). The approach was to recursively iterate through both trees and add values to the hash table. Once the value was added, on the next iteration it would recognize the value in the hash table and then push that specific value into a new array. At the end of the interations, the array should contain matching values that were found in both trees.

 ## Link to Code
 * [Code Link](./treeIntersection.js)
 * [Test Link](./__tests__/treeIntersection.test.js)

## Solution
![whiteBoard](./assets/whiteboardOne.jpg)
![whiteBoard](./assets/whiteboardTwo.jpg)