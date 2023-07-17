import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface Params {
  /** controller_enabled enables or disables the controller submodule. */
  controllerEnabled: boolean;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface ParamsSDKType {
  controller_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    controllerEnabled: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllerEnabled === true) {
      writer.uint32(8).bool(message.controllerEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      controllerEnabled: isSet(object.controllerEnabled) ? Boolean(object.controllerEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.controllerEnabled = object.controllerEnabled ?? false;
    return message;
  }
};