import { TradePairID, TradePairIDAmino, TradePairIDSDKType } from "./trade_pair_id";
import { LimitOrderType } from "./tx";
import { BinaryWriter } from "../../binary";
export interface LimitOrderTrancheUser {
    tradePairId?: TradePairID;
    tickIndexTakerToMaker: bigint;
    trancheKey: string;
    address: string;
    sharesOwned: string;
    sharesWithdrawn: string;
    sharesCancelled: string;
    orderType: LimitOrderType;
}
export interface LimitOrderTrancheUserProtoMsg {
    typeUrl: "/neutron.dex.LimitOrderTrancheUser";
    value: Uint8Array;
}
export interface LimitOrderTrancheUserAmino {
    trade_pair_id?: TradePairIDAmino;
    tick_index_taker_to_maker?: string;
    tranche_key?: string;
    address?: string;
    shares_owned?: string;
    shares_withdrawn?: string;
    shares_cancelled?: string;
    order_type?: LimitOrderType;
}
export interface LimitOrderTrancheUserAminoMsg {
    type: "/neutron.dex.LimitOrderTrancheUser";
    value: LimitOrderTrancheUserAmino;
}
export interface LimitOrderTrancheUserSDKType {
    trade_pair_id?: TradePairIDSDKType;
    tick_index_taker_to_maker: bigint;
    tranche_key: string;
    address: string;
    shares_owned: string;
    shares_withdrawn: string;
    shares_cancelled: string;
    order_type: LimitOrderType;
}
export declare const LimitOrderTrancheUser: {
    typeUrl: string;
    encode(message: LimitOrderTrancheUser, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LimitOrderTrancheUser;
    fromPartial(object: Partial<LimitOrderTrancheUser>): LimitOrderTrancheUser;
    fromAmino(object: LimitOrderTrancheUserAmino): LimitOrderTrancheUser;
    toAmino(message: LimitOrderTrancheUser): LimitOrderTrancheUserAmino;
    fromAminoMsg(object: LimitOrderTrancheUserAminoMsg): LimitOrderTrancheUser;
    fromProtoMsg(message: LimitOrderTrancheUserProtoMsg): LimitOrderTrancheUser;
    toProto(message: LimitOrderTrancheUser): Uint8Array;
    toProtoMsg(message: LimitOrderTrancheUser): LimitOrderTrancheUserProtoMsg;
};
