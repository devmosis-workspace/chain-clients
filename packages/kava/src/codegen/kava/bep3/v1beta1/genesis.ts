import { Params, ParamsSDKType, AtomicSwap, AtomicSwapSDKType, AssetSupply, AssetSupplySDKType } from "./bep3";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** atomic_swaps represents the state of stored atomic swaps */
  atomicSwaps: AtomicSwap[];
  /** supplies represents the supply information of each atomic swap */
  supplies: AssetSupply[];
  /** previous_block_time represents the time of the previous block */
  previousBlockTime?: Timestamp;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  atomic_swaps: AtomicSwapSDKType[];
  supplies: AssetSupplySDKType[];
  previous_block_time?: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    atomicSwaps: [],
    supplies: [],
    previousBlockTime: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.atomicSwaps) {
      AtomicSwap.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supplies) {
      AssetSupply.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousBlockTime !== undefined) {
      Timestamp.encode(message.previousBlockTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      atomicSwaps: Array.isArray(object?.atomicSwaps) ? object.atomicSwaps.map((e: any) => AtomicSwap.fromJSON(e)) : [],
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => AssetSupply.fromJSON(e)) : [],
      previousBlockTime: isSet(object.previousBlockTime) ? fromJsonTimestamp(object.previousBlockTime) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.atomicSwaps = object.atomicSwaps?.map(e => AtomicSwap.fromPartial(e)) || [];
    message.supplies = object.supplies?.map(e => AssetSupply.fromPartial(e)) || [];
    message.previousBlockTime = object.previousBlockTime !== undefined && object.previousBlockTime !== null ? Timestamp.fromPartial(object.previousBlockTime) : undefined;
    return message;
  }
};