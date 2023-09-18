import { LCDClient } from "@cosmology/lcd";
import { QueryCommitteesRequest, QueryCommitteesResponseSDKType, QueryCommitteeRequest, QueryCommitteeResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType, QueryProposalRequest, QueryProposalResponseSDKType, QueryNextProposalIDRequest, QueryNextProposalIDResponseSDKType, QueryVotesRequest, QueryVotesResponseSDKType, QueryVoteRequest, QueryVoteResponseSDKType, QueryTallyRequest, QueryTallyResponseSDKType, QueryRawParamsRequest, QueryRawParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    committees(_params?: QueryCommitteesRequest): Promise<QueryCommitteesResponseSDKType>;
    committee(params: QueryCommitteeRequest): Promise<QueryCommitteeResponseSDKType>;
    proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType>;
    proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    nextProposalID(_params?: QueryNextProposalIDRequest): Promise<QueryNextProposalIDResponseSDKType>;
    votes(params: QueryVotesRequest): Promise<QueryVotesResponseSDKType>;
    vote(params: QueryVoteRequest): Promise<QueryVoteResponseSDKType>;
    tally(params: QueryTallyRequest): Promise<QueryTallyResponseSDKType>;
    rawParams(params: QueryRawParamsRequest): Promise<QueryRawParamsResponseSDKType>;
}
