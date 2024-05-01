import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    maxSlots: number;
    maxGas: number;
    feeTtl: number;
}
export interface ParamsProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    max_slots?: number;
    max_gas?: number;
    fee_ttl?: number;
}
export interface ParamsAminoMsg {
    type: "/cyber.dmn.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    max_slots: number;
    max_gas: number;
    fee_ttl: number;
}
export interface Thought {
    program: string;
    trigger: Trigger;
    load: Load;
    name: string;
    particle: string;
}
export interface ThoughtProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.Thought";
    value: Uint8Array;
}
export interface ThoughtAmino {
    program?: string;
    trigger?: TriggerAmino;
    load?: LoadAmino;
    name?: string;
    particle?: string;
}
export interface ThoughtAminoMsg {
    type: "/cyber.dmn.v1beta1.Thought";
    value: ThoughtAmino;
}
export interface ThoughtSDKType {
    program: string;
    trigger: TriggerSDKType;
    load: LoadSDKType;
    name: string;
    particle: string;
}
export interface Trigger {
    period: bigint;
    block: bigint;
}
export interface TriggerProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.Trigger";
    value: Uint8Array;
}
export interface TriggerAmino {
    period?: string;
    block?: string;
}
export interface TriggerAminoMsg {
    type: "/cyber.dmn.v1beta1.Trigger";
    value: TriggerAmino;
}
export interface TriggerSDKType {
    period: bigint;
    block: bigint;
}
export interface Load {
    input: string;
    gasPrice: Coin;
}
export interface LoadProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.Load";
    value: Uint8Array;
}
export interface LoadAmino {
    input?: string;
    gas_price?: CoinAmino;
}
export interface LoadAminoMsg {
    type: "/cyber.dmn.v1beta1.Load";
    value: LoadAmino;
}
export interface LoadSDKType {
    input: string;
    gas_price: CoinSDKType;
}
export interface ThoughtStats {
    program: string;
    name: string;
    calls: bigint;
    fees: bigint;
    gas: bigint;
    lastBlock: bigint;
}
export interface ThoughtStatsProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.ThoughtStats";
    value: Uint8Array;
}
export interface ThoughtStatsAmino {
    program?: string;
    name?: string;
    calls?: string;
    fees?: string;
    gas?: string;
    last_block?: string;
}
export interface ThoughtStatsAminoMsg {
    type: "/cyber.dmn.v1beta1.ThoughtStats";
    value: ThoughtStatsAmino;
}
export interface ThoughtStatsSDKType {
    program: string;
    name: string;
    calls: bigint;
    fees: bigint;
    gas: bigint;
    last_block: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Thought: {
    typeUrl: string;
    encode(message: Thought, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Thought;
    fromPartial(object: Partial<Thought>): Thought;
    fromAmino(object: ThoughtAmino): Thought;
    toAmino(message: Thought): ThoughtAmino;
    fromAminoMsg(object: ThoughtAminoMsg): Thought;
    fromProtoMsg(message: ThoughtProtoMsg): Thought;
    toProto(message: Thought): Uint8Array;
    toProtoMsg(message: Thought): ThoughtProtoMsg;
};
export declare const Trigger: {
    typeUrl: string;
    encode(message: Trigger, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Trigger;
    fromPartial(object: Partial<Trigger>): Trigger;
    fromAmino(object: TriggerAmino): Trigger;
    toAmino(message: Trigger): TriggerAmino;
    fromAminoMsg(object: TriggerAminoMsg): Trigger;
    fromProtoMsg(message: TriggerProtoMsg): Trigger;
    toProto(message: Trigger): Uint8Array;
    toProtoMsg(message: Trigger): TriggerProtoMsg;
};
export declare const Load: {
    typeUrl: string;
    encode(message: Load, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Load;
    fromPartial(object: Partial<Load>): Load;
    fromAmino(object: LoadAmino): Load;
    toAmino(message: Load): LoadAmino;
    fromAminoMsg(object: LoadAminoMsg): Load;
    fromProtoMsg(message: LoadProtoMsg): Load;
    toProto(message: Load): Uint8Array;
    toProtoMsg(message: Load): LoadProtoMsg;
};
export declare const ThoughtStats: {
    typeUrl: string;
    encode(message: ThoughtStats, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ThoughtStats;
    fromPartial(object: Partial<ThoughtStats>): ThoughtStats;
    fromAmino(object: ThoughtStatsAmino): ThoughtStats;
    toAmino(message: ThoughtStats): ThoughtStatsAmino;
    fromAminoMsg(object: ThoughtStatsAminoMsg): ThoughtStats;
    fromProtoMsg(message: ThoughtStatsProtoMsg): ThoughtStats;
    toProto(message: ThoughtStats): Uint8Array;
    toProtoMsg(message: ThoughtStats): ThoughtStatsProtoMsg;
};
