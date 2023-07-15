import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface LiquidityProviderAccount {
    /**
     * Any string address representation with the accompanying supporting encoding
     * and validation functions starting with bech32. However, in the
     * interest of cultivating wider acceptance for this module other arbitrary
     * address encodings outside the supported cosmos sdk formats perhaps would
     * fit nicely with this loosely defined provider identity specifier.
     */
    address: string;
    mintable: Coin[];
}
export interface LiquidityProviderAccountSDKType {
    address: string;
    mintable: CoinSDKType[];
}
export declare const LiquidityProviderAccount: {
    encode(message: LiquidityProviderAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderAccount;
    fromPartial(object: Partial<LiquidityProviderAccount>): LiquidityProviderAccount;
};
