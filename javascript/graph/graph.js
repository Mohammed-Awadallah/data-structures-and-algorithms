'use strict';


class Vertex {
    constructor(value) {
        this.value = value;
    }
}


class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}


class Graph {
    constructor() {
        this.list = new Map();
    }

    addVertix(vertex) {
        this.list.set(vertex, [])
    }

    addDirectedEdge(startVertex, endVertex, weight = 0) {
        if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
            console.log('Invaild nodes');
        }

        const edge = new Edge(endVertex, weight);
        const start = this.list.get(startVertex);
        start.push(edge);

    }
    printAll() {
        for (const [vertex, edge] of this.list.entries()) {
            console.log(vertex, edge)
        }
    }
    getNeighbors(vertex) {
        if (!this.list.has(vertex)) {
            return 'INVALID NODE';
        } else {
            return this.list.get(vertex);
        }
    }

    getNodes() {
        let result = [];
        for (const [vertex, edge] of this.list.entries()) {
            result.push(vertex);
        }
        return result;
    }

    getSize() {
        return this.list.size > 0 ? this.list.size : null;
    }
    breadthFirstSearch(startVertex, endVertex) {
    startVertex = this.list.get(startVertex);
    endVertex = this.list.get(endVertex);
    let queue = [];
    let visited = [];
    let path = [];
    queue.push(startVertex);
    while (queue.length > 0) {
        let current = queue.shift();
        visited.push(current);
        if (current === endVertex) {
            path.push(current);
            break;
        }
        for (let i = 0; i < current.length; i++) {
            if (visited.indexOf(current[i]) === -1) {
                queue.push(current[i]);
            }
        }
    }

}
depthFirstSearch(startVertex, endVertex) {
    startVertex = this.list.get(startVertex);
    endVertex = this.list.get(endVertex);
    let stack = [];
    let visited = [];
    let path = [];
    stack.push(startVertex);
    while (stack.length > 0) {
        let current = stack.pop();
        visited.push(current);
        if (current === endVertex) {
            path.push(current);
            break;
        }
        for (let i = 0; i < current.length; i++) {
            if (visited.indexOf(current[i]) === -1) {
                stack.push(current[i]);
            }
        }
    }
}
}

module.exports = { Graph, Vertex };