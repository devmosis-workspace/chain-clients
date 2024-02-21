import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  feeTiers: bigint[];
  maxTrueTakerSpread: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/neutron.dex.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  fee_tiers?: string[];
  max_true_taker_spread?: string;
}
export interface ParamsAminoMsg {
  type: "/neutron.dex.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  fee_tiers: bigint[];
  max_true_taker_spread: string;
}
function createBaseParams(): Params {
  return {
    feeTiers: [],
    maxTrueTakerSpread: ""
  };
}
export const Params = {
  typeUrl: "/neutron.dex.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.feeTiers) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.maxTrueTakerSpread !== "") {
      writer.uint32(18).string(message.maxTrueTakerSpread);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      feeTiers: Array.isArray(object?.feeTiers) ? object.feeTiers.map((e: any) => BigInt(e.toString())) : [],
      maxTrueTakerSpread: isSet(object.maxTrueTakerSpread) ? String(object.maxTrueTakerSpread) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.feeTiers = object.feeTiers?.map(e => BigInt(e.toString())) || [];
    message.maxTrueTakerSpread = object.maxTrueTakerSpread ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.feeTiers = object.fee_tiers?.map(e => BigInt(e)) || [];
    if (object.max_true_taker_spread !== undefined && object.max_true_taker_spread !== null) {
      message.maxTrueTakerSpread = object.max_true_taker_spread;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.feeTiers) {
      obj.fee_tiers = message.feeTiers.map(e => e.toString());
    } else {
      obj.fee_tiers = [];
    }
    obj.max_true_taker_spread = message.maxTrueTakerSpread;
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
      typeUrl: "/neutron.dex.Params",
      value: Params.encode(message).finish()
    };
  }
};