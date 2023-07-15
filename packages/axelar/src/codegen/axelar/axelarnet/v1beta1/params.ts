import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
  /** IBC packet route timeout window */
  routeTimeoutWindow: Long;
  transferLimit: Long;
  endBlockerLimit: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  route_timeout_window: Long;
  transfer_limit: Long;
  end_blocker_limit: Long;
}
function createBaseParams(): Params {
  return {
    routeTimeoutWindow: Long.UZERO,
    transferLimit: Long.UZERO,
    endBlockerLimit: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.routeTimeoutWindow.isZero()) {
      writer.uint32(8).uint64(message.routeTimeoutWindow);
    }
    if (!message.transferLimit.isZero()) {
      writer.uint32(24).uint64(message.transferLimit);
    }
    if (!message.endBlockerLimit.isZero()) {
      writer.uint32(32).uint64(message.endBlockerLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      routeTimeoutWindow: isSet(object.routeTimeoutWindow) ? Long.fromValue(object.routeTimeoutWindow) : Long.UZERO,
      transferLimit: isSet(object.transferLimit) ? Long.fromValue(object.transferLimit) : Long.UZERO,
      endBlockerLimit: isSet(object.endBlockerLimit) ? Long.fromValue(object.endBlockerLimit) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.routeTimeoutWindow = object.routeTimeoutWindow !== undefined && object.routeTimeoutWindow !== null ? Long.fromValue(object.routeTimeoutWindow) : Long.UZERO;
    message.transferLimit = object.transferLimit !== undefined && object.transferLimit !== null ? Long.fromValue(object.transferLimit) : Long.UZERO;
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? Long.fromValue(object.endBlockerLimit) : Long.UZERO;
    return message;
  }
};