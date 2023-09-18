import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmount {
  coin: Coin;
}
export interface TotalBurnedNeutronsAmountProtoMsg {
  typeUrl: "/neutron.feeburner.TotalBurnedNeutronsAmount";
  value: Uint8Array;
}
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmountAmino {
  coin?: CoinAmino;
}
export interface TotalBurnedNeutronsAmountAminoMsg {
  type: "/neutron.feeburner.TotalBurnedNeutronsAmount";
  value: TotalBurnedNeutronsAmountAmino;
}
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmountSDKType {
  coin: CoinSDKType;
}
function createBaseTotalBurnedNeutronsAmount(): TotalBurnedNeutronsAmount {
  return {
    coin: Coin.fromPartial({})
  };
}
export const TotalBurnedNeutronsAmount = {
  typeUrl: "/neutron.feeburner.TotalBurnedNeutronsAmount",
  encode(message: TotalBurnedNeutronsAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TotalBurnedNeutronsAmount {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },
  fromPartial(object: Partial<TotalBurnedNeutronsAmount>): TotalBurnedNeutronsAmount {
    const message = createBaseTotalBurnedNeutronsAmount();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: TotalBurnedNeutronsAmountAmino): TotalBurnedNeutronsAmount {
    return {
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },
  toAmino(message: TotalBurnedNeutronsAmount): TotalBurnedNeutronsAmountAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: TotalBurnedNeutronsAmountAminoMsg): TotalBurnedNeutronsAmount {
    return TotalBurnedNeutronsAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalBurnedNeutronsAmountProtoMsg): TotalBurnedNeutronsAmount {
    return TotalBurnedNeutronsAmount.decode(message.value);
  },
  toProto(message: TotalBurnedNeutronsAmount): Uint8Array {
    return TotalBurnedNeutronsAmount.encode(message).finish();
  },
  toProtoMsg(message: TotalBurnedNeutronsAmount): TotalBurnedNeutronsAmountProtoMsg {
    return {
      typeUrl: "/neutron.feeburner.TotalBurnedNeutronsAmount",
      value: TotalBurnedNeutronsAmount.encode(message).finish()
    };
  }
};