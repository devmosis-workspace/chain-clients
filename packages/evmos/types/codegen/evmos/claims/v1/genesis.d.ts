import { ClaimsRecordAddress, ClaimsRecordAddressAmino, ClaimsRecordAddressSDKType } from "./claims";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** claims_records is a list of claim records with the corresponding airdrop recipient */
    claimsRecords: ClaimsRecordAddress[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/evmos.claims.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** claims_records is a list of claim records with the corresponding airdrop recipient */
    claims_records: ClaimsRecordAddressAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/evmos.claims.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    claims_records: ClaimsRecordAddressSDKType[];
}
/** Params defines the claims module's parameters. */
export interface Params {
    /** enable_claims is the parameter to enable the claiming process */
    enableClaims: boolean;
    /** airdrop_start_time defines the timestamp of the airdrop start */
    airdropStartTime: Timestamp;
    /** duration_until_decay of claimable tokens begin */
    durationUntilDecay: Duration;
    /** duration_of_decay for token claim decay period */
    durationOfDecay: Duration;
    /** claims_denom is the denomination of the claimable coin */
    claimsDenom: string;
    /**
     * authorized_channels is the list of authorized channel identifiers that can perform address
     * attestations via IBC.
     */
    authorizedChannels: string[];
    /** evm_channels is the list of channel identifiers from EVM compatible chains */
    evmChannels: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/evmos.claims.v1.Params";
    value: Uint8Array;
}
/** Params defines the claims module's parameters. */
export interface ParamsAmino {
    /** enable_claims is the parameter to enable the claiming process */
    enable_claims: boolean;
    /** airdrop_start_time defines the timestamp of the airdrop start */
    airdrop_start_time?: TimestampAmino;
    /** duration_until_decay of claimable tokens begin */
    duration_until_decay?: DurationAmino;
    /** duration_of_decay for token claim decay period */
    duration_of_decay?: DurationAmino;
    /** claims_denom is the denomination of the claimable coin */
    claims_denom: string;
    /**
     * authorized_channels is the list of authorized channel identifiers that can perform address
     * attestations via IBC.
     */
    authorized_channels: string[];
    /** evm_channels is the list of channel identifiers from EVM compatible chains */
    evm_channels: string[];
}
export interface ParamsAminoMsg {
    type: "/evmos.claims.v1.Params";
    value: ParamsAmino;
}
/** Params defines the claims module's parameters. */
export interface ParamsSDKType {
    enable_claims: boolean;
    airdrop_start_time: TimestampSDKType;
    duration_until_decay: DurationSDKType;
    duration_of_decay: DurationSDKType;
    claims_denom: string;
    authorized_channels: string[];
    evm_channels: string[];
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
