# Single Linked List
Linked lists are linear data structures that don't hold elements at contiguous locations.

## Challenge
Create a Node and LinkedList class that has the ability to insert new values into the linked list and test if certain values exist in the array. Also, implement a method that returns a collection of the values in string format.

## Approach & Efficiency
The approach I took was defining the Node class first with the proper value and next. Then defining the LinkedList Class that has the head value. Within the LinkedList Class is all the underlying methods to insert, stringify and test if the value is in the list. The insert method is 0(1) and the includes and stringify is 0(n).

## API
insert(value) - Inserts value at the beginning of the linked list
includes(value) - Iterates through list checking if value exists in the list
toString() - Iterates through list attaching values to a string and returning the collection
