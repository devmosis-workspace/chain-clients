import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupAccountInfoRequest, QueryGroupAccountInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupAccountsByGroupRequest, QueryGroupAccountsByGroupResponse, QueryGroupAccountsByAdminRequest, QueryGroupAccountsByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupAccountRequest, QueryProposalsByGroupAccountResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse } from "./query";
/** Query is the regen.group.v1alpha1 Query service. */
export interface Query {
    /** GroupInfo queries group info based on group id. */
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    /** GroupAccountInfo queries group account info based on group account address. */
    groupAccountInfo(request: QueryGroupAccountInfoRequest): Promise<QueryGroupAccountInfoResponse>;
    /** GroupMembers queries members of a group */
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    /** GroupsByAdmin queries groups by admin address. */
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    /** GroupAccountsByGroup queries group accounts by group id. */
    groupAccountsByGroup(request: QueryGroupAccountsByGroupRequest): Promise<QueryGroupAccountsByGroupResponse>;
    /** GroupsByAdmin queries group accounts by admin address. */
    groupAccountsByAdmin(request: QueryGroupAccountsByAdminRequest): Promise<QueryGroupAccountsByAdminResponse>;
    /** Proposal queries a proposal based on proposal id. */
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** ProposalsByGroupAccount queries proposals based on group account address. */
    proposalsByGroupAccount(request: QueryProposalsByGroupAccountRequest): Promise<QueryProposalsByGroupAccountResponse>;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    /** VotesByProposal queries a vote by proposal. */
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    /** VotesByVoter queries a vote by voter. */
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    groupAccountInfo(request: QueryGroupAccountInfoRequest): Promise<QueryGroupAccountInfoResponse>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    groupAccountsByGroup(request: QueryGroupAccountsByGroupRequest): Promise<QueryGroupAccountsByGroupResponse>;
    groupAccountsByAdmin(request: QueryGroupAccountsByAdminRequest): Promise<QueryGroupAccountsByAdminResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposalsByGroupAccount(request: QueryProposalsByGroupAccountRequest): Promise<QueryProposalsByGroupAccountResponse>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    groupAccountInfo(request: QueryGroupAccountInfoRequest): Promise<QueryGroupAccountInfoResponse>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    groupAccountsByGroup(request: QueryGroupAccountsByGroupRequest): Promise<QueryGroupAccountsByGroupResponse>;
    groupAccountsByAdmin(request: QueryGroupAccountsByAdminRequest): Promise<QueryGroupAccountsByAdminResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposalsByGroupAccount(request: QueryProposalsByGroupAccountRequest): Promise<QueryProposalsByGroupAccountResponse>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
};
