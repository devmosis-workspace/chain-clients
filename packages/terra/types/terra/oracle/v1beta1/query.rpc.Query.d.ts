import { Rpc } from "../../../helpers";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    tobinTax(request: QueryTobinTaxRequest): Promise<QueryTobinTaxResponse>;
    tobinTaxes(request?: QueryTobinTaxesRequest): Promise<QueryTobinTaxesResponse>;
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    tobinTax(request: QueryTobinTaxRequest): Promise<QueryTobinTaxResponse>;
    tobinTaxes(request?: QueryTobinTaxesRequest): Promise<QueryTobinTaxesResponse>;
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
