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
  constructor() {
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

  addUndirectedEdge(a, b, weight) {
    this.addEdge(a, b, weight);
    this.addEdge(b, a, weight);
  }

  getNeighbors(node) {
    // neighbors are the other ends of edges
    if (!this.edges.has(node)) return;
    let result = [];
    const edges = this.getEdges(node);
    edges.map((edge) => result.push([edge.to, edge.weight]));
    return result;
  }

  getEdges(node) {
    return this.edges.get(node);
    // all edges where from is node
  }

  breadthFirst(start) {
    const traversal = [];
    const visited = new Set();
    let todo = [start];

    while (todo.length > 0) {
      const current = todo.shift();
      if (!visited.has(current)) {
        traversal.push(current);
        visited.add(current);

        todo = [...todo, ...this.getNeighbors(current)];
      }
    }
    return traversal;
  }

  dft(start) {
    const traversal = [];
    const visited = new Set();
    let todo = [start];

    while (todo.length > 0) {
      const current = todo.pop();
      if (!visited.has(current)) {
        traversal.push(current);
        visited.add(current);

        todo = [...todo, ...this.getNeighbors(current)];
      }
    }
    return traversal;
  }
}

module.exports = Graph;
