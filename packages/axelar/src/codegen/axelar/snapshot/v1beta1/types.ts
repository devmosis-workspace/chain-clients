import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface ProxiedValidator {
  validator: Uint8Array;
  proxy: Uint8Array;
  active: boolean;
}
export interface ProxiedValidatorProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.ProxiedValidator";
  value: Uint8Array;
}
export interface ProxiedValidatorAmino {
  validator: Uint8Array;
  proxy: Uint8Array;
  active: boolean;
}
export interface ProxiedValidatorAminoMsg {
  type: "/axelar.snapshot.v1beta1.ProxiedValidator";
  value: ProxiedValidatorAmino;
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
  typeUrl: "/axelar.snapshot.v1beta1.ProxiedValidator",
  encode(message: ProxiedValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ProxiedValidatorAmino): ProxiedValidator {
    return {
      validator: object.validator,
      proxy: object.proxy,
      active: object.active
    };
  },
  toAmino(message: ProxiedValidator): ProxiedValidatorAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.proxy = message.proxy;
    obj.active = message.active;
    return obj;
  },
  fromAminoMsg(object: ProxiedValidatorAminoMsg): ProxiedValidator {
    return ProxiedValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: ProxiedValidatorProtoMsg): ProxiedValidator {
    return ProxiedValidator.decode(message.value);
  },
  toProto(message: ProxiedValidator): Uint8Array {
    return ProxiedValidator.encode(message).finish();
  },
  toProtoMsg(message: ProxiedValidator): ProxiedValidatorProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.ProxiedValidator",
      value: ProxiedValidator.encode(message).finish()
    };
  }
};