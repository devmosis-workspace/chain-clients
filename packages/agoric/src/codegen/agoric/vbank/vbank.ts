import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** The module governance/configuration parameters. */
export interface Params {
  /**
   * reward_epoch_duration_blocks is the length of a reward epoch, in blocks.
   * A value of zero has the same meaning as a value of one:
   * the full reward buffer should be distributed immediately.
   */
  rewardEpochDurationBlocks: Long;
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
  rewardSmoothingBlocks: Long;
}
/** The module governance/configuration parameters. */
export interface ParamsSDKType {
  reward_epoch_duration_blocks: Long;
  per_epoch_reward_fraction: string;
  reward_smoothing_blocks: Long;
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
  lastSequence: Long;
  lastRewardDistributionBlock: Long;
}
/** The current state of the module. */
export interface StateSDKType {
  reward_pool: CoinSDKType[];
  reward_block_amount: CoinSDKType[];
  last_sequence: Long;
  last_reward_distribution_block: Long;
}
function createBaseParams(): Params {
  return {
    rewardEpochDurationBlocks: Long.ZERO,
    perEpochRewardFraction: "",
    rewardSmoothingBlocks: Long.ZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewardEpochDurationBlocks.isZero()) {
      writer.uint32(8).int64(message.rewardEpochDurationBlocks);
    }
    if (message.perEpochRewardFraction !== "") {
      writer.uint32(18).string(message.perEpochRewardFraction);
    }
    if (!message.rewardSmoothingBlocks.isZero()) {
      writer.uint32(24).int64(message.rewardSmoothingBlocks);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      rewardEpochDurationBlocks: isSet(object.rewardEpochDurationBlocks) ? Long.fromValue(object.rewardEpochDurationBlocks) : Long.ZERO,
      perEpochRewardFraction: isSet(object.perEpochRewardFraction) ? String(object.perEpochRewardFraction) : "",
      rewardSmoothingBlocks: isSet(object.rewardSmoothingBlocks) ? Long.fromValue(object.rewardSmoothingBlocks) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.rewardEpochDurationBlocks = object.rewardEpochDurationBlocks !== undefined && object.rewardEpochDurationBlocks !== null ? Long.fromValue(object.rewardEpochDurationBlocks) : Long.ZERO;
    message.perEpochRewardFraction = object.perEpochRewardFraction ?? "";
    message.rewardSmoothingBlocks = object.rewardSmoothingBlocks !== undefined && object.rewardSmoothingBlocks !== null ? Long.fromValue(object.rewardSmoothingBlocks) : Long.ZERO;
    return message;
  }
};
function createBaseState(): State {
  return {
    rewardPool: [],
    rewardBlockAmount: [],
    lastSequence: Long.UZERO,
    lastRewardDistributionBlock: Long.ZERO
  };
}
export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardPool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewardBlockAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.lastSequence.isZero()) {
      writer.uint32(24).uint64(message.lastSequence);
    }
    if (!message.lastRewardDistributionBlock.isZero()) {
      writer.uint32(32).int64(message.lastRewardDistributionBlock);
    }
    return writer;
  },
  fromJSON(object: any): State {
    return {
      rewardPool: Array.isArray(object?.rewardPool) ? object.rewardPool.map((e: any) => Coin.fromJSON(e)) : [],
      rewardBlockAmount: Array.isArray(object?.rewardBlockAmount) ? object.rewardBlockAmount.map((e: any) => Coin.fromJSON(e)) : [],
      lastSequence: isSet(object.lastSequence) ? Long.fromValue(object.lastSequence) : Long.UZERO,
      lastRewardDistributionBlock: isSet(object.lastRewardDistributionBlock) ? Long.fromValue(object.lastRewardDistributionBlock) : Long.ZERO
    };
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.rewardPool = object.rewardPool?.map(e => Coin.fromPartial(e)) || [];
    message.rewardBlockAmount = object.rewardBlockAmount?.map(e => Coin.fromPartial(e)) || [];
    message.lastSequence = object.lastSequence !== undefined && object.lastSequence !== null ? Long.fromValue(object.lastSequence) : Long.UZERO;
    message.lastRewardDistributionBlock = object.lastRewardDistributionBlock !== undefined && object.lastRewardDistributionBlock !== null ? Long.fromValue(object.lastRewardDistributionBlock) : Long.ZERO;
    return message;
  }
};