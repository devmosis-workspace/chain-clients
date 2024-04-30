import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { WeightedAddress, WeightedAddressAmino, WeightedAddressSDKType } from "./listing";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AuctionListing, AuctionListingAmino, AuctionListingSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
export interface MsgListNFT {
    id: string;
    nftId: string;
    denomId: string;
    price: Coin;
    owner: string;
    splitShares: WeightedAddress[];
}
export interface MsgListNFTProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT";
    value: Uint8Array;
}
export interface MsgListNFTAmino {
    id?: string;
    nft_id?: string;
    denom_id?: string;
    price?: CoinAmino;
    owner?: string;
    split_shares?: WeightedAddressAmino[];
}
export interface MsgListNFTAminoMsg {
    type: "OmniFlix/marketplace/MsgListNFT";
    value: MsgListNFTAmino;
}
export interface MsgListNFTSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    price: CoinSDKType;
    owner: string;
    split_shares: WeightedAddressSDKType[];
}
export interface MsgListNFTResponse {
}
export interface MsgListNFTResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse";
    value: Uint8Array;
}
export interface MsgListNFTResponseAmino {
}
export interface MsgListNFTResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse";
    value: MsgListNFTResponseAmino;
}
export interface MsgListNFTResponseSDKType {
}
export interface MsgEditListing {
    id: string;
    price: Coin;
    owner: string;
}
export interface MsgEditListingProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing";
    value: Uint8Array;
}
export interface MsgEditListingAmino {
    id?: string;
    price?: CoinAmino;
    owner?: string;
}
export interface MsgEditListingAminoMsg {
    type: "OmniFlix/marketplace/MsgEditListing";
    value: MsgEditListingAmino;
}
export interface MsgEditListingSDKType {
    id: string;
    price: CoinSDKType;
    owner: string;
}
export interface MsgEditListingResponse {
}
export interface MsgEditListingResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse";
    value: Uint8Array;
}
export interface MsgEditListingResponseAmino {
}
export interface MsgEditListingResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse";
    value: MsgEditListingResponseAmino;
}
export interface MsgEditListingResponseSDKType {
}
export interface MsgDeListNFT {
    id: string;
    owner: string;
}
export interface MsgDeListNFTProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT";
    value: Uint8Array;
}
export interface MsgDeListNFTAmino {
    id?: string;
    owner?: string;
}
export interface MsgDeListNFTAminoMsg {
    type: "OmniFlix/marketplace/MsgDeListNFT";
    value: MsgDeListNFTAmino;
}
export interface MsgDeListNFTSDKType {
    id: string;
    owner: string;
}
export interface MsgDeListNFTResponse {
}
export interface MsgDeListNFTResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse";
    value: Uint8Array;
}
export interface MsgDeListNFTResponseAmino {
}
export interface MsgDeListNFTResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse";
    value: MsgDeListNFTResponseAmino;
}
export interface MsgDeListNFTResponseSDKType {
}
export interface MsgBuyNFT {
    id: string;
    price: Coin;
    buyer: string;
}
export interface MsgBuyNFTProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT";
    value: Uint8Array;
}
export interface MsgBuyNFTAmino {
    id?: string;
    price?: CoinAmino;
    buyer?: string;
}
export interface MsgBuyNFTAminoMsg {
    type: "OmniFlix/marketplace/MsgBuyNFT";
    value: MsgBuyNFTAmino;
}
export interface MsgBuyNFTSDKType {
    id: string;
    price: CoinSDKType;
    buyer: string;
}
export interface MsgBuyNFTResponse {
}
export interface MsgBuyNFTResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse";
    value: Uint8Array;
}
export interface MsgBuyNFTResponseAmino {
}
export interface MsgBuyNFTResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse";
    value: MsgBuyNFTResponseAmino;
}
export interface MsgBuyNFTResponseSDKType {
}
export interface MsgCreateAuction {
    nftId: string;
    denomId: string;
    startTime: Timestamp;
    startPrice: Coin;
    duration?: Duration;
    incrementPercentage: string;
    whitelistAccounts: string[];
    splitShares: WeightedAddress[];
    owner: string;
}
export interface MsgCreateAuctionProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction";
    value: Uint8Array;
}
export interface MsgCreateAuctionAmino {
    nft_id?: string;
    denom_id?: string;
    start_time?: string;
    start_price?: CoinAmino;
    duration?: DurationAmino;
    increment_percentage?: string;
    whitelist_accounts?: string[];
    split_shares?: WeightedAddressAmino[];
    owner?: string;
}
export interface MsgCreateAuctionAminoMsg {
    type: "OmniFlix/marketplace/MsgCreateAuction";
    value: MsgCreateAuctionAmino;
}
export interface MsgCreateAuctionSDKType {
    nft_id: string;
    denom_id: string;
    start_time: TimestampSDKType;
    start_price: CoinSDKType;
    duration?: DurationSDKType;
    increment_percentage: string;
    whitelist_accounts: string[];
    split_shares: WeightedAddressSDKType[];
    owner: string;
}
export interface MsgCreateAuctionResponse {
    auction?: AuctionListing;
}
export interface MsgCreateAuctionResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse";
    value: Uint8Array;
}
export interface MsgCreateAuctionResponseAmino {
    auction?: AuctionListingAmino;
}
export interface MsgCreateAuctionResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse";
    value: MsgCreateAuctionResponseAmino;
}
export interface MsgCreateAuctionResponseSDKType {
    auction?: AuctionListingSDKType;
}
export interface MsgCancelAuction {
    auctionId: bigint;
    owner: string;
}
export interface MsgCancelAuctionProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction";
    value: Uint8Array;
}
export interface MsgCancelAuctionAmino {
    auction_id?: string;
    owner?: string;
}
export interface MsgCancelAuctionAminoMsg {
    type: "OmniFlix/marketplace/MsgCancelAuction";
    value: MsgCancelAuctionAmino;
}
export interface MsgCancelAuctionSDKType {
    auction_id: bigint;
    owner: string;
}
export interface MsgCancelAuctionResponse {
}
export interface MsgCancelAuctionResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse";
    value: Uint8Array;
}
export interface MsgCancelAuctionResponseAmino {
}
export interface MsgCancelAuctionResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse";
    value: MsgCancelAuctionResponseAmino;
}
export interface MsgCancelAuctionResponseSDKType {
}
export interface MsgPlaceBid {
    auctionId: bigint;
    amount: Coin;
    bidder: string;
}
export interface MsgPlaceBidProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid";
    value: Uint8Array;
}
export interface MsgPlaceBidAmino {
    auction_id?: string;
    amount?: CoinAmino;
    bidder?: string;
}
export interface MsgPlaceBidAminoMsg {
    type: "OmniFlix/marketplace/MsgPlaceBid";
    value: MsgPlaceBidAmino;
}
export interface MsgPlaceBidSDKType {
    auction_id: bigint;
    amount: CoinSDKType;
    bidder: string;
}
export interface MsgPlaceBidResponse {
}
export interface MsgPlaceBidResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse";
    value: Uint8Array;
}
export interface MsgPlaceBidResponseAmino {
}
export interface MsgPlaceBidResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse";
    value: MsgPlaceBidResponseAmino;
}
export interface MsgPlaceBidResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/marketplace parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * params defines the x/marketplace parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgListNFT: {
    typeUrl: string;
    encode(message: MsgListNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgListNFT;
    fromPartial(object: Partial<MsgListNFT>): MsgListNFT;
    fromAmino(object: MsgListNFTAmino): MsgListNFT;
    toAmino(message: MsgListNFT): MsgListNFTAmino;
    fromAminoMsg(object: MsgListNFTAminoMsg): MsgListNFT;
    toAminoMsg(message: MsgListNFT): MsgListNFTAminoMsg;
    fromProtoMsg(message: MsgListNFTProtoMsg): MsgListNFT;
    toProto(message: MsgListNFT): Uint8Array;
    toProtoMsg(message: MsgListNFT): MsgListNFTProtoMsg;
};
export declare const MsgListNFTResponse: {
    typeUrl: string;
    encode(_: MsgListNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgListNFTResponse;
    fromPartial(_: Partial<MsgListNFTResponse>): MsgListNFTResponse;
    fromAmino(_: MsgListNFTResponseAmino): MsgListNFTResponse;
    toAmino(_: MsgListNFTResponse): MsgListNFTResponseAmino;
    fromAminoMsg(object: MsgListNFTResponseAminoMsg): MsgListNFTResponse;
    fromProtoMsg(message: MsgListNFTResponseProtoMsg): MsgListNFTResponse;
    toProto(message: MsgListNFTResponse): Uint8Array;
    toProtoMsg(message: MsgListNFTResponse): MsgListNFTResponseProtoMsg;
};
export declare const MsgEditListing: {
    typeUrl: string;
    encode(message: MsgEditListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEditListing;
    fromPartial(object: Partial<MsgEditListing>): MsgEditListing;
    fromAmino(object: MsgEditListingAmino): MsgEditListing;
    toAmino(message: MsgEditListing): MsgEditListingAmino;
    fromAminoMsg(object: MsgEditListingAminoMsg): MsgEditListing;
    toAminoMsg(message: MsgEditListing): MsgEditListingAminoMsg;
    fromProtoMsg(message: MsgEditListingProtoMsg): MsgEditListing;
    toProto(message: MsgEditListing): Uint8Array;
    toProtoMsg(message: MsgEditListing): MsgEditListingProtoMsg;
};
export declare const MsgEditListingResponse: {
    typeUrl: string;
    encode(_: MsgEditListingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEditListingResponse;
    fromPartial(_: Partial<MsgEditListingResponse>): MsgEditListingResponse;
    fromAmino(_: MsgEditListingResponseAmino): MsgEditListingResponse;
    toAmino(_: MsgEditListingResponse): MsgEditListingResponseAmino;
    fromAminoMsg(object: MsgEditListingResponseAminoMsg): MsgEditListingResponse;
    fromProtoMsg(message: MsgEditListingResponseProtoMsg): MsgEditListingResponse;
    toProto(message: MsgEditListingResponse): Uint8Array;
    toProtoMsg(message: MsgEditListingResponse): MsgEditListingResponseProtoMsg;
};
export declare const MsgDeListNFT: {
    typeUrl: string;
    encode(message: MsgDeListNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeListNFT;
    fromPartial(object: Partial<MsgDeListNFT>): MsgDeListNFT;
    fromAmino(object: MsgDeListNFTAmino): MsgDeListNFT;
    toAmino(message: MsgDeListNFT): MsgDeListNFTAmino;
    fromAminoMsg(object: MsgDeListNFTAminoMsg): MsgDeListNFT;
    toAminoMsg(message: MsgDeListNFT): MsgDeListNFTAminoMsg;
    fromProtoMsg(message: MsgDeListNFTProtoMsg): MsgDeListNFT;
    toProto(message: MsgDeListNFT): Uint8Array;
    toProtoMsg(message: MsgDeListNFT): MsgDeListNFTProtoMsg;
};
export declare const MsgDeListNFTResponse: {
    typeUrl: string;
    encode(_: MsgDeListNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeListNFTResponse;
    fromPartial(_: Partial<MsgDeListNFTResponse>): MsgDeListNFTResponse;
    fromAmino(_: MsgDeListNFTResponseAmino): MsgDeListNFTResponse;
    toAmino(_: MsgDeListNFTResponse): MsgDeListNFTResponseAmino;
    fromAminoMsg(object: MsgDeListNFTResponseAminoMsg): MsgDeListNFTResponse;
    fromProtoMsg(message: MsgDeListNFTResponseProtoMsg): MsgDeListNFTResponse;
    toProto(message: MsgDeListNFTResponse): Uint8Array;
    toProtoMsg(message: MsgDeListNFTResponse): MsgDeListNFTResponseProtoMsg;
};
export declare const MsgBuyNFT: {
    typeUrl: string;
    encode(message: MsgBuyNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBuyNFT;
    fromPartial(object: Partial<MsgBuyNFT>): MsgBuyNFT;
    fromAmino(object: MsgBuyNFTAmino): MsgBuyNFT;
    toAmino(message: MsgBuyNFT): MsgBuyNFTAmino;
    fromAminoMsg(object: MsgBuyNFTAminoMsg): MsgBuyNFT;
    toAminoMsg(message: MsgBuyNFT): MsgBuyNFTAminoMsg;
    fromProtoMsg(message: MsgBuyNFTProtoMsg): MsgBuyNFT;
    toProto(message: MsgBuyNFT): Uint8Array;
    toProtoMsg(message: MsgBuyNFT): MsgBuyNFTProtoMsg;
};
export declare const MsgBuyNFTResponse: {
    typeUrl: string;
    encode(_: MsgBuyNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBuyNFTResponse;
    fromPartial(_: Partial<MsgBuyNFTResponse>): MsgBuyNFTResponse;
    fromAmino(_: MsgBuyNFTResponseAmino): MsgBuyNFTResponse;
    toAmino(_: MsgBuyNFTResponse): MsgBuyNFTResponseAmino;
    fromAminoMsg(object: MsgBuyNFTResponseAminoMsg): MsgBuyNFTResponse;
    fromProtoMsg(message: MsgBuyNFTResponseProtoMsg): MsgBuyNFTResponse;
    toProto(message: MsgBuyNFTResponse): Uint8Array;
    toProtoMsg(message: MsgBuyNFTResponse): MsgBuyNFTResponseProtoMsg;
};
export declare const MsgCreateAuction: {
    typeUrl: string;
    encode(message: MsgCreateAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateAuction;
    fromPartial(object: Partial<MsgCreateAuction>): MsgCreateAuction;
    fromAmino(object: MsgCreateAuctionAmino): MsgCreateAuction;
    toAmino(message: MsgCreateAuction): MsgCreateAuctionAmino;
    fromAminoMsg(object: MsgCreateAuctionAminoMsg): MsgCreateAuction;
    toAminoMsg(message: MsgCreateAuction): MsgCreateAuctionAminoMsg;
    fromProtoMsg(message: MsgCreateAuctionProtoMsg): MsgCreateAuction;
    toProto(message: MsgCreateAuction): Uint8Array;
    toProtoMsg(message: MsgCreateAuction): MsgCreateAuctionProtoMsg;
};
export declare const MsgCreateAuctionResponse: {
    typeUrl: string;
    encode(message: MsgCreateAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateAuctionResponse;
    fromPartial(object: Partial<MsgCreateAuctionResponse>): MsgCreateAuctionResponse;
    fromAmino(object: MsgCreateAuctionResponseAmino): MsgCreateAuctionResponse;
    toAmino(message: MsgCreateAuctionResponse): MsgCreateAuctionResponseAmino;
    fromAminoMsg(object: MsgCreateAuctionResponseAminoMsg): MsgCreateAuctionResponse;
    fromProtoMsg(message: MsgCreateAuctionResponseProtoMsg): MsgCreateAuctionResponse;
    toProto(message: MsgCreateAuctionResponse): Uint8Array;
    toProtoMsg(message: MsgCreateAuctionResponse): MsgCreateAuctionResponseProtoMsg;
};
export declare const MsgCancelAuction: {
    typeUrl: string;
    encode(message: MsgCancelAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelAuction;
    fromPartial(object: Partial<MsgCancelAuction>): MsgCancelAuction;
    fromAmino(object: MsgCancelAuctionAmino): MsgCancelAuction;
    toAmino(message: MsgCancelAuction): MsgCancelAuctionAmino;
    fromAminoMsg(object: MsgCancelAuctionAminoMsg): MsgCancelAuction;
    toAminoMsg(message: MsgCancelAuction): MsgCancelAuctionAminoMsg;
    fromProtoMsg(message: MsgCancelAuctionProtoMsg): MsgCancelAuction;
    toProto(message: MsgCancelAuction): Uint8Array;
    toProtoMsg(message: MsgCancelAuction): MsgCancelAuctionProtoMsg;
};
export declare const MsgCancelAuctionResponse: {
    typeUrl: string;
    encode(_: MsgCancelAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelAuctionResponse;
    fromPartial(_: Partial<MsgCancelAuctionResponse>): MsgCancelAuctionResponse;
    fromAmino(_: MsgCancelAuctionResponseAmino): MsgCancelAuctionResponse;
    toAmino(_: MsgCancelAuctionResponse): MsgCancelAuctionResponseAmino;
    fromAminoMsg(object: MsgCancelAuctionResponseAminoMsg): MsgCancelAuctionResponse;
    fromProtoMsg(message: MsgCancelAuctionResponseProtoMsg): MsgCancelAuctionResponse;
    toProto(message: MsgCancelAuctionResponse): Uint8Array;
    toProtoMsg(message: MsgCancelAuctionResponse): MsgCancelAuctionResponseProtoMsg;
};
export declare const MsgPlaceBid: {
    typeUrl: string;
    encode(message: MsgPlaceBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPlaceBid;
    fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid;
    fromAmino(object: MsgPlaceBidAmino): MsgPlaceBid;
    toAmino(message: MsgPlaceBid): MsgPlaceBidAmino;
    fromAminoMsg(object: MsgPlaceBidAminoMsg): MsgPlaceBid;
    toAminoMsg(message: MsgPlaceBid): MsgPlaceBidAminoMsg;
    fromProtoMsg(message: MsgPlaceBidProtoMsg): MsgPlaceBid;
    toProto(message: MsgPlaceBid): Uint8Array;
    toProtoMsg(message: MsgPlaceBid): MsgPlaceBidProtoMsg;
};
export declare const MsgPlaceBidResponse: {
    typeUrl: string;
    encode(_: MsgPlaceBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPlaceBidResponse;
    fromPartial(_: Partial<MsgPlaceBidResponse>): MsgPlaceBidResponse;
    fromAmino(_: MsgPlaceBidResponseAmino): MsgPlaceBidResponse;
    toAmino(_: MsgPlaceBidResponse): MsgPlaceBidResponseAmino;
    fromAminoMsg(object: MsgPlaceBidResponseAminoMsg): MsgPlaceBidResponse;
    fromProtoMsg(message: MsgPlaceBidResponseProtoMsg): MsgPlaceBidResponse;
    toProto(message: MsgPlaceBidResponse): Uint8Array;
    toProtoMsg(message: MsgPlaceBidResponse): MsgPlaceBidResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
