import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface Staker {
  /** address ... */
  address: string;
  /** commission ... */
  commission: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** security_contact ... */
  securityContact: string;
  /** details are some additional notes the staker finds important */
  details: string;
  /** commission_rewards are the rewards in $KYVE earned through commission */
  commissionRewards: bigint;
}
export interface StakerProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.Staker";
  value: Uint8Array;
}
/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface StakerAmino {
  /** address ... */
  address: string;
  /** commission ... */
  commission: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details are some additional notes the staker finds important */
  details: string;
  /** commission_rewards are the rewards in $KYVE earned through commission */
  commission_rewards: string;
}
export interface StakerAminoMsg {
  type: "/kyve.stakers.v1beta1.Staker";
  value: StakerAmino;
}
/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface StakerSDKType {
  address: string;
  commission: string;
  moniker: string;
  website: string;
  identity: string;
  security_contact: string;
  details: string;
  commission_rewards: bigint;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface Valaccount {
  /**
   * pool_id defines the pool in which the address
   * is allowed to vote in.
   */
  poolId: bigint;
  /** staker is the address the valaccount is voting for. */
  staker: string;
  /**
   * valaddress is the account stored on the protocol
   * node which votes for the staker in the given pool
   */
  valaddress: string;
  /**
   * When a node is inactive (does not vote at all)
   * A point is added, after a certain amount of points
   * is reached the node gets kicked out.
   */
  points: bigint;
  /** isLeaving indicates if a staker is leaving the given pool. */
  isLeaving: boolean;
}
export interface ValaccountProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.Valaccount";
  value: Uint8Array;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface ValaccountAmino {
  /**
   * pool_id defines the pool in which the address
   * is allowed to vote in.
   */
  pool_id: string;
  /** staker is the address the valaccount is voting for. */
  staker: string;
  /**
   * valaddress is the account stored on the protocol
   * node which votes for the staker in the given pool
   */
  valaddress: string;
  /**
   * When a node is inactive (does not vote at all)
   * A point is added, after a certain amount of points
   * is reached the node gets kicked out.
   */
  points: string;
  /** isLeaving indicates if a staker is leaving the given pool. */
  is_leaving: boolean;
}
export interface ValaccountAminoMsg {
  type: "/kyve.stakers.v1beta1.Valaccount";
  value: ValaccountAmino;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface ValaccountSDKType {
  pool_id: bigint;
  staker: string;
  valaddress: string;
  points: bigint;
  is_leaving: boolean;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntry {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: bigint;
  /** staker is the address of the affected staker */
  staker: string;
  /**
   * commission is the new commission which will
   * be applied after the waiting time is over.
   */
  commission: string;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creationDate: bigint;
}
export interface CommissionChangeEntryProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.CommissionChangeEntry";
  value: Uint8Array;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntryAmino {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: string;
  /** staker is the address of the affected staker */
  staker: string;
  /**
   * commission is the new commission which will
   * be applied after the waiting time is over.
   */
  commission: string;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creation_date: string;
}
export interface CommissionChangeEntryAminoMsg {
  type: "/kyve.stakers.v1beta1.CommissionChangeEntry";
  value: CommissionChangeEntryAmino;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntrySDKType {
  index: bigint;
  staker: string;
  commission: string;
  creation_date: bigint;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntry {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: bigint;
  /** staker is the address of the affected staker */
  staker: string;
  /** pool_id indicates the pool the staker wants to leave */
  poolId: bigint;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creationDate: bigint;
}
export interface LeavePoolEntryProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.LeavePoolEntry";
  value: Uint8Array;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntryAmino {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: string;
  /** staker is the address of the affected staker */
  staker: string;
  /** pool_id indicates the pool the staker wants to leave */
  pool_id: string;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creation_date: string;
}
export interface LeavePoolEntryAminoMsg {
  type: "/kyve.stakers.v1beta1.LeavePoolEntry";
  value: LeavePoolEntryAmino;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntrySDKType {
  index: bigint;
  staker: string;
  pool_id: bigint;
  creation_date: bigint;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
  /**
   * low_index is the tail of the queue. It is the
   * oldest entry in the queue. If this entry isn't
   * due, non of the other entries is.
   */
  lowIndex: bigint;
  /**
   * high_index is the head of the queue. New entries
   * are added to the top.
   */
  highIndex: bigint;
}
export interface QueueStateProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.QueueState";
  value: Uint8Array;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueStateAmino {
  /**
   * low_index is the tail of the queue. It is the
   * oldest entry in the queue. If this entry isn't
   * due, non of the other entries is.
   */
  low_index: string;
  /**
   * high_index is the head of the queue. New entries
   * are added to the top.
   */
  high_index: string;
}
export interface QueueStateAminoMsg {
  type: "/kyve.stakers.v1beta1.QueueState";
  value: QueueStateAmino;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueStateSDKType {
  low_index: bigint;
  high_index: bigint;
}
function createBaseStaker(): Staker {
  return {
    address: "",
    commission: "",
    moniker: "",
    website: "",
    identity: "",
    securityContact: "",
    details: "",
    commissionRewards: BigInt(0)
  };
}
export const Staker = {
  typeUrl: "/kyve.stakers.v1beta1.Staker",
  encode(message: Staker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    if (message.moniker !== "") {
      writer.uint32(26).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(42).string(message.identity);
    }
    if (message.securityContact !== "") {
      writer.uint32(50).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(58).string(message.details);
    }
    if (message.commissionRewards !== BigInt(0)) {
      writer.uint32(64).uint64(message.commissionRewards);
    }
    return writer;
  },
  fromJSON(object: any): Staker {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : "",
      commissionRewards: isSet(object.commissionRewards) ? BigInt(object.commissionRewards.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Staker>): Staker {
    const message = createBaseStaker();
    message.address = object.address ?? "";
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    message.commissionRewards = object.commissionRewards !== undefined && object.commissionRewards !== null ? BigInt(object.commissionRewards.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StakerAmino): Staker {
    return {
      address: object.address,
      commission: object.commission,
      moniker: object.moniker,
      website: object.website,
      identity: object.identity,
      securityContact: object.security_contact,
      details: object.details,
      commissionRewards: BigInt(object.commission_rewards)
    };
  },
  toAmino(message: Staker): StakerAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.commission = message.commission;
    obj.moniker = message.moniker;
    obj.website = message.website;
    obj.identity = message.identity;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    obj.commission_rewards = message.commissionRewards ? message.commissionRewards.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StakerAminoMsg): Staker {
    return Staker.fromAmino(object.value);
  },
  fromProtoMsg(message: StakerProtoMsg): Staker {
    return Staker.decode(message.value);
  },
  toProto(message: Staker): Uint8Array {
    return Staker.encode(message).finish();
  },
  toProtoMsg(message: Staker): StakerProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.Staker",
      value: Staker.encode(message).finish()
    };
  }
};
function createBaseValaccount(): Valaccount {
  return {
    poolId: BigInt(0),
    staker: "",
    valaddress: "",
    points: BigInt(0),
    isLeaving: false
  };
}
export const Valaccount = {
  typeUrl: "/kyve.stakers.v1beta1.Valaccount",
  encode(message: Valaccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (message.points !== BigInt(0)) {
      writer.uint32(32).uint64(message.points);
    }
    if (message.isLeaving === true) {
      writer.uint32(40).bool(message.isLeaving);
    }
    return writer;
  },
  fromJSON(object: any): Valaccount {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      points: isSet(object.points) ? BigInt(object.points.toString()) : BigInt(0),
      isLeaving: isSet(object.isLeaving) ? Boolean(object.isLeaving) : false
    };
  },
  fromPartial(object: Partial<Valaccount>): Valaccount {
    const message = createBaseValaccount();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.valaddress = object.valaddress ?? "";
    message.points = object.points !== undefined && object.points !== null ? BigInt(object.points.toString()) : BigInt(0);
    message.isLeaving = object.isLeaving ?? false;
    return message;
  },
  fromAmino(object: ValaccountAmino): Valaccount {
    return {
      poolId: BigInt(object.pool_id),
      staker: object.staker,
      valaddress: object.valaddress,
      points: BigInt(object.points),
      isLeaving: object.is_leaving
    };
  },
  toAmino(message: Valaccount): ValaccountAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    obj.valaddress = message.valaddress;
    obj.points = message.points ? message.points.toString() : undefined;
    obj.is_leaving = message.isLeaving;
    return obj;
  },
  fromAminoMsg(object: ValaccountAminoMsg): Valaccount {
    return Valaccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ValaccountProtoMsg): Valaccount {
    return Valaccount.decode(message.value);
  },
  toProto(message: Valaccount): Uint8Array {
    return Valaccount.encode(message).finish();
  },
  toProtoMsg(message: Valaccount): ValaccountProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.Valaccount",
      value: Valaccount.encode(message).finish()
    };
  }
};
function createBaseCommissionChangeEntry(): CommissionChangeEntry {
  return {
    index: BigInt(0),
    staker: "",
    commission: "",
    creationDate: BigInt(0)
  };
}
export const CommissionChangeEntry = {
  typeUrl: "/kyve.stakers.v1beta1.CommissionChangeEntry",
  encode(message: CommissionChangeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    if (message.creationDate !== BigInt(0)) {
      writer.uint32(32).int64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): CommissionChangeEntry {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      creationDate: isSet(object.creationDate) ? BigInt(object.creationDate.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<CommissionChangeEntry>): CommissionChangeEntry {
    const message = createBaseCommissionChangeEntry();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.commission = object.commission ?? "";
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? BigInt(object.creationDate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CommissionChangeEntryAmino): CommissionChangeEntry {
    return {
      index: BigInt(object.index),
      staker: object.staker,
      commission: object.commission,
      creationDate: BigInt(object.creation_date)
    };
  },
  toAmino(message: CommissionChangeEntry): CommissionChangeEntryAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.staker = message.staker;
    obj.commission = message.commission;
    obj.creation_date = message.creationDate ? message.creationDate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CommissionChangeEntryAminoMsg): CommissionChangeEntry {
    return CommissionChangeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CommissionChangeEntryProtoMsg): CommissionChangeEntry {
    return CommissionChangeEntry.decode(message.value);
  },
  toProto(message: CommissionChangeEntry): Uint8Array {
    return CommissionChangeEntry.encode(message).finish();
  },
  toProtoMsg(message: CommissionChangeEntry): CommissionChangeEntryProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.CommissionChangeEntry",
      value: CommissionChangeEntry.encode(message).finish()
    };
  }
};
function createBaseLeavePoolEntry(): LeavePoolEntry {
  return {
    index: BigInt(0),
    staker: "",
    poolId: BigInt(0),
    creationDate: BigInt(0)
  };
}
export const LeavePoolEntry = {
  typeUrl: "/kyve.stakers.v1beta1.LeavePoolEntry",
  encode(message: LeavePoolEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.creationDate !== BigInt(0)) {
      writer.uint32(32).int64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): LeavePoolEntry {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      creationDate: isSet(object.creationDate) ? BigInt(object.creationDate.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<LeavePoolEntry>): LeavePoolEntry {
    const message = createBaseLeavePoolEntry();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? BigInt(object.creationDate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LeavePoolEntryAmino): LeavePoolEntry {
    return {
      index: BigInt(object.index),
      staker: object.staker,
      poolId: BigInt(object.pool_id),
      creationDate: BigInt(object.creation_date)
    };
  },
  toAmino(message: LeavePoolEntry): LeavePoolEntryAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.staker = message.staker;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.creation_date = message.creationDate ? message.creationDate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LeavePoolEntryAminoMsg): LeavePoolEntry {
    return LeavePoolEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: LeavePoolEntryProtoMsg): LeavePoolEntry {
    return LeavePoolEntry.decode(message.value);
  },
  toProto(message: LeavePoolEntry): Uint8Array {
    return LeavePoolEntry.encode(message).finish();
  },
  toProtoMsg(message: LeavePoolEntry): LeavePoolEntryProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.LeavePoolEntry",
      value: LeavePoolEntry.encode(message).finish()
    };
  }
};
function createBaseQueueState(): QueueState {
  return {
    lowIndex: BigInt(0),
    highIndex: BigInt(0)
  };
}
export const QueueState = {
  typeUrl: "/kyve.stakers.v1beta1.QueueState",
  encode(message: QueueState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lowIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.lowIndex);
    }
    if (message.highIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.highIndex);
    }
    return writer;
  },
  fromJSON(object: any): QueueState {
    return {
      lowIndex: isSet(object.lowIndex) ? BigInt(object.lowIndex.toString()) : BigInt(0),
      highIndex: isSet(object.highIndex) ? BigInt(object.highIndex.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueueState>): QueueState {
    const message = createBaseQueueState();
    message.lowIndex = object.lowIndex !== undefined && object.lowIndex !== null ? BigInt(object.lowIndex.toString()) : BigInt(0);
    message.highIndex = object.highIndex !== undefined && object.highIndex !== null ? BigInt(object.highIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueueStateAmino): QueueState {
    return {
      lowIndex: BigInt(object.low_index),
      highIndex: BigInt(object.high_index)
    };
  },
  toAmino(message: QueueState): QueueStateAmino {
    const obj: any = {};
    obj.low_index = message.lowIndex ? message.lowIndex.toString() : undefined;
    obj.high_index = message.highIndex ? message.highIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueueStateAminoMsg): QueueState {
    return QueueState.fromAmino(object.value);
  },
  fromProtoMsg(message: QueueStateProtoMsg): QueueState {
    return QueueState.decode(message.value);
  },
  toProto(message: QueueState): Uint8Array {
    return QueueState.encode(message).finish();
  },
  toProtoMsg(message: QueueState): QueueStateProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.QueueState",
      value: QueueState.encode(message).finish()
    };
  }
};