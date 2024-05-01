import { DenomExchangeRate, DenomExchangeRateAmino, DenomExchangeRateSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Price, PriceAmino, PriceSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryMissCounters is the request type for the Query/MissCounters RPC
 * method.
 */
export interface QueryMissCounters {
    validator: string;
}
export interface QueryMissCountersProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMissCounters";
    value: Uint8Array;
}
/**
 * QueryMissCounters is the request type for the Query/MissCounters RPC
 * method.
 */
export interface QueryMissCountersAmino {
    validator?: string;
}
export interface QueryMissCountersAminoMsg {
    type: "/umee.oracle.v1.QueryMissCounters";
    value: QueryMissCountersAmino;
}
/**
 * QueryMissCounters is the request type for the Query/MissCounters RPC
 * method.
 */
export interface QueryMissCountersSDKType {
    validator: string;
}
/** QueryMissCountersResponse is response type for the Query/MissCounters RPC method. */
export interface QueryMissCountersResponse {
    missCounters: PriceMissCounter[];
}
export interface QueryMissCountersResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMissCountersResponse";
    value: Uint8Array;
}
/** QueryMissCountersResponse is response type for the Query/MissCounters RPC method. */
export interface QueryMissCountersResponseAmino {
    miss_counters?: PriceMissCounterAmino[];
}
export interface QueryMissCountersResponseAminoMsg {
    type: "/umee.oracle.v1.QueryMissCountersResponse";
    value: QueryMissCountersResponseAmino;
}
/** QueryMissCountersResponse is response type for the Query/MissCounters RPC method. */
export interface QueryMissCountersResponseSDKType {
    miss_counters: PriceMissCounterSDKType[];
}
/** PriceMissCounter is the validator's oracle price votes missing count. */
export interface PriceMissCounter {
    validator: string;
    /** miss_counter defines the oracle miss counter of a validator */
    missCounter: bigint;
}
export interface PriceMissCounterProtoMsg {
    typeUrl: "/umee.oracle.v1.PriceMissCounter";
    value: Uint8Array;
}
/** PriceMissCounter is the validator's oracle price votes missing count. */
export interface PriceMissCounterAmino {
    validator?: string;
    /** miss_counter defines the oracle miss counter of a validator */
    miss_counter?: string;
}
export interface PriceMissCounterAminoMsg {
    type: "/umee.oracle.v1.PriceMissCounter";
    value: PriceMissCounterAmino;
}
/** PriceMissCounter is the validator's oracle price votes missing count. */
export interface PriceMissCounterSDKType {
    validator: string;
    miss_counter: bigint;
}
/**
 * QueryExgRatesWithTimestamp is the request type for the Query/ExchangeRatesWithTimestamp RPC
 * method.
 */
export interface QueryExgRatesWithTimestamp {
    /** denom defines the denomination to query for. */
    denom: string;
}
export interface QueryExgRatesWithTimestampProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryExgRatesWithTimestamp";
    value: Uint8Array;
}
/**
 * QueryExgRatesWithTimestamp is the request type for the Query/ExchangeRatesWithTimestamp RPC
 * method.
 */
export interface QueryExgRatesWithTimestampAmino {
    /** denom defines the denomination to query for. */
    denom?: string;
}
export interface QueryExgRatesWithTimestampAminoMsg {
    type: "/umee.oracle.v1.QueryExgRatesWithTimestamp";
    value: QueryExgRatesWithTimestampAmino;
}
/**
 * QueryExgRatesWithTimestamp is the request type for the Query/ExchangeRatesWithTimestamp RPC
 * method.
 */
export interface QueryExgRatesWithTimestampSDKType {
    denom: string;
}
/**
 * QueryExgRatesWithTimestampResponse is response type for the
 * Query/ExchangeRatesWithTimestamp RPC method.
 */
export interface QueryExgRatesWithTimestampResponse {
    /**
     * exchange_rates defines a list of the exchange rate for all whitelisted
     * denoms with timestamp
     */
    exgRates: DenomExchangeRate[];
}
export interface QueryExgRatesWithTimestampResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryExgRatesWithTimestampResponse";
    value: Uint8Array;
}
/**
 * QueryExgRatesWithTimestampResponse is response type for the
 * Query/ExchangeRatesWithTimestamp RPC method.
 */
export interface QueryExgRatesWithTimestampResponseAmino {
    /**
     * exchange_rates defines a list of the exchange rate for all whitelisted
     * denoms with timestamp
     */
    exg_rates?: DenomExchangeRateAmino[];
}
export interface QueryExgRatesWithTimestampResponseAminoMsg {
    type: "/umee.oracle.v1.QueryExgRatesWithTimestampResponse";
    value: QueryExgRatesWithTimestampResponseAmino;
}
/**
 * QueryExgRatesWithTimestampResponse is response type for the
 * Query/ExchangeRatesWithTimestamp RPC method.
 */
export interface QueryExgRatesWithTimestampResponseSDKType {
    exg_rates: DenomExchangeRateSDKType[];
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRates {
    /** denom defines the denomination to query for. */
    denom: string;
}
export interface QueryExchangeRatesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryExchangeRates";
    value: Uint8Array;
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRatesAmino {
    /** denom defines the denomination to query for. */
    denom?: string;
}
export interface QueryExchangeRatesAminoMsg {
    type: "/umee.oracle.v1.QueryExchangeRates";
    value: QueryExchangeRatesAmino;
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
export interface QueryExchangeRatesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse";
    value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseAmino {
    /**
     * exchange_rates defines a list of the exchange rate for all whitelisted
     * denoms.
     */
    exchange_rates?: DecCoinAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryExchangeRatesResponse";
    value: QueryExchangeRatesResponseAmino;
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
export interface QueryActiveExchangeRatesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates";
    value: Uint8Array;
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesAmino {
}
export interface QueryActiveExchangeRatesAminoMsg {
    type: "/umee.oracle.v1.QueryActiveExchangeRates";
    value: QueryActiveExchangeRatesAmino;
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
export interface QueryActiveExchangeRatesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse";
    value: Uint8Array;
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseAmino {
    /**
     * activeRates defines a list of the denomination which oracle prices agreed
     * upon.
     */
    active_rates?: string[];
}
export interface QueryActiveExchangeRatesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryActiveExchangeRatesResponse";
    value: QueryActiveExchangeRatesResponseAmino;
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
export interface QueryFeederDelegationProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegation";
    value: Uint8Array;
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryFeederDelegationAminoMsg {
    type: "/umee.oracle.v1.QueryFeederDelegation";
    value: QueryFeederDelegationAmino;
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
export interface QueryFeederDelegationResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse";
    value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseAmino {
    /** feeder_addr defines the feeder delegation of a validator */
    feeder_addr?: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
    type: "/umee.oracle.v1.QueryFeederDelegationResponse";
    value: QueryFeederDelegationResponseAmino;
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
export interface QueryMissCounterProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMissCounter";
    value: Uint8Array;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryMissCounterAminoMsg {
    type: "/umee.oracle.v1.QueryMissCounter";
    value: QueryMissCounterAmino;
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
    missCounter: bigint;
}
export interface QueryMissCounterResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMissCounterResponse";
    value: Uint8Array;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseAmino {
    /** miss_counter defines the oracle miss counter of a validator */
    miss_counter?: string;
}
export interface QueryMissCounterResponseAminoMsg {
    type: "/umee.oracle.v1.QueryMissCounterResponse";
    value: QueryMissCounterResponseAmino;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
    miss_counter: bigint;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindow {
}
export interface QuerySlashWindowProtoMsg {
    typeUrl: "/umee.oracle.v1.QuerySlashWindow";
    value: Uint8Array;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowAmino {
}
export interface QuerySlashWindowAminoMsg {
    type: "/umee.oracle.v1.QuerySlashWindow";
    value: QuerySlashWindowAmino;
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
    windowProgress: bigint;
}
export interface QuerySlashWindowResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse";
    value: Uint8Array;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseAmino {
    /**
     * window_progress defines the number of voting periods
     * since the last slashing event would have taken place.
     */
    window_progress?: string;
}
export interface QuerySlashWindowResponseAminoMsg {
    type: "/umee.oracle.v1.QuerySlashWindowResponse";
    value: QuerySlashWindowResponseAmino;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
    window_progress: bigint;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevote {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryAggregatePrevoteProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevote";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryAggregatePrevoteAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevote";
    value: QueryAggregatePrevoteAmino;
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
    aggregatePrevote: AggregateExchangeRatePrevote;
}
export interface QueryAggregatePrevoteResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseAmino {
    /**
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator
     * in the current vote period
     */
    aggregate_prevote?: AggregateExchangeRatePrevoteAmino;
}
export interface QueryAggregatePrevoteResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevoteResponse";
    value: QueryAggregatePrevoteResponseAmino;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
    aggregate_prevote: AggregateExchangeRatePrevoteSDKType;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotes {
}
export interface QueryAggregatePrevotesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesAmino {
}
export interface QueryAggregatePrevotesAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevotes";
    value: QueryAggregatePrevotesAmino;
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
export interface QueryAggregatePrevotesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseAmino {
    /**
     * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
     * current vote period
     */
    aggregate_prevotes?: AggregateExchangeRatePrevoteAmino[];
}
export interface QueryAggregatePrevotesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevotesResponse";
    value: QueryAggregatePrevotesResponseAmino;
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
export interface QueryAggregateVoteProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVote";
    value: Uint8Array;
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryAggregateVoteAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVote";
    value: QueryAggregateVoteAmino;
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
    aggregateVote: AggregateExchangeRateVote;
}
export interface QueryAggregateVoteResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse";
    value: Uint8Array;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseAmino {
    /**
     * aggregate_vote defines oracle aggregate vote submitted by a validator in
     * the current vote period
     */
    aggregate_vote?: AggregateExchangeRateVoteAmino;
}
export interface QueryAggregateVoteResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVoteResponse";
    value: QueryAggregateVoteResponseAmino;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
    aggregate_vote: AggregateExchangeRateVoteSDKType;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotes {
}
export interface QueryAggregateVotesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotes";
    value: Uint8Array;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesAmino {
}
export interface QueryAggregateVotesAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVotes";
    value: QueryAggregateVotesAmino;
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
export interface QueryAggregateVotesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse";
    value: Uint8Array;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseAmino {
    /**
     * aggregate_votes defines all oracle aggregate votes submitted in the current
     * vote period
     */
    aggregate_votes?: AggregateExchangeRateVoteAmino[];
}
export interface QueryAggregateVotesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVotesResponse";
    value: QueryAggregateVotesResponseAmino;
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
export interface QueryParamsProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryParams";
    value: Uint8Array;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsAmino {
}
export interface QueryParamsAminoMsg {
    type: "/umee.oracle.v1.QueryParams";
    value: QueryParamsAmino;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/umee.oracle.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
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
export interface QueryMediansProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMedians";
    value: Uint8Array;
}
/** QueryMedians is the request type for the Query/Medians RPC Response. */
export interface QueryMediansAmino {
    /** denom defines the denomination to query for. */
    denom?: string;
    /**
     * numStamps defines the number of median stamps to query for. numStamps
     * must be greater than 0.
     */
    numStamps?: number;
}
export interface QueryMediansAminoMsg {
    type: "/umee.oracle.v1.QueryMedians";
    value: QueryMediansAmino;
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
export interface QueryMediansResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMediansResponse";
    value: Uint8Array;
}
/**
 * QueryMediansResponse is response type for the
 * Query/Medians RPC method.
 */
export interface QueryMediansResponseAmino {
    /** medians defines a list of the medians for all stamped denoms. */
    medians?: PriceAmino[];
}
export interface QueryMediansResponseAminoMsg {
    type: "/umee.oracle.v1.QueryMediansResponse";
    value: QueryMediansResponseAmino;
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
export interface QueryMedianDeviationsProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMedianDeviations";
    value: Uint8Array;
}
/** QueryMedianDeviations is the request type for the Query/MedianDeviations RPC Response. */
export interface QueryMedianDeviationsAmino {
    /** denom defines the denomination to query for. */
    denom?: string;
}
export interface QueryMedianDeviationsAminoMsg {
    type: "/umee.oracle.v1.QueryMedianDeviations";
    value: QueryMedianDeviationsAmino;
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
export interface QueryMedianDeviationsResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMedianDeviationsResponse";
    value: Uint8Array;
}
/**
 * QueryMedianDeviationsResponse is response type for the
 * Query/MedianDeviations RPC method.
 */
export interface QueryMedianDeviationsResponseAmino {
    /** medians defines a list of the median deviations for all stamped denoms. */
    medianDeviations?: PriceAmino[];
}
export interface QueryMedianDeviationsResponseAminoMsg {
    type: "/umee.oracle.v1.QueryMedianDeviationsResponse";
    value: QueryMedianDeviationsResponseAmino;
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
export interface QueryAvgPriceProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAvgPrice";
    value: Uint8Array;
}
/** QueryAvgPrice is a request type for AvgPrice method */
export interface QueryAvgPriceAmino {
    denom?: string;
}
export interface QueryAvgPriceAminoMsg {
    type: "/umee.oracle.v1.QueryAvgPrice";
    value: QueryAvgPriceAmino;
}
/** QueryAvgPrice is a request type for AvgPrice method */
export interface QueryAvgPriceSDKType {
    denom: string;
}
/** QueryAvgPriceResponse is a response type for AvgPrice method */
export interface QueryAvgPriceResponse {
    price: string;
}
export interface QueryAvgPriceResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAvgPriceResponse";
    value: Uint8Array;
}
/** QueryAvgPriceResponse is a response type for AvgPrice method */
export interface QueryAvgPriceResponseAmino {
    price?: string;
}
export interface QueryAvgPriceResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAvgPriceResponse";
    value: QueryAvgPriceResponseAmino;
}
/** QueryAvgPriceResponse is a response type for AvgPrice method */
export interface QueryAvgPriceResponseSDKType {
    price: string;
}
export declare const QueryMissCounters: {
    typeUrl: string;
    encode(message: QueryMissCounters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissCounters;
    fromPartial(object: Partial<QueryMissCounters>): QueryMissCounters;
    fromAmino(object: QueryMissCountersAmino): QueryMissCounters;
    toAmino(message: QueryMissCounters): QueryMissCountersAmino;
    fromAminoMsg(object: QueryMissCountersAminoMsg): QueryMissCounters;
    fromProtoMsg(message: QueryMissCountersProtoMsg): QueryMissCounters;
    toProto(message: QueryMissCounters): Uint8Array;
    toProtoMsg(message: QueryMissCounters): QueryMissCountersProtoMsg;
};
export declare const QueryMissCountersResponse: {
    typeUrl: string;
    encode(message: QueryMissCountersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissCountersResponse;
    fromPartial(object: Partial<QueryMissCountersResponse>): QueryMissCountersResponse;
    fromAmino(object: QueryMissCountersResponseAmino): QueryMissCountersResponse;
    toAmino(message: QueryMissCountersResponse): QueryMissCountersResponseAmino;
    fromAminoMsg(object: QueryMissCountersResponseAminoMsg): QueryMissCountersResponse;
    fromProtoMsg(message: QueryMissCountersResponseProtoMsg): QueryMissCountersResponse;
    toProto(message: QueryMissCountersResponse): Uint8Array;
    toProtoMsg(message: QueryMissCountersResponse): QueryMissCountersResponseProtoMsg;
};
export declare const PriceMissCounter: {
    typeUrl: string;
    encode(message: PriceMissCounter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceMissCounter;
    fromPartial(object: Partial<PriceMissCounter>): PriceMissCounter;
    fromAmino(object: PriceMissCounterAmino): PriceMissCounter;
    toAmino(message: PriceMissCounter): PriceMissCounterAmino;
    fromAminoMsg(object: PriceMissCounterAminoMsg): PriceMissCounter;
    fromProtoMsg(message: PriceMissCounterProtoMsg): PriceMissCounter;
    toProto(message: PriceMissCounter): Uint8Array;
    toProtoMsg(message: PriceMissCounter): PriceMissCounterProtoMsg;
};
export declare const QueryExgRatesWithTimestamp: {
    typeUrl: string;
    encode(message: QueryExgRatesWithTimestamp, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExgRatesWithTimestamp;
    fromPartial(object: Partial<QueryExgRatesWithTimestamp>): QueryExgRatesWithTimestamp;
    fromAmino(object: QueryExgRatesWithTimestampAmino): QueryExgRatesWithTimestamp;
    toAmino(message: QueryExgRatesWithTimestamp): QueryExgRatesWithTimestampAmino;
    fromAminoMsg(object: QueryExgRatesWithTimestampAminoMsg): QueryExgRatesWithTimestamp;
    fromProtoMsg(message: QueryExgRatesWithTimestampProtoMsg): QueryExgRatesWithTimestamp;
    toProto(message: QueryExgRatesWithTimestamp): Uint8Array;
    toProtoMsg(message: QueryExgRatesWithTimestamp): QueryExgRatesWithTimestampProtoMsg;
};
export declare const QueryExgRatesWithTimestampResponse: {
    typeUrl: string;
    encode(message: QueryExgRatesWithTimestampResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExgRatesWithTimestampResponse;
    fromPartial(object: Partial<QueryExgRatesWithTimestampResponse>): QueryExgRatesWithTimestampResponse;
    fromAmino(object: QueryExgRatesWithTimestampResponseAmino): QueryExgRatesWithTimestampResponse;
    toAmino(message: QueryExgRatesWithTimestampResponse): QueryExgRatesWithTimestampResponseAmino;
    fromAminoMsg(object: QueryExgRatesWithTimestampResponseAminoMsg): QueryExgRatesWithTimestampResponse;
    fromProtoMsg(message: QueryExgRatesWithTimestampResponseProtoMsg): QueryExgRatesWithTimestampResponse;
    toProto(message: QueryExgRatesWithTimestampResponse): Uint8Array;
    toProtoMsg(message: QueryExgRatesWithTimestampResponse): QueryExgRatesWithTimestampResponseProtoMsg;
};
export declare const QueryExchangeRates: {
    typeUrl: string;
    encode(message: QueryExchangeRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExchangeRates;
    fromPartial(object: Partial<QueryExchangeRates>): QueryExchangeRates;
    fromAmino(object: QueryExchangeRatesAmino): QueryExchangeRates;
    toAmino(message: QueryExchangeRates): QueryExchangeRatesAmino;
    fromAminoMsg(object: QueryExchangeRatesAminoMsg): QueryExchangeRates;
    fromProtoMsg(message: QueryExchangeRatesProtoMsg): QueryExchangeRates;
    toProto(message: QueryExchangeRates): Uint8Array;
    toProtoMsg(message: QueryExchangeRates): QueryExchangeRatesProtoMsg;
};
export declare const QueryExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExchangeRatesResponse;
    fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
    fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse;
    toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse;
    fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse;
    toProto(message: QueryExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg;
};
export declare const QueryActiveExchangeRates: {
    typeUrl: string;
    encode(_: QueryActiveExchangeRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryActiveExchangeRates;
    fromPartial(_: Partial<QueryActiveExchangeRates>): QueryActiveExchangeRates;
    fromAmino(_: QueryActiveExchangeRatesAmino): QueryActiveExchangeRates;
    toAmino(_: QueryActiveExchangeRates): QueryActiveExchangeRatesAmino;
    fromAminoMsg(object: QueryActiveExchangeRatesAminoMsg): QueryActiveExchangeRates;
    fromProtoMsg(message: QueryActiveExchangeRatesProtoMsg): QueryActiveExchangeRates;
    toProto(message: QueryActiveExchangeRates): Uint8Array;
    toProtoMsg(message: QueryActiveExchangeRates): QueryActiveExchangeRatesProtoMsg;
};
export declare const QueryActiveExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryActiveExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActiveExchangeRatesResponse;
    fromPartial(object: Partial<QueryActiveExchangeRatesResponse>): QueryActiveExchangeRatesResponse;
    fromAmino(object: QueryActiveExchangeRatesResponseAmino): QueryActiveExchangeRatesResponse;
    toAmino(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryActiveExchangeRatesResponseAminoMsg): QueryActiveExchangeRatesResponse;
    fromProtoMsg(message: QueryActiveExchangeRatesResponseProtoMsg): QueryActiveExchangeRatesResponse;
    toProto(message: QueryActiveExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseProtoMsg;
};
export declare const QueryFeederDelegation: {
    typeUrl: string;
    encode(message: QueryFeederDelegation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeederDelegation;
    fromPartial(object: Partial<QueryFeederDelegation>): QueryFeederDelegation;
    fromAmino(object: QueryFeederDelegationAmino): QueryFeederDelegation;
    toAmino(message: QueryFeederDelegation): QueryFeederDelegationAmino;
    fromAminoMsg(object: QueryFeederDelegationAminoMsg): QueryFeederDelegation;
    fromProtoMsg(message: QueryFeederDelegationProtoMsg): QueryFeederDelegation;
    toProto(message: QueryFeederDelegation): Uint8Array;
    toProtoMsg(message: QueryFeederDelegation): QueryFeederDelegationProtoMsg;
};
export declare const QueryFeederDelegationResponse: {
    typeUrl: string;
    encode(message: QueryFeederDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeederDelegationResponse;
    fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
    fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse;
    toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino;
    fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse;
    fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse;
    toProto(message: QueryFeederDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg;
};
export declare const QueryMissCounter: {
    typeUrl: string;
    encode(message: QueryMissCounter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissCounter;
    fromPartial(object: Partial<QueryMissCounter>): QueryMissCounter;
    fromAmino(object: QueryMissCounterAmino): QueryMissCounter;
    toAmino(message: QueryMissCounter): QueryMissCounterAmino;
    fromAminoMsg(object: QueryMissCounterAminoMsg): QueryMissCounter;
    fromProtoMsg(message: QueryMissCounterProtoMsg): QueryMissCounter;
    toProto(message: QueryMissCounter): Uint8Array;
    toProtoMsg(message: QueryMissCounter): QueryMissCounterProtoMsg;
};
export declare const QueryMissCounterResponse: {
    typeUrl: string;
    encode(message: QueryMissCounterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissCounterResponse;
    fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse;
    fromAmino(object: QueryMissCounterResponseAmino): QueryMissCounterResponse;
    toAmino(message: QueryMissCounterResponse): QueryMissCounterResponseAmino;
    fromAminoMsg(object: QueryMissCounterResponseAminoMsg): QueryMissCounterResponse;
    fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse;
    toProto(message: QueryMissCounterResponse): Uint8Array;
    toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg;
};
export declare const QuerySlashWindow: {
    typeUrl: string;
    encode(_: QuerySlashWindow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QuerySlashWindow;
    fromPartial(_: Partial<QuerySlashWindow>): QuerySlashWindow;
    fromAmino(_: QuerySlashWindowAmino): QuerySlashWindow;
    toAmino(_: QuerySlashWindow): QuerySlashWindowAmino;
    fromAminoMsg(object: QuerySlashWindowAminoMsg): QuerySlashWindow;
    fromProtoMsg(message: QuerySlashWindowProtoMsg): QuerySlashWindow;
    toProto(message: QuerySlashWindow): Uint8Array;
    toProtoMsg(message: QuerySlashWindow): QuerySlashWindowProtoMsg;
};
export declare const QuerySlashWindowResponse: {
    typeUrl: string;
    encode(message: QuerySlashWindowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySlashWindowResponse;
    fromPartial(object: Partial<QuerySlashWindowResponse>): QuerySlashWindowResponse;
    fromAmino(object: QuerySlashWindowResponseAmino): QuerySlashWindowResponse;
    toAmino(message: QuerySlashWindowResponse): QuerySlashWindowResponseAmino;
    fromAminoMsg(object: QuerySlashWindowResponseAminoMsg): QuerySlashWindowResponse;
    fromProtoMsg(message: QuerySlashWindowResponseProtoMsg): QuerySlashWindowResponse;
    toProto(message: QuerySlashWindowResponse): Uint8Array;
    toProtoMsg(message: QuerySlashWindowResponse): QuerySlashWindowResponseProtoMsg;
};
export declare const QueryAggregatePrevote: {
    typeUrl: string;
    encode(message: QueryAggregatePrevote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregatePrevote;
    fromPartial(object: Partial<QueryAggregatePrevote>): QueryAggregatePrevote;
    fromAmino(object: QueryAggregatePrevoteAmino): QueryAggregatePrevote;
    toAmino(message: QueryAggregatePrevote): QueryAggregatePrevoteAmino;
    fromAminoMsg(object: QueryAggregatePrevoteAminoMsg): QueryAggregatePrevote;
    fromProtoMsg(message: QueryAggregatePrevoteProtoMsg): QueryAggregatePrevote;
    toProto(message: QueryAggregatePrevote): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevote): QueryAggregatePrevoteProtoMsg;
};
export declare const QueryAggregatePrevoteResponse: {
    typeUrl: string;
    encode(message: QueryAggregatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregatePrevoteResponse;
    fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse;
    fromAmino(object: QueryAggregatePrevoteResponseAmino): QueryAggregatePrevoteResponse;
    toAmino(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseAmino;
    fromAminoMsg(object: QueryAggregatePrevoteResponseAminoMsg): QueryAggregatePrevoteResponse;
    fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse;
    toProto(message: QueryAggregatePrevoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg;
};
export declare const QueryAggregatePrevotes: {
    typeUrl: string;
    encode(_: QueryAggregatePrevotes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAggregatePrevotes;
    fromPartial(_: Partial<QueryAggregatePrevotes>): QueryAggregatePrevotes;
    fromAmino(_: QueryAggregatePrevotesAmino): QueryAggregatePrevotes;
    toAmino(_: QueryAggregatePrevotes): QueryAggregatePrevotesAmino;
    fromAminoMsg(object: QueryAggregatePrevotesAminoMsg): QueryAggregatePrevotes;
    fromProtoMsg(message: QueryAggregatePrevotesProtoMsg): QueryAggregatePrevotes;
    toProto(message: QueryAggregatePrevotes): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotes): QueryAggregatePrevotesProtoMsg;
};
export declare const QueryAggregatePrevotesResponse: {
    typeUrl: string;
    encode(message: QueryAggregatePrevotesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregatePrevotesResponse;
    fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse;
    fromAmino(object: QueryAggregatePrevotesResponseAmino): QueryAggregatePrevotesResponse;
    toAmino(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseAmino;
    fromAminoMsg(object: QueryAggregatePrevotesResponseAminoMsg): QueryAggregatePrevotesResponse;
    fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse;
    toProto(message: QueryAggregatePrevotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg;
};
export declare const QueryAggregateVote: {
    typeUrl: string;
    encode(message: QueryAggregateVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVote;
    fromPartial(object: Partial<QueryAggregateVote>): QueryAggregateVote;
    fromAmino(object: QueryAggregateVoteAmino): QueryAggregateVote;
    toAmino(message: QueryAggregateVote): QueryAggregateVoteAmino;
    fromAminoMsg(object: QueryAggregateVoteAminoMsg): QueryAggregateVote;
    fromProtoMsg(message: QueryAggregateVoteProtoMsg): QueryAggregateVote;
    toProto(message: QueryAggregateVote): Uint8Array;
    toProtoMsg(message: QueryAggregateVote): QueryAggregateVoteProtoMsg;
};
export declare const QueryAggregateVoteResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVoteResponse;
    fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse;
    fromAmino(object: QueryAggregateVoteResponseAmino): QueryAggregateVoteResponse;
    toAmino(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseAmino;
    fromAminoMsg(object: QueryAggregateVoteResponseAminoMsg): QueryAggregateVoteResponse;
    fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse;
    toProto(message: QueryAggregateVoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg;
};
export declare const QueryAggregateVotes: {
    typeUrl: string;
    encode(_: QueryAggregateVotes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAggregateVotes;
    fromPartial(_: Partial<QueryAggregateVotes>): QueryAggregateVotes;
    fromAmino(_: QueryAggregateVotesAmino): QueryAggregateVotes;
    toAmino(_: QueryAggregateVotes): QueryAggregateVotesAmino;
    fromAminoMsg(object: QueryAggregateVotesAminoMsg): QueryAggregateVotes;
    fromProtoMsg(message: QueryAggregateVotesProtoMsg): QueryAggregateVotes;
    toProto(message: QueryAggregateVotes): Uint8Array;
    toProtoMsg(message: QueryAggregateVotes): QueryAggregateVotesProtoMsg;
};
export declare const QueryAggregateVotesResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVotesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVotesResponse;
    fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse;
    fromAmino(object: QueryAggregateVotesResponseAmino): QueryAggregateVotesResponse;
    toAmino(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseAmino;
    fromAminoMsg(object: QueryAggregateVotesResponseAminoMsg): QueryAggregateVotesResponse;
    fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse;
    toProto(message: QueryAggregateVotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg;
};
export declare const QueryParams: {
    typeUrl: string;
    encode(_: QueryParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
    fromAmino(_: QueryParamsAmino): QueryParams;
    toAmino(_: QueryParams): QueryParamsAmino;
    fromAminoMsg(object: QueryParamsAminoMsg): QueryParams;
    fromProtoMsg(message: QueryParamsProtoMsg): QueryParams;
    toProto(message: QueryParams): Uint8Array;
    toProtoMsg(message: QueryParams): QueryParamsProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryMedians: {
    typeUrl: string;
    encode(message: QueryMedians, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMedians;
    fromPartial(object: Partial<QueryMedians>): QueryMedians;
    fromAmino(object: QueryMediansAmino): QueryMedians;
    toAmino(message: QueryMedians): QueryMediansAmino;
    fromAminoMsg(object: QueryMediansAminoMsg): QueryMedians;
    fromProtoMsg(message: QueryMediansProtoMsg): QueryMedians;
    toProto(message: QueryMedians): Uint8Array;
    toProtoMsg(message: QueryMedians): QueryMediansProtoMsg;
};
export declare const QueryMediansResponse: {
    typeUrl: string;
    encode(message: QueryMediansResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMediansResponse;
    fromPartial(object: Partial<QueryMediansResponse>): QueryMediansResponse;
    fromAmino(object: QueryMediansResponseAmino): QueryMediansResponse;
    toAmino(message: QueryMediansResponse): QueryMediansResponseAmino;
    fromAminoMsg(object: QueryMediansResponseAminoMsg): QueryMediansResponse;
    fromProtoMsg(message: QueryMediansResponseProtoMsg): QueryMediansResponse;
    toProto(message: QueryMediansResponse): Uint8Array;
    toProtoMsg(message: QueryMediansResponse): QueryMediansResponseProtoMsg;
};
export declare const QueryMedianDeviations: {
    typeUrl: string;
    encode(message: QueryMedianDeviations, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMedianDeviations;
    fromPartial(object: Partial<QueryMedianDeviations>): QueryMedianDeviations;
    fromAmino(object: QueryMedianDeviationsAmino): QueryMedianDeviations;
    toAmino(message: QueryMedianDeviations): QueryMedianDeviationsAmino;
    fromAminoMsg(object: QueryMedianDeviationsAminoMsg): QueryMedianDeviations;
    fromProtoMsg(message: QueryMedianDeviationsProtoMsg): QueryMedianDeviations;
    toProto(message: QueryMedianDeviations): Uint8Array;
    toProtoMsg(message: QueryMedianDeviations): QueryMedianDeviationsProtoMsg;
};
export declare const QueryMedianDeviationsResponse: {
    typeUrl: string;
    encode(message: QueryMedianDeviationsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMedianDeviationsResponse;
    fromPartial(object: Partial<QueryMedianDeviationsResponse>): QueryMedianDeviationsResponse;
    fromAmino(object: QueryMedianDeviationsResponseAmino): QueryMedianDeviationsResponse;
    toAmino(message: QueryMedianDeviationsResponse): QueryMedianDeviationsResponseAmino;
    fromAminoMsg(object: QueryMedianDeviationsResponseAminoMsg): QueryMedianDeviationsResponse;
    fromProtoMsg(message: QueryMedianDeviationsResponseProtoMsg): QueryMedianDeviationsResponse;
    toProto(message: QueryMedianDeviationsResponse): Uint8Array;
    toProtoMsg(message: QueryMedianDeviationsResponse): QueryMedianDeviationsResponseProtoMsg;
};
export declare const QueryAvgPrice: {
    typeUrl: string;
    encode(message: QueryAvgPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAvgPrice;
    fromPartial(object: Partial<QueryAvgPrice>): QueryAvgPrice;
    fromAmino(object: QueryAvgPriceAmino): QueryAvgPrice;
    toAmino(message: QueryAvgPrice): QueryAvgPriceAmino;
    fromAminoMsg(object: QueryAvgPriceAminoMsg): QueryAvgPrice;
    fromProtoMsg(message: QueryAvgPriceProtoMsg): QueryAvgPrice;
    toProto(message: QueryAvgPrice): Uint8Array;
    toProtoMsg(message: QueryAvgPrice): QueryAvgPriceProtoMsg;
};
export declare const QueryAvgPriceResponse: {
    typeUrl: string;
    encode(message: QueryAvgPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAvgPriceResponse;
    fromPartial(object: Partial<QueryAvgPriceResponse>): QueryAvgPriceResponse;
    fromAmino(object: QueryAvgPriceResponseAmino): QueryAvgPriceResponse;
    toAmino(message: QueryAvgPriceResponse): QueryAvgPriceResponseAmino;
    fromAminoMsg(object: QueryAvgPriceResponseAminoMsg): QueryAvgPriceResponse;
    fromProtoMsg(message: QueryAvgPriceResponseProtoMsg): QueryAvgPriceResponse;
    toProto(message: QueryAvgPriceResponse): Uint8Array;
    toProtoMsg(message: QueryAvgPriceResponse): QueryAvgPriceResponseProtoMsg;
};
