import { Params, ParamsAmino, ParamsSDKType } from "./params";
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
  typeUrl: "/kyve.funders.v1beta1.EventUpdateParams";
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
  type: "/kyve.funders.v1beta1.EventUpdateParams";
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
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunder {
  /** address is the account address of the funder. */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
export interface EventCreateFunderProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.EventCreateFunder";
  value: Uint8Array;
}
/**
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunderAmino {
  /** address is the account address of the funder. */
  address?: string;
  /** moniker ... */
  moniker?: string;
  /** identity is the 64 bit keybase.io identity string */
  identity?: string;
  /** website ... */
  website?: string;
  /** contact ... */
  contact?: string;
  /** description are some additional notes the funder finds important */
  description?: string;
}
export interface EventCreateFunderAminoMsg {
  type: "/kyve.funders.v1beta1.EventCreateFunder";
  value: EventCreateFunderAmino;
}
/**
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunderSDKType {
  address: string;
  moniker: string;
  identity: string;
  website: string;
  contact: string;
  description: string;
}
/**
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunder {
  /** address is the account address of the funder. */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
export interface EventUpdateFunderProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.EventUpdateFunder";
  value: Uint8Array;
}
/**
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunderAmino {
  /** address is the account address of the funder. */
  address?: string;
  /** moniker ... */
  moniker?: string;
  /** identity is the 64 bit keybase.io identity string */
  identity?: string;
  /** website ... */
  website?: string;
  /** contact ... */
  contact?: string;
  /** description are some additional notes the funder finds important */
  description?: string;
}
export interface EventUpdateFunderAminoMsg {
  type: "/kyve.funders.v1beta1.EventUpdateFunder";
  value: EventUpdateFunderAmino;
}
/**
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunderSDKType {
  address: string;
  moniker: string;
  identity: string;
  website: string;
  contact: string;
  description: string;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has funded */
  amount: bigint;
  /** amount_per_bundle is the amount in ukyve the funder has funded per bundle */
  amountPerBundle: bigint;
}
export interface EventFundPoolProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.EventFundPool";
  value: Uint8Array;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPoolAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id?: string;
  /** address is the account address of the pool funder. */
  address?: string;
  /** amount is the amount in ukyve the funder has funded */
  amount?: string;
  /** amount_per_bundle is the amount in ukyve the funder has funded per bundle */
  amount_per_bundle?: string;
}
export interface EventFundPoolAminoMsg {
  type: "/kyve.funders.v1beta1.EventFundPool";
  value: EventFundPoolAmino;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPoolSDKType {
  pool_id: bigint;
  address: string;
  amount: bigint;
  amount_per_bundle: bigint;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has defunded */
  amount: bigint;
}
export interface EventDefundPoolProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.EventDefundPool";
  value: Uint8Array;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPoolAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id?: string;
  /** address is the account address of the pool funder. */
  address?: string;
  /** amount is the amount in ukyve the funder has defunded */
  amount?: string;
}
export interface EventDefundPoolAminoMsg {
  type: "/kyve.funders.v1beta1.EventDefundPool";
  value: EventDefundPoolAmino;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPoolSDKType {
  pool_id: bigint;
  address: string;
  amount: bigint;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
  /** pool_id is the unique ID of the pool. */
  poolId: bigint;
}
export interface EventPoolOutOfFundsProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.EventPoolOutOfFunds";
  value: Uint8Array;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFundsAmino {
  /** pool_id is the unique ID of the pool. */
  pool_id?: string;
}
export interface EventPoolOutOfFundsAminoMsg {
  type: "/kyve.funders.v1beta1.EventPoolOutOfFunds";
  value: EventPoolOutOfFundsAmino;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFundsSDKType {
  pool_id: bigint;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: Params.fromPartial({}),
    newParams: Params.fromPartial({}),
    payload: ""
  };
}
export const EventUpdateParams = {
  typeUrl: "/kyve.funders.v1beta1.EventUpdateParams",
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
      typeUrl: "/kyve.funders.v1beta1.EventUpdateParams",
      value: EventUpdateParams.encode(message).finish()
    };
  }
};
function createBaseEventCreateFunder(): EventCreateFunder {
  return {
    address: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: ""
  };
}
export const EventCreateFunder = {
  typeUrl: "/kyve.funders.v1beta1.EventCreateFunder",
  encode(message: EventCreateFunder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateFunder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<EventCreateFunder>): EventCreateFunder {
    const message = createBaseEventCreateFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: EventCreateFunderAmino): EventCreateFunder {
    const message = createBaseEventCreateFunder();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: EventCreateFunder): EventCreateFunderAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.contact = message.contact;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: EventCreateFunderAminoMsg): EventCreateFunder {
    return EventCreateFunder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateFunderProtoMsg): EventCreateFunder {
    return EventCreateFunder.decode(message.value);
  },
  toProto(message: EventCreateFunder): Uint8Array {
    return EventCreateFunder.encode(message).finish();
  },
  toProtoMsg(message: EventCreateFunder): EventCreateFunderProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.EventCreateFunder",
      value: EventCreateFunder.encode(message).finish()
    };
  }
};
function createBaseEventUpdateFunder(): EventUpdateFunder {
  return {
    address: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: ""
  };
}
export const EventUpdateFunder = {
  typeUrl: "/kyve.funders.v1beta1.EventUpdateFunder",
  encode(message: EventUpdateFunder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateFunder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateFunder>): EventUpdateFunder {
    const message = createBaseEventUpdateFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: EventUpdateFunderAmino): EventUpdateFunder {
    const message = createBaseEventUpdateFunder();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: EventUpdateFunder): EventUpdateFunderAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.contact = message.contact;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: EventUpdateFunderAminoMsg): EventUpdateFunder {
    return EventUpdateFunder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateFunderProtoMsg): EventUpdateFunder {
    return EventUpdateFunder.decode(message.value);
  },
  toProto(message: EventUpdateFunder): Uint8Array {
    return EventUpdateFunder.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateFunder): EventUpdateFunderProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.EventUpdateFunder",
      value: EventUpdateFunder.encode(message).finish()
    };
  }
};
function createBaseEventFundPool(): EventFundPool {
  return {
    poolId: BigInt(0),
    address: "",
    amount: BigInt(0),
    amountPerBundle: BigInt(0)
  };
}
export const EventFundPool = {
  typeUrl: "/kyve.funders.v1beta1.EventFundPool",
  encode(message: EventFundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amountPerBundle !== BigInt(0)) {
      writer.uint32(32).uint64(message.amountPerBundle);
    }
    return writer;
  },
  fromJSON(object: any): EventFundPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      amountPerBundle: isSet(object.amountPerBundle) ? BigInt(object.amountPerBundle.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventFundPool>): EventFundPool {
    const message = createBaseEventFundPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.amountPerBundle = object.amountPerBundle !== undefined && object.amountPerBundle !== null ? BigInt(object.amountPerBundle.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventFundPoolAmino): EventFundPool {
    const message = createBaseEventFundPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.amount_per_bundle !== undefined && object.amount_per_bundle !== null) {
      message.amountPerBundle = BigInt(object.amount_per_bundle);
    }
    return message;
  },
  toAmino(message: EventFundPool): EventFundPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.address = message.address;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.amount_per_bundle = message.amountPerBundle ? message.amountPerBundle.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFundPoolAminoMsg): EventFundPool {
    return EventFundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFundPoolProtoMsg): EventFundPool {
    return EventFundPool.decode(message.value);
  },
  toProto(message: EventFundPool): Uint8Array {
    return EventFundPool.encode(message).finish();
  },
  toProtoMsg(message: EventFundPool): EventFundPoolProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.EventFundPool",
      value: EventFundPool.encode(message).finish()
    };
  }
};
function createBaseEventDefundPool(): EventDefundPool {
  return {
    poolId: BigInt(0),
    address: "",
    amount: BigInt(0)
  };
}
export const EventDefundPool = {
  typeUrl: "/kyve.funders.v1beta1.EventDefundPool",
  encode(message: EventDefundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventDefundPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventDefundPool>): EventDefundPool {
    const message = createBaseEventDefundPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventDefundPoolAmino): EventDefundPool {
    const message = createBaseEventDefundPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: EventDefundPool): EventDefundPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.address = message.address;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDefundPoolAminoMsg): EventDefundPool {
    return EventDefundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDefundPoolProtoMsg): EventDefundPool {
    return EventDefundPool.decode(message.value);
  },
  toProto(message: EventDefundPool): Uint8Array {
    return EventDefundPool.encode(message).finish();
  },
  toProtoMsg(message: EventDefundPool): EventDefundPoolProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.EventDefundPool",
      value: EventDefundPool.encode(message).finish()
    };
  }
};
function createBaseEventPoolOutOfFunds(): EventPoolOutOfFunds {
  return {
    poolId: BigInt(0)
  };
}
export const EventPoolOutOfFunds = {
  typeUrl: "/kyve.funders.v1beta1.EventPoolOutOfFunds",
  encode(message: EventPoolOutOfFunds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): EventPoolOutOfFunds {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventPoolOutOfFunds>): EventPoolOutOfFunds {
    const message = createBaseEventPoolOutOfFunds();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPoolOutOfFundsAmino): EventPoolOutOfFunds {
    const message = createBaseEventPoolOutOfFunds();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: EventPoolOutOfFunds): EventPoolOutOfFundsAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPoolOutOfFundsAminoMsg): EventPoolOutOfFunds {
    return EventPoolOutOfFunds.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPoolOutOfFundsProtoMsg): EventPoolOutOfFunds {
    return EventPoolOutOfFunds.decode(message.value);
  },
  toProto(message: EventPoolOutOfFunds): Uint8Array {
    return EventPoolOutOfFunds.encode(message).finish();
  },
  toProtoMsg(message: EventPoolOutOfFunds): EventPoolOutOfFundsProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.EventPoolOutOfFunds",
      value: EventPoolOutOfFunds.encode(message).finish()
    };
  }
};