import { BinaryWriter } from "../../../binary";
/**
 * Params defines the parameters for the oracle module.
 * https://classic-docs.terra.money/docs/develop/module-specifications/spec-oracle.html#parameters
 */
export interface Params {
    votePeriod: bigint;
    voteThreshold: string;
    rewardBand: string;
    rewardDistributionWindow: bigint;
    acceptList: Denom[];
    slashFraction: string;
    slashWindow: bigint;
    minValidPerWindow: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.Params";
    value: Uint8Array;
}
/**
 * Params defines the parameters for the oracle module.
 * https://classic-docs.terra.money/docs/develop/module-specifications/spec-oracle.html#parameters
 */
export interface ParamsAmino {
    vote_period?: string;
    vote_threshold?: string;
    reward_band?: string;
    reward_distribution_window?: string;
    accept_list?: DenomAmino[];
    slash_fraction?: string;
    slash_window?: string;
    min_valid_per_window?: string;
}
export interface ParamsAminoMsg {
    type: "/persistence.oracle.v1beta1.Params";
    value: ParamsAmino;
}
/**
 * Params defines the parameters for the oracle module.
 * https://classic-docs.terra.money/docs/develop/module-specifications/spec-oracle.html#parameters
 */
export interface ParamsSDKType {
    vote_period: bigint;
    vote_threshold: string;
    reward_band: string;
    reward_distribution_window: bigint;
    accept_list: DenomSDKType[];
    slash_fraction: string;
    slash_window: bigint;
    min_valid_per_window: string;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
    baseDenom: string;
    symbolDenom: string;
    exponent: number;
}
export interface DenomProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.Denom";
    value: Uint8Array;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomAmino {
    base_denom?: string;
    symbol_denom?: string;
    exponent?: number;
}
export interface DenomAminoMsg {
    type: "/persistence.oracle.v1beta1.Denom";
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
    typeUrl: "/persistence.oracle.v1beta1.AggregateExchangeRatePrevote";
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
    hash?: string;
    voter?: string;
    submit_block?: string;
}
export interface AggregateExchangeRatePrevoteAminoMsg {
    type: "/persistence.oracle.v1beta1.AggregateExchangeRatePrevote";
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
    typeUrl: "/persistence.oracle.v1beta1.AggregateExchangeRateVote";
    value: Uint8Array;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVoteAmino {
    exchange_rate_tuples?: ExchangeRateTupleAmino[];
    voter?: string;
}
export interface AggregateExchangeRateVoteAminoMsg {
    type: "/persistence.oracle.v1beta1.AggregateExchangeRateVote";
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
    typeUrl: "/persistence.oracle.v1beta1.ExchangeRateTuple";
    value: Uint8Array;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleAmino {
    denom?: string;
    exchange_rate?: string;
}
export interface ExchangeRateTupleAminoMsg {
    type: "/persistence.oracle.v1beta1.ExchangeRateTuple";
    value: ExchangeRateTupleAmino;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleSDKType {
    denom: string;
    exchange_rate: string;
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
