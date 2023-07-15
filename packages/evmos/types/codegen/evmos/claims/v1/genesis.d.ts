import { ClaimsRecordAddress, ClaimsRecordAddressSDKType } from "./claims";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** claims_records is a list of claim records with the corresponding airdrop recipient */
    claimsRecords: ClaimsRecordAddress[];
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    claims_records: ClaimsRecordAddressSDKType[];
}
/** Params defines the claims module's parameters. */
export interface Params {
    /** enable_claims is the parameter to enable the claiming process */
    enableClaims: boolean;
    /** airdrop_start_time defines the timestamp of the airdrop start */
    airdropStartTime?: Timestamp;
    /** duration_until_decay of claimable tokens begin */
    durationUntilDecay?: Duration;
    /** duration_of_decay for token claim decay period */
    durationOfDecay?: Duration;
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
/** Params defines the claims module's parameters. */
export interface ParamsSDKType {
    enable_claims: boolean;
    airdrop_start_time?: TimestampSDKType;
    duration_until_decay?: DurationSDKType;
    duration_of_decay?: DurationSDKType;
    claims_denom: string;
    authorized_channels: string[];
    evm_channels: string[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
