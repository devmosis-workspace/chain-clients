import { TradePairID, TradePairIDAmino, TradePairIDSDKType } from "./trade_pair_id";
import { BinaryWriter } from "../../binary";
export interface PoolReservesKey {
    tradePairId?: TradePairID;
    tickIndexTakerToMaker: bigint;
    fee: bigint;
}
export interface PoolReservesKeyProtoMsg {
    typeUrl: "/neutron.dex.PoolReservesKey";
    value: Uint8Array;
}
export interface PoolReservesKeyAmino {
    trade_pair_id?: TradePairIDAmino;
    tick_index_taker_to_maker?: string;
    fee?: string;
}
export interface PoolReservesKeyAminoMsg {
    type: "/neutron.dex.PoolReservesKey";
    value: PoolReservesKeyAmino;
}
export interface PoolReservesKeySDKType {
    trade_pair_id?: TradePairIDSDKType;
    tick_index_taker_to_maker: bigint;
    fee: bigint;
}
export interface PoolReserves {
    key?: PoolReservesKey;
    reservesMakerDenom: string;
    priceTakerToMaker: string;
    priceOppositeTakerToMaker: string;
}
export interface PoolReservesProtoMsg {
    typeUrl: "/neutron.dex.PoolReserves";
    value: Uint8Array;
}
export interface PoolReservesAmino {
    key?: PoolReservesKeyAmino;
    reserves_maker_denom?: string;
    price_taker_to_maker?: string;
    price_opposite_taker_to_maker?: string;
}
export interface PoolReservesAminoMsg {
    type: "/neutron.dex.PoolReserves";
    value: PoolReservesAmino;
}
export interface PoolReservesSDKType {
    key?: PoolReservesKeySDKType;
    reserves_maker_denom: string;
    price_taker_to_maker: string;
    price_opposite_taker_to_maker: string;
}
export declare const PoolReservesKey: {
    typeUrl: string;
    encode(message: PoolReservesKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolReservesKey;
    fromPartial(object: Partial<PoolReservesKey>): PoolReservesKey;
    fromAmino(object: PoolReservesKeyAmino): PoolReservesKey;
    toAmino(message: PoolReservesKey): PoolReservesKeyAmino;
    fromAminoMsg(object: PoolReservesKeyAminoMsg): PoolReservesKey;
    fromProtoMsg(message: PoolReservesKeyProtoMsg): PoolReservesKey;
    toProto(message: PoolReservesKey): Uint8Array;
    toProtoMsg(message: PoolReservesKey): PoolReservesKeyProtoMsg;
};
export declare const PoolReserves: {
    typeUrl: string;
    encode(message: PoolReserves, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolReserves;
    fromPartial(object: Partial<PoolReserves>): PoolReserves;
    fromAmino(object: PoolReservesAmino): PoolReserves;
    toAmino(message: PoolReserves): PoolReservesAmino;
    fromAminoMsg(object: PoolReservesAminoMsg): PoolReserves;
    fromProtoMsg(message: PoolReservesProtoMsg): PoolReserves;
    toProto(message: PoolReserves): Uint8Array;
    toProtoMsg(message: PoolReserves): PoolReservesProtoMsg;
};
