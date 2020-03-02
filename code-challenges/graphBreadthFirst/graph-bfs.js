'use strict';

const {Queue} = require('../../data-structures/stacksAndQueues/stacks-and-queues');

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
class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  /**
   * Adds new value vertex
   * @param {*} value 
   */
  addValue(value){
    this.addNode(new Vertex(value));
  }

  /**
   * Adds a vertex to the adjacency list
   * @param {A} vertex 
   */
  addNode(vertex){
    this.adjacencyList.set(vertex, []);
  }

  /**
   * Adds edges between the start and end vertex
   * @param {*} startVertex 
   * @param {*} endVertex 
   * @param {*} weight 
   */
  addEdge(startVertex, endVertex, weight = 0){
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('ERROR: Invalid Vertices');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  /**
   * Retrieves neighbors of the given vertex
   * @param {*} vertex 
   */
  getNeighbors(vertex){
    if(!this.adjacencyList.has(vertex)){
      throw new Error('ERROR: Invalid vertex', vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }

  /**
   * Returns values of the graph
   * @returns {Array}
   */
  getValues(){
    let nodes = [ ...this.adjacencyList.keys() ];
    let result =[];
    nodes.map(key => {
      key = key.value;
      result.push(key);
    });
    return result;
  }

  /**
   * Retrieves key value pairs of the adjacencyList
   * @returns {Array}
   */
  getNodes(){
    let nodes = [ ...this.adjacencyList.keys() ];
    return nodes;
  }

  /**
   * Returns the total size of the adjacencyList
   */
  size(){
    return this.adjacencyList.size;
  }

  /**
   * Searches through graph in a breadth first fashion
   * @param {object} startNode 
   */
  bfs(startNode){
    if (typeof startNode !== 'object') return 'Invalid Node';
    if (this.size() === 0) return 'Graph is empty';

    let visitedVertices = new Set();
    let queue = new Queue();
    let results = [];

    queue.enqueue(startNode);
    visitedVertices.add(startNode);

    while(queue.length){
      let deQueue = queue.dequeue();

      results.push(deQueue);
      visitedVertices.add(deQueue);

      const neighbors = this.getNeighbors(deQueue);

      for(let k of neighbors){
        let neighbor = k.vertex;

        if(visitedVertices.has(neighbor)){
          continue;
        }else{
          visitedVertices.add(neighbor);
        }

        queue.enqueue(neighbor);
      }
    }
    return results;
  }
}

module.exports = {Graph, Vertex, Edge};