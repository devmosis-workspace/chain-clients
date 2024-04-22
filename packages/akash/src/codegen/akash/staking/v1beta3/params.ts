import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params extends the parameters for the x/staking module */
export interface Params {
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  minCommissionRate: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.staking.v1beta3.Params";
  value: Uint8Array;
}
/** Params extends the parameters for the x/staking module */
export interface ParamsAmino {
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  min_commission_rate?: string;
}
export interface ParamsAminoMsg {
  type: "/akash.staking.v1beta3.Params";
  value: ParamsAmino;
}
/** Params extends the parameters for the x/staking module */
export interface ParamsSDKType {
  min_commission_rate: string;
}
function createBaseParams(): Params {
  return {
    minCommissionRate: ""
  };
}
export const Params = {
  typeUrl: "/akash.staking.v1beta3.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minCommissionRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minCommissionRate: isSet(object.minCommissionRate) ? String(object.minCommissionRate) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minCommissionRate = object.minCommissionRate ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
      message.minCommissionRate = object.min_commission_rate;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_commission_rate = message.minCommissionRate;
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
      typeUrl: "/akash.staking.v1beta3.Params",
      value: Params.encode(message).finish()
    };
  }
};