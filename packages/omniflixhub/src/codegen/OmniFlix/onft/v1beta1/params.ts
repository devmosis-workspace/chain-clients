import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Params {
  denomCreationFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  denom_creation_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/OmniFlix.onft.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomCreationFee !== undefined) {
      Coin.encode(message.denomCreationFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      denomCreationFee: isSet(object.denomCreationFee) ? Coin.fromJSON(object.denomCreationFee) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee !== undefined && object.denomCreationFee !== null ? Coin.fromPartial(object.denomCreationFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.denom_creation_fee !== undefined && object.denom_creation_fee !== null) {
      message.denomCreationFee = Coin.fromAmino(object.denom_creation_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.denom_creation_fee = message.denomCreationFee ? Coin.toAmino(message.denomCreationFee) : undefined;
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
      typeUrl: "/OmniFlix.onft.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};