import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
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
export declare const Auction: {
    typeUrl: string;
    encode(message: Auction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Auction;
    fromPartial(object: Partial<Auction>): Auction;
    fromAmino(object: AuctionAmino): Auction;
    toAmino(message: Auction): AuctionAmino;
    fromAminoMsg(object: AuctionAminoMsg): Auction;
    fromProtoMsg(message: AuctionProtoMsg): Auction;
    toProto(message: Auction): Uint8Array;
    toProtoMsg(message: Auction): AuctionProtoMsg;
};
export declare const Bid: {
    typeUrl: string;
    encode(message: Bid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Bid;
    fromPartial(object: Partial<Bid>): Bid;
    fromAmino(object: BidAmino): Bid;
    toAmino(message: Bid): BidAmino;
    fromAminoMsg(object: BidAminoMsg): Bid;
    fromProtoMsg(message: BidProtoMsg): Bid;
    toProto(message: Bid): Uint8Array;
    toProtoMsg(message: Bid): BidProtoMsg;
};
export declare const TokenPrice: {
    typeUrl: string;
    encode(message: TokenPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenPrice;
    fromPartial(object: Partial<TokenPrice>): TokenPrice;
    fromAmino(object: TokenPriceAmino): TokenPrice;
    toAmino(message: TokenPrice): TokenPriceAmino;
    fromAminoMsg(object: TokenPriceAminoMsg): TokenPrice;
    fromProtoMsg(message: TokenPriceProtoMsg): TokenPrice;
    toProto(message: TokenPrice): Uint8Array;
    toProtoMsg(message: TokenPrice): TokenPriceProtoMsg;
};
export declare const ProposedTokenPrice: {
    typeUrl: string;
    encode(message: ProposedTokenPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProposedTokenPrice;
    fromPartial(object: Partial<ProposedTokenPrice>): ProposedTokenPrice;
    fromAmino(object: ProposedTokenPriceAmino): ProposedTokenPrice;
    toAmino(message: ProposedTokenPrice): ProposedTokenPriceAmino;
    fromAminoMsg(object: ProposedTokenPriceAminoMsg): ProposedTokenPrice;
    fromProtoMsg(message: ProposedTokenPriceProtoMsg): ProposedTokenPrice;
    toProto(message: ProposedTokenPrice): Uint8Array;
    toProtoMsg(message: ProposedTokenPrice): ProposedTokenPriceProtoMsg;
};
