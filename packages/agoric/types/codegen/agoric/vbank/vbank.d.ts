import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): State;
    fromPartial(object: Partial<State>): State;
};
