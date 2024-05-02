import { BinaryWriter } from "../../../binary";
export interface EventSwap {
    txHash: Uint8Array;
    receiver: string;
}
export interface EventSwapProtoMsg {
    typeUrl: "/sentinel.swap.v1.EventSwap";
    value: Uint8Array;
}
export interface EventSwapAmino {
    tx_hash?: string;
    receiver?: string;
}
export interface EventSwapAminoMsg {
    type: "/sentinel.swap.v1.EventSwap";
    value: EventSwapAmino;
}
export interface EventSwapSDKType {
    tx_hash: Uint8Array;
    receiver: string;
}
export declare const EventSwap: {
    typeUrl: string;
    encode(message: EventSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSwap;
    fromPartial(object: Partial<EventSwap>): EventSwap;
    fromAmino(object: EventSwapAmino): EventSwap;
    toAmino(message: EventSwap): EventSwapAmino;
    fromAminoMsg(object: EventSwapAminoMsg): EventSwap;
    fromProtoMsg(message: EventSwapProtoMsg): EventSwap;
    toProto(message: EventSwap): Uint8Array;
    toProtoMsg(message: EventSwap): EventSwapProtoMsg;
};
