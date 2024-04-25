import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SlashType, slashTypeFromJSON } from "./delegation";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  oldParams: Params;
  /** new_params is the module's new parameters. */
  newParams: Params;
  /** payload is the parameter updates that were performed. */
  payload: string;
}
export interface EventUpdateParamsProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.EventUpdateParams";
  value: Uint8Array;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsAmino {
  /** old_params is the module's old parameters. */
  old_params?: ParamsAmino;
  /** new_params is the module's new parameters. */
  new_params?: ParamsAmino;
  /** payload is the parameter updates that were performed. */
  payload?: string;
}
export interface EventUpdateParamsAminoMsg {
  type: "/kyve.delegation.v1beta1.EventUpdateParams";
  value: EventUpdateParamsAmino;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
  old_params: ParamsSDKType;
  new_params: ParamsSDKType;
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
  amount: bigint;
}
export interface EventDelegateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.EventDelegate";
  value: Uint8Array;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegateAmino {
  /** address is the account address of the delegator. */
  address?: string;
  /** staker is the account address of the protocol node. */
  staker?: string;
  /** amount ... */
  amount?: string;
}
export interface EventDelegateAminoMsg {
  type: "/kyve.delegation.v1beta1.EventDelegate";
  value: EventDelegateAmino;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegateSDKType {
  address: string;
  staker: string;
  amount: bigint;
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
  amount: bigint;
  /**
   * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
   * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
   */
  estimatedUndelegationDate: bigint;
}
export interface EventStartUndelegationProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.EventStartUndelegation";
  value: Uint8Array;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegationAmino {
  /** address is the address of the delegator. */
  address?: string;
  /** staker is the address of the protocol node. */
  staker?: string;
  /** amount is the amount to be undelegated from the protocol node. */
  amount?: string;
  /**
   * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
   * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
   */
  estimated_undelegation_date?: string;
}
export interface EventStartUndelegationAminoMsg {
  type: "/kyve.delegation.v1beta1.EventStartUndelegation";
  value: EventStartUndelegationAmino;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegationSDKType {
  address: string;
  staker: string;
  amount: bigint;
  estimated_undelegation_date: bigint;
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
  amount: bigint;
}
export interface EventUndelegateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.EventUndelegate";
  value: Uint8Array;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegateAmino {
  /** address is the account address of the delegator. */
  address?: string;
  /** staker is the account address of the protocol node. */
  staker?: string;
  /** amount ... */
  amount?: string;
}
export interface EventUndelegateAminoMsg {
  type: "/kyve.delegation.v1beta1.EventUndelegate";
  value: EventUndelegateAmino;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegateSDKType {
  address: string;
  staker: string;
  amount: bigint;
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
  amount: bigint;
}
export interface EventRedelegateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.EventRedelegate";
  value: Uint8Array;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegateAmino {
  /** address is the account address of the delegator. */
  address?: string;
  /** from_staker ... */
  from_staker?: string;
  /** to_staker is the account address of the new staker in the the pool */
  to_staker?: string;
  /** amount ... */
  amount?: string;
}
export interface EventRedelegateAminoMsg {
  type: "/kyve.delegation.v1beta1.EventRedelegate";
  value: EventRedelegateAmino;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegateSDKType {
  address: string;
  from_staker: string;
  to_staker: string;
  amount: bigint;
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
  amount: bigint;
}
export interface EventWithdrawRewardsProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.EventWithdrawRewards";
  value: Uint8Array;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewardsAmino {
  /** address is the account address of the delegator. */
  address?: string;
  /** staker is the account address of the protocol node the users withdraws from. */
  staker?: string;
  /** amount ... */
  amount?: string;
}
export interface EventWithdrawRewardsAminoMsg {
  type: "/kyve.delegation.v1beta1.EventWithdrawRewards";
  value: EventWithdrawRewardsAmino;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewardsSDKType {
  address: string;
  staker: string;
  amount: bigint;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlash {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: bigint;
  /** slash_type */
  slashType: SlashType;
}
export interface EventSlashProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.EventSlash";
  value: Uint8Array;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlashAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id?: string;
  /** staker is the account address of the protocol node. */
  staker?: string;
  /** amount ... */
  amount?: string;
  /** slash_type */
  slash_type?: SlashType;
}
export interface EventSlashAminoMsg {
  type: "/kyve.delegation.v1beta1.EventSlash";
  value: EventSlashAmino;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlashSDKType {
  pool_id: bigint;
  staker: string;
  amount: bigint;
  slash_type: SlashType;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: Params.fromPartial({}),
    newParams: Params.fromPartial({}),
    payload: ""
  };
}
export const EventUpdateParams = {
  typeUrl: "/kyve.delegation.v1beta1.EventUpdateParams",
  encode(message: EventUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventUpdateParamsAmino): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    if (object.old_params !== undefined && object.old_params !== null) {
      message.oldParams = Params.fromAmino(object.old_params);
    }
    if (object.new_params !== undefined && object.new_params !== null) {
      message.newParams = Params.fromAmino(object.new_params);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: EventUpdateParams): EventUpdateParamsAmino {
    const obj: any = {};
    obj.old_params = message.oldParams ? Params.toAmino(message.oldParams) : undefined;
    obj.new_params = message.newParams ? Params.toAmino(message.newParams) : undefined;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams {
    return EventUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams {
    return EventUpdateParams.decode(message.value);
  },
  toProto(message: EventUpdateParams): Uint8Array {
    return EventUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.EventUpdateParams",
      value: EventUpdateParams.encode(message).finish()
    };
  }
};
function createBaseEventDelegate(): EventDelegate {
  return {
    address: "",
    staker: "",
    amount: BigInt(0)
  };
}
export const EventDelegate = {
  typeUrl: "/kyve.delegation.v1beta1.EventDelegate",
  encode(message: EventDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventDelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventDelegate>): EventDelegate {
    const message = createBaseEventDelegate();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventDelegateAmino): EventDelegate {
    const message = createBaseEventDelegate();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: EventDelegate): EventDelegateAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDelegateAminoMsg): EventDelegate {
    return EventDelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDelegateProtoMsg): EventDelegate {
    return EventDelegate.decode(message.value);
  },
  toProto(message: EventDelegate): Uint8Array {
    return EventDelegate.encode(message).finish();
  },
  toProtoMsg(message: EventDelegate): EventDelegateProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.EventDelegate",
      value: EventDelegate.encode(message).finish()
    };
  }
};
function createBaseEventStartUndelegation(): EventStartUndelegation {
  return {
    address: "",
    staker: "",
    amount: BigInt(0),
    estimatedUndelegationDate: BigInt(0)
  };
}
export const EventStartUndelegation = {
  typeUrl: "/kyve.delegation.v1beta1.EventStartUndelegation",
  encode(message: EventStartUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.estimatedUndelegationDate !== BigInt(0)) {
      writer.uint32(32).uint64(message.estimatedUndelegationDate);
    }
    return writer;
  },
  fromJSON(object: any): EventStartUndelegation {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      estimatedUndelegationDate: isSet(object.estimatedUndelegationDate) ? BigInt(object.estimatedUndelegationDate.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventStartUndelegation>): EventStartUndelegation {
    const message = createBaseEventStartUndelegation();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.estimatedUndelegationDate = object.estimatedUndelegationDate !== undefined && object.estimatedUndelegationDate !== null ? BigInt(object.estimatedUndelegationDate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventStartUndelegationAmino): EventStartUndelegation {
    const message = createBaseEventStartUndelegation();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.estimated_undelegation_date !== undefined && object.estimated_undelegation_date !== null) {
      message.estimatedUndelegationDate = BigInt(object.estimated_undelegation_date);
    }
    return message;
  },
  toAmino(message: EventStartUndelegation): EventStartUndelegationAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.estimated_undelegation_date = message.estimatedUndelegationDate ? message.estimatedUndelegationDate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventStartUndelegationAminoMsg): EventStartUndelegation {
    return EventStartUndelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventStartUndelegationProtoMsg): EventStartUndelegation {
    return EventStartUndelegation.decode(message.value);
  },
  toProto(message: EventStartUndelegation): Uint8Array {
    return EventStartUndelegation.encode(message).finish();
  },
  toProtoMsg(message: EventStartUndelegation): EventStartUndelegationProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.EventStartUndelegation",
      value: EventStartUndelegation.encode(message).finish()
    };
  }
};
function createBaseEventUndelegate(): EventUndelegate {
  return {
    address: "",
    staker: "",
    amount: BigInt(0)
  };
}
export const EventUndelegate = {
  typeUrl: "/kyve.delegation.v1beta1.EventUndelegate",
  encode(message: EventUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventUndelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventUndelegate>): EventUndelegate {
    const message = createBaseEventUndelegate();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventUndelegateAmino): EventUndelegate {
    const message = createBaseEventUndelegate();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: EventUndelegate): EventUndelegateAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUndelegateAminoMsg): EventUndelegate {
    return EventUndelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUndelegateProtoMsg): EventUndelegate {
    return EventUndelegate.decode(message.value);
  },
  toProto(message: EventUndelegate): Uint8Array {
    return EventUndelegate.encode(message).finish();
  },
  toProtoMsg(message: EventUndelegate): EventUndelegateProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.EventUndelegate",
      value: EventUndelegate.encode(message).finish()
    };
  }
};
function createBaseEventRedelegate(): EventRedelegate {
  return {
    address: "",
    fromStaker: "",
    toStaker: "",
    amount: BigInt(0)
  };
}
export const EventRedelegate = {
  typeUrl: "/kyve.delegation.v1beta1.EventRedelegate",
  encode(message: EventRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.fromStaker !== "") {
      writer.uint32(18).string(message.fromStaker);
    }
    if (message.toStaker !== "") {
      writer.uint32(26).string(message.toStaker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventRedelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      fromStaker: isSet(object.fromStaker) ? String(object.fromStaker) : "",
      toStaker: isSet(object.toStaker) ? String(object.toStaker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventRedelegate>): EventRedelegate {
    const message = createBaseEventRedelegate();
    message.address = object.address ?? "";
    message.fromStaker = object.fromStaker ?? "";
    message.toStaker = object.toStaker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRedelegateAmino): EventRedelegate {
    const message = createBaseEventRedelegate();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.from_staker !== undefined && object.from_staker !== null) {
      message.fromStaker = object.from_staker;
    }
    if (object.to_staker !== undefined && object.to_staker !== null) {
      message.toStaker = object.to_staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: EventRedelegate): EventRedelegateAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.from_staker = message.fromStaker;
    obj.to_staker = message.toStaker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRedelegateAminoMsg): EventRedelegate {
    return EventRedelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRedelegateProtoMsg): EventRedelegate {
    return EventRedelegate.decode(message.value);
  },
  toProto(message: EventRedelegate): Uint8Array {
    return EventRedelegate.encode(message).finish();
  },
  toProtoMsg(message: EventRedelegate): EventRedelegateProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.EventRedelegate",
      value: EventRedelegate.encode(message).finish()
    };
  }
};
function createBaseEventWithdrawRewards(): EventWithdrawRewards {
  return {
    address: "",
    staker: "",
    amount: BigInt(0)
  };
}
export const EventWithdrawRewards = {
  typeUrl: "/kyve.delegation.v1beta1.EventWithdrawRewards",
  encode(message: EventWithdrawRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventWithdrawRewards {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventWithdrawRewards>): EventWithdrawRewards {
    const message = createBaseEventWithdrawRewards();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventWithdrawRewardsAmino): EventWithdrawRewards {
    const message = createBaseEventWithdrawRewards();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: EventWithdrawRewards): EventWithdrawRewardsAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawRewardsAminoMsg): EventWithdrawRewards {
    return EventWithdrawRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawRewardsProtoMsg): EventWithdrawRewards {
    return EventWithdrawRewards.decode(message.value);
  },
  toProto(message: EventWithdrawRewards): Uint8Array {
    return EventWithdrawRewards.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawRewards): EventWithdrawRewardsProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.EventWithdrawRewards",
      value: EventWithdrawRewards.encode(message).finish()
    };
  }
};
function createBaseEventSlash(): EventSlash {
  return {
    poolId: BigInt(0),
    staker: "",
    amount: BigInt(0),
    slashType: 0
  };
}
export const EventSlash = {
  typeUrl: "/kyve.delegation.v1beta1.EventSlash",
  encode(message: EventSlash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.slashType !== 0) {
      writer.uint32(32).int32(message.slashType);
    }
    return writer;
  },
  fromJSON(object: any): EventSlash {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      slashType: isSet(object.slashType) ? slashTypeFromJSON(object.slashType) : -1
    };
  },
  fromPartial(object: Partial<EventSlash>): EventSlash {
    const message = createBaseEventSlash();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.slashType = object.slashType ?? 0;
    return message;
  },
  fromAmino(object: EventSlashAmino): EventSlash {
    const message = createBaseEventSlash();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.slash_type !== undefined && object.slash_type !== null) {
      message.slashType = slashTypeFromJSON(object.slash_type);
    }
    return message;
  },
  toAmino(message: EventSlash): EventSlashAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.slash_type = message.slashType;
    return obj;
  },
  fromAminoMsg(object: EventSlashAminoMsg): EventSlash {
    return EventSlash.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSlashProtoMsg): EventSlash {
    return EventSlash.decode(message.value);
  },
  toProto(message: EventSlash): Uint8Array {
    return EventSlash.encode(message).finish();
  },
  toProtoMsg(message: EventSlash): EventSlashProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.EventSlash",
      value: EventSlash.encode(message).finish()
    };
  }
};