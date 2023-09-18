import { BinaryWriter } from "../../../binary";
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFT {
    id: string;
    nftId: string;
    denomId: string;
    owner: string;
}
export interface EventListNFTProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT";
    value: Uint8Array;
}
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFTAmino {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
export interface EventListNFTAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.EventListNFT";
    value: EventListNFTAmino;
}
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFTSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListing {
    id: string;
    nftId: string;
    denomId: string;
    owner: string;
}
export interface EventEditListingProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing";
    value: Uint8Array;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListingAmino {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
export interface EventEditListingAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.EventEditListing";
    value: EventEditListingAmino;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListingSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFT {
    id: string;
    nftId: string;
    denomId: string;
    owner: string;
}
export interface EventDeListNFTProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT";
    value: Uint8Array;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFTAmino {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
export interface EventDeListNFTAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.EventDeListNFT";
    value: EventDeListNFTAmino;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFTSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFT {
    id: string;
    nftId: string;
    denomId: string;
    owner: string;
    buyer: string;
}
export interface EventBuyNFTProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT";
    value: Uint8Array;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFTAmino {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
    buyer: string;
}
export interface EventBuyNFTAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.EventBuyNFT";
    value: EventBuyNFTAmino;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFTSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
    buyer: string;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuction {
    id: string;
    nftId: string;
    denomId: string;
    owner: string;
    minPrice: string;
}
export interface EventCreateAuctionProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction";
    value: Uint8Array;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuctionAmino {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
    min_price: string;
}
export interface EventCreateAuctionAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.EventCreateAuction";
    value: EventCreateAuctionAmino;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuctionSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
    min_price: string;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuction {
    id: string;
    nftId: string;
    denomId: string;
    owner: string;
}
export interface EventCancelAuctionProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction";
    value: Uint8Array;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuctionAmino {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
export interface EventCancelAuctionAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.EventCancelAuction";
    value: EventCancelAuctionAmino;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuctionSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBid {
    auctionId: string;
    nftId: string;
    denomId: string;
    bidder: string;
    amount: string;
}
export interface EventPlaceBidProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid";
    value: Uint8Array;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBidAmino {
    auction_id: string;
    nft_id: string;
    denom_id: string;
    bidder: string;
    amount: string;
}
export interface EventPlaceBidAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.EventPlaceBid";
    value: EventPlaceBidAmino;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBidSDKType {
    auction_id: string;
    nft_id: string;
    denom_id: string;
    bidder: string;
    amount: string;
}
export declare const EventListNFT: {
    typeUrl: string;
    encode(message: EventListNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventListNFT;
    fromPartial(object: Partial<EventListNFT>): EventListNFT;
    fromAmino(object: EventListNFTAmino): EventListNFT;
    toAmino(message: EventListNFT): EventListNFTAmino;
    fromAminoMsg(object: EventListNFTAminoMsg): EventListNFT;
    fromProtoMsg(message: EventListNFTProtoMsg): EventListNFT;
    toProto(message: EventListNFT): Uint8Array;
    toProtoMsg(message: EventListNFT): EventListNFTProtoMsg;
};
export declare const EventEditListing: {
    typeUrl: string;
    encode(message: EventEditListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventEditListing;
    fromPartial(object: Partial<EventEditListing>): EventEditListing;
    fromAmino(object: EventEditListingAmino): EventEditListing;
    toAmino(message: EventEditListing): EventEditListingAmino;
    fromAminoMsg(object: EventEditListingAminoMsg): EventEditListing;
    fromProtoMsg(message: EventEditListingProtoMsg): EventEditListing;
    toProto(message: EventEditListing): Uint8Array;
    toProtoMsg(message: EventEditListing): EventEditListingProtoMsg;
};
export declare const EventDeListNFT: {
    typeUrl: string;
    encode(message: EventDeListNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDeListNFT;
    fromPartial(object: Partial<EventDeListNFT>): EventDeListNFT;
    fromAmino(object: EventDeListNFTAmino): EventDeListNFT;
    toAmino(message: EventDeListNFT): EventDeListNFTAmino;
    fromAminoMsg(object: EventDeListNFTAminoMsg): EventDeListNFT;
    fromProtoMsg(message: EventDeListNFTProtoMsg): EventDeListNFT;
    toProto(message: EventDeListNFT): Uint8Array;
    toProtoMsg(message: EventDeListNFT): EventDeListNFTProtoMsg;
};
export declare const EventBuyNFT: {
    typeUrl: string;
    encode(message: EventBuyNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBuyNFT;
    fromPartial(object: Partial<EventBuyNFT>): EventBuyNFT;
    fromAmino(object: EventBuyNFTAmino): EventBuyNFT;
    toAmino(message: EventBuyNFT): EventBuyNFTAmino;
    fromAminoMsg(object: EventBuyNFTAminoMsg): EventBuyNFT;
    fromProtoMsg(message: EventBuyNFTProtoMsg): EventBuyNFT;
    toProto(message: EventBuyNFT): Uint8Array;
    toProtoMsg(message: EventBuyNFT): EventBuyNFTProtoMsg;
};
export declare const EventCreateAuction: {
    typeUrl: string;
    encode(message: EventCreateAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateAuction;
    fromPartial(object: Partial<EventCreateAuction>): EventCreateAuction;
    fromAmino(object: EventCreateAuctionAmino): EventCreateAuction;
    toAmino(message: EventCreateAuction): EventCreateAuctionAmino;
    fromAminoMsg(object: EventCreateAuctionAminoMsg): EventCreateAuction;
    fromProtoMsg(message: EventCreateAuctionProtoMsg): EventCreateAuction;
    toProto(message: EventCreateAuction): Uint8Array;
    toProtoMsg(message: EventCreateAuction): EventCreateAuctionProtoMsg;
};
export declare const EventCancelAuction: {
    typeUrl: string;
    encode(message: EventCancelAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCancelAuction;
    fromPartial(object: Partial<EventCancelAuction>): EventCancelAuction;
    fromAmino(object: EventCancelAuctionAmino): EventCancelAuction;
    toAmino(message: EventCancelAuction): EventCancelAuctionAmino;
    fromAminoMsg(object: EventCancelAuctionAminoMsg): EventCancelAuction;
    fromProtoMsg(message: EventCancelAuctionProtoMsg): EventCancelAuction;
    toProto(message: EventCancelAuction): Uint8Array;
    toProtoMsg(message: EventCancelAuction): EventCancelAuctionProtoMsg;
};
export declare const EventPlaceBid: {
    typeUrl: string;
    encode(message: EventPlaceBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPlaceBid;
    fromPartial(object: Partial<EventPlaceBid>): EventPlaceBid;
    fromAmino(object: EventPlaceBidAmino): EventPlaceBid;
    toAmino(message: EventPlaceBid): EventPlaceBidAmino;
    fromAminoMsg(object: EventPlaceBidAminoMsg): EventPlaceBid;
    fromProtoMsg(message: EventPlaceBidProtoMsg): EventPlaceBid;
    toProto(message: EventPlaceBid): Uint8Array;
    toProtoMsg(message: EventPlaceBid): EventPlaceBidProtoMsg;
};
