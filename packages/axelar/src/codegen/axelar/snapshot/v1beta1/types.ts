import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
  validator?: string;
  proxy?: string;
  active?: boolean;
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
    const message = createBaseProxiedValidator();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = bytesFromBase64(object.validator);
    }
    if (object.proxy !== undefined && object.proxy !== null) {
      message.proxy = bytesFromBase64(object.proxy);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: ProxiedValidator): ProxiedValidatorAmino {
    const obj: any = {};
    obj.validator = message.validator ? base64FromBytes(message.validator) : undefined;
    obj.proxy = message.proxy ? base64FromBytes(message.proxy) : undefined;
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