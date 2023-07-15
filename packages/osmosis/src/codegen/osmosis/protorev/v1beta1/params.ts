import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /** Boolean whether the protorev module is enabled. */
  enabled: boolean;
  /** The admin account (settings manager) of the protorev module. */
  admin: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  enabled: boolean;
  admin: string;
}
function createBaseParams(): Params {
  return {
    enabled: false,
    admin: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    message.admin = object.admin ?? "";
    return message;
  }
};