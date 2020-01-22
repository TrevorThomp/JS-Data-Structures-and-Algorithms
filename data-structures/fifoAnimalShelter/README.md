# Stacks and Queues
A Queue is a data structure that consists of Nodes that are placed in the queue on one side and dequeued from the other side.

## Challenge
Create a Node, Queue and Stack class that all have the ability to add and remove nodes from their respective data structures. Also, give them the ability to peek the top item in the stack.

## Approach & Efficiency
The approach I took was creating a Node, Stack and Queue class. Within these classes are their respected methods that are focused on an efficiency of 0(1), but in certain methods will need an 0(n) for the traversal of the data structure.

## API
### Queue
* `enqueue()` - Adds a node the end of the queue
* `dequeue()` - Removes node from the front of the queue

## Links
* [submissionPR](https://github.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/pull/13/)
* [travis](https://travis-ci.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/builds/144421889)
* [docs](/docs)

## Links to Code
* [codeLink](fifo-animal-shelter.js)
* [testLink](__tests__/fifo-animal-shelter.test.js)

## UML
![Stack & Queue: Pop, Push, Peek and isEmpty](assets/stacks-and-queues.jpg)
