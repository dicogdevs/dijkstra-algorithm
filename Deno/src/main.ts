import LinkedNode from "./LinkedNode.ts";

function main() {
  const myFirstLinkedNode = new LinkedNode("Diego G.");
  const mySecondLinkedNode = new LinkedNode("Jorge");
  const myThirdLinkedNode = new LinkedNode("Diego T.");
  myFirstLinkedNode.addEdge(5, mySecondLinkedNode);
  myFirstLinkedNode.addEdge(5, myThirdLinkedNode);
  console.log(myFirstLinkedNode);
}

main();
