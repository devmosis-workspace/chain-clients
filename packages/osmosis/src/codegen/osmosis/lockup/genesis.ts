import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  lastLockId: bigint;
  locks: PeriodLock[];
  syntheticLocks: SyntheticLock[];
  params?: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.lockup.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
  last_lock_id?: string;
  locks?: PeriodLockAmino[];
  synthetic_locks?: SyntheticLockAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/lockup/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
  last_lock_id: bigint;
  locks: PeriodLockSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
  params?: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    lastLockId: BigInt(0),
    locks: [],
    syntheticLocks: [],
    params: undefined
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.lockup.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastLockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lastLockId);
    }
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      lastLockId: isSet(object.lastLockId) ? BigInt(object.lastLockId.toString()) : BigInt(0),
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : [],
      syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.lastLockId = object.lastLockId !== undefined && object.lastLockId !== null ? BigInt(object.lastLockId.toString()) : BigInt(0);
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.last_lock_id !== undefined && object.last_lock_id !== null) {
      message.lastLockId = BigInt(object.last_lock_id);
    }
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    message.syntheticLocks = object.synthetic_locks?.map(e => SyntheticLock.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.last_lock_id = message.lastLockId ? message.lastLockId.toString() : undefined;
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }
    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/lockup/genesis-state",
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
      typeUrl: "/osmosis.lockup.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};