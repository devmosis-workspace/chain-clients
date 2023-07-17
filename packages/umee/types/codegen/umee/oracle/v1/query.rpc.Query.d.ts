import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryExchangeRates, QueryExchangeRatesResponse, QueryActiveExchangeRates, QueryActiveExchangeRatesResponse, QueryFeederDelegation, QueryFeederDelegationResponse, QueryMissCounter, QueryMissCounterResponse, QuerySlashWindow, QuerySlashWindowResponse, QueryAggregatePrevote, QueryAggregatePrevoteResponse, QueryAggregatePrevotes, QueryAggregatePrevotesResponse, QueryAggregateVote, QueryAggregateVoteResponse, QueryAggregateVotes, QueryAggregateVotesResponse, QueryParams, QueryParamsResponse, QueryMedians, QueryMediansResponse, QueryMedianDeviations, QueryMedianDeviationsResponse, QueryAvgPrice, QueryAvgPriceResponse } from "./query";
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
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse>;
    activeExchangeRates(request?: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse>;
    feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse>;
    slashWindow(request?: QuerySlashWindow): Promise<QuerySlashWindowResponse>;
    aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotes): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    medians(request: QueryMedians): Promise<QueryMediansResponse>;
    medianDeviations(request: QueryMedianDeviations): Promise<QueryMedianDeviationsResponse>;
    avgPrice(request: QueryAvgPrice): Promise<QueryAvgPriceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse>;
    activeExchangeRates(request?: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse>;
    feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse>;
    slashWindow(request?: QuerySlashWindow): Promise<QuerySlashWindowResponse>;
    aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotes): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    medians(request: QueryMedians): Promise<QueryMediansResponse>;
    medianDeviations(request: QueryMedianDeviations): Promise<QueryMedianDeviationsResponse>;
    avgPrice(request: QueryAvgPrice): Promise<QueryAvgPriceResponse>;
};
