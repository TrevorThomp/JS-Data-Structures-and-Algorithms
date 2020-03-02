'use strict';

const {Graph, Vertex, Edge} = require('../graph-bfs');

describe('Graph Breadth First', () => {

  let graph;
  let oneVertex;
  beforeEach(() => {
    graph = new Graph();
    oneVertex = new Vertex(1);
    let twoVertex = new Vertex(2);
    let threeVertex = new Vertex(3);
    let fourVertex = new Vertex(4);
    graph.addNode(oneVertex);
    graph.addNode(twoVertex);
    graph.addNode(threeVertex);
    graph.addNode(fourVertex);
    graph.addEdge(oneVertex, twoVertex);
    graph.addEdge(oneVertex, threeVertex);
    graph.addEdge(threeVertex, fourVertex);
  });

  it('Returns values in graph in BFS', () => {
    let set = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
    ];
    expect(graph.bfs(oneVertex)).toEqual(set);
  });

});