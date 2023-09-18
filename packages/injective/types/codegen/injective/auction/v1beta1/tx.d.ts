import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBid {
    sender: string;
    /** amount of the bid in INJ tokens */
    bidAmount: Coin;
    /** the current auction round being bid on */
    round: bigint;
}
export interface MsgBidProtoMsg {
    typeUrl: "/injective.auction.v1beta1.MsgBid";
    value: Uint8Array;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidAmino {
    sender: string;
    /** amount of the bid in INJ tokens */
    bid_amount?: CoinAmino;
    /** the current auction round being bid on */
    round: string;
}
export interface MsgBidAminoMsg {
    type: "/injective.auction.v1beta1.MsgBid";
    value: MsgBidAmino;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidSDKType {
    sender: string;
    bid_amount: CoinSDKType;
    round: bigint;
}
export interface MsgBidResponse {
}
export interface MsgBidResponseProtoMsg {
    typeUrl: "/injective.auction.v1beta1.MsgBidResponse";
    value: Uint8Array;
}
export interface MsgBidResponseAmino {
}
export interface MsgBidResponseAminoMsg {
    type: "/injective.auction.v1beta1.MsgBidResponse";
    value: MsgBidResponseAmino;
}
export interface MsgBidResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the ocr parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/injective.auction.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the ocr parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/injective.auction.v1beta1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/injective.auction.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/injective.auction.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgBid: {
    typeUrl: string;
    encode(message: MsgBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBid;
    fromPartial(object: Partial<MsgBid>): MsgBid;
    fromAmino(object: MsgBidAmino): MsgBid;
    toAmino(message: MsgBid): MsgBidAmino;
    fromAminoMsg(object: MsgBidAminoMsg): MsgBid;
    fromProtoMsg(message: MsgBidProtoMsg): MsgBid;
    toProto(message: MsgBid): Uint8Array;
    toProtoMsg(message: MsgBid): MsgBidProtoMsg;
};
export declare const MsgBidResponse: {
    typeUrl: string;
    encode(_: MsgBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBidResponse;
    fromPartial(_: Partial<MsgBidResponse>): MsgBidResponse;
    fromAmino(_: MsgBidResponseAmino): MsgBidResponse;
    toAmino(_: MsgBidResponse): MsgBidResponseAmino;
    fromAminoMsg(object: MsgBidResponseAminoMsg): MsgBidResponse;
    fromProtoMsg(message: MsgBidResponseProtoMsg): MsgBidResponse;
    toProto(message: MsgBidResponse): Uint8Array;
    toProtoMsg(message: MsgBidResponse): MsgBidResponseProtoMsg;
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
