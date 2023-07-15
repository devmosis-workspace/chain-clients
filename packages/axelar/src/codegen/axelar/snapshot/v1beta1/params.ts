import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
  /** Params represent the genesis parameters for the module */
  minProxyBalance: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  min_proxy_balance: Long;
}
function createBaseParams(): Params {
  return {
    minProxyBalance: Long.ZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.minProxyBalance.isZero()) {
      writer.uint32(8).int64(message.minProxyBalance);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minProxyBalance: isSet(object.minProxyBalance) ? Long.fromValue(object.minProxyBalance) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minProxyBalance = object.minProxyBalance !== undefined && object.minProxyBalance !== null ? Long.fromValue(object.minProxyBalance) : Long.ZERO;
    return message;
  }
};