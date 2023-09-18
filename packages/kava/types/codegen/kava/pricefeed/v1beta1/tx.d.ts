import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPrice {
    /** address of client */
    from: string;
    marketId: string;
    price: string;
    expiry: Timestamp;
}
export interface MsgPostPriceProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice";
    value: Uint8Array;
}
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPriceAmino {
    /** address of client */
    from: string;
    market_id: string;
    price: string;
    expiry?: TimestampAmino;
}
export interface MsgPostPriceAminoMsg {
    type: "/kava.pricefeed.v1beta1.MsgPostPrice";
    value: MsgPostPriceAmino;
}
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPriceSDKType {
    from: string;
    market_id: string;
    price: string;
    expiry: TimestampSDKType;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponse {
}
export interface MsgPostPriceResponseProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.MsgPostPriceResponse";
    value: Uint8Array;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponseAmino {
}
export interface MsgPostPriceResponseAminoMsg {
    type: "/kava.pricefeed.v1beta1.MsgPostPriceResponse";
    value: MsgPostPriceResponseAmino;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponseSDKType {
}
export declare const MsgPostPrice: {
    typeUrl: string;
    encode(message: MsgPostPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPostPrice;
    fromPartial(object: Partial<MsgPostPrice>): MsgPostPrice;
    fromAmino(object: MsgPostPriceAmino): MsgPostPrice;
    toAmino(message: MsgPostPrice): MsgPostPriceAmino;
    fromAminoMsg(object: MsgPostPriceAminoMsg): MsgPostPrice;
    fromProtoMsg(message: MsgPostPriceProtoMsg): MsgPostPrice;
    toProto(message: MsgPostPrice): Uint8Array;
    toProtoMsg(message: MsgPostPrice): MsgPostPriceProtoMsg;
};
export declare const MsgPostPriceResponse: {
    typeUrl: string;
    encode(_: MsgPostPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPostPriceResponse;
    fromPartial(_: Partial<MsgPostPriceResponse>): MsgPostPriceResponse;
    fromAmino(_: MsgPostPriceResponseAmino): MsgPostPriceResponse;
    toAmino(_: MsgPostPriceResponse): MsgPostPriceResponseAmino;
    fromAminoMsg(object: MsgPostPriceResponseAminoMsg): MsgPostPriceResponse;
    fromProtoMsg(message: MsgPostPriceResponseProtoMsg): MsgPostPriceResponse;
    toProto(message: MsgPostPriceResponse): Uint8Array;
    toProtoMsg(message: MsgPostPriceResponse): MsgPostPriceResponseProtoMsg;
};
