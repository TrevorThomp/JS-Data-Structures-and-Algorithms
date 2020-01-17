# Stacks and Queues
A Stack is a data structure that consists of Node's in a vertical column. A Queue is a data structure that consists of Nodes that are placed in the queue on one side and dequeued from the other side.

## Challenge
Create a Node, Queue and Stack class that all have the ability to add and remove nodes from their respective data structures. Also, give them the ability to peek the top item in the stack.

## Approach & Efficiency
The approach I took was defining the Node class first with the proper value and next. Then defining the LinkedList Class that has the head value. Within the LinkedList Class is all the underlying methods to manipulate the linked list. All of the methods listed within the linked list class are focused on having a 0(1) or 0(n).

## API

## Approach & Efficiency
The approach that I took was creating a method to take in two parameters representing two separate linked lists. Within the method, I instantiate a third linked list that will be holding all the values as we traverse through the other two lists. I implemented a sort feature within the list to compare each value upon traversal, then inserting the lesser value into the third list. Once one of the lists as reach the end, then we append the rest of the other list because at that point it's already sorted and can just be attached. The efficiency to this approach is 0(n);

## Links
* [submissionPR](https://github.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/pull/13/)
* [travis](https://travis-ci.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/builds/144421889)
* [docs](/docs)

## Links to Code
* [codeLink](linked-list.js)
* [testLink](__tests__/linked-list.test.js)


## UML
![append/insertBefore/insertAfter](assets/IMG_4239.JPG)
![kthFromEnd](assets/IMG_4237.JPG)
![kthFromEnd](assets/IMG_4238.JPG)
![mergeSort](assets/mergeSort.jpg)
