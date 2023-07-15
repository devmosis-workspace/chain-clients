import { Params, ParamsSDKType } from "./params";
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
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStaker {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: Long;
  /** commission */
  commission: string;
}
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStakerSDKType {
  staker: string;
  amount: Long;
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
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommissionSDKType {
  staker: string;
  commission: string;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPool {
  /** pool_id is the pool the staker joined */
  poolId: Long;
  /** staker is the address of the staker */
  staker: string;
  /**
   * valaddress is the address of the protocol node which
   * votes in favor of the staker
   */
  valaddress: string;
  /** amount is the amount of funds transferred to the valaddress */
  amount: Long;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPoolSDKType {
  pool_id: Long;
  staker: string;
  valaddress: string;
  amount: Long;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePool {
  /** pool_id ... */
  poolId: Long;
  /** staker ... */
  staker: string;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePoolSDKType {
  pool_id: Long;
  staker: string;
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
function createBaseEventCreateStaker(): EventCreateStaker {
  return {
    staker: "",
    amount: Long.UZERO,
    commission: ""
  };
}
export const EventCreateStaker = {
  encode(message: EventCreateStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateStaker {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      commission: isSet(object.commission) ? String(object.commission) : ""
    };
  },
  fromPartial(object: Partial<EventCreateStaker>): EventCreateStaker {
    const message = createBaseEventCreateStaker();
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.commission = object.commission ?? "";
    return message;
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
  encode(message: EventUpdateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventUpdateCommission(): EventUpdateCommission {
  return {
    staker: "",
    commission: ""
  };
}
export const EventUpdateCommission = {
  encode(message: EventUpdateCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
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
  }
};
function createBaseEventJoinPool(): EventJoinPool {
  return {
    poolId: Long.UZERO,
    staker: "",
    valaddress: "",
    amount: Long.UZERO
  };
}
export const EventJoinPool = {
  encode(message: EventJoinPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventJoinPool {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventJoinPool>): EventJoinPool {
    const message = createBaseEventJoinPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.valaddress = object.valaddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventLeavePool(): EventLeavePool {
  return {
    poolId: Long.UZERO,
    staker: ""
  };
}
export const EventLeavePool = {
  encode(message: EventLeavePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): EventLeavePool {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<EventLeavePool>): EventLeavePool {
    const message = createBaseEventLeavePool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.staker = object.staker ?? "";
    return message;
  }
};