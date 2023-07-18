import { LCDClient } from "@osmonauts/lcd";
import { QueryExchangeRates, QueryExchangeRatesResponseSDKType, QueryActiveExchangeRates, QueryActiveExchangeRatesResponseSDKType, QueryFeederDelegation, QueryFeederDelegationResponseSDKType, QueryMissCounter, QueryMissCounterResponseSDKType, QuerySlashWindow, QuerySlashWindowResponseSDKType, QueryAggregatePrevote, QueryAggregatePrevoteResponseSDKType, QueryAggregatePrevotes, QueryAggregatePrevotesResponseSDKType, QueryAggregateVote, QueryAggregateVoteResponseSDKType, QueryAggregateVotes, QueryAggregateVotesResponseSDKType, QueryParams, QueryParamsResponseSDKType, QueryMedians, QueryMediansResponseSDKType, QueryMedianDeviations, QueryMedianDeviationsResponseSDKType, QueryAvgPrice, QueryAvgPriceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    exchangeRates(params: QueryExchangeRates): Promise<QueryExchangeRatesResponseSDKType>;
    activeExchangeRates(_params?: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponseSDKType>;
    feederDelegation(params: QueryFeederDelegation): Promise<QueryFeederDelegationResponseSDKType>;
    missCounter(params: QueryMissCounter): Promise<QueryMissCounterResponseSDKType>;
    slashWindow(_params?: QuerySlashWindow): Promise<QuerySlashWindowResponseSDKType>;
    aggregatePrevote(params: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponseSDKType>;
    aggregatePrevotes(_params?: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponseSDKType>;
    aggregateVote(params: QueryAggregateVote): Promise<QueryAggregateVoteResponseSDKType>;
    aggregateVotes(_params?: QueryAggregateVotes): Promise<QueryAggregateVotesResponseSDKType>;
    params(_params?: QueryParams): Promise<QueryParamsResponseSDKType>;
    medians(params: QueryMedians): Promise<QueryMediansResponseSDKType>;
    medianDeviations(params: QueryMedianDeviations): Promise<QueryMedianDeviationsResponseSDKType>;
    avgPrice(params: QueryAvgPrice): Promise<QueryAvgPriceResponseSDKType>;
}
