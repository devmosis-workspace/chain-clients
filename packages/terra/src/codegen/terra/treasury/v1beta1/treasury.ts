import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the oracle module. */
export interface Params {
  taxPolicy: PolicyConstraints;
  rewardPolicy: PolicyConstraints;
  seigniorageBurdenTarget: string;
  miningIncrement: string;
  windowShort: bigint;
  windowLong: bigint;
  windowProbation: bigint;
  burnTaxSplit: string;
  minInitialDepositRatio: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
  tax_policy?: PolicyConstraintsAmino;
  reward_policy?: PolicyConstraintsAmino;
  seigniorage_burden_target?: string;
  mining_increment?: string;
  window_short?: string;
  window_long?: string;
  window_probation?: string;
  burn_tax_split?: string;
  min_initial_deposit_ratio?: string;
}
export interface ParamsAminoMsg {
  type: "/terra.treasury.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
  tax_policy: PolicyConstraintsSDKType;
  reward_policy: PolicyConstraintsSDKType;
  seigniorage_burden_target: string;
  mining_increment: string;
  window_short: bigint;
  window_long: bigint;
  window_probation: bigint;
  burn_tax_split: string;
  min_initial_deposit_ratio: string;
}
/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraints {
  rateMin: string;
  rateMax: string;
  cap: Coin;
  changeRateMax: string;
}
export interface PolicyConstraintsProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.PolicyConstraints";
  value: Uint8Array;
}
/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraintsAmino {
  rate_min?: string;
  rate_max?: string;
  cap?: CoinAmino;
  change_rate_max?: string;
}
export interface PolicyConstraintsAminoMsg {
  type: "/terra.treasury.v1beta1.PolicyConstraints";
  value: PolicyConstraintsAmino;
}
/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraintsSDKType {
  rate_min: string;
  rate_max: string;
  cap: CoinSDKType;
  change_rate_max: string;
}
/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceeds {
  taxProceeds: Coin[];
}
export interface EpochTaxProceedsProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.EpochTaxProceeds";
  value: Uint8Array;
}
/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceedsAmino {
  tax_proceeds?: CoinAmino[];
}
export interface EpochTaxProceedsAminoMsg {
  type: "/terra.treasury.v1beta1.EpochTaxProceeds";
  value: EpochTaxProceedsAmino;
}
/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceedsSDKType {
  tax_proceeds: CoinSDKType[];
}
/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuance {
  issuance: Coin[];
}
export interface EpochInitialIssuanceProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.EpochInitialIssuance";
  value: Uint8Array;
}
/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuanceAmino {
  issuance?: CoinAmino[];
}
export interface EpochInitialIssuanceAminoMsg {
  type: "/terra.treasury.v1beta1.EpochInitialIssuance";
  value: EpochInitialIssuanceAmino;
}
/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuanceSDKType {
  issuance: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    taxPolicy: PolicyConstraints.fromPartial({}),
    rewardPolicy: PolicyConstraints.fromPartial({}),
    seigniorageBurdenTarget: "",
    miningIncrement: "",
    windowShort: BigInt(0),
    windowLong: BigInt(0),
    windowProbation: BigInt(0),
    burnTaxSplit: "",
    minInitialDepositRatio: ""
  };
}
export const Params = {
  typeUrl: "/terra.treasury.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.taxPolicy !== undefined) {
      PolicyConstraints.encode(message.taxPolicy, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardPolicy !== undefined) {
      PolicyConstraints.encode(message.rewardPolicy, writer.uint32(18).fork()).ldelim();
    }
    if (message.seigniorageBurdenTarget !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.seigniorageBurdenTarget, 18).atomics);
    }
    if (message.miningIncrement !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.miningIncrement, 18).atomics);
    }
    if (message.windowShort !== BigInt(0)) {
      writer.uint32(40).uint64(message.windowShort);
    }
    if (message.windowLong !== BigInt(0)) {
      writer.uint32(48).uint64(message.windowLong);
    }
    if (message.windowProbation !== BigInt(0)) {
      writer.uint32(56).uint64(message.windowProbation);
    }
    if (message.burnTaxSplit !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.burnTaxSplit, 18).atomics);
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.minInitialDepositRatio, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      taxPolicy: isSet(object.taxPolicy) ? PolicyConstraints.fromJSON(object.taxPolicy) : undefined,
      rewardPolicy: isSet(object.rewardPolicy) ? PolicyConstraints.fromJSON(object.rewardPolicy) : undefined,
      seigniorageBurdenTarget: isSet(object.seigniorageBurdenTarget) ? String(object.seigniorageBurdenTarget) : "",
      miningIncrement: isSet(object.miningIncrement) ? String(object.miningIncrement) : "",
      windowShort: isSet(object.windowShort) ? BigInt(object.windowShort.toString()) : BigInt(0),
      windowLong: isSet(object.windowLong) ? BigInt(object.windowLong.toString()) : BigInt(0),
      windowProbation: isSet(object.windowProbation) ? BigInt(object.windowProbation.toString()) : BigInt(0),
      burnTaxSplit: isSet(object.burnTaxSplit) ? String(object.burnTaxSplit) : "",
      minInitialDepositRatio: isSet(object.minInitialDepositRatio) ? String(object.minInitialDepositRatio) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.taxPolicy = object.taxPolicy !== undefined && object.taxPolicy !== null ? PolicyConstraints.fromPartial(object.taxPolicy) : undefined;
    message.rewardPolicy = object.rewardPolicy !== undefined && object.rewardPolicy !== null ? PolicyConstraints.fromPartial(object.rewardPolicy) : undefined;
    message.seigniorageBurdenTarget = object.seigniorageBurdenTarget ?? "";
    message.miningIncrement = object.miningIncrement ?? "";
    message.windowShort = object.windowShort !== undefined && object.windowShort !== null ? BigInt(object.windowShort.toString()) : BigInt(0);
    message.windowLong = object.windowLong !== undefined && object.windowLong !== null ? BigInt(object.windowLong.toString()) : BigInt(0);
    message.windowProbation = object.windowProbation !== undefined && object.windowProbation !== null ? BigInt(object.windowProbation.toString()) : BigInt(0);
    message.burnTaxSplit = object.burnTaxSplit ?? "";
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.tax_policy !== undefined && object.tax_policy !== null) {
      message.taxPolicy = PolicyConstraints.fromAmino(object.tax_policy);
    }
    if (object.reward_policy !== undefined && object.reward_policy !== null) {
      message.rewardPolicy = PolicyConstraints.fromAmino(object.reward_policy);
    }
    if (object.seigniorage_burden_target !== undefined && object.seigniorage_burden_target !== null) {
      message.seigniorageBurdenTarget = object.seigniorage_burden_target;
    }
    if (object.mining_increment !== undefined && object.mining_increment !== null) {
      message.miningIncrement = object.mining_increment;
    }
    if (object.window_short !== undefined && object.window_short !== null) {
      message.windowShort = BigInt(object.window_short);
    }
    if (object.window_long !== undefined && object.window_long !== null) {
      message.windowLong = BigInt(object.window_long);
    }
    if (object.window_probation !== undefined && object.window_probation !== null) {
      message.windowProbation = BigInt(object.window_probation);
    }
    if (object.burn_tax_split !== undefined && object.burn_tax_split !== null) {
      message.burnTaxSplit = object.burn_tax_split;
    }
    if (object.min_initial_deposit_ratio !== undefined && object.min_initial_deposit_ratio !== null) {
      message.minInitialDepositRatio = object.min_initial_deposit_ratio;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.tax_policy = message.taxPolicy ? PolicyConstraints.toAmino(message.taxPolicy) : undefined;
    obj.reward_policy = message.rewardPolicy ? PolicyConstraints.toAmino(message.rewardPolicy) : undefined;
    obj.seigniorage_burden_target = message.seigniorageBurdenTarget === "" ? undefined : message.seigniorageBurdenTarget;
    obj.mining_increment = message.miningIncrement === "" ? undefined : message.miningIncrement;
    obj.window_short = message.windowShort !== BigInt(0) ? message.windowShort.toString() : undefined;
    obj.window_long = message.windowLong !== BigInt(0) ? message.windowLong.toString() : undefined;
    obj.window_probation = message.windowProbation !== BigInt(0) ? message.windowProbation.toString() : undefined;
    obj.burn_tax_split = message.burnTaxSplit === "" ? undefined : message.burnTaxSplit;
    obj.min_initial_deposit_ratio = message.minInitialDepositRatio === "" ? undefined : message.minInitialDepositRatio;
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
      typeUrl: "/terra.treasury.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBasePolicyConstraints(): PolicyConstraints {
  return {
    rateMin: "",
    rateMax: "",
    cap: Coin.fromPartial({}),
    changeRateMax: ""
  };
}
export const PolicyConstraints = {
  typeUrl: "/terra.treasury.v1beta1.PolicyConstraints",
  encode(message: PolicyConstraints, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rateMin !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rateMin, 18).atomics);
    }
    if (message.rateMax !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rateMax, 18).atomics);
    }
    if (message.cap !== undefined) {
      Coin.encode(message.cap, writer.uint32(26).fork()).ldelim();
    }
    if (message.changeRateMax !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.changeRateMax, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): PolicyConstraints {
    return {
      rateMin: isSet(object.rateMin) ? String(object.rateMin) : "",
      rateMax: isSet(object.rateMax) ? String(object.rateMax) : "",
      cap: isSet(object.cap) ? Coin.fromJSON(object.cap) : undefined,
      changeRateMax: isSet(object.changeRateMax) ? String(object.changeRateMax) : ""
    };
  },
  fromPartial(object: Partial<PolicyConstraints>): PolicyConstraints {
    const message = createBasePolicyConstraints();
    message.rateMin = object.rateMin ?? "";
    message.rateMax = object.rateMax ?? "";
    message.cap = object.cap !== undefined && object.cap !== null ? Coin.fromPartial(object.cap) : undefined;
    message.changeRateMax = object.changeRateMax ?? "";
    return message;
  },
  fromAmino(object: PolicyConstraintsAmino): PolicyConstraints {
    const message = createBasePolicyConstraints();
    if (object.rate_min !== undefined && object.rate_min !== null) {
      message.rateMin = object.rate_min;
    }
    if (object.rate_max !== undefined && object.rate_max !== null) {
      message.rateMax = object.rate_max;
    }
    if (object.cap !== undefined && object.cap !== null) {
      message.cap = Coin.fromAmino(object.cap);
    }
    if (object.change_rate_max !== undefined && object.change_rate_max !== null) {
      message.changeRateMax = object.change_rate_max;
    }
    return message;
  },
  toAmino(message: PolicyConstraints): PolicyConstraintsAmino {
    const obj: any = {};
    obj.rate_min = message.rateMin === "" ? undefined : message.rateMin;
    obj.rate_max = message.rateMax === "" ? undefined : message.rateMax;
    obj.cap = message.cap ? Coin.toAmino(message.cap) : undefined;
    obj.change_rate_max = message.changeRateMax === "" ? undefined : message.changeRateMax;
    return obj;
  },
  fromAminoMsg(object: PolicyConstraintsAminoMsg): PolicyConstraints {
    return PolicyConstraints.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyConstraintsProtoMsg): PolicyConstraints {
    return PolicyConstraints.decode(message.value);
  },
  toProto(message: PolicyConstraints): Uint8Array {
    return PolicyConstraints.encode(message).finish();
  },
  toProtoMsg(message: PolicyConstraints): PolicyConstraintsProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.PolicyConstraints",
      value: PolicyConstraints.encode(message).finish()
    };
  }
};
function createBaseEpochTaxProceeds(): EpochTaxProceeds {
  return {
    taxProceeds: []
  };
}
export const EpochTaxProceeds = {
  typeUrl: "/terra.treasury.v1beta1.EpochTaxProceeds",
  encode(message: EpochTaxProceeds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EpochTaxProceeds {
    return {
      taxProceeds: Array.isArray(object?.taxProceeds) ? object.taxProceeds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EpochTaxProceeds>): EpochTaxProceeds {
    const message = createBaseEpochTaxProceeds();
    message.taxProceeds = object.taxProceeds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochTaxProceedsAmino): EpochTaxProceeds {
    const message = createBaseEpochTaxProceeds();
    message.taxProceeds = object.tax_proceeds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EpochTaxProceeds): EpochTaxProceedsAmino {
    const obj: any = {};
    if (message.taxProceeds) {
      obj.tax_proceeds = message.taxProceeds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tax_proceeds = message.taxProceeds;
    }
    return obj;
  },
  fromAminoMsg(object: EpochTaxProceedsAminoMsg): EpochTaxProceeds {
    return EpochTaxProceeds.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochTaxProceedsProtoMsg): EpochTaxProceeds {
    return EpochTaxProceeds.decode(message.value);
  },
  toProto(message: EpochTaxProceeds): Uint8Array {
    return EpochTaxProceeds.encode(message).finish();
  },
  toProtoMsg(message: EpochTaxProceeds): EpochTaxProceedsProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.EpochTaxProceeds",
      value: EpochTaxProceeds.encode(message).finish()
    };
  }
};
function createBaseEpochInitialIssuance(): EpochInitialIssuance {
  return {
    issuance: []
  };
}
export const EpochInitialIssuance = {
  typeUrl: "/terra.treasury.v1beta1.EpochInitialIssuance",
  encode(message: EpochInitialIssuance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.issuance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EpochInitialIssuance {
    return {
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EpochInitialIssuance>): EpochInitialIssuance {
    const message = createBaseEpochInitialIssuance();
    message.issuance = object.issuance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochInitialIssuanceAmino): EpochInitialIssuance {
    const message = createBaseEpochInitialIssuance();
    message.issuance = object.issuance?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EpochInitialIssuance): EpochInitialIssuanceAmino {
    const obj: any = {};
    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.issuance = message.issuance;
    }
    return obj;
  },
  fromAminoMsg(object: EpochInitialIssuanceAminoMsg): EpochInitialIssuance {
    return EpochInitialIssuance.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochInitialIssuanceProtoMsg): EpochInitialIssuance {
    return EpochInitialIssuance.decode(message.value);
  },
  toProto(message: EpochInitialIssuance): Uint8Array {
    return EpochInitialIssuance.encode(message).finish();
  },
  toProtoMsg(message: EpochInitialIssuance): EpochInitialIssuanceProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.EpochInitialIssuance",
      value: EpochInitialIssuance.encode(message).finish()
    };
  }
};