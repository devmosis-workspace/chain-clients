import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export interface LiquidityProviderAccountProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.LiquidityProviderAccount";
    value: Uint8Array;
}
export interface LiquidityProviderAccountAmino {
    /**
     * Any string address representation with the accompanying supporting encoding
     * and validation functions starting with bech32. However, in the
     * interest of cultivating wider acceptance for this module other arbitrary
     * address encodings outside the supported cosmos sdk formats perhaps would
     * fit nicely with this loosely defined provider identity specifier.
     */
    address: string;
    mintable: CoinAmino[];
}
export interface LiquidityProviderAccountAminoMsg {
    type: "/em.liquidityprovider.v1.LiquidityProviderAccount";
    value: LiquidityProviderAccountAmino;
}
export interface LiquidityProviderAccountSDKType {
    address: string;
    mintable: CoinSDKType[];
}
export declare const LiquidityProviderAccount: {
    typeUrl: string;
    encode(message: LiquidityProviderAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderAccount;
    fromPartial(object: Partial<LiquidityProviderAccount>): LiquidityProviderAccount;
    fromAmino(object: LiquidityProviderAccountAmino): LiquidityProviderAccount;
    toAmino(message: LiquidityProviderAccount): LiquidityProviderAccountAmino;
    fromAminoMsg(object: LiquidityProviderAccountAminoMsg): LiquidityProviderAccount;
    fromProtoMsg(message: LiquidityProviderAccountProtoMsg): LiquidityProviderAccount;
    toProto(message: LiquidityProviderAccount): Uint8Array;
    toProtoMsg(message: LiquidityProviderAccount): LiquidityProviderAccountProtoMsg;
};
