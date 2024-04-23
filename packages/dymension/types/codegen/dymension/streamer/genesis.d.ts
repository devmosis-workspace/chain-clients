import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Stream, StreamAmino, StreamSDKType } from "./stream";
import { BinaryWriter } from "../../binary";
/**
 * GenesisState defines the streamer module's various parameters when first
 * initialized
 */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params;
    /** streams are all streams that should exist at genesis */
    streams: Stream[];
    /**
     * last_stream_id is what the stream number will increment from when creating
     * the next stream after genesis
     */
    lastStreamId: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the streamer module's various parameters when first
 * initialized
 */
export interface GenesisStateAmino {
    /** params are all the parameters of the module */
    params?: ParamsAmino;
    /** streams are all streams that should exist at genesis */
    streams?: StreamAmino[];
    /**
     * last_stream_id is what the stream number will increment from when creating
     * the next stream after genesis
     */
    last_stream_id?: string;
}
export interface GenesisStateAminoMsg {
    type: "/dymensionxyz.dymension.streamer.GenesisState";
    value: GenesisStateAmino;
}
/**
 * GenesisState defines the streamer module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    streams: StreamSDKType[];
    last_stream_id: bigint;
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
