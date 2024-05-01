import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryExchangeRates, QueryExchangeRatesResponse, QueryActiveExchangeRates, QueryActiveExchangeRatesResponse, QueryFeederDelegation, QueryFeederDelegationResponse, QueryMissCounter, QueryMissCounterResponse, QuerySlashWindow, QuerySlashWindowResponse, QueryAggregatePrevote, QueryAggregatePrevoteResponse, QueryAggregatePrevotes, QueryAggregatePrevotesResponse, QueryAggregateVote, QueryAggregateVoteResponse, QueryAggregateVotes, QueryAggregateVotesResponse, QueryParams, QueryParamsResponse, QueryMedians, QueryMediansResponse, QueryMedianDeviations, QueryMedianDeviationsResponse, QueryAvgPrice, QueryAvgPriceResponse, QueryExgRatesWithTimestamp, QueryExgRatesWithTimestampResponse, QueryMissCounters, QueryMissCountersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * ExchangeRates returns exchange rates of all denoms,
   * or, if specified, returns a single denom
   */
  exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse>;
  /** ActiveExchangeRates returns all active denoms */
  activeExchangeRates(request?: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse>;
  /** FeederDelegation returns feeder delegation of a validator */
  feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse>;
  /** MissCounter returns oracle miss counter of a validator */
  missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse>;
  /** SlashWindow returns slash window information */
  slashWindow(request?: QuerySlashWindow): Promise<QuerySlashWindowResponse>;
  /** AggregatePrevote returns an aggregate prevote of a validator */
  aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse>;
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  aggregatePrevotes(request?: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse>;
  /** AggregateVote returns an aggregate vote of a validator */
  aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse>;
  /** AggregateVotes returns aggregate votes of all validators */
  aggregateVotes(request?: QueryAggregateVotes): Promise<QueryAggregateVotesResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParams): Promise<QueryParamsResponse>;
  /**
   * Medians returns medians of all denoms,
   * or, if specified, returns a single median
   */
  medians(request: QueryMedians): Promise<QueryMediansResponse>;
  /**
   * MedianDeviations returns median deviations of all denoms,
   * or, if specified, returns a single median deviation
   */
  medianDeviations(request: QueryMedianDeviations): Promise<QueryMedianDeviationsResponse>;
  /** QueryAvgPrice returns avg price of a given denom (required). */
  avgPrice(request: QueryAvgPrice): Promise<QueryAvgPriceResponse>;
  /**
   * ExgRatesWithTimestamp returns exchange rates of all denoms with timestamp,
   * or, if specified, returns a single denom
   */
  exgRatesWithTimestamp(request: QueryExgRatesWithTimestamp): Promise<QueryExgRatesWithTimestampResponse>;
  /** MissCounters returns oracle missing votes count of validators. */
  missCounters(request: QueryMissCounters): Promise<QueryMissCountersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.exchangeRates = this.exchangeRates.bind(this);
    this.activeExchangeRates = this.activeExchangeRates.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.slashWindow = this.slashWindow.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
    this.medians = this.medians.bind(this);
    this.medianDeviations = this.medianDeviations.bind(this);
    this.avgPrice = this.avgPrice.bind(this);
    this.exgRatesWithTimestamp = this.exgRatesWithTimestamp.bind(this);
    this.missCounters = this.missCounters.bind(this);
  }
  exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRates.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "ExchangeRates", data);
    return promise.then(data => QueryExchangeRatesResponse.decode(new BinaryReader(data)));
  }
  activeExchangeRates(request: QueryActiveExchangeRates = {}): Promise<QueryActiveExchangeRatesResponse> {
    const data = QueryActiveExchangeRates.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "ActiveExchangeRates", data);
    return promise.then(data => QueryActiveExchangeRatesResponse.decode(new BinaryReader(data)));
  }
  feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegation.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "FeederDelegation", data);
    return promise.then(data => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
  }
  missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounter.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "MissCounter", data);
    return promise.then(data => QueryMissCounterResponse.decode(new BinaryReader(data)));
  }
  slashWindow(request: QuerySlashWindow = {}): Promise<QuerySlashWindowResponse> {
    const data = QuerySlashWindow.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "SlashWindow", data);
    return promise.then(data => QuerySlashWindowResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevote.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevote", data);
    return promise.then(data => QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
  }
  aggregatePrevotes(request: QueryAggregatePrevotes = {}): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotes.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevotes", data);
    return promise.then(data => QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
  }
  aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVote.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVote", data);
    return promise.then(data => QueryAggregateVoteResponse.decode(new BinaryReader(data)));
  }
  aggregateVotes(request: QueryAggregateVotes = {}): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotes.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVotes", data);
    return promise.then(data => QueryAggregateVotesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  medians(request: QueryMedians): Promise<QueryMediansResponse> {
    const data = QueryMedians.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "Medians", data);
    return promise.then(data => QueryMediansResponse.decode(new BinaryReader(data)));
  }
  medianDeviations(request: QueryMedianDeviations): Promise<QueryMedianDeviationsResponse> {
    const data = QueryMedianDeviations.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "MedianDeviations", data);
    return promise.then(data => QueryMedianDeviationsResponse.decode(new BinaryReader(data)));
  }
  avgPrice(request: QueryAvgPrice): Promise<QueryAvgPriceResponse> {
    const data = QueryAvgPrice.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AvgPrice", data);
    return promise.then(data => QueryAvgPriceResponse.decode(new BinaryReader(data)));
  }
  exgRatesWithTimestamp(request: QueryExgRatesWithTimestamp): Promise<QueryExgRatesWithTimestampResponse> {
    const data = QueryExgRatesWithTimestamp.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "ExgRatesWithTimestamp", data);
    return promise.then(data => QueryExgRatesWithTimestampResponse.decode(new BinaryReader(data)));
  }
  missCounters(request: QueryMissCounters): Promise<QueryMissCountersResponse> {
    const data = QueryMissCounters.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "MissCounters", data);
    return promise.then(data => QueryMissCountersResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse> {
      return queryService.exchangeRates(request);
    },
    activeExchangeRates(request?: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse> {
      return queryService.activeExchangeRates(request);
    },
    feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse> {
      return queryService.feederDelegation(request);
    },
    missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse> {
      return queryService.missCounter(request);
    },
    slashWindow(request?: QuerySlashWindow): Promise<QuerySlashWindowResponse> {
      return queryService.slashWindow(request);
    },
    aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse> {
      return queryService.aggregatePrevote(request);
    },
    aggregatePrevotes(request?: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse> {
      return queryService.aggregatePrevotes(request);
    },
    aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse> {
      return queryService.aggregateVote(request);
    },
    aggregateVotes(request?: QueryAggregateVotes): Promise<QueryAggregateVotesResponse> {
      return queryService.aggregateVotes(request);
    },
    params(request?: QueryParams): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    medians(request: QueryMedians): Promise<QueryMediansResponse> {
      return queryService.medians(request);
    },
    medianDeviations(request: QueryMedianDeviations): Promise<QueryMedianDeviationsResponse> {
      return queryService.medianDeviations(request);
    },
    avgPrice(request: QueryAvgPrice): Promise<QueryAvgPriceResponse> {
      return queryService.avgPrice(request);
    },
    exgRatesWithTimestamp(request: QueryExgRatesWithTimestamp): Promise<QueryExgRatesWithTimestampResponse> {
      return queryService.exgRatesWithTimestamp(request);
    },
    missCounters(request: QueryMissCounters): Promise<QueryMissCountersResponse> {
      return queryService.missCounters(request);
    }
  };
};