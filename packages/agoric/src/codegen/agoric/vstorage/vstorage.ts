import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Data is the vstorage node data. */
export interface Data {
  value: string;
}
/** Data is the vstorage node data. */
export interface DataSDKType {
  value: string;
}
/**
 * Children are the immediate names (just one level deep) of subnodes leading to
 * more data from a given vstorage node.
 */
export interface Children {
  children: string[];
}
/**
 * Children are the immediate names (just one level deep) of subnodes leading to
 * more data from a given vstorage node.
 */
export interface ChildrenSDKType {
  children: string[];
}
function createBaseData(): Data {
  return {
    value: ""
  };
}
export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Data {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<Data>): Data {
    const message = createBaseData();
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseChildren(): Children {
  return {
    children: []
  };
}
export const Children = {
  encode(message: Children, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.children) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Children {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Children>): Children {
    const message = createBaseChildren();
    message.children = object.children?.map(e => e) || [];
    return message;
  }
};