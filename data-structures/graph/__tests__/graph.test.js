'use strict';

const {Graph} = require('../graph');
const {Vertex} = require('../graph');
const {Edge} = require('../graph');

describe('Graphs', () => {
  const graph = new Graph();

  afterEach(() => {
    graph.adjacencyList.clear();
  });

  it('addNode() Node can be successfully added to the graph', () => {
    let oneVertex = new Vertex(1);
    graph.addNode(oneVertex);
    expect(graph.adjacencyList.get(oneVertex)).toEqual([]);
  });

  it('addEdge() An edge can be successfully added to the graph', () => {
    let oneVertex = new Vertex(1);
    let twoVertex = new Vertex(2);
    graph.addNode(oneVertex);
    graph.addNode(twoVertex);
    graph.addEdge(oneVertex, twoVertex);

    let expected = [new Edge(new Vertex(2),0)];
    expect(graph.adjacencyList.get(oneVertex)).toStrictEqual(expected);
  });

  it('getNodes() should return array of vertex', () => {
    let gothamVertex = new Vertex('One');
    let palletTown = new Vertex('Two');
    let bikiniBottom = new Vertex('Three');
    let stardewValley = new Vertex('Four');
    graph.addNode(gothamVertex);
    graph.addNode(palletTown);
    graph.addNode(bikiniBottom);
    graph.addNode(stardewValley);
    graph.addEdge(gothamVertex, palletTown);

    let result = graph.getNodes();
    expect(result).toEqual([gothamVertex,palletTown, bikiniBottom, stardewValley]);
  });

  it('getValues() A collection of all nodes can be properly retrieved from the graph', () => {
    let oneVertex = new Vertex('One');
    let twoVertex = new Vertex('Two');
    let threeVertex = new Vertex('Three');

    graph.addNode(oneVertex);
    graph.addNode(twoVertex);
    graph.addNode(threeVertex);
    graph.addEdge(oneVertex, twoVertex);
    graph.addEdge(oneVertex, threeVertex);

    let nodes = graph.getValues();
    expect(nodes).toEqual([ 'One', 'Two', 'Three' ]);
  });

  it('getNeighbors() All appropriate neighbors can be retrieved from the graph', () => {
    let oneVertex = new Vertex(1);
    let twoVertex = new Vertex(2);
    graph.addNode(oneVertex);
    graph.addNode(twoVertex);
    graph.addEdge(oneVertex, twoVertex);
    let expected = [{vertex: { value: 2 }, weight: 0} ];

    expect(graph.getNeighbors(oneVertex)).toEqual(expected);
  });

  it('size() The proper size is returned, representing the number of nodes in the graph', () => {
    let oneVertex = new Vertex(1);
    let twoVertex = new Vertex(2);
    graph.addNode(oneVertex);
    graph.addNode(twoVertex);
    graph.addEdge(oneVertex, twoVertex);
    let expected = 2;

    expect(graph.size()).toEqual(expected);
  });

});