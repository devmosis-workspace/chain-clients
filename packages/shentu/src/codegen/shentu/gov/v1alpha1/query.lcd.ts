import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesResponseSDKType, QueryParamsRequest, QueryDepositRequest, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "../../../cosmos/gov/v1beta1/query";
import { QueryParamsResponseSDKType, QueryCertVotedRequest, QueryCertVotedResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
    this.certVoted = this.certVoted.bind(this);
  }
  /* Proposal queries proposal details based on ProposalID. */
  async proposal(params: cosmos.gov.v1beta1.QueryProposalRequest): Promise<cosmos.gov.v1beta1.QueryProposalResponseSDKType> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}`;
    return await this.req.get<cosmos.gov.v1beta1.QueryProposalResponseSDKType>(endpoint);
  }
  /* Proposals queries all proposals based on given status. */
  async proposals(params: cosmos.gov.v1beta1.QueryProposalsRequest): Promise<cosmos.gov.v1beta1.QueryProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.proposalStatus !== "undefined") {
      options.params.proposal_status = params.proposalStatus;
    }
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1beta1/proposals`;
    return await this.req.get<cosmos.gov.v1beta1.QueryProposalsResponseSDKType>(endpoint, options);
  }
  /* Vote queries voted information based on proposalID, voterAddr. */
  async vote(params: cosmos.gov.v1beta1.QueryVoteRequest): Promise<cosmos.gov.v1beta1.QueryVoteResponseSDKType> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/votes/${params.voter}`;
    return await this.req.get<cosmos.gov.v1beta1.QueryVoteResponseSDKType>(endpoint);
  }
  /* Votes queries votes of a given proposal. */
  async votes(params: cosmos.gov.v1beta1.QueryVotesRequest): Promise<cosmos.gov.v1beta1.QueryVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/votes`;
    return await this.req.get<cosmos.gov.v1beta1.QueryVotesResponseSDKType>(endpoint, options);
  }
  /* Params queries all parameters of the gov module. */
  async params(params: cosmos.gov.v1beta1.QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/gov/v1beta1/params/${params.paramsType}`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Deposit queries single deposit information based proposalID, depositAddr. */
  async deposit(params: cosmos.gov.v1beta1.QueryDepositRequest): Promise<cosmos.gov.v1beta1.QueryDepositResponseSDKType> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/deposits/${params.depositor}`;
    return await this.req.get<cosmos.gov.v1beta1.QueryDepositResponseSDKType>(endpoint);
  }
  /* Deposits queries all deposits of a single proposal. */
  async deposits(params: cosmos.gov.v1beta1.QueryDepositsRequest): Promise<cosmos.gov.v1beta1.QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/deposits`;
    return await this.req.get<cosmos.gov.v1beta1.QueryDepositsResponseSDKType>(endpoint, options);
  }
  /* TallyResult queries the tally of a proposal vote. */
  async tallyResult(params: cosmos.gov.v1beta1.QueryTallyResultRequest): Promise<cosmos.gov.v1beta1.QueryTallyResultResponseSDKType> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/tally`;
    return await this.req.get<cosmos.gov.v1beta1.QueryTallyResultResponseSDKType>(endpoint);
  }
  /* Proposal queries proposal details based on ProposalID. */
  async certVoted(params: QueryCertVotedRequest): Promise<QueryCertVotedResponseSDKType> {
    const endpoint = `shentu/gov/v1alpha1/cert_voted/${params.proposalId}`;
    return await this.req.get<QueryCertVotedResponseSDKType>(endpoint);
  }
}