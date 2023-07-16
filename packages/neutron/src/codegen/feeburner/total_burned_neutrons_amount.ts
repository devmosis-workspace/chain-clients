import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmount {
  coin?: Coin;
}
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmountSDKType {
  coin?: CoinSDKType;
}
function createBaseTotalBurnedNeutronsAmount(): TotalBurnedNeutronsAmount {
  return {
    coin: undefined
  };
}
export const TotalBurnedNeutronsAmount = {
  encode(message: TotalBurnedNeutronsAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};