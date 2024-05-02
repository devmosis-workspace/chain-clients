import { Params, ParamsAmino, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleAmino, ExchangeRateTupleSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params;
    feederDelegations: FeederDelegation[];
    exchangeRates: ExchangeRateTuple[];
    missCounters: MissCounter[];
    aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
    tobinTaxes: TobinTax[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    feeder_delegations?: FeederDelegationAmino[];
    exchange_rates?: ExchangeRateTupleAmino[];
    miss_counters?: MissCounterAmino[];
    aggregate_exchange_rate_prevotes?: AggregateExchangeRatePrevoteAmino[];
    aggregate_exchange_rate_votes?: AggregateExchangeRateVoteAmino[];
    tobin_taxes?: TobinTaxAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/terra.oracle.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    feeder_delegations: FeederDelegationSDKType[];
    exchange_rates: ExchangeRateTupleSDKType[];
    miss_counters: MissCounterSDKType[];
    aggregate_exchange_rate_prevotes: AggregateExchangeRatePrevoteSDKType[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVoteSDKType[];
    tobin_taxes: TobinTaxSDKType[];
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
    typeUrl: "/terra.oracle.v1beta1.FeederDelegation";
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
    type: "/terra.oracle.v1beta1.FeederDelegation";
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
    typeUrl: "/terra.oracle.v1beta1.MissCounter";
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
    type: "/terra.oracle.v1beta1.MissCounter";
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
/**
 * TobinTax defines an denom and tobin_tax pair used in
 * oracle module's genesis state
 */
export interface TobinTax {
    denom: string;
    tobinTax: string;
}
export interface TobinTaxProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.TobinTax";
    value: Uint8Array;
}
/**
 * TobinTax defines an denom and tobin_tax pair used in
 * oracle module's genesis state
 */
export interface TobinTaxAmino {
    denom?: string;
    tobin_tax?: string;
}
export interface TobinTaxAminoMsg {
    type: "/terra.oracle.v1beta1.TobinTax";
    value: TobinTaxAmino;
}
/**
 * TobinTax defines an denom and tobin_tax pair used in
 * oracle module's genesis state
 */
export interface TobinTaxSDKType {
    denom: string;
    tobin_tax: string;
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
export declare const TobinTax: {
    typeUrl: string;
    encode(message: TobinTax, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TobinTax;
    fromPartial(object: Partial<TobinTax>): TobinTax;
    fromAmino(object: TobinTaxAmino): TobinTax;
    toAmino(message: TobinTax): TobinTaxAmino;
    fromAminoMsg(object: TobinTaxAminoMsg): TobinTax;
    fromProtoMsg(message: TobinTaxProtoMsg): TobinTax;
    toProto(message: TobinTax): Uint8Array;
    toProtoMsg(message: TobinTax): TobinTaxProtoMsg;
};
