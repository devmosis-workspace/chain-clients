import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the stakers module parameters. */
export interface Params {
  /** commission_change_time ... */
  commissionChangeTime: Long;
  /** commission_change_time ... */
  leavePoolTime: Long;
}
/** Params defines the stakers module parameters. */
export interface ParamsSDKType {
  commission_change_time: Long;
  leave_pool_time: Long;
}
function createBaseParams(): Params {
  return {
    commissionChangeTime: Long.UZERO,
    leavePoolTime: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.commissionChangeTime.isZero()) {
      writer.uint32(8).uint64(message.commissionChangeTime);
    }
    if (!message.leavePoolTime.isZero()) {
      writer.uint32(16).uint64(message.leavePoolTime);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      commissionChangeTime: isSet(object.commissionChangeTime) ? Long.fromValue(object.commissionChangeTime) : Long.UZERO,
      leavePoolTime: isSet(object.leavePoolTime) ? Long.fromValue(object.leavePoolTime) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.commissionChangeTime = object.commissionChangeTime !== undefined && object.commissionChangeTime !== null ? Long.fromValue(object.commissionChangeTime) : Long.UZERO;
    message.leavePoolTime = object.leavePoolTime !== undefined && object.leavePoolTime !== null ? Long.fromValue(object.leavePoolTime) : Long.UZERO;
    return message;
  }
};