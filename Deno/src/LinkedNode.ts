import Edge from "./Edge.ts";
import Node from "./Node.ts";

export default class LinkedNode<T> extends Node<T> {
  private _edges: Edge<T>[];

  constructor(value: T) {
    super(value);
    this._edges = [];
  }

  set edges(value: Edge<T>[]) {
    this._edges = value;
  }

  get edges() {
    return this._edges;
  }

  addEdge(weight: number, to: LinkedNode<T>) {
    const edge = new Edge(weight, to);

    this._edges.push(edge);
  }
}
