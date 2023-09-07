import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  commissionRewards: Long;
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
  commission_rewards: Long;
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
  poolId: Long;
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
  points: Long;
  /** isLeaving indicates if a staker is leaving the given pool. */
  isLeaving: boolean;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface ValaccountSDKType {
  pool_id: Long;
  staker: string;
  valaddress: string;
  points: Long;
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
  index: Long;
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
  creationDate: Long;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntrySDKType {
  index: Long;
  staker: string;
  commission: string;
  creation_date: Long;
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
  index: Long;
  /** staker is the address of the affected staker */
  staker: string;
  /** pool_id indicates the pool the staker wants to leave */
  poolId: Long;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creationDate: Long;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntrySDKType {
  index: Long;
  staker: string;
  pool_id: Long;
  creation_date: Long;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
  /**
   * low_index is the tail of the queue. It is the
   * oldest entry in the queue. If this entry isn't
   * due, non of the other entries is.
   */
  lowIndex: Long;
  /**
   * high_index is the head of the queue. New entries
   * are added to the top.
   */
  highIndex: Long;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueStateSDKType {
  low_index: Long;
  high_index: Long;
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
    commissionRewards: Long.UZERO
  };
}
export const Staker = {
  encode(message: Staker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
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
    if (!message.commissionRewards.isZero()) {
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
      commissionRewards: isSet(object.commissionRewards) ? Long.fromValue(object.commissionRewards) : Long.UZERO
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
    message.commissionRewards = object.commissionRewards !== undefined && object.commissionRewards !== null ? Long.fromValue(object.commissionRewards) : Long.UZERO;
    return message;
  }
};
function createBaseValaccount(): Valaccount {
  return {
    poolId: Long.UZERO,
    staker: "",
    valaddress: "",
    points: Long.UZERO,
    isLeaving: false
  };
}
export const Valaccount = {
  encode(message: Valaccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (!message.points.isZero()) {
      writer.uint32(32).uint64(message.points);
    }
    if (message.isLeaving === true) {
      writer.uint32(40).bool(message.isLeaving);
    }
    return writer;
  },
  fromJSON(object: any): Valaccount {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      points: isSet(object.points) ? Long.fromValue(object.points) : Long.UZERO,
      isLeaving: isSet(object.isLeaving) ? Boolean(object.isLeaving) : false
    };
  },
  fromPartial(object: Partial<Valaccount>): Valaccount {
    const message = createBaseValaccount();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.valaddress = object.valaddress ?? "";
    message.points = object.points !== undefined && object.points !== null ? Long.fromValue(object.points) : Long.UZERO;
    message.isLeaving = object.isLeaving ?? false;
    return message;
  }
};
function createBaseCommissionChangeEntry(): CommissionChangeEntry {
  return {
    index: Long.UZERO,
    staker: "",
    commission: "",
    creationDate: Long.ZERO
  };
}
export const CommissionChangeEntry = {
  encode(message: CommissionChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    if (!message.creationDate.isZero()) {
      writer.uint32(32).int64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): CommissionChangeEntry {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      creationDate: isSet(object.creationDate) ? Long.fromValue(object.creationDate) : Long.ZERO
    };
  },
  fromPartial(object: Partial<CommissionChangeEntry>): CommissionChangeEntry {
    const message = createBaseCommissionChangeEntry();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.commission = object.commission ?? "";
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? Long.fromValue(object.creationDate) : Long.ZERO;
    return message;
  }
};
function createBaseLeavePoolEntry(): LeavePoolEntry {
  return {
    index: Long.UZERO,
    staker: "",
    poolId: Long.UZERO,
    creationDate: Long.ZERO
  };
}
export const LeavePoolEntry = {
  encode(message: LeavePoolEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (!message.creationDate.isZero()) {
      writer.uint32(32).int64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): LeavePoolEntry {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      creationDate: isSet(object.creationDate) ? Long.fromValue(object.creationDate) : Long.ZERO
    };
  },
  fromPartial(object: Partial<LeavePoolEntry>): LeavePoolEntry {
    const message = createBaseLeavePoolEntry();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? Long.fromValue(object.creationDate) : Long.ZERO;
    return message;
  }
};
function createBaseQueueState(): QueueState {
  return {
    lowIndex: Long.UZERO,
    highIndex: Long.UZERO
  };
}
export const QueueState = {
  encode(message: QueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lowIndex.isZero()) {
      writer.uint32(8).uint64(message.lowIndex);
    }
    if (!message.highIndex.isZero()) {
      writer.uint32(16).uint64(message.highIndex);
    }
    return writer;
  },
  fromJSON(object: any): QueueState {
    return {
      lowIndex: isSet(object.lowIndex) ? Long.fromValue(object.lowIndex) : Long.UZERO,
      highIndex: isSet(object.highIndex) ? Long.fromValue(object.highIndex) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueueState>): QueueState {
    const message = createBaseQueueState();
    message.lowIndex = object.lowIndex !== undefined && object.lowIndex !== null ? Long.fromValue(object.lowIndex) : Long.UZERO;
    message.highIndex = object.highIndex !== undefined && object.highIndex !== null ? Long.fromValue(object.highIndex) : Long.UZERO;
    return message;
  }
};