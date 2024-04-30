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
}
export interface GenesisStateProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.GenesisState";
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
}
export interface GenesisStateAminoMsg {
    type: "/persistence.oracle.v1beta1.GenesisState";
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
    typeUrl: "/persistence.oracle.v1beta1.FeederDelegation";
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
    type: "/persistence.oracle.v1beta1.FeederDelegation";
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
 * oracle module's genesis state. It stores the number of vote periods missed by a validator
 * in a slash window.
 */
export interface MissCounter {
    validatorAddress: string;
    missCounter: bigint;
}
export interface MissCounterProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.MissCounter";
    value: Uint8Array;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state. It stores the number of vote periods missed by a validator
 * in a slash window.
 */
export interface MissCounterAmino {
    validator_address?: string;
    miss_counter?: string;
}
export interface MissCounterAminoMsg {
    type: "/persistence.oracle.v1beta1.MissCounter";
    value: MissCounterAmino;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state. It stores the number of vote periods missed by a validator
 * in a slash window.
 */
export interface MissCounterSDKType {
    validator_address: string;
    miss_counter: bigint;
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
