import { TradePairID, TradePairIDAmino, TradePairIDSDKType } from "./trade_pair_id";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
export interface LimitOrderTrancheKey {
    tradePairId?: TradePairID;
    tickIndexTakerToMaker: bigint;
    trancheKey: string;
}
export interface LimitOrderTrancheKeyProtoMsg {
    typeUrl: "/neutron.dex.LimitOrderTrancheKey";
    value: Uint8Array;
}
export interface LimitOrderTrancheKeyAmino {
    trade_pair_id?: TradePairIDAmino;
    tick_index_taker_to_maker?: string;
    tranche_key?: string;
}
export interface LimitOrderTrancheKeyAminoMsg {
    type: "/neutron.dex.LimitOrderTrancheKey";
    value: LimitOrderTrancheKeyAmino;
}
export interface LimitOrderTrancheKeySDKType {
    trade_pair_id?: TradePairIDSDKType;
    tick_index_taker_to_maker: bigint;
    tranche_key: string;
}
export interface LimitOrderTranche {
    key?: LimitOrderTrancheKey;
    reservesMakerDenom: string;
    reservesTakerDenom: string;
    totalMakerDenom: string;
    totalTakerDenom: string;
    /**
     * JIT orders also use goodTilDate to handle deletion but represent a special case
     * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
     * Order deletion still functions the same and the orders will be deleted at the end of the block
     */
    expirationTime?: Timestamp;
    priceTakerToMaker: string;
}
export interface LimitOrderTrancheProtoMsg {
    typeUrl: "/neutron.dex.LimitOrderTranche";
    value: Uint8Array;
}
export interface LimitOrderTrancheAmino {
    key?: LimitOrderTrancheKeyAmino;
    reserves_maker_denom?: string;
    reserves_taker_denom?: string;
    total_maker_denom?: string;
    total_taker_denom?: string;
    /**
     * JIT orders also use goodTilDate to handle deletion but represent a special case
     * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
     * Order deletion still functions the same and the orders will be deleted at the end of the block
     */
    expiration_time?: string;
    price_taker_to_maker?: string;
}
export interface LimitOrderTrancheAminoMsg {
    type: "/neutron.dex.LimitOrderTranche";
    value: LimitOrderTrancheAmino;
}
export interface LimitOrderTrancheSDKType {
    key?: LimitOrderTrancheKeySDKType;
    reserves_maker_denom: string;
    reserves_taker_denom: string;
    total_maker_denom: string;
    total_taker_denom: string;
    expiration_time?: TimestampSDKType;
    price_taker_to_maker: string;
}
export declare const LimitOrderTrancheKey: {
    typeUrl: string;
    encode(message: LimitOrderTrancheKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LimitOrderTrancheKey;
    fromPartial(object: Partial<LimitOrderTrancheKey>): LimitOrderTrancheKey;
    fromAmino(object: LimitOrderTrancheKeyAmino): LimitOrderTrancheKey;
    toAmino(message: LimitOrderTrancheKey): LimitOrderTrancheKeyAmino;
    fromAminoMsg(object: LimitOrderTrancheKeyAminoMsg): LimitOrderTrancheKey;
    fromProtoMsg(message: LimitOrderTrancheKeyProtoMsg): LimitOrderTrancheKey;
    toProto(message: LimitOrderTrancheKey): Uint8Array;
    toProtoMsg(message: LimitOrderTrancheKey): LimitOrderTrancheKeyProtoMsg;
};
export declare const LimitOrderTranche: {
    typeUrl: string;
    encode(message: LimitOrderTranche, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LimitOrderTranche;
    fromPartial(object: Partial<LimitOrderTranche>): LimitOrderTranche;
    fromAmino(object: LimitOrderTrancheAmino): LimitOrderTranche;
    toAmino(message: LimitOrderTranche): LimitOrderTrancheAmino;
    fromAminoMsg(object: LimitOrderTrancheAminoMsg): LimitOrderTranche;
    fromProtoMsg(message: LimitOrderTrancheProtoMsg): LimitOrderTranche;
    toProto(message: LimitOrderTranche): Uint8Array;
    toProtoMsg(message: LimitOrderTranche): LimitOrderTrancheProtoMsg;
};
