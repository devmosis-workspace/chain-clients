import { Auction, AuctionAmino, AuctionSDKType, Bid, BidAmino, BidSDKType, TokenPrice, TokenPriceAmino, TokenPriceSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export interface GenesisState {
  params: Params;
  auctions: Auction[];
  bids: Bid[];
  tokenPrices: TokenPrice[];
  lastAuctionId: number;
  lastBidId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/auction.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
  auctions?: AuctionAmino[];
  bids?: BidAmino[];
  token_prices?: TokenPriceAmino[];
  last_auction_id?: number;
  last_bid_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/auction.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  auctions: AuctionSDKType[];
  bids: BidSDKType[];
  token_prices: TokenPriceSDKType[];
  last_auction_id: number;
  last_bid_id: bigint;
}
export interface Params {
  priceMaxBlockAge: bigint;
  minimumBidInUsomm: bigint;
  minimumSaleTokensUsdValue: string;
  auctionMaxBlockAge: bigint;
  auctionPriceDecreaseAccelerationRate: string;
  minimumAuctionHeight: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/auction.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  price_max_block_age?: string;
  minimum_bid_in_usomm?: string;
  minimum_sale_tokens_usd_value?: string;
  auction_max_block_age?: string;
  auction_price_decrease_acceleration_rate?: string;
  minimum_auction_height?: string;
}
export interface ParamsAminoMsg {
  type: "/auction.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  price_max_block_age: bigint;
  minimum_bid_in_usomm: bigint;
  minimum_sale_tokens_usd_value: string;
  auction_max_block_age: bigint;
  auction_price_decrease_acceleration_rate: string;
  minimum_auction_height: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    auctions: [],
    bids: [],
    tokenPrices: [],
    lastAuctionId: 0,
    lastBidId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/auction.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tokenPrices) {
      TokenPrice.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastAuctionId !== 0) {
      writer.uint32(40).uint32(message.lastAuctionId);
    }
    if (message.lastBidId !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastBidId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Auction.fromJSON(e)) : [],
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Bid.fromJSON(e)) : [],
      tokenPrices: Array.isArray(object?.tokenPrices) ? object.tokenPrices.map((e: any) => TokenPrice.fromJSON(e)) : [],
      lastAuctionId: isSet(object.lastAuctionId) ? Number(object.lastAuctionId) : 0,
      lastBidId: isSet(object.lastBidId) ? BigInt(object.lastBidId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    message.tokenPrices = object.tokenPrices?.map(e => TokenPrice.fromPartial(e)) || [];
    message.lastAuctionId = object.lastAuctionId ?? 0;
    message.lastBidId = object.lastBidId !== undefined && object.lastBidId !== null ? BigInt(object.lastBidId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromAmino(e)) || [];
    message.tokenPrices = object.token_prices?.map(e => TokenPrice.fromAmino(e)) || [];
    if (object.last_auction_id !== undefined && object.last_auction_id !== null) {
      message.lastAuctionId = object.last_auction_id;
    }
    if (object.last_bid_id !== undefined && object.last_bid_id !== null) {
      message.lastBidId = BigInt(object.last_bid_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? Bid.toAmino(e) : undefined);
    } else {
      obj.bids = [];
    }
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map(e => e ? TokenPrice.toAmino(e) : undefined);
    } else {
      obj.token_prices = [];
    }
    obj.last_auction_id = message.lastAuctionId;
    obj.last_bid_id = message.lastBidId ? message.lastBidId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/auction.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    priceMaxBlockAge: BigInt(0),
    minimumBidInUsomm: BigInt(0),
    minimumSaleTokensUsdValue: "",
    auctionMaxBlockAge: BigInt(0),
    auctionPriceDecreaseAccelerationRate: "",
    minimumAuctionHeight: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/auction.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceMaxBlockAge !== BigInt(0)) {
      writer.uint32(8).uint64(message.priceMaxBlockAge);
    }
    if (message.minimumBidInUsomm !== BigInt(0)) {
      writer.uint32(16).uint64(message.minimumBidInUsomm);
    }
    if (message.minimumSaleTokensUsdValue !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.minimumSaleTokensUsdValue, 18).atomics);
    }
    if (message.auctionMaxBlockAge !== BigInt(0)) {
      writer.uint32(32).uint64(message.auctionMaxBlockAge);
    }
    if (message.auctionPriceDecreaseAccelerationRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.auctionPriceDecreaseAccelerationRate, 18).atomics);
    }
    if (message.minimumAuctionHeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.minimumAuctionHeight);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      priceMaxBlockAge: isSet(object.priceMaxBlockAge) ? BigInt(object.priceMaxBlockAge.toString()) : BigInt(0),
      minimumBidInUsomm: isSet(object.minimumBidInUsomm) ? BigInt(object.minimumBidInUsomm.toString()) : BigInt(0),
      minimumSaleTokensUsdValue: isSet(object.minimumSaleTokensUsdValue) ? String(object.minimumSaleTokensUsdValue) : "",
      auctionMaxBlockAge: isSet(object.auctionMaxBlockAge) ? BigInt(object.auctionMaxBlockAge.toString()) : BigInt(0),
      auctionPriceDecreaseAccelerationRate: isSet(object.auctionPriceDecreaseAccelerationRate) ? String(object.auctionPriceDecreaseAccelerationRate) : "",
      minimumAuctionHeight: isSet(object.minimumAuctionHeight) ? BigInt(object.minimumAuctionHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.priceMaxBlockAge = object.priceMaxBlockAge !== undefined && object.priceMaxBlockAge !== null ? BigInt(object.priceMaxBlockAge.toString()) : BigInt(0);
    message.minimumBidInUsomm = object.minimumBidInUsomm !== undefined && object.minimumBidInUsomm !== null ? BigInt(object.minimumBidInUsomm.toString()) : BigInt(0);
    message.minimumSaleTokensUsdValue = object.minimumSaleTokensUsdValue ?? "";
    message.auctionMaxBlockAge = object.auctionMaxBlockAge !== undefined && object.auctionMaxBlockAge !== null ? BigInt(object.auctionMaxBlockAge.toString()) : BigInt(0);
    message.auctionPriceDecreaseAccelerationRate = object.auctionPriceDecreaseAccelerationRate ?? "";
    message.minimumAuctionHeight = object.minimumAuctionHeight !== undefined && object.minimumAuctionHeight !== null ? BigInt(object.minimumAuctionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.price_max_block_age !== undefined && object.price_max_block_age !== null) {
      message.priceMaxBlockAge = BigInt(object.price_max_block_age);
    }
    if (object.minimum_bid_in_usomm !== undefined && object.minimum_bid_in_usomm !== null) {
      message.minimumBidInUsomm = BigInt(object.minimum_bid_in_usomm);
    }
    if (object.minimum_sale_tokens_usd_value !== undefined && object.minimum_sale_tokens_usd_value !== null) {
      message.minimumSaleTokensUsdValue = object.minimum_sale_tokens_usd_value;
    }
    if (object.auction_max_block_age !== undefined && object.auction_max_block_age !== null) {
      message.auctionMaxBlockAge = BigInt(object.auction_max_block_age);
    }
    if (object.auction_price_decrease_acceleration_rate !== undefined && object.auction_price_decrease_acceleration_rate !== null) {
      message.auctionPriceDecreaseAccelerationRate = object.auction_price_decrease_acceleration_rate;
    }
    if (object.minimum_auction_height !== undefined && object.minimum_auction_height !== null) {
      message.minimumAuctionHeight = BigInt(object.minimum_auction_height);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.price_max_block_age = message.priceMaxBlockAge ? message.priceMaxBlockAge.toString() : undefined;
    obj.minimum_bid_in_usomm = message.minimumBidInUsomm ? message.minimumBidInUsomm.toString() : undefined;
    obj.minimum_sale_tokens_usd_value = message.minimumSaleTokensUsdValue;
    obj.auction_max_block_age = message.auctionMaxBlockAge ? message.auctionMaxBlockAge.toString() : undefined;
    obj.auction_price_decrease_acceleration_rate = message.auctionPriceDecreaseAccelerationRate;
    obj.minimum_auction_height = message.minimumAuctionHeight ? message.minimumAuctionHeight.toString() : undefined;
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
      typeUrl: "/auction.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};