import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  txFeeBurnPercent: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/chihuahua.feeburn.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  txFeeBurnPercent?: string;
}
export interface ParamsAminoMsg {
  type: "/chihuahua.feeburn.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  txFeeBurnPercent: string;
}
function createBaseParams(): Params {
  return {
    txFeeBurnPercent: ""
  };
}
export const Params = {
  typeUrl: "/chihuahua.feeburn.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txFeeBurnPercent !== "") {
      writer.uint32(10).string(message.txFeeBurnPercent);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      txFeeBurnPercent: isSet(object.txFeeBurnPercent) ? String(object.txFeeBurnPercent) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.txFeeBurnPercent = object.txFeeBurnPercent ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.txFeeBurnPercent !== undefined && object.txFeeBurnPercent !== null) {
      message.txFeeBurnPercent = object.txFeeBurnPercent;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.txFeeBurnPercent = message.txFeeBurnPercent;
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
      typeUrl: "/chihuahua.feeburn.Params",
      value: Params.encode(message).finish()
    };
  }
};