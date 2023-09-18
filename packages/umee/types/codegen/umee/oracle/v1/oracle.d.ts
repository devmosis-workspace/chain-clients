import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the oracle module. */
export interface Params {
    votePeriod: bigint;
    voteThreshold: string;
    rewardBand: string;
    rewardDistributionWindow: bigint;
    acceptList: Denom[];
    slashFraction: string;
    slashWindow: bigint;
    minValidPerWindow: string;
    /**
     * Historic Stamp Period represents the amount of blocks the oracle
     * module waits before recording a new historic price.
     */
    historicStampPeriod: bigint;
    /**
     * Median Stamp Period represents the amount blocks the oracle module
     * waits between calculating and stamping a new median and standard
     * deviation of that median.
     */
    medianStampPeriod: bigint;
    /**
     * Maximum Price Stamps represents the maximum amount of historic prices
     * the oracle module will store before pruning via FIFO.
     */
    maximumPriceStamps: bigint;
    /**
     * Maximum Median Stamps represents the maximum amount of medians the
     * oracle module will store before pruning via FIFO.
     */
    maximumMedianStamps: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/umee.oracle.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
    vote_period: string;
    vote_threshold: string;
    reward_band: string;
    reward_distribution_window: string;
    accept_list: DenomAmino[];
    slash_fraction: string;
    slash_window: string;
    min_valid_per_window: string;
    /**
     * Historic Stamp Period represents the amount of blocks the oracle
     * module waits before recording a new historic price.
     */
    historic_stamp_period: string;
    /**
     * Median Stamp Period represents the amount blocks the oracle module
     * waits between calculating and stamping a new median and standard
     * deviation of that median.
     */
    median_stamp_period: string;
    /**
     * Maximum Price Stamps represents the maximum amount of historic prices
     * the oracle module will store before pruning via FIFO.
     */
    maximum_price_stamps: string;
    /**
     * Maximum Median Stamps represents the maximum amount of medians the
     * oracle module will store before pruning via FIFO.
     */
    maximum_median_stamps: string;
}
export interface ParamsAminoMsg {
    type: "/umee.oracle.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
    vote_period: bigint;
    vote_threshold: string;
    reward_band: string;
    reward_distribution_window: bigint;
    accept_list: DenomSDKType[];
    slash_fraction: string;
    slash_window: bigint;
    min_valid_per_window: string;
    historic_stamp_period: bigint;
    median_stamp_period: bigint;
    maximum_price_stamps: bigint;
    maximum_median_stamps: bigint;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
    baseDenom: string;
    symbolDenom: string;
    exponent: number;
}
export interface DenomProtoMsg {
    typeUrl: "/umee.oracle.v1.Denom";
    value: Uint8Array;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomAmino {
    base_denom: string;
    symbol_denom: string;
    exponent: number;
}
export interface DenomAminoMsg {
    type: "/umee.oracle.v1.Denom";
    value: DenomAmino;
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
    submitBlock: bigint;
}
export interface AggregateExchangeRatePrevoteProtoMsg {
    typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote";
    value: Uint8Array;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteAmino {
    hash: string;
    voter: string;
    submit_block: string;
}
export interface AggregateExchangeRatePrevoteAminoMsg {
    type: "/umee.oracle.v1.AggregateExchangeRatePrevote";
    value: AggregateExchangeRatePrevoteAmino;
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
    submit_block: bigint;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVote {
    exchangeRateTuples: ExchangeRateTuple[];
    voter: string;
}
export interface AggregateExchangeRateVoteProtoMsg {
    typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote";
    value: Uint8Array;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVoteAmino {
    exchange_rate_tuples: ExchangeRateTupleAmino[];
    voter: string;
}
export interface AggregateExchangeRateVoteAminoMsg {
    type: "/umee.oracle.v1.AggregateExchangeRateVote";
    value: AggregateExchangeRateVoteAmino;
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
export interface ExchangeRateTupleProtoMsg {
    typeUrl: "/umee.oracle.v1.ExchangeRateTuple";
    value: Uint8Array;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleAmino {
    denom: string;
    exchange_rate: string;
}
export interface ExchangeRateTupleAminoMsg {
    type: "/umee.oracle.v1.ExchangeRateTuple";
    value: ExchangeRateTupleAmino;
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
    start: Timestamp;
}
export interface AvgCounterProtoMsg {
    typeUrl: "/umee.oracle.v1.AvgCounter";
    value: Uint8Array;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterAmino {
    /** sum of prices in the counter */
    sum: string;
    /** number of aggregated prices in the counter */
    num: number;
    /** Unix timestamp when the first price was aggregated in the counter */
    start?: TimestampAmino;
}
export interface AvgCounterAminoMsg {
    type: "/umee.oracle.v1.AvgCounter";
    value: AvgCounterAmino;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterSDKType {
    sum: string;
    num: number;
    start: TimestampSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Denom: {
    typeUrl: string;
    encode(message: Denom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Denom;
    fromPartial(object: Partial<Denom>): Denom;
    fromAmino(object: DenomAmino): Denom;
    toAmino(message: Denom): DenomAmino;
    fromAminoMsg(object: DenomAminoMsg): Denom;
    fromProtoMsg(message: DenomProtoMsg): Denom;
    toProto(message: Denom): Uint8Array;
    toProtoMsg(message: Denom): DenomProtoMsg;
};
export declare const AggregateExchangeRatePrevote: {
    typeUrl: string;
    encode(message: AggregateExchangeRatePrevote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AggregateExchangeRatePrevote;
    fromPartial(object: Partial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote;
    fromAmino(object: AggregateExchangeRatePrevoteAmino): AggregateExchangeRatePrevote;
    toAmino(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteAmino;
    fromAminoMsg(object: AggregateExchangeRatePrevoteAminoMsg): AggregateExchangeRatePrevote;
    fromProtoMsg(message: AggregateExchangeRatePrevoteProtoMsg): AggregateExchangeRatePrevote;
    toProto(message: AggregateExchangeRatePrevote): Uint8Array;
    toProtoMsg(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteProtoMsg;
};
export declare const AggregateExchangeRateVote: {
    typeUrl: string;
    encode(message: AggregateExchangeRateVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AggregateExchangeRateVote;
    fromPartial(object: Partial<AggregateExchangeRateVote>): AggregateExchangeRateVote;
    fromAmino(object: AggregateExchangeRateVoteAmino): AggregateExchangeRateVote;
    toAmino(message: AggregateExchangeRateVote): AggregateExchangeRateVoteAmino;
    fromAminoMsg(object: AggregateExchangeRateVoteAminoMsg): AggregateExchangeRateVote;
    fromProtoMsg(message: AggregateExchangeRateVoteProtoMsg): AggregateExchangeRateVote;
    toProto(message: AggregateExchangeRateVote): Uint8Array;
    toProtoMsg(message: AggregateExchangeRateVote): AggregateExchangeRateVoteProtoMsg;
};
export declare const ExchangeRateTuple: {
    typeUrl: string;
    encode(message: ExchangeRateTuple, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExchangeRateTuple;
    fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple;
    fromAmino(object: ExchangeRateTupleAmino): ExchangeRateTuple;
    toAmino(message: ExchangeRateTuple): ExchangeRateTupleAmino;
    fromAminoMsg(object: ExchangeRateTupleAminoMsg): ExchangeRateTuple;
    fromProtoMsg(message: ExchangeRateTupleProtoMsg): ExchangeRateTuple;
    toProto(message: ExchangeRateTuple): Uint8Array;
    toProtoMsg(message: ExchangeRateTuple): ExchangeRateTupleProtoMsg;
};
export declare const AvgCounter: {
    typeUrl: string;
    encode(message: AvgCounter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AvgCounter;
    fromPartial(object: Partial<AvgCounter>): AvgCounter;
    fromAmino(object: AvgCounterAmino): AvgCounter;
    toAmino(message: AvgCounter): AvgCounterAmino;
    fromAminoMsg(object: AvgCounterAminoMsg): AvgCounter;
    fromProtoMsg(message: AvgCounterProtoMsg): AvgCounter;
    toProto(message: AvgCounter): Uint8Array;
    toProtoMsg(message: AvgCounter): AvgCounterProtoMsg;
};
