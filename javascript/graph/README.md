# Graphs
Implement a class Graph. It should include the following methods:

    - addNode:
      - Arguments: value
      - Returns: added node
      - Add a node to the graph

    - addEdge:
      - Arguments: two nodes to be connected by the edge
      - Returns: nothing
      - Adds a new edge between two nodes in the graph
      - If specified, assign a weight to the edge
      - Both nodes should already be in the graph

    - getEdges:
      - Arguments: node
      - Returns: a collection of all of the edges
      - Empty collection returned if there are no edges

    - getNeighbors:
      - Arguments: node
      - Returns: a collection of edges connected to the given node
        - Include the weight of the connection in the returned collection

    - size:
      - Arguments: none
      - Returns the total number of nodes in the graph
      - 0 if there are none

# Tests
Write tests to prove the following functionality:

1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all edges can properly be retrieved from a node
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned
