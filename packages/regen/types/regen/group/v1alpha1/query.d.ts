import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupAccountInfo, GroupAccountInfoAmino, GroupAccountInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
}
export interface QueryGroupInfoRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest";
    value: Uint8Array;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
}
export interface QueryGroupInfoRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupInfoRequest";
    value: QueryGroupInfoRequestAmino;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestSDKType {
    group_id: bigint;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
    /** info is the GroupInfo for the group. */
    info?: GroupInfo;
}
export interface QueryGroupInfoResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse";
    value: Uint8Array;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseAmino {
    /** info is the GroupInfo for the group. */
    info?: GroupInfoAmino;
}
export interface QueryGroupInfoResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupInfoResponse";
    value: QueryGroupInfoResponseAmino;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseSDKType {
    info?: GroupInfoSDKType;
}
/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequest {
    /** address is the account address of the group account. */
    address: string;
}
export interface QueryGroupAccountInfoRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest";
    value: Uint8Array;
}
/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequestAmino {
    /** address is the account address of the group account. */
    address?: string;
}
export interface QueryGroupAccountInfoRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest";
    value: QueryGroupAccountInfoRequestAmino;
}
/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequestSDKType {
    address: string;
}
/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponse {
    /** info is the GroupAccountInfo for the group account. */
    info?: GroupAccountInfo;
}
export interface QueryGroupAccountInfoResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse";
    value: Uint8Array;
}
/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponseAmino {
    /** info is the GroupAccountInfo for the group account. */
    info?: GroupAccountInfoAmino;
}
export interface QueryGroupAccountInfoResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse";
    value: QueryGroupAccountInfoResponseAmino;
}
/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponseSDKType {
    info?: GroupAccountInfoSDKType;
}
/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequest {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupMembersRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest";
    value: Uint8Array;
}
/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequestAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupMembersRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupMembersRequest";
    value: QueryGroupMembersRequestAmino;
}
/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequestSDKType {
    group_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
    /** members are the members of the group with given group_id. */
    members: GroupMember[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupMembersResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse";
    value: Uint8Array;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseAmino {
    /** members are the members of the group with given group_id. */
    members?: GroupMemberAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupMembersResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupMembersResponse";
    value: QueryGroupMembersResponseAmino;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseSDKType {
    members: GroupMemberSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequest {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupsByAdminRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest";
    value: Uint8Array;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequestAmino {
    /** admin is the account address of a group's admin. */
    admin?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupsByAdminRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupsByAdminRequest";
    value: QueryGroupsByAdminRequestAmino;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupsByAdminResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse";
    value: Uint8Array;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseAmino {
    /** groups are the groups info with the provided admin. */
    groups?: GroupInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupsByAdminResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupsByAdminResponse";
    value: QueryGroupsByAdminResponseAmino;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseSDKType {
    groups: GroupInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request
 * type.
 */
export interface QueryGroupAccountsByGroupRequest {
    /** group_id is the unique ID of the group account's group. */
    groupId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupAccountsByGroupRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest";
    value: Uint8Array;
}
/**
 * QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request
 * type.
 */
export interface QueryGroupAccountsByGroupRequestAmino {
    /** group_id is the unique ID of the group account's group. */
    group_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupAccountsByGroupRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest";
    value: QueryGroupAccountsByGroupRequestAmino;
}
/**
 * QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request
 * type.
 */
export interface QueryGroupAccountsByGroupRequestSDKType {
    group_id: bigint;
    pagination?: PageRequestSDKType;
}
/**
 * QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response
 * type.
 */
export interface QueryGroupAccountsByGroupResponse {
    /**
     * group_accounts are the group accounts info associated with the provided
     * group.
     */
    groupAccounts: GroupAccountInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupAccountsByGroupResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse";
    value: Uint8Array;
}
/**
 * QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response
 * type.
 */
export interface QueryGroupAccountsByGroupResponseAmino {
    /**
     * group_accounts are the group accounts info associated with the provided
     * group.
     */
    group_accounts?: GroupAccountInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupAccountsByGroupResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse";
    value: QueryGroupAccountsByGroupResponseAmino;
}
/**
 * QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response
 * type.
 */
export interface QueryGroupAccountsByGroupResponseSDKType {
    group_accounts: GroupAccountInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request
 * type.
 */
export interface QueryGroupAccountsByAdminRequest {
    /** admin is the admin address of the group account. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupAccountsByAdminRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest";
    value: Uint8Array;
}
/**
 * QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request
 * type.
 */
export interface QueryGroupAccountsByAdminRequestAmino {
    /** admin is the admin address of the group account. */
    admin?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupAccountsByAdminRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest";
    value: QueryGroupAccountsByAdminRequestAmino;
}
/**
 * QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request
 * type.
 */
export interface QueryGroupAccountsByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response
 * type.
 */
export interface QueryGroupAccountsByAdminResponse {
    /** group_accounts are the group accounts info with provided admin. */
    groupAccounts: GroupAccountInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupAccountsByAdminResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse";
    value: Uint8Array;
}
/**
 * QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response
 * type.
 */
export interface QueryGroupAccountsByAdminResponseAmino {
    /** group_accounts are the group accounts info with provided admin. */
    group_accounts?: GroupAccountInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupAccountsByAdminResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse";
    value: QueryGroupAccountsByAdminResponseAmino;
}
/**
 * QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response
 * type.
 */
export interface QueryGroupAccountsByAdminResponseSDKType {
    group_accounts: GroupAccountInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryProposalRequest";
    value: Uint8Array;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryProposalRequest";
    value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestSDKType {
    proposal_id: bigint;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
    /** proposal is the proposal info. */
    proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryProposalResponse";
    value: Uint8Array;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseAmino {
    /** proposal is the proposal info. */
    proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryProposalResponse";
    value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseSDKType {
    proposal?: ProposalSDKType;
}
/**
 * QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount
 * request type.
 */
export interface QueryProposalsByGroupAccountRequest {
    /** address is the group account address related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProposalsByGroupAccountRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest";
    value: Uint8Array;
}
/**
 * QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount
 * request type.
 */
export interface QueryProposalsByGroupAccountRequestAmino {
    /** address is the group account address related to proposals. */
    address?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProposalsByGroupAccountRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest";
    value: QueryProposalsByGroupAccountRequestAmino;
}
/**
 * QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount
 * request type.
 */
export interface QueryProposalsByGroupAccountRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount
 * response type.
 */
export interface QueryProposalsByGroupAccountResponse {
    /** proposals are the proposals with given group account. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProposalsByGroupAccountResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse";
    value: Uint8Array;
}
/**
 * QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount
 * response type.
 */
export interface QueryProposalsByGroupAccountResponseAmino {
    /** proposals are the proposals with given group account. */
    proposals?: ProposalAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProposalsByGroupAccountResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse";
    value: QueryProposalsByGroupAccountResponseAmino;
}
/**
 * QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount
 * response type.
 */
export interface QueryProposalsByGroupAccountResponseSDKType {
    proposals: ProposalSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request
 * type.
 */
export interface QueryVoteByProposalVoterRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: bigint;
    /** voter is a proposal voter account address. */
    voter: string;
}
export interface QueryVoteByProposalVoterRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest";
    value: Uint8Array;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request
 * type.
 */
export interface QueryVoteByProposalVoterRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id?: string;
    /** voter is a proposal voter account address. */
    voter?: string;
}
export interface QueryVoteByProposalVoterRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest";
    value: QueryVoteByProposalVoterRequestAmino;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request
 * type.
 */
export interface QueryVoteByProposalVoterRequestSDKType {
    proposal_id: bigint;
    voter: string;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response
 * type.
 */
export interface QueryVoteByProposalVoterResponse {
    /** vote is the vote with given proposal_id and voter. */
    vote?: Vote;
}
export interface QueryVoteByProposalVoterResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse";
    value: Uint8Array;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response
 * type.
 */
export interface QueryVoteByProposalVoterResponseAmino {
    /** vote is the vote with given proposal_id and voter. */
    vote?: VoteAmino;
}
export interface QueryVoteByProposalVoterResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse";
    value: QueryVoteByProposalVoterResponseAmino;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response
 * type.
 */
export interface QueryVoteByProposalVoterResponseSDKType {
    vote?: VoteSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryVotesByProposalRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest";
    value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryVotesByProposalRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryVotesByProposalRequest";
    value: QueryVotesByProposalRequestAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
    /** votes are the list of votes for given proposal_id. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryVotesByProposalResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse";
    value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseAmino {
    /** votes are the list of votes for given proposal_id. */
    votes?: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryVotesByProposalResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryVotesByProposalResponse";
    value: QueryVotesByProposalResponseAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryVotesByVoterRequestProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest";
    value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestAmino {
    /** voter is a proposal voter account address. */
    voter?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryVotesByVoterRequestAminoMsg {
    type: "/regen.group.v1alpha1.QueryVotesByVoterRequest";
    value: QueryVotesByVoterRequestAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestSDKType {
    voter: string;
    pagination?: PageRequestSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
    /** votes are the list of votes by given voter. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryVotesByVoterResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse";
    value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseAmino {
    /** votes are the list of votes by given voter. */
    votes?: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryVotesByVoterResponseAminoMsg {
    type: "/regen.group.v1alpha1.QueryVotesByVoterResponse";
    value: QueryVotesByVoterResponseAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryGroupInfoRequest: {
    typeUrl: string;
    encode(message: QueryGroupInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupInfoRequest;
    fromPartial(object: Partial<QueryGroupInfoRequest>): QueryGroupInfoRequest;
    fromAmino(object: QueryGroupInfoRequestAmino): QueryGroupInfoRequest;
    toAmino(message: QueryGroupInfoRequest): QueryGroupInfoRequestAmino;
    fromAminoMsg(object: QueryGroupInfoRequestAminoMsg): QueryGroupInfoRequest;
    fromProtoMsg(message: QueryGroupInfoRequestProtoMsg): QueryGroupInfoRequest;
    toProto(message: QueryGroupInfoRequest): Uint8Array;
    toProtoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestProtoMsg;
};
export declare const QueryGroupInfoResponse: {
    typeUrl: string;
    encode(message: QueryGroupInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupInfoResponse;
    fromPartial(object: Partial<QueryGroupInfoResponse>): QueryGroupInfoResponse;
    fromAmino(object: QueryGroupInfoResponseAmino): QueryGroupInfoResponse;
    toAmino(message: QueryGroupInfoResponse): QueryGroupInfoResponseAmino;
    fromAminoMsg(object: QueryGroupInfoResponseAminoMsg): QueryGroupInfoResponse;
    fromProtoMsg(message: QueryGroupInfoResponseProtoMsg): QueryGroupInfoResponse;
    toProto(message: QueryGroupInfoResponse): Uint8Array;
    toProtoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseProtoMsg;
};
export declare const QueryGroupAccountInfoRequest: {
    typeUrl: string;
    encode(message: QueryGroupAccountInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupAccountInfoRequest;
    fromPartial(object: Partial<QueryGroupAccountInfoRequest>): QueryGroupAccountInfoRequest;
    fromAmino(object: QueryGroupAccountInfoRequestAmino): QueryGroupAccountInfoRequest;
    toAmino(message: QueryGroupAccountInfoRequest): QueryGroupAccountInfoRequestAmino;
    fromAminoMsg(object: QueryGroupAccountInfoRequestAminoMsg): QueryGroupAccountInfoRequest;
    fromProtoMsg(message: QueryGroupAccountInfoRequestProtoMsg): QueryGroupAccountInfoRequest;
    toProto(message: QueryGroupAccountInfoRequest): Uint8Array;
    toProtoMsg(message: QueryGroupAccountInfoRequest): QueryGroupAccountInfoRequestProtoMsg;
};
export declare const QueryGroupAccountInfoResponse: {
    typeUrl: string;
    encode(message: QueryGroupAccountInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupAccountInfoResponse;
    fromPartial(object: Partial<QueryGroupAccountInfoResponse>): QueryGroupAccountInfoResponse;
    fromAmino(object: QueryGroupAccountInfoResponseAmino): QueryGroupAccountInfoResponse;
    toAmino(message: QueryGroupAccountInfoResponse): QueryGroupAccountInfoResponseAmino;
    fromAminoMsg(object: QueryGroupAccountInfoResponseAminoMsg): QueryGroupAccountInfoResponse;
    fromProtoMsg(message: QueryGroupAccountInfoResponseProtoMsg): QueryGroupAccountInfoResponse;
    toProto(message: QueryGroupAccountInfoResponse): Uint8Array;
    toProtoMsg(message: QueryGroupAccountInfoResponse): QueryGroupAccountInfoResponseProtoMsg;
};
export declare const QueryGroupMembersRequest: {
    typeUrl: string;
    encode(message: QueryGroupMembersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupMembersRequest;
    fromPartial(object: Partial<QueryGroupMembersRequest>): QueryGroupMembersRequest;
    fromAmino(object: QueryGroupMembersRequestAmino): QueryGroupMembersRequest;
    toAmino(message: QueryGroupMembersRequest): QueryGroupMembersRequestAmino;
    fromAminoMsg(object: QueryGroupMembersRequestAminoMsg): QueryGroupMembersRequest;
    fromProtoMsg(message: QueryGroupMembersRequestProtoMsg): QueryGroupMembersRequest;
    toProto(message: QueryGroupMembersRequest): Uint8Array;
    toProtoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestProtoMsg;
};
export declare const QueryGroupMembersResponse: {
    typeUrl: string;
    encode(message: QueryGroupMembersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupMembersResponse;
    fromPartial(object: Partial<QueryGroupMembersResponse>): QueryGroupMembersResponse;
    fromAmino(object: QueryGroupMembersResponseAmino): QueryGroupMembersResponse;
    toAmino(message: QueryGroupMembersResponse): QueryGroupMembersResponseAmino;
    fromAminoMsg(object: QueryGroupMembersResponseAminoMsg): QueryGroupMembersResponse;
    fromProtoMsg(message: QueryGroupMembersResponseProtoMsg): QueryGroupMembersResponse;
    toProto(message: QueryGroupMembersResponse): Uint8Array;
    toProtoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseProtoMsg;
};
export declare const QueryGroupsByAdminRequest: {
    typeUrl: string;
    encode(message: QueryGroupsByAdminRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupsByAdminRequest;
    fromPartial(object: Partial<QueryGroupsByAdminRequest>): QueryGroupsByAdminRequest;
    fromAmino(object: QueryGroupsByAdminRequestAmino): QueryGroupsByAdminRequest;
    toAmino(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAmino;
    fromAminoMsg(object: QueryGroupsByAdminRequestAminoMsg): QueryGroupsByAdminRequest;
    fromProtoMsg(message: QueryGroupsByAdminRequestProtoMsg): QueryGroupsByAdminRequest;
    toProto(message: QueryGroupsByAdminRequest): Uint8Array;
    toProtoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestProtoMsg;
};
export declare const QueryGroupsByAdminResponse: {
    typeUrl: string;
    encode(message: QueryGroupsByAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupsByAdminResponse;
    fromPartial(object: Partial<QueryGroupsByAdminResponse>): QueryGroupsByAdminResponse;
    fromAmino(object: QueryGroupsByAdminResponseAmino): QueryGroupsByAdminResponse;
    toAmino(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAmino;
    fromAminoMsg(object: QueryGroupsByAdminResponseAminoMsg): QueryGroupsByAdminResponse;
    fromProtoMsg(message: QueryGroupsByAdminResponseProtoMsg): QueryGroupsByAdminResponse;
    toProto(message: QueryGroupsByAdminResponse): Uint8Array;
    toProtoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseProtoMsg;
};
export declare const QueryGroupAccountsByGroupRequest: {
    typeUrl: string;
    encode(message: QueryGroupAccountsByGroupRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupAccountsByGroupRequest;
    fromPartial(object: Partial<QueryGroupAccountsByGroupRequest>): QueryGroupAccountsByGroupRequest;
    fromAmino(object: QueryGroupAccountsByGroupRequestAmino): QueryGroupAccountsByGroupRequest;
    toAmino(message: QueryGroupAccountsByGroupRequest): QueryGroupAccountsByGroupRequestAmino;
    fromAminoMsg(object: QueryGroupAccountsByGroupRequestAminoMsg): QueryGroupAccountsByGroupRequest;
    fromProtoMsg(message: QueryGroupAccountsByGroupRequestProtoMsg): QueryGroupAccountsByGroupRequest;
    toProto(message: QueryGroupAccountsByGroupRequest): Uint8Array;
    toProtoMsg(message: QueryGroupAccountsByGroupRequest): QueryGroupAccountsByGroupRequestProtoMsg;
};
export declare const QueryGroupAccountsByGroupResponse: {
    typeUrl: string;
    encode(message: QueryGroupAccountsByGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupAccountsByGroupResponse;
    fromPartial(object: Partial<QueryGroupAccountsByGroupResponse>): QueryGroupAccountsByGroupResponse;
    fromAmino(object: QueryGroupAccountsByGroupResponseAmino): QueryGroupAccountsByGroupResponse;
    toAmino(message: QueryGroupAccountsByGroupResponse): QueryGroupAccountsByGroupResponseAmino;
    fromAminoMsg(object: QueryGroupAccountsByGroupResponseAminoMsg): QueryGroupAccountsByGroupResponse;
    fromProtoMsg(message: QueryGroupAccountsByGroupResponseProtoMsg): QueryGroupAccountsByGroupResponse;
    toProto(message: QueryGroupAccountsByGroupResponse): Uint8Array;
    toProtoMsg(message: QueryGroupAccountsByGroupResponse): QueryGroupAccountsByGroupResponseProtoMsg;
};
export declare const QueryGroupAccountsByAdminRequest: {
    typeUrl: string;
    encode(message: QueryGroupAccountsByAdminRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupAccountsByAdminRequest;
    fromPartial(object: Partial<QueryGroupAccountsByAdminRequest>): QueryGroupAccountsByAdminRequest;
    fromAmino(object: QueryGroupAccountsByAdminRequestAmino): QueryGroupAccountsByAdminRequest;
    toAmino(message: QueryGroupAccountsByAdminRequest): QueryGroupAccountsByAdminRequestAmino;
    fromAminoMsg(object: QueryGroupAccountsByAdminRequestAminoMsg): QueryGroupAccountsByAdminRequest;
    fromProtoMsg(message: QueryGroupAccountsByAdminRequestProtoMsg): QueryGroupAccountsByAdminRequest;
    toProto(message: QueryGroupAccountsByAdminRequest): Uint8Array;
    toProtoMsg(message: QueryGroupAccountsByAdminRequest): QueryGroupAccountsByAdminRequestProtoMsg;
};
export declare const QueryGroupAccountsByAdminResponse: {
    typeUrl: string;
    encode(message: QueryGroupAccountsByAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupAccountsByAdminResponse;
    fromPartial(object: Partial<QueryGroupAccountsByAdminResponse>): QueryGroupAccountsByAdminResponse;
    fromAmino(object: QueryGroupAccountsByAdminResponseAmino): QueryGroupAccountsByAdminResponse;
    toAmino(message: QueryGroupAccountsByAdminResponse): QueryGroupAccountsByAdminResponseAmino;
    fromAminoMsg(object: QueryGroupAccountsByAdminResponseAminoMsg): QueryGroupAccountsByAdminResponse;
    fromProtoMsg(message: QueryGroupAccountsByAdminResponseProtoMsg): QueryGroupAccountsByAdminResponse;
    toProto(message: QueryGroupAccountsByAdminResponse): Uint8Array;
    toProtoMsg(message: QueryGroupAccountsByAdminResponse): QueryGroupAccountsByAdminResponseProtoMsg;
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
export declare const QueryProposalsByGroupAccountRequest: {
    typeUrl: string;
    encode(message: QueryProposalsByGroupAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProposalsByGroupAccountRequest;
    fromPartial(object: Partial<QueryProposalsByGroupAccountRequest>): QueryProposalsByGroupAccountRequest;
    fromAmino(object: QueryProposalsByGroupAccountRequestAmino): QueryProposalsByGroupAccountRequest;
    toAmino(message: QueryProposalsByGroupAccountRequest): QueryProposalsByGroupAccountRequestAmino;
    fromAminoMsg(object: QueryProposalsByGroupAccountRequestAminoMsg): QueryProposalsByGroupAccountRequest;
    fromProtoMsg(message: QueryProposalsByGroupAccountRequestProtoMsg): QueryProposalsByGroupAccountRequest;
    toProto(message: QueryProposalsByGroupAccountRequest): Uint8Array;
    toProtoMsg(message: QueryProposalsByGroupAccountRequest): QueryProposalsByGroupAccountRequestProtoMsg;
};
export declare const QueryProposalsByGroupAccountResponse: {
    typeUrl: string;
    encode(message: QueryProposalsByGroupAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProposalsByGroupAccountResponse;
    fromPartial(object: Partial<QueryProposalsByGroupAccountResponse>): QueryProposalsByGroupAccountResponse;
    fromAmino(object: QueryProposalsByGroupAccountResponseAmino): QueryProposalsByGroupAccountResponse;
    toAmino(message: QueryProposalsByGroupAccountResponse): QueryProposalsByGroupAccountResponseAmino;
    fromAminoMsg(object: QueryProposalsByGroupAccountResponseAminoMsg): QueryProposalsByGroupAccountResponse;
    fromProtoMsg(message: QueryProposalsByGroupAccountResponseProtoMsg): QueryProposalsByGroupAccountResponse;
    toProto(message: QueryProposalsByGroupAccountResponse): Uint8Array;
    toProtoMsg(message: QueryProposalsByGroupAccountResponse): QueryProposalsByGroupAccountResponseProtoMsg;
};
export declare const QueryVoteByProposalVoterRequest: {
    typeUrl: string;
    encode(message: QueryVoteByProposalVoterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVoteByProposalVoterRequest;
    fromPartial(object: Partial<QueryVoteByProposalVoterRequest>): QueryVoteByProposalVoterRequest;
    fromAmino(object: QueryVoteByProposalVoterRequestAmino): QueryVoteByProposalVoterRequest;
    toAmino(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAmino;
    fromAminoMsg(object: QueryVoteByProposalVoterRequestAminoMsg): QueryVoteByProposalVoterRequest;
    fromProtoMsg(message: QueryVoteByProposalVoterRequestProtoMsg): QueryVoteByProposalVoterRequest;
    toProto(message: QueryVoteByProposalVoterRequest): Uint8Array;
    toProtoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestProtoMsg;
};
export declare const QueryVoteByProposalVoterResponse: {
    typeUrl: string;
    encode(message: QueryVoteByProposalVoterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVoteByProposalVoterResponse;
    fromPartial(object: Partial<QueryVoteByProposalVoterResponse>): QueryVoteByProposalVoterResponse;
    fromAmino(object: QueryVoteByProposalVoterResponseAmino): QueryVoteByProposalVoterResponse;
    toAmino(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAmino;
    fromAminoMsg(object: QueryVoteByProposalVoterResponseAminoMsg): QueryVoteByProposalVoterResponse;
    fromProtoMsg(message: QueryVoteByProposalVoterResponseProtoMsg): QueryVoteByProposalVoterResponse;
    toProto(message: QueryVoteByProposalVoterResponse): Uint8Array;
    toProtoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseProtoMsg;
};
export declare const QueryVotesByProposalRequest: {
    typeUrl: string;
    encode(message: QueryVotesByProposalRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVotesByProposalRequest;
    fromPartial(object: Partial<QueryVotesByProposalRequest>): QueryVotesByProposalRequest;
    fromAmino(object: QueryVotesByProposalRequestAmino): QueryVotesByProposalRequest;
    toAmino(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAmino;
    fromAminoMsg(object: QueryVotesByProposalRequestAminoMsg): QueryVotesByProposalRequest;
    fromProtoMsg(message: QueryVotesByProposalRequestProtoMsg): QueryVotesByProposalRequest;
    toProto(message: QueryVotesByProposalRequest): Uint8Array;
    toProtoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestProtoMsg;
};
export declare const QueryVotesByProposalResponse: {
    typeUrl: string;
    encode(message: QueryVotesByProposalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVotesByProposalResponse;
    fromPartial(object: Partial<QueryVotesByProposalResponse>): QueryVotesByProposalResponse;
    fromAmino(object: QueryVotesByProposalResponseAmino): QueryVotesByProposalResponse;
    toAmino(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAmino;
    fromAminoMsg(object: QueryVotesByProposalResponseAminoMsg): QueryVotesByProposalResponse;
    fromProtoMsg(message: QueryVotesByProposalResponseProtoMsg): QueryVotesByProposalResponse;
    toProto(message: QueryVotesByProposalResponse): Uint8Array;
    toProtoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseProtoMsg;
};
export declare const QueryVotesByVoterRequest: {
    typeUrl: string;
    encode(message: QueryVotesByVoterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVotesByVoterRequest;
    fromPartial(object: Partial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest;
    fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest;
    toAmino(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAmino;
    fromAminoMsg(object: QueryVotesByVoterRequestAminoMsg): QueryVotesByVoterRequest;
    fromProtoMsg(message: QueryVotesByVoterRequestProtoMsg): QueryVotesByVoterRequest;
    toProto(message: QueryVotesByVoterRequest): Uint8Array;
    toProtoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestProtoMsg;
};
export declare const QueryVotesByVoterResponse: {
    typeUrl: string;
    encode(message: QueryVotesByVoterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVotesByVoterResponse;
    fromPartial(object: Partial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse;
    fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse;
    toAmino(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAmino;
    fromAminoMsg(object: QueryVotesByVoterResponseAminoMsg): QueryVotesByVoterResponse;
    fromProtoMsg(message: QueryVotesByVoterResponseProtoMsg): QueryVotesByVoterResponse;
    toProto(message: QueryVotesByVoterResponse): Uint8Array;
    toProtoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseProtoMsg;
};
