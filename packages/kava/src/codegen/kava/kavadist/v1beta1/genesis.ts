import { Params, ParamsSDKType } from "./params";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisState {
  params?: Params;
  previousBlockTime?: Timestamp;
}
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  previous_block_time?: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    previousBlockTime: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};