import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, isObject } from "../../../helpers";
/** Action is used as an enum to denote specific actions or tasks. */
export enum Action {
  /** ActionUndefined - Undefined action (per protobuf spec) */
  ActionUndefined = 0,
  /** ActionInitialClaim - Initial claim action */
  ActionInitialClaim = 1,
  /** ActionDepositT1 - Deposit tier 1 (e.g. > 5% of base_value) */
  ActionDepositT1 = 2,
  /** ActionDepositT2 - Deposit tier 2 (e.g. > 10% of base_value) */
  ActionDepositT2 = 3,
  /** ActionDepositT3 - Deposit tier 3 (e.g. > 15% of base_value) */
  ActionDepositT3 = 4,
  /** ActionDepositT4 - Deposit tier 4 (e.g. > 22% of base_value) */
  ActionDepositT4 = 5,
  /** ActionDepositT5 - Deposit tier 5 (e.g. > 30% of base_value) */
  ActionDepositT5 = 6,
  /** ActionStakeQCK - Active QCK delegation */
  ActionStakeQCK = 7,
  /** ActionSignalIntent - Intent is set */
  ActionSignalIntent = 8,
  /** ActionQSGov - Cast governance vote on QS */
  ActionQSGov = 9,
  /** ActionGbP - Governance By Proxy (GbP): cast vote on remote zone */
  ActionGbP = 10,
  /** ActionOsmosis - Provide liquidity on Osmosis */
  ActionOsmosis = 11,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionUndefined":
      return Action.ActionUndefined;
    case 1:
    case "ActionInitialClaim":
      return Action.ActionInitialClaim;
    case 2:
    case "ActionDepositT1":
      return Action.ActionDepositT1;
    case 3:
    case "ActionDepositT2":
      return Action.ActionDepositT2;
    case 4:
    case "ActionDepositT3":
      return Action.ActionDepositT3;
    case 5:
    case "ActionDepositT4":
      return Action.ActionDepositT4;
    case 6:
    case "ActionDepositT5":
      return Action.ActionDepositT5;
    case 7:
    case "ActionStakeQCK":
      return Action.ActionStakeQCK;
    case 8:
    case "ActionSignalIntent":
      return Action.ActionSignalIntent;
    case 9:
    case "ActionQSGov":
      return Action.ActionQSGov;
    case 10:
    case "ActionGbP":
      return Action.ActionGbP;
    case 11:
    case "ActionOsmosis":
      return Action.ActionOsmosis;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionUndefined:
      return "ActionUndefined";
    case Action.ActionInitialClaim:
      return "ActionInitialClaim";
    case Action.ActionDepositT1:
      return "ActionDepositT1";
    case Action.ActionDepositT2:
      return "ActionDepositT2";
    case Action.ActionDepositT3:
      return "ActionDepositT3";
    case Action.ActionDepositT4:
      return "ActionDepositT4";
    case Action.ActionDepositT5:
      return "ActionDepositT5";
    case Action.ActionStakeQCK:
      return "ActionStakeQCK";
    case Action.ActionSignalIntent:
      return "ActionSignalIntent";
    case Action.ActionQSGov:
      return "ActionQSGov";
    case Action.ActionGbP:
      return "ActionGbP";
    case Action.ActionOsmosis:
      return "ActionOsmosis";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Status is used as an enum to denote zone status. */
export enum Status {
  StatusUndefined = 0,
  StatusActive = 1,
  StatusFuture = 2,
  StatusExpired = 3,
  UNRECOGNIZED = -1,
}
export const StatusSDKType = Status;
export const StatusAmino = Status;
export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "StatusUndefined":
      return Status.StatusUndefined;
    case 1:
    case "StatusActive":
      return Status.StatusActive;
    case 2:
    case "StatusFuture":
      return Status.StatusFuture;
    case 3:
    case "StatusExpired":
      return Status.StatusExpired;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}
export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.StatusUndefined:
      return "StatusUndefined";
    case Status.StatusActive:
      return "StatusActive";
    case Status.StatusFuture:
      return "StatusFuture";
    case Status.StatusExpired:
      return "StatusExpired";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDrop {
  chainId: string;
  startTime: Timestamp;
  duration: Duration;
  decay: Duration;
  allocation: bigint;
  actions: string[];
  isConcluded: boolean;
}
export interface ZoneDropProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.ZoneDrop";
  value: Uint8Array;
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDropAmino {
  chain_id?: string;
  start_time?: string;
  duration?: DurationAmino;
  decay?: DurationAmino;
  allocation?: string;
  actions?: string[];
  is_concluded?: boolean;
}
export interface ZoneDropAminoMsg {
  type: "/quicksilver.airdrop.v1.ZoneDrop";
  value: ZoneDropAmino;
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDropSDKType {
  chain_id: string;
  start_time: TimestampSDKType;
  duration: DurationSDKType;
  decay: DurationSDKType;
  allocation: bigint;
  actions: string[];
  is_concluded: boolean;
}
export interface ClaimRecord_ActionsCompletedEntry {
  key: number;
  value?: CompletedAction;
}
export interface ClaimRecord_ActionsCompletedEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ClaimRecord_ActionsCompletedEntryAmino {
  key?: number;
  value?: CompletedActionAmino;
}
export interface ClaimRecord_ActionsCompletedEntryAminoMsg {
  type: string;
  value: ClaimRecord_ActionsCompletedEntryAmino;
}
export interface ClaimRecord_ActionsCompletedEntrySDKType {
  key: number;
  value?: CompletedActionSDKType;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecord {
  chainId: string;
  address: string;
  /** Protobuf3 does not allow enum as map key */
  actionsCompleted: {
    [key: number]: CompletedAction;
  };
  maxAllocation: bigint;
  baseValue: bigint;
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.ClaimRecord";
  value: Uint8Array;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecordAmino {
  chain_id?: string;
  address?: string;
  /** Protobuf3 does not allow enum as map key */
  actions_completed?: {
    [key: number]: CompletedActionAmino;
  };
  max_allocation?: string;
  base_value?: string;
}
export interface ClaimRecordAminoMsg {
  type: "/quicksilver.airdrop.v1.ClaimRecord";
  value: ClaimRecordAmino;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecordSDKType {
  chain_id: string;
  address: string;
  actions_completed: {
    [key: number]: CompletedActionSDKType;
  };
  max_allocation: bigint;
  base_value: bigint;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedAction {
  completeTime: Timestamp;
  claimAmount: bigint;
}
export interface CompletedActionProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.CompletedAction";
  value: Uint8Array;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedActionAmino {
  complete_time?: string;
  claim_amount?: string;
}
export interface CompletedActionAminoMsg {
  type: "/quicksilver.airdrop.v1.CompletedAction";
  value: CompletedActionAmino;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedActionSDKType {
  complete_time: TimestampSDKType;
  claim_amount: bigint;
}
function createBaseZoneDrop(): ZoneDrop {
  return {
    chainId: "",
    startTime: Timestamp.fromPartial({}),
    duration: Duration.fromPartial({}),
    decay: Duration.fromPartial({}),
    allocation: BigInt(0),
    actions: [],
    isConcluded: false
  };
}
export const ZoneDrop = {
  typeUrl: "/quicksilver.airdrop.v1.ZoneDrop",
  encode(message: ZoneDrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.decay !== undefined) {
      Duration.encode(message.decay, writer.uint32(34).fork()).ldelim();
    }
    if (message.allocation !== BigInt(0)) {
      writer.uint32(40).uint64(message.allocation);
    }
    for (const v of message.actions) {
      writer.uint32(50).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    if (message.isConcluded === true) {
      writer.uint32(56).bool(message.isConcluded);
    }
    return writer;
  },
  fromJSON(object: any): ZoneDrop {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      decay: isSet(object.decay) ? Duration.fromJSON(object.decay) : undefined,
      allocation: isSet(object.allocation) ? BigInt(object.allocation.toString()) : BigInt(0),
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      isConcluded: isSet(object.isConcluded) ? Boolean(object.isConcluded) : false
    };
  },
  fromPartial(object: Partial<ZoneDrop>): ZoneDrop {
    const message = createBaseZoneDrop();
    message.chainId = object.chainId ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.decay = object.decay !== undefined && object.decay !== null ? Duration.fromPartial(object.decay) : undefined;
    message.allocation = object.allocation !== undefined && object.allocation !== null ? BigInt(object.allocation.toString()) : BigInt(0);
    message.actions = object.actions?.map(e => e) || [];
    message.isConcluded = object.isConcluded ?? false;
    return message;
  },
  fromAmino(object: ZoneDropAmino): ZoneDrop {
    const message = createBaseZoneDrop();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.decay !== undefined && object.decay !== null) {
      message.decay = Duration.fromAmino(object.decay);
    }
    if (object.allocation !== undefined && object.allocation !== null) {
      message.allocation = BigInt(object.allocation);
    }
    message.actions = object.actions?.map(e => e) || [];
    if (object.is_concluded !== undefined && object.is_concluded !== null) {
      message.isConcluded = object.is_concluded;
    }
    return message;
  },
  toAmino(message: ZoneDrop): ZoneDropAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.decay = message.decay ? Duration.toAmino(message.decay) : undefined;
    obj.allocation = message.allocation ? message.allocation.toString() : undefined;
    if (message.actions) {
      obj.actions = message.actions.map(e => e);
    } else {
      obj.actions = [];
    }
    obj.is_concluded = message.isConcluded;
    return obj;
  },
  fromAminoMsg(object: ZoneDropAminoMsg): ZoneDrop {
    return ZoneDrop.fromAmino(object.value);
  },
  fromProtoMsg(message: ZoneDropProtoMsg): ZoneDrop {
    return ZoneDrop.decode(message.value);
  },
  toProto(message: ZoneDrop): Uint8Array {
    return ZoneDrop.encode(message).finish();
  },
  toProtoMsg(message: ZoneDrop): ZoneDropProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.ZoneDrop",
      value: ZoneDrop.encode(message).finish()
    };
  }
};
function createBaseClaimRecord_ActionsCompletedEntry(): ClaimRecord_ActionsCompletedEntry {
  return {
    key: 0,
    value: undefined
  };
}
export const ClaimRecord_ActionsCompletedEntry = {
  encode(message: ClaimRecord_ActionsCompletedEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CompletedAction.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClaimRecord_ActionsCompletedEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? CompletedAction.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<ClaimRecord_ActionsCompletedEntry>): ClaimRecord_ActionsCompletedEntry {
    const message = createBaseClaimRecord_ActionsCompletedEntry();
    message.key = object.key ?? 0;
    message.value = object.value !== undefined && object.value !== null ? CompletedAction.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: ClaimRecord_ActionsCompletedEntryAmino): ClaimRecord_ActionsCompletedEntry {
    const message = createBaseClaimRecord_ActionsCompletedEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = CompletedAction.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: ClaimRecord_ActionsCompletedEntry): ClaimRecord_ActionsCompletedEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? CompletedAction.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimRecord_ActionsCompletedEntryAminoMsg): ClaimRecord_ActionsCompletedEntry {
    return ClaimRecord_ActionsCompletedEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecord_ActionsCompletedEntryProtoMsg): ClaimRecord_ActionsCompletedEntry {
    return ClaimRecord_ActionsCompletedEntry.decode(message.value);
  },
  toProto(message: ClaimRecord_ActionsCompletedEntry): Uint8Array {
    return ClaimRecord_ActionsCompletedEntry.encode(message).finish();
  }
};
function createBaseClaimRecord(): ClaimRecord {
  return {
    chainId: "",
    address: "",
    actionsCompleted: {},
    maxAllocation: BigInt(0),
    baseValue: BigInt(0)
  };
}
export const ClaimRecord = {
  typeUrl: "/quicksilver.airdrop.v1.ClaimRecord",
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    Object.entries(message.actionsCompleted).forEach(([key, value]) => {
      ClaimRecord_ActionsCompletedEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.maxAllocation !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxAllocation);
    }
    if (message.baseValue !== BigInt(0)) {
      writer.uint32(40).uint64(message.baseValue);
    }
    return writer;
  },
  fromJSON(object: any): ClaimRecord {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      actionsCompleted: isObject(object.actionsCompleted) ? Object.entries(object.actionsCompleted).reduce<{
        [key: number]: CompletedAction;
      }>((acc, [key, value]) => {
        acc[Number(key)] = CompletedAction.fromJSON(value);
        return acc;
      }, {}) : {},
      maxAllocation: isSet(object.maxAllocation) ? BigInt(object.maxAllocation.toString()) : BigInt(0),
      baseValue: isSet(object.baseValue) ? BigInt(object.baseValue.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
    message.actionsCompleted = Object.entries(object.actionsCompleted ?? {}).reduce<{
      [key: number]: CompletedAction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = CompletedAction.fromPartial(value);
      }
      return acc;
    }, {});
    message.maxAllocation = object.maxAllocation !== undefined && object.maxAllocation !== null ? BigInt(object.maxAllocation.toString()) : BigInt(0);
    message.baseValue = object.baseValue !== undefined && object.baseValue !== null ? BigInt(object.baseValue.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    const message = createBaseClaimRecord();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.actionsCompleted = Object.entries(object.actions_completed ?? {}).reduce<{
      [key: number]: CompletedAction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = CompletedAction.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.max_allocation !== undefined && object.max_allocation !== null) {
      message.maxAllocation = BigInt(object.max_allocation);
    }
    if (object.base_value !== undefined && object.base_value !== null) {
      message.baseValue = BigInt(object.base_value);
    }
    return message;
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.address = message.address;
    obj.actions_completed = {};
    if (message.actionsCompleted) {
      Object.entries(message.actionsCompleted).forEach(([k, v]) => {
        obj.actions_completed[k] = CompletedAction.toAmino(v);
      });
    }
    obj.max_allocation = message.maxAllocation ? message.maxAllocation.toString() : undefined;
    obj.base_value = message.baseValue ? message.baseValue.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};
function createBaseCompletedAction(): CompletedAction {
  return {
    completeTime: Timestamp.fromPartial({}),
    claimAmount: BigInt(0)
  };
}
export const CompletedAction = {
  typeUrl: "/quicksilver.airdrop.v1.CompletedAction",
  encode(message: CompletedAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completeTime !== undefined) {
      Timestamp.encode(message.completeTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.claimAmount !== BigInt(0)) {
      writer.uint32(16).uint64(message.claimAmount);
    }
    return writer;
  },
  fromJSON(object: any): CompletedAction {
    return {
      completeTime: isSet(object.completeTime) ? fromJsonTimestamp(object.completeTime) : undefined,
      claimAmount: isSet(object.claimAmount) ? BigInt(object.claimAmount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<CompletedAction>): CompletedAction {
    const message = createBaseCompletedAction();
    message.completeTime = object.completeTime !== undefined && object.completeTime !== null ? Timestamp.fromPartial(object.completeTime) : undefined;
    message.claimAmount = object.claimAmount !== undefined && object.claimAmount !== null ? BigInt(object.claimAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CompletedActionAmino): CompletedAction {
    const message = createBaseCompletedAction();
    if (object.complete_time !== undefined && object.complete_time !== null) {
      message.completeTime = Timestamp.fromAmino(object.complete_time);
    }
    if (object.claim_amount !== undefined && object.claim_amount !== null) {
      message.claimAmount = BigInt(object.claim_amount);
    }
    return message;
  },
  toAmino(message: CompletedAction): CompletedActionAmino {
    const obj: any = {};
    obj.complete_time = message.completeTime ? Timestamp.toAmino(message.completeTime) : undefined;
    obj.claim_amount = message.claimAmount ? message.claimAmount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CompletedActionAminoMsg): CompletedAction {
    return CompletedAction.fromAmino(object.value);
  },
  fromProtoMsg(message: CompletedActionProtoMsg): CompletedAction {
    return CompletedAction.decode(message.value);
  },
  toProto(message: CompletedAction): Uint8Array {
    return CompletedAction.encode(message).finish();
  },
  toProtoMsg(message: CompletedAction): CompletedActionProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.CompletedAction",
      value: CompletedAction.encode(message).finish()
    };
  }
};