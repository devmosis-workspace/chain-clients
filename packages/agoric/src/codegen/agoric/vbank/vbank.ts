import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
/** The module governance/configuration parameters. */
export interface Params {
  /**
   * reward_epoch_duration_blocks is the length of a reward epoch, in blocks.
   * A value of zero has the same meaning as a value of one:
   * the full reward buffer should be distributed immediately.
   */
  rewardEpochDurationBlocks: bigint;
  /**
   * per_epoch_reward_fraction is a fraction of the reward pool to distrubute
   * once every reward epoch.  If less than zero, use approximately continuous
   * per-block distribution.
   */
  perEpochRewardFraction: string;
  /**
   * reward_smoothing_blocks is the number of blocks over which to distribute
   * an epoch's rewards.  If zero, use the same value as
   * reward_epoch_duration_blocks.
   */
  rewardSmoothingBlocks: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/agoric.vbank.Params";
  value: Uint8Array;
}
/** The module governance/configuration parameters. */
export interface ParamsAmino {
  /**
   * reward_epoch_duration_blocks is the length of a reward epoch, in blocks.
   * A value of zero has the same meaning as a value of one:
   * the full reward buffer should be distributed immediately.
   */
  reward_epoch_duration_blocks: string;
  /**
   * per_epoch_reward_fraction is a fraction of the reward pool to distrubute
   * once every reward epoch.  If less than zero, use approximately continuous
   * per-block distribution.
   */
  per_epoch_reward_fraction: string;
  /**
   * reward_smoothing_blocks is the number of blocks over which to distribute
   * an epoch's rewards.  If zero, use the same value as
   * reward_epoch_duration_blocks.
   */
  reward_smoothing_blocks: string;
}
export interface ParamsAminoMsg {
  type: "/agoric.vbank.Params";
  value: ParamsAmino;
}
/** The module governance/configuration parameters. */
export interface ParamsSDKType {
  reward_epoch_duration_blocks: bigint;
  per_epoch_reward_fraction: string;
  reward_smoothing_blocks: bigint;
}
/** The current state of the module. */
export interface State {
  /**
   * rewardPool is the current balance of rewards in the module account.
   * NOTE: Tracking manually since there is no bank call for getting a
   * module account balance by name.
   */
  rewardPool: Coin[];
  /**
   * reward_block_amount is the amount of reward, if available, to send to the
   * fee collector module on every block.
   */
  rewardBlockAmount: Coin[];
  /** last_sequence is a sequence number for communicating with the VM. */
  lastSequence: bigint;
  lastRewardDistributionBlock: bigint;
}
export interface StateProtoMsg {
  typeUrl: "/agoric.vbank.State";
  value: Uint8Array;
}
/** The current state of the module. */
export interface StateAmino {
  /**
   * rewardPool is the current balance of rewards in the module account.
   * NOTE: Tracking manually since there is no bank call for getting a
   * module account balance by name.
   */
  reward_pool: CoinAmino[];
  /**
   * reward_block_amount is the amount of reward, if available, to send to the
   * fee collector module on every block.
   */
  reward_block_amount: CoinAmino[];
  /** last_sequence is a sequence number for communicating with the VM. */
  last_sequence: string;
  last_reward_distribution_block: string;
}
export interface StateAminoMsg {
  type: "/agoric.vbank.State";
  value: StateAmino;
}
/** The current state of the module. */
export interface StateSDKType {
  reward_pool: CoinSDKType[];
  reward_block_amount: CoinSDKType[];
  last_sequence: bigint;
  last_reward_distribution_block: bigint;
}
function createBaseParams(): Params {
  return {
    rewardEpochDurationBlocks: BigInt(0),
    perEpochRewardFraction: "",
    rewardSmoothingBlocks: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/agoric.vbank.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardEpochDurationBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.rewardEpochDurationBlocks);
    }
    if (message.perEpochRewardFraction !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.perEpochRewardFraction, 18).atomics);
    }
    if (message.rewardSmoothingBlocks !== BigInt(0)) {
      writer.uint32(24).int64(message.rewardSmoothingBlocks);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      rewardEpochDurationBlocks: isSet(object.rewardEpochDurationBlocks) ? BigInt(object.rewardEpochDurationBlocks.toString()) : BigInt(0),
      perEpochRewardFraction: isSet(object.perEpochRewardFraction) ? String(object.perEpochRewardFraction) : "",
      rewardSmoothingBlocks: isSet(object.rewardSmoothingBlocks) ? BigInt(object.rewardSmoothingBlocks.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.rewardEpochDurationBlocks = object.rewardEpochDurationBlocks !== undefined && object.rewardEpochDurationBlocks !== null ? BigInt(object.rewardEpochDurationBlocks.toString()) : BigInt(0);
    message.perEpochRewardFraction = object.perEpochRewardFraction ?? "";
    message.rewardSmoothingBlocks = object.rewardSmoothingBlocks !== undefined && object.rewardSmoothingBlocks !== null ? BigInt(object.rewardSmoothingBlocks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      rewardEpochDurationBlocks: BigInt(object.reward_epoch_duration_blocks),
      perEpochRewardFraction: object.per_epoch_reward_fraction,
      rewardSmoothingBlocks: BigInt(object.reward_smoothing_blocks)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.reward_epoch_duration_blocks = message.rewardEpochDurationBlocks ? message.rewardEpochDurationBlocks.toString() : undefined;
    obj.per_epoch_reward_fraction = message.perEpochRewardFraction;
    obj.reward_smoothing_blocks = message.rewardSmoothingBlocks ? message.rewardSmoothingBlocks.toString() : undefined;
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
      typeUrl: "/agoric.vbank.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseState(): State {
  return {
    rewardPool: [],
    rewardBlockAmount: [],
    lastSequence: BigInt(0),
    lastRewardDistributionBlock: BigInt(0)
  };
}
export const State = {
  typeUrl: "/agoric.vbank.State",
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewardPool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewardBlockAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastSequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastSequence);
    }
    if (message.lastRewardDistributionBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.lastRewardDistributionBlock);
    }
    return writer;
  },
  fromJSON(object: any): State {
    return {
      rewardPool: Array.isArray(object?.rewardPool) ? object.rewardPool.map((e: any) => Coin.fromJSON(e)) : [],
      rewardBlockAmount: Array.isArray(object?.rewardBlockAmount) ? object.rewardBlockAmount.map((e: any) => Coin.fromJSON(e)) : [],
      lastSequence: isSet(object.lastSequence) ? BigInt(object.lastSequence.toString()) : BigInt(0),
      lastRewardDistributionBlock: isSet(object.lastRewardDistributionBlock) ? BigInt(object.lastRewardDistributionBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.rewardPool = object.rewardPool?.map(e => Coin.fromPartial(e)) || [];
    message.rewardBlockAmount = object.rewardBlockAmount?.map(e => Coin.fromPartial(e)) || [];
    message.lastSequence = object.lastSequence !== undefined && object.lastSequence !== null ? BigInt(object.lastSequence.toString()) : BigInt(0);
    message.lastRewardDistributionBlock = object.lastRewardDistributionBlock !== undefined && object.lastRewardDistributionBlock !== null ? BigInt(object.lastRewardDistributionBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StateAmino): State {
    return {
      rewardPool: Array.isArray(object?.reward_pool) ? object.reward_pool.map((e: any) => Coin.fromAmino(e)) : [],
      rewardBlockAmount: Array.isArray(object?.reward_block_amount) ? object.reward_block_amount.map((e: any) => Coin.fromAmino(e)) : [],
      lastSequence: BigInt(object.last_sequence),
      lastRewardDistributionBlock: BigInt(object.last_reward_distribution_block)
    };
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    if (message.rewardPool) {
      obj.reward_pool = message.rewardPool.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward_pool = [];
    }
    if (message.rewardBlockAmount) {
      obj.reward_block_amount = message.rewardBlockAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward_block_amount = [];
    }
    obj.last_sequence = message.lastSequence ? message.lastSequence.toString() : undefined;
    obj.last_reward_distribution_block = message.lastRewardDistributionBlock ? message.lastRewardDistributionBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/agoric.vbank.State",
      value: State.encode(message).finish()
    };
  }
};