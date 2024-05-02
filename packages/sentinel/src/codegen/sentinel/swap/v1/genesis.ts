import { Swap, SwapAmino, SwapSDKType } from "./swap";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  swaps: Swap[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sentinel.swap.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  swaps?: SwapAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sentinel.swap.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  swaps: SwapSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    swaps: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/sentinel.swap.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.swaps) {
      Swap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      swaps: Array.isArray(object?.swaps) ? object.swaps.map((e: any) => Swap.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.swaps = object.swaps?.map(e => Swap.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.swaps = object.swaps?.map(e => Swap.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map(e => e ? Swap.toAmino(e) : undefined);
    } else {
      obj.swaps = message.swaps;
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
      typeUrl: "/sentinel.swap.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};