import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface Node {
  children: Child[];
}
export interface NodeSDKType {
  children: ChildSDKType[];
}
export interface Child {
  index: Uint8Array;
  accumulation: string;
}
export interface ChildSDKType {
  index: Uint8Array;
  accumulation: string;
}
export interface Leaf {
  leaf?: Child;
}
export interface LeafSDKType {
  leaf?: ChildSDKType;
}
function createBaseNode(): Node {
  return {
    children: []
  };
}
export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.children) {
      Child.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Node {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Node>): Node {
    const message = createBaseNode();
    message.children = object.children?.map(e => Child.fromPartial(e)) || [];
    return message;
  }
};
function createBaseChild(): Child {
  return {
    index: new Uint8Array(),
    accumulation: ""
  };
}
export const Child = {
  encode(message: Child, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.accumulation !== "") {
      writer.uint32(18).string(message.accumulation);
    }
    return writer;
  },
  fromJSON(object: any): Child {
    return {
      index: isSet(object.index) ? bytesFromBase64(object.index) : new Uint8Array(),
      accumulation: isSet(object.accumulation) ? String(object.accumulation) : ""
    };
  },
  fromPartial(object: Partial<Child>): Child {
    const message = createBaseChild();
    message.index = object.index ?? new Uint8Array();
    message.accumulation = object.accumulation ?? "";
    return message;
  }
};
function createBaseLeaf(): Leaf {
  return {
    leaf: undefined
  };
}
export const Leaf = {
  encode(message: Leaf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaf !== undefined) {
      Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Leaf {
    return {
      leaf: isSet(object.leaf) ? Child.fromJSON(object.leaf) : undefined
    };
  },
  fromPartial(object: Partial<Leaf>): Leaf {
    const message = createBaseLeaf();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? Child.fromPartial(object.leaf) : undefined;
    return message;
  }
};