import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType, Params, ParamsSDKType } from "./oracle";
import { Price, PriceSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRates {
    /** denom defines the denomination to query for. */
    denom: string;
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRatesSDKType {
    denom: string;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
    /**
     * exchange_rates defines a list of the exchange rate for all whitelisted
     * denoms.
     */
    exchangeRates: DecCoin[];
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
    exchange_rates: DecCoinSDKType[];
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRates {
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesSDKType {
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponse {
    /**
     * activeRates defines a list of the denomination which oracle prices agreed
     * upon.
     */
    activeRates: string[];
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseSDKType {
    active_rates: string[];
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegation {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationSDKType {
    validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
    /** feeder_addr defines the feeder delegation of a validator */
    feederAddr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
    feeder_addr: string;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounter {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterSDKType {
    validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
    /** miss_counter defines the oracle miss counter of a validator */
    missCounter: Long;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
    miss_counter: Long;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindow {
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowSDKType {
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponse {
    /**
     * window_progress defines the number of voting periods
     * since the last slashing event would have taken place.
     */
    windowProgress: Long;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
    window_progress: Long;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevote {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteSDKType {
    validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
    /**
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator
     * in the current vote period
     */
    aggregatePrevote?: AggregateExchangeRatePrevote;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
    aggregate_prevote?: AggregateExchangeRatePrevoteSDKType;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotes {
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesSDKType {
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
    /**
     * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
     * current vote period
     */
    aggregatePrevotes: AggregateExchangeRatePrevote[];
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseSDKType {
    aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVote {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteSDKType {
    validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
    /**
     * aggregate_vote defines oracle aggregate vote submitted by a validator in
     * the current vote period
     */
    aggregateVote?: AggregateExchangeRateVote;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
    aggregate_vote?: AggregateExchangeRateVoteSDKType;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotes {
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesSDKType {
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
    /**
     * aggregate_votes defines all oracle aggregate votes submitted in the current
     * vote period
     */
    aggregateVotes: AggregateExchangeRateVote[];
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseSDKType {
    aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParams {
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryMedians is the request type for the Query/Medians RPC Response. */
export interface QueryMedians {
    /** denom defines the denomination to query for. */
    denom: string;
    /**
     * numStamps defines the number of median stamps to query for. numStamps
     * must be greater than 0.
     */
    numStamps: number;
}
/** QueryMedians is the request type for the Query/Medians RPC Response. */
export interface QueryMediansSDKType {
    denom: string;
    numStamps: number;
}
/**
 * QueryMediansResponse is response type for the
 * Query/Medians RPC method.
 */
export interface QueryMediansResponse {
    /** medians defines a list of the medians for all stamped denoms. */
    medians: Price[];
}
/**
 * QueryMediansResponse is response type for the
 * Query/Medians RPC method.
 */
export interface QueryMediansResponseSDKType {
    medians: PriceSDKType[];
}
/** QueryMedianDeviations is the request type for the Query/MedianDeviations RPC Response. */
export interface QueryMedianDeviations {
    /** denom defines the denomination to query for. */
    denom: string;
}
/** QueryMedianDeviations is the request type for the Query/MedianDeviations RPC Response. */
export interface QueryMedianDeviationsSDKType {
    denom: string;
}
/**
 * QueryMedianDeviationsResponse is response type for the
 * Query/MedianDeviations RPC method.
 */
export interface QueryMedianDeviationsResponse {
    /** medians defines a list of the median deviations for all stamped denoms. */
    medianDeviations: Price[];
}
/**
 * QueryMedianDeviationsResponse is response type for the
 * Query/MedianDeviations RPC method.
 */
export interface QueryMedianDeviationsResponseSDKType {
    medianDeviations: PriceSDKType[];
}
/** QueryAvgPrice is a request type for AvgPrice method */
export interface QueryAvgPrice {
    denom: string;
}
/** QueryAvgPrice is a request type for AvgPrice method */
export interface QueryAvgPriceSDKType {
    denom: string;
}
/** QueryAvgPriceResponse is a response type for AvgPrice method */
export interface QueryAvgPriceResponse {
    price: string;
}
/** QueryAvgPriceResponse is a response type for AvgPrice method */
export interface QueryAvgPriceResponseSDKType {
    price: string;
}
export declare const QueryExchangeRates: {
    encode(message: QueryExchangeRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryExchangeRates;
    fromPartial(object: Partial<QueryExchangeRates>): QueryExchangeRates;
};
export declare const QueryExchangeRatesResponse: {
    encode(message: QueryExchangeRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryExchangeRatesResponse;
    fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
};
export declare const QueryActiveExchangeRates: {
    encode(_: QueryActiveExchangeRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryActiveExchangeRates;
    fromPartial(_: Partial<QueryActiveExchangeRates>): QueryActiveExchangeRates;
};
export declare const QueryActiveExchangeRatesResponse: {
    encode(message: QueryActiveExchangeRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryActiveExchangeRatesResponse;
    fromPartial(object: Partial<QueryActiveExchangeRatesResponse>): QueryActiveExchangeRatesResponse;
};
export declare const QueryFeederDelegation: {
    encode(message: QueryFeederDelegation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeederDelegation;
    fromPartial(object: Partial<QueryFeederDelegation>): QueryFeederDelegation;
};
export declare const QueryFeederDelegationResponse: {
    encode(message: QueryFeederDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeederDelegationResponse;
    fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
};
export declare const QueryMissCounter: {
    encode(message: QueryMissCounter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMissCounter;
    fromPartial(object: Partial<QueryMissCounter>): QueryMissCounter;
};
export declare const QueryMissCounterResponse: {
    encode(message: QueryMissCounterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMissCounterResponse;
    fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse;
};
export declare const QuerySlashWindow: {
    encode(_: QuerySlashWindow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QuerySlashWindow;
    fromPartial(_: Partial<QuerySlashWindow>): QuerySlashWindow;
};
export declare const QuerySlashWindowResponse: {
    encode(message: QuerySlashWindowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySlashWindowResponse;
    fromPartial(object: Partial<QuerySlashWindowResponse>): QuerySlashWindowResponse;
};
export declare const QueryAggregatePrevote: {
    encode(message: QueryAggregatePrevote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregatePrevote;
    fromPartial(object: Partial<QueryAggregatePrevote>): QueryAggregatePrevote;
};
export declare const QueryAggregatePrevoteResponse: {
    encode(message: QueryAggregatePrevoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregatePrevoteResponse;
    fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse;
};
export declare const QueryAggregatePrevotes: {
    encode(_: QueryAggregatePrevotes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAggregatePrevotes;
    fromPartial(_: Partial<QueryAggregatePrevotes>): QueryAggregatePrevotes;
};
export declare const QueryAggregatePrevotesResponse: {
    encode(message: QueryAggregatePrevotesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregatePrevotesResponse;
    fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse;
};
export declare const QueryAggregateVote: {
    encode(message: QueryAggregateVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateVote;
    fromPartial(object: Partial<QueryAggregateVote>): QueryAggregateVote;
};
export declare const QueryAggregateVoteResponse: {
    encode(message: QueryAggregateVoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateVoteResponse;
    fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse;
};
export declare const QueryAggregateVotes: {
    encode(_: QueryAggregateVotes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAggregateVotes;
    fromPartial(_: Partial<QueryAggregateVotes>): QueryAggregateVotes;
};
export declare const QueryAggregateVotesResponse: {
    encode(message: QueryAggregateVotesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateVotesResponse;
    fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse;
};
export declare const QueryParams: {
    encode(_: QueryParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryMedians: {
    encode(message: QueryMedians, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMedians;
    fromPartial(object: Partial<QueryMedians>): QueryMedians;
};
export declare const QueryMediansResponse: {
    encode(message: QueryMediansResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMediansResponse;
    fromPartial(object: Partial<QueryMediansResponse>): QueryMediansResponse;
};
export declare const QueryMedianDeviations: {
    encode(message: QueryMedianDeviations, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMedianDeviations;
    fromPartial(object: Partial<QueryMedianDeviations>): QueryMedianDeviations;
};
export declare const QueryMedianDeviationsResponse: {
    encode(message: QueryMedianDeviationsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMedianDeviationsResponse;
    fromPartial(object: Partial<QueryMedianDeviationsResponse>): QueryMedianDeviationsResponse;
};
export declare const QueryAvgPrice: {
    encode(message: QueryAvgPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAvgPrice;
    fromPartial(object: Partial<QueryAvgPrice>): QueryAvgPrice;
};
export declare const QueryAvgPriceResponse: {
    encode(message: QueryAvgPriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAvgPriceResponse;
    fromPartial(object: Partial<QueryAvgPriceResponse>): QueryAvgPriceResponse;
};
