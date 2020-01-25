# Trees
Trees are data structures that astr structured similar to linked lists but the nodes have the ability to branch off into both left and right children.

## Challenge
Create a Node and BinaryTree class that has the ability to sort out the tree's nodes in preOrder, inOrder and postOrder. The Node class should have the properties of holding a value and have pointers that can point either left or right.

## Approach & Efficiency
My approach was to declare a node class that has a value, left and right properties so they are able to hold children. Then I created a BinaryTree class that has the ability to add nodes to the structure. This tree class has methods that traverse through the nodes and pushes them into an array where they are returned. This approach is 0(n) efficiency.

## API
* `preOrder` - Returns array of nodes in preOrder fashion
* `inOrder` - Returns array of nodes inOrder fashion
* `postOrder` - Returns array of nodes in postOrder fashion

## Whiteboard

![binaryTree](/assets/whiteboard.jpg)
![binaryTree](/assets/whiteboard2.jpg)