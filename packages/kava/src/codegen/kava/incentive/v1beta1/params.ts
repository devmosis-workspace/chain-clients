import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriod {
  active: boolean;
  collateralType: string;
  start?: Timestamp;
  end?: Timestamp;
  rewardsPerSecond?: Coin;
}
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriodSDKType {
  active: boolean;
  collateral_type: string;
  start?: TimestampSDKType;
  end?: TimestampSDKType;
  rewards_per_second?: CoinSDKType;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriod {
  active: boolean;
  collateralType: string;
  start?: Timestamp;
  end?: Timestamp;
  rewardsPerSecond: Coin[];
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriodSDKType {
  active: boolean;
  collateral_type: string;
  start?: TimestampSDKType;
  end?: TimestampSDKType;
  rewards_per_second: CoinSDKType[];
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface Multiplier {
  name: string;
  monthsLockup: Long;
  factor: Uint8Array;
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface MultiplierSDKType {
  name: string;
  months_lockup: Long;
  factor: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenom {
  denom: string;
  multipliers: Multiplier[];
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenomSDKType {
  denom: string;
  multipliers: MultiplierSDKType[];
}
/** Params */
export interface Params {
  usdxMintingRewardPeriods: RewardPeriod[];
  hardSupplyRewardPeriods: MultiRewardPeriod[];
  hardBorrowRewardPeriods: MultiRewardPeriod[];
  delegatorRewardPeriods: MultiRewardPeriod[];
  swapRewardPeriods: MultiRewardPeriod[];
  claimMultipliers: MultipliersPerDenom[];
  claimEnd?: Timestamp;
  savingsRewardPeriods: MultiRewardPeriod[];
  earnRewardPeriods: MultiRewardPeriod[];
}
/** Params */
export interface ParamsSDKType {
  usdx_minting_reward_periods: RewardPeriodSDKType[];
  hard_supply_reward_periods: MultiRewardPeriodSDKType[];
  hard_borrow_reward_periods: MultiRewardPeriodSDKType[];
  delegator_reward_periods: MultiRewardPeriodSDKType[];
  swap_reward_periods: MultiRewardPeriodSDKType[];
  claim_multipliers: MultipliersPerDenomSDKType[];
  claim_end?: TimestampSDKType;
  savings_reward_periods: MultiRewardPeriodSDKType[];
  earn_reward_periods: MultiRewardPeriodSDKType[];
}
function createBaseRewardPeriod(): RewardPeriod {
  return {
    active: false,
    collateralType: "",
    start: undefined,
    end: undefined,
    rewardsPerSecond: undefined
  };
}
export const RewardPeriod = {
  encode(message: RewardPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(26).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardsPerSecond !== undefined) {
      Coin.encode(message.rewardsPerSecond, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RewardPeriod {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      rewardsPerSecond: isSet(object.rewardsPerSecond) ? Coin.fromJSON(object.rewardsPerSecond) : undefined
    };
  },
  fromPartial(object: Partial<RewardPeriod>): RewardPeriod {
    const message = createBaseRewardPeriod();
    message.active = object.active ?? false;
    message.collateralType = object.collateralType ?? "";
    message.start = object.start !== undefined && object.start !== null ? Timestamp.fromPartial(object.start) : undefined;
    message.end = object.end !== undefined && object.end !== null ? Timestamp.fromPartial(object.end) : undefined;
    message.rewardsPerSecond = object.rewardsPerSecond !== undefined && object.rewardsPerSecond !== null ? Coin.fromPartial(object.rewardsPerSecond) : undefined;
    return message;
  }
};
function createBaseMultiRewardPeriod(): MultiRewardPeriod {
  return {
    active: false,
    collateralType: "",
    start: undefined,
    end: undefined,
    rewardsPerSecond: []
  };
}
export const MultiRewardPeriod = {
  encode(message: MultiRewardPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(26).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.rewardsPerSecond) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MultiRewardPeriod {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      rewardsPerSecond: Array.isArray(object?.rewardsPerSecond) ? object.rewardsPerSecond.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MultiRewardPeriod>): MultiRewardPeriod {
    const message = createBaseMultiRewardPeriod();
    message.active = object.active ?? false;
    message.collateralType = object.collateralType ?? "";
    message.start = object.start !== undefined && object.start !== null ? Timestamp.fromPartial(object.start) : undefined;
    message.end = object.end !== undefined && object.end !== null ? Timestamp.fromPartial(object.end) : undefined;
    message.rewardsPerSecond = object.rewardsPerSecond?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMultiplier(): Multiplier {
  return {
    name: "",
    monthsLockup: Long.ZERO,
    factor: new Uint8Array()
  };
}
export const Multiplier = {
  encode(message: Multiplier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.monthsLockup.isZero()) {
      writer.uint32(16).int64(message.monthsLockup);
    }
    if (message.factor.length !== 0) {
      writer.uint32(26).bytes(message.factor);
    }
    return writer;
  },
  fromJSON(object: any): Multiplier {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      monthsLockup: isSet(object.monthsLockup) ? Long.fromValue(object.monthsLockup) : Long.ZERO,
      factor: isSet(object.factor) ? bytesFromBase64(object.factor) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Multiplier>): Multiplier {
    const message = createBaseMultiplier();
    message.name = object.name ?? "";
    message.monthsLockup = object.monthsLockup !== undefined && object.monthsLockup !== null ? Long.fromValue(object.monthsLockup) : Long.ZERO;
    message.factor = object.factor ?? new Uint8Array();
    return message;
  }
};
function createBaseMultipliersPerDenom(): MultipliersPerDenom {
  return {
    denom: "",
    multipliers: []
  };
}
export const MultipliersPerDenom = {
  encode(message: MultipliersPerDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.multipliers) {
      Multiplier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MultipliersPerDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      multipliers: Array.isArray(object?.multipliers) ? object.multipliers.map((e: any) => Multiplier.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MultipliersPerDenom>): MultipliersPerDenom {
    const message = createBaseMultipliersPerDenom();
    message.denom = object.denom ?? "";
    message.multipliers = object.multipliers?.map(e => Multiplier.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    usdxMintingRewardPeriods: [],
    hardSupplyRewardPeriods: [],
    hardBorrowRewardPeriods: [],
    delegatorRewardPeriods: [],
    swapRewardPeriods: [],
    claimMultipliers: [],
    claimEnd: undefined,
    savingsRewardPeriods: [],
    earnRewardPeriods: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.usdxMintingRewardPeriods) {
      RewardPeriod.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hardSupplyRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hardBorrowRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatorRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.claimMultipliers) {
      MultipliersPerDenom.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.claimEnd !== undefined) {
      Timestamp.encode(message.claimEnd, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.savingsRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.earnRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      usdxMintingRewardPeriods: Array.isArray(object?.usdxMintingRewardPeriods) ? object.usdxMintingRewardPeriods.map((e: any) => RewardPeriod.fromJSON(e)) : [],
      hardSupplyRewardPeriods: Array.isArray(object?.hardSupplyRewardPeriods) ? object.hardSupplyRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      hardBorrowRewardPeriods: Array.isArray(object?.hardBorrowRewardPeriods) ? object.hardBorrowRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      delegatorRewardPeriods: Array.isArray(object?.delegatorRewardPeriods) ? object.delegatorRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      swapRewardPeriods: Array.isArray(object?.swapRewardPeriods) ? object.swapRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      claimMultipliers: Array.isArray(object?.claimMultipliers) ? object.claimMultipliers.map((e: any) => MultipliersPerDenom.fromJSON(e)) : [],
      claimEnd: isSet(object.claimEnd) ? fromJsonTimestamp(object.claimEnd) : undefined,
      savingsRewardPeriods: Array.isArray(object?.savingsRewardPeriods) ? object.savingsRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      earnRewardPeriods: Array.isArray(object?.earnRewardPeriods) ? object.earnRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.usdxMintingRewardPeriods = object.usdxMintingRewardPeriods?.map(e => RewardPeriod.fromPartial(e)) || [];
    message.hardSupplyRewardPeriods = object.hardSupplyRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.hardBorrowRewardPeriods = object.hardBorrowRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.delegatorRewardPeriods = object.delegatorRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.swapRewardPeriods = object.swapRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.claimMultipliers = object.claimMultipliers?.map(e => MultipliersPerDenom.fromPartial(e)) || [];
    message.claimEnd = object.claimEnd !== undefined && object.claimEnd !== null ? Timestamp.fromPartial(object.claimEnd) : undefined;
    message.savingsRewardPeriods = object.savingsRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.earnRewardPeriods = object.earnRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    return message;
  }
};