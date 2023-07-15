import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** Params defines the claim module's parameters. */
export interface Params {
    /** Params defines the claim module's parameters. */
    airdrops: Airdrop[];
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
    airdrops: AirdropSDKType[];
}
export interface Airdrop {
    airdropIdentifier: string;
    chainId: string;
    /** seconds */
    airdropStartTime?: Timestamp;
    /** seconds */
    airdropDuration?: Duration;
    /** denom of claimable asset */
    claimDenom: string;
    /** airdrop distribution account */
    distributorAddress: string;
    /** ustrd tokens claimed so far in the current period */
    claimedSoFar: string;
    /** indicates the airdrop should be claimed via autopilot */
    autopilotEnabled: boolean;
}
export interface AirdropSDKType {
    airdrop_identifier: string;
    chain_id: string;
    airdrop_start_time?: TimestampSDKType;
    airdrop_duration?: DurationSDKType;
    claim_denom: string;
    distributor_address: string;
    claimed_so_far: string;
    autopilot_enabled: boolean;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Airdrop: {
    encode(message: Airdrop, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Airdrop;
    fromPartial(object: Partial<Airdrop>): Airdrop;
};
