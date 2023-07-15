import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContent {
    accumValue: DecCoin[];
    totalShares: string;
}
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContentSDKType {
    accum_value: DecCoinSDKType[];
    total_shares: string;
}
export interface Options {
}
export interface OptionsSDKType {
}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface Record {
    /**
     * num_shares is the number of shares belonging to the position associated
     * with this record.
     */
    numShares: string;
    /**
     * accum_value_per_share is the subset of coins per shar of the global
     * accumulator value that allows to infer how much a position is entitled to
     * per share that it owns.
     *
     * In the default case with no intervals, this value equals to the global
     * accumulator value at the time of the position creation, the last update or
     * reward claim.
     *
     * In the interval case such as concentrated liquidity, this value equals to
     * the global growth of rewards inside the interval during one of: the time of
     * the position creation, the last update or reward claim. Note, that
     * immediately prior to claiming or updating rewards, this value must be
     * updated to "the growth inside at the time of last update + the growth
     * outside at the time of the current block". This is so that the claiming
     * logic can subtract this updated value from the global accumulator value to
     * get the growth inside the interval from the time of last update up until
     * the current block time.
     */
    accumValuePerShare: DecCoin[];
    /**
     * unclaimed_rewards_total is the total amount of unclaimed rewards that the
     * position is entitled to. This value is updated whenever shares are added or
     * removed from an existing position. We also expose API for manually updating
     * this value for some custom use cases such as merging pre-existing positions
     * into a single one.
     */
    unclaimedRewardsTotal: DecCoin[];
    options?: Options;
}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface RecordSDKType {
    num_shares: string;
    accum_value_per_share: DecCoinSDKType[];
    unclaimed_rewards_total: DecCoinSDKType[];
    options?: OptionsSDKType;
}
export declare const AccumulatorContent: {
    encode(message: AccumulatorContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccumulatorContent;
    fromPartial(object: Partial<AccumulatorContent>): AccumulatorContent;
};
export declare const Options: {
    encode(_: Options, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): Options;
    fromPartial(_: Partial<Options>): Options;
};
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Record;
    fromPartial(object: Partial<Record>): Record;
};
