import { Params, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType } from "./oracle";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params?: Params;
    feederDelegations: FeederDelegation[];
    exchangeRates: ExchangeRateTuple[];
    missCounters: MissCounter[];
    aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
    medians: Price[];
    historicPrices: Price[];
    medianDeviations: Price[];
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    feeder_delegations: FeederDelegationSDKType[];
    exchange_rates: ExchangeRateTupleSDKType[];
    miss_counters: MissCounterSDKType[];
    aggregate_exchange_rate_prevotes: AggregateExchangeRatePrevoteSDKType[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVoteSDKType[];
    medians: PriceSDKType[];
    historic_prices: PriceSDKType[];
    medianDeviations: PriceSDKType[];
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
    missCounter: Long;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounterSDKType {
    validator_address: string;
    miss_counter: Long;
}
/** Price is an instance of a price "stamp" */
export interface Price {
    exchangeRateTuple?: ExchangeRateTuple;
    blockNum: Long;
}
/** Price is an instance of a price "stamp" */
export interface PriceSDKType {
    exchange_rate_tuple?: ExchangeRateTupleSDKType;
    block_num: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const FeederDelegation: {
    encode(message: FeederDelegation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeederDelegation;
    fromPartial(object: Partial<FeederDelegation>): FeederDelegation;
};
export declare const MissCounter: {
    encode(message: MissCounter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MissCounter;
    fromPartial(object: Partial<MissCounter>): MissCounter;
};
export declare const Price: {
    encode(message: Price, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Price;
    fromPartial(object: Partial<Price>): Price;
};
