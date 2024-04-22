import { Params, ParamsAmino, ParamsSDKType, State, StateAmino, StateSDKType } from "./vbank";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** The initial and exported module state. */
export interface GenesisState {
  /** parms defines all the parameters of the module. */
  params: Params;
  /** state is the current operation state. */
  state: State;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/agoric.vbank.GenesisState";
  value: Uint8Array;
}
/** The initial and exported module state. */
export interface GenesisStateAmino {
  /** parms defines all the parameters of the module. */
  params?: ParamsAmino;
  /** state is the current operation state. */
  state?: StateAmino;
}
export interface GenesisStateAminoMsg {
  type: "/agoric.vbank.GenesisState";
  value: GenesisStateAmino;
}
/** The initial and exported module state. */
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
  typeUrl: "/agoric.vbank.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
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
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromAmino(object.state);
    }
    return message;
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
      typeUrl: "/agoric.vbank.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};