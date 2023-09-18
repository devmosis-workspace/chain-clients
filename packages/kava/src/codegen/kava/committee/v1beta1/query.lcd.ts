import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCommitteesRequest, QueryCommitteesResponseSDKType, QueryCommitteeRequest, QueryCommitteeResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType, QueryProposalRequest, QueryProposalResponseSDKType, QueryNextProposalIDRequest, QueryNextProposalIDResponseSDKType, QueryVotesRequest, QueryVotesResponseSDKType, QueryVoteRequest, QueryVoteResponseSDKType, QueryTallyRequest, QueryTallyResponseSDKType, QueryRawParamsRequest, QueryRawParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.committees = this.committees.bind(this);
    this.committee = this.committee.bind(this);
    this.proposals = this.proposals.bind(this);
    this.proposal = this.proposal.bind(this);
    this.nextProposalID = this.nextProposalID.bind(this);
    this.votes = this.votes.bind(this);
    this.vote = this.vote.bind(this);
    this.tally = this.tally.bind(this);
    this.rawParams = this.rawParams.bind(this);
  }
  /* Committees queries all committess of the committee module. */
  async committees(_params: QueryCommitteesRequest = {}): Promise<QueryCommitteesResponseSDKType> {
    const endpoint = `kava/committee/v1beta1/committees`;
    return await this.req.get<QueryCommitteesResponseSDKType>(endpoint);
  }
  /* Committee queries a committee based on committee ID. */
  async committee(params: QueryCommitteeRequest): Promise<QueryCommitteeResponseSDKType> {
    const endpoint = `kava/committee/v1beta1/committees/${params.committeeId}`;
    return await this.req.get<QueryCommitteeResponseSDKType>(endpoint);
  }
  /* Proposals queries proposals based on committee ID. */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.committeeId !== "undefined") {
      options.params.committee_id = params.committeeId;
    }
    const endpoint = `kava/committee/v1beta1/proposals`;
    return await this.req.get<QueryProposalsResponseSDKType>(endpoint, options);
  }
  /* Deposits queries a proposal based on proposal ID. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `kava/committee/v1beta1/proposals/${params.proposalId}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  }
  /* NextProposalID queries the next proposal ID of the committee module. */
  async nextProposalID(_params: QueryNextProposalIDRequest = {}): Promise<QueryNextProposalIDResponseSDKType> {
    const endpoint = `kava/committee/v1beta1/next-proposal-id`;
    return await this.req.get<QueryNextProposalIDResponseSDKType>(endpoint);
  }
  /* Votes queries all votes for a single proposal ID. */
  async votes(params: QueryVotesRequest): Promise<QueryVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/committee/v1beta1/proposals/${params.proposalId}/votes`;
    return await this.req.get<QueryVotesResponseSDKType>(endpoint, options);
  }
  /* Vote queries the vote of a single voter for a single proposal ID. */
  async vote(params: QueryVoteRequest): Promise<QueryVoteResponseSDKType> {
    const endpoint = `kava/committee/v1beta1/proposals/${params.proposalId}/votes/${params.voter}`;
    return await this.req.get<QueryVoteResponseSDKType>(endpoint);
  }
  /* Tally queries the tally of a single proposal ID. */
  async tally(params: QueryTallyRequest): Promise<QueryTallyResponseSDKType> {
    const endpoint = `kava/committee/v1beta1/proposals/${params.proposalId}/tally`;
    return await this.req.get<QueryTallyResponseSDKType>(endpoint);
  }
  /* RawParams queries the raw params data of any subspace and key. */
  async rawParams(params: QueryRawParamsRequest): Promise<QueryRawParamsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.subspace !== "undefined") {
      options.params.subspace = params.subspace;
    }
    if (typeof params?.key !== "undefined") {
      options.params.key = params.key;
    }
    const endpoint = `kava/committee/v1beta1/raw-params`;
    return await this.req.get<QueryRawParamsResponseSDKType>(endpoint, options);
  }
}