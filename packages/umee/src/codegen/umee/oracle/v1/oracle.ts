import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: bigint;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: bigint;
  acceptList: Denom[];
  slashFraction: string;
  slashWindow: bigint;
  minValidPerWindow: string;
  /**
   * Historic Stamp Period represents the amount of blocks the oracle
   * module waits before recording a new historic price.
   */
  historicStampPeriod: bigint;
  /**
   * Median Stamp Period represents the amount blocks the oracle module
   * waits between calculating and stamping a new median and standard
   * deviation of that median.
   */
  medianStampPeriod: bigint;
  /**
   * Maximum Price Stamps represents the maximum amount of historic prices
   * the oracle module will store before pruning via FIFO.
   */
  maximumPriceStamps: bigint;
  /**
   * Maximum Median Stamps represents the maximum amount of medians the
   * oracle module will store before pruning via FIFO.
   */
  maximumMedianStamps: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/umee.oracle.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
  vote_period: string;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: string;
  accept_list: DenomAmino[];
  slash_fraction: string;
  slash_window: string;
  min_valid_per_window: string;
  /**
   * Historic Stamp Period represents the amount of blocks the oracle
   * module waits before recording a new historic price.
   */
  historic_stamp_period: string;
  /**
   * Median Stamp Period represents the amount blocks the oracle module
   * waits between calculating and stamping a new median and standard
   * deviation of that median.
   */
  median_stamp_period: string;
  /**
   * Maximum Price Stamps represents the maximum amount of historic prices
   * the oracle module will store before pruning via FIFO.
   */
  maximum_price_stamps: string;
  /**
   * Maximum Median Stamps represents the maximum amount of medians the
   * oracle module will store before pruning via FIFO.
   */
  maximum_median_stamps: string;
}
export interface ParamsAminoMsg {
  type: "/umee.oracle.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
  vote_period: bigint;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: bigint;
  accept_list: DenomSDKType[];
  slash_fraction: string;
  slash_window: bigint;
  min_valid_per_window: string;
  historic_stamp_period: bigint;
  median_stamp_period: bigint;
  maximum_price_stamps: bigint;
  maximum_median_stamps: bigint;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
  baseDenom: string;
  symbolDenom: string;
  exponent: number;
}
export interface DenomProtoMsg {
  typeUrl: "/umee.oracle.v1.Denom";
  value: Uint8Array;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomAmino {
  base_denom: string;
  symbol_denom: string;
  exponent: number;
}
export interface DenomAminoMsg {
  type: "/umee.oracle.v1.Denom";
  value: DenomAmino;
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
  submitBlock: bigint;
}
export interface AggregateExchangeRatePrevoteProtoMsg {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote";
  value: Uint8Array;
}
/**
 * AggregateExchangeRatePrevote -
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteAmino {
  hash: string;
  voter: string;
  submit_block: string;
}
export interface AggregateExchangeRatePrevoteAminoMsg {
  type: "/umee.oracle.v1.AggregateExchangeRatePrevote";
  value: AggregateExchangeRatePrevoteAmino;
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
  submit_block: bigint;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
export interface AggregateExchangeRateVoteProtoMsg {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote";
  value: Uint8Array;
}
/**
 * AggregateExchangeRateVote - struct for voting on
 * the exchange rates of USD denominated in various assets.
 */
export interface AggregateExchangeRateVoteAmino {
  exchange_rate_tuples: ExchangeRateTupleAmino[];
  voter: string;
}
export interface AggregateExchangeRateVoteAminoMsg {
  type: "/umee.oracle.v1.AggregateExchangeRateVote";
  value: AggregateExchangeRateVoteAmino;
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
export interface ExchangeRateTupleProtoMsg {
  typeUrl: "/umee.oracle.v1.ExchangeRateTuple";
  value: Uint8Array;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleAmino {
  denom: string;
  exchange_rate: string;
}
export interface ExchangeRateTupleAminoMsg {
  type: "/umee.oracle.v1.ExchangeRateTuple";
  value: ExchangeRateTupleAmino;
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
  start: Timestamp;
}
export interface AvgCounterProtoMsg {
  typeUrl: "/umee.oracle.v1.AvgCounter";
  value: Uint8Array;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterAmino {
  /** sum of prices in the counter */
  sum: string;
  /** number of aggregated prices in the counter */
  num: number;
  /** Unix timestamp when the first price was aggregated in the counter */
  start?: TimestampAmino;
}
export interface AvgCounterAminoMsg {
  type: "/umee.oracle.v1.AvgCounter";
  value: AvgCounterAmino;
}
/**
 * AvgCounter is holds information about the active avg aggreator windows, used
 * to quickly compute average price of an asset.
 */
export interface AvgCounterSDKType {
  sum: string;
  num: number;
  start: TimestampSDKType;
}
function createBaseParams(): Params {
  return {
    votePeriod: BigInt(0),
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: BigInt(0),
    acceptList: [],
    slashFraction: "",
    slashWindow: BigInt(0),
    minValidPerWindow: "",
    historicStampPeriod: BigInt(0),
    medianStampPeriod: BigInt(0),
    maximumPriceStamps: BigInt(0),
    maximumMedianStamps: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/umee.oracle.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardBand, 18).atomics);
    }
    if (message.rewardDistributionWindow !== BigInt(0)) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    for (const v of message.acceptList) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
    }
    if (message.slashWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.minValidPerWindow, 18).atomics);
    }
    if (message.historicStampPeriod !== BigInt(0)) {
      writer.uint32(72).uint64(message.historicStampPeriod);
    }
    if (message.medianStampPeriod !== BigInt(0)) {
      writer.uint32(80).uint64(message.medianStampPeriod);
    }
    if (message.maximumPriceStamps !== BigInt(0)) {
      writer.uint32(88).uint64(message.maximumPriceStamps);
    }
    if (message.maximumMedianStamps !== BigInt(0)) {
      writer.uint32(96).uint64(message.maximumMedianStamps);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      votePeriod: isSet(object.votePeriod) ? BigInt(object.votePeriod.toString()) : BigInt(0),
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      rewardDistributionWindow: isSet(object.rewardDistributionWindow) ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0),
      acceptList: Array.isArray(object?.acceptList) ? object.acceptList.map((e: any) => Denom.fromJSON(e)) : [],
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? BigInt(object.slashWindow.toString()) : BigInt(0),
      minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : "",
      historicStampPeriod: isSet(object.historicStampPeriod) ? BigInt(object.historicStampPeriod.toString()) : BigInt(0),
      medianStampPeriod: isSet(object.medianStampPeriod) ? BigInt(object.medianStampPeriod.toString()) : BigInt(0),
      maximumPriceStamps: isSet(object.maximumPriceStamps) ? BigInt(object.maximumPriceStamps.toString()) : BigInt(0),
      maximumMedianStamps: isSet(object.maximumMedianStamps) ? BigInt(object.maximumMedianStamps.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0);
    message.acceptList = object.acceptList?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    message.historicStampPeriod = object.historicStampPeriod !== undefined && object.historicStampPeriod !== null ? BigInt(object.historicStampPeriod.toString()) : BigInt(0);
    message.medianStampPeriod = object.medianStampPeriod !== undefined && object.medianStampPeriod !== null ? BigInt(object.medianStampPeriod.toString()) : BigInt(0);
    message.maximumPriceStamps = object.maximumPriceStamps !== undefined && object.maximumPriceStamps !== null ? BigInt(object.maximumPriceStamps.toString()) : BigInt(0);
    message.maximumMedianStamps = object.maximumMedianStamps !== undefined && object.maximumMedianStamps !== null ? BigInt(object.maximumMedianStamps.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      votePeriod: BigInt(object.vote_period),
      voteThreshold: object.vote_threshold,
      rewardBand: object.reward_band,
      rewardDistributionWindow: BigInt(object.reward_distribution_window),
      acceptList: Array.isArray(object?.accept_list) ? object.accept_list.map((e: any) => Denom.fromAmino(e)) : [],
      slashFraction: object.slash_fraction,
      slashWindow: BigInt(object.slash_window),
      minValidPerWindow: object.min_valid_per_window,
      historicStampPeriod: BigInt(object.historic_stamp_period),
      medianStampPeriod: BigInt(object.median_stamp_period),
      maximumPriceStamps: BigInt(object.maximum_price_stamps),
      maximumMedianStamps: BigInt(object.maximum_median_stamps)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.vote_period = message.votePeriod ? message.votePeriod.toString() : undefined;
    obj.vote_threshold = message.voteThreshold;
    obj.reward_band = message.rewardBand;
    obj.reward_distribution_window = message.rewardDistributionWindow ? message.rewardDistributionWindow.toString() : undefined;
    if (message.acceptList) {
      obj.accept_list = message.acceptList.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.accept_list = [];
    }
    obj.slash_fraction = message.slashFraction;
    obj.slash_window = message.slashWindow ? message.slashWindow.toString() : undefined;
    obj.min_valid_per_window = message.minValidPerWindow;
    obj.historic_stamp_period = message.historicStampPeriod ? message.historicStampPeriod.toString() : undefined;
    obj.median_stamp_period = message.medianStampPeriod ? message.medianStampPeriod.toString() : undefined;
    obj.maximum_price_stamps = message.maximumPriceStamps ? message.maximumPriceStamps.toString() : undefined;
    obj.maximum_median_stamps = message.maximumMedianStamps ? message.maximumMedianStamps.toString() : undefined;
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
      typeUrl: "/umee.oracle.v1.Params",
      value: Params.encode(message).finish()
    };
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
  typeUrl: "/umee.oracle.v1.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DenomAmino): Denom {
    return {
      baseDenom: object.base_denom,
      symbolDenom: object.symbol_denom,
      exponent: object.exponent
    };
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    obj.symbol_denom = message.symbolDenom;
    obj.exponent = message.exponent;
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return {
    hash: "",
    voter: "",
    submitBlock: BigInt(0)
  };
}
export const AggregateExchangeRatePrevote = {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote",
  encode(message: AggregateExchangeRatePrevote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.submitBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },
  fromJSON(object: any): AggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      submitBlock: isSet(object.submitBlock) ? BigInt(object.submitBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? BigInt(object.submitBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AggregateExchangeRatePrevoteAmino): AggregateExchangeRatePrevote {
    return {
      hash: object.hash,
      voter: object.voter,
      submitBlock: BigInt(object.submit_block)
    };
  },
  toAmino(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteAmino {
    const obj: any = {};
    obj.hash = message.hash;
    obj.voter = message.voter;
    obj.submit_block = message.submitBlock ? message.submitBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AggregateExchangeRatePrevoteAminoMsg): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateExchangeRatePrevoteProtoMsg): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.decode(message.value);
  },
  toProto(message: AggregateExchangeRatePrevote): Uint8Array {
    return AggregateExchangeRatePrevote.encode(message).finish();
  },
  toProtoMsg(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote",
      value: AggregateExchangeRatePrevote.encode(message).finish()
    };
  }
};
function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    exchangeRateTuples: [],
    voter: ""
  };
}
export const AggregateExchangeRateVote = {
  typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote",
  encode(message: AggregateExchangeRateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AggregateExchangeRateVoteAmino): AggregateExchangeRateVote {
    return {
      exchangeRateTuples: Array.isArray(object?.exchange_rate_tuples) ? object.exchange_rate_tuples.map((e: any) => ExchangeRateTuple.fromAmino(e)) : [],
      voter: object.voter
    };
  },
  toAmino(message: AggregateExchangeRateVote): AggregateExchangeRateVoteAmino {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchange_rate_tuples = message.exchangeRateTuples.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
    } else {
      obj.exchange_rate_tuples = [];
    }
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: AggregateExchangeRateVoteAminoMsg): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateExchangeRateVoteProtoMsg): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: AggregateExchangeRateVote): Uint8Array {
    return AggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(message: AggregateExchangeRateVote): AggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote",
      value: AggregateExchangeRateVote.encode(message).finish()
    };
  }
};
function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return {
    denom: "",
    exchangeRate: ""
  };
}
export const ExchangeRateTuple = {
  typeUrl: "/umee.oracle.v1.ExchangeRateTuple",
  encode(message: ExchangeRateTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
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
  },
  fromAmino(object: ExchangeRateTupleAmino): ExchangeRateTuple {
    return {
      denom: object.denom,
      exchangeRate: object.exchange_rate
    };
  },
  toAmino(message: ExchangeRateTuple): ExchangeRateTupleAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.exchange_rate = message.exchangeRate;
    return obj;
  },
  fromAminoMsg(object: ExchangeRateTupleAminoMsg): ExchangeRateTuple {
    return ExchangeRateTuple.fromAmino(object.value);
  },
  fromProtoMsg(message: ExchangeRateTupleProtoMsg): ExchangeRateTuple {
    return ExchangeRateTuple.decode(message.value);
  },
  toProto(message: ExchangeRateTuple): Uint8Array {
    return ExchangeRateTuple.encode(message).finish();
  },
  toProtoMsg(message: ExchangeRateTuple): ExchangeRateTupleProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.ExchangeRateTuple",
      value: ExchangeRateTuple.encode(message).finish()
    };
  }
};
function createBaseAvgCounter(): AvgCounter {
  return {
    sum: "",
    num: 0,
    start: Timestamp.fromPartial({})
  };
}
export const AvgCounter = {
  typeUrl: "/umee.oracle.v1.AvgCounter",
  encode(message: AvgCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sum !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.sum, 18).atomics);
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
  },
  fromAmino(object: AvgCounterAmino): AvgCounter {
    return {
      sum: object.sum,
      num: object.num,
      start: object.start
    };
  },
  toAmino(message: AvgCounter): AvgCounterAmino {
    const obj: any = {};
    obj.sum = message.sum;
    obj.num = message.num;
    obj.start = message.start;
    return obj;
  },
  fromAminoMsg(object: AvgCounterAminoMsg): AvgCounter {
    return AvgCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: AvgCounterProtoMsg): AvgCounter {
    return AvgCounter.decode(message.value);
  },
  toProto(message: AvgCounter): Uint8Array {
    return AvgCounter.encode(message).finish();
  },
  toProtoMsg(message: AvgCounter): AvgCounterProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.AvgCounter",
      value: AvgCounter.encode(message).finish()
    };
  }
};