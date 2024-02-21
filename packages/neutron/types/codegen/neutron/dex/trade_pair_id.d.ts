import { BinaryWriter } from "../../binary";
export interface TradePairID {
    makerDenom: string;
    takerDenom: string;
}
export interface TradePairIDProtoMsg {
    typeUrl: "/neutron.dex.TradePairID";
    value: Uint8Array;
}
export interface TradePairIDAmino {
    maker_denom?: string;
    taker_denom?: string;
}
export interface TradePairIDAminoMsg {
    type: "/neutron.dex.TradePairID";
    value: TradePairIDAmino;
}
export interface TradePairIDSDKType {
    maker_denom: string;
    taker_denom: string;
}
export declare const TradePairID: {
    typeUrl: string;
    encode(message: TradePairID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradePairID;
    fromPartial(object: Partial<TradePairID>): TradePairID;
    fromAmino(object: TradePairIDAmino): TradePairID;
    toAmino(message: TradePairID): TradePairIDAmino;
    fromAminoMsg(object: TradePairIDAminoMsg): TradePairID;
    fromProtoMsg(message: TradePairIDProtoMsg): TradePairID;
    toProto(message: TradePairID): Uint8Array;
    toProtoMsg(message: TradePairID): TradePairIDProtoMsg;
};
