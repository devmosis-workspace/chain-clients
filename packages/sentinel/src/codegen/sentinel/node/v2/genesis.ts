import { Node, NodeAmino, NodeSDKType } from "./node";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  nodes: Node[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sentinel.node.v2.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  nodes?: NodeAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sentinel.node.v2.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  nodes: NodeSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    nodes: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/sentinel.node.v2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nodes = object.nodes?.map(e => Node.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.nodes = object.nodes?.map(e => Node.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map(e => e ? Node.toAmino(e) : undefined);
    } else {
      obj.nodes = message.nodes;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};