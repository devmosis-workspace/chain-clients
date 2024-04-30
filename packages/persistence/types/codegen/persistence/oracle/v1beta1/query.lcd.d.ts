import { LCDClient } from "@cosmology/lcd";
import { QueryAllExchangeRatesRequest, QueryAllExchangeRatesResponseSDKType, QueryExchangeRateRequest, QueryExchangeRateResponseSDKType, QueryActiveExchangeRatesRequest, QueryActiveExchangeRatesResponseSDKType, QueryFeederDelegationRequest, QueryFeederDelegationResponseSDKType, QueryMissCounterRequest, QueryMissCounterResponseSDKType, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponseSDKType, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponseSDKType, QueryAggregateVoteRequest, QueryAggregateVoteResponseSDKType, QueryAggregateVotesRequest, QueryAggregateVotesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryRewardPoolBalanceRequest, QueryRewardPoolBalanceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    allExchangeRates(_params?: QueryAllExchangeRatesRequest): Promise<QueryAllExchangeRatesResponseSDKType>;
    exchangeRate(params: QueryExchangeRateRequest): Promise<QueryExchangeRateResponseSDKType>;
    activeExchangeRates(_params?: QueryActiveExchangeRatesRequest): Promise<QueryActiveExchangeRatesResponseSDKType>;
    feederDelegation(params: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponseSDKType>;
    missCounter(params: QueryMissCounterRequest): Promise<QueryMissCounterResponseSDKType>;
    aggregatePrevote(params: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponseSDKType>;
    aggregatePrevotes(_params?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponseSDKType>;
    aggregateVote(params: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponseSDKType>;
    aggregateVotes(_params?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    queryRewardPoolBalance(_params?: QueryRewardPoolBalanceRequest): Promise<QueryRewardPoolBalanceResponseSDKType>;
}
