import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/dymensionxyz.dymension.sequencer.Params",
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
      typeUrl: "/dymensionxyz.dymension.sequencer.Params",
      value: Params.encode(message).finish()
    };
  }
};