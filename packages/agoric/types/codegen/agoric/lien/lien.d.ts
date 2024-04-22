import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
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
export interface LienProtoMsg {
    typeUrl: "/agoric.lien.Lien";
    value: Uint8Array;
}
/** Lien contains the lien state of a particular account. */
export interface LienAmino {
    /** coins holds the amount liened */
    coins?: CoinAmino[];
    /**
     * delegated tracks the net amount delegated for non-vesting accounts,
     * or zero coins for vesting accounts.
     * (Vesting accounts have their own fields to track delegation.)
     */
    delegated?: CoinAmino[];
}
export interface LienAminoMsg {
    type: "/agoric.lien.Lien";
    value: LienAmino;
}
/** Lien contains the lien state of a particular account. */
export interface LienSDKType {
    coins: CoinSDKType[];
    delegated: CoinSDKType[];
}
export declare const Lien: {
    typeUrl: string;
    encode(message: Lien, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Lien;
    fromPartial(object: Partial<Lien>): Lien;
    fromAmino(object: LienAmino): Lien;
    toAmino(message: Lien): LienAmino;
    fromAminoMsg(object: LienAminoMsg): Lien;
    fromProtoMsg(message: LienProtoMsg): Lien;
    toProto(message: Lien): Uint8Array;
    toProtoMsg(message: Lien): LienProtoMsg;
};
