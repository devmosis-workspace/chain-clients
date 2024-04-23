import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the feeburn module's genesis state. */
export interface GenesisState {
  /** GenesisState defines the feeburn module's genesis state. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/chihuahua.feeburn.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the feeburn module's genesis state. */
export interface GenesisStateAmino {
  /** GenesisState defines the feeburn module's genesis state. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/chihuahua.feeburn.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the feeburn module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/chihuahua.feeburn.GenesisState",
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
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
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
      typeUrl: "/chihuahua.feeburn.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};