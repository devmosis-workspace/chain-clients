import { Params, ParamsAmino, ParamsSDKType, DenomExchangeRate, DenomExchangeRateAmino, DenomExchangeRateSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, AvgCounterParams, AvgCounterParamsAmino, AvgCounterParamsSDKType, ExchangeRateTuple, ExchangeRateTupleAmino, ExchangeRateTupleSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params;
    feederDelegations: FeederDelegation[];
    exchangeRates: DenomExchangeRate[];
    missCounters: MissCounter[];
    aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
    medians: Price[];
    historicPrices: Price[];
    medianDeviations: Price[];
    /** Historic Avg Counter params */
    avgCounterParams: AvgCounterParams;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.oracle.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    feeder_delegations?: FeederDelegationAmino[];
    exchange_rates?: DenomExchangeRateAmino[];
    miss_counters?: MissCounterAmino[];
    aggregate_exchange_rate_prevotes?: AggregateExchangeRatePrevoteAmino[];
    aggregate_exchange_rate_votes?: AggregateExchangeRateVoteAmino[];
    medians?: PriceAmino[];
    historic_prices?: PriceAmino[];
    medianDeviations?: PriceAmino[];
    /** Historic Avg Counter params */
    avg_counter_params?: AvgCounterParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/umee.oracle.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    feeder_delegations: FeederDelegationSDKType[];
    exchange_rates: DenomExchangeRateSDKType[];
    miss_counters: MissCounterSDKType[];
    aggregate_exchange_rate_prevotes: AggregateExchangeRatePrevoteSDKType[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVoteSDKType[];
    medians: PriceSDKType[];
    historic_prices: PriceSDKType[];
    medianDeviations: PriceSDKType[];
    avg_counter_params: AvgCounterParamsSDKType;
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegation {
    feederAddress: string;
    validatorAddress: string;
}
export interface FeederDelegationProtoMsg {
    typeUrl: "/umee.oracle.v1.FeederDelegation";
    value: Uint8Array;
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegationAmino {
    feeder_address?: string;
    validator_address?: string;
}
export interface FeederDelegationAminoMsg {
    type: "/umee.oracle.v1.FeederDelegation";
    value: FeederDelegationAmino;
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegationSDKType {
    feeder_address: string;
    validator_address: string;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounter {
    validatorAddress: string;
    missCounter: bigint;
}
export interface MissCounterProtoMsg {
    typeUrl: "/umee.oracle.v1.MissCounter";
    value: Uint8Array;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounterAmino {
    validator_address?: string;
    miss_counter?: string;
}
export interface MissCounterAminoMsg {
    type: "/umee.oracle.v1.MissCounter";
    value: MissCounterAmino;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounterSDKType {
    validator_address: string;
    miss_counter: bigint;
}
/** Price is an instance of a price "stamp" */
export interface Price {
    exchangeRateTuple: ExchangeRateTuple;
    blockNum: bigint;
}
export interface PriceProtoMsg {
    typeUrl: "/umee.oracle.v1.Price";
    value: Uint8Array;
}
/** Price is an instance of a price "stamp" */
export interface PriceAmino {
    exchange_rate_tuple?: ExchangeRateTupleAmino;
    block_num?: string;
}
export interface PriceAminoMsg {
    type: "/umee.oracle.v1.Price";
    value: PriceAmino;
}
/** Price is an instance of a price "stamp" */
export interface PriceSDKType {
    exchange_rate_tuple: ExchangeRateTupleSDKType;
    block_num: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const FeederDelegation: {
    typeUrl: string;
    encode(message: FeederDelegation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeederDelegation;
    fromPartial(object: Partial<FeederDelegation>): FeederDelegation;
    fromAmino(object: FeederDelegationAmino): FeederDelegation;
    toAmino(message: FeederDelegation): FeederDelegationAmino;
    fromAminoMsg(object: FeederDelegationAminoMsg): FeederDelegation;
    fromProtoMsg(message: FeederDelegationProtoMsg): FeederDelegation;
    toProto(message: FeederDelegation): Uint8Array;
    toProtoMsg(message: FeederDelegation): FeederDelegationProtoMsg;
};
export declare const MissCounter: {
    typeUrl: string;
    encode(message: MissCounter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MissCounter;
    fromPartial(object: Partial<MissCounter>): MissCounter;
    fromAmino(object: MissCounterAmino): MissCounter;
    toAmino(message: MissCounter): MissCounterAmino;
    fromAminoMsg(object: MissCounterAminoMsg): MissCounter;
    fromProtoMsg(message: MissCounterProtoMsg): MissCounter;
    toProto(message: MissCounter): Uint8Array;
    toProtoMsg(message: MissCounter): MissCounterProtoMsg;
};
export declare const Price: {
    typeUrl: string;
    encode(message: Price, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Price;
    fromPartial(object: Partial<Price>): Price;
    fromAmino(object: PriceAmino): Price;
    toAmino(message: Price): PriceAmino;
    fromAminoMsg(object: PriceAminoMsg): Price;
    fromProtoMsg(message: PriceProtoMsg): Price;
    toProto(message: Price): Uint8Array;
    toProtoMsg(message: Price): PriceProtoMsg;
};
