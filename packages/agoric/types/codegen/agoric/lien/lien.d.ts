import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Lien contains the lien state of a particular account. */
export interface Lien {
    /** coins holds the amount liened */
    coins: Coin[];
    /**
     * delegated tracks the net amount delegated for non-vesting accounts,
     * or zero coins for vesting accounts.
     * (Vesting accounts have their own fields to track delegation.)
     */
    delegated: Coin[];
}
/** Lien contains the lien state of a particular account. */
export interface LienSDKType {
    coins: CoinSDKType[];
    delegated: CoinSDKType[];
}
export declare const Lien: {
    encode(message: Lien, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Lien;
    fromPartial(object: Partial<Lien>): Lien;
};
