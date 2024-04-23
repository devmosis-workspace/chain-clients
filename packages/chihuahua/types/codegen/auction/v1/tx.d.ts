import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Bid, BidAmino, BidSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
export interface MsgSubmitBidRequest {
    auctionId: number;
    signer: string;
    maxBidInUsomm: Coin;
    saleTokenMinimumAmount: Coin;
}
export interface MsgSubmitBidRequestProtoMsg {
    typeUrl: "/auction.v1.MsgSubmitBidRequest";
    value: Uint8Array;
}
export interface MsgSubmitBidRequestAmino {
    auction_id?: number;
    signer?: string;
    max_bid_in_usomm?: CoinAmino;
    sale_token_minimum_amount?: CoinAmino;
}
export interface MsgSubmitBidRequestAminoMsg {
    type: "/auction.v1.MsgSubmitBidRequest";
    value: MsgSubmitBidRequestAmino;
}
export interface MsgSubmitBidRequestSDKType {
    auction_id: number;
    signer: string;
    max_bid_in_usomm: CoinSDKType;
    sale_token_minimum_amount: CoinSDKType;
}
export interface MsgSubmitBidResponse {
    bid?: Bid;
}
export interface MsgSubmitBidResponseProtoMsg {
    typeUrl: "/auction.v1.MsgSubmitBidResponse";
    value: Uint8Array;
}
export interface MsgSubmitBidResponseAmino {
    bid?: BidAmino;
}
export interface MsgSubmitBidResponseAminoMsg {
    type: "/auction.v1.MsgSubmitBidResponse";
    value: MsgSubmitBidResponseAmino;
}
export interface MsgSubmitBidResponseSDKType {
    bid?: BidSDKType;
}
export declare const MsgSubmitBidRequest: {
    typeUrl: string;
    encode(message: MsgSubmitBidRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitBidRequest;
    fromPartial(object: Partial<MsgSubmitBidRequest>): MsgSubmitBidRequest;
    fromAmino(object: MsgSubmitBidRequestAmino): MsgSubmitBidRequest;
    toAmino(message: MsgSubmitBidRequest): MsgSubmitBidRequestAmino;
    fromAminoMsg(object: MsgSubmitBidRequestAminoMsg): MsgSubmitBidRequest;
    fromProtoMsg(message: MsgSubmitBidRequestProtoMsg): MsgSubmitBidRequest;
    toProto(message: MsgSubmitBidRequest): Uint8Array;
    toProtoMsg(message: MsgSubmitBidRequest): MsgSubmitBidRequestProtoMsg;
};
export declare const MsgSubmitBidResponse: {
    typeUrl: string;
    encode(message: MsgSubmitBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitBidResponse;
    fromPartial(object: Partial<MsgSubmitBidResponse>): MsgSubmitBidResponse;
    fromAmino(object: MsgSubmitBidResponseAmino): MsgSubmitBidResponse;
    toAmino(message: MsgSubmitBidResponse): MsgSubmitBidResponseAmino;
    fromAminoMsg(object: MsgSubmitBidResponseAminoMsg): MsgSubmitBidResponse;
    fromProtoMsg(message: MsgSubmitBidResponseProtoMsg): MsgSubmitBidResponse;
    toProto(message: MsgSubmitBidResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitBidResponse): MsgSubmitBidResponseProtoMsg;
};
