import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params holds parameters for the tokenfactory module */
export interface Params {
  /** DenomCreationFee is the fee required to create a new denom using the tokenfactory module */
  denomCreationFee: Coin[];
  /** FeeCollectorAddress is the address where fees collected from denom creation are sent to */
  feeCollectorAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the tokenfactory module */
export interface ParamsAmino {
  /** DenomCreationFee is the fee required to create a new denom using the tokenfactory module */
  denom_creation_fee: CoinAmino[];
  /** FeeCollectorAddress is the address where fees collected from denom creation are sent to */
  fee_collector_address: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/tokenfactory/params";
  value: ParamsAmino;
}
/** Params holds parameters for the tokenfactory module */
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
  fee_collector_address: string;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    feeCollectorAddress: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeCollectorAddress !== "") {
      writer.uint32(18).string(message.feeCollectorAddress);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      denomCreationFee: Array.isArray(object?.denomCreationFee) ? object.denomCreationFee.map((e: any) => Coin.fromJSON(e)) : [],
      feeCollectorAddress: isSet(object.feeCollectorAddress) ? String(object.feeCollectorAddress) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.feeCollectorAddress = object.feeCollectorAddress ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      denomCreationFee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e: any) => Coin.fromAmino(e)) : [],
      feeCollectorAddress: object.fee_collector_address
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.denom_creation_fee = [];
    }
    obj.fee_collector_address = message.feeCollectorAddress;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/tokenfactory/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};