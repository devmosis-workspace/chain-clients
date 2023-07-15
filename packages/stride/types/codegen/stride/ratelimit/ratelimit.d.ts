import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum PacketDirection {
    PACKET_SEND = 0,
    PACKET_RECV = 1,
    UNRECOGNIZED = -1
}
export declare const PacketDirectionSDKType: typeof PacketDirection;
export declare function packetDirectionFromJSON(object: any): PacketDirection;
export declare function packetDirectionToJSON(object: PacketDirection): string;
export interface Path {
    denom: string;
    channelId: string;
}
export interface PathSDKType {
    denom: string;
    channel_id: string;
}
export interface Quota {
    maxPercentSend: string;
    maxPercentRecv: string;
    durationHours: Long;
}
export interface QuotaSDKType {
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: Long;
}
export interface Flow {
    inflow: string;
    outflow: string;
    channelValue: string;
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
export interface RateLimitSDKType {
    path?: PathSDKType;
    quota?: QuotaSDKType;
    flow?: FlowSDKType;
}
export interface WhitelistedAddressPair {
    sender: string;
    receiver: string;
}
export interface WhitelistedAddressPairSDKType {
    sender: string;
    receiver: string;
}
export declare const Path: {
    encode(message: Path, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Path;
    fromPartial(object: Partial<Path>): Path;
};
export declare const Quota: {
    encode(message: Quota, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Quota;
    fromPartial(object: Partial<Quota>): Quota;
};
export declare const Flow: {
    encode(message: Flow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Flow;
    fromPartial(object: Partial<Flow>): Flow;
};
export declare const RateLimit: {
    encode(message: RateLimit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RateLimit;
    fromPartial(object: Partial<RateLimit>): RateLimit;
};
export declare const WhitelistedAddressPair: {
    encode(message: WhitelistedAddressPair, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): WhitelistedAddressPair;
    fromPartial(object: Partial<WhitelistedAddressPair>): WhitelistedAddressPair;
};
