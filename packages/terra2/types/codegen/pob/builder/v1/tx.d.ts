import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBid {
    /**
     * bidder is the address of the account that is submitting a bid to the
     * auction.
     */
    bidder: string;
    /**
     * bid is the amount of coins that the bidder is bidding to participate in the
     * auction.
     */
    bid: Coin;
    /**
     * transactions are the bytes of the transactions that the bidder wants to
     * bundle together.
     */
    transactions: Uint8Array[];
}
export interface MsgAuctionBidProtoMsg {
    typeUrl: "/pob.builder.v1.MsgAuctionBid";
    value: Uint8Array;
}
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBidAmino {
    /**
     * bidder is the address of the account that is submitting a bid to the
     * auction.
     */
    bidder?: string;
    /**
     * bid is the amount of coins that the bidder is bidding to participate in the
     * auction.
     */
    bid: CoinAmino;
    /**
     * transactions are the bytes of the transactions that the bidder wants to
     * bundle together.
     */
    transactions?: string[];
}
export interface MsgAuctionBidAminoMsg {
    type: "pob/x/builder/MsgAuctionBid";
    value: MsgAuctionBidAmino;
}
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBidSDKType {
    bidder: string;
    bid: CoinSDKType;
    transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {
}
export interface MsgAuctionBidResponseProtoMsg {
    typeUrl: "/pob.builder.v1.MsgAuctionBidResponse";
    value: Uint8Array;
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponseAmino {
}
export interface MsgAuctionBidResponseAminoMsg {
    type: "/pob.builder.v1.MsgAuctionBidResponse";
    value: MsgAuctionBidResponseAmino;
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponseSDKType {
}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParams {
    /**
     * authority is the address of the account that is authorized to update the
     * x/builder module parameters.
     */
    authority: string;
    /** params is the new parameters for the x/builder module. */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/pob.builder.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParamsAmino {
    /**
     * authority is the address of the account that is authorized to update the
     * x/builder module parameters.
     */
    authority?: string;
    /** params is the new parameters for the x/builder module. */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "pob/x/builder/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/pob.builder.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/pob.builder.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgAuctionBid: {
    typeUrl: string;
    encode(message: MsgAuctionBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAuctionBid;
    fromPartial(object: Partial<MsgAuctionBid>): MsgAuctionBid;
    fromAmino(object: MsgAuctionBidAmino): MsgAuctionBid;
    toAmino(message: MsgAuctionBid): MsgAuctionBidAmino;
    fromAminoMsg(object: MsgAuctionBidAminoMsg): MsgAuctionBid;
    toAminoMsg(message: MsgAuctionBid): MsgAuctionBidAminoMsg;
    fromProtoMsg(message: MsgAuctionBidProtoMsg): MsgAuctionBid;
    toProto(message: MsgAuctionBid): Uint8Array;
    toProtoMsg(message: MsgAuctionBid): MsgAuctionBidProtoMsg;
};
export declare const MsgAuctionBidResponse: {
    typeUrl: string;
    encode(_: MsgAuctionBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAuctionBidResponse;
    fromPartial(_: Partial<MsgAuctionBidResponse>): MsgAuctionBidResponse;
    fromAmino(_: MsgAuctionBidResponseAmino): MsgAuctionBidResponse;
    toAmino(_: MsgAuctionBidResponse): MsgAuctionBidResponseAmino;
    fromAminoMsg(object: MsgAuctionBidResponseAminoMsg): MsgAuctionBidResponse;
    fromProtoMsg(message: MsgAuctionBidResponseProtoMsg): MsgAuctionBidResponse;
    toProto(message: MsgAuctionBidResponse): Uint8Array;
    toProtoMsg(message: MsgAuctionBidResponse): MsgAuctionBidResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
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
