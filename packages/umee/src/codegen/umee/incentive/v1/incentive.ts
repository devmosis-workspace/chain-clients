import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the incentive module. */
export interface Params {
  /**
   * max_unbondings is the maximum amount of concurrent unbondings an address can have
   * of each bonded uToken denom. Zero is interpreted as no limit.
   */
  maxUnbondings: number;
  /** unbonding_duration is the unbonding duration (in seconds). */
  unbondingDuration: bigint;
  /**
   * emergency_unbond_fee is the portion of a bond that is paid when it is instantly
   * released using MsgEmergencyUnbond. For example, 0.01 is a 1% fee. Ranges 0-1.
   */
  emergencyUnbondFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/umee.incentive.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the incentive module. */
export interface ParamsAmino {
  /**
   * max_unbondings is the maximum amount of concurrent unbondings an address can have
   * of each bonded uToken denom. Zero is interpreted as no limit.
   */
  max_unbondings: number;
  /** unbonding_duration is the unbonding duration (in seconds). */
  unbonding_duration: string;
  /**
   * emergency_unbond_fee is the portion of a bond that is paid when it is instantly
   * released using MsgEmergencyUnbond. For example, 0.01 is a 1% fee. Ranges 0-1.
   */
  emergency_unbond_fee: string;
}
export interface ParamsAminoMsg {
  type: "/umee.incentive.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the incentive module. */
export interface ParamsSDKType {
  max_unbondings: number;
  unbonding_duration: bigint;
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
  startTime: bigint;
  /**
   * duration is the length of the incentive program from start time to
   * completion in seconds.
   */
  duration: bigint;
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
  totalRewards: Coin;
  /**
   * remaining_rewards are total amount of this program's funded rewards
   * which have not yet been allocated to suppliers. This is zero until the
   * program is both passed by governance and funded, at which point it
   * starts at the same value as total_rewards then begins decreasing
   * to zero as the program runs to completion.
   */
  remainingRewards: Coin;
}
export interface IncentiveProgramProtoMsg {
  typeUrl: "/umee.incentive.v1.IncentiveProgram";
  value: Uint8Array;
}
/**
 * IncentiveProgram defines a liquidity mining incentive program on a single
 * locked uToken denom that will run for a set amount of time.
 */
export interface IncentiveProgramAmino {
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
  start_time: string;
  /**
   * duration is the length of the incentive program from start time to
   * completion in seconds.
   */
  duration: string;
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
  total_rewards?: CoinAmino;
  /**
   * remaining_rewards are total amount of this program's funded rewards
   * which have not yet been allocated to suppliers. This is zero until the
   * program is both passed by governance and funded, at which point it
   * starts at the same value as total_rewards then begins decreasing
   * to zero as the program runs to completion.
   */
  remaining_rewards?: CoinAmino;
}
export interface IncentiveProgramAminoMsg {
  type: "/umee.incentive.v1.IncentiveProgram";
  value: IncentiveProgramAmino;
}
/**
 * IncentiveProgram defines a liquidity mining incentive program on a single
 * locked uToken denom that will run for a set amount of time.
 */
export interface IncentiveProgramSDKType {
  ID: number;
  start_time: bigint;
  duration: bigint;
  uToken: string;
  funded: boolean;
  total_rewards: CoinSDKType;
  remaining_rewards: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    maxUnbondings: 0,
    unbondingDuration: BigInt(0),
    emergencyUnbondFee: ""
  };
}
export const Params = {
  typeUrl: "/umee.incentive.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxUnbondings !== 0) {
      writer.uint32(8).uint32(message.maxUnbondings);
    }
    if (message.unbondingDuration !== BigInt(0)) {
      writer.uint32(16).int64(message.unbondingDuration);
    }
    if (message.emergencyUnbondFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.emergencyUnbondFee, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      maxUnbondings: isSet(object.maxUnbondings) ? Number(object.maxUnbondings) : 0,
      unbondingDuration: isSet(object.unbondingDuration) ? BigInt(object.unbondingDuration.toString()) : BigInt(0),
      emergencyUnbondFee: isSet(object.emergencyUnbondFee) ? String(object.emergencyUnbondFee) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxUnbondings = object.maxUnbondings ?? 0;
    message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? BigInt(object.unbondingDuration.toString()) : BigInt(0);
    message.emergencyUnbondFee = object.emergencyUnbondFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      maxUnbondings: object.max_unbondings,
      unbondingDuration: BigInt(object.unbonding_duration),
      emergencyUnbondFee: object.emergency_unbond_fee
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_unbondings = message.maxUnbondings;
    obj.unbonding_duration = message.unbondingDuration ? message.unbondingDuration.toString() : undefined;
    obj.emergency_unbond_fee = message.emergencyUnbondFee;
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
      typeUrl: "/umee.incentive.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseIncentiveProgram(): IncentiveProgram {
  return {
    ID: 0,
    startTime: BigInt(0),
    duration: BigInt(0),
    uToken: "",
    funded: false,
    totalRewards: Coin.fromPartial({}),
    remainingRewards: Coin.fromPartial({})
  };
}
export const IncentiveProgram = {
  typeUrl: "/umee.incentive.v1.IncentiveProgram",
  encode(message: IncentiveProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ID !== 0) {
      writer.uint32(8).uint32(message.ID);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    if (message.duration !== BigInt(0)) {
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
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      duration: isSet(object.duration) ? BigInt(object.duration.toString()) : BigInt(0),
      uToken: isSet(object.uToken) ? String(object.uToken) : "",
      funded: isSet(object.funded) ? Boolean(object.funded) : false,
      totalRewards: isSet(object.totalRewards) ? Coin.fromJSON(object.totalRewards) : undefined,
      remainingRewards: isSet(object.remainingRewards) ? Coin.fromJSON(object.remainingRewards) : undefined
    };
  },
  fromPartial(object: Partial<IncentiveProgram>): IncentiveProgram {
    const message = createBaseIncentiveProgram();
    message.ID = object.ID ?? 0;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.uToken = object.uToken ?? "";
    message.funded = object.funded ?? false;
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? Coin.fromPartial(object.totalRewards) : undefined;
    message.remainingRewards = object.remainingRewards !== undefined && object.remainingRewards !== null ? Coin.fromPartial(object.remainingRewards) : undefined;
    return message;
  },
  fromAmino(object: IncentiveProgramAmino): IncentiveProgram {
    return {
      ID: object.ID,
      startTime: BigInt(object.start_time),
      duration: BigInt(object.duration),
      uToken: object.uToken,
      funded: object.funded,
      totalRewards: object?.total_rewards ? Coin.fromAmino(object.total_rewards) : undefined,
      remainingRewards: object?.remaining_rewards ? Coin.fromAmino(object.remaining_rewards) : undefined
    };
  },
  toAmino(message: IncentiveProgram): IncentiveProgramAmino {
    const obj: any = {};
    obj.ID = message.ID;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    obj.uToken = message.uToken;
    obj.funded = message.funded;
    obj.total_rewards = message.totalRewards ? Coin.toAmino(message.totalRewards) : undefined;
    obj.remaining_rewards = message.remainingRewards ? Coin.toAmino(message.remainingRewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveProgramAminoMsg): IncentiveProgram {
    return IncentiveProgram.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentiveProgramProtoMsg): IncentiveProgram {
    return IncentiveProgram.decode(message.value);
  },
  toProto(message: IncentiveProgram): Uint8Array {
    return IncentiveProgram.encode(message).finish();
  },
  toProtoMsg(message: IncentiveProgram): IncentiveProgramProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.IncentiveProgram",
      value: IncentiveProgram.encode(message).finish()
    };
  }
};