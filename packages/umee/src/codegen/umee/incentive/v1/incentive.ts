import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the incentive module. */
export interface Params {
  /**
   * max_unbondings is the maximum amount of concurrent unbondings an address can have
   * of each bonded uToken denom. Zero is interpreted as no limit.
   */
  maxUnbondings: number;
  /** unbonding_duration is the unbonding duration (in seconds). */
  unbondingDuration: Long;
  /**
   * emergency_unbond_fee is the portion of a bond that is paid when it is instantly
   * released using MsgEmergencyUnbond. For example, 0.01 is a 1% fee. Ranges 0-1.
   */
  emergencyUnbondFee: string;
}
/** Params defines the parameters for the incentive module. */
export interface ParamsSDKType {
  max_unbondings: number;
  unbonding_duration: Long;
  emergency_unbond_fee: string;
}
/**
 * IncentiveProgram defines a liquidity mining incentive program on a single
 * locked uToken denom that will run for a set amount of time.
 */
export interface IncentiveProgram {
  /**
   * ID uniquely identifies the incentive program after it has been created.
   * It is zero when the program is being proposed by governance, and is set
   * to its final value when the proposal passes.
   */
  ID: number;
  /**
   * start_time is the unix time (in seconds) at which the incentives begin.
   * If a program is passed after its intended start time, its start time
   * will be increased to the current time, with program duration unchanged.
   */
  startTime: Long;
  /**
   * duration is the length of the incentive program from start time to
   * completion in seconds.
   */
  duration: Long;
  /**
   * uToken is the incentivized uToken collateral denom. Suppliers who collateralize
   * this asset then bond it to the incentive module are eligible for this program's
   * rewards.
   */
  uToken: string;
  /**
   * funded indicates whether a program bas been funded. This can happen when
   * a program passes if funding from community fund, or any time before the
   * program's start time if funding with MsgSponsor. A program that reaches
   * its start time without being funded is cancelled.
   */
  funded: boolean;
  /**
   * total_rewards are total amount of rewards which can be distributed to
   * suppliers by this program. This is set to its final value when the program
   * is proposed by governance.
   */
  totalRewards?: Coin;
  /**
   * remaining_rewards are total amount of this program's funded rewards
   * which have not yet been allocated to suppliers. This is zero until the
   * program is both passed by governance and funded, at which point it
   * starts at the same value as total_rewards then begins decreasing
   * to zero as the program runs to completion.
   */
  remainingRewards?: Coin;
}
/**
 * IncentiveProgram defines a liquidity mining incentive program on a single
 * locked uToken denom that will run for a set amount of time.
 */
export interface IncentiveProgramSDKType {
  ID: number;
  start_time: Long;
  duration: Long;
  uToken: string;
  funded: boolean;
  total_rewards?: CoinSDKType;
  remaining_rewards?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    maxUnbondings: 0,
    unbondingDuration: Long.ZERO,
    emergencyUnbondFee: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxUnbondings !== 0) {
      writer.uint32(8).uint32(message.maxUnbondings);
    }
    if (!message.unbondingDuration.isZero()) {
      writer.uint32(16).int64(message.unbondingDuration);
    }
    if (message.emergencyUnbondFee !== "") {
      writer.uint32(26).string(message.emergencyUnbondFee);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      maxUnbondings: isSet(object.maxUnbondings) ? Number(object.maxUnbondings) : 0,
      unbondingDuration: isSet(object.unbondingDuration) ? Long.fromValue(object.unbondingDuration) : Long.ZERO,
      emergencyUnbondFee: isSet(object.emergencyUnbondFee) ? String(object.emergencyUnbondFee) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxUnbondings = object.maxUnbondings ?? 0;
    message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? Long.fromValue(object.unbondingDuration) : Long.ZERO;
    message.emergencyUnbondFee = object.emergencyUnbondFee ?? "";
    return message;
  }
};
function createBaseIncentiveProgram(): IncentiveProgram {
  return {
    ID: 0,
    startTime: Long.ZERO,
    duration: Long.ZERO,
    uToken: "",
    funded: false,
    totalRewards: undefined,
    remainingRewards: undefined
  };
}
export const IncentiveProgram = {
  encode(message: IncentiveProgram, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== 0) {
      writer.uint32(8).uint32(message.ID);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(16).int64(message.startTime);
    }
    if (!message.duration.isZero()) {
      writer.uint32(24).int64(message.duration);
    }
    if (message.uToken !== "") {
      writer.uint32(34).string(message.uToken);
    }
    if (message.funded === true) {
      writer.uint32(40).bool(message.funded);
    }
    if (message.totalRewards !== undefined) {
      Coin.encode(message.totalRewards, writer.uint32(50).fork()).ldelim();
    }
    if (message.remainingRewards !== undefined) {
      Coin.encode(message.remainingRewards, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IncentiveProgram {
    return {
      ID: isSet(object.ID) ? Number(object.ID) : 0,
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.ZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.ZERO,
      uToken: isSet(object.uToken) ? String(object.uToken) : "",
      funded: isSet(object.funded) ? Boolean(object.funded) : false,
      totalRewards: isSet(object.totalRewards) ? Coin.fromJSON(object.totalRewards) : undefined,
      remainingRewards: isSet(object.remainingRewards) ? Coin.fromJSON(object.remainingRewards) : undefined
    };
  },
  fromPartial(object: Partial<IncentiveProgram>): IncentiveProgram {
    const message = createBaseIncentiveProgram();
    message.ID = object.ID ?? 0;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.ZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.ZERO;
    message.uToken = object.uToken ?? "";
    message.funded = object.funded ?? false;
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? Coin.fromPartial(object.totalRewards) : undefined;
    message.remainingRewards = object.remainingRewards !== undefined && object.remainingRewards !== null ? Coin.fromPartial(object.remainingRewards) : undefined;
    return message;
  }
};