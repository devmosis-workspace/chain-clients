import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmount {
    coin?: Coin;
}
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmountSDKType {
    coin?: CoinSDKType;
}
export declare const TotalBurnedNeutronsAmount: {
    encode(message: TotalBurnedNeutronsAmount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TotalBurnedNeutronsAmount;
    fromPartial(object: Partial<TotalBurnedNeutronsAmount>): TotalBurnedNeutronsAmount;
};
