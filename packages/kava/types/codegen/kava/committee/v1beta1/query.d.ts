import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { VoteType } from "./genesis";
import { BaseCommittee, BaseCommitteeProtoMsg, BaseCommitteeSDKType, MemberCommittee, MemberCommitteeProtoMsg, MemberCommitteeSDKType, TokenCommittee, TokenCommitteeProtoMsg, TokenCommitteeSDKType } from "./committee";
import { CommitteeChangeProposal, CommitteeChangeProposalProtoMsg, CommitteeChangeProposalSDKType, CommitteeDeleteProposal, CommitteeDeleteProposalProtoMsg, CommitteeDeleteProposalSDKType } from "./proposal";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../../cosmos/params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequest {
}
export interface QueryCommitteesRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryCommitteesRequest";
    value: Uint8Array;
}
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequestAmino {
}
export interface QueryCommitteesRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryCommitteesRequest";
    value: QueryCommitteesRequestAmino;
}
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequestSDKType {
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponse {
    committees: (BaseCommittee & MemberCommittee & TokenCommittee & Any)[] | Any[];
}
export interface QueryCommitteesResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryCommitteesResponse";
    value: Uint8Array;
}
export type QueryCommitteesResponseEncoded = Omit<QueryCommitteesResponse, "committees"> & {
    committees: (BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg)[];
};
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponseAmino {
    committees?: AnyAmino[];
}
export interface QueryCommitteesResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryCommitteesResponse";
    value: QueryCommitteesResponseAmino;
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponseSDKType {
    committees: (BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType)[];
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequest {
    committeeId: bigint;
}
export interface QueryCommitteeRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryCommitteeRequest";
    value: Uint8Array;
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequestAmino {
    committee_id?: string;
}
export interface QueryCommitteeRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryCommitteeRequest";
    value: QueryCommitteeRequestAmino;
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequestSDKType {
    committee_id: bigint;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponse {
    committee?: (BaseCommittee & MemberCommittee & TokenCommittee & Any) | undefined;
}
export interface QueryCommitteeResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryCommitteeResponse";
    value: Uint8Array;
}
export type QueryCommitteeResponseEncoded = Omit<QueryCommitteeResponse, "committee"> & {
    committee?: BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg | undefined;
};
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponseAmino {
    committee?: AnyAmino;
}
export interface QueryCommitteeResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryCommitteeResponse";
    value: QueryCommitteeResponseAmino;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponseSDKType {
    committee?: BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType | undefined;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequest {
    committeeId: bigint;
}
export interface QueryProposalsRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryProposalsRequest";
    value: Uint8Array;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequestAmino {
    committee_id?: string;
}
export interface QueryProposalsRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryProposalsRequest";
    value: QueryProposalsRequestAmino;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequestSDKType {
    committee_id: bigint;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponse {
    proposals: QueryProposalResponse[];
}
export interface QueryProposalsResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryProposalsResponse";
    value: Uint8Array;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponseAmino {
    proposals?: QueryProposalResponseAmino[];
}
export interface QueryProposalsResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryProposalsResponse";
    value: QueryProposalsResponseAmino;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponseSDKType {
    proposals: QueryProposalResponseSDKType[];
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequest {
    proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryProposalRequest";
    value: Uint8Array;
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequestAmino {
    proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryProposalRequest";
    value: QueryProposalRequestAmino;
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequestSDKType {
    proposal_id: bigint;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponse {
    pubProposal?: (CommitteeChangeProposal & CommitteeDeleteProposal & CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & TextProposal & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & Any) | undefined;
    id: bigint;
    committeeId: bigint;
    deadline: Timestamp;
}
export interface QueryProposalResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryProposalResponse";
    value: Uint8Array;
}
export type QueryProposalResponseEncoded = Omit<QueryProposalResponse, "pubProposal"> & {
    pubProposal?: CommitteeChangeProposalProtoMsg | CommitteeDeleteProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponseAmino {
    pub_proposal?: AnyAmino;
    id?: string;
    committee_id?: string;
    deadline?: string;
}
export interface QueryProposalResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryProposalResponse";
    value: QueryProposalResponseAmino;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponseSDKType {
    pub_proposal?: CommitteeChangeProposalSDKType | CommitteeDeleteProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | TextProposalSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | AnySDKType | undefined;
    id: bigint;
    committee_id: bigint;
    deadline: TimestampSDKType;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequest {
}
export interface QueryNextProposalIDRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDRequest";
    value: Uint8Array;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequestAmino {
}
export interface QueryNextProposalIDRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryNextProposalIDRequest";
    value: QueryNextProposalIDRequestAmino;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequestSDKType {
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponse {
    nextProposalId: bigint;
}
export interface QueryNextProposalIDResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDResponse";
    value: Uint8Array;
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponseAmino {
    next_proposal_id?: string;
}
export interface QueryNextProposalIDResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryNextProposalIDResponse";
    value: QueryNextProposalIDResponseAmino;
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponseSDKType {
    next_proposal_id: bigint;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequest {
    proposalId: bigint;
    pagination?: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryVotesRequest";
    value: Uint8Array;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequestAmino {
    proposal_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryVotesRequest";
    value: QueryVotesRequestAmino;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponse {
    /** votes defined the queried votes. */
    votes: QueryVoteResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryVotesResponse";
    value: Uint8Array;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponseAmino {
    /** votes defined the queried votes. */
    votes?: QueryVoteResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryVotesResponse";
    value: QueryVotesResponseAmino;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponseSDKType {
    votes: QueryVoteResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequest {
    proposalId: bigint;
    voter: string;
}
export interface QueryVoteRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryVoteRequest";
    value: Uint8Array;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequestAmino {
    proposal_id?: string;
    voter?: string;
}
export interface QueryVoteRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryVoteRequest";
    value: QueryVoteRequestAmino;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequestSDKType {
    proposal_id: bigint;
    voter: string;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponse {
    proposalId: bigint;
    voter: string;
    voteType: VoteType;
}
export interface QueryVoteResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryVoteResponse";
    value: Uint8Array;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponseAmino {
    proposal_id?: string;
    voter?: string;
    vote_type?: VoteType;
}
export interface QueryVoteResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryVoteResponse";
    value: QueryVoteResponseAmino;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponseSDKType {
    proposal_id: bigint;
    voter: string;
    vote_type: VoteType;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequest {
    proposalId: bigint;
}
export interface QueryTallyRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryTallyRequest";
    value: Uint8Array;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequestAmino {
    proposal_id?: string;
}
export interface QueryTallyRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryTallyRequest";
    value: QueryTallyRequestAmino;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequestSDKType {
    proposal_id: bigint;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponse {
    proposalId: bigint;
    yesVotes: string;
    noVotes: string;
    currentVotes: string;
    possibleVotes: string;
    voteThreshold: string;
    quorum: string;
}
export interface QueryTallyResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryTallyResponse";
    value: Uint8Array;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponseAmino {
    proposal_id?: string;
    yes_votes?: string;
    no_votes?: string;
    current_votes?: string;
    possible_votes?: string;
    vote_threshold?: string;
    quorum?: string;
}
export interface QueryTallyResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryTallyResponse";
    value: QueryTallyResponseAmino;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponseSDKType {
    proposal_id: bigint;
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
export interface QueryRawParamsRequestProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryRawParamsRequest";
    value: Uint8Array;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequestAmino {
    subspace?: string;
    key?: string;
}
export interface QueryRawParamsRequestAminoMsg {
    type: "/kava.committee.v1beta1.QueryRawParamsRequest";
    value: QueryRawParamsRequestAmino;
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
export interface QueryRawParamsResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.QueryRawParamsResponse";
    value: Uint8Array;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponseAmino {
    raw_data?: string;
}
export interface QueryRawParamsResponseAminoMsg {
    type: "/kava.committee.v1beta1.QueryRawParamsResponse";
    value: QueryRawParamsResponseAmino;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponseSDKType {
    raw_data: string;
}
export declare const QueryCommitteesRequest: {
    typeUrl: string;
    encode(_: QueryCommitteesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCommitteesRequest;
    fromPartial(_: Partial<QueryCommitteesRequest>): QueryCommitteesRequest;
    fromAmino(_: QueryCommitteesRequestAmino): QueryCommitteesRequest;
    toAmino(_: QueryCommitteesRequest): QueryCommitteesRequestAmino;
    fromAminoMsg(object: QueryCommitteesRequestAminoMsg): QueryCommitteesRequest;
    fromProtoMsg(message: QueryCommitteesRequestProtoMsg): QueryCommitteesRequest;
    toProto(message: QueryCommitteesRequest): Uint8Array;
    toProtoMsg(message: QueryCommitteesRequest): QueryCommitteesRequestProtoMsg;
};
export declare const QueryCommitteesResponse: {
    typeUrl: string;
    encode(message: QueryCommitteesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCommitteesResponse;
    fromPartial(object: Partial<QueryCommitteesResponse>): QueryCommitteesResponse;
    fromAmino(object: QueryCommitteesResponseAmino): QueryCommitteesResponse;
    toAmino(message: QueryCommitteesResponse): QueryCommitteesResponseAmino;
    fromAminoMsg(object: QueryCommitteesResponseAminoMsg): QueryCommitteesResponse;
    fromProtoMsg(message: QueryCommitteesResponseProtoMsg): QueryCommitteesResponse;
    toProto(message: QueryCommitteesResponse): Uint8Array;
    toProtoMsg(message: QueryCommitteesResponse): QueryCommitteesResponseProtoMsg;
};
export declare const QueryCommitteeRequest: {
    typeUrl: string;
    encode(message: QueryCommitteeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCommitteeRequest;
    fromPartial(object: Partial<QueryCommitteeRequest>): QueryCommitteeRequest;
    fromAmino(object: QueryCommitteeRequestAmino): QueryCommitteeRequest;
    toAmino(message: QueryCommitteeRequest): QueryCommitteeRequestAmino;
    fromAminoMsg(object: QueryCommitteeRequestAminoMsg): QueryCommitteeRequest;
    fromProtoMsg(message: QueryCommitteeRequestProtoMsg): QueryCommitteeRequest;
    toProto(message: QueryCommitteeRequest): Uint8Array;
    toProtoMsg(message: QueryCommitteeRequest): QueryCommitteeRequestProtoMsg;
};
export declare const QueryCommitteeResponse: {
    typeUrl: string;
    encode(message: QueryCommitteeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCommitteeResponse;
    fromPartial(object: Partial<QueryCommitteeResponse>): QueryCommitteeResponse;
    fromAmino(object: QueryCommitteeResponseAmino): QueryCommitteeResponse;
    toAmino(message: QueryCommitteeResponse): QueryCommitteeResponseAmino;
    fromAminoMsg(object: QueryCommitteeResponseAminoMsg): QueryCommitteeResponse;
    fromProtoMsg(message: QueryCommitteeResponseProtoMsg): QueryCommitteeResponse;
    toProto(message: QueryCommitteeResponse): Uint8Array;
    toProtoMsg(message: QueryCommitteeResponse): QueryCommitteeResponseProtoMsg;
};
export declare const QueryProposalsRequest: {
    typeUrl: string;
    encode(message: QueryProposalsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProposalsRequest;
    fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest;
    fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest;
    toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino;
    fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest;
    fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest;
    toProto(message: QueryProposalsRequest): Uint8Array;
    toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg;
};
export declare const QueryProposalsResponse: {
    typeUrl: string;
    encode(message: QueryProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProposalsResponse;
    fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse;
    fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse;
    toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino;
    fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse;
    fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse;
    toProto(message: QueryProposalsResponse): Uint8Array;
    toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg;
};
export declare const QueryProposalRequest: {
    typeUrl: string;
    encode(message: QueryProposalRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProposalRequest;
    fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest;
    fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest;
    toAmino(message: QueryProposalRequest): QueryProposalRequestAmino;
    fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest;
    fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest;
    toProto(message: QueryProposalRequest): Uint8Array;
    toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg;
};
export declare const QueryProposalResponse: {
    typeUrl: string;
    encode(message: QueryProposalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProposalResponse;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
    fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse;
    toAmino(message: QueryProposalResponse): QueryProposalResponseAmino;
    fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse;
    fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse;
    toProto(message: QueryProposalResponse): Uint8Array;
    toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg;
};
export declare const QueryNextProposalIDRequest: {
    typeUrl: string;
    encode(_: QueryNextProposalIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryNextProposalIDRequest;
    fromPartial(_: Partial<QueryNextProposalIDRequest>): QueryNextProposalIDRequest;
    fromAmino(_: QueryNextProposalIDRequestAmino): QueryNextProposalIDRequest;
    toAmino(_: QueryNextProposalIDRequest): QueryNextProposalIDRequestAmino;
    fromAminoMsg(object: QueryNextProposalIDRequestAminoMsg): QueryNextProposalIDRequest;
    fromProtoMsg(message: QueryNextProposalIDRequestProtoMsg): QueryNextProposalIDRequest;
    toProto(message: QueryNextProposalIDRequest): Uint8Array;
    toProtoMsg(message: QueryNextProposalIDRequest): QueryNextProposalIDRequestProtoMsg;
};
export declare const QueryNextProposalIDResponse: {
    typeUrl: string;
    encode(message: QueryNextProposalIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNextProposalIDResponse;
    fromPartial(object: Partial<QueryNextProposalIDResponse>): QueryNextProposalIDResponse;
    fromAmino(object: QueryNextProposalIDResponseAmino): QueryNextProposalIDResponse;
    toAmino(message: QueryNextProposalIDResponse): QueryNextProposalIDResponseAmino;
    fromAminoMsg(object: QueryNextProposalIDResponseAminoMsg): QueryNextProposalIDResponse;
    fromProtoMsg(message: QueryNextProposalIDResponseProtoMsg): QueryNextProposalIDResponse;
    toProto(message: QueryNextProposalIDResponse): Uint8Array;
    toProtoMsg(message: QueryNextProposalIDResponse): QueryNextProposalIDResponseProtoMsg;
};
export declare const QueryVotesRequest: {
    typeUrl: string;
    encode(message: QueryVotesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVotesRequest;
    fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest;
    fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest;
    toAmino(message: QueryVotesRequest): QueryVotesRequestAmino;
    fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest;
    fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest;
    toProto(message: QueryVotesRequest): Uint8Array;
    toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg;
};
export declare const QueryVotesResponse: {
    typeUrl: string;
    encode(message: QueryVotesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVotesResponse;
    fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse;
    fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse;
    toAmino(message: QueryVotesResponse): QueryVotesResponseAmino;
    fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse;
    fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse;
    toProto(message: QueryVotesResponse): Uint8Array;
    toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg;
};
export declare const QueryVoteRequest: {
    typeUrl: string;
    encode(message: QueryVoteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVoteRequest;
    fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest;
    fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest;
    toAmino(message: QueryVoteRequest): QueryVoteRequestAmino;
    fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest;
    fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest;
    toProto(message: QueryVoteRequest): Uint8Array;
    toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg;
};
export declare const QueryVoteResponse: {
    typeUrl: string;
    encode(message: QueryVoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVoteResponse;
    fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse;
    fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse;
    toAmino(message: QueryVoteResponse): QueryVoteResponseAmino;
    fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse;
    fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse;
    toProto(message: QueryVoteResponse): Uint8Array;
    toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg;
};
export declare const QueryTallyRequest: {
    typeUrl: string;
    encode(message: QueryTallyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTallyRequest;
    fromPartial(object: Partial<QueryTallyRequest>): QueryTallyRequest;
    fromAmino(object: QueryTallyRequestAmino): QueryTallyRequest;
    toAmino(message: QueryTallyRequest): QueryTallyRequestAmino;
    fromAminoMsg(object: QueryTallyRequestAminoMsg): QueryTallyRequest;
    fromProtoMsg(message: QueryTallyRequestProtoMsg): QueryTallyRequest;
    toProto(message: QueryTallyRequest): Uint8Array;
    toProtoMsg(message: QueryTallyRequest): QueryTallyRequestProtoMsg;
};
export declare const QueryTallyResponse: {
    typeUrl: string;
    encode(message: QueryTallyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTallyResponse;
    fromPartial(object: Partial<QueryTallyResponse>): QueryTallyResponse;
    fromAmino(object: QueryTallyResponseAmino): QueryTallyResponse;
    toAmino(message: QueryTallyResponse): QueryTallyResponseAmino;
    fromAminoMsg(object: QueryTallyResponseAminoMsg): QueryTallyResponse;
    fromProtoMsg(message: QueryTallyResponseProtoMsg): QueryTallyResponse;
    toProto(message: QueryTallyResponse): Uint8Array;
    toProtoMsg(message: QueryTallyResponse): QueryTallyResponseProtoMsg;
};
export declare const QueryRawParamsRequest: {
    typeUrl: string;
    encode(message: QueryRawParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRawParamsRequest;
    fromPartial(object: Partial<QueryRawParamsRequest>): QueryRawParamsRequest;
    fromAmino(object: QueryRawParamsRequestAmino): QueryRawParamsRequest;
    toAmino(message: QueryRawParamsRequest): QueryRawParamsRequestAmino;
    fromAminoMsg(object: QueryRawParamsRequestAminoMsg): QueryRawParamsRequest;
    fromProtoMsg(message: QueryRawParamsRequestProtoMsg): QueryRawParamsRequest;
    toProto(message: QueryRawParamsRequest): Uint8Array;
    toProtoMsg(message: QueryRawParamsRequest): QueryRawParamsRequestProtoMsg;
};
export declare const QueryRawParamsResponse: {
    typeUrl: string;
    encode(message: QueryRawParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRawParamsResponse;
    fromPartial(object: Partial<QueryRawParamsResponse>): QueryRawParamsResponse;
    fromAmino(object: QueryRawParamsResponseAmino): QueryRawParamsResponse;
    toAmino(message: QueryRawParamsResponse): QueryRawParamsResponseAmino;
    fromAminoMsg(object: QueryRawParamsResponseAminoMsg): QueryRawParamsResponse;
    fromProtoMsg(message: QueryRawParamsResponseProtoMsg): QueryRawParamsResponse;
    toProto(message: QueryRawParamsResponse): Uint8Array;
    toProtoMsg(message: QueryRawParamsResponse): QueryRawParamsResponseProtoMsg;
};
export declare const Committee_InterfaceDecoder: (input: BinaryReader | Uint8Array) => BaseCommittee | MemberCommittee | TokenCommittee | Any;
export declare const Committee_FromAmino: (content: AnyAmino) => Any;
export declare const Committee_ToAmino: (content: Any) => AnyAmino;
export declare const Cosmos_govv1beta1Content_InterfaceDecoder: (input: BinaryReader | Uint8Array) => CommitteeChangeProposal | CommitteeDeleteProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | Any;
export declare const Cosmos_govv1beta1Content_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_govv1beta1Content_ToAmino: (content: Any) => AnyAmino;
