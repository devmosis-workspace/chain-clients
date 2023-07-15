import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface Pool {
    name: string;
    rewards: Pool_Reward[];
}
export interface PoolSDKType {
    name: string;
    rewards: Pool_RewardSDKType[];
}
export interface Pool_Reward {
    validator: Uint8Array;
    coins: Coin[];
}
export interface Pool_RewardSDKType {
    validator: Uint8Array;
    coins: CoinSDKType[];
}
export interface Refund {
    payer: Uint8Array;
    fees: Coin[];
}
export interface RefundSDKType {
    payer: Uint8Array;
    fees: CoinSDKType[];
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
};
export declare const Pool_Reward: {
    encode(message: Pool_Reward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pool_Reward;
    fromPartial(object: Partial<Pool_Reward>): Pool_Reward;
};
export declare const Refund: {
    encode(message: Refund, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Refund;
    fromPartial(object: Partial<Refund>): Refund;
};
