import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TalliedVote_IsVoterLateEntry {
    key: string;
    value: boolean;
}
export interface TalliedVote_IsVoterLateEntrySDKType {
    key: string;
    value: boolean;
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
    tally: Uint8Array;
    data?: Any;
    pollId: Long;
    isVoterLate: {
        [key: string]: boolean;
    };
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVoteSDKType {
    tally: Uint8Array;
    data?: AnySDKType;
    poll_id: Long;
    is_voter_late: {
        [key: string]: boolean;
    };
}
export declare const TalliedVote_IsVoterLateEntry: {
    encode(message: TalliedVote_IsVoterLateEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TalliedVote_IsVoterLateEntry;
    fromPartial(object: Partial<TalliedVote_IsVoterLateEntry>): TalliedVote_IsVoterLateEntry;
};
export declare const TalliedVote: {
    encode(message: TalliedVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TalliedVote;
    fromPartial(object: Partial<TalliedVote>): TalliedVote;
};
