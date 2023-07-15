import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params is the params for the x/market module */
export interface Params {
    bidMinDeposit?: Coin;
    orderMaxBids: number;
}
/** Params is the params for the x/market module */
export interface ParamsSDKType {
    bid_min_deposit?: CoinSDKType;
    order_max_bids: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
