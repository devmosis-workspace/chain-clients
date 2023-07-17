import { Params, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType } from "./oracle";
import { Long, isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feederDelegations: [],
    exchangeRates: [],
    missCounters: [],
    aggregateExchangeRatePrevotes: [],
    aggregateExchangeRateVotes: [],
    medians: [],
    historicPrices: [],
    medianDeviations: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feederDelegations) {
      FeederDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.exchangeRates) {
      ExchangeRateTuple.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.missCounters) {
      MissCounter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.aggregateExchangeRatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.aggregateExchangeRateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.medians) {
      Price.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.historicPrices) {
      Price.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.medianDeviations) {
      Price.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feederDelegations: Array.isArray(object?.feederDelegations) ? object.feederDelegations.map((e: any) => FeederDelegation.fromJSON(e)) : [],
      exchangeRates: Array.isArray(object?.exchangeRates) ? object.exchangeRates.map((e: any) => ExchangeRateTuple.fromJSON(e)) : [],
      missCounters: Array.isArray(object?.missCounters) ? object.missCounters.map((e: any) => MissCounter.fromJSON(e)) : [],
      aggregateExchangeRatePrevotes: Array.isArray(object?.aggregateExchangeRatePrevotes) ? object.aggregateExchangeRatePrevotes.map((e: any) => AggregateExchangeRatePrevote.fromJSON(e)) : [],
      aggregateExchangeRateVotes: Array.isArray(object?.aggregateExchangeRateVotes) ? object.aggregateExchangeRateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e)) : [],
      medians: Array.isArray(object?.medians) ? object.medians.map((e: any) => Price.fromJSON(e)) : [],
      historicPrices: Array.isArray(object?.historicPrices) ? object.historicPrices.map((e: any) => Price.fromJSON(e)) : [],
      medianDeviations: Array.isArray(object?.medianDeviations) ? object.medianDeviations.map((e: any) => Price.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feederDelegations = object.feederDelegations?.map(e => FeederDelegation.fromPartial(e)) || [];
    message.exchangeRates = object.exchangeRates?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
    message.missCounters = object.missCounters?.map(e => MissCounter.fromPartial(e)) || [];
    message.aggregateExchangeRatePrevotes = object.aggregateExchangeRatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    message.aggregateExchangeRateVotes = object.aggregateExchangeRateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
    message.medians = object.medians?.map(e => Price.fromPartial(e)) || [];
    message.historicPrices = object.historicPrices?.map(e => Price.fromPartial(e)) || [];
    message.medianDeviations = object.medianDeviations?.map(e => Price.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFeederDelegation(): FeederDelegation {
  return {
    feederAddress: "",
    validatorAddress: ""
  };
}
export const FeederDelegation = {
  encode(message: FeederDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddress !== "") {
      writer.uint32(10).string(message.feederAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): FeederDelegation {
    return {
      feederAddress: isSet(object.feederAddress) ? String(object.feederAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<FeederDelegation>): FeederDelegation {
    const message = createBaseFeederDelegation();
    message.feederAddress = object.feederAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBaseMissCounter(): MissCounter {
  return {
    validatorAddress: "",
    missCounter: Long.UZERO
  };
}
export const MissCounter = {
  encode(message: MissCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.missCounter.isZero()) {
      writer.uint32(16).uint64(message.missCounter);
    }
    return writer;
  },
  fromJSON(object: any): MissCounter {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      missCounter: isSet(object.missCounter) ? Long.fromValue(object.missCounter) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MissCounter>): MissCounter {
    const message = createBaseMissCounter();
    message.validatorAddress = object.validatorAddress ?? "";
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? Long.fromValue(object.missCounter) : Long.UZERO;
    return message;
  }
};
function createBasePrice(): Price {
  return {
    exchangeRateTuple: undefined,
    blockNum: Long.UZERO
  };
}
export const Price = {
  encode(message: Price, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRateTuple !== undefined) {
      ExchangeRateTuple.encode(message.exchangeRateTuple, writer.uint32(10).fork()).ldelim();
    }
    if (!message.blockNum.isZero()) {
      writer.uint32(16).uint64(message.blockNum);
    }
    return writer;
  },
  fromJSON(object: any): Price {
    return {
      exchangeRateTuple: isSet(object.exchangeRateTuple) ? ExchangeRateTuple.fromJSON(object.exchangeRateTuple) : undefined,
      blockNum: isSet(object.blockNum) ? Long.fromValue(object.blockNum) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Price>): Price {
    const message = createBasePrice();
    message.exchangeRateTuple = object.exchangeRateTuple !== undefined && object.exchangeRateTuple !== null ? ExchangeRateTuple.fromPartial(object.exchangeRateTuple) : undefined;
    message.blockNum = object.blockNum !== undefined && object.blockNum !== null ? Long.fromValue(object.blockNum) : Long.UZERO;
    return message;
  }
};