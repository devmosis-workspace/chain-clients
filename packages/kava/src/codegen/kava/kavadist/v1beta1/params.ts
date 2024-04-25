import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** Params governance parameters for kavadist module */
export interface Params {
  active: boolean;
  periods: Period[];
  infrastructureParams: InfrastructureParams;
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.Params";
  value: Uint8Array;
}
/** Params governance parameters for kavadist module */
export interface ParamsAmino {
  active?: boolean;
  periods?: PeriodAmino[];
  infrastructure_params?: InfrastructureParamsAmino;
}
export interface ParamsAminoMsg {
  type: "/kava.kavadist.v1beta1.Params";
  value: ParamsAmino;
}
/** Params governance parameters for kavadist module */
export interface ParamsSDKType {
  active: boolean;
  periods: PeriodSDKType[];
  infrastructure_params: InfrastructureParamsSDKType;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParams {
  infrastructurePeriods: Period[];
  coreRewards: CoreReward[];
  partnerRewards: PartnerReward[];
}
export interface InfrastructureParamsProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.InfrastructureParams";
  value: Uint8Array;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParamsAmino {
  infrastructure_periods?: PeriodAmino[];
  core_rewards?: CoreRewardAmino[];
  partner_rewards?: PartnerRewardAmino[];
}
export interface InfrastructureParamsAminoMsg {
  type: "/kava.kavadist.v1beta1.InfrastructureParams";
  value: InfrastructureParamsAmino;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParamsSDKType {
  infrastructure_periods: PeriodSDKType[];
  core_rewards: CoreRewardSDKType[];
  partner_rewards: PartnerRewardSDKType[];
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreReward {
  address: Uint8Array;
  weight: string;
}
export interface CoreRewardProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.CoreReward";
  value: Uint8Array;
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreRewardAmino {
  address?: string;
  weight?: string;
}
export interface CoreRewardAminoMsg {
  type: "/kava.kavadist.v1beta1.CoreReward";
  value: CoreRewardAmino;
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreRewardSDKType {
  address: Uint8Array;
  weight: string;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerReward {
  address: Uint8Array;
  rewardsPerSecond: Coin;
}
export interface PartnerRewardProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.PartnerReward";
  value: Uint8Array;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerRewardAmino {
  address?: string;
  rewards_per_second?: CoinAmino;
}
export interface PartnerRewardAminoMsg {
  type: "/kava.kavadist.v1beta1.PartnerReward";
  value: PartnerRewardAmino;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerRewardSDKType {
  address: Uint8Array;
  rewards_per_second: CoinSDKType;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface Period {
  /** example "2020-03-01T15:20:00Z" */
  start: Timestamp;
  /** example "2020-06-01T15:20:00Z" */
  end: Timestamp;
  /** example "1.000000003022265980"  - 10% inflation */
  inflation: Uint8Array;
}
export interface PeriodProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.Period";
  value: Uint8Array;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface PeriodAmino {
  /** example "2020-03-01T15:20:00Z" */
  start?: string;
  /** example "2020-06-01T15:20:00Z" */
  end?: string;
  /** example "1.000000003022265980"  - 10% inflation */
  inflation?: string;
}
export interface PeriodAminoMsg {
  type: "/kava.kavadist.v1beta1.Period";
  value: PeriodAmino;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface PeriodSDKType {
  start: TimestampSDKType;
  end: TimestampSDKType;
  inflation: Uint8Array;
}
function createBaseParams(): Params {
  return {
    active: false,
    periods: [],
    infrastructureParams: InfrastructureParams.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/kava.kavadist.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.infrastructureParams !== undefined) {
      InfrastructureParams.encode(message.infrastructureParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Period.fromJSON(e)) : [],
      infrastructureParams: isSet(object.infrastructureParams) ? InfrastructureParams.fromJSON(object.infrastructureParams) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.active = object.active ?? false;
    message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
    message.infrastructureParams = object.infrastructureParams !== undefined && object.infrastructureParams !== null ? InfrastructureParams.fromPartial(object.infrastructureParams) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    message.periods = object.periods?.map(e => Period.fromAmino(e)) || [];
    if (object.infrastructure_params !== undefined && object.infrastructure_params !== null) {
      message.infrastructureParams = InfrastructureParams.fromAmino(object.infrastructure_params);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.active = message.active;
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.periods = [];
    }
    obj.infrastructure_params = message.infrastructureParams ? InfrastructureParams.toAmino(message.infrastructureParams) : undefined;
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
      typeUrl: "/kava.kavadist.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseInfrastructureParams(): InfrastructureParams {
  return {
    infrastructurePeriods: [],
    coreRewards: [],
    partnerRewards: []
  };
}
export const InfrastructureParams = {
  typeUrl: "/kava.kavadist.v1beta1.InfrastructureParams",
  encode(message: InfrastructureParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.infrastructurePeriods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.coreRewards) {
      CoreReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.partnerRewards) {
      PartnerReward.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): InfrastructureParams {
    return {
      infrastructurePeriods: Array.isArray(object?.infrastructurePeriods) ? object.infrastructurePeriods.map((e: any) => Period.fromJSON(e)) : [],
      coreRewards: Array.isArray(object?.coreRewards) ? object.coreRewards.map((e: any) => CoreReward.fromJSON(e)) : [],
      partnerRewards: Array.isArray(object?.partnerRewards) ? object.partnerRewards.map((e: any) => PartnerReward.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<InfrastructureParams>): InfrastructureParams {
    const message = createBaseInfrastructureParams();
    message.infrastructurePeriods = object.infrastructurePeriods?.map(e => Period.fromPartial(e)) || [];
    message.coreRewards = object.coreRewards?.map(e => CoreReward.fromPartial(e)) || [];
    message.partnerRewards = object.partnerRewards?.map(e => PartnerReward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InfrastructureParamsAmino): InfrastructureParams {
    const message = createBaseInfrastructureParams();
    message.infrastructurePeriods = object.infrastructure_periods?.map(e => Period.fromAmino(e)) || [];
    message.coreRewards = object.core_rewards?.map(e => CoreReward.fromAmino(e)) || [];
    message.partnerRewards = object.partner_rewards?.map(e => PartnerReward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InfrastructureParams): InfrastructureParamsAmino {
    const obj: any = {};
    if (message.infrastructurePeriods) {
      obj.infrastructure_periods = message.infrastructurePeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.infrastructure_periods = [];
    }
    if (message.coreRewards) {
      obj.core_rewards = message.coreRewards.map(e => e ? CoreReward.toAmino(e) : undefined);
    } else {
      obj.core_rewards = [];
    }
    if (message.partnerRewards) {
      obj.partner_rewards = message.partnerRewards.map(e => e ? PartnerReward.toAmino(e) : undefined);
    } else {
      obj.partner_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: InfrastructureParamsAminoMsg): InfrastructureParams {
    return InfrastructureParams.fromAmino(object.value);
  },
  fromProtoMsg(message: InfrastructureParamsProtoMsg): InfrastructureParams {
    return InfrastructureParams.decode(message.value);
  },
  toProto(message: InfrastructureParams): Uint8Array {
    return InfrastructureParams.encode(message).finish();
  },
  toProtoMsg(message: InfrastructureParams): InfrastructureParamsProtoMsg {
    return {
      typeUrl: "/kava.kavadist.v1beta1.InfrastructureParams",
      value: InfrastructureParams.encode(message).finish()
    };
  }
};
function createBaseCoreReward(): CoreReward {
  return {
    address: new Uint8Array(),
    weight: ""
  };
}
export const CoreReward = {
  typeUrl: "/kava.kavadist.v1beta1.CoreReward",
  encode(message: CoreReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): CoreReward {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<CoreReward>): CoreReward {
    const message = createBaseCoreReward();
    message.address = object.address ?? new Uint8Array();
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: CoreRewardAmino): CoreReward {
    const message = createBaseCoreReward();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: CoreReward): CoreRewardAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: CoreRewardAminoMsg): CoreReward {
    return CoreReward.fromAmino(object.value);
  },
  fromProtoMsg(message: CoreRewardProtoMsg): CoreReward {
    return CoreReward.decode(message.value);
  },
  toProto(message: CoreReward): Uint8Array {
    return CoreReward.encode(message).finish();
  },
  toProtoMsg(message: CoreReward): CoreRewardProtoMsg {
    return {
      typeUrl: "/kava.kavadist.v1beta1.CoreReward",
      value: CoreReward.encode(message).finish()
    };
  }
};
function createBasePartnerReward(): PartnerReward {
  return {
    address: new Uint8Array(),
    rewardsPerSecond: Coin.fromPartial({})
  };
}
export const PartnerReward = {
  typeUrl: "/kava.kavadist.v1beta1.PartnerReward",
  encode(message: PartnerReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.rewardsPerSecond !== undefined) {
      Coin.encode(message.rewardsPerSecond, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PartnerReward {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      rewardsPerSecond: isSet(object.rewardsPerSecond) ? Coin.fromJSON(object.rewardsPerSecond) : undefined
    };
  },
  fromPartial(object: Partial<PartnerReward>): PartnerReward {
    const message = createBasePartnerReward();
    message.address = object.address ?? new Uint8Array();
    message.rewardsPerSecond = object.rewardsPerSecond !== undefined && object.rewardsPerSecond !== null ? Coin.fromPartial(object.rewardsPerSecond) : undefined;
    return message;
  },
  fromAmino(object: PartnerRewardAmino): PartnerReward {
    const message = createBasePartnerReward();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.rewards_per_second !== undefined && object.rewards_per_second !== null) {
      message.rewardsPerSecond = Coin.fromAmino(object.rewards_per_second);
    }
    return message;
  },
  toAmino(message: PartnerReward): PartnerRewardAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.rewards_per_second = message.rewardsPerSecond ? Coin.toAmino(message.rewardsPerSecond) : undefined;
    return obj;
  },
  fromAminoMsg(object: PartnerRewardAminoMsg): PartnerReward {
    return PartnerReward.fromAmino(object.value);
  },
  fromProtoMsg(message: PartnerRewardProtoMsg): PartnerReward {
    return PartnerReward.decode(message.value);
  },
  toProto(message: PartnerReward): Uint8Array {
    return PartnerReward.encode(message).finish();
  },
  toProtoMsg(message: PartnerReward): PartnerRewardProtoMsg {
    return {
      typeUrl: "/kava.kavadist.v1beta1.PartnerReward",
      value: PartnerReward.encode(message).finish()
    };
  }
};
function createBasePeriod(): Period {
  return {
    start: Timestamp.fromPartial({}),
    end: Timestamp.fromPartial({}),
    inflation: new Uint8Array()
  };
}
export const Period = {
  typeUrl: "/kava.kavadist.v1beta1.Period",
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(18).fork()).ldelim();
    }
    if (message.inflation.length !== 0) {
      writer.uint32(26).bytes(message.inflation);
    }
    return writer;
  },
  fromJSON(object: any): Period {
    return {
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Period>): Period {
    const message = createBasePeriod();
    message.start = object.start !== undefined && object.start !== null ? Timestamp.fromPartial(object.start) : undefined;
    message.end = object.end !== undefined && object.end !== null ? Timestamp.fromPartial(object.end) : undefined;
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PeriodAmino): Period {
    const message = createBasePeriod();
    if (object.start !== undefined && object.start !== null) {
      message.start = Timestamp.fromAmino(object.start);
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromAmino(object.end);
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = bytesFromBase64(object.inflation);
    }
    return message;
  },
  toAmino(message: Period): PeriodAmino {
    const obj: any = {};
    obj.start = message.start ? Timestamp.toAmino(message.start) : undefined;
    obj.end = message.end ? Timestamp.toAmino(message.end) : undefined;
    obj.inflation = message.inflation ? base64FromBytes(message.inflation) : undefined;
    return obj;
  },
  fromAminoMsg(object: PeriodAminoMsg): Period {
    return Period.fromAmino(object.value);
  },
  fromProtoMsg(message: PeriodProtoMsg): Period {
    return Period.decode(message.value);
  },
  toProto(message: Period): Uint8Array {
    return Period.encode(message).finish();
  },
  toProtoMsg(message: Period): PeriodProtoMsg {
    return {
      typeUrl: "/kava.kavadist.v1beta1.Period",
      value: Period.encode(message).finish()
    };
  }
};