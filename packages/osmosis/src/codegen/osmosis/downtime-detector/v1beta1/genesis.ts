import { Downtime, downtimeFromJSON } from "./downtime_duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface GenesisDowntimeEntry {
  duration: Downtime;
  lastDowntime?: Timestamp;
}
export interface GenesisDowntimeEntrySDKType {
  duration: Downtime;
  last_downtime?: TimestampSDKType;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  downtimes: GenesisDowntimeEntry[];
  lastBlockTime?: Timestamp;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
  downtimes: GenesisDowntimeEntrySDKType[];
  last_block_time?: TimestampSDKType;
}
function createBaseGenesisDowntimeEntry(): GenesisDowntimeEntry {
  return {
    duration: 0,
    lastDowntime: undefined
  };
}
export const GenesisDowntimeEntry = {
  encode(message: GenesisDowntimeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.lastDowntime !== undefined) {
      Timestamp.encode(message.lastDowntime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisDowntimeEntry {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : 0,
      lastDowntime: isSet(object.lastDowntime) ? fromJsonTimestamp(object.lastDowntime) : undefined
    };
  },
  fromPartial(object: Partial<GenesisDowntimeEntry>): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    message.duration = object.duration ?? 0;
    message.lastDowntime = object.lastDowntime !== undefined && object.lastDowntime !== null ? Timestamp.fromPartial(object.lastDowntime) : undefined;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    downtimes: [],
    lastBlockTime: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(message.lastBlockTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => GenesisDowntimeEntry.fromJSON(e)) : [],
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime !== undefined && object.lastBlockTime !== null ? Timestamp.fromPartial(object.lastBlockTime) : undefined;
    return message;
  }
};