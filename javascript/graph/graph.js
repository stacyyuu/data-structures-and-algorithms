'use strict';

// vertex
class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(from, to, weight = null) {
    this.from = from;
    this.to = to;
  }
}

class Graph {
  constructor(){
    this.nodes = new Set();
    this.edges = new Map();
  }

  addNode(value) {
    let newNode = new Node(value);
    this.nodes.add(newNode);
    this.edges.set(newNode, []);
    return newNode;
  }

  addEdge(from, to, weight) {
    const edge = new Edge(from, to, weight);
    const edges = this.edges.get(from) ?? [];
    edges.push(edge);
    this.edges.set(from, edges);
    return edge;
  }

  addUndirectedEdge(a, b, weight){
    this.addEdge(a, b, weight);
    this.addEdge(b, a, weight);
  }

  getNeighbors(node) {
    // neighbors are the other ends of edges
    if(!node) return;
    let result = [];
    const edges = this.getEdges(node);
    edges.map((edge) => result.push([edge.to, edge.weight]));
    return result;
  }

  getEdges(node) {
    return this.edges.get(node);
    // all edges where from is node
  }

  breadthFirst(start){
    const queue = [start];
    const visited = new Set();
    visited.add(start);

    while(queue.length > 0){
      const current = queue.shift();

      this.getNeighbors(start)
      .filter(n => !visited.has(n))
      .forEach(n =>{
        visited.add(n);
        queue.shift(n);
      })
    }

    return visited;
  }
}


module.exports = Graph;
;
