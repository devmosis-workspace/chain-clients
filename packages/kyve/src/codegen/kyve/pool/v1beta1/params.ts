import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the pool module parameters. */
export interface Params {
  /** protocol_inflation_share ... */
  protocolInflationShare: string;
  /** pool_inflation_payout_rate ... */
  poolInflationPayoutRate: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the pool module parameters. */
export interface ParamsAmino {
  /** protocol_inflation_share ... */
  protocol_inflation_share: string;
  /** pool_inflation_payout_rate ... */
  pool_inflation_payout_rate: string;
}
export interface ParamsAminoMsg {
  type: "/kyve.pool.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the pool module parameters. */
export interface ParamsSDKType {
  protocol_inflation_share: string;
  pool_inflation_payout_rate: string;
}
function createBaseParams(): Params {
  return {
    protocolInflationShare: "",
    poolInflationPayoutRate: ""
  };
}
export const Params = {
  typeUrl: "/kyve.pool.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocolInflationShare !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.protocolInflationShare, 18).atomics);
    }
    if (message.poolInflationPayoutRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.poolInflationPayoutRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      protocolInflationShare: isSet(object.protocolInflationShare) ? String(object.protocolInflationShare) : "",
      poolInflationPayoutRate: isSet(object.poolInflationPayoutRate) ? String(object.poolInflationPayoutRate) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.protocolInflationShare = object.protocolInflationShare ?? "";
    message.poolInflationPayoutRate = object.poolInflationPayoutRate ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      protocolInflationShare: object.protocol_inflation_share,
      poolInflationPayoutRate: object.pool_inflation_payout_rate
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.protocol_inflation_share = message.protocolInflationShare;
    obj.pool_inflation_payout_rate = message.poolInflationPayoutRate;
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
      typeUrl: "/kyve.pool.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};