import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AuctionListing, AuctionListingAmino, AuctionListingSDKType, Bid, BidAmino, BidSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    /** NFTs that are listed in marketplace */
    listings: Listing[];
    ListingCount: bigint;
    params: Params;
    auctions: AuctionListing[];
    bids: Bid[];
    nextAuctionNumber: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    /** NFTs that are listed in marketplace */
    listings?: ListingAmino[];
    ListingCount?: string;
    params?: ParamsAmino;
    auctions?: AuctionListingAmino[];
    bids?: BidAmino[];
    next_auction_number?: string;
}
export interface GenesisStateAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    listings: ListingSDKType[];
    ListingCount: bigint;
    params: ParamsSDKType;
    auctions: AuctionListingSDKType[];
    bids: BidSDKType[];
    next_auction_number: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
