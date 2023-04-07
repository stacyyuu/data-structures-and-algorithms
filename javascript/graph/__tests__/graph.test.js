'use strict';
const Graph  = require('../graph');

describe('Graph Tests', () =>{
  let graph = new Graph();
  test('Node can successfully be added to the graph', () => {

    expect(graph.addNode(5)).toEqual({'value': 5});
  });
  test('An edge can successfully be added to the graph', () => {
    graph.addNode(6);
    expect(graph.addEdge(5, 6)).toEqual({'from': 5, 'to': 6});
  });
  test('A collection of all edges can be properly retrieved from a node', () => {
    graph.addNode(7);
    graph.addEdge(5, 7);
    expect(graph.getEdges(5)).toEqual([{'from': 5, 'to': 6}, {'from': 5, 'to': 7}]);
  });
  test('Neighbors can be retrieved from the graph', () => {
    expect(graph.getNeighbors(5)).toEqual([[6, undefined],[7, undefined]]);
  });
  test('Proper size of nodes is returned', () => {
    expect(graph.nodes.size).toEqual(3);
  });
  test('A graph with one node and edge can be returned', () => {
    let single = new Graph();
    single.addNode(10);
    single.addEdge(10);
    expect(single.getEdges(10)).toEqual([{'from': 10, 'to': undefined}]);
  });
  test('Empty collection if there are no nodes', () => {
    let newGraph = new Graph();
    expect(newGraph.getEdges()).toEqual();
  });
  test('Empty collection if there are no nodes', () => {
    let newGraph = new Graph();
    expect(newGraph.getNeighbors()).toEqual();
  });
  test('Breadth first traversal', () => {
    let traversal = new Graph();
    traversal.addNode(11);
    traversal.addNode(13);
    traversal.addNode(15);
    traversal.addNode(16);
    traversal.addEdge(11, 13);
    traversal.addEdge(11, 15);
    traversal.addEdge(15, 16);
    expect(traversal.breadthFirst(11)).toEqual();
  });
});
