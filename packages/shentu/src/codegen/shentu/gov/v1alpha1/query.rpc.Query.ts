import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "../../../cosmos/gov/v1beta1/query";
import { QueryParamsResponse, QueryCertVotedRequest, QueryCertVotedResponse } from "./query";
/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Proposal queries proposal details based on ProposalID. */
  proposal(request: cosmos.gov.v1beta1.QueryProposalRequest): Promise<QueryProposalResponse>;
  /** Proposals queries all proposals based on given status. */
  proposals(request: cosmos.gov.v1beta1.QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  vote(request: cosmos.gov.v1beta1.QueryVoteRequest): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  votes(request: cosmos.gov.v1beta1.QueryVotesRequest): Promise<QueryVotesResponse>;
  /** Params queries all parameters of the gov module. */
  params(request: cosmos.gov.v1beta1.QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  deposit(request: cosmos.gov.v1beta1.QueryDepositRequest): Promise<QueryDepositResponse>;
  /** Deposits queries all deposits of a single proposal. */
  deposits(request: cosmos.gov.v1beta1.QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** TallyResult queries the tally of a proposal vote. */
  tallyResult(request: cosmos.gov.v1beta1.QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
  /** Proposal queries proposal details based on ProposalID. */
  certVoted(request: QueryCertVotedRequest): Promise<QueryCertVotedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  proposal(request: cosmos.gov.v1beta1.QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = cosmos.gov.v1beta1.QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  }
  proposals(request: cosmos.gov.v1beta1.QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const data = cosmos.gov.v1beta1.QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new BinaryReader(data)));
  }
  vote(request: cosmos.gov.v1beta1.QueryVoteRequest): Promise<QueryVoteResponse> {
    const data = cosmos.gov.v1beta1.QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new BinaryReader(data)));
  }
  votes(request: cosmos.gov.v1beta1.QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = cosmos.gov.v1beta1.QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new BinaryReader(data)));
  }
  params(request: cosmos.gov.v1beta1.QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = cosmos.gov.v1beta1.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  deposit(request: cosmos.gov.v1beta1.QueryDepositRequest): Promise<QueryDepositResponse> {
    const data = cosmos.gov.v1beta1.QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new BinaryReader(data)));
  }
  deposits(request: cosmos.gov.v1beta1.QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = cosmos.gov.v1beta1.QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  tallyResult(request: cosmos.gov.v1beta1.QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const data = cosmos.gov.v1beta1.QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  }
  certVoted(request: QueryCertVotedRequest): Promise<QueryCertVotedResponse> {
    const data = QueryCertVotedRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.gov.v1alpha1.Query", "CertVoted", data);
    return promise.then(data => QueryCertVotedResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proposal(request: cosmos.gov.v1beta1.QueryProposalRequest): Promise<cosmos.gov.v1beta1.QueryProposalResponse> {
      return queryService.proposal(request);
    },
    proposals(request: cosmos.gov.v1beta1.QueryProposalsRequest): Promise<cosmos.gov.v1beta1.QueryProposalsResponse> {
      return queryService.proposals(request);
    },
    vote(request: cosmos.gov.v1beta1.QueryVoteRequest): Promise<cosmos.gov.v1beta1.QueryVoteResponse> {
      return queryService.vote(request);
    },
    votes(request: cosmos.gov.v1beta1.QueryVotesRequest): Promise<cosmos.gov.v1beta1.QueryVotesResponse> {
      return queryService.votes(request);
    },
    params(request: cosmos.gov.v1beta1.QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    deposit(request: cosmos.gov.v1beta1.QueryDepositRequest): Promise<cosmos.gov.v1beta1.QueryDepositResponse> {
      return queryService.deposit(request);
    },
    deposits(request: cosmos.gov.v1beta1.QueryDepositsRequest): Promise<cosmos.gov.v1beta1.QueryDepositsResponse> {
      return queryService.deposits(request);
    },
    tallyResult(request: cosmos.gov.v1beta1.QueryTallyResultRequest): Promise<cosmos.gov.v1beta1.QueryTallyResultResponse> {
      return queryService.tallyResult(request);
    },
    certVoted(request: QueryCertVotedRequest): Promise<QueryCertVotedResponse> {
      return queryService.certVoted(request);
    }
  };
};