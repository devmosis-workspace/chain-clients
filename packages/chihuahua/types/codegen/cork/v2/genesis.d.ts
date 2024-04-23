import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType, CorkResult, CorkResultAmino, CorkResultSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
    params: Params;
    cellarIds: CellarIDSet;
    invalidationNonce: bigint;
    scheduledCorks: ScheduledCork[];
    corkResults: CorkResult[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cork.v2.GenesisState";
    value: Uint8Array;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    cellar_ids?: CellarIDSetAmino;
    invalidation_nonce?: string;
    scheduled_corks?: ScheduledCorkAmino[];
    cork_results?: CorkResultAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/cork.v2.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    cellar_ids: CellarIDSetSDKType;
    invalidation_nonce: bigint;
    scheduled_corks: ScheduledCorkSDKType[];
    cork_results: CorkResultSDKType[];
}
/** Params cork parameters */
export interface Params {
    /**
     * Deprecated
     * VoteThreshold defines the percentage of bonded stake required to vote for a scheduled cork to be approved
     */
    voteThreshold: string;
    maxCorksPerValidator: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/cork.v2.Params";
    value: Uint8Array;
}
/** Params cork parameters */
export interface ParamsAmino {
    /**
     * Deprecated
     * VoteThreshold defines the percentage of bonded stake required to vote for a scheduled cork to be approved
     */
    vote_threshold?: string;
    max_corks_per_validator?: string;
}
export interface ParamsAminoMsg {
    type: "/cork.v2.Params";
    value: ParamsAmino;
}
/** Params cork parameters */
export interface ParamsSDKType {
    vote_threshold: string;
    max_corks_per_validator: bigint;
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
