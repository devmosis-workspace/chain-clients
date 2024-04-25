import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisState {
  params: Params;
  previousBlockTime: Timestamp;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  previous_block_time?: string;
}
export interface GenesisStateAminoMsg {
  type: "/kava.kavadist.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  previous_block_time: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    previousBlockTime: Timestamp.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/kava.kavadist.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.previousBlockTime !== undefined) {
      Timestamp.encode(message.previousBlockTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      previousBlockTime: isSet(object.previousBlockTime) ? fromJsonTimestamp(object.previousBlockTime) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.previousBlockTime = object.previousBlockTime !== undefined && object.previousBlockTime !== null ? Timestamp.fromPartial(object.previousBlockTime) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.previous_block_time !== undefined && object.previous_block_time !== null) {
      message.previousBlockTime = Timestamp.fromAmino(object.previous_block_time);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.previous_block_time = message.previousBlockTime ? Timestamp.toAmino(message.previousBlockTime) : undefined;
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
      typeUrl: "/kava.kavadist.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};