'use strict';


const { Graph, Vertex } = require('../graph');


let graph = new Graph();

let first = new Vertex(1);
let second = new Vertex(2);
let third = new Vertex(3);
let fourth = new Vertex(4);

describe("Graph test", () => {
    test("Node can be successfully added to the graph", () => {
        graph.addVertix(first);
        expect(graph.list.size).toBe(1);
    })

    test("A collection of all nodes can be properly retrieved from the graph", () => {
        graph.addVertix(first)
        graph.addVertix(second)
        expect(graph.getNodes()).toMatchObject([{ value: 1 }, { value: 2 }])
    })

    test("An edge can be successfully added to the graph", () => {
        graph.addDirectedEdge(first, second)
        expect(graph.list.get(first)).toMatchObject([
            { vertex: { value: 2 }, weight: 0 },
        ])
    })



    test("All appropriate neighbors can be retrieved from the graph, weight included", () => {
        expect(graph.getNeighbors(first)).toMatchObject([
            { vertex: { value: 2 }, weight: 0 },
        ])
    })

    test("The proper size is returned, representing the number of nodes in the graph", () => {
        graph.addVertix(third)
        graph.addVertix(fourth)
        expect(graph.getSize()).toBe(4)
    })

    test("A graph with only one node and edge can be properly returned", () => {

        graph.addDirectedEdge(third)
        expect(graph.list.size).toBe(4)
    })

    test("An empty graph properly returns null", () => {
        let newgraph = new Graph()
        expect(newgraph.getNodes().length).toBe(0)
    })
})