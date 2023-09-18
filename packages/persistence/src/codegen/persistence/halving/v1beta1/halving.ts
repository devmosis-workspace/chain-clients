import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params holds parameters for the halving module. */
export interface Params {
  /** periodic height at which inflation decreases */
  blockHeight: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/persistence.halving.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the halving module. */
export interface ParamsAmino {
  /** periodic height at which inflation decreases */
  blockHeight: string;
}
export interface ParamsAminoMsg {
  type: "/persistence.halving.v1beta1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the halving module. */
export interface ParamsSDKType {
  blockHeight: bigint;
}
function createBaseParams(): Params {
  return {
    blockHeight: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/persistence.halving.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      blockHeight: BigInt(object.blockHeight)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.blockHeight = message.blockHeight ? message.blockHeight.toString() : undefined;
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
      typeUrl: "/persistence.halving.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};