import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriod {
  active: boolean;
  collateralType: string;
  start: Timestamp;
  end: Timestamp;
  rewardsPerSecond: Coin;
}
export interface RewardPeriodProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.RewardPeriod";
  value: Uint8Array;
}
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriodAmino {
  active?: boolean;
  collateral_type?: string;
  start?: string;
  end?: string;
  rewards_per_second?: CoinAmino;
}
export interface RewardPeriodAminoMsg {
  type: "/kava.incentive.v1beta1.RewardPeriod";
  value: RewardPeriodAmino;
}
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriodSDKType {
  active: boolean;
  collateral_type: string;
  start: TimestampSDKType;
  end: TimestampSDKType;
  rewards_per_second: CoinSDKType;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriod {
  active: boolean;
  collateralType: string;
  start: Timestamp;
  end: Timestamp;
  rewardsPerSecond: Coin[];
}
export interface MultiRewardPeriodProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MultiRewardPeriod";
  value: Uint8Array;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriodAmino {
  active?: boolean;
  collateral_type?: string;
  start?: string;
  end?: string;
  rewards_per_second?: CoinAmino[];
}
export interface MultiRewardPeriodAminoMsg {
  type: "/kava.incentive.v1beta1.MultiRewardPeriod";
  value: MultiRewardPeriodAmino;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriodSDKType {
  active: boolean;
  collateral_type: string;
  start: TimestampSDKType;
  end: TimestampSDKType;
  rewards_per_second: CoinSDKType[];
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface Multiplier {
  name: string;
  monthsLockup: bigint;
  factor: Uint8Array;
}
export interface MultiplierProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.Multiplier";
  value: Uint8Array;
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface MultiplierAmino {
  name?: string;
  months_lockup?: string;
  factor?: string;
}
export interface MultiplierAminoMsg {
  type: "/kava.incentive.v1beta1.Multiplier";
  value: MultiplierAmino;
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface MultiplierSDKType {
  name: string;
  months_lockup: bigint;
  factor: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenom {
  denom: string;
  multipliers: Multiplier[];
}
export interface MultipliersPerDenomProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MultipliersPerDenom";
  value: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenomAmino {
  denom?: string;
  multipliers?: MultiplierAmino[];
}
export interface MultipliersPerDenomAminoMsg {
  type: "/kava.incentive.v1beta1.MultipliersPerDenom";
  value: MultipliersPerDenomAmino;
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
  claimEnd: Timestamp;
  savingsRewardPeriods: MultiRewardPeriod[];
  earnRewardPeriods: MultiRewardPeriod[];
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.Params";
  value: Uint8Array;
}
/** Params */
export interface ParamsAmino {
  usdx_minting_reward_periods?: RewardPeriodAmino[];
  hard_supply_reward_periods?: MultiRewardPeriodAmino[];
  hard_borrow_reward_periods?: MultiRewardPeriodAmino[];
  delegator_reward_periods?: MultiRewardPeriodAmino[];
  swap_reward_periods?: MultiRewardPeriodAmino[];
  claim_multipliers?: MultipliersPerDenomAmino[];
  claim_end?: string;
  savings_reward_periods?: MultiRewardPeriodAmino[];
  earn_reward_periods?: MultiRewardPeriodAmino[];
}
export interface ParamsAminoMsg {
  type: "/kava.incentive.v1beta1.Params";
  value: ParamsAmino;
}
/** Params */
export interface ParamsSDKType {
  usdx_minting_reward_periods: RewardPeriodSDKType[];
  hard_supply_reward_periods: MultiRewardPeriodSDKType[];
  hard_borrow_reward_periods: MultiRewardPeriodSDKType[];
  delegator_reward_periods: MultiRewardPeriodSDKType[];
  swap_reward_periods: MultiRewardPeriodSDKType[];
  claim_multipliers: MultipliersPerDenomSDKType[];
  claim_end: TimestampSDKType;
  savings_reward_periods: MultiRewardPeriodSDKType[];
  earn_reward_periods: MultiRewardPeriodSDKType[];
}
function createBaseRewardPeriod(): RewardPeriod {
  return {
    active: false,
    collateralType: "",
    start: Timestamp.fromPartial({}),
    end: Timestamp.fromPartial({}),
    rewardsPerSecond: Coin.fromPartial({})
  };
}
export const RewardPeriod = {
  typeUrl: "/kava.incentive.v1beta1.RewardPeriod",
  encode(message: RewardPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RewardPeriodAmino): RewardPeriod {
    const message = createBaseRewardPeriod();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Timestamp.fromAmino(object.start);
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromAmino(object.end);
    }
    if (object.rewards_per_second !== undefined && object.rewards_per_second !== null) {
      message.rewardsPerSecond = Coin.fromAmino(object.rewards_per_second);
    }
    return message;
  },
  toAmino(message: RewardPeriod): RewardPeriodAmino {
    const obj: any = {};
    obj.active = message.active;
    obj.collateral_type = message.collateralType;
    obj.start = message.start ? Timestamp.toAmino(message.start) : undefined;
    obj.end = message.end ? Timestamp.toAmino(message.end) : undefined;
    obj.rewards_per_second = message.rewardsPerSecond ? Coin.toAmino(message.rewardsPerSecond) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardPeriodAminoMsg): RewardPeriod {
    return RewardPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardPeriodProtoMsg): RewardPeriod {
    return RewardPeriod.decode(message.value);
  },
  toProto(message: RewardPeriod): Uint8Array {
    return RewardPeriod.encode(message).finish();
  },
  toProtoMsg(message: RewardPeriod): RewardPeriodProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.RewardPeriod",
      value: RewardPeriod.encode(message).finish()
    };
  }
};
function createBaseMultiRewardPeriod(): MultiRewardPeriod {
  return {
    active: false,
    collateralType: "",
    start: Timestamp.fromPartial({}),
    end: Timestamp.fromPartial({}),
    rewardsPerSecond: []
  };
}
export const MultiRewardPeriod = {
  typeUrl: "/kava.incentive.v1beta1.MultiRewardPeriod",
  encode(message: MultiRewardPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MultiRewardPeriodAmino): MultiRewardPeriod {
    const message = createBaseMultiRewardPeriod();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Timestamp.fromAmino(object.start);
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromAmino(object.end);
    }
    message.rewardsPerSecond = object.rewards_per_second?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MultiRewardPeriod): MultiRewardPeriodAmino {
    const obj: any = {};
    obj.active = message.active;
    obj.collateral_type = message.collateralType;
    obj.start = message.start ? Timestamp.toAmino(message.start) : undefined;
    obj.end = message.end ? Timestamp.toAmino(message.end) : undefined;
    if (message.rewardsPerSecond) {
      obj.rewards_per_second = message.rewardsPerSecond.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards_per_second = [];
    }
    return obj;
  },
  fromAminoMsg(object: MultiRewardPeriodAminoMsg): MultiRewardPeriod {
    return MultiRewardPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiRewardPeriodProtoMsg): MultiRewardPeriod {
    return MultiRewardPeriod.decode(message.value);
  },
  toProto(message: MultiRewardPeriod): Uint8Array {
    return MultiRewardPeriod.encode(message).finish();
  },
  toProtoMsg(message: MultiRewardPeriod): MultiRewardPeriodProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MultiRewardPeriod",
      value: MultiRewardPeriod.encode(message).finish()
    };
  }
};
function createBaseMultiplier(): Multiplier {
  return {
    name: "",
    monthsLockup: BigInt(0),
    factor: new Uint8Array()
  };
}
export const Multiplier = {
  typeUrl: "/kava.incentive.v1beta1.Multiplier",
  encode(message: Multiplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.monthsLockup !== BigInt(0)) {
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
      monthsLockup: isSet(object.monthsLockup) ? BigInt(object.monthsLockup.toString()) : BigInt(0),
      factor: isSet(object.factor) ? bytesFromBase64(object.factor) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Multiplier>): Multiplier {
    const message = createBaseMultiplier();
    message.name = object.name ?? "";
    message.monthsLockup = object.monthsLockup !== undefined && object.monthsLockup !== null ? BigInt(object.monthsLockup.toString()) : BigInt(0);
    message.factor = object.factor ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MultiplierAmino): Multiplier {
    const message = createBaseMultiplier();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.months_lockup !== undefined && object.months_lockup !== null) {
      message.monthsLockup = BigInt(object.months_lockup);
    }
    if (object.factor !== undefined && object.factor !== null) {
      message.factor = bytesFromBase64(object.factor);
    }
    return message;
  },
  toAmino(message: Multiplier): MultiplierAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.months_lockup = message.monthsLockup ? message.monthsLockup.toString() : undefined;
    obj.factor = message.factor ? base64FromBytes(message.factor) : undefined;
    return obj;
  },
  fromAminoMsg(object: MultiplierAminoMsg): Multiplier {
    return Multiplier.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiplierProtoMsg): Multiplier {
    return Multiplier.decode(message.value);
  },
  toProto(message: Multiplier): Uint8Array {
    return Multiplier.encode(message).finish();
  },
  toProtoMsg(message: Multiplier): MultiplierProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.Multiplier",
      value: Multiplier.encode(message).finish()
    };
  }
};
function createBaseMultipliersPerDenom(): MultipliersPerDenom {
  return {
    denom: "",
    multipliers: []
  };
}
export const MultipliersPerDenom = {
  typeUrl: "/kava.incentive.v1beta1.MultipliersPerDenom",
  encode(message: MultipliersPerDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MultipliersPerDenomAmino): MultipliersPerDenom {
    const message = createBaseMultipliersPerDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.multipliers = object.multipliers?.map(e => Multiplier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MultipliersPerDenom): MultipliersPerDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    if (message.multipliers) {
      obj.multipliers = message.multipliers.map(e => e ? Multiplier.toAmino(e) : undefined);
    } else {
      obj.multipliers = [];
    }
    return obj;
  },
  fromAminoMsg(object: MultipliersPerDenomAminoMsg): MultipliersPerDenom {
    return MultipliersPerDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: MultipliersPerDenomProtoMsg): MultipliersPerDenom {
    return MultipliersPerDenom.decode(message.value);
  },
  toProto(message: MultipliersPerDenom): Uint8Array {
    return MultipliersPerDenom.encode(message).finish();
  },
  toProtoMsg(message: MultipliersPerDenom): MultipliersPerDenomProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MultipliersPerDenom",
      value: MultipliersPerDenom.encode(message).finish()
    };
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
    claimEnd: Timestamp.fromPartial({}),
    savingsRewardPeriods: [],
    earnRewardPeriods: []
  };
}
export const Params = {
  typeUrl: "/kava.incentive.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.usdxMintingRewardPeriods = object.usdx_minting_reward_periods?.map(e => RewardPeriod.fromAmino(e)) || [];
    message.hardSupplyRewardPeriods = object.hard_supply_reward_periods?.map(e => MultiRewardPeriod.fromAmino(e)) || [];
    message.hardBorrowRewardPeriods = object.hard_borrow_reward_periods?.map(e => MultiRewardPeriod.fromAmino(e)) || [];
    message.delegatorRewardPeriods = object.delegator_reward_periods?.map(e => MultiRewardPeriod.fromAmino(e)) || [];
    message.swapRewardPeriods = object.swap_reward_periods?.map(e => MultiRewardPeriod.fromAmino(e)) || [];
    message.claimMultipliers = object.claim_multipliers?.map(e => MultipliersPerDenom.fromAmino(e)) || [];
    if (object.claim_end !== undefined && object.claim_end !== null) {
      message.claimEnd = Timestamp.fromAmino(object.claim_end);
    }
    message.savingsRewardPeriods = object.savings_reward_periods?.map(e => MultiRewardPeriod.fromAmino(e)) || [];
    message.earnRewardPeriods = object.earn_reward_periods?.map(e => MultiRewardPeriod.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.usdxMintingRewardPeriods) {
      obj.usdx_minting_reward_periods = message.usdxMintingRewardPeriods.map(e => e ? RewardPeriod.toAmino(e) : undefined);
    } else {
      obj.usdx_minting_reward_periods = [];
    }
    if (message.hardSupplyRewardPeriods) {
      obj.hard_supply_reward_periods = message.hardSupplyRewardPeriods.map(e => e ? MultiRewardPeriod.toAmino(e) : undefined);
    } else {
      obj.hard_supply_reward_periods = [];
    }
    if (message.hardBorrowRewardPeriods) {
      obj.hard_borrow_reward_periods = message.hardBorrowRewardPeriods.map(e => e ? MultiRewardPeriod.toAmino(e) : undefined);
    } else {
      obj.hard_borrow_reward_periods = [];
    }
    if (message.delegatorRewardPeriods) {
      obj.delegator_reward_periods = message.delegatorRewardPeriods.map(e => e ? MultiRewardPeriod.toAmino(e) : undefined);
    } else {
      obj.delegator_reward_periods = [];
    }
    if (message.swapRewardPeriods) {
      obj.swap_reward_periods = message.swapRewardPeriods.map(e => e ? MultiRewardPeriod.toAmino(e) : undefined);
    } else {
      obj.swap_reward_periods = [];
    }
    if (message.claimMultipliers) {
      obj.claim_multipliers = message.claimMultipliers.map(e => e ? MultipliersPerDenom.toAmino(e) : undefined);
    } else {
      obj.claim_multipliers = [];
    }
    obj.claim_end = message.claimEnd ? Timestamp.toAmino(message.claimEnd) : undefined;
    if (message.savingsRewardPeriods) {
      obj.savings_reward_periods = message.savingsRewardPeriods.map(e => e ? MultiRewardPeriod.toAmino(e) : undefined);
    } else {
      obj.savings_reward_periods = [];
    }
    if (message.earnRewardPeriods) {
      obj.earn_reward_periods = message.earnRewardPeriods.map(e => e ? MultiRewardPeriod.toAmino(e) : undefined);
    } else {
      obj.earn_reward_periods = [];
    }
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
      typeUrl: "/kava.incentive.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};