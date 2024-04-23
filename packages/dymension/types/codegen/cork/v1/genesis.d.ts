import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ValidatorCork, ValidatorCorkAmino, ValidatorCorkSDKType, ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
    params: Params;
    cellarIds: CellarIDSet;
    invalidationNonce: bigint;
    corks: ValidatorCork[];
    scheduledCorks: ScheduledCork[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cork.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    cellar_ids?: CellarIDSetAmino;
    invalidation_nonce: string;
    corks: ValidatorCorkAmino[];
    scheduled_corks: ScheduledCorkAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/cork.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    cellar_ids: CellarIDSetSDKType;
    invalidation_nonce: bigint;
    corks: ValidatorCorkSDKType[];
    scheduled_corks: ScheduledCorkSDKType[];
}
/** Params cork parameters */
export interface Params {
    /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
    votePeriod: bigint;
    /** VoteThreshold defines the percentage of bonded stake required to vote each period */
    voteThreshold: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/cork.v1.Params";
    value: Uint8Array;
}
/** Params cork parameters */
export interface ParamsAmino {
    /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
    vote_period: string;
    /** VoteThreshold defines the percentage of bonded stake required to vote each period */
    vote_threshold: string;
}
export interface ParamsAminoMsg {
    type: "/cork.v1.Params";
    value: ParamsAmino;
}
/** Params cork parameters */
export interface ParamsSDKType {
    vote_period: bigint;
    vote_threshold: string;
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
