import { Params, ParamsAmino, ParamsSDKType, State, StateAmino, StateSDKType } from "./swingset";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** The initial or exported state. */
export interface GenesisState {
  params: Params;
  state: State;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/agoric.swingset.GenesisState";
  value: Uint8Array;
}
/** The initial or exported state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  state?: StateAmino;
}
export interface GenesisStateAminoMsg {
  type: "/agoric.swingset.GenesisState";
  value: GenesisStateAmino;
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  state: StateSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    state: State.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/agoric.swingset.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.state = object.state !== undefined && object.state !== null ? State.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      state: object?.state ? State.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.state = message.state ? State.toAmino(message.state) : undefined;
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
      typeUrl: "/agoric.swingset.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};