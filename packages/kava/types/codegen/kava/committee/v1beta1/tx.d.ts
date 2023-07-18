import { Any, AnySDKType } from "../../../google/protobuf/any";
import { VoteType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposal {
    pubProposal?: Any;
    proposer: string;
    committeeId: Long;
}
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposalSDKType {
    pub_proposal?: AnySDKType;
    proposer: string;
    committee_id: Long;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponse {
    proposalId: Long;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: Long;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVote {
    proposalId: Long;
    voter: string;
    voteType: VoteType;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVoteSDKType {
    proposal_id: Long;
    voter: string;
    vote_type: VoteType;
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponse {
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponseSDKType {
}
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitProposal;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitProposalResponse;
    fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgVote;
    fromPartial(object: Partial<MsgVote>): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgVoteResponse;
    fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse;
};
