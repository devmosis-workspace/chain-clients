import { Fee, FeeAmino, FeeSDKType } from "./fee";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  minFee: Fee;
}
export interface ParamsProtoMsg {
  typeUrl: "/neutron.feerefunder.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  min_fee?: FeeAmino;
}
export interface ParamsAminoMsg {
  type: "/neutron.feerefunder.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  min_fee: FeeSDKType;
}
function createBaseParams(): Params {
  return {
    minFee: Fee.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/neutron.feerefunder.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minFee !== undefined) {
      Fee.encode(message.minFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minFee: isSet(object.minFee) ? Fee.fromJSON(object.minFee) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minFee = object.minFee !== undefined && object.minFee !== null ? Fee.fromPartial(object.minFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_fee !== undefined && object.min_fee !== null) {
      message.minFee = Fee.fromAmino(object.min_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_fee = message.minFee ? Fee.toAmino(message.minFee) : undefined;
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
      typeUrl: "/neutron.feerefunder.Params",
      value: Params.encode(message).finish()
    };
  }
};