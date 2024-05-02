import { LCDClient } from "@cosmology/lcd";
import { QueryExchangeRateRequest, QueryExchangeRateResponseSDKType, QueryExchangeRatesRequest, QueryExchangeRatesResponseSDKType, QueryTobinTaxRequest, QueryTobinTaxResponseSDKType, QueryTobinTaxesRequest, QueryTobinTaxesResponseSDKType, QueryActivesRequest, QueryActivesResponseSDKType, QueryVoteTargetsRequest, QueryVoteTargetsResponseSDKType, QueryFeederDelegationRequest, QueryFeederDelegationResponseSDKType, QueryMissCounterRequest, QueryMissCounterResponseSDKType, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponseSDKType, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponseSDKType, QueryAggregateVoteRequest, QueryAggregateVoteResponseSDKType, QueryAggregateVotesRequest, QueryAggregateVotesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    exchangeRate(params: QueryExchangeRateRequest): Promise<QueryExchangeRateResponseSDKType>;
    exchangeRates(_params?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponseSDKType>;
    tobinTax(params: QueryTobinTaxRequest): Promise<QueryTobinTaxResponseSDKType>;
    tobinTaxes(_params?: QueryTobinTaxesRequest): Promise<QueryTobinTaxesResponseSDKType>;
    actives(_params?: QueryActivesRequest): Promise<QueryActivesResponseSDKType>;
    voteTargets(_params?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponseSDKType>;
    feederDelegation(params: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponseSDKType>;
    missCounter(params: QueryMissCounterRequest): Promise<QueryMissCounterResponseSDKType>;
    aggregatePrevote(params: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponseSDKType>;
    aggregatePrevotes(_params?: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponseSDKType>;
    aggregateVote(params: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponseSDKType>;
    aggregateVotes(_params?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
