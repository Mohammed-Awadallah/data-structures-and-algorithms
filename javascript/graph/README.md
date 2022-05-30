# Graphs
> A graph is a data structure where a node can have zero or more adjacent elements. The connection between two nodes is called edge. Nodes can also be called vertices. The degree is the number of edges connected to a vertex.

## Challenge
mplement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

add node
Arguments: value
Returns: The added node
Add a node to the graph
add edge
Arguments: 2 nodes to be connected by the edge, weight (optional)
Returns: nothing
Adds a new edge between two nodes in the graph
If specified, assign a weight to the edge
Both nodes should already be in the Graph
get nodes
Arguments: none
Returns all of the nodes in the graph as a collection (set, list, or similar)
get neighbors
Arguments: node
Returns a collection of edges connected to the given node
Include the weight of the connection in the returned collection
size
Arguments: none
Returns the total number of nodes in the graph

## breadth first 
### Challenge
Write the following method for the Graph class:

breadth first
Arguments: Node
Return: A collection of nodes in the order they were visited.
Display the collection

## approach & effeciency
Time Complexity: O(V+E), where V is the number of nodes and E is the number of edges.
Auxiliary Space: O(V)

## Visualization

![breadth](visual.png)


## API
* https://www.30secondsofcode.org/articles/s/js-data-structures-graph
* https://learnersbucket.com/tutorials/data-structures/javascript-graph-data-structure/



