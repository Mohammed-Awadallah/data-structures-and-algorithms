# Singly Linked List
A linked list is a sequence of data structures, which are connected together via links. Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array.

## Challenge
### Node
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
### Linked List
Create a Linked List class
Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.
The class should contain the following methods
insert
Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.
includes
Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.
to string
Arguments: none
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency
LinkedList is that insertions and deletion can be done very quickly.
If you just want to insert an element right to the beginning of the LinkedList, that can be done in constant time O(1).
If you want to delete an element at the beginning of a LinkedList, again constant time O(1).

## API
All of the reading i did was from  
https://blog.devgenius.io/javascript-linked-lists-create-a-linkedlist-class-api-insert-first-c309f41b24ca