import { BinaryWriter } from "../../../binary";
/** Params represent the genesis parameters for the module */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/axelar.permission.v1beta1.Params";
  value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/axelar.permission.v1beta1.Params",
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): Params {
    return {};
  },
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
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
      typeUrl: "/axelar.permission.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};