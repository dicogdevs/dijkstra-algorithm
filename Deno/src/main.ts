import Graph from "./Graph.ts";

function main() {
  const myGraph = new Graph();
  myGraph.addNode("Diego");
  myGraph.addNode("Jorge", "Diego", 4);
  myGraph.linkedNodes.forEach((value) => console.log(value));
}

main();
