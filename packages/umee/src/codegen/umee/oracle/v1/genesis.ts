import { Params, ParamsAmino, ParamsSDKType, DenomExchangeRate, DenomExchangeRateAmino, DenomExchangeRateSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, AvgCounterParams, AvgCounterParamsAmino, AvgCounterParamsSDKType, ExchangeRateTuple, ExchangeRateTupleAmino, ExchangeRateTupleSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feederDelegations: [],
    exchangeRates: [],
    missCounters: [],
    aggregateExchangeRatePrevotes: [],
    aggregateExchangeRateVotes: [],
    medians: [],
    historicPrices: [],
    medianDeviations: [],
    avgCounterParams: AvgCounterParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/umee.oracle.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feederDelegations) {
      FeederDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.exchangeRates) {
      DenomExchangeRate.encode(v!, writer.uint32(26).fork()).ldelim();
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
    if (message.avgCounterParams !== undefined) {
      AvgCounterParams.encode(message.avgCounterParams, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feederDelegations: Array.isArray(object?.feederDelegations) ? object.feederDelegations.map((e: any) => FeederDelegation.fromJSON(e)) : [],
      exchangeRates: Array.isArray(object?.exchangeRates) ? object.exchangeRates.map((e: any) => DenomExchangeRate.fromJSON(e)) : [],
      missCounters: Array.isArray(object?.missCounters) ? object.missCounters.map((e: any) => MissCounter.fromJSON(e)) : [],
      aggregateExchangeRatePrevotes: Array.isArray(object?.aggregateExchangeRatePrevotes) ? object.aggregateExchangeRatePrevotes.map((e: any) => AggregateExchangeRatePrevote.fromJSON(e)) : [],
      aggregateExchangeRateVotes: Array.isArray(object?.aggregateExchangeRateVotes) ? object.aggregateExchangeRateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e)) : [],
      medians: Array.isArray(object?.medians) ? object.medians.map((e: any) => Price.fromJSON(e)) : [],
      historicPrices: Array.isArray(object?.historicPrices) ? object.historicPrices.map((e: any) => Price.fromJSON(e)) : [],
      medianDeviations: Array.isArray(object?.medianDeviations) ? object.medianDeviations.map((e: any) => Price.fromJSON(e)) : [],
      avgCounterParams: isSet(object.avgCounterParams) ? AvgCounterParams.fromJSON(object.avgCounterParams) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feederDelegations = object.feederDelegations?.map(e => FeederDelegation.fromPartial(e)) || [];
    message.exchangeRates = object.exchangeRates?.map(e => DenomExchangeRate.fromPartial(e)) || [];
    message.missCounters = object.missCounters?.map(e => MissCounter.fromPartial(e)) || [];
    message.aggregateExchangeRatePrevotes = object.aggregateExchangeRatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    message.aggregateExchangeRateVotes = object.aggregateExchangeRateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
    message.medians = object.medians?.map(e => Price.fromPartial(e)) || [];
    message.historicPrices = object.historicPrices?.map(e => Price.fromPartial(e)) || [];
    message.medianDeviations = object.medianDeviations?.map(e => Price.fromPartial(e)) || [];
    message.avgCounterParams = object.avgCounterParams !== undefined && object.avgCounterParams !== null ? AvgCounterParams.fromPartial(object.avgCounterParams) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.feederDelegations = object.feeder_delegations?.map(e => FeederDelegation.fromAmino(e)) || [];
    message.exchangeRates = object.exchange_rates?.map(e => DenomExchangeRate.fromAmino(e)) || [];
    message.missCounters = object.miss_counters?.map(e => MissCounter.fromAmino(e)) || [];
    message.aggregateExchangeRatePrevotes = object.aggregate_exchange_rate_prevotes?.map(e => AggregateExchangeRatePrevote.fromAmino(e)) || [];
    message.aggregateExchangeRateVotes = object.aggregate_exchange_rate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
    message.medians = object.medians?.map(e => Price.fromAmino(e)) || [];
    message.historicPrices = object.historic_prices?.map(e => Price.fromAmino(e)) || [];
    message.medianDeviations = object.medianDeviations?.map(e => Price.fromAmino(e)) || [];
    if (object.avg_counter_params !== undefined && object.avg_counter_params !== null) {
      message.avgCounterParams = AvgCounterParams.fromAmino(object.avg_counter_params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.feederDelegations) {
      obj.feeder_delegations = message.feederDelegations.map(e => e ? FeederDelegation.toAmino(e) : undefined);
    } else {
      obj.feeder_delegations = message.feederDelegations;
    }
    if (message.exchangeRates) {
      obj.exchange_rates = message.exchangeRates.map(e => e ? DenomExchangeRate.toAmino(e) : undefined);
    } else {
      obj.exchange_rates = message.exchangeRates;
    }
    if (message.missCounters) {
      obj.miss_counters = message.missCounters.map(e => e ? MissCounter.toAmino(e) : undefined);
    } else {
      obj.miss_counters = message.missCounters;
    }
    if (message.aggregateExchangeRatePrevotes) {
      obj.aggregate_exchange_rate_prevotes = message.aggregateExchangeRatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toAmino(e) : undefined);
    } else {
      obj.aggregate_exchange_rate_prevotes = message.aggregateExchangeRatePrevotes;
    }
    if (message.aggregateExchangeRateVotes) {
      obj.aggregate_exchange_rate_votes = message.aggregateExchangeRateVotes.map(e => e ? AggregateExchangeRateVote.toAmino(e) : undefined);
    } else {
      obj.aggregate_exchange_rate_votes = message.aggregateExchangeRateVotes;
    }
    if (message.medians) {
      obj.medians = message.medians.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.medians = message.medians;
    }
    if (message.historicPrices) {
      obj.historic_prices = message.historicPrices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.historic_prices = message.historicPrices;
    }
    if (message.medianDeviations) {
      obj.medianDeviations = message.medianDeviations.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.medianDeviations = message.medianDeviations;
    }
    obj.avg_counter_params = message.avgCounterParams ? AvgCounterParams.toAmino(message.avgCounterParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseFeederDelegation(): FeederDelegation {
  return {
    feederAddress: "",
    validatorAddress: ""
  };
}
export const FeederDelegation = {
  typeUrl: "/umee.oracle.v1.FeederDelegation",
  encode(message: FeederDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeederDelegationAmino): FeederDelegation {
    const message = createBaseFeederDelegation();
    if (object.feeder_address !== undefined && object.feeder_address !== null) {
      message.feederAddress = object.feeder_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: FeederDelegation): FeederDelegationAmino {
    const obj: any = {};
    obj.feeder_address = message.feederAddress === "" ? undefined : message.feederAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: FeederDelegationAminoMsg): FeederDelegation {
    return FeederDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: FeederDelegationProtoMsg): FeederDelegation {
    return FeederDelegation.decode(message.value);
  },
  toProto(message: FeederDelegation): Uint8Array {
    return FeederDelegation.encode(message).finish();
  },
  toProtoMsg(message: FeederDelegation): FeederDelegationProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.FeederDelegation",
      value: FeederDelegation.encode(message).finish()
    };
  }
};
function createBaseMissCounter(): MissCounter {
  return {
    validatorAddress: "",
    missCounter: BigInt(0)
  };
}
export const MissCounter = {
  typeUrl: "/umee.oracle.v1.MissCounter",
  encode(message: MissCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(16).uint64(message.missCounter);
    }
    return writer;
  },
  fromJSON(object: any): MissCounter {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MissCounter>): MissCounter {
    const message = createBaseMissCounter();
    message.validatorAddress = object.validatorAddress ?? "";
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MissCounterAmino): MissCounter {
    const message = createBaseMissCounter();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    return message;
  },
  toAmino(message: MissCounter): MissCounterAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.miss_counter = message.missCounter !== BigInt(0) ? message.missCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MissCounterAminoMsg): MissCounter {
    return MissCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: MissCounterProtoMsg): MissCounter {
    return MissCounter.decode(message.value);
  },
  toProto(message: MissCounter): Uint8Array {
    return MissCounter.encode(message).finish();
  },
  toProtoMsg(message: MissCounter): MissCounterProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.MissCounter",
      value: MissCounter.encode(message).finish()
    };
  }
};
function createBasePrice(): Price {
  return {
    exchangeRateTuple: ExchangeRateTuple.fromPartial({}),
    blockNum: BigInt(0)
  };
}
export const Price = {
  typeUrl: "/umee.oracle.v1.Price",
  encode(message: Price, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeRateTuple !== undefined) {
      ExchangeRateTuple.encode(message.exchangeRateTuple, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockNum !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockNum);
    }
    return writer;
  },
  fromJSON(object: any): Price {
    return {
      exchangeRateTuple: isSet(object.exchangeRateTuple) ? ExchangeRateTuple.fromJSON(object.exchangeRateTuple) : undefined,
      blockNum: isSet(object.blockNum) ? BigInt(object.blockNum.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Price>): Price {
    const message = createBasePrice();
    message.exchangeRateTuple = object.exchangeRateTuple !== undefined && object.exchangeRateTuple !== null ? ExchangeRateTuple.fromPartial(object.exchangeRateTuple) : undefined;
    message.blockNum = object.blockNum !== undefined && object.blockNum !== null ? BigInt(object.blockNum.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceAmino): Price {
    const message = createBasePrice();
    if (object.exchange_rate_tuple !== undefined && object.exchange_rate_tuple !== null) {
      message.exchangeRateTuple = ExchangeRateTuple.fromAmino(object.exchange_rate_tuple);
    }
    if (object.block_num !== undefined && object.block_num !== null) {
      message.blockNum = BigInt(object.block_num);
    }
    return message;
  },
  toAmino(message: Price): PriceAmino {
    const obj: any = {};
    obj.exchange_rate_tuple = message.exchangeRateTuple ? ExchangeRateTuple.toAmino(message.exchangeRateTuple) : undefined;
    obj.block_num = message.blockNum !== BigInt(0) ? message.blockNum.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PriceAminoMsg): Price {
    return Price.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceProtoMsg): Price {
    return Price.decode(message.value);
  },
  toProto(message: Price): Uint8Array {
    return Price.encode(message).finish();
  },
  toProtoMsg(message: Price): PriceProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.Price",
      value: Price.encode(message).finish()
    };
  }
};