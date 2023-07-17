import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: Long;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: Long;
  acceptList: Denom[];
  slashFraction: string;
  slashWindow: Long;
  minValidPerWindow: string;
  /**
   * Historic Stamp Period represents the amount of blocks the oracle
   * module waits before recording a new historic price.
   */
  historicStampPeriod: Long;
  /**
   * Median Stamp Period represents the amount blocks the oracle module
   * waits between calculating and stamping a new median and standard
   * deviation of that median.
   */
  medianStampPeriod: Long;
  /**
   * Maximum Price Stamps represents the maximum amount of historic prices
   * the oracle module will store before pruning via FIFO.
   */
  maximumPriceStamps: Long;
  /**
   * Maximum Median Stamps represents the maximum amount of medians the
   * oracle module will store before pruning via FIFO.
   */
  maximumMedianStamps: Long;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
  vote_period: Long;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: Long;
  accept_list: DenomSDKType[];
  slash_fraction: string;
  slash_window: Long;
  min_valid_per_window: string;
  historic_stamp_period: Long;
  median_stamp_period: Long;
  maximum_price_stamps: Long;
  maximum_median_stamps: Long;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
  baseDenom: string;
  symbolDenom: string;
  exponent: number;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomSDKType {
  base_denom: string;
  symbol_denom: string;
  exponent: number;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: Long;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteSDKType {
  hash: string;
  voter: string;
  submit_block: Long;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVoteSDKType {
  exchange_rate_tuples: ExchangeRateTupleSDKType[];
  voter: string;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleSDKType {
  denom: string;
  exchange_rate: string;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounter {
  /** sum of prices in the counter */
  sum: string;
  /** number of aggregated prices in the counter */
  num: number;
  /** Unix timestamp when the first price was aggregated in the counter */
  start?: Timestamp;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterSDKType {
  sum: string;
  num: number;
  start?: TimestampSDKType;
}
function createBaseParams(): Params {
  return {
    votePeriod: Long.UZERO,
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: Long.UZERO,
    acceptList: [],
    slashFraction: "",
    slashWindow: Long.UZERO,
    minValidPerWindow: "",
    historicStampPeriod: Long.UZERO,
    medianStampPeriod: Long.UZERO,
    maximumPriceStamps: Long.UZERO,
    maximumMedianStamps: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }
    if (!message.rewardDistributionWindow.isZero()) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    for (const v of message.acceptList) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(50).string(message.slashFraction);
    }
    if (!message.slashWindow.isZero()) {
      writer.uint32(56).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(message.minValidPerWindow);
    }
    if (!message.historicStampPeriod.isZero()) {
      writer.uint32(72).uint64(message.historicStampPeriod);
    }
    if (!message.medianStampPeriod.isZero()) {
      writer.uint32(80).uint64(message.medianStampPeriod);
    }
    if (!message.maximumPriceStamps.isZero()) {
      writer.uint32(88).uint64(message.maximumPriceStamps);
    }
    if (!message.maximumMedianStamps.isZero()) {
      writer.uint32(96).uint64(message.maximumMedianStamps);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.UZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      rewardDistributionWindow: isSet(object.rewardDistributionWindow) ? Long.fromValue(object.rewardDistributionWindow) : Long.UZERO,
      acceptList: Array.isArray(object?.acceptList) ? object.acceptList.map((e: any) => Denom.fromJSON(e)) : [],
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Long.fromValue(object.slashWindow) : Long.UZERO,
      minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : "",
      historicStampPeriod: isSet(object.historicStampPeriod) ? Long.fromValue(object.historicStampPeriod) : Long.UZERO,
      medianStampPeriod: isSet(object.medianStampPeriod) ? Long.fromValue(object.medianStampPeriod) : Long.UZERO,
      maximumPriceStamps: isSet(object.maximumPriceStamps) ? Long.fromValue(object.maximumPriceStamps) : Long.UZERO,
      maximumMedianStamps: isSet(object.maximumMedianStamps) ? Long.fromValue(object.maximumMedianStamps) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.UZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? Long.fromValue(object.rewardDistributionWindow) : Long.UZERO;
    message.acceptList = object.acceptList?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? Long.fromValue(object.slashWindow) : Long.UZERO;
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    message.historicStampPeriod = object.historicStampPeriod !== undefined && object.historicStampPeriod !== null ? Long.fromValue(object.historicStampPeriod) : Long.UZERO;
    message.medianStampPeriod = object.medianStampPeriod !== undefined && object.medianStampPeriod !== null ? Long.fromValue(object.medianStampPeriod) : Long.UZERO;
    message.maximumPriceStamps = object.maximumPriceStamps !== undefined && object.maximumPriceStamps !== null ? Long.fromValue(object.maximumPriceStamps) : Long.UZERO;
    message.maximumMedianStamps = object.maximumMedianStamps !== undefined && object.maximumMedianStamps !== null ? Long.fromValue(object.maximumMedianStamps) : Long.UZERO;
    return message;
  }
};
function createBaseDenom(): Denom {
  return {
    baseDenom: "",
    symbolDenom: "",
    exponent: 0
  };
}
export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.symbolDenom !== "") {
      writer.uint32(18).string(message.symbolDenom);
    }
    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }
    return writer;
  },
  fromJSON(object: any): Denom {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      symbolDenom: isSet(object.symbolDenom) ? String(object.symbolDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0
    };
  },
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.baseDenom = object.baseDenom ?? "";
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  }
};
function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return {
    hash: "",
    voter: "",
    submitBlock: Long.UZERO
  };
}
export const AggregateExchangeRatePrevote = {
  encode(message: AggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (!message.submitBlock.isZero()) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },
  fromJSON(object: any): AggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      submitBlock: isSet(object.submitBlock) ? Long.fromValue(object.submitBlock) : Long.UZERO
    };
  },
  fromPartial(object: Partial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? Long.fromValue(object.submitBlock) : Long.UZERO;
    return message;
  }
};
function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    exchangeRateTuples: [],
    voter: ""
  };
}
export const AggregateExchangeRateVote = {
  encode(message: AggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  fromJSON(object: any): AggregateExchangeRateVote {
    return {
      exchangeRateTuples: Array.isArray(object?.exchangeRateTuples) ? object.exchangeRateTuples.map((e: any) => ExchangeRateTuple.fromJSON(e)) : [],
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  fromPartial(object: Partial<AggregateExchangeRateVote>): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  }
};
function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return {
    denom: "",
    exchangeRate: ""
  };
}
export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },
  fromJSON(object: any): ExchangeRateTuple {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : ""
    };
  },
  fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  }
};
function createBaseAvgCounter(): AvgCounter {
  return {
    sum: "",
    num: 0,
    start: undefined
  };
}
export const AvgCounter = {
  encode(message: AvgCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sum !== "") {
      writer.uint32(10).string(message.sum);
    }
    if (message.num !== 0) {
      writer.uint32(16).uint32(message.num);
    }
    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AvgCounter {
    return {
      sum: isSet(object.sum) ? String(object.sum) : "",
      num: isSet(object.num) ? Number(object.num) : 0,
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined
    };
  },
  fromPartial(object: Partial<AvgCounter>): AvgCounter {
    const message = createBaseAvgCounter();
    message.sum = object.sum ?? "";
    message.num = object.num ?? 0;
    message.start = object.start !== undefined && object.start !== null ? Timestamp.fromPartial(object.start) : undefined;
    return message;
  }
};