'use strict';

const util = require('util');

/**
 * @class
 */
class Vertex {
  constructor(value){
    this.value = value;
  }
}

/**
 * @class
 */
class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight || 0;
  }
}

/**
 * @class
 */
class Graph{
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  addValue(value){
    this.addNode(new Vertex(value));
  //directed edge add
  }
  addDirectedEdge( startVertex, endVertex, weight=0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) return 'Error';
    //make sure vertices exist

    //get/retrieve what's currently in my map object at the specified vertex - startVertex.
    //for that startVertex, push into the corresponding array (array is the value in the key:value pair)
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }
  getNeighbors(value) {
    //for given vertex argument, return all of its neighbors
    return [...this.adjacencyList.get(value)];
  }

  getVertices(){
    let nodes = [ ...this._adjacencyList.keys() ];
    let result =[];
    nodes.map(key => {
      key = key.value;
      result.push(key);
    });
    return result;
  }

  size(){
    return this.adjacencyList.size();
  //count of number of vertices in the graph
  }
}

module.export = Graph;