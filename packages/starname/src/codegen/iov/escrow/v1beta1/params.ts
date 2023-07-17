import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params defines the parameters of the escrow module */
export interface Params {
  /** Params defines the parameters of the escrow module */
  moduleEnabled: boolean;
}
/** Params defines the parameters of the escrow module */
export interface ParamsSDKType {
  module_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    moduleEnabled: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleEnabled === true) {
      writer.uint32(8).bool(message.moduleEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      moduleEnabled: isSet(object.moduleEnabled) ? Boolean(object.moduleEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.moduleEnabled = object.moduleEnabled ?? false;
    return message;
  }
};