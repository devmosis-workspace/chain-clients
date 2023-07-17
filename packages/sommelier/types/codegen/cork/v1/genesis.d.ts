import { CellarIDSet, CellarIDSetSDKType, ValidatorCork, ValidatorCorkSDKType, ScheduledCork, ScheduledCorkSDKType } from "./cork";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
    params?: Params;
    cellarIds?: CellarIDSet;
    invalidationNonce: Long;
    corks: ValidatorCork[];
    scheduledCorks: ScheduledCork[];
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    cellar_ids?: CellarIDSetSDKType;
    invalidation_nonce: Long;
    corks: ValidatorCorkSDKType[];
    scheduled_corks: ScheduledCorkSDKType[];
}
/** Params cork parameters */
export interface Params {
    /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
    votePeriod: Long;
    /** VoteThreshold defines the percentage of bonded stake required to vote each period */
    voteThreshold: string;
}
/** Params cork parameters */
export interface ParamsSDKType {
    vote_period: Long;
    vote_threshold: string;
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
