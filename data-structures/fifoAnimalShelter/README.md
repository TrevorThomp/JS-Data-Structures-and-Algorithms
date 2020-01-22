# Stacks and Queues
A Queue is a data structure that consists of Nodes that are placed in the queue on one side and dequeued from the other side.

## Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

## Approach & Efficiency
The approach that I took was declaring an Animal Shelter class that would instantiate two separate queues that represent cats and dogs. Within this class I added the two enqueue and dequeue methods that would target their specific queue and either add them or remove them. I also imported a previous queue that was being used to enqueue and dequeue the appropriate queues.

## API
### Queue
* `enqueue(animal)` - Adds animal to the specified shelter
* `dequeue(pref)` - Removes animal from the specified shelter

## Links
* [submissionPR](https://github.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/pull/18)
* [travis](https://travis-ci.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/builds/145576945)
* [docs](/docs)

## Links to Code
* [codeLink](fifo-animal-shelter.js)
* [testLink](__tests__/fifo-animal-shelter.test.js)

## UML
![Animal Shelter](/assets/whiteboard.jpg)
![Animal Shelter](/assets/whiteboard2.jpg)
