import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
  typeUrl: "/kyve.stakers.v1beta1.EventUpdateParams";
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
  payload: string;
}
export interface EventUpdateParamsAminoMsg {
  type: "/kyve.stakers.v1beta1.EventUpdateParams";
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
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStaker {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: bigint;
  /** commission */
  commission: string;
}
export interface EventCreateStakerProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.EventCreateStaker";
  value: Uint8Array;
}
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStakerAmino {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
  /** commission */
  commission: string;
}
export interface EventCreateStakerAminoMsg {
  type: "/kyve.stakers.v1beta1.EventCreateStaker";
  value: EventCreateStakerAmino;
}
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStakerSDKType {
  staker: string;
  amount: bigint;
  commission: string;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadata {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity ... */
  identity: string;
  /** security_contact ... */
  securityContact: string;
  /** details ... */
  details: string;
}
export interface EventUpdateMetadataProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.EventUpdateMetadata";
  value: Uint8Array;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadataAmino {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity ... */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details ... */
  details: string;
}
export interface EventUpdateMetadataAminoMsg {
  type: "/kyve.stakers.v1beta1.EventUpdateMetadata";
  value: EventUpdateMetadataAmino;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadataSDKType {
  staker: string;
  moniker: string;
  website: string;
  identity: string;
  security_contact: string;
  details: string;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommission {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** commission ... */
  commission: string;
}
export interface EventUpdateCommissionProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.EventUpdateCommission";
  value: Uint8Array;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommissionAmino {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** commission ... */
  commission: string;
}
export interface EventUpdateCommissionAminoMsg {
  type: "/kyve.stakers.v1beta1.EventUpdateCommission";
  value: EventUpdateCommissionAmino;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommissionSDKType {
  staker: string;
  commission: string;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewards {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: bigint;
}
export interface EventClaimCommissionRewardsProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.EventClaimCommissionRewards";
  value: Uint8Array;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewardsAmino {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
}
export interface EventClaimCommissionRewardsAminoMsg {
  type: "/kyve.stakers.v1beta1.EventClaimCommissionRewards";
  value: EventClaimCommissionRewardsAmino;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewardsSDKType {
  staker: string;
  amount: bigint;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPool {
  /** pool_id is the pool the staker joined */
  poolId: bigint;
  /** staker is the address of the staker */
  staker: string;
  /**
   * valaddress is the address of the protocol node which
   * votes in favor of the staker
   */
  valaddress: string;
  /** amount is the amount of funds transferred to the valaddress */
  amount: bigint;
}
export interface EventJoinPoolProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.EventJoinPool";
  value: Uint8Array;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPoolAmino {
  /** pool_id is the pool the staker joined */
  pool_id: string;
  /** staker is the address of the staker */
  staker: string;
  /**
   * valaddress is the address of the protocol node which
   * votes in favor of the staker
   */
  valaddress: string;
  /** amount is the amount of funds transferred to the valaddress */
  amount: string;
}
export interface EventJoinPoolAminoMsg {
  type: "/kyve.stakers.v1beta1.EventJoinPool";
  value: EventJoinPoolAmino;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPoolSDKType {
  pool_id: bigint;
  staker: string;
  valaddress: string;
  amount: bigint;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePool {
  /** pool_id ... */
  poolId: bigint;
  /** staker ... */
  staker: string;
}
export interface EventLeavePoolProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.EventLeavePool";
  value: Uint8Array;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePoolAmino {
  /** pool_id ... */
  pool_id: string;
  /** staker ... */
  staker: string;
}
export interface EventLeavePoolAminoMsg {
  type: "/kyve.stakers.v1beta1.EventLeavePool";
  value: EventLeavePoolAmino;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePoolSDKType {
  pool_id: bigint;
  staker: string;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: Params.fromPartial({}),
    newParams: Params.fromPartial({}),
    payload: ""
  };
}
export const EventUpdateParams = {
  typeUrl: "/kyve.stakers.v1beta1.EventUpdateParams",
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
    return {
      oldParams: object?.old_params ? Params.fromAmino(object.old_params) : undefined,
      newParams: object?.new_params ? Params.fromAmino(object.new_params) : undefined,
      payload: object.payload
    };
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
      typeUrl: "/kyve.stakers.v1beta1.EventUpdateParams",
      value: EventUpdateParams.encode(message).finish()
    };
  }
};
function createBaseEventCreateStaker(): EventCreateStaker {
  return {
    staker: "",
    amount: BigInt(0),
    commission: ""
  };
}
export const EventCreateStaker = {
  typeUrl: "/kyve.stakers.v1beta1.EventCreateStaker",
  encode(message: EventCreateStaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateStaker {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      commission: isSet(object.commission) ? String(object.commission) : ""
    };
  },
  fromPartial(object: Partial<EventCreateStaker>): EventCreateStaker {
    const message = createBaseEventCreateStaker();
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.commission = object.commission ?? "";
    return message;
  },
  fromAmino(object: EventCreateStakerAmino): EventCreateStaker {
    return {
      staker: object.staker,
      amount: BigInt(object.amount),
      commission: object.commission
    };
  },
  toAmino(message: EventCreateStaker): EventCreateStakerAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.commission = message.commission;
    return obj;
  },
  fromAminoMsg(object: EventCreateStakerAminoMsg): EventCreateStaker {
    return EventCreateStaker.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateStakerProtoMsg): EventCreateStaker {
    return EventCreateStaker.decode(message.value);
  },
  toProto(message: EventCreateStaker): Uint8Array {
    return EventCreateStaker.encode(message).finish();
  },
  toProtoMsg(message: EventCreateStaker): EventCreateStakerProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.EventCreateStaker",
      value: EventCreateStaker.encode(message).finish()
    };
  }
};
function createBaseEventUpdateMetadata(): EventUpdateMetadata {
  return {
    staker: "",
    moniker: "",
    website: "",
    identity: "",
    securityContact: "",
    details: ""
  };
}
export const EventUpdateMetadata = {
  typeUrl: "/kyve.stakers.v1beta1.EventUpdateMetadata",
  encode(message: EventUpdateMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.securityContact !== "") {
      writer.uint32(42).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateMetadata {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateMetadata>): EventUpdateMetadata {
    const message = createBaseEventUpdateMetadata();
    message.staker = object.staker ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object: EventUpdateMetadataAmino): EventUpdateMetadata {
    return {
      staker: object.staker,
      moniker: object.moniker,
      website: object.website,
      identity: object.identity,
      securityContact: object.security_contact,
      details: object.details
    };
  },
  toAmino(message: EventUpdateMetadata): EventUpdateMetadataAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.moniker = message.moniker;
    obj.website = message.website;
    obj.identity = message.identity;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    return obj;
  },
  fromAminoMsg(object: EventUpdateMetadataAminoMsg): EventUpdateMetadata {
    return EventUpdateMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateMetadataProtoMsg): EventUpdateMetadata {
    return EventUpdateMetadata.decode(message.value);
  },
  toProto(message: EventUpdateMetadata): Uint8Array {
    return EventUpdateMetadata.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateMetadata): EventUpdateMetadataProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.EventUpdateMetadata",
      value: EventUpdateMetadata.encode(message).finish()
    };
  }
};
function createBaseEventUpdateCommission(): EventUpdateCommission {
  return {
    staker: "",
    commission: ""
  };
}
export const EventUpdateCommission = {
  typeUrl: "/kyve.stakers.v1beta1.EventUpdateCommission",
  encode(message: EventUpdateCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateCommission {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      commission: isSet(object.commission) ? String(object.commission) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateCommission>): EventUpdateCommission {
    const message = createBaseEventUpdateCommission();
    message.staker = object.staker ?? "";
    message.commission = object.commission ?? "";
    return message;
  },
  fromAmino(object: EventUpdateCommissionAmino): EventUpdateCommission {
    return {
      staker: object.staker,
      commission: object.commission
    };
  },
  toAmino(message: EventUpdateCommission): EventUpdateCommissionAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.commission = message.commission;
    return obj;
  },
  fromAminoMsg(object: EventUpdateCommissionAminoMsg): EventUpdateCommission {
    return EventUpdateCommission.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateCommissionProtoMsg): EventUpdateCommission {
    return EventUpdateCommission.decode(message.value);
  },
  toProto(message: EventUpdateCommission): Uint8Array {
    return EventUpdateCommission.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateCommission): EventUpdateCommissionProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.EventUpdateCommission",
      value: EventUpdateCommission.encode(message).finish()
    };
  }
};
function createBaseEventClaimCommissionRewards(): EventClaimCommissionRewards {
  return {
    staker: "",
    amount: BigInt(0)
  };
}
export const EventClaimCommissionRewards = {
  typeUrl: "/kyve.stakers.v1beta1.EventClaimCommissionRewards",
  encode(message: EventClaimCommissionRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventClaimCommissionRewards {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventClaimCommissionRewards>): EventClaimCommissionRewards {
    const message = createBaseEventClaimCommissionRewards();
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventClaimCommissionRewardsAmino): EventClaimCommissionRewards {
    return {
      staker: object.staker,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: EventClaimCommissionRewards): EventClaimCommissionRewardsAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventClaimCommissionRewardsAminoMsg): EventClaimCommissionRewards {
    return EventClaimCommissionRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimCommissionRewardsProtoMsg): EventClaimCommissionRewards {
    return EventClaimCommissionRewards.decode(message.value);
  },
  toProto(message: EventClaimCommissionRewards): Uint8Array {
    return EventClaimCommissionRewards.encode(message).finish();
  },
  toProtoMsg(message: EventClaimCommissionRewards): EventClaimCommissionRewardsProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.EventClaimCommissionRewards",
      value: EventClaimCommissionRewards.encode(message).finish()
    };
  }
};
function createBaseEventJoinPool(): EventJoinPool {
  return {
    poolId: BigInt(0),
    staker: "",
    valaddress: "",
    amount: BigInt(0)
  };
}
export const EventJoinPool = {
  typeUrl: "/kyve.stakers.v1beta1.EventJoinPool",
  encode(message: EventJoinPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventJoinPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventJoinPool>): EventJoinPool {
    const message = createBaseEventJoinPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.valaddress = object.valaddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventJoinPoolAmino): EventJoinPool {
    return {
      poolId: BigInt(object.pool_id),
      staker: object.staker,
      valaddress: object.valaddress,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: EventJoinPool): EventJoinPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    obj.valaddress = message.valaddress;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventJoinPoolAminoMsg): EventJoinPool {
    return EventJoinPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventJoinPoolProtoMsg): EventJoinPool {
    return EventJoinPool.decode(message.value);
  },
  toProto(message: EventJoinPool): Uint8Array {
    return EventJoinPool.encode(message).finish();
  },
  toProtoMsg(message: EventJoinPool): EventJoinPoolProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.EventJoinPool",
      value: EventJoinPool.encode(message).finish()
    };
  }
};
function createBaseEventLeavePool(): EventLeavePool {
  return {
    poolId: BigInt(0),
    staker: ""
  };
}
export const EventLeavePool = {
  typeUrl: "/kyve.stakers.v1beta1.EventLeavePool",
  encode(message: EventLeavePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): EventLeavePool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<EventLeavePool>): EventLeavePool {
    const message = createBaseEventLeavePool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    return message;
  },
  fromAmino(object: EventLeavePoolAmino): EventLeavePool {
    return {
      poolId: BigInt(object.pool_id),
      staker: object.staker
    };
  },
  toAmino(message: EventLeavePool): EventLeavePoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.staker = message.staker;
    return obj;
  },
  fromAminoMsg(object: EventLeavePoolAminoMsg): EventLeavePool {
    return EventLeavePool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLeavePoolProtoMsg): EventLeavePool {
    return EventLeavePool.decode(message.value);
  },
  toProto(message: EventLeavePool): Uint8Array {
    return EventLeavePool.encode(message).finish();
  },
  toProtoMsg(message: EventLeavePool): EventLeavePoolProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.EventLeavePool",
      value: EventLeavePool.encode(message).finish()
    };
  }
};