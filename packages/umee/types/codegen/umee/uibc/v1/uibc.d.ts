import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
/** ICS20Memo payload for IBC transfer memo field. */
export interface ICS20Memo {
    /** messages is a list of `sdk.Msg`s that will be executed when handling ICS20 transfer. */
    messages: Any[];
    /**
     * fallback_addr [optional] is a bech23 account address used to overwrite the original ICS20
     * recipient when:
     * 1. it is defined
     * 2. and memo is can be properly deserialized into this structure
     * 3. and `messages` processes failed.
     * When memo can't be properly deserialized, then the ICS20 processing will continue to other
     * middlewares.
     */
    fallbackAddr: string;
}
export interface ICS20MemoProtoMsg {
    typeUrl: "/umee.uibc.v1.ICS20Memo";
    value: Uint8Array;
}
/** ICS20Memo payload for IBC transfer memo field. */
export interface ICS20MemoAmino {
    /** messages is a list of `sdk.Msg`s that will be executed when handling ICS20 transfer. */
    messages?: AnyAmino[];
    /**
     * fallback_addr [optional] is a bech23 account address used to overwrite the original ICS20
     * recipient when:
     * 1. it is defined
     * 2. and memo is can be properly deserialized into this structure
     * 3. and `messages` processes failed.
     * When memo can't be properly deserialized, then the ICS20 processing will continue to other
     * middlewares.
     */
    fallback_addr?: string;
}
export interface ICS20MemoAminoMsg {
    type: "/umee.uibc.v1.ICS20Memo";
    value: ICS20MemoAmino;
}
/** ICS20Memo payload for IBC transfer memo field. */
export interface ICS20MemoSDKType {
    messages: AnySDKType[];
    fallback_addr: string;
}
/** DecCoinSymbol extends the Cosmos SDK DecCoin type and adds symbol name. */
export interface DecCoinSymbol {
    denom: string;
    amount: string;
    /** token symbol name */
    symbol: string;
}
export interface DecCoinSymbolProtoMsg {
    typeUrl: "/umee.uibc.v1.DecCoinSymbol";
    value: Uint8Array;
}
/** DecCoinSymbol extends the Cosmos SDK DecCoin type and adds symbol name. */
export interface DecCoinSymbolAmino {
    denom?: string;
    amount?: string;
    /** token symbol name */
    symbol?: string;
}
export interface DecCoinSymbolAminoMsg {
    type: "/umee.uibc.v1.DecCoinSymbol";
    value: DecCoinSymbolAmino;
}
/** DecCoinSymbol extends the Cosmos SDK DecCoin type and adds symbol name. */
export interface DecCoinSymbolSDKType {
    denom: string;
    amount: string;
    symbol: string;
}
export declare const ICS20Memo: {
    typeUrl: string;
    encode(message: ICS20Memo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ICS20Memo;
    fromPartial(object: Partial<ICS20Memo>): ICS20Memo;
    fromAmino(object: ICS20MemoAmino): ICS20Memo;
    toAmino(message: ICS20Memo): ICS20MemoAmino;
    fromAminoMsg(object: ICS20MemoAminoMsg): ICS20Memo;
    fromProtoMsg(message: ICS20MemoProtoMsg): ICS20Memo;
    toProto(message: ICS20Memo): Uint8Array;
    toProtoMsg(message: ICS20Memo): ICS20MemoProtoMsg;
};
export declare const DecCoinSymbol: {
    typeUrl: string;
    encode(message: DecCoinSymbol, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DecCoinSymbol;
    fromPartial(object: Partial<DecCoinSymbol>): DecCoinSymbol;
    fromAmino(object: DecCoinSymbolAmino): DecCoinSymbol;
    toAmino(message: DecCoinSymbol): DecCoinSymbolAmino;
    fromAminoMsg(object: DecCoinSymbolAminoMsg): DecCoinSymbol;
    fromProtoMsg(message: DecCoinSymbolProtoMsg): DecCoinSymbol;
    toProto(message: DecCoinSymbol): Uint8Array;
    toProtoMsg(message: DecCoinSymbol): DecCoinSymbolProtoMsg;
};
