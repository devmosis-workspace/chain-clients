import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
export interface Options {}
export interface OptionsSDKType {}
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
function createBaseAccumulatorContent(): AccumulatorContent {
  return {
    accumValue: [],
    totalShares: ""
  };
}
export const AccumulatorContent = {
  encode(message: AccumulatorContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accumValue) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(18).string(message.totalShares);
    }
    return writer;
  },
  fromJSON(object: any): AccumulatorContent {
    return {
      accumValue: Array.isArray(object?.accumValue) ? object.accumValue.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  fromPartial(object: Partial<AccumulatorContent>): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accumValue?.map(e => DecCoin.fromPartial(e)) || [];
    message.totalShares = object.totalShares ?? "";
    return message;
  }
};
function createBaseOptions(): Options {
  return {};
}
export const Options = {
  encode(_: Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): Options {
    return {};
  },
  fromPartial(_: Partial<Options>): Options {
    const message = createBaseOptions();
    return message;
  }
};
function createBaseRecord(): Record {
  return {
    numShares: "",
    accumValuePerShare: [],
    unclaimedRewardsTotal: [],
    options: undefined
  };
}
export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numShares !== "") {
      writer.uint32(10).string(message.numShares);
    }
    for (const v of message.accumValuePerShare) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unclaimedRewardsTotal) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Record {
    return {
      numShares: isSet(object.numShares) ? String(object.numShares) : "",
      accumValuePerShare: Array.isArray(object?.accumValuePerShare) ? object.accumValuePerShare.map((e: any) => DecCoin.fromJSON(e)) : [],
      unclaimedRewardsTotal: Array.isArray(object?.unclaimedRewardsTotal) ? object.unclaimedRewardsTotal.map((e: any) => DecCoin.fromJSON(e)) : [],
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined
    };
  },
  fromPartial(object: Partial<Record>): Record {
    const message = createBaseRecord();
    message.numShares = object.numShares ?? "";
    message.accumValuePerShare = object.accumValuePerShare?.map(e => DecCoin.fromPartial(e)) || [];
    message.unclaimedRewardsTotal = object.unclaimedRewardsTotal?.map(e => DecCoin.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  }
};