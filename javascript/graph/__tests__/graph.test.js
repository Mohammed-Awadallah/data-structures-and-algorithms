'use strict';


const { Graph, Vertex } = require('../graph');


let graph = new Graph();

let one = new Vertex(1);
let two = new Vertex(2);
let three = new Vertex(3);
let four = new Vertex(4);

describe("Graph test", () => {
    test("Node can be successfully added to the graph", () => {
        graph.addVertix(one);
        expect(graph.list.size).toBe(1);
    })

    test("A collection of all nodes can be properly retrieved from the graph", () => {
        graph.addVertix(one)
        graph.addVertix(two)
        expect(graph.getNodes()).toMatchObject([{ value: 1 }, { value: 2 }])
    })

    test("An edge can be successfully added to the graph", () => {
        graph.addDirectedEdge(one, two)
        expect(graph.list.get(one)).toMatchObject([
            { vertex: { value: 2 }, weight: 0 },
        ])
    })



    test("All appropriate neighbors can be retrieved from the graph, weight included", () => {
        expect(graph.getNeighbors(one)).toMatchObject([
            { vertex: { value: 2 }, weight: 0 },
        ])
    })

    test("The proper size is returned, representing the number of nodes in the graph", () => {
        graph.addVertix(three)
        graph.addVertix(four)
        expect(graph.getSize()).toBe(4)
    })

    test("A graph with only one node and edge can be properly returned", () => {

        graph.addDirectedEdge(three)
        expect(graph.list.size).toBe(4)
    })

    test("An empty graph properly returns null", () => {
        let newgraph = new Graph()
        expect(newgraph.getNodes().length).toBe(0)
    })
})