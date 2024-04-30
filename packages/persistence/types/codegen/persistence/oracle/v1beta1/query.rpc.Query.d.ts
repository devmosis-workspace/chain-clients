import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allExchangeRates(request?: QueryAllExchangeRatesRequest): Promise<QueryAllExchangeRatesResponse>;
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    activeExchangeRates(request?: QueryActiveExchangeRatesRequest): Promise<QueryActiveExchangeRatesResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryRewardPoolBalance(request?: QueryRewardPoolBalanceRequest): Promise<QueryRewardPoolBalanceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allExchangeRates(request?: QueryAllExchangeRatesRequest): Promise<QueryAllExchangeRatesResponse>;
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    activeExchangeRates(request?: QueryActiveExchangeRatesRequest): Promise<QueryActiveExchangeRatesResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    missCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    aggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    aggregatePrevotes(request?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryRewardPoolBalance(request?: QueryRewardPoolBalanceRequest): Promise<QueryRewardPoolBalanceResponse>;
};
