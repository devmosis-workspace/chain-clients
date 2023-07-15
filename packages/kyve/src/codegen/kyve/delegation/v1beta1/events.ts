import { Params, ParamsSDKType } from "./params";
import { SlashType, slashTypeFromJSON } from "./delegation";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  oldParams?: Params;
  /** new_params is the module's new parameters. */
  newParams?: Params;
  /** payload is the parameter updates that were performed. */
  payload: string;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
  old_params?: ParamsSDKType;
  new_params?: ParamsSDKType;
  payload: string;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: Long;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegateSDKType {
  address: string;
  staker: string;
  amount: Long;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegation {
  /** address is the address of the delegator. */
  address: string;
  /** staker is the address of the protocol node. */
  staker: string;
  /** amount is the amount to be undelegated from the protocol node. */
  amount: Long;
  /**
   * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
   * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
   */
  estimatedUndelegationDate: Long;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegationSDKType {
  address: string;
  staker: string;
  amount: Long;
  estimated_undelegation_date: Long;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: Long;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegateSDKType {
  address: string;
  staker: string;
  amount: Long;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** from_staker ... */
  fromStaker: string;
  /** to_staker is the account address of the new staker in the the pool */
  toStaker: string;
  /** amount ... */
  amount: Long;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegateSDKType {
  address: string;
  from_staker: string;
  to_staker: string;
  amount: Long;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewards {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node the users withdraws from. */
  staker: string;
  /** amount ... */
  amount: Long;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewardsSDKType {
  address: string;
  staker: string;
  amount: Long;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlash {
  /** pool_id is the unique ID of the pool. */
  poolId: Long;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: Long;
  /** slash_type */
  slashType: SlashType;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlashSDKType {
  pool_id: Long;
  staker: string;
  amount: Long;
  slash_type: SlashType;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: undefined,
    newParams: undefined,
    payload: ""
  };
}
export const EventUpdateParams = {
  encode(message: EventUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldParams !== undefined) {
      Params.encode(message.oldParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.newParams !== undefined) {
      Params.encode(message.newParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateParams {
    return {
      oldParams: isSet(object.oldParams) ? Params.fromJSON(object.oldParams) : undefined,
      newParams: isSet(object.newParams) ? Params.fromJSON(object.newParams) : undefined,
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.oldParams = object.oldParams !== undefined && object.oldParams !== null ? Params.fromPartial(object.oldParams) : undefined;
    message.newParams = object.newParams !== undefined && object.newParams !== null ? Params.fromPartial(object.newParams) : undefined;
    message.payload = object.payload ?? "";
    return message;
  }
};
function createBaseEventDelegate(): EventDelegate {
  return {
    address: "",
    staker: "",
    amount: Long.UZERO
  };
}
export const EventDelegate = {
  encode(message: EventDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventDelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventDelegate>): EventDelegate {
    const message = createBaseEventDelegate();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventStartUndelegation(): EventStartUndelegation {
  return {
    address: "",
    staker: "",
    amount: Long.UZERO,
    estimatedUndelegationDate: Long.UZERO
  };
}
export const EventStartUndelegation = {
  encode(message: EventStartUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (!message.estimatedUndelegationDate.isZero()) {
      writer.uint32(32).uint64(message.estimatedUndelegationDate);
    }
    return writer;
  },
  fromJSON(object: any): EventStartUndelegation {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      estimatedUndelegationDate: isSet(object.estimatedUndelegationDate) ? Long.fromValue(object.estimatedUndelegationDate) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventStartUndelegation>): EventStartUndelegation {
    const message = createBaseEventStartUndelegation();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.estimatedUndelegationDate = object.estimatedUndelegationDate !== undefined && object.estimatedUndelegationDate !== null ? Long.fromValue(object.estimatedUndelegationDate) : Long.UZERO;
    return message;
  }
};
function createBaseEventUndelegate(): EventUndelegate {
  return {
    address: "",
    staker: "",
    amount: Long.UZERO
  };
}
export const EventUndelegate = {
  encode(message: EventUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventUndelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventUndelegate>): EventUndelegate {
    const message = createBaseEventUndelegate();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventRedelegate(): EventRedelegate {
  return {
    address: "",
    fromStaker: "",
    toStaker: "",
    amount: Long.UZERO
  };
}
export const EventRedelegate = {
  encode(message: EventRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.fromStaker !== "") {
      writer.uint32(18).string(message.fromStaker);
    }
    if (message.toStaker !== "") {
      writer.uint32(26).string(message.toStaker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventRedelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      fromStaker: isSet(object.fromStaker) ? String(object.fromStaker) : "",
      toStaker: isSet(object.toStaker) ? String(object.toStaker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventRedelegate>): EventRedelegate {
    const message = createBaseEventRedelegate();
    message.address = object.address ?? "";
    message.fromStaker = object.fromStaker ?? "";
    message.toStaker = object.toStaker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventWithdrawRewards(): EventWithdrawRewards {
  return {
    address: "",
    staker: "",
    amount: Long.UZERO
  };
}
export const EventWithdrawRewards = {
  encode(message: EventWithdrawRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventWithdrawRewards {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventWithdrawRewards>): EventWithdrawRewards {
    const message = createBaseEventWithdrawRewards();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventSlash(): EventSlash {
  return {
    poolId: Long.UZERO,
    staker: "",
    amount: Long.UZERO,
    slashType: 0
  };
}
export const EventSlash = {
  encode(message: EventSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.slashType !== 0) {
      writer.uint32(32).int32(message.slashType);
    }
    return writer;
  },
  fromJSON(object: any): EventSlash {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      slashType: isSet(object.slashType) ? slashTypeFromJSON(object.slashType) : 0
    };
  },
  fromPartial(object: Partial<EventSlash>): EventSlash {
    const message = createBaseEventSlash();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.slashType = object.slashType ?? 0;
    return message;
  }
};