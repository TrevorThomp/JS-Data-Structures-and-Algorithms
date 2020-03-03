'use strict';

const {Graph, Vertex} = require('../../graphBreadthFirst/graph-bfs');
const getEdge = require('../graph-edge');

describe('getEdge', () => {
  const graph = new Graph();

  it('getEdge()', () => {
    let nodeOne = new Vertex('One');
    let nodeTwo = new Vertex('Two');
    let nodeThree = new Vertex('Three');
    graph.addNode(nodeOne);
    graph.addNode(nodeTwo);
    graph.addNode(nodeThree);
    graph.addEdge(nodeOne, nodeTwo, 43);
    graph.addEdge(nodeTwo, nodeThree, 12);

    let destinations = ['One', 'Two','Three'];
    let result = getEdge(destinations, graph);
    expect(result).toEqual(55);
  });

  it('should throw an error. Missing city in map', () => {
    let lumioseCity = new Vertex('Bend');
    let cinnabarIsland = new Vertex('Portland');

    graph.addNode(lumioseCity);
    graph.addNode(cinnabarIsland);
    graph.addEdge(lumioseCity, cinnabarIsland);

    let destinations = ['Bend', 'Portland'];

    expect(()=>{
      graph.getEdge(destinations).toThrow();
    });
  });

});