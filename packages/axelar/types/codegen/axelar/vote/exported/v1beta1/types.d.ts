import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Threshold, ThresholdSDKType } from "../../../utils/v1beta1/threshold";
import { Snapshot, SnapshotSDKType } from "../../../snapshot/exported/v1beta1/types";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum PollState {
    POLL_STATE_UNSPECIFIED = 0,
    POLL_STATE_PENDING = 1,
    POLL_STATE_COMPLETED = 2,
    POLL_STATE_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const PollStateSDKType: typeof PollState;
export declare function pollStateFromJSON(object: any): PollState;
export declare function pollStateToJSON(object: PollState): string;
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
    expiresAt: Long;
    result?: Any;
    votingThreshold?: Threshold;
    state: PollState;
    minVoterCount: Long;
    rewardPoolName: string;
    gracePeriod: Long;
    completedAt: Long;
    id: Long;
    snapshot?: Snapshot;
    module: string;
    moduleMetadata?: Any;
}
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadataSDKType {
    expires_at: Long;
    result?: AnySDKType;
    voting_threshold?: ThresholdSDKType;
    state: PollState;
    min_voter_count: Long;
    reward_pool_name: string;
    grace_period: Long;
    completed_at: Long;
    id: Long;
    snapshot?: SnapshotSDKType;
    module: string;
    module_metadata?: AnySDKType;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKey {
    module: string;
    id: string;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKeySDKType {
    module: string;
    id: string;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipants {
    pollId: Long;
    participants: Uint8Array[];
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipantsSDKType {
    poll_id: Long;
    participants: Uint8Array[];
}
export declare const PollMetadata: {
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PollMetadata;
    fromPartial(object: Partial<PollMetadata>): PollMetadata;
};
export declare const PollKey: {
    encode(message: PollKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PollKey;
    fromPartial(object: Partial<PollKey>): PollKey;
};
export declare const PollParticipants: {
    encode(message: PollParticipants, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PollParticipants;
    fromPartial(object: Partial<PollParticipants>): PollParticipants;
};
