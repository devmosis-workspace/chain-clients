import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface Minters {
    address: string;
    allowance?: Coin;
}
export interface MintersSDKType {
    address: string;
    allowance?: CoinSDKType;
}
export declare const Minters: {
    encode(message: Minters, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Minters;
    fromPartial(object: Partial<Minters>): Minters;
};
