import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters of the escrow module */
export interface Params {
  /** Params defines the parameters of the escrow module */
  moduleEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters of the escrow module */
export interface ParamsAmino {
  /** Params defines the parameters of the escrow module */
  module_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.Params";
  value: ParamsAmino;
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
  typeUrl: "/starnamed.x.escrow.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      moduleEnabled: object.module_enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.module_enabled = message.moduleEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};