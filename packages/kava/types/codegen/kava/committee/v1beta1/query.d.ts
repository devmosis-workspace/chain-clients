import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { VoteType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequest {
}
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequestSDKType {
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponse {
    committees: Any[];
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponseSDKType {
    committees: AnySDKType[];
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequest {
    committeeId: Long;
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequestSDKType {
    committee_id: Long;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponse {
    committee?: Any;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponseSDKType {
    committee?: AnySDKType;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequest {
    committeeId: Long;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequestSDKType {
    committee_id: Long;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponse {
    proposals: QueryProposalResponse[];
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponseSDKType {
    proposals: QueryProposalResponseSDKType[];
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequest {
    proposalId: Long;
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequestSDKType {
    proposal_id: Long;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponse {
    pubProposal?: Any;
    id: Long;
    committeeId: Long;
    deadline?: Timestamp;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponseSDKType {
    pub_proposal?: AnySDKType;
    id: Long;
    committee_id: Long;
    deadline?: TimestampSDKType;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequest {
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequestSDKType {
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponse {
    nextProposalId: Long;
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponseSDKType {
    next_proposal_id: Long;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequest {
    proposalId: Long;
    pagination?: PageRequest;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequestSDKType {
    proposal_id: Long;
    pagination?: PageRequestSDKType;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponse {
    /** votes defined the queried votes. */
    votes: QueryVoteResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponseSDKType {
    votes: QueryVoteResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequest {
    proposalId: Long;
    voter: string;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequestSDKType {
    proposal_id: Long;
    voter: string;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponse {
    proposalId: Long;
    voter: string;
    voteType: VoteType;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponseSDKType {
    proposal_id: Long;
    voter: string;
    vote_type: VoteType;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequest {
    proposalId: Long;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequestSDKType {
    proposal_id: Long;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponse {
    proposalId: Long;
    yesVotes: string;
    noVotes: string;
    currentVotes: string;
    possibleVotes: string;
    voteThreshold: string;
    quorum: string;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponseSDKType {
    proposal_id: Long;
    yes_votes: string;
    no_votes: string;
    current_votes: string;
    possible_votes: string;
    vote_threshold: string;
    quorum: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequest {
    subspace: string;
    key: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequestSDKType {
    subspace: string;
    key: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponse {
    rawData: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponseSDKType {
    raw_data: string;
}
export declare const QueryCommitteesRequest: {
    encode(_: QueryCommitteesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCommitteesRequest;
    fromPartial(_: Partial<QueryCommitteesRequest>): QueryCommitteesRequest;
};
export declare const QueryCommitteesResponse: {
    encode(message: QueryCommitteesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCommitteesResponse;
    fromPartial(object: Partial<QueryCommitteesResponse>): QueryCommitteesResponse;
};
export declare const QueryCommitteeRequest: {
    encode(message: QueryCommitteeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCommitteeRequest;
    fromPartial(object: Partial<QueryCommitteeRequest>): QueryCommitteeRequest;
};
export declare const QueryCommitteeResponse: {
    encode(message: QueryCommitteeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCommitteeResponse;
    fromPartial(object: Partial<QueryCommitteeResponse>): QueryCommitteeResponse;
};
export declare const QueryProposalsRequest: {
    encode(message: QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProposalsRequest;
    fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProposalsResponse;
    fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProposalRequest;
    fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProposalResponse;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
};
export declare const QueryNextProposalIDRequest: {
    encode(_: QueryNextProposalIDRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryNextProposalIDRequest;
    fromPartial(_: Partial<QueryNextProposalIDRequest>): QueryNextProposalIDRequest;
};
export declare const QueryNextProposalIDResponse: {
    encode(message: QueryNextProposalIDResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryNextProposalIDResponse;
    fromPartial(object: Partial<QueryNextProposalIDResponse>): QueryNextProposalIDResponse;
};
export declare const QueryVotesRequest: {
    encode(message: QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVotesRequest;
    fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
    encode(message: QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVotesResponse;
    fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse;
};
export declare const QueryVoteRequest: {
    encode(message: QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVoteRequest;
    fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
    encode(message: QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVoteResponse;
    fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse;
};
export declare const QueryTallyRequest: {
    encode(message: QueryTallyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTallyRequest;
    fromPartial(object: Partial<QueryTallyRequest>): QueryTallyRequest;
};
export declare const QueryTallyResponse: {
    encode(message: QueryTallyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTallyResponse;
    fromPartial(object: Partial<QueryTallyResponse>): QueryTallyResponse;
};
export declare const QueryRawParamsRequest: {
    encode(message: QueryRawParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRawParamsRequest;
    fromPartial(object: Partial<QueryRawParamsRequest>): QueryRawParamsRequest;
};
export declare const QueryRawParamsResponse: {
    encode(message: QueryRawParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRawParamsResponse;
    fromPartial(object: Partial<QueryRawParamsResponse>): QueryRawParamsResponse;
};
