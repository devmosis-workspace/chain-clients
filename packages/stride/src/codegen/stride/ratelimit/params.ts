import { BinaryWriter } from "../../binary";
/** Params defines the ratelimit module's parameters. */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/stride.ratelimit.Params";
  value: Uint8Array;
}
/** Params defines the ratelimit module's parameters. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/stride.ratelimit.Params";
  value: ParamsAmino;
}
/** Params defines the ratelimit module's parameters. */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/stride.ratelimit.Params",
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
      typeUrl: "/stride.ratelimit.Params",
      value: Params.encode(message).finish()
    };
  }
};