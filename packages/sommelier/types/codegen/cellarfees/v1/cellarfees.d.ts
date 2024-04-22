import { BinaryWriter } from "../../binary";
export interface FeeAccrualCounter {
    denom: string;
    count: bigint;
}
export interface FeeAccrualCounterProtoMsg {
    typeUrl: "/cellarfees.v1.FeeAccrualCounter";
    value: Uint8Array;
}
export interface FeeAccrualCounterAmino {
    denom?: string;
    count?: string;
}
export interface FeeAccrualCounterAminoMsg {
    type: "/cellarfees.v1.FeeAccrualCounter";
    value: FeeAccrualCounterAmino;
}
export interface FeeAccrualCounterSDKType {
    denom: string;
    count: bigint;
}
export interface FeeAccrualCounters {
    counters: FeeAccrualCounter[];
}
export interface FeeAccrualCountersProtoMsg {
    typeUrl: "/cellarfees.v1.FeeAccrualCounters";
    value: Uint8Array;
}
export interface FeeAccrualCountersAmino {
    counters?: FeeAccrualCounterAmino[];
}
export interface FeeAccrualCountersAminoMsg {
    type: "/cellarfees.v1.FeeAccrualCounters";
    value: FeeAccrualCountersAmino;
}
export interface FeeAccrualCountersSDKType {
    counters: FeeAccrualCounterSDKType[];
}
export declare const FeeAccrualCounter: {
    typeUrl: string;
    encode(message: FeeAccrualCounter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeAccrualCounter;
    fromPartial(object: Partial<FeeAccrualCounter>): FeeAccrualCounter;
    fromAmino(object: FeeAccrualCounterAmino): FeeAccrualCounter;
    toAmino(message: FeeAccrualCounter): FeeAccrualCounterAmino;
    fromAminoMsg(object: FeeAccrualCounterAminoMsg): FeeAccrualCounter;
    fromProtoMsg(message: FeeAccrualCounterProtoMsg): FeeAccrualCounter;
    toProto(message: FeeAccrualCounter): Uint8Array;
    toProtoMsg(message: FeeAccrualCounter): FeeAccrualCounterProtoMsg;
};
export declare const FeeAccrualCounters: {
    typeUrl: string;
    encode(message: FeeAccrualCounters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeAccrualCounters;
    fromPartial(object: Partial<FeeAccrualCounters>): FeeAccrualCounters;
    fromAmino(object: FeeAccrualCountersAmino): FeeAccrualCounters;
    toAmino(message: FeeAccrualCounters): FeeAccrualCountersAmino;
    fromAminoMsg(object: FeeAccrualCountersAminoMsg): FeeAccrualCounters;
    fromProtoMsg(message: FeeAccrualCountersProtoMsg): FeeAccrualCounters;
    toProto(message: FeeAccrualCounters): Uint8Array;
    toProtoMsg(message: FeeAccrualCounters): FeeAccrualCountersProtoMsg;
};
