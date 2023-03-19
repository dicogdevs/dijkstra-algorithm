import LinkedNode from "./LinkedNode.ts";

export default class Edge<T> {
  constructor(private _weight: number, private _to: LinkedNode<T>) {}

  set weight(value: number) {
    this._weight = value;
  }

  get weight() {
    return this._weight;
  }

  set to(value: LinkedNode<T>) {
    this._to = value;
  }

  get to() {
    return this._to;
  }
}
