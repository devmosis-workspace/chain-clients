import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Payout {
    id: bigint;
    address: string;
    nodeAddress: string;
    hours: bigint;
    price: Coin;
    nextAt: Timestamp;
}
export interface PayoutProtoMsg {
    typeUrl: "/sentinel.subscription.v2.Payout";
    value: Uint8Array;
}
export interface PayoutAmino {
    id?: string;
    address?: string;
    node_address?: string;
    hours?: string;
    price?: CoinAmino;
    next_at?: string;
}
export interface PayoutAminoMsg {
    type: "/sentinel.subscription.v2.Payout";
    value: PayoutAmino;
}
export interface PayoutSDKType {
    id: bigint;
    address: string;
    node_address: string;
    hours: bigint;
    price: CoinSDKType;
    next_at: TimestampSDKType;
}
export declare const Payout: {
    typeUrl: string;
    encode(message: Payout, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Payout;
    fromPartial(object: Partial<Payout>): Payout;
    fromAmino(object: PayoutAmino): Payout;
    toAmino(message: Payout): PayoutAmino;
    fromAminoMsg(object: PayoutAminoMsg): Payout;
    fromProtoMsg(message: PayoutProtoMsg): Payout;
    toProto(message: Payout): Uint8Array;
    toProtoMsg(message: Payout): PayoutProtoMsg;
};
