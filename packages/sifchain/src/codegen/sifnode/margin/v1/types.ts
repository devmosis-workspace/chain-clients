import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum Position {
  UNSPECIFIED = 0,
  LONG = 1,
  SHORT = 2,
  UNRECOGNIZED = -1,
}
export const PositionSDKType = Position;
export function positionFromJSON(object: any): Position {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Position.UNSPECIFIED;
    case 1:
    case "LONG":
      return Position.LONG;
    case 2:
    case "SHORT":
      return Position.SHORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Position.UNRECOGNIZED;
  }
}
export function positionToJSON(object: Position): string {
  switch (object) {
    case Position.UNSPECIFIED:
      return "UNSPECIFIED";
    case Position.LONG:
      return "LONG";
    case Position.SHORT:
      return "SHORT";
    case Position.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface GenesisState {
  params?: Params;
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
}
export interface Params {
  leverageMax: string;
  interestRateMax: string;
  interestRateMin: string;
  interestRateIncrease: string;
  interestRateDecrease: string;
  healthGainFactor: string;
  epochLength: Long;
  pools: string[];
  removalQueueThreshold: string;
  maxOpenPositions: Long;
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
export interface ParamsSDKType {
  leverage_max: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  epoch_length: Long;
  pools: string[];
  removal_queue_threshold: string;
  max_open_positions: Long;
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
export interface MTP {
  address: string;
  collateralAsset: string;
  collateralAmount: string;
  liabilities: string;
  interestPaidCollateral: string;
  interestPaidCustody: string;
  interestUnpaidCollateral: string;
  custodyAsset: string;
  custodyAmount: string;
  leverage: string;
  mtpHealth: string;
  position: Position;
  id: Long;
}
export interface MTPSDKType {
  address: string;
  collateral_asset: string;
  collateral_amount: string;
  liabilities: string;
  interest_paid_collateral: string;
  interest_paid_custody: string;
  interest_unpaid_collateral: string;
  custody_asset: string;
  custody_amount: string;
  leverage: string;
  mtp_health: string;
  position: Position;
  id: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseParams(): Params {
  return {
    leverageMax: "",
    interestRateMax: "",
    interestRateMin: "",
    interestRateIncrease: "",
    interestRateDecrease: "",
    healthGainFactor: "",
    epochLength: Long.ZERO,
    pools: [],
    removalQueueThreshold: "",
    maxOpenPositions: Long.UZERO,
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(message.leverageMax);
    }
    if (message.interestRateMax !== "") {
      writer.uint32(18).string(message.interestRateMax);
    }
    if (message.interestRateMin !== "") {
      writer.uint32(26).string(message.interestRateMin);
    }
    if (message.interestRateIncrease !== "") {
      writer.uint32(34).string(message.interestRateIncrease);
    }
    if (message.interestRateDecrease !== "") {
      writer.uint32(42).string(message.interestRateDecrease);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(50).string(message.healthGainFactor);
    }
    if (!message.epochLength.isZero()) {
      writer.uint32(56).int64(message.epochLength);
    }
    for (const v of message.pools) {
      writer.uint32(66).string(v!);
    }
    if (message.removalQueueThreshold !== "") {
      writer.uint32(82).string(message.removalQueueThreshold);
    }
    if (!message.maxOpenPositions.isZero()) {
      writer.uint32(88).uint64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(98).string(message.poolOpenThreshold);
    }
    if (message.forceCloseFundPercentage !== "") {
      writer.uint32(106).string(message.forceCloseFundPercentage);
    }
    if (message.forceCloseFundAddress !== "") {
      writer.uint32(114).string(message.forceCloseFundAddress);
    }
    if (message.incrementalInterestPaymentFundPercentage !== "") {
      writer.uint32(122).string(message.incrementalInterestPaymentFundPercentage);
    }
    if (message.incrementalInterestPaymentFundAddress !== "") {
      writer.uint32(130).string(message.incrementalInterestPaymentFundAddress);
    }
    if (message.sqModifier !== "") {
      writer.uint32(138).string(message.sqModifier);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(146).string(message.safetyFactor);
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
      epochLength: isSet(object.epochLength) ? Long.fromValue(object.epochLength) : Long.ZERO,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => String(e)) : [],
      removalQueueThreshold: isSet(object.removalQueueThreshold) ? String(object.removalQueueThreshold) : "",
      maxOpenPositions: isSet(object.maxOpenPositions) ? Long.fromValue(object.maxOpenPositions) : Long.UZERO,
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
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? Long.fromValue(object.epochLength) : Long.ZERO;
    message.pools = object.pools?.map(e => e) || [];
    message.removalQueueThreshold = object.removalQueueThreshold ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? Long.fromValue(object.maxOpenPositions) : Long.UZERO;
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
  }
};
function createBaseMTP(): MTP {
  return {
    address: "",
    collateralAsset: "",
    collateralAmount: "",
    liabilities: "",
    interestPaidCollateral: "",
    interestPaidCustody: "",
    interestUnpaidCollateral: "",
    custodyAsset: "",
    custodyAmount: "",
    leverage: "",
    mtpHealth: "",
    position: 0,
    id: Long.UZERO
  };
}
export const MTP = {
  encode(message: MTP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.collateralAsset !== "") {
      writer.uint32(18).string(message.collateralAsset);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.liabilities !== "") {
      writer.uint32(34).string(message.liabilities);
    }
    if (message.interestPaidCollateral !== "") {
      writer.uint32(42).string(message.interestPaidCollateral);
    }
    if (message.interestPaidCustody !== "") {
      writer.uint32(50).string(message.interestPaidCustody);
    }
    if (message.interestUnpaidCollateral !== "") {
      writer.uint32(58).string(message.interestUnpaidCollateral);
    }
    if (message.custodyAsset !== "") {
      writer.uint32(66).string(message.custodyAsset);
    }
    if (message.custodyAmount !== "") {
      writer.uint32(74).string(message.custodyAmount);
    }
    if (message.leverage !== "") {
      writer.uint32(82).string(message.leverage);
    }
    if (message.mtpHealth !== "") {
      writer.uint32(90).string(message.mtpHealth);
    }
    if (message.position !== 0) {
      writer.uint32(96).int32(message.position);
    }
    if (!message.id.isZero()) {
      writer.uint32(104).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MTP {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      collateralAsset: isSet(object.collateralAsset) ? String(object.collateralAsset) : "",
      collateralAmount: isSet(object.collateralAmount) ? String(object.collateralAmount) : "",
      liabilities: isSet(object.liabilities) ? String(object.liabilities) : "",
      interestPaidCollateral: isSet(object.interestPaidCollateral) ? String(object.interestPaidCollateral) : "",
      interestPaidCustody: isSet(object.interestPaidCustody) ? String(object.interestPaidCustody) : "",
      interestUnpaidCollateral: isSet(object.interestUnpaidCollateral) ? String(object.interestUnpaidCollateral) : "",
      custodyAsset: isSet(object.custodyAsset) ? String(object.custodyAsset) : "",
      custodyAmount: isSet(object.custodyAmount) ? String(object.custodyAmount) : "",
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
      mtpHealth: isSet(object.mtpHealth) ? String(object.mtpHealth) : "",
      position: isSet(object.position) ? positionFromJSON(object.position) : 0,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MTP>): MTP {
    const message = createBaseMTP();
    message.address = object.address ?? "";
    message.collateralAsset = object.collateralAsset ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.liabilities = object.liabilities ?? "";
    message.interestPaidCollateral = object.interestPaidCollateral ?? "";
    message.interestPaidCustody = object.interestPaidCustody ?? "";
    message.interestUnpaidCollateral = object.interestUnpaidCollateral ?? "";
    message.custodyAsset = object.custodyAsset ?? "";
    message.custodyAmount = object.custodyAmount ?? "";
    message.leverage = object.leverage ?? "";
    message.mtpHealth = object.mtpHealth ?? "";
    message.position = object.position ?? 0;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};