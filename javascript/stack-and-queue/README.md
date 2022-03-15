# Stacks and Queues
## What is a Stack?
Stores a set of elements in a particular order
Accessed in Last Accessed in Last-In-First-Out (LIFO) fashion
Real life examples:
 Real life examples:
• Pile of books Pile of books
• PEZ dispenser
• Cup trays in cafeteria
CS examples: program execution stack, CS examples: program execution stack,
parsing/evaluating expressions parsing/evaluating expressions

## Challenge
### Node 
>Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
### Stack 
> Create a Stack class that has a top property. It creates an empty Stack when instantiated.
### Queue
> Create a Queue class that has a front property. It creates an empty Queue when instantiated.

## Approach & Efficiency

Each operation is O(1) running time
• Independent of number of items in stack
• push, pop, top, isEmpty
Space can be Space can be O(n) or may be much more
• depends if depends if n is known at initialization time

## API
References of my read : 
 * [very helpful documentation](https://www.cs.jhu.edu/~cohen/CS226/Lectures/StackQueue.pdf)
 * [frotnEndMasters](https://frontendmasters.com/courses/data-structures-interviews/stack-queue/)
 * [purdue education](https://www.cs.purdue.edu/homes/ayg/CS251/slides/chap3.pdf)