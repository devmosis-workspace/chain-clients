import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { WeightedAddress, WeightedAddressAmino, WeightedAddressSDKType } from "./listing";
import { BinaryWriter } from "../../../binary";
export declare enum AuctionStatus {
    AUCTION_STATUS_UNSPECIFIED = 0,
    AUCTION_STATUS_INACTIVE = 1,
    AUCTION_STATUS_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const AuctionStatusSDKType: typeof AuctionStatus;
export declare const AuctionStatusAmino: typeof AuctionStatus;
export declare function auctionStatusFromJSON(object: any): AuctionStatus;
export declare function auctionStatusToJSON(object: AuctionStatus): string;
export interface AuctionListing {
    id: bigint;
    nftId: string;
    denomId: string;
    startPrice: Coin;
    startTime: Timestamp;
    endTime?: Timestamp;
    owner: string;
    incrementPercentage: string;
    whitelistAccounts: string[];
    splitShares: WeightedAddress[];
}
export interface AuctionListingProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.AuctionListing";
    value: Uint8Array;
}
export interface AuctionListingAmino {
    id?: string;
    nft_id?: string;
    denom_id?: string;
    start_price?: CoinAmino;
    start_time?: string;
    end_time?: string;
    owner?: string;
    increment_percentage?: string;
    whitelist_accounts?: string[];
    split_shares?: WeightedAddressAmino[];
}
export interface AuctionListingAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.AuctionListing";
    value: AuctionListingAmino;
}
export interface AuctionListingSDKType {
    id: bigint;
    nft_id: string;
    denom_id: string;
    start_price: CoinSDKType;
    start_time: TimestampSDKType;
    end_time?: TimestampSDKType;
    owner: string;
    increment_percentage: string;
    whitelist_accounts: string[];
    split_shares: WeightedAddressSDKType[];
}
export interface Bid {
    auctionId: bigint;
    bidder: string;
    amount: Coin;
    time: Timestamp;
}
export interface BidProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Bid";
    value: Uint8Array;
}
export interface BidAmino {
    auction_id?: string;
    bidder?: string;
    amount?: CoinAmino;
    time?: string;
}
export interface BidAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.Bid";
    value: BidAmino;
}
export interface BidSDKType {
    auction_id: bigint;
    bidder: string;
    amount: CoinSDKType;
    time: TimestampSDKType;
}
export declare const AuctionListing: {
    typeUrl: string;
    encode(message: AuctionListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AuctionListing;
    fromPartial(object: Partial<AuctionListing>): AuctionListing;
    fromAmino(object: AuctionListingAmino): AuctionListing;
    toAmino(message: AuctionListing): AuctionListingAmino;
    fromAminoMsg(object: AuctionListingAminoMsg): AuctionListing;
    fromProtoMsg(message: AuctionListingProtoMsg): AuctionListing;
    toProto(message: AuctionListing): Uint8Array;
    toProtoMsg(message: AuctionListing): AuctionListingProtoMsg;
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
