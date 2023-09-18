import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBid {
    auctionId: bigint;
    bidder: string;
    amount: Coin;
}
export interface MsgPlaceBidProtoMsg {
    typeUrl: "/kava.auction.v1beta1.MsgPlaceBid";
    value: Uint8Array;
}
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBidAmino {
    auction_id: string;
    bidder: string;
    amount?: CoinAmino;
}
export interface MsgPlaceBidAminoMsg {
    type: "/kava.auction.v1beta1.MsgPlaceBid";
    value: MsgPlaceBidAmino;
}
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBidSDKType {
    auction_id: bigint;
    bidder: string;
    amount: CoinSDKType;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponse {
}
export interface MsgPlaceBidResponseProtoMsg {
    typeUrl: "/kava.auction.v1beta1.MsgPlaceBidResponse";
    value: Uint8Array;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponseAmino {
}
export interface MsgPlaceBidResponseAminoMsg {
    type: "/kava.auction.v1beta1.MsgPlaceBidResponse";
    value: MsgPlaceBidResponseAmino;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponseSDKType {
}
export declare const MsgPlaceBid: {
    typeUrl: string;
    encode(message: MsgPlaceBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPlaceBid;
    fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid;
    fromAmino(object: MsgPlaceBidAmino): MsgPlaceBid;
    toAmino(message: MsgPlaceBid): MsgPlaceBidAmino;
    fromAminoMsg(object: MsgPlaceBidAminoMsg): MsgPlaceBid;
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
