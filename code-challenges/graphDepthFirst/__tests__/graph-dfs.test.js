'use strict';

const {Graph, Vertex} = require('../../../data-structures/graph/graph');


const depthFirst = require('../graph-dfs');

describe('depthFirst\'s', () => {

  const graph = new Graph();
  it('', () => {
    let vertexA = new Vertex('A');
    let vertexB = new Vertex('B');
    let vertexC = new Vertex('C');
    let vertexD = new Vertex('D');

    graph.addNode(vertexA);
    graph.addNode(vertexB);
    graph.addNode(vertexC);
    graph.addNode(vertexD);

    graph.addBiDirectionalEdge(vertexA, vertexC);
    graph.addBiDirectionalEdge(vertexC, vertexD);
    graph.addBiDirectionalEdge(vertexA, vertexB);

    let result = depthFirst(graph);
    expect(result).toEqual(vertexA);

  });

});