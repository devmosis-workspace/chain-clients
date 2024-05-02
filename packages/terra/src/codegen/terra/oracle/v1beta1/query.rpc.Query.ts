import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryTobinTaxRequest, QueryTobinTaxResponse, QueryTobinTaxesRequest, QueryTobinTaxesResponse, QueryActivesRequest, QueryActivesResponse, QueryVoteTargetsRequest, QueryVoteTargetsResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryMissCounterRequest, QueryMissCounterResponse, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse, QueryAggregateVoteRequest, QueryAggregateVoteResponse, QueryAggregateVotesRequest, QueryAggregateVotesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** ExchangeRate returns exchange rate of a denom */
  exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
  /** ExchangeRates returns exchange rates of all denoms */
  exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
  /** TobinTax returns tobin tax of a denom */
  tobinTax(request: QueryTobinTaxRequest): Promise<QueryTobinTaxResponse>;
  /** TobinTaxes returns tobin taxes of all denoms */
  tobinTaxes(request?: QueryTobinTaxesRequest): Promise<QueryTobinTaxesResponse>;
  /** Actives returns all active denoms */
  actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
  /** VoteTargets returns all vote target denoms */
  voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
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
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.exchangeRate = this.exchangeRate.bind(this);
    this.exchangeRates = this.exchangeRates.bind(this);
    this.tobinTax = this.tobinTax.bind(this);
    this.tobinTaxes = this.tobinTaxes.bind(this);
    this.actives = this.actives.bind(this);
    this.voteTargets = this.voteTargets.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
  }
  exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "ExchangeRate", data);
    return promise.then(data => QueryExchangeRateResponse.decode(new BinaryReader(data)));
  }
  exchangeRates(request: QueryExchangeRatesRequest = {}): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRatesRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "ExchangeRates", data);
    return promise.then(data => QueryExchangeRatesResponse.decode(new BinaryReader(data)));
  }
  tobinTax(request: QueryTobinTaxRequest): Promise<QueryTobinTaxResponse> {
    const data = QueryTobinTaxRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "TobinTax", data);
    return promise.then(data => QueryTobinTaxResponse.decode(new BinaryReader(data)));
  }
  tobinTaxes(request: QueryTobinTaxesRequest = {}): Promise<QueryTobinTaxesResponse> {
    const data = QueryTobinTaxesRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "TobinTaxes", data);
    return promise.then(data => QueryTobinTaxesResponse.decode(new BinaryReader(data)));
  }
  actives(request: QueryActivesRequest = {}): Promise<QueryActivesResponse> {
    const data = QueryActivesRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "Actives", data);
    return promise.then(data => QueryActivesResponse.decode(new BinaryReader(data)));
  }
  voteTargets(request: QueryVoteTargetsRequest = {}): Promise<QueryVoteTargetsResponse> {
    const data = QueryVoteTargetsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "VoteTargets", data);
    return promise.then(data => QueryVoteTargetsResponse.decode(new BinaryReader(data)));
  }
  feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "FeederDelegation", data);
    return promise.then(data => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
  }
  missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "MissCounter", data);
    return promise.then(data => QueryMissCounterResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevoteRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "AggregatePrevote", data);
    return promise.then(data => QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevotes(request: QueryAggregatePrevotesRequest = {}): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotesRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "AggregatePrevotes", data);
    return promise.then(data => QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
  }
  aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVoteRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "AggregateVote", data);
    return promise.then(data => QueryAggregateVoteResponse.decode(new BinaryReader(data)));
  }
  aggregateVotes(request: QueryAggregateVotesRequest = {}): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotesRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "AggregateVotes", data);
    return promise.then(data => QueryAggregateVotesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.oracle.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
      return queryService.exchangeRate(request);
    },
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse> {
      return queryService.exchangeRates(request);
    },
    tobinTax(request: QueryTobinTaxRequest): Promise<QueryTobinTaxResponse> {
      return queryService.tobinTax(request);
    },
    tobinTaxes(request?: QueryTobinTaxesRequest): Promise<QueryTobinTaxesResponse> {
      return queryService.tobinTaxes(request);
    },
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse> {
      return queryService.actives(request);
    },
    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse> {
      return queryService.voteTargets(request);
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
    }
  };
};