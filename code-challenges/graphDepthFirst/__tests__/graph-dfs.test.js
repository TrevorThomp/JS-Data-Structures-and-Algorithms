'use strict';

const {Graph, Vertex} = require('../../graphBreadthFirst/graph-bfs');


const depthFirst = require('../graph-dfs');

describe('Depth First Search', () => {

  const graph = new Graph();
  it('Graph traverses properly', () => {
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
    expect(result[0]).toEqual(vertexA);
    expect(result[1]).toEqual(vertexB);
    expect(result[2]).toEqual(vertexC);
    expect(result[3]).toEqual(vertexD);

  });

  it('Returns error when improper data type', () => {
    expect(depthFirst(1)).toEqual('Invalid Graph')
  })

});