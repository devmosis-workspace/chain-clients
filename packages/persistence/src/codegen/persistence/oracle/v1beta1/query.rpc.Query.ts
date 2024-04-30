import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllExchangeRatesRequest, QueryAllExchangeRatesResponse, QueryExchangeRateRequest, QueryExchangeRateResponse, QueryActiveExchangeRatesRequest, QueryActiveExchangeRatesResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryMissCounterRequest, QueryMissCounterResponse, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse, QueryAggregateVoteRequest, QueryAggregateVoteResponse, QueryAggregateVotesRequest, QueryAggregateVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryRewardPoolBalanceRequest, QueryRewardPoolBalanceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** ExchangeRates returns exchange rates of all denoms. */
  allExchangeRates(request?: QueryAllExchangeRatesRequest): Promise<QueryAllExchangeRatesResponse>;
  /** ExchangeRate returns exchange rates of a specified denom. */
  exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
  /** ActiveExchangeRates returns all active denoms */
  activeExchangeRates(request?: QueryActiveExchangeRatesRequest): Promise<QueryActiveExchangeRatesResponse>;
  /** FeederDelegation returns feeder delegation of a validator */
  feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
  /** MissCounter returns oracle miss counter of a validator */
  missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
  /** AggregatePrevote returns an aggregate prevote of a validator */
  aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
  /** AggregateVote returns an aggregate vote of a validator */
  aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
  /** AggregateVotes returns aggregate votes of all validators */
  aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** QueryRewardPoolBalance queries funds left in the reward pool. */
  queryRewardPoolBalance(request?: QueryRewardPoolBalanceRequest): Promise<QueryRewardPoolBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allExchangeRates = this.allExchangeRates.bind(this);
    this.exchangeRate = this.exchangeRate.bind(this);
    this.activeExchangeRates = this.activeExchangeRates.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
    this.queryRewardPoolBalance = this.queryRewardPoolBalance.bind(this);
  }
  allExchangeRates(request: QueryAllExchangeRatesRequest = {}): Promise<QueryAllExchangeRatesResponse> {
    const data = QueryAllExchangeRatesRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "AllExchangeRates", data);
    return promise.then(data => QueryAllExchangeRatesResponse.decode(new BinaryReader(data)));
  }
  exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "ExchangeRate", data);
    return promise.then(data => QueryExchangeRateResponse.decode(new BinaryReader(data)));
  }
  activeExchangeRates(request: QueryActiveExchangeRatesRequest = {}): Promise<QueryActiveExchangeRatesResponse> {
    const data = QueryActiveExchangeRatesRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "ActiveExchangeRates", data);
    return promise.then(data => QueryActiveExchangeRatesResponse.decode(new BinaryReader(data)));
  }
  feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "FeederDelegation", data);
    return promise.then(data => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
  }
  missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "MissCounter", data);
    return promise.then(data => QueryMissCounterResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevoteRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "AggregatePrevote", data);
    return promise.then(data => QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevotes(request: QueryAggregatePrevotesRequest = {}): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotesRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "AggregatePrevotes", data);
    return promise.then(data => QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
  }
  aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVoteRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "AggregateVote", data);
    return promise.then(data => QueryAggregateVoteResponse.decode(new BinaryReader(data)));
  }
  aggregateVotes(request: QueryAggregateVotesRequest = {}): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotesRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "AggregateVotes", data);
    return promise.then(data => QueryAggregateVotesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryRewardPoolBalance(request: QueryRewardPoolBalanceRequest = {}): Promise<QueryRewardPoolBalanceResponse> {
    const data = QueryRewardPoolBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Query", "QueryRewardPoolBalance", data);
    return promise.then(data => QueryRewardPoolBalanceResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allExchangeRates(request?: QueryAllExchangeRatesRequest): Promise<QueryAllExchangeRatesResponse> {
      return queryService.allExchangeRates(request);
    },
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
      return queryService.exchangeRate(request);
    },
    activeExchangeRates(request?: QueryActiveExchangeRatesRequest): Promise<QueryActiveExchangeRatesResponse> {
      return queryService.activeExchangeRates(request);
    },
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse> {
      return queryService.feederDelegation(request);
    },
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse> {
      return queryService.missCounter(request);
    },
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse> {
      return queryService.aggregatePrevote(request);
    },
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse> {
      return queryService.aggregatePrevotes(request);
    },
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse> {
      return queryService.aggregateVote(request);
    },
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse> {
      return queryService.aggregateVotes(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    queryRewardPoolBalance(request?: QueryRewardPoolBalanceRequest): Promise<QueryRewardPoolBalanceResponse> {
      return queryService.queryRewardPoolBalance(request);
    }
  };
};