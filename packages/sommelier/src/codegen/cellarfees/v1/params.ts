import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /** The number of fee accruals after which an auction should be started */
  feeAccrualAuctionThreshold: bigint;
  /**
   * Emission rate factor. Specifically, the number of blocks over which to distribute
   * some amount of staking rewards.
   */
  rewardEmissionPeriod: bigint;
  /** The initial rate at which auctions should decrease their denom's price in SOMM */
  initialPriceDecreaseRate: string;
  /** Number of blocks between auction price decreases */
  priceDecreaseBlockInterval: bigint;
  /** The interval between starting auctions */
  auctionInterval: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cellarfees.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** The number of fee accruals after which an auction should be started */
  fee_accrual_auction_threshold?: string;
  /**
   * Emission rate factor. Specifically, the number of blocks over which to distribute
   * some amount of staking rewards.
   */
  reward_emission_period?: string;
  /** The initial rate at which auctions should decrease their denom's price in SOMM */
  initial_price_decrease_rate?: string;
  /** Number of blocks between auction price decreases */
  price_decrease_block_interval?: string;
  /** The interval between starting auctions */
  auction_interval?: string;
}
export interface ParamsAminoMsg {
  type: "/cellarfees.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  fee_accrual_auction_threshold: bigint;
  reward_emission_period: bigint;
  initial_price_decrease_rate: string;
  price_decrease_block_interval: bigint;
  auction_interval: bigint;
}
function createBaseParams(): Params {
  return {
    feeAccrualAuctionThreshold: BigInt(0),
    rewardEmissionPeriod: BigInt(0),
    initialPriceDecreaseRate: "",
    priceDecreaseBlockInterval: BigInt(0),
    auctionInterval: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cellarfees.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeAccrualAuctionThreshold !== BigInt(0)) {
      writer.uint32(8).uint64(message.feeAccrualAuctionThreshold);
    }
    if (message.rewardEmissionPeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.rewardEmissionPeriod);
    }
    if (message.initialPriceDecreaseRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.initialPriceDecreaseRate, 18).atomics);
    }
    if (message.priceDecreaseBlockInterval !== BigInt(0)) {
      writer.uint32(32).uint64(message.priceDecreaseBlockInterval);
    }
    if (message.auctionInterval !== BigInt(0)) {
      writer.uint32(40).uint64(message.auctionInterval);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      feeAccrualAuctionThreshold: isSet(object.feeAccrualAuctionThreshold) ? BigInt(object.feeAccrualAuctionThreshold.toString()) : BigInt(0),
      rewardEmissionPeriod: isSet(object.rewardEmissionPeriod) ? BigInt(object.rewardEmissionPeriod.toString()) : BigInt(0),
      initialPriceDecreaseRate: isSet(object.initialPriceDecreaseRate) ? String(object.initialPriceDecreaseRate) : "",
      priceDecreaseBlockInterval: isSet(object.priceDecreaseBlockInterval) ? BigInt(object.priceDecreaseBlockInterval.toString()) : BigInt(0),
      auctionInterval: isSet(object.auctionInterval) ? BigInt(object.auctionInterval.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.feeAccrualAuctionThreshold = object.feeAccrualAuctionThreshold !== undefined && object.feeAccrualAuctionThreshold !== null ? BigInt(object.feeAccrualAuctionThreshold.toString()) : BigInt(0);
    message.rewardEmissionPeriod = object.rewardEmissionPeriod !== undefined && object.rewardEmissionPeriod !== null ? BigInt(object.rewardEmissionPeriod.toString()) : BigInt(0);
    message.initialPriceDecreaseRate = object.initialPriceDecreaseRate ?? "";
    message.priceDecreaseBlockInterval = object.priceDecreaseBlockInterval !== undefined && object.priceDecreaseBlockInterval !== null ? BigInt(object.priceDecreaseBlockInterval.toString()) : BigInt(0);
    message.auctionInterval = object.auctionInterval !== undefined && object.auctionInterval !== null ? BigInt(object.auctionInterval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.fee_accrual_auction_threshold !== undefined && object.fee_accrual_auction_threshold !== null) {
      message.feeAccrualAuctionThreshold = BigInt(object.fee_accrual_auction_threshold);
    }
    if (object.reward_emission_period !== undefined && object.reward_emission_period !== null) {
      message.rewardEmissionPeriod = BigInt(object.reward_emission_period);
    }
    if (object.initial_price_decrease_rate !== undefined && object.initial_price_decrease_rate !== null) {
      message.initialPriceDecreaseRate = object.initial_price_decrease_rate;
    }
    if (object.price_decrease_block_interval !== undefined && object.price_decrease_block_interval !== null) {
      message.priceDecreaseBlockInterval = BigInt(object.price_decrease_block_interval);
    }
    if (object.auction_interval !== undefined && object.auction_interval !== null) {
      message.auctionInterval = BigInt(object.auction_interval);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.fee_accrual_auction_threshold = message.feeAccrualAuctionThreshold ? message.feeAccrualAuctionThreshold.toString() : undefined;
    obj.reward_emission_period = message.rewardEmissionPeriod ? message.rewardEmissionPeriod.toString() : undefined;
    obj.initial_price_decrease_rate = message.initialPriceDecreaseRate;
    obj.price_decrease_block_interval = message.priceDecreaseBlockInterval ? message.priceDecreaseBlockInterval.toString() : undefined;
    obj.auction_interval = message.auctionInterval ? message.auctionInterval.toString() : undefined;
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
      typeUrl: "/cellarfees.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};