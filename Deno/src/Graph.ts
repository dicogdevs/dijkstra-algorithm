import LinkedNode from "./LinkedNode.ts";
export default class Graph<T> {
  private _linkedNodes: LinkedNode<T>[];
  constructor() {
    this._linkedNodes = [];
  }

  set linkedNodes(value: LinkedNode<T>[]) {
    this._linkedNodes = value;
  }

  get linkedNodes() {
    return this._linkedNodes;
  }
  addNode(value: T, source?: string, weight?: number) {
    const newLinkedNode = new LinkedNode(value);
    if (
      this.linkedNodes.length != 0 && source != undefined && weight != undefined
    ) {
      const sourceLinkedNode = this.linkedNodes.find((value) =>
        value.data === source
      );
      sourceLinkedNode?.addEdge(weight, newLinkedNode);
    }
    this.linkedNodes.push(newLinkedNode);
  }
}
