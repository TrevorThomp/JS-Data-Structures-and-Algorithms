'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks-and-queues');

module.exports = graph => {
  let stack = new Stack();
  let output = [];
  let visited = [];

  let startVertex = graph.adjacencyList.keys().next().value;
  stack.push(startVertex);
  visited.push(startVertex);
  output.push(startVertex.value);

  while(stack.peek()){

    let neighborsArr = graph.getNeighbors(startVertex);
    for(let neighbor of neighborsArr){
      if(!visited.includes(neighbor)){
        stack.push(neighbor);
        visited.push(neighbor);
        output.push(neighbor);
        startVertex = neighbor;
        break;
      } else {
        stack.pop();
      }
    }
  }
};