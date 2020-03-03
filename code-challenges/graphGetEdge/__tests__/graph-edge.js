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

  it('should return one result if only one added', () => {
    let airplaneVertex = new Vertex('Airplane');

    let result = graph.bfs(airplaneVertex);
    expect(result).toEqual(['Airplane']);
  });

  it('should throw an error. Missing city in map', () => {
    let lumioseCity = new Vertex('Lumiose City');
    let cinnabarIsland = new Vertex('Cinnabar Island');

    graph.addNode(lumioseCity);
    graph.addNode(cinnabarIsland);
    graph.addEdge(lumioseCity, cinnabarIsland);

    let destinations = ['Lumiose City', 'Cinnabar Island'];

    expect(()=>{
      graph.getEdge(destinations).toThrow();
    });
  });

});