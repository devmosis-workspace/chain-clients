import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
  sender: string;
  denom0: string;
  denom1: string;
  tickSpacing: Long;
  spreadFactor: string;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
  sender: string;
  denom0: string;
  denom1: string;
  tick_spacing: Long;
  spread_factor: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
  poolId: Long;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
  pool_id: Long;
}
function createBaseMsgCreateConcentratedPool(): MsgCreateConcentratedPool {
  return {
    sender: "",
    denom0: "",
    denom1: "",
    tickSpacing: Long.UZERO,
    spreadFactor: ""
  };
}
export const MsgCreateConcentratedPool = {
  encode(message: MsgCreateConcentratedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }
    if (!message.tickSpacing.isZero()) {
      writer.uint32(32).uint64(message.tickSpacing);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(message.spreadFactor);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateConcentratedPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      tickSpacing: isSet(object.tickSpacing) ? Long.fromValue(object.tickSpacing) : Long.UZERO,
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateConcentratedPool>): MsgCreateConcentratedPool {
    const message = createBaseMsgCreateConcentratedPool();
    message.sender = object.sender ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? Long.fromValue(object.tickSpacing) : Long.UZERO;
    message.spreadFactor = object.spreadFactor ?? "";
    return message;
  }
};
function createBaseMsgCreateConcentratedPoolResponse(): MsgCreateConcentratedPoolResponse {
  return {
    poolId: Long.UZERO
  };
}
export const MsgCreateConcentratedPoolResponse = {
  encode(message: MsgCreateConcentratedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateConcentratedPoolResponse {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateConcentratedPoolResponse>): MsgCreateConcentratedPoolResponse {
    const message = createBaseMsgCreateConcentratedPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};