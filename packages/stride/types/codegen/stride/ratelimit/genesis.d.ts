import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType } from "./ratelimit";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisState {
    params: Params;
    rateLimits: RateLimit[];
    whitelistedAddressPairs: WhitelistedAddressPair[];
    blacklistedDenoms: string[];
    pendingSendPacketSequenceNumbers: string[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.ratelimit.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    rate_limits?: RateLimitAmino[];
    whitelisted_address_pairs?: WhitelistedAddressPairAmino[];
    blacklisted_denoms?: string[];
    pending_send_packet_sequence_numbers?: string[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.ratelimit.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    rate_limits: RateLimitSDKType[];
    whitelisted_address_pairs: WhitelistedAddressPairSDKType[];
    blacklisted_denoms: string[];
    pending_send_packet_sequence_numbers: string[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
