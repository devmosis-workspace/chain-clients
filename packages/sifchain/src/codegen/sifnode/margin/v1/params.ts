import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params {
  leverageMax: string;
  interestRateMax: string;
  interestRateMin: string;
  interestRateIncrease: string;
  interestRateDecrease: string;
  healthGainFactor: string;
  epochLength: bigint;
  pools: string[];
  removalQueueThreshold: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  forceCloseFundPercentage: string;
  forceCloseFundAddress: string;
  incrementalInterestPaymentFundPercentage: string;
  incrementalInterestPaymentFundAddress: string;
  sqModifier: string;
  safetyFactor: string;
  closedPools: string[];
  incrementalInterestPaymentEnabled: boolean;
  whitelistingEnabled: boolean;
  rowanCollateralEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/sifnode.margin.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  leverage_max?: string;
  interest_rate_max?: string;
  interest_rate_min?: string;
  interest_rate_increase?: string;
  interest_rate_decrease?: string;
  health_gain_factor?: string;
  epoch_length?: string;
  pools?: string[];
  removal_queue_threshold?: string;
  max_open_positions?: string;
  pool_open_threshold?: string;
  force_close_fund_percentage?: string;
  force_close_fund_address?: string;
  incremental_interest_payment_fund_percentage?: string;
  incremental_interest_payment_fund_address?: string;
  sq_modifier?: string;
  safety_factor?: string;
  closed_pools?: string[];
  incremental_interest_payment_enabled?: boolean;
  whitelisting_enabled?: boolean;
  rowan_collateral_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/sifnode.margin.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  leverage_max: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  epoch_length: bigint;
  pools: string[];
  removal_queue_threshold: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  force_close_fund_percentage: string;
  force_close_fund_address: string;
  incremental_interest_payment_fund_percentage: string;
  incremental_interest_payment_fund_address: string;
  sq_modifier: string;
  safety_factor: string;
  closed_pools: string[];
  incremental_interest_payment_enabled: boolean;
  whitelisting_enabled: boolean;
  rowan_collateral_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    leverageMax: "",
    interestRateMax: "",
    interestRateMin: "",
    interestRateIncrease: "",
    interestRateDecrease: "",
    healthGainFactor: "",
    epochLength: BigInt(0),
    pools: [],
    removalQueueThreshold: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    forceCloseFundPercentage: "",
    forceCloseFundAddress: "",
    incrementalInterestPaymentFundPercentage: "",
    incrementalInterestPaymentFundAddress: "",
    sqModifier: "",
    safetyFactor: "",
    closedPools: [],
    incrementalInterestPaymentEnabled: false,
    whitelistingEnabled: false,
    rowanCollateralEnabled: false
  };
}
export const Params = {
  typeUrl: "/sifnode.margin.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.interestRateMax !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.interestRateMax, 18).atomics);
    }
    if (message.interestRateMin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.interestRateMin, 18).atomics);
    }
    if (message.interestRateIncrease !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.interestRateIncrease, 18).atomics);
    }
    if (message.interestRateDecrease !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.interestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(56).int64(message.epochLength);
    }
    for (const v of message.pools) {
      writer.uint32(66).string(v!);
    }
    if (message.removalQueueThreshold !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.removalQueueThreshold, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(88).uint64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.forceCloseFundPercentage !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.forceCloseFundPercentage, 18).atomics);
    }
    if (message.forceCloseFundAddress !== "") {
      writer.uint32(114).string(message.forceCloseFundAddress);
    }
    if (message.incrementalInterestPaymentFundPercentage !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.incrementalInterestPaymentFundPercentage, 18).atomics);
    }
    if (message.incrementalInterestPaymentFundAddress !== "") {
      writer.uint32(130).string(message.incrementalInterestPaymentFundAddress);
    }
    if (message.sqModifier !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.sqModifier, 18).atomics);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    for (const v of message.closedPools) {
      writer.uint32(154).string(v!);
    }
    if (message.incrementalInterestPaymentEnabled === true) {
      writer.uint32(160).bool(message.incrementalInterestPaymentEnabled);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(168).bool(message.whitelistingEnabled);
    }
    if (message.rowanCollateralEnabled === true) {
      writer.uint32(176).bool(message.rowanCollateralEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      leverageMax: isSet(object.leverageMax) ? String(object.leverageMax) : "",
      interestRateMax: isSet(object.interestRateMax) ? String(object.interestRateMax) : "",
      interestRateMin: isSet(object.interestRateMin) ? String(object.interestRateMin) : "",
      interestRateIncrease: isSet(object.interestRateIncrease) ? String(object.interestRateIncrease) : "",
      interestRateDecrease: isSet(object.interestRateDecrease) ? String(object.interestRateDecrease) : "",
      healthGainFactor: isSet(object.healthGainFactor) ? String(object.healthGainFactor) : "",
      epochLength: isSet(object.epochLength) ? BigInt(object.epochLength.toString()) : BigInt(0),
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => String(e)) : [],
      removalQueueThreshold: isSet(object.removalQueueThreshold) ? String(object.removalQueueThreshold) : "",
      maxOpenPositions: isSet(object.maxOpenPositions) ? BigInt(object.maxOpenPositions.toString()) : BigInt(0),
      poolOpenThreshold: isSet(object.poolOpenThreshold) ? String(object.poolOpenThreshold) : "",
      forceCloseFundPercentage: isSet(object.forceCloseFundPercentage) ? String(object.forceCloseFundPercentage) : "",
      forceCloseFundAddress: isSet(object.forceCloseFundAddress) ? String(object.forceCloseFundAddress) : "",
      incrementalInterestPaymentFundPercentage: isSet(object.incrementalInterestPaymentFundPercentage) ? String(object.incrementalInterestPaymentFundPercentage) : "",
      incrementalInterestPaymentFundAddress: isSet(object.incrementalInterestPaymentFundAddress) ? String(object.incrementalInterestPaymentFundAddress) : "",
      sqModifier: isSet(object.sqModifier) ? String(object.sqModifier) : "",
      safetyFactor: isSet(object.safetyFactor) ? String(object.safetyFactor) : "",
      closedPools: Array.isArray(object?.closedPools) ? object.closedPools.map((e: any) => String(e)) : [],
      incrementalInterestPaymentEnabled: isSet(object.incrementalInterestPaymentEnabled) ? Boolean(object.incrementalInterestPaymentEnabled) : false,
      whitelistingEnabled: isSet(object.whitelistingEnabled) ? Boolean(object.whitelistingEnabled) : false,
      rowanCollateralEnabled: isSet(object.rowanCollateralEnabled) ? Boolean(object.rowanCollateralEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.leverageMax = object.leverageMax ?? "";
    message.interestRateMax = object.interestRateMax ?? "";
    message.interestRateMin = object.interestRateMin ?? "";
    message.interestRateIncrease = object.interestRateIncrease ?? "";
    message.interestRateDecrease = object.interestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.pools = object.pools?.map(e => e) || [];
    message.removalQueueThreshold = object.removalQueueThreshold ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.forceCloseFundPercentage = object.forceCloseFundPercentage ?? "";
    message.forceCloseFundAddress = object.forceCloseFundAddress ?? "";
    message.incrementalInterestPaymentFundPercentage = object.incrementalInterestPaymentFundPercentage ?? "";
    message.incrementalInterestPaymentFundAddress = object.incrementalInterestPaymentFundAddress ?? "";
    message.sqModifier = object.sqModifier ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.closedPools = object.closedPools?.map(e => e) || [];
    message.incrementalInterestPaymentEnabled = object.incrementalInterestPaymentEnabled ?? false;
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.rowanCollateralEnabled = object.rowanCollateralEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    if (object.interest_rate_max !== undefined && object.interest_rate_max !== null) {
      message.interestRateMax = object.interest_rate_max;
    }
    if (object.interest_rate_min !== undefined && object.interest_rate_min !== null) {
      message.interestRateMin = object.interest_rate_min;
    }
    if (object.interest_rate_increase !== undefined && object.interest_rate_increase !== null) {
      message.interestRateIncrease = object.interest_rate_increase;
    }
    if (object.interest_rate_decrease !== undefined && object.interest_rate_decrease !== null) {
      message.interestRateDecrease = object.interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
    }
    message.pools = object.pools?.map(e => e) || [];
    if (object.removal_queue_threshold !== undefined && object.removal_queue_threshold !== null) {
      message.removalQueueThreshold = object.removal_queue_threshold;
    }
    if (object.max_open_positions !== undefined && object.max_open_positions !== null) {
      message.maxOpenPositions = BigInt(object.max_open_positions);
    }
    if (object.pool_open_threshold !== undefined && object.pool_open_threshold !== null) {
      message.poolOpenThreshold = object.pool_open_threshold;
    }
    if (object.force_close_fund_percentage !== undefined && object.force_close_fund_percentage !== null) {
      message.forceCloseFundPercentage = object.force_close_fund_percentage;
    }
    if (object.force_close_fund_address !== undefined && object.force_close_fund_address !== null) {
      message.forceCloseFundAddress = object.force_close_fund_address;
    }
    if (object.incremental_interest_payment_fund_percentage !== undefined && object.incremental_interest_payment_fund_percentage !== null) {
      message.incrementalInterestPaymentFundPercentage = object.incremental_interest_payment_fund_percentage;
    }
    if (object.incremental_interest_payment_fund_address !== undefined && object.incremental_interest_payment_fund_address !== null) {
      message.incrementalInterestPaymentFundAddress = object.incremental_interest_payment_fund_address;
    }
    if (object.sq_modifier !== undefined && object.sq_modifier !== null) {
      message.sqModifier = object.sq_modifier;
    }
    if (object.safety_factor !== undefined && object.safety_factor !== null) {
      message.safetyFactor = object.safety_factor;
    }
    message.closedPools = object.closed_pools?.map(e => e) || [];
    if (object.incremental_interest_payment_enabled !== undefined && object.incremental_interest_payment_enabled !== null) {
      message.incrementalInterestPaymentEnabled = object.incremental_interest_payment_enabled;
    }
    if (object.whitelisting_enabled !== undefined && object.whitelisting_enabled !== null) {
      message.whitelistingEnabled = object.whitelisting_enabled;
    }
    if (object.rowan_collateral_enabled !== undefined && object.rowan_collateral_enabled !== null) {
      message.rowanCollateralEnabled = object.rowan_collateral_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    obj.interest_rate_max = message.interestRateMax === "" ? undefined : message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin === "" ? undefined : message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease === "" ? undefined : message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease === "" ? undefined : message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength.toString() : undefined;
    if (message.pools) {
      obj.pools = message.pools.map(e => e);
    } else {
      obj.pools = message.pools;
    }
    obj.removal_queue_threshold = message.removalQueueThreshold === "" ? undefined : message.removalQueueThreshold;
    obj.max_open_positions = message.maxOpenPositions !== BigInt(0) ? message.maxOpenPositions.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold === "" ? undefined : message.poolOpenThreshold;
    obj.force_close_fund_percentage = message.forceCloseFundPercentage === "" ? undefined : message.forceCloseFundPercentage;
    obj.force_close_fund_address = message.forceCloseFundAddress === "" ? undefined : message.forceCloseFundAddress;
    obj.incremental_interest_payment_fund_percentage = message.incrementalInterestPaymentFundPercentage === "" ? undefined : message.incrementalInterestPaymentFundPercentage;
    obj.incremental_interest_payment_fund_address = message.incrementalInterestPaymentFundAddress === "" ? undefined : message.incrementalInterestPaymentFundAddress;
    obj.sq_modifier = message.sqModifier === "" ? undefined : message.sqModifier;
    obj.safety_factor = message.safetyFactor === "" ? undefined : message.safetyFactor;
    if (message.closedPools) {
      obj.closed_pools = message.closedPools.map(e => e);
    } else {
      obj.closed_pools = message.closedPools;
    }
    obj.incremental_interest_payment_enabled = message.incrementalInterestPaymentEnabled === false ? undefined : message.incrementalInterestPaymentEnabled;
    obj.whitelisting_enabled = message.whitelistingEnabled === false ? undefined : message.whitelistingEnabled;
    obj.rowan_collateral_enabled = message.rowanCollateralEnabled === false ? undefined : message.rowanCollateralEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};