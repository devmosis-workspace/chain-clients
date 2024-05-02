import { Params, ParamsAmino, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleAmino, ExchangeRateTupleSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feederDelegations: [],
    exchangeRates: [],
    missCounters: [],
    aggregateExchangeRatePrevotes: [],
    aggregateExchangeRateVotes: [],
    tobinTaxes: []
  };
}
export const GenesisState = {
  typeUrl: "/terra.oracle.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    for (const v of message.tobinTaxes) {
      TobinTax.encode(v!, writer.uint32(58).fork()).ldelim();
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
      tobinTaxes: Array.isArray(object?.tobinTaxes) ? object.tobinTaxes.map((e: any) => TobinTax.fromJSON(e)) : []
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
    message.tobinTaxes = object.tobinTaxes?.map(e => TobinTax.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.feederDelegations = object.feeder_delegations?.map(e => FeederDelegation.fromAmino(e)) || [];
    message.exchangeRates = object.exchange_rates?.map(e => ExchangeRateTuple.fromAmino(e)) || [];
    message.missCounters = object.miss_counters?.map(e => MissCounter.fromAmino(e)) || [];
    message.aggregateExchangeRatePrevotes = object.aggregate_exchange_rate_prevotes?.map(e => AggregateExchangeRatePrevote.fromAmino(e)) || [];
    message.aggregateExchangeRateVotes = object.aggregate_exchange_rate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
    message.tobinTaxes = object.tobin_taxes?.map(e => TobinTax.fromAmino(e)) || [];
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
      obj.exchange_rates = message.exchangeRates.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
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
    if (message.tobinTaxes) {
      obj.tobin_taxes = message.tobinTaxes.map(e => e ? TobinTax.toAmino(e) : undefined);
    } else {
      obj.tobin_taxes = message.tobinTaxes;
    }
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
      typeUrl: "/terra.oracle.v1beta1.GenesisState",
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
  typeUrl: "/terra.oracle.v1beta1.FeederDelegation",
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
      typeUrl: "/terra.oracle.v1beta1.FeederDelegation",
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
  typeUrl: "/terra.oracle.v1beta1.MissCounter",
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
      typeUrl: "/terra.oracle.v1beta1.MissCounter",
      value: MissCounter.encode(message).finish()
    };
  }
};
function createBaseTobinTax(): TobinTax {
  return {
    denom: "",
    tobinTax: ""
  };
}
export const TobinTax = {
  typeUrl: "/terra.oracle.v1beta1.TobinTax",
  encode(message: TobinTax, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tobinTax !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.tobinTax, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): TobinTax {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      tobinTax: isSet(object.tobinTax) ? String(object.tobinTax) : ""
    };
  },
  fromPartial(object: Partial<TobinTax>): TobinTax {
    const message = createBaseTobinTax();
    message.denom = object.denom ?? "";
    message.tobinTax = object.tobinTax ?? "";
    return message;
  },
  fromAmino(object: TobinTaxAmino): TobinTax {
    const message = createBaseTobinTax();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.tobin_tax !== undefined && object.tobin_tax !== null) {
      message.tobinTax = object.tobin_tax;
    }
    return message;
  },
  toAmino(message: TobinTax): TobinTaxAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.tobin_tax = message.tobinTax === "" ? undefined : message.tobinTax;
    return obj;
  },
  fromAminoMsg(object: TobinTaxAminoMsg): TobinTax {
    return TobinTax.fromAmino(object.value);
  },
  fromProtoMsg(message: TobinTaxProtoMsg): TobinTax {
    return TobinTax.decode(message.value);
  },
  toProto(message: TobinTax): Uint8Array {
    return TobinTax.encode(message).finish();
  },
  toProtoMsg(message: TobinTax): TobinTaxProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.TobinTax",
      value: TobinTax.encode(message).finish()
    };
  }
};