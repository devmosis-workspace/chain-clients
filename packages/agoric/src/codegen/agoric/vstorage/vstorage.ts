import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Data is the vstorage node data. */
export interface Data {
  value: string;
}
export interface DataProtoMsg {
  typeUrl: "/agoric.vstorage.Data";
  value: Uint8Array;
}
/** Data is the vstorage node data. */
export interface DataAmino {
  value: string;
}
export interface DataAminoMsg {
  type: "/agoric.vstorage.Data";
  value: DataAmino;
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
export interface ChildrenProtoMsg {
  typeUrl: "/agoric.vstorage.Children";
  value: Uint8Array;
}
/**
 * Children are the immediate names (just one level deep) of subnodes leading to
 * more data from a given vstorage node.
 */
export interface ChildrenAmino {
  children: string[];
}
export interface ChildrenAminoMsg {
  type: "/agoric.vstorage.Children";
  value: ChildrenAmino;
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
  typeUrl: "/agoric.vstorage.Data",
  encode(message: Data, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DataAmino): Data {
    return {
      value: object.value
    };
  },
  toAmino(message: Data): DataAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: DataAminoMsg): Data {
    return Data.fromAmino(object.value);
  },
  fromProtoMsg(message: DataProtoMsg): Data {
    return Data.decode(message.value);
  },
  toProto(message: Data): Uint8Array {
    return Data.encode(message).finish();
  },
  toProtoMsg(message: Data): DataProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.Data",
      value: Data.encode(message).finish()
    };
  }
};
function createBaseChildren(): Children {
  return {
    children: []
  };
}
export const Children = {
  typeUrl: "/agoric.vstorage.Children",
  encode(message: Children, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChildrenAmino): Children {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => e) : []
    };
  },
  toAmino(message: Children): ChildrenAmino {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e);
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChildrenAminoMsg): Children {
    return Children.fromAmino(object.value);
  },
  fromProtoMsg(message: ChildrenProtoMsg): Children {
    return Children.decode(message.value);
  },
  toProto(message: Children): Uint8Array {
    return Children.encode(message).finish();
  },
  toProtoMsg(message: Children): ChildrenProtoMsg {
    return {
      typeUrl: "/agoric.vstorage.Children",
      value: Children.encode(message).finish()
    };
  }
};