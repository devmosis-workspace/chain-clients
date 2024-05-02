import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: bigint;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: bigint;
  whitelist: Denom[];
  slashFraction: string;
  slashWindow: bigint;
  minValidPerWindow: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
  vote_period?: string;
  vote_threshold?: string;
  reward_band?: string;
  reward_distribution_window?: string;
  whitelist?: DenomAmino[];
  slash_fraction?: string;
  slash_window?: string;
  min_valid_per_window?: string;
}
export interface ParamsAminoMsg {
  type: "/terra.oracle.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
  vote_period: bigint;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: bigint;
  whitelist: DenomSDKType[];
  slash_fraction: string;
  slash_window: bigint;
  min_valid_per_window: string;
}
/** Denom - the object to hold configurations of each denom */
export interface Denom {
  name: string;
  tobinTax: string;
}
export interface DenomProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.Denom";
  value: Uint8Array;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomAmino {
  name?: string;
  tobin_tax?: string;
}
export interface DenomAminoMsg {
  type: "/terra.oracle.v1beta1.Denom";
  value: DenomAmino;
}
/** Denom - the object to hold configurations of each denom */
export interface DenomSDKType {
  name: string;
  tobin_tax: string;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: bigint;
}
export interface AggregateExchangeRatePrevoteProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.AggregateExchangeRatePrevote";
  value: Uint8Array;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteAmino {
  hash?: string;
  voter?: string;
  submit_block?: string;
}
export interface AggregateExchangeRatePrevoteAminoMsg {
  type: "/terra.oracle.v1beta1.AggregateExchangeRatePrevote";
  value: AggregateExchangeRatePrevoteAmino;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevoteSDKType {
  hash: string;
  voter: string;
  submit_block: bigint;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
export interface AggregateExchangeRateVoteProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.AggregateExchangeRateVote";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 */
export interface AggregateExchangeRateVoteAmino {
  exchange_rate_tuples?: ExchangeRateTupleAmino[];
  voter?: string;
}
export interface AggregateExchangeRateVoteAminoMsg {
  type: "/terra.oracle.v1beta1.AggregateExchangeRateVote";
  value: AggregateExchangeRateVoteAmino;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
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
  typeUrl: "/terra.oracle.v1beta1.ExchangeRateTuple";
  value: Uint8Array;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleAmino {
  denom?: string;
  exchange_rate?: string;
}
export interface ExchangeRateTupleAminoMsg {
  type: "/terra.oracle.v1beta1.ExchangeRateTuple";
  value: ExchangeRateTupleAmino;
}
/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTupleSDKType {
  denom: string;
  exchange_rate: string;
}
function createBaseParams(): Params {
  return {
    votePeriod: BigInt(0),
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: BigInt(0),
    whitelist: [],
    slashFraction: "",
    slashWindow: BigInt(0),
    minValidPerWindow: ""
  };
}
export const Params = {
  typeUrl: "/terra.oracle.v1beta1.Params",
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
    for (const v of message.whitelist) {
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
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      votePeriod: isSet(object.votePeriod) ? BigInt(object.votePeriod.toString()) : BigInt(0),
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      rewardDistributionWindow: isSet(object.rewardDistributionWindow) ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0),
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => Denom.fromJSON(e)) : [],
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? BigInt(object.slashWindow.toString()) : BigInt(0),
      minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0);
    message.whitelist = object.whitelist?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.vote_period !== undefined && object.vote_period !== null) {
      message.votePeriod = BigInt(object.vote_period);
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.reward_band !== undefined && object.reward_band !== null) {
      message.rewardBand = object.reward_band;
    }
    if (object.reward_distribution_window !== undefined && object.reward_distribution_window !== null) {
      message.rewardDistributionWindow = BigInt(object.reward_distribution_window);
    }
    message.whitelist = object.whitelist?.map(e => Denom.fromAmino(e)) || [];
    if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
      message.slashFraction = object.slash_fraction;
    }
    if (object.slash_window !== undefined && object.slash_window !== null) {
      message.slashWindow = BigInt(object.slash_window);
    }
    if (object.min_valid_per_window !== undefined && object.min_valid_per_window !== null) {
      message.minValidPerWindow = object.min_valid_per_window;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.vote_period = message.votePeriod !== BigInt(0) ? message.votePeriod.toString() : undefined;
    obj.vote_threshold = message.voteThreshold === "" ? undefined : message.voteThreshold;
    obj.reward_band = message.rewardBand === "" ? undefined : message.rewardBand;
    obj.reward_distribution_window = message.rewardDistributionWindow !== BigInt(0) ? message.rewardDistributionWindow.toString() : undefined;
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.whitelist = message.whitelist;
    }
    obj.slash_fraction = message.slashFraction === "" ? undefined : message.slashFraction;
    obj.slash_window = message.slashWindow !== BigInt(0) ? message.slashWindow.toString() : undefined;
    obj.min_valid_per_window = message.minValidPerWindow === "" ? undefined : message.minValidPerWindow;
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
      typeUrl: "/terra.oracle.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDenom(): Denom {
  return {
    name: "",
    tobinTax: ""
  };
}
export const Denom = {
  typeUrl: "/terra.oracle.v1beta1.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tobinTax !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.tobinTax, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Denom {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      tobinTax: isSet(object.tobinTax) ? String(object.tobinTax) : ""
    };
  },
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.name = object.name ?? "";
    message.tobinTax = object.tobinTax ?? "";
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    const message = createBaseDenom();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.tobin_tax !== undefined && object.tobin_tax !== null) {
      message.tobinTax = object.tobin_tax;
    }
    return message;
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.tobin_tax = message.tobinTax === "" ? undefined : message.tobinTax;
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
      typeUrl: "/terra.oracle.v1beta1.Denom",
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
  typeUrl: "/terra.oracle.v1beta1.AggregateExchangeRatePrevote",
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
    const message = createBaseAggregateExchangeRatePrevote();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.submit_block !== undefined && object.submit_block !== null) {
      message.submitBlock = BigInt(object.submit_block);
    }
    return message;
  },
  toAmino(message: AggregateExchangeRatePrevote): AggregateExchangeRatePrevoteAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.submit_block = message.submitBlock !== BigInt(0) ? message.submitBlock.toString() : undefined;
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
      typeUrl: "/terra.oracle.v1beta1.AggregateExchangeRatePrevote",
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
  typeUrl: "/terra.oracle.v1beta1.AggregateExchangeRateVote",
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
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchange_rate_tuples?.map(e => ExchangeRateTuple.fromAmino(e)) || [];
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: AggregateExchangeRateVote): AggregateExchangeRateVoteAmino {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchange_rate_tuples = message.exchangeRateTuples.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
    } else {
      obj.exchange_rate_tuples = message.exchangeRateTuples;
    }
    obj.voter = message.voter === "" ? undefined : message.voter;
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
      typeUrl: "/terra.oracle.v1beta1.AggregateExchangeRateVote",
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
  typeUrl: "/terra.oracle.v1beta1.ExchangeRateTuple",
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
    const message = createBaseExchangeRateTuple();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: ExchangeRateTuple): ExchangeRateTupleAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.exchange_rate = message.exchangeRate === "" ? undefined : message.exchangeRate;
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
      typeUrl: "/terra.oracle.v1beta1.ExchangeRateTuple",
      value: ExchangeRateTuple.encode(message).finish()
    };
  }
};