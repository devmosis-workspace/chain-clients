import { LCDClient } from "@cosmology/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoResponseSDKType, QueryGroupAccountInfoRequest, QueryGroupAccountInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminResponseSDKType, QueryGroupAccountsByGroupRequest, QueryGroupAccountsByGroupResponseSDKType, QueryGroupAccountsByAdminRequest, QueryGroupAccountsByAdminResponseSDKType, QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsByGroupAccountRequest, QueryProposalsByGroupAccountResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    groupInfo(params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType>;
    groupAccountInfo(params: QueryGroupAccountInfoRequest): Promise<QueryGroupAccountInfoResponseSDKType>;
    groupMembers(params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType>;
    groupsByAdmin(params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType>;
    groupAccountsByGroup(params: QueryGroupAccountsByGroupRequest): Promise<QueryGroupAccountsByGroupResponseSDKType>;
    groupAccountsByAdmin(params: QueryGroupAccountsByAdminRequest): Promise<QueryGroupAccountsByAdminResponseSDKType>;
    proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    proposalsByGroupAccount(params: QueryProposalsByGroupAccountRequest): Promise<QueryProposalsByGroupAccountResponseSDKType>;
    voteByProposalVoter(params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType>;
    votesByProposal(params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType>;
    votesByVoter(params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType>;
}
