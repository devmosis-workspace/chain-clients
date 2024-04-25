import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** Params defines the parameters of the community module. */
export interface Params {
  /**
   * upgrade_time_disable_inflation is the time at which to disable mint and kavadist module inflation.
   * If set to 0, inflation will be disabled from block 1.
   */
  upgradeTimeDisableInflation: Timestamp;
  /** staking_rewards_per_second is the amount paid out to delegators each block from the community account */
  stakingRewardsPerSecond: string;
  /**
   * upgrade_time_set_staking_rewards_per_second is the initial staking_rewards_per_second to set
   * and use when the disable inflation time is reached
   */
  upgradeTimeSetStakingRewardsPerSecond: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.community.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters of the community module. */
export interface ParamsAmino {
  /**
   * upgrade_time_disable_inflation is the time at which to disable mint and kavadist module inflation.
   * If set to 0, inflation will be disabled from block 1.
   */
  upgrade_time_disable_inflation?: string;
  /** staking_rewards_per_second is the amount paid out to delegators each block from the community account */
  staking_rewards_per_second?: string;
  /**
   * upgrade_time_set_staking_rewards_per_second is the initial staking_rewards_per_second to set
   * and use when the disable inflation time is reached
   */
  upgrade_time_set_staking_rewards_per_second?: string;
}
export interface ParamsAminoMsg {
  type: "/kava.community.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters of the community module. */
export interface ParamsSDKType {
  upgrade_time_disable_inflation: TimestampSDKType;
  staking_rewards_per_second: string;
  upgrade_time_set_staking_rewards_per_second: string;
}
function createBaseParams(): Params {
  return {
    upgradeTimeDisableInflation: Timestamp.fromPartial({}),
    stakingRewardsPerSecond: "",
    upgradeTimeSetStakingRewardsPerSecond: ""
  };
}
export const Params = {
  typeUrl: "/kava.community.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgradeTimeDisableInflation !== undefined) {
      Timestamp.encode(message.upgradeTimeDisableInflation, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakingRewardsPerSecond !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.stakingRewardsPerSecond, 18).atomics);
    }
    if (message.upgradeTimeSetStakingRewardsPerSecond !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.upgradeTimeSetStakingRewardsPerSecond, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      upgradeTimeDisableInflation: isSet(object.upgradeTimeDisableInflation) ? fromJsonTimestamp(object.upgradeTimeDisableInflation) : undefined,
      stakingRewardsPerSecond: isSet(object.stakingRewardsPerSecond) ? String(object.stakingRewardsPerSecond) : "",
      upgradeTimeSetStakingRewardsPerSecond: isSet(object.upgradeTimeSetStakingRewardsPerSecond) ? String(object.upgradeTimeSetStakingRewardsPerSecond) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.upgradeTimeDisableInflation = object.upgradeTimeDisableInflation !== undefined && object.upgradeTimeDisableInflation !== null ? Timestamp.fromPartial(object.upgradeTimeDisableInflation) : undefined;
    message.stakingRewardsPerSecond = object.stakingRewardsPerSecond ?? "";
    message.upgradeTimeSetStakingRewardsPerSecond = object.upgradeTimeSetStakingRewardsPerSecond ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.upgrade_time_disable_inflation !== undefined && object.upgrade_time_disable_inflation !== null) {
      message.upgradeTimeDisableInflation = Timestamp.fromAmino(object.upgrade_time_disable_inflation);
    }
    if (object.staking_rewards_per_second !== undefined && object.staking_rewards_per_second !== null) {
      message.stakingRewardsPerSecond = object.staking_rewards_per_second;
    }
    if (object.upgrade_time_set_staking_rewards_per_second !== undefined && object.upgrade_time_set_staking_rewards_per_second !== null) {
      message.upgradeTimeSetStakingRewardsPerSecond = object.upgrade_time_set_staking_rewards_per_second;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.upgrade_time_disable_inflation = message.upgradeTimeDisableInflation ? Timestamp.toAmino(message.upgradeTimeDisableInflation) : undefined;
    obj.staking_rewards_per_second = message.stakingRewardsPerSecond;
    obj.upgrade_time_set_staking_rewards_per_second = message.upgradeTimeSetStakingRewardsPerSecond;
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
      typeUrl: "/kava.community.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};