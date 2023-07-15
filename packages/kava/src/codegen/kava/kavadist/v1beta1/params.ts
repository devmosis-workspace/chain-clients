import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
/** Params governance parameters for kavadist module */
export interface Params {
  active: boolean;
  periods: Period[];
  infrastructureParams?: InfrastructureParams;
}
/** Params governance parameters for kavadist module */
export interface ParamsSDKType {
  active: boolean;
  periods: PeriodSDKType[];
  infrastructure_params?: InfrastructureParamsSDKType;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParams {
  infrastructurePeriods: Period[];
  coreRewards: CoreReward[];
  partnerRewards: PartnerReward[];
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
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreRewardSDKType {
  address: Uint8Array;
  weight: string;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerReward {
  address: Uint8Array;
  rewardsPerSecond?: Coin;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerRewardSDKType {
  address: Uint8Array;
  rewards_per_second?: CoinSDKType;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface Period {
  /** example "2020-03-01T15:20:00Z" */
  start?: Timestamp;
  /** example "2020-06-01T15:20:00Z" */
  end?: Timestamp;
  /** example "1.000000003022265980"  - 10% inflation */
  inflation: Uint8Array;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface PeriodSDKType {
  start?: TimestampSDKType;
  end?: TimestampSDKType;
  inflation: Uint8Array;
}
function createBaseParams(): Params {
  return {
    active: false,
    periods: [],
    infrastructureParams: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: InfrastructureParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCoreReward(): CoreReward {
  return {
    address: new Uint8Array(),
    weight: ""
  };
}
export const CoreReward = {
  encode(message: CoreReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
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
  }
};
function createBasePartnerReward(): PartnerReward {
  return {
    address: new Uint8Array(),
    rewardsPerSecond: undefined
  };
}
export const PartnerReward = {
  encode(message: PartnerReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBasePeriod(): Period {
  return {
    start: undefined,
    end: undefined,
    inflation: new Uint8Array()
  };
}
export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};