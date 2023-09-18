import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/ibcratelimit/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/ibcratelimit/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.ibcratelimit.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};