import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AuctionListing, AuctionListingAmino, AuctionListingSDKType, Bid, BidAmino, BidSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    listings: [],
    ListingCount: BigInt(0),
    params: Params.fromPartial({}),
    auctions: [],
    bids: [],
    nextAuctionNumber: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.ListingCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.ListingCount);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.auctions) {
      AuctionListing.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.nextAuctionNumber !== BigInt(0)) {
      writer.uint32(48).uint64(message.nextAuctionNumber);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      ListingCount: isSet(object.ListingCount) ? BigInt(object.ListingCount.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => AuctionListing.fromJSON(e)) : [],
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Bid.fromJSON(e)) : [],
      nextAuctionNumber: isSet(object.nextAuctionNumber) ? BigInt(object.nextAuctionNumber.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.ListingCount = object.ListingCount !== undefined && object.ListingCount !== null ? BigInt(object.ListingCount.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctions = object.auctions?.map(e => AuctionListing.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    message.nextAuctionNumber = object.nextAuctionNumber !== undefined && object.nextAuctionNumber !== null ? BigInt(object.nextAuctionNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.ListingCount !== undefined && object.ListingCount !== null) {
      message.ListingCount = BigInt(object.ListingCount);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.auctions = object.auctions?.map(e => AuctionListing.fromAmino(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromAmino(e)) || [];
    if (object.next_auction_number !== undefined && object.next_auction_number !== null) {
      message.nextAuctionNumber = BigInt(object.next_auction_number);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = [];
    }
    obj.ListingCount = message.ListingCount ? message.ListingCount.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? AuctionListing.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? Bid.toAmino(e) : undefined);
    } else {
      obj.bids = [];
    }
    obj.next_auction_number = message.nextAuctionNumber ? message.nextAuctionNumber.toString() : undefined;
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};