import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the oracle module. */
export interface Params {
    votePeriod: Long;
    voteThreshold: string;
    rewardBand: string;
    rewardDistributionWindow: Long;
    acceptList: Denom[];
    slashFraction: string;
    slashWindow: Long;
    minValidPerWindow: string;
    /**
     * Historic Stamp Period represents the amount of blocks the oracle
     * module waits before recording a new historic price.
     */
    historicStampPeriod: Long;
    /**
     * Median Stamp Period represents the amount blocks the oracle module
     * waits between calculating and stamping a new median and standard
     * deviation of that median.
     */
    medianStampPeriod: Long;
    /**
     * Maximum Price Stamps represents the maximum amount of historic prices
     * the oracle module will store before pruning via FIFO.
     */
    maximumPriceStamps: Long;
    /**
     * Maximum Median Stamps represents the maximum amount of medians the
     * oracle module will store before pruning via FIFO.
     */
    maximumMedianStamps: Long;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
    vote_period: Long;
    vote_threshold: string;
    reward_band: string;
    reward_distribution_window: Long;
    accept_list: DenomSDKType[];
    slash_fraction: string;
    slash_window: Long;
    min_valid_per_window: string;
    historic_stamp_period: Long;
    median_stamp_period: Long;
    maximum_price_stamps: Long;
    maximum_median_stamps: Long;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
    baseDenom: string;
    symbolDenom: string;
    exponent: number;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomSDKType {
    base_denom: string;
    symbol_denom: string;
    exponent: number;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
    hash: string;
    voter: string;
    submitBlock: Long;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteSDKType {
    hash: string;
    voter: string;
    submit_block: Long;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVote {
    exchangeRateTuples: ExchangeRateTuple[];
    voter: string;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVoteSDKType {
    exchange_rate_tuples: ExchangeRateTupleSDKType[];
    voter: string;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
    denom: string;
    exchangeRate: string;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleSDKType {
    denom: string;
    exchange_rate: string;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounter {
    /** sum of prices in the counter */
    sum: string;
    /** number of aggregated prices in the counter */
    num: number;
    /** Unix timestamp when the first price was aggregated in the counter */
    start?: Timestamp;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterSDKType {
    sum: string;
    num: number;
    start?: TimestampSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Denom: {
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Denom;
    fromPartial(object: Partial<Denom>): Denom;
};
export declare const AggregateExchangeRatePrevote: {
    encode(message: AggregateExchangeRatePrevote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AggregateExchangeRatePrevote;
    fromPartial(object: Partial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote;
};
export declare const AggregateExchangeRateVote: {
    encode(message: AggregateExchangeRateVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AggregateExchangeRateVote;
    fromPartial(object: Partial<AggregateExchangeRateVote>): AggregateExchangeRateVote;
};
export declare const ExchangeRateTuple: {
    encode(message: ExchangeRateTuple, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExchangeRateTuple;
    fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple;
};
export declare const AvgCounter: {
    encode(message: AvgCounter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AvgCounter;
    fromPartial(object: Partial<AvgCounter>): AvgCounter;
};
