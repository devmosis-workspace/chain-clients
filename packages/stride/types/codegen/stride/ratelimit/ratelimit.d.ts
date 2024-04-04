import { BinaryWriter } from "../../binary";
export declare enum PacketDirection {
    PACKET_SEND = 0,
    PACKET_RECV = 1,
    UNRECOGNIZED = -1
}
export declare const PacketDirectionSDKType: typeof PacketDirection;
export declare const PacketDirectionAmino: typeof PacketDirection;
export declare function packetDirectionFromJSON(object: any): PacketDirection;
export declare function packetDirectionToJSON(object: PacketDirection): string;
export interface Path {
    denom: string;
    channelId: string;
}
export interface PathProtoMsg {
    typeUrl: "/stride.ratelimit.Path";
    value: Uint8Array;
}
export interface PathAmino {
    denom?: string;
    channel_id?: string;
}
export interface PathAminoMsg {
    type: "/stride.ratelimit.Path";
    value: PathAmino;
}
export interface PathSDKType {
    denom: string;
    channel_id: string;
}
export interface Quota {
    maxPercentSend: string;
    maxPercentRecv: string;
    durationHours: bigint;
}
export interface QuotaProtoMsg {
    typeUrl: "/stride.ratelimit.Quota";
    value: Uint8Array;
}
export interface QuotaAmino {
    max_percent_send?: string;
    max_percent_recv?: string;
    duration_hours?: string;
}
export interface QuotaAminoMsg {
    type: "/stride.ratelimit.Quota";
    value: QuotaAmino;
}
export interface QuotaSDKType {
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: bigint;
}
export interface Flow {
    inflow: string;
    outflow: string;
    channelValue: string;
}
export interface FlowProtoMsg {
    typeUrl: "/stride.ratelimit.Flow";
    value: Uint8Array;
}
export interface FlowAmino {
    inflow?: string;
    outflow?: string;
    channel_value?: string;
}
export interface FlowAminoMsg {
    type: "/stride.ratelimit.Flow";
    value: FlowAmino;
}
export interface FlowSDKType {
    inflow: string;
    outflow: string;
    channel_value: string;
}
export interface RateLimit {
    path?: Path;
    quota?: Quota;
    flow?: Flow;
}
export interface RateLimitProtoMsg {
    typeUrl: "/stride.ratelimit.RateLimit";
    value: Uint8Array;
}
export interface RateLimitAmino {
    path?: PathAmino;
    quota?: QuotaAmino;
    flow?: FlowAmino;
}
export interface RateLimitAminoMsg {
    type: "/stride.ratelimit.RateLimit";
    value: RateLimitAmino;
}
export interface RateLimitSDKType {
    path?: PathSDKType;
    quota?: QuotaSDKType;
    flow?: FlowSDKType;
}
export interface WhitelistedAddressPair {
    sender: string;
    receiver: string;
}
export interface WhitelistedAddressPairProtoMsg {
    typeUrl: "/stride.ratelimit.WhitelistedAddressPair";
    value: Uint8Array;
}
export interface WhitelistedAddressPairAmino {
    sender?: string;
    receiver?: string;
}
export interface WhitelistedAddressPairAminoMsg {
    type: "/stride.ratelimit.WhitelistedAddressPair";
    value: WhitelistedAddressPairAmino;
}
export interface WhitelistedAddressPairSDKType {
    sender: string;
    receiver: string;
}
export declare const Path: {
    typeUrl: string;
    encode(message: Path, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Path;
    fromPartial(object: Partial<Path>): Path;
    fromAmino(object: PathAmino): Path;
    toAmino(message: Path): PathAmino;
    fromAminoMsg(object: PathAminoMsg): Path;
    fromProtoMsg(message: PathProtoMsg): Path;
    toProto(message: Path): Uint8Array;
    toProtoMsg(message: Path): PathProtoMsg;
};
export declare const Quota: {
    typeUrl: string;
    encode(message: Quota, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Quota;
    fromPartial(object: Partial<Quota>): Quota;
    fromAmino(object: QuotaAmino): Quota;
    toAmino(message: Quota): QuotaAmino;
    fromAminoMsg(object: QuotaAminoMsg): Quota;
    fromProtoMsg(message: QuotaProtoMsg): Quota;
    toProto(message: Quota): Uint8Array;
    toProtoMsg(message: Quota): QuotaProtoMsg;
};
export declare const Flow: {
    typeUrl: string;
    encode(message: Flow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Flow;
    fromPartial(object: Partial<Flow>): Flow;
    fromAmino(object: FlowAmino): Flow;
    toAmino(message: Flow): FlowAmino;
    fromAminoMsg(object: FlowAminoMsg): Flow;
    fromProtoMsg(message: FlowProtoMsg): Flow;
    toProto(message: Flow): Uint8Array;
    toProtoMsg(message: Flow): FlowProtoMsg;
};
export declare const RateLimit: {
    typeUrl: string;
    encode(message: RateLimit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RateLimit;
    fromPartial(object: Partial<RateLimit>): RateLimit;
    fromAmino(object: RateLimitAmino): RateLimit;
    toAmino(message: RateLimit): RateLimitAmino;
    fromAminoMsg(object: RateLimitAminoMsg): RateLimit;
    fromProtoMsg(message: RateLimitProtoMsg): RateLimit;
    toProto(message: RateLimit): Uint8Array;
    toProtoMsg(message: RateLimit): RateLimitProtoMsg;
};
export declare const WhitelistedAddressPair: {
    typeUrl: string;
    encode(message: WhitelistedAddressPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WhitelistedAddressPair;
    fromPartial(object: Partial<WhitelistedAddressPair>): WhitelistedAddressPair;
    fromAmino(object: WhitelistedAddressPairAmino): WhitelistedAddressPair;
    toAmino(message: WhitelistedAddressPair): WhitelistedAddressPairAmino;
    fromAminoMsg(object: WhitelistedAddressPairAminoMsg): WhitelistedAddressPair;
    fromProtoMsg(message: WhitelistedAddressPairProtoMsg): WhitelistedAddressPair;
    toProto(message: WhitelistedAddressPair): Uint8Array;
    toProtoMsg(message: WhitelistedAddressPair): WhitelistedAddressPairProtoMsg;
};
