import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface Auction {
  id: number;
  startingTokensForSale: Coin;
  startBlock: bigint;
  endBlock: bigint;
  initialPriceDecreaseRate: string;
  currentPriceDecreaseRate: string;
  priceDecreaseBlockInterval: bigint;
  initialUnitPriceInUsomm: string;
  currentUnitPriceInUsomm: string;
  remainingTokensForSale: Coin;
  fundingModuleAccount: string;
  proceedsModuleAccount: string;
}
export interface AuctionProtoMsg {
  typeUrl: "/auction.v1.Auction";
  value: Uint8Array;
}
export interface AuctionAmino {
  id?: number;
  starting_tokens_for_sale?: CoinAmino;
  start_block?: string;
  end_block?: string;
  initial_price_decrease_rate?: string;
  current_price_decrease_rate?: string;
  price_decrease_block_interval?: string;
  initial_unit_price_in_usomm?: string;
  current_unit_price_in_usomm?: string;
  remaining_tokens_for_sale?: CoinAmino;
  funding_module_account?: string;
  proceeds_module_account?: string;
}
export interface AuctionAminoMsg {
  type: "/auction.v1.Auction";
  value: AuctionAmino;
}
export interface AuctionSDKType {
  id: number;
  starting_tokens_for_sale: CoinSDKType;
  start_block: bigint;
  end_block: bigint;
  initial_price_decrease_rate: string;
  current_price_decrease_rate: string;
  price_decrease_block_interval: bigint;
  initial_unit_price_in_usomm: string;
  current_unit_price_in_usomm: string;
  remaining_tokens_for_sale: CoinSDKType;
  funding_module_account: string;
  proceeds_module_account: string;
}
export interface Bid {
  id: bigint;
  auctionId: number;
  bidder: string;
  maxBidInUsomm: Coin;
  saleTokenMinimumAmount: Coin;
  totalFulfilledSaleTokens: Coin;
  saleTokenUnitPriceInUsomm: string;
  totalUsommPaid: Coin;
  blockHeight: bigint;
}
export interface BidProtoMsg {
  typeUrl: "/auction.v1.Bid";
  value: Uint8Array;
}
export interface BidAmino {
  id?: string;
  auction_id?: number;
  bidder?: string;
  max_bid_in_usomm?: CoinAmino;
  sale_token_minimum_amount?: CoinAmino;
  total_fulfilled_sale_tokens?: CoinAmino;
  sale_token_unit_price_in_usomm?: string;
  total_usomm_paid?: CoinAmino;
  block_height?: string;
}
export interface BidAminoMsg {
  type: "/auction.v1.Bid";
  value: BidAmino;
}
export interface BidSDKType {
  id: bigint;
  auction_id: number;
  bidder: string;
  max_bid_in_usomm: CoinSDKType;
  sale_token_minimum_amount: CoinSDKType;
  total_fulfilled_sale_tokens: CoinSDKType;
  sale_token_unit_price_in_usomm: string;
  total_usomm_paid: CoinSDKType;
  block_height: bigint;
}
/** USD price is the value for one non-fractional token (smallest unit of the token * 10^exponent) */
export interface TokenPrice {
  denom: string;
  exponent: bigint;
  usdPrice: string;
  lastUpdatedBlock: bigint;
}
export interface TokenPriceProtoMsg {
  typeUrl: "/auction.v1.TokenPrice";
  value: Uint8Array;
}
/** USD price is the value for one non-fractional token (smallest unit of the token * 10^exponent) */
export interface TokenPriceAmino {
  denom?: string;
  exponent?: string;
  usd_price?: string;
  last_updated_block?: string;
}
export interface TokenPriceAminoMsg {
  type: "/auction.v1.TokenPrice";
  value: TokenPriceAmino;
}
/** USD price is the value for one non-fractional token (smallest unit of the token * 10^exponent) */
export interface TokenPriceSDKType {
  denom: string;
  exponent: bigint;
  usd_price: string;
  last_updated_block: bigint;
}
export interface ProposedTokenPrice {
  denom: string;
  exponent: bigint;
  usdPrice: string;
}
export interface ProposedTokenPriceProtoMsg {
  typeUrl: "/auction.v1.ProposedTokenPrice";
  value: Uint8Array;
}
export interface ProposedTokenPriceAmino {
  denom?: string;
  exponent?: string;
  usd_price?: string;
}
export interface ProposedTokenPriceAminoMsg {
  type: "/auction.v1.ProposedTokenPrice";
  value: ProposedTokenPriceAmino;
}
export interface ProposedTokenPriceSDKType {
  denom: string;
  exponent: bigint;
  usd_price: string;
}
function createBaseAuction(): Auction {
  return {
    id: 0,
    startingTokensForSale: Coin.fromPartial({}),
    startBlock: BigInt(0),
    endBlock: BigInt(0),
    initialPriceDecreaseRate: "",
    currentPriceDecreaseRate: "",
    priceDecreaseBlockInterval: BigInt(0),
    initialUnitPriceInUsomm: "",
    currentUnitPriceInUsomm: "",
    remainingTokensForSale: Coin.fromPartial({}),
    fundingModuleAccount: "",
    proceedsModuleAccount: ""
  };
}
export const Auction = {
  typeUrl: "/auction.v1.Auction",
  encode(message: Auction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.startingTokensForSale !== undefined) {
      Coin.encode(message.startingTokensForSale, writer.uint32(18).fork()).ldelim();
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(32).uint64(message.endBlock);
    }
    if (message.initialPriceDecreaseRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.initialPriceDecreaseRate, 18).atomics);
    }
    if (message.currentPriceDecreaseRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.currentPriceDecreaseRate, 18).atomics);
    }
    if (message.priceDecreaseBlockInterval !== BigInt(0)) {
      writer.uint32(56).uint64(message.priceDecreaseBlockInterval);
    }
    if (message.initialUnitPriceInUsomm !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.initialUnitPriceInUsomm, 18).atomics);
    }
    if (message.currentUnitPriceInUsomm !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.currentUnitPriceInUsomm, 18).atomics);
    }
    if (message.remainingTokensForSale !== undefined) {
      Coin.encode(message.remainingTokensForSale, writer.uint32(82).fork()).ldelim();
    }
    if (message.fundingModuleAccount !== "") {
      writer.uint32(90).string(message.fundingModuleAccount);
    }
    if (message.proceedsModuleAccount !== "") {
      writer.uint32(98).string(message.proceedsModuleAccount);
    }
    return writer;
  },
  fromJSON(object: any): Auction {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      startingTokensForSale: isSet(object.startingTokensForSale) ? Coin.fromJSON(object.startingTokensForSale) : undefined,
      startBlock: isSet(object.startBlock) ? BigInt(object.startBlock.toString()) : BigInt(0),
      endBlock: isSet(object.endBlock) ? BigInt(object.endBlock.toString()) : BigInt(0),
      initialPriceDecreaseRate: isSet(object.initialPriceDecreaseRate) ? String(object.initialPriceDecreaseRate) : "",
      currentPriceDecreaseRate: isSet(object.currentPriceDecreaseRate) ? String(object.currentPriceDecreaseRate) : "",
      priceDecreaseBlockInterval: isSet(object.priceDecreaseBlockInterval) ? BigInt(object.priceDecreaseBlockInterval.toString()) : BigInt(0),
      initialUnitPriceInUsomm: isSet(object.initialUnitPriceInUsomm) ? String(object.initialUnitPriceInUsomm) : "",
      currentUnitPriceInUsomm: isSet(object.currentUnitPriceInUsomm) ? String(object.currentUnitPriceInUsomm) : "",
      remainingTokensForSale: isSet(object.remainingTokensForSale) ? Coin.fromJSON(object.remainingTokensForSale) : undefined,
      fundingModuleAccount: isSet(object.fundingModuleAccount) ? String(object.fundingModuleAccount) : "",
      proceedsModuleAccount: isSet(object.proceedsModuleAccount) ? String(object.proceedsModuleAccount) : ""
    };
  },
  fromPartial(object: Partial<Auction>): Auction {
    const message = createBaseAuction();
    message.id = object.id ?? 0;
    message.startingTokensForSale = object.startingTokensForSale !== undefined && object.startingTokensForSale !== null ? Coin.fromPartial(object.startingTokensForSale) : undefined;
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.initialPriceDecreaseRate = object.initialPriceDecreaseRate ?? "";
    message.currentPriceDecreaseRate = object.currentPriceDecreaseRate ?? "";
    message.priceDecreaseBlockInterval = object.priceDecreaseBlockInterval !== undefined && object.priceDecreaseBlockInterval !== null ? BigInt(object.priceDecreaseBlockInterval.toString()) : BigInt(0);
    message.initialUnitPriceInUsomm = object.initialUnitPriceInUsomm ?? "";
    message.currentUnitPriceInUsomm = object.currentUnitPriceInUsomm ?? "";
    message.remainingTokensForSale = object.remainingTokensForSale !== undefined && object.remainingTokensForSale !== null ? Coin.fromPartial(object.remainingTokensForSale) : undefined;
    message.fundingModuleAccount = object.fundingModuleAccount ?? "";
    message.proceedsModuleAccount = object.proceedsModuleAccount ?? "";
    return message;
  },
  fromAmino(object: AuctionAmino): Auction {
    const message = createBaseAuction();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.starting_tokens_for_sale !== undefined && object.starting_tokens_for_sale !== null) {
      message.startingTokensForSale = Coin.fromAmino(object.starting_tokens_for_sale);
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.initial_price_decrease_rate !== undefined && object.initial_price_decrease_rate !== null) {
      message.initialPriceDecreaseRate = object.initial_price_decrease_rate;
    }
    if (object.current_price_decrease_rate !== undefined && object.current_price_decrease_rate !== null) {
      message.currentPriceDecreaseRate = object.current_price_decrease_rate;
    }
    if (object.price_decrease_block_interval !== undefined && object.price_decrease_block_interval !== null) {
      message.priceDecreaseBlockInterval = BigInt(object.price_decrease_block_interval);
    }
    if (object.initial_unit_price_in_usomm !== undefined && object.initial_unit_price_in_usomm !== null) {
      message.initialUnitPriceInUsomm = object.initial_unit_price_in_usomm;
    }
    if (object.current_unit_price_in_usomm !== undefined && object.current_unit_price_in_usomm !== null) {
      message.currentUnitPriceInUsomm = object.current_unit_price_in_usomm;
    }
    if (object.remaining_tokens_for_sale !== undefined && object.remaining_tokens_for_sale !== null) {
      message.remainingTokensForSale = Coin.fromAmino(object.remaining_tokens_for_sale);
    }
    if (object.funding_module_account !== undefined && object.funding_module_account !== null) {
      message.fundingModuleAccount = object.funding_module_account;
    }
    if (object.proceeds_module_account !== undefined && object.proceeds_module_account !== null) {
      message.proceedsModuleAccount = object.proceeds_module_account;
    }
    return message;
  },
  toAmino(message: Auction): AuctionAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.starting_tokens_for_sale = message.startingTokensForSale ? Coin.toAmino(message.startingTokensForSale) : undefined;
    obj.start_block = message.startBlock ? message.startBlock.toString() : undefined;
    obj.end_block = message.endBlock ? message.endBlock.toString() : undefined;
    obj.initial_price_decrease_rate = message.initialPriceDecreaseRate;
    obj.current_price_decrease_rate = message.currentPriceDecreaseRate;
    obj.price_decrease_block_interval = message.priceDecreaseBlockInterval ? message.priceDecreaseBlockInterval.toString() : undefined;
    obj.initial_unit_price_in_usomm = message.initialUnitPriceInUsomm;
    obj.current_unit_price_in_usomm = message.currentUnitPriceInUsomm;
    obj.remaining_tokens_for_sale = message.remainingTokensForSale ? Coin.toAmino(message.remainingTokensForSale) : undefined;
    obj.funding_module_account = message.fundingModuleAccount;
    obj.proceeds_module_account = message.proceedsModuleAccount;
    return obj;
  },
  fromAminoMsg(object: AuctionAminoMsg): Auction {
    return Auction.fromAmino(object.value);
  },
  fromProtoMsg(message: AuctionProtoMsg): Auction {
    return Auction.decode(message.value);
  },
  toProto(message: Auction): Uint8Array {
    return Auction.encode(message).finish();
  },
  toProtoMsg(message: Auction): AuctionProtoMsg {
    return {
      typeUrl: "/auction.v1.Auction",
      value: Auction.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    id: BigInt(0),
    auctionId: 0,
    bidder: "",
    maxBidInUsomm: Coin.fromPartial({}),
    saleTokenMinimumAmount: Coin.fromPartial({}),
    totalFulfilledSaleTokens: Coin.fromPartial({}),
    saleTokenUnitPriceInUsomm: "",
    totalUsommPaid: Coin.fromPartial({}),
    blockHeight: BigInt(0)
  };
}
export const Bid = {
  typeUrl: "/auction.v1.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.auctionId !== 0) {
      writer.uint32(16).uint32(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }
    if (message.maxBidInUsomm !== undefined) {
      Coin.encode(message.maxBidInUsomm, writer.uint32(34).fork()).ldelim();
    }
    if (message.saleTokenMinimumAmount !== undefined) {
      Coin.encode(message.saleTokenMinimumAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.totalFulfilledSaleTokens !== undefined) {
      Coin.encode(message.totalFulfilledSaleTokens, writer.uint32(50).fork()).ldelim();
    }
    if (message.saleTokenUnitPriceInUsomm !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.saleTokenUnitPriceInUsomm, 18).atomics);
    }
    if (message.totalUsommPaid !== undefined) {
      Coin.encode(message.totalUsommPaid, writer.uint32(66).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(72).uint64(message.blockHeight);
    }
    return writer;
  },
  fromJSON(object: any): Bid {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      auctionId: isSet(object.auctionId) ? Number(object.auctionId) : 0,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      maxBidInUsomm: isSet(object.maxBidInUsomm) ? Coin.fromJSON(object.maxBidInUsomm) : undefined,
      saleTokenMinimumAmount: isSet(object.saleTokenMinimumAmount) ? Coin.fromJSON(object.saleTokenMinimumAmount) : undefined,
      totalFulfilledSaleTokens: isSet(object.totalFulfilledSaleTokens) ? Coin.fromJSON(object.totalFulfilledSaleTokens) : undefined,
      saleTokenUnitPriceInUsomm: isSet(object.saleTokenUnitPriceInUsomm) ? String(object.saleTokenUnitPriceInUsomm) : "",
      totalUsommPaid: isSet(object.totalUsommPaid) ? Coin.fromJSON(object.totalUsommPaid) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Bid>): Bid {
    const message = createBaseBid();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.auctionId = object.auctionId ?? 0;
    message.bidder = object.bidder ?? "";
    message.maxBidInUsomm = object.maxBidInUsomm !== undefined && object.maxBidInUsomm !== null ? Coin.fromPartial(object.maxBidInUsomm) : undefined;
    message.saleTokenMinimumAmount = object.saleTokenMinimumAmount !== undefined && object.saleTokenMinimumAmount !== null ? Coin.fromPartial(object.saleTokenMinimumAmount) : undefined;
    message.totalFulfilledSaleTokens = object.totalFulfilledSaleTokens !== undefined && object.totalFulfilledSaleTokens !== null ? Coin.fromPartial(object.totalFulfilledSaleTokens) : undefined;
    message.saleTokenUnitPriceInUsomm = object.saleTokenUnitPriceInUsomm ?? "";
    message.totalUsommPaid = object.totalUsommPaid !== undefined && object.totalUsommPaid !== null ? Coin.fromPartial(object.totalUsommPaid) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = object.auction_id;
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.max_bid_in_usomm !== undefined && object.max_bid_in_usomm !== null) {
      message.maxBidInUsomm = Coin.fromAmino(object.max_bid_in_usomm);
    }
    if (object.sale_token_minimum_amount !== undefined && object.sale_token_minimum_amount !== null) {
      message.saleTokenMinimumAmount = Coin.fromAmino(object.sale_token_minimum_amount);
    }
    if (object.total_fulfilled_sale_tokens !== undefined && object.total_fulfilled_sale_tokens !== null) {
      message.totalFulfilledSaleTokens = Coin.fromAmino(object.total_fulfilled_sale_tokens);
    }
    if (object.sale_token_unit_price_in_usomm !== undefined && object.sale_token_unit_price_in_usomm !== null) {
      message.saleTokenUnitPriceInUsomm = object.sale_token_unit_price_in_usomm;
    }
    if (object.total_usomm_paid !== undefined && object.total_usomm_paid !== null) {
      message.totalUsommPaid = Coin.fromAmino(object.total_usomm_paid);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.auction_id = message.auctionId;
    obj.bidder = message.bidder;
    obj.max_bid_in_usomm = message.maxBidInUsomm ? Coin.toAmino(message.maxBidInUsomm) : undefined;
    obj.sale_token_minimum_amount = message.saleTokenMinimumAmount ? Coin.toAmino(message.saleTokenMinimumAmount) : undefined;
    obj.total_fulfilled_sale_tokens = message.totalFulfilledSaleTokens ? Coin.toAmino(message.totalFulfilledSaleTokens) : undefined;
    obj.sale_token_unit_price_in_usomm = message.saleTokenUnitPriceInUsomm;
    obj.total_usomm_paid = message.totalUsommPaid ? Coin.toAmino(message.totalUsommPaid) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/auction.v1.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
function createBaseTokenPrice(): TokenPrice {
  return {
    denom: "",
    exponent: BigInt(0),
    usdPrice: "",
    lastUpdatedBlock: BigInt(0)
  };
}
export const TokenPrice = {
  typeUrl: "/auction.v1.TokenPrice",
  encode(message: TokenPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== BigInt(0)) {
      writer.uint32(16).uint64(message.exponent);
    }
    if (message.usdPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.usdPrice, 18).atomics);
    }
    if (message.lastUpdatedBlock !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastUpdatedBlock);
    }
    return writer;
  },
  fromJSON(object: any): TokenPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      exponent: isSet(object.exponent) ? BigInt(object.exponent.toString()) : BigInt(0),
      usdPrice: isSet(object.usdPrice) ? String(object.usdPrice) : "",
      lastUpdatedBlock: isSet(object.lastUpdatedBlock) ? BigInt(object.lastUpdatedBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TokenPrice>): TokenPrice {
    const message = createBaseTokenPrice();
    message.denom = object.denom ?? "";
    message.exponent = object.exponent !== undefined && object.exponent !== null ? BigInt(object.exponent.toString()) : BigInt(0);
    message.usdPrice = object.usdPrice ?? "";
    message.lastUpdatedBlock = object.lastUpdatedBlock !== undefined && object.lastUpdatedBlock !== null ? BigInt(object.lastUpdatedBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TokenPriceAmino): TokenPrice {
    const message = createBaseTokenPrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = BigInt(object.exponent);
    }
    if (object.usd_price !== undefined && object.usd_price !== null) {
      message.usdPrice = object.usd_price;
    }
    if (object.last_updated_block !== undefined && object.last_updated_block !== null) {
      message.lastUpdatedBlock = BigInt(object.last_updated_block);
    }
    return message;
  },
  toAmino(message: TokenPrice): TokenPriceAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.exponent = message.exponent ? message.exponent.toString() : undefined;
    obj.usd_price = message.usdPrice;
    obj.last_updated_block = message.lastUpdatedBlock ? message.lastUpdatedBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenPriceAminoMsg): TokenPrice {
    return TokenPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPriceProtoMsg): TokenPrice {
    return TokenPrice.decode(message.value);
  },
  toProto(message: TokenPrice): Uint8Array {
    return TokenPrice.encode(message).finish();
  },
  toProtoMsg(message: TokenPrice): TokenPriceProtoMsg {
    return {
      typeUrl: "/auction.v1.TokenPrice",
      value: TokenPrice.encode(message).finish()
    };
  }
};
function createBaseProposedTokenPrice(): ProposedTokenPrice {
  return {
    denom: "",
    exponent: BigInt(0),
    usdPrice: ""
  };
}
export const ProposedTokenPrice = {
  typeUrl: "/auction.v1.ProposedTokenPrice",
  encode(message: ProposedTokenPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== BigInt(0)) {
      writer.uint32(16).uint64(message.exponent);
    }
    if (message.usdPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.usdPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): ProposedTokenPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      exponent: isSet(object.exponent) ? BigInt(object.exponent.toString()) : BigInt(0),
      usdPrice: isSet(object.usdPrice) ? String(object.usdPrice) : ""
    };
  },
  fromPartial(object: Partial<ProposedTokenPrice>): ProposedTokenPrice {
    const message = createBaseProposedTokenPrice();
    message.denom = object.denom ?? "";
    message.exponent = object.exponent !== undefined && object.exponent !== null ? BigInt(object.exponent.toString()) : BigInt(0);
    message.usdPrice = object.usdPrice ?? "";
    return message;
  },
  fromAmino(object: ProposedTokenPriceAmino): ProposedTokenPrice {
    const message = createBaseProposedTokenPrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = BigInt(object.exponent);
    }
    if (object.usd_price !== undefined && object.usd_price !== null) {
      message.usdPrice = object.usd_price;
    }
    return message;
  },
  toAmino(message: ProposedTokenPrice): ProposedTokenPriceAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.exponent = message.exponent ? message.exponent.toString() : undefined;
    obj.usd_price = message.usdPrice;
    return obj;
  },
  fromAminoMsg(object: ProposedTokenPriceAminoMsg): ProposedTokenPrice {
    return ProposedTokenPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposedTokenPriceProtoMsg): ProposedTokenPrice {
    return ProposedTokenPrice.decode(message.value);
  },
  toProto(message: ProposedTokenPrice): Uint8Array {
    return ProposedTokenPrice.encode(message).finish();
  },
  toProtoMsg(message: ProposedTokenPrice): ProposedTokenPriceProtoMsg {
    return {
      typeUrl: "/auction.v1.ProposedTokenPrice",
      value: ProposedTokenPrice.encode(message).finish()
    };
  }
};