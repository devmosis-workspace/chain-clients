import { DenomExchangeRate, DenomExchangeRateAmino, DenomExchangeRateSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Price, PriceAmino, PriceSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
export interface QueryActiveExchangeRates {}
export interface QueryActiveExchangeRatesProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates";
  value: Uint8Array;
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesAmino {}
export interface QueryActiveExchangeRatesAminoMsg {
  type: "/umee.oracle.v1.QueryActiveExchangeRates";
  value: QueryActiveExchangeRatesAmino;
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesSDKType {}
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
export interface QuerySlashWindow {}
export interface QuerySlashWindowProtoMsg {
  typeUrl: "/umee.oracle.v1.QuerySlashWindow";
  value: Uint8Array;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowAmino {}
export interface QuerySlashWindowAminoMsg {
  type: "/umee.oracle.v1.QuerySlashWindow";
  value: QuerySlashWindowAmino;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowSDKType {}
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
export interface QueryAggregatePrevotes {}
export interface QueryAggregatePrevotesProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesAmino {}
export interface QueryAggregatePrevotesAminoMsg {
  type: "/umee.oracle.v1.QueryAggregatePrevotes";
  value: QueryAggregatePrevotesAmino;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesSDKType {}
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
export interface QueryAggregateVotes {}
export interface QueryAggregateVotesProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryAggregateVotes";
  value: Uint8Array;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesAmino {}
export interface QueryAggregateVotesAminoMsg {
  type: "/umee.oracle.v1.QueryAggregateVotes";
  value: QueryAggregateVotesAmino;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesSDKType {}
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
export interface QueryParams {}
export interface QueryParamsProtoMsg {
  typeUrl: "/umee.oracle.v1.QueryParams";
  value: Uint8Array;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsAmino {}
export interface QueryParamsAminoMsg {
  type: "/umee.oracle.v1.QueryParams";
  value: QueryParamsAmino;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsSDKType {}
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
function createBaseQueryMissCounters(): QueryMissCounters {
  return {
    validator: ""
  };
}
export const QueryMissCounters = {
  typeUrl: "/umee.oracle.v1.QueryMissCounters",
  encode(message: QueryMissCounters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCounters {
    return {
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<QueryMissCounters>): QueryMissCounters {
    const message = createBaseQueryMissCounters();
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: QueryMissCountersAmino): QueryMissCounters {
    const message = createBaseQueryMissCounters();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: QueryMissCounters): QueryMissCountersAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: QueryMissCountersAminoMsg): QueryMissCounters {
    return QueryMissCounters.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCountersProtoMsg): QueryMissCounters {
    return QueryMissCounters.decode(message.value);
  },
  toProto(message: QueryMissCounters): Uint8Array {
    return QueryMissCounters.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounters): QueryMissCountersProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMissCounters",
      value: QueryMissCounters.encode(message).finish()
    };
  }
};
function createBaseQueryMissCountersResponse(): QueryMissCountersResponse {
  return {
    missCounters: []
  };
}
export const QueryMissCountersResponse = {
  typeUrl: "/umee.oracle.v1.QueryMissCountersResponse",
  encode(message: QueryMissCountersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.missCounters) {
      PriceMissCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCountersResponse {
    return {
      missCounters: Array.isArray(object?.missCounters) ? object.missCounters.map((e: any) => PriceMissCounter.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMissCountersResponse>): QueryMissCountersResponse {
    const message = createBaseQueryMissCountersResponse();
    message.missCounters = object.missCounters?.map(e => PriceMissCounter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMissCountersResponseAmino): QueryMissCountersResponse {
    const message = createBaseQueryMissCountersResponse();
    message.missCounters = object.miss_counters?.map(e => PriceMissCounter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMissCountersResponse): QueryMissCountersResponseAmino {
    const obj: any = {};
    if (message.missCounters) {
      obj.miss_counters = message.missCounters.map(e => e ? PriceMissCounter.toAmino(e) : undefined);
    } else {
      obj.miss_counters = message.missCounters;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMissCountersResponseAminoMsg): QueryMissCountersResponse {
    return QueryMissCountersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCountersResponseProtoMsg): QueryMissCountersResponse {
    return QueryMissCountersResponse.decode(message.value);
  },
  toProto(message: QueryMissCountersResponse): Uint8Array {
    return QueryMissCountersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCountersResponse): QueryMissCountersResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMissCountersResponse",
      value: QueryMissCountersResponse.encode(message).finish()
    };
  }
};
function createBasePriceMissCounter(): PriceMissCounter {
  return {
    validator: "",
    missCounter: BigInt(0)
  };
}
export const PriceMissCounter = {
  typeUrl: "/umee.oracle.v1.PriceMissCounter",
  encode(message: PriceMissCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(16).uint64(message.missCounter);
    }
    return writer;
  },
  fromJSON(object: any): PriceMissCounter {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PriceMissCounter>): PriceMissCounter {
    const message = createBasePriceMissCounter();
    message.validator = object.validator ?? "";
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceMissCounterAmino): PriceMissCounter {
    const message = createBasePriceMissCounter();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    return message;
  },
  toAmino(message: PriceMissCounter): PriceMissCounterAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.miss_counter = message.missCounter !== BigInt(0) ? message.missCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PriceMissCounterAminoMsg): PriceMissCounter {
    return PriceMissCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceMissCounterProtoMsg): PriceMissCounter {
    return PriceMissCounter.decode(message.value);
  },
  toProto(message: PriceMissCounter): Uint8Array {
    return PriceMissCounter.encode(message).finish();
  },
  toProtoMsg(message: PriceMissCounter): PriceMissCounterProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.PriceMissCounter",
      value: PriceMissCounter.encode(message).finish()
    };
  }
};
function createBaseQueryExgRatesWithTimestamp(): QueryExgRatesWithTimestamp {
  return {
    denom: ""
  };
}
export const QueryExgRatesWithTimestamp = {
  typeUrl: "/umee.oracle.v1.QueryExgRatesWithTimestamp",
  encode(message: QueryExgRatesWithTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryExgRatesWithTimestamp {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryExgRatesWithTimestamp>): QueryExgRatesWithTimestamp {
    const message = createBaseQueryExgRatesWithTimestamp();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryExgRatesWithTimestampAmino): QueryExgRatesWithTimestamp {
    const message = createBaseQueryExgRatesWithTimestamp();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryExgRatesWithTimestamp): QueryExgRatesWithTimestampAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryExgRatesWithTimestampAminoMsg): QueryExgRatesWithTimestamp {
    return QueryExgRatesWithTimestamp.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExgRatesWithTimestampProtoMsg): QueryExgRatesWithTimestamp {
    return QueryExgRatesWithTimestamp.decode(message.value);
  },
  toProto(message: QueryExgRatesWithTimestamp): Uint8Array {
    return QueryExgRatesWithTimestamp.encode(message).finish();
  },
  toProtoMsg(message: QueryExgRatesWithTimestamp): QueryExgRatesWithTimestampProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryExgRatesWithTimestamp",
      value: QueryExgRatesWithTimestamp.encode(message).finish()
    };
  }
};
function createBaseQueryExgRatesWithTimestampResponse(): QueryExgRatesWithTimestampResponse {
  return {
    exgRates: []
  };
}
export const QueryExgRatesWithTimestampResponse = {
  typeUrl: "/umee.oracle.v1.QueryExgRatesWithTimestampResponse",
  encode(message: QueryExgRatesWithTimestampResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exgRates) {
      DenomExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryExgRatesWithTimestampResponse {
    return {
      exgRates: Array.isArray(object?.exgRates) ? object.exgRates.map((e: any) => DenomExchangeRate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryExgRatesWithTimestampResponse>): QueryExgRatesWithTimestampResponse {
    const message = createBaseQueryExgRatesWithTimestampResponse();
    message.exgRates = object.exgRates?.map(e => DenomExchangeRate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryExgRatesWithTimestampResponseAmino): QueryExgRatesWithTimestampResponse {
    const message = createBaseQueryExgRatesWithTimestampResponse();
    message.exgRates = object.exg_rates?.map(e => DenomExchangeRate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExgRatesWithTimestampResponse): QueryExgRatesWithTimestampResponseAmino {
    const obj: any = {};
    if (message.exgRates) {
      obj.exg_rates = message.exgRates.map(e => e ? DenomExchangeRate.toAmino(e) : undefined);
    } else {
      obj.exg_rates = message.exgRates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExgRatesWithTimestampResponseAminoMsg): QueryExgRatesWithTimestampResponse {
    return QueryExgRatesWithTimestampResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExgRatesWithTimestampResponseProtoMsg): QueryExgRatesWithTimestampResponse {
    return QueryExgRatesWithTimestampResponse.decode(message.value);
  },
  toProto(message: QueryExgRatesWithTimestampResponse): Uint8Array {
    return QueryExgRatesWithTimestampResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExgRatesWithTimestampResponse): QueryExgRatesWithTimestampResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryExgRatesWithTimestampResponse",
      value: QueryExgRatesWithTimestampResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRates(): QueryExchangeRates {
  return {
    denom: ""
  };
}
export const QueryExchangeRates = {
  typeUrl: "/umee.oracle.v1.QueryExchangeRates",
  encode(message: QueryExchangeRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeRates {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryExchangeRates>): QueryExchangeRates {
    const message = createBaseQueryExchangeRates();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryExchangeRatesAmino): QueryExchangeRates {
    const message = createBaseQueryExchangeRates();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryExchangeRates): QueryExchangeRatesAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesAminoMsg): QueryExchangeRates {
    return QueryExchangeRates.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesProtoMsg): QueryExchangeRates {
    return QueryExchangeRates.decode(message.value);
  },
  toProto(message: QueryExchangeRates): Uint8Array {
    return QueryExchangeRates.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRates): QueryExchangeRatesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryExchangeRates",
      value: QueryExchangeRates.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    exchangeRates: []
  };
}
export const QueryExchangeRatesResponse = {
  typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
  encode(message: QueryExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeRatesResponse {
    return {
      exchangeRates: Array.isArray(object?.exchangeRates) ? object.exchangeRates.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchange_rates?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchange_rates = message.exchangeRates.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.exchange_rates = message.exchangeRates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRatesResponse): Uint8Array {
    return QueryExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
      value: QueryExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveExchangeRates(): QueryActiveExchangeRates {
  return {};
}
export const QueryActiveExchangeRates = {
  typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
  encode(_: QueryActiveExchangeRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryActiveExchangeRates {
    return {};
  },
  fromPartial(_: Partial<QueryActiveExchangeRates>): QueryActiveExchangeRates {
    const message = createBaseQueryActiveExchangeRates();
    return message;
  },
  fromAmino(_: QueryActiveExchangeRatesAmino): QueryActiveExchangeRates {
    const message = createBaseQueryActiveExchangeRates();
    return message;
  },
  toAmino(_: QueryActiveExchangeRates): QueryActiveExchangeRatesAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActiveExchangeRatesAminoMsg): QueryActiveExchangeRates {
    return QueryActiveExchangeRates.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveExchangeRatesProtoMsg): QueryActiveExchangeRates {
    return QueryActiveExchangeRates.decode(message.value);
  },
  toProto(message: QueryActiveExchangeRates): Uint8Array {
    return QueryActiveExchangeRates.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveExchangeRates): QueryActiveExchangeRatesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
      value: QueryActiveExchangeRates.encode(message).finish()
    };
  }
};
function createBaseQueryActiveExchangeRatesResponse(): QueryActiveExchangeRatesResponse {
  return {
    activeRates: []
  };
}
export const QueryActiveExchangeRatesResponse = {
  typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
  encode(message: QueryActiveExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.activeRates) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryActiveExchangeRatesResponse {
    return {
      activeRates: Array.isArray(object?.activeRates) ? object.activeRates.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryActiveExchangeRatesResponse>): QueryActiveExchangeRatesResponse {
    const message = createBaseQueryActiveExchangeRatesResponse();
    message.activeRates = object.activeRates?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryActiveExchangeRatesResponseAmino): QueryActiveExchangeRatesResponse {
    const message = createBaseQueryActiveExchangeRatesResponse();
    message.activeRates = object.active_rates?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.activeRates) {
      obj.active_rates = message.activeRates.map(e => e);
    } else {
      obj.active_rates = message.activeRates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActiveExchangeRatesResponseAminoMsg): QueryActiveExchangeRatesResponse {
    return QueryActiveExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveExchangeRatesResponseProtoMsg): QueryActiveExchangeRatesResponse {
    return QueryActiveExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryActiveExchangeRatesResponse): Uint8Array {
    return QueryActiveExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
      value: QueryActiveExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegation(): QueryFeederDelegation {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegation = {
  typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
  encode(message: QueryFeederDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryFeederDelegation {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryFeederDelegation>): QueryFeederDelegation {
    const message = createBaseQueryFeederDelegation();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryFeederDelegationAmino): QueryFeederDelegation {
    const message = createBaseQueryFeederDelegation();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegation): QueryFeederDelegationAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationAminoMsg): QueryFeederDelegation {
    return QueryFeederDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationProtoMsg): QueryFeederDelegation {
    return QueryFeederDelegation.decode(message.value);
  },
  toProto(message: QueryFeederDelegation): Uint8Array {
    return QueryFeederDelegation.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegation): QueryFeederDelegationProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
      value: QueryFeederDelegation.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
  encode(message: QueryFeederDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryFeederDelegationResponse {
    return {
      feederAddr: isSet(object.feederAddr) ? String(object.feederAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? "";
    return message;
  },
  fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
      message.feederAddr = object.feeder_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino {
    const obj: any = {};
    obj.feeder_addr = message.feederAddr === "" ? undefined : message.feederAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.decode(message.value);
  },
  toProto(message: QueryFeederDelegationResponse): Uint8Array {
    return QueryFeederDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
      value: QueryFeederDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMissCounter(): QueryMissCounter {
  return {
    validatorAddr: ""
  };
}
export const QueryMissCounter = {
  typeUrl: "/umee.oracle.v1.QueryMissCounter",
  encode(message: QueryMissCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCounter {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryMissCounter>): QueryMissCounter {
    const message = createBaseQueryMissCounter();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryMissCounterAmino): QueryMissCounter {
    const message = createBaseQueryMissCounter();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryMissCounter): QueryMissCounterAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryMissCounterAminoMsg): QueryMissCounter {
    return QueryMissCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCounterProtoMsg): QueryMissCounter {
    return QueryMissCounter.decode(message.value);
  },
  toProto(message: QueryMissCounter): Uint8Array {
    return QueryMissCounter.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounter): QueryMissCounterProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMissCounter",
      value: QueryMissCounter.encode(message).finish()
    };
  }
};
function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return {
    missCounter: BigInt(0)
  };
}
export const QueryMissCounterResponse = {
  typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
  encode(message: QueryMissCounterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCounterResponse {
    return {
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMissCounterResponseAmino): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    return message;
  },
  toAmino(message: QueryMissCounterResponse): QueryMissCounterResponseAmino {
    const obj: any = {};
    obj.miss_counter = message.missCounter !== BigInt(0) ? message.missCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMissCounterResponseAminoMsg): QueryMissCounterResponse {
    return QueryMissCounterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse {
    return QueryMissCounterResponse.decode(message.value);
  },
  toProto(message: QueryMissCounterResponse): Uint8Array {
    return QueryMissCounterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
      value: QueryMissCounterResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindow(): QuerySlashWindow {
  return {};
}
export const QuerySlashWindow = {
  typeUrl: "/umee.oracle.v1.QuerySlashWindow",
  encode(_: QuerySlashWindow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QuerySlashWindow {
    return {};
  },
  fromPartial(_: Partial<QuerySlashWindow>): QuerySlashWindow {
    const message = createBaseQuerySlashWindow();
    return message;
  },
  fromAmino(_: QuerySlashWindowAmino): QuerySlashWindow {
    const message = createBaseQuerySlashWindow();
    return message;
  },
  toAmino(_: QuerySlashWindow): QuerySlashWindowAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowAminoMsg): QuerySlashWindow {
    return QuerySlashWindow.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowProtoMsg): QuerySlashWindow {
    return QuerySlashWindow.decode(message.value);
  },
  toProto(message: QuerySlashWindow): Uint8Array {
    return QuerySlashWindow.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindow): QuerySlashWindowProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QuerySlashWindow",
      value: QuerySlashWindow.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindowResponse(): QuerySlashWindowResponse {
  return {
    windowProgress: BigInt(0)
  };
}
export const QuerySlashWindowResponse = {
  typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
  encode(message: QuerySlashWindowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.windowProgress !== BigInt(0)) {
      writer.uint32(8).uint64(message.windowProgress);
    }
    return writer;
  },
  fromJSON(object: any): QuerySlashWindowResponse {
    return {
      windowProgress: isSet(object.windowProgress) ? BigInt(object.windowProgress.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QuerySlashWindowResponse>): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? BigInt(object.windowProgress.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySlashWindowResponseAmino): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    if (object.window_progress !== undefined && object.window_progress !== null) {
      message.windowProgress = BigInt(object.window_progress);
    }
    return message;
  },
  toAmino(message: QuerySlashWindowResponse): QuerySlashWindowResponseAmino {
    const obj: any = {};
    obj.window_progress = message.windowProgress !== BigInt(0) ? message.windowProgress.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowResponseAminoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowResponseProtoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.decode(message.value);
  },
  toProto(message: QuerySlashWindowResponse): Uint8Array {
    return QuerySlashWindowResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowResponse): QuerySlashWindowResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
      value: QuerySlashWindowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevote(): QueryAggregatePrevote {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregatePrevote = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
  encode(message: QueryAggregatePrevote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregatePrevote {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregatePrevote>): QueryAggregatePrevote {
    const message = createBaseQueryAggregatePrevote();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryAggregatePrevoteAmino): QueryAggregatePrevote {
    const message = createBaseQueryAggregatePrevote();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAggregatePrevote): QueryAggregatePrevoteAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevoteAminoMsg): QueryAggregatePrevote {
    return QueryAggregatePrevote.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevoteProtoMsg): QueryAggregatePrevote {
    return QueryAggregatePrevote.decode(message.value);
  },
  toProto(message: QueryAggregatePrevote): Uint8Array {
    return QueryAggregatePrevote.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevote): QueryAggregatePrevoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
      value: QueryAggregatePrevote.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return {
    aggregatePrevote: AggregateExchangeRatePrevote.fromPartial({})
  };
}
export const QueryAggregatePrevoteResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
  encode(message: QueryAggregatePrevoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregatePrevoteResponse {
    return {
      aggregatePrevote: isSet(object.aggregatePrevote) ? AggregateExchangeRatePrevote.fromJSON(object.aggregatePrevote) : undefined
    };
  },
  fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    message.aggregatePrevote = object.aggregatePrevote !== undefined && object.aggregatePrevote !== null ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote) : undefined;
    return message;
  },
  fromAmino(object: QueryAggregatePrevoteResponseAmino): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromAmino(object.aggregate_prevote);
    }
    return message;
  },
  toAmino(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseAmino {
    const obj: any = {};
    obj.aggregate_prevote = message.aggregatePrevote ? AggregateExchangeRatePrevote.toAmino(message.aggregatePrevote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevoteResponseAminoMsg): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteResponse): Uint8Array {
    return QueryAggregatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
      value: QueryAggregatePrevoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevotes(): QueryAggregatePrevotes {
  return {};
}
export const QueryAggregatePrevotes = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
  encode(_: QueryAggregatePrevotes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAggregatePrevotes {
    return {};
  },
  fromPartial(_: Partial<QueryAggregatePrevotes>): QueryAggregatePrevotes {
    const message = createBaseQueryAggregatePrevotes();
    return message;
  },
  fromAmino(_: QueryAggregatePrevotesAmino): QueryAggregatePrevotes {
    const message = createBaseQueryAggregatePrevotes();
    return message;
  },
  toAmino(_: QueryAggregatePrevotes): QueryAggregatePrevotesAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevotesAminoMsg): QueryAggregatePrevotes {
    return QueryAggregatePrevotes.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevotesProtoMsg): QueryAggregatePrevotes {
    return QueryAggregatePrevotes.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotes): Uint8Array {
    return QueryAggregatePrevotes.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotes): QueryAggregatePrevotesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
      value: QueryAggregatePrevotes.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return {
    aggregatePrevotes: []
  };
}
export const QueryAggregatePrevotesResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
  encode(message: QueryAggregatePrevotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregatePrevotesResponse {
    return {
      aggregatePrevotes: Array.isArray(object?.aggregatePrevotes) ? object.aggregatePrevotes.map((e: any) => AggregateExchangeRatePrevote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAggregatePrevotesResponseAmino): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregate_prevotes?.map(e => AggregateExchangeRatePrevote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseAmino {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregate_prevotes = message.aggregatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toAmino(e) : undefined);
    } else {
      obj.aggregate_prevotes = message.aggregatePrevotes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevotesResponseAminoMsg): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesResponse): Uint8Array {
    return QueryAggregatePrevotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
      value: QueryAggregatePrevotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVote(): QueryAggregateVote {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregateVote = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVote",
  encode(message: QueryAggregateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVote {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregateVote>): QueryAggregateVote {
    const message = createBaseQueryAggregateVote();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryAggregateVoteAmino): QueryAggregateVote {
    const message = createBaseQueryAggregateVote();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAggregateVote): QueryAggregateVoteAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVoteAminoMsg): QueryAggregateVote {
    return QueryAggregateVote.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVoteProtoMsg): QueryAggregateVote {
    return QueryAggregateVote.decode(message.value);
  },
  toProto(message: QueryAggregateVote): Uint8Array {
    return QueryAggregateVote.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVote): QueryAggregateVoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVote",
      value: QueryAggregateVote.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return {
    aggregateVote: AggregateExchangeRateVote.fromPartial({})
  };
}
export const QueryAggregateVoteResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
  encode(message: QueryAggregateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVoteResponse {
    return {
      aggregateVote: isSet(object.aggregateVote) ? AggregateExchangeRateVote.fromJSON(object.aggregateVote) : undefined
    };
  },
  fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    message.aggregateVote = object.aggregateVote !== undefined && object.aggregateVote !== null ? AggregateExchangeRateVote.fromPartial(object.aggregateVote) : undefined;
    return message;
  },
  fromAmino(object: QueryAggregateVoteResponseAmino): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromAmino(object.aggregate_vote);
    }
    return message;
  },
  toAmino(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseAmino {
    const obj: any = {};
    obj.aggregate_vote = message.aggregateVote ? AggregateExchangeRateVote.toAmino(message.aggregateVote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVoteResponseAminoMsg): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVoteResponse): Uint8Array {
    return QueryAggregateVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
      value: QueryAggregateVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVotes(): QueryAggregateVotes {
  return {};
}
export const QueryAggregateVotes = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
  encode(_: QueryAggregateVotes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAggregateVotes {
    return {};
  },
  fromPartial(_: Partial<QueryAggregateVotes>): QueryAggregateVotes {
    const message = createBaseQueryAggregateVotes();
    return message;
  },
  fromAmino(_: QueryAggregateVotesAmino): QueryAggregateVotes {
    const message = createBaseQueryAggregateVotes();
    return message;
  },
  toAmino(_: QueryAggregateVotes): QueryAggregateVotesAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVotesAminoMsg): QueryAggregateVotes {
    return QueryAggregateVotes.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVotesProtoMsg): QueryAggregateVotes {
    return QueryAggregateVotes.decode(message.value);
  },
  toProto(message: QueryAggregateVotes): Uint8Array {
    return QueryAggregateVotes.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotes): QueryAggregateVotesProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
      value: QueryAggregateVotes.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return {
    aggregateVotes: []
  };
}
export const QueryAggregateVotesResponse = {
  typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
  encode(message: QueryAggregateVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVotesResponse {
    return {
      aggregateVotes: Array.isArray(object?.aggregateVotes) ? object.aggregateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAggregateVotesResponseAmino): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseAmino {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregate_votes = message.aggregateVotes.map(e => e ? AggregateExchangeRateVote.toAmino(e) : undefined);
    } else {
      obj.aggregate_votes = message.aggregateVotes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVotesResponseAminoMsg): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVotesResponse): Uint8Array {
    return QueryAggregateVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
      value: QueryAggregateVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  typeUrl: "/umee.oracle.v1.QueryParams",
  encode(_: QueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  fromAmino(_: QueryParamsAmino): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  toAmino(_: QueryParams): QueryParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsAminoMsg): QueryParams {
    return QueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsProtoMsg): QueryParams {
    return QueryParams.decode(message.value);
  },
  toProto(message: QueryParams): Uint8Array {
    return QueryParams.encode(message).finish();
  },
  toProtoMsg(message: QueryParams): QueryParamsProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryParams",
      value: QueryParams.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/umee.oracle.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMedians(): QueryMedians {
  return {
    denom: "",
    numStamps: 0
  };
}
export const QueryMedians = {
  typeUrl: "/umee.oracle.v1.QueryMedians",
  encode(message: QueryMedians, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.numStamps !== 0) {
      writer.uint32(16).uint32(message.numStamps);
    }
    return writer;
  },
  fromJSON(object: any): QueryMedians {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      numStamps: isSet(object.numStamps) ? Number(object.numStamps) : 0
    };
  },
  fromPartial(object: Partial<QueryMedians>): QueryMedians {
    const message = createBaseQueryMedians();
    message.denom = object.denom ?? "";
    message.numStamps = object.numStamps ?? 0;
    return message;
  },
  fromAmino(object: QueryMediansAmino): QueryMedians {
    const message = createBaseQueryMedians();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.numStamps !== undefined && object.numStamps !== null) {
      message.numStamps = object.numStamps;
    }
    return message;
  },
  toAmino(message: QueryMedians): QueryMediansAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.numStamps = message.numStamps === 0 ? undefined : message.numStamps;
    return obj;
  },
  fromAminoMsg(object: QueryMediansAminoMsg): QueryMedians {
    return QueryMedians.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMediansProtoMsg): QueryMedians {
    return QueryMedians.decode(message.value);
  },
  toProto(message: QueryMedians): Uint8Array {
    return QueryMedians.encode(message).finish();
  },
  toProtoMsg(message: QueryMedians): QueryMediansProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMedians",
      value: QueryMedians.encode(message).finish()
    };
  }
};
function createBaseQueryMediansResponse(): QueryMediansResponse {
  return {
    medians: []
  };
}
export const QueryMediansResponse = {
  typeUrl: "/umee.oracle.v1.QueryMediansResponse",
  encode(message: QueryMediansResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.medians) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMediansResponse {
    return {
      medians: Array.isArray(object?.medians) ? object.medians.map((e: any) => Price.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMediansResponse>): QueryMediansResponse {
    const message = createBaseQueryMediansResponse();
    message.medians = object.medians?.map(e => Price.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMediansResponseAmino): QueryMediansResponse {
    const message = createBaseQueryMediansResponse();
    message.medians = object.medians?.map(e => Price.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMediansResponse): QueryMediansResponseAmino {
    const obj: any = {};
    if (message.medians) {
      obj.medians = message.medians.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.medians = message.medians;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMediansResponseAminoMsg): QueryMediansResponse {
    return QueryMediansResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMediansResponseProtoMsg): QueryMediansResponse {
    return QueryMediansResponse.decode(message.value);
  },
  toProto(message: QueryMediansResponse): Uint8Array {
    return QueryMediansResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMediansResponse): QueryMediansResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMediansResponse",
      value: QueryMediansResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMedianDeviations(): QueryMedianDeviations {
  return {
    denom: ""
  };
}
export const QueryMedianDeviations = {
  typeUrl: "/umee.oracle.v1.QueryMedianDeviations",
  encode(message: QueryMedianDeviations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryMedianDeviations {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryMedianDeviations>): QueryMedianDeviations {
    const message = createBaseQueryMedianDeviations();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryMedianDeviationsAmino): QueryMedianDeviations {
    const message = createBaseQueryMedianDeviations();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryMedianDeviations): QueryMedianDeviationsAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryMedianDeviationsAminoMsg): QueryMedianDeviations {
    return QueryMedianDeviations.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMedianDeviationsProtoMsg): QueryMedianDeviations {
    return QueryMedianDeviations.decode(message.value);
  },
  toProto(message: QueryMedianDeviations): Uint8Array {
    return QueryMedianDeviations.encode(message).finish();
  },
  toProtoMsg(message: QueryMedianDeviations): QueryMedianDeviationsProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMedianDeviations",
      value: QueryMedianDeviations.encode(message).finish()
    };
  }
};
function createBaseQueryMedianDeviationsResponse(): QueryMedianDeviationsResponse {
  return {
    medianDeviations: []
  };
}
export const QueryMedianDeviationsResponse = {
  typeUrl: "/umee.oracle.v1.QueryMedianDeviationsResponse",
  encode(message: QueryMedianDeviationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.medianDeviations) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMedianDeviationsResponse {
    return {
      medianDeviations: Array.isArray(object?.medianDeviations) ? object.medianDeviations.map((e: any) => Price.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMedianDeviationsResponse>): QueryMedianDeviationsResponse {
    const message = createBaseQueryMedianDeviationsResponse();
    message.medianDeviations = object.medianDeviations?.map(e => Price.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMedianDeviationsResponseAmino): QueryMedianDeviationsResponse {
    const message = createBaseQueryMedianDeviationsResponse();
    message.medianDeviations = object.medianDeviations?.map(e => Price.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMedianDeviationsResponse): QueryMedianDeviationsResponseAmino {
    const obj: any = {};
    if (message.medianDeviations) {
      obj.medianDeviations = message.medianDeviations.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.medianDeviations = message.medianDeviations;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMedianDeviationsResponseAminoMsg): QueryMedianDeviationsResponse {
    return QueryMedianDeviationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMedianDeviationsResponseProtoMsg): QueryMedianDeviationsResponse {
    return QueryMedianDeviationsResponse.decode(message.value);
  },
  toProto(message: QueryMedianDeviationsResponse): Uint8Array {
    return QueryMedianDeviationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMedianDeviationsResponse): QueryMedianDeviationsResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryMedianDeviationsResponse",
      value: QueryMedianDeviationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAvgPrice(): QueryAvgPrice {
  return {
    denom: ""
  };
}
export const QueryAvgPrice = {
  typeUrl: "/umee.oracle.v1.QueryAvgPrice",
  encode(message: QueryAvgPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryAvgPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryAvgPrice>): QueryAvgPrice {
    const message = createBaseQueryAvgPrice();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAvgPriceAmino): QueryAvgPrice {
    const message = createBaseQueryAvgPrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryAvgPrice): QueryAvgPriceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAvgPriceAminoMsg): QueryAvgPrice {
    return QueryAvgPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAvgPriceProtoMsg): QueryAvgPrice {
    return QueryAvgPrice.decode(message.value);
  },
  toProto(message: QueryAvgPrice): Uint8Array {
    return QueryAvgPrice.encode(message).finish();
  },
  toProtoMsg(message: QueryAvgPrice): QueryAvgPriceProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAvgPrice",
      value: QueryAvgPrice.encode(message).finish()
    };
  }
};
function createBaseQueryAvgPriceResponse(): QueryAvgPriceResponse {
  return {
    price: ""
  };
}
export const QueryAvgPriceResponse = {
  typeUrl: "/umee.oracle.v1.QueryAvgPriceResponse",
  encode(message: QueryAvgPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryAvgPriceResponse {
    return {
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<QueryAvgPriceResponse>): QueryAvgPriceResponse {
    const message = createBaseQueryAvgPriceResponse();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: QueryAvgPriceResponseAmino): QueryAvgPriceResponse {
    const message = createBaseQueryAvgPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: QueryAvgPriceResponse): QueryAvgPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: QueryAvgPriceResponseAminoMsg): QueryAvgPriceResponse {
    return QueryAvgPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAvgPriceResponseProtoMsg): QueryAvgPriceResponse {
    return QueryAvgPriceResponse.decode(message.value);
  },
  toProto(message: QueryAvgPriceResponse): Uint8Array {
    return QueryAvgPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAvgPriceResponse): QueryAvgPriceResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.QueryAvgPriceResponse",
      value: QueryAvgPriceResponse.encode(message).finish()
    };
  }
};