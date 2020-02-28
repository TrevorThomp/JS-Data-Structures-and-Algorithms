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

  addEdge() {

  }

  addValue(value){
  
  }
  //directed edge add
  addDirectedEdge( startVertex, endVertex, weight=0) {

    //make sure vertices exist

    //get/retrieve what's currently in my map object at the specified vertex - startVertex.
    //for that startVertex, push into the corresponding array (array is the value in the key:value pair)


  }
  getNeighbors(value) {
    //for given vertex argument, return all of its neighbors

  }

  getVertices(){
  //returns all of the vertices in the graph data structure
  }

  size(){
    return this.adjacencyList.size();
  //count of number of vertices in the graph
  }
}

module.export = Graph;