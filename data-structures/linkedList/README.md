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
append(value) - Inserts value at the end of the linked list
insertBefore(val, newValue) - Inserts newValue before val in the linked list
insertAfter(val, newValue) - Inserts newValue after the val in the linked list
remove(val) - Removes value from the linked list
kthFromEnd(k) - k represents how far into the list from the end, kthFromEnd() will return the value of that node

## Links
* [submissionPR](https://github.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/pull/13/)
* [travis](https://travis-ci.com/trevorthompson-401-advanced-javascript/data-structures-and-algorithms/builds/144421889)
* [docs](/docs)

## Links to Code
* [codeLink](linked-list.js)
* [testLink](__tests__/linked-list.test.js)


## UML
![append/insertBefore/insertAfter](assets/IMG_4239.JPG)
![append/insertBefore/insertAfter](assets/IMG_4237.JPG)
![append/insertBefore/insertAfter](assets/IMG_4238.JPG)
