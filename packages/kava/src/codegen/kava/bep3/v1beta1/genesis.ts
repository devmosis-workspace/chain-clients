import { Params, ParamsAmino, ParamsSDKType, AtomicSwap, AtomicSwapAmino, AtomicSwapSDKType, AssetSupply, AssetSupplyAmino, AssetSupplySDKType } from "./bep3";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** atomic_swaps represents the state of stored atomic swaps */
  atomicSwaps: AtomicSwap[];
  /** supplies represents the supply information of each atomic swap */
  supplies: AssetSupply[];
  /** previous_block_time represents the time of the previous block */
  previousBlockTime: Timestamp;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  /** atomic_swaps represents the state of stored atomic swaps */
  atomic_swaps: AtomicSwapAmino[];
  /** supplies represents the supply information of each atomic swap */
  supplies: AssetSupplyAmino[];
  /** previous_block_time represents the time of the previous block */
  previous_block_time?: TimestampAmino;
}
export interface GenesisStateAminoMsg {
  type: "/kava.bep3.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  atomic_swaps: AtomicSwapSDKType[];
  supplies: AssetSupplySDKType[];
  previous_block_time: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    atomicSwaps: [],
    supplies: [],
    previousBlockTime: Timestamp.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/kava.bep3.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      atomicSwaps: Array.isArray(object?.atomic_swaps) ? object.atomic_swaps.map((e: any) => AtomicSwap.fromAmino(e)) : [],
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => AssetSupply.fromAmino(e)) : [],
      previousBlockTime: object.previous_block_time
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.atomicSwaps) {
      obj.atomic_swaps = message.atomicSwaps.map(e => e ? AtomicSwap.toAmino(e) : undefined);
    } else {
      obj.atomic_swaps = [];
    }
    if (message.supplies) {
      obj.supplies = message.supplies.map(e => e ? AssetSupply.toAmino(e) : undefined);
    } else {
      obj.supplies = [];
    }
    obj.previous_block_time = message.previousBlockTime;
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
      typeUrl: "/kava.bep3.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};