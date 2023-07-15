import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface ProxiedValidator {
  validator: Uint8Array;
  proxy: Uint8Array;
  active: boolean;
}
export interface ProxiedValidatorSDKType {
  validator: Uint8Array;
  proxy: Uint8Array;
  active: boolean;
}
function createBaseProxiedValidator(): ProxiedValidator {
  return {
    validator: new Uint8Array(),
    proxy: new Uint8Array(),
    active: false
  };
}
export const ProxiedValidator = {
  encode(message: ProxiedValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (message.proxy.length !== 0) {
      writer.uint32(18).bytes(message.proxy);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  fromJSON(object: any): ProxiedValidator {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      proxy: isSet(object.proxy) ? bytesFromBase64(object.proxy) : new Uint8Array(),
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },
  fromPartial(object: Partial<ProxiedValidator>): ProxiedValidator {
    const message = createBaseProxiedValidator();
    message.validator = object.validator ?? new Uint8Array();
    message.proxy = object.proxy ?? new Uint8Array();
    message.active = object.active ?? false;
    return message;
  }
};