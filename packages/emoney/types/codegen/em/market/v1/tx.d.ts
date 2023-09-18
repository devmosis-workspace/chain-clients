import { TimeInForce } from "./market";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgAddLimitOrder {
    owner: string;
    clientOrderId: string;
    timeInForce: TimeInForce;
    source: Coin;
    destination: Coin;
}
export interface MsgAddLimitOrderProtoMsg {
    typeUrl: "/em.market.v1.MsgAddLimitOrder";
    value: Uint8Array;
}
export interface MsgAddLimitOrderAmino {
    owner: string;
    client_order_id: string;
    time_in_force: TimeInForce;
    source?: CoinAmino;
    destination?: CoinAmino;
}
export interface MsgAddLimitOrderAminoMsg {
    type: "/em.market.v1.MsgAddLimitOrder";
    value: MsgAddLimitOrderAmino;
}
export interface MsgAddLimitOrderSDKType {
    owner: string;
    client_order_id: string;
    time_in_force: TimeInForce;
    source: CoinSDKType;
    destination: CoinSDKType;
}
export interface MsgAddLimitOrderResponse {
}
export interface MsgAddLimitOrderResponseProtoMsg {
    typeUrl: "/em.market.v1.MsgAddLimitOrderResponse";
    value: Uint8Array;
}
export interface MsgAddLimitOrderResponseAmino {
}
export interface MsgAddLimitOrderResponseAminoMsg {
    type: "/em.market.v1.MsgAddLimitOrderResponse";
    value: MsgAddLimitOrderResponseAmino;
}
export interface MsgAddLimitOrderResponseSDKType {
}
export interface MsgAddMarketOrder {
    owner: string;
    clientOrderId: string;
    timeInForce: TimeInForce;
    source: string;
    destination: Coin;
    maximumSlippage: string;
}
export interface MsgAddMarketOrderProtoMsg {
    typeUrl: "/em.market.v1.MsgAddMarketOrder";
    value: Uint8Array;
}
export interface MsgAddMarketOrderAmino {
    owner: string;
    client_order_id: string;
    time_in_force: TimeInForce;
    source: string;
    destination?: CoinAmino;
    maximum_slippage: string;
}
export interface MsgAddMarketOrderAminoMsg {
    type: "/em.market.v1.MsgAddMarketOrder";
    value: MsgAddMarketOrderAmino;
}
export interface MsgAddMarketOrderSDKType {
    owner: string;
    client_order_id: string;
    time_in_force: TimeInForce;
    source: string;
    destination: CoinSDKType;
    maximum_slippage: string;
}
export interface MsgAddMarketOrderResponse {
}
export interface MsgAddMarketOrderResponseProtoMsg {
    typeUrl: "/em.market.v1.MsgAddMarketOrderResponse";
    value: Uint8Array;
}
export interface MsgAddMarketOrderResponseAmino {
}
export interface MsgAddMarketOrderResponseAminoMsg {
    type: "/em.market.v1.MsgAddMarketOrderResponse";
    value: MsgAddMarketOrderResponseAmino;
}
export interface MsgAddMarketOrderResponseSDKType {
}
export interface MsgCancelOrder {
    owner: string;
    clientOrderId: string;
}
export interface MsgCancelOrderProtoMsg {
    typeUrl: "/em.market.v1.MsgCancelOrder";
    value: Uint8Array;
}
export interface MsgCancelOrderAmino {
    owner: string;
    client_order_id: string;
}
export interface MsgCancelOrderAminoMsg {
    type: "/em.market.v1.MsgCancelOrder";
    value: MsgCancelOrderAmino;
}
export interface MsgCancelOrderSDKType {
    owner: string;
    client_order_id: string;
}
export interface MsgCancelOrderResponse {
}
export interface MsgCancelOrderResponseProtoMsg {
    typeUrl: "/em.market.v1.MsgCancelOrderResponse";
    value: Uint8Array;
}
export interface MsgCancelOrderResponseAmino {
}
export interface MsgCancelOrderResponseAminoMsg {
    type: "/em.market.v1.MsgCancelOrderResponse";
    value: MsgCancelOrderResponseAmino;
}
export interface MsgCancelOrderResponseSDKType {
}
export interface MsgCancelReplaceLimitOrder {
    owner: string;
    originalClientOrderId: string;
    newClientOrderId: string;
    timeInForce: TimeInForce;
    source: Coin;
    destination: Coin;
}
export interface MsgCancelReplaceLimitOrderProtoMsg {
    typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder";
    value: Uint8Array;
}
export interface MsgCancelReplaceLimitOrderAmino {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: TimeInForce;
    source?: CoinAmino;
    destination?: CoinAmino;
}
export interface MsgCancelReplaceLimitOrderAminoMsg {
    type: "/em.market.v1.MsgCancelReplaceLimitOrder";
    value: MsgCancelReplaceLimitOrderAmino;
}
export interface MsgCancelReplaceLimitOrderSDKType {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: TimeInForce;
    source: CoinSDKType;
    destination: CoinSDKType;
}
export interface MsgCancelReplaceLimitOrderResponse {
}
export interface MsgCancelReplaceLimitOrderResponseProtoMsg {
    typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrderResponse";
    value: Uint8Array;
}
export interface MsgCancelReplaceLimitOrderResponseAmino {
}
export interface MsgCancelReplaceLimitOrderResponseAminoMsg {
    type: "/em.market.v1.MsgCancelReplaceLimitOrderResponse";
    value: MsgCancelReplaceLimitOrderResponseAmino;
}
export interface MsgCancelReplaceLimitOrderResponseSDKType {
}
export interface MsgCancelReplaceMarketOrder {
    owner: string;
    originalClientOrderId: string;
    newClientOrderId: string;
    timeInForce: TimeInForce;
    source: string;
    destination: Coin;
    maximumSlippage: string;
}
export interface MsgCancelReplaceMarketOrderProtoMsg {
    typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder";
    value: Uint8Array;
}
export interface MsgCancelReplaceMarketOrderAmino {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: TimeInForce;
    source: string;
    destination?: CoinAmino;
    maximum_slippage: string;
}
export interface MsgCancelReplaceMarketOrderAminoMsg {
    type: "/em.market.v1.MsgCancelReplaceMarketOrder";
    value: MsgCancelReplaceMarketOrderAmino;
}
export interface MsgCancelReplaceMarketOrderSDKType {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: TimeInForce;
    source: string;
    destination: CoinSDKType;
    maximum_slippage: string;
}
export interface MsgCancelReplaceMarketOrderResponse {
}
export interface MsgCancelReplaceMarketOrderResponseProtoMsg {
    typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrderResponse";
    value: Uint8Array;
}
export interface MsgCancelReplaceMarketOrderResponseAmino {
}
export interface MsgCancelReplaceMarketOrderResponseAminoMsg {
    type: "/em.market.v1.MsgCancelReplaceMarketOrderResponse";
    value: MsgCancelReplaceMarketOrderResponseAmino;
}
export interface MsgCancelReplaceMarketOrderResponseSDKType {
}
export declare const MsgAddLimitOrder: {
    typeUrl: string;
    encode(message: MsgAddLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddLimitOrder;
    fromPartial(object: Partial<MsgAddLimitOrder>): MsgAddLimitOrder;
    fromAmino(object: MsgAddLimitOrderAmino): MsgAddLimitOrder;
    toAmino(message: MsgAddLimitOrder): MsgAddLimitOrderAmino;
    fromAminoMsg(object: MsgAddLimitOrderAminoMsg): MsgAddLimitOrder;
    fromProtoMsg(message: MsgAddLimitOrderProtoMsg): MsgAddLimitOrder;
    toProto(message: MsgAddLimitOrder): Uint8Array;
    toProtoMsg(message: MsgAddLimitOrder): MsgAddLimitOrderProtoMsg;
};
export declare const MsgAddLimitOrderResponse: {
    typeUrl: string;
    encode(_: MsgAddLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddLimitOrderResponse;
    fromPartial(_: Partial<MsgAddLimitOrderResponse>): MsgAddLimitOrderResponse;
    fromAmino(_: MsgAddLimitOrderResponseAmino): MsgAddLimitOrderResponse;
    toAmino(_: MsgAddLimitOrderResponse): MsgAddLimitOrderResponseAmino;
    fromAminoMsg(object: MsgAddLimitOrderResponseAminoMsg): MsgAddLimitOrderResponse;
    fromProtoMsg(message: MsgAddLimitOrderResponseProtoMsg): MsgAddLimitOrderResponse;
    toProto(message: MsgAddLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgAddLimitOrderResponse): MsgAddLimitOrderResponseProtoMsg;
};
export declare const MsgAddMarketOrder: {
    typeUrl: string;
    encode(message: MsgAddMarketOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddMarketOrder;
    fromPartial(object: Partial<MsgAddMarketOrder>): MsgAddMarketOrder;
    fromAmino(object: MsgAddMarketOrderAmino): MsgAddMarketOrder;
    toAmino(message: MsgAddMarketOrder): MsgAddMarketOrderAmino;
    fromAminoMsg(object: MsgAddMarketOrderAminoMsg): MsgAddMarketOrder;
    fromProtoMsg(message: MsgAddMarketOrderProtoMsg): MsgAddMarketOrder;
    toProto(message: MsgAddMarketOrder): Uint8Array;
    toProtoMsg(message: MsgAddMarketOrder): MsgAddMarketOrderProtoMsg;
};
export declare const MsgAddMarketOrderResponse: {
    typeUrl: string;
    encode(_: MsgAddMarketOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddMarketOrderResponse;
    fromPartial(_: Partial<MsgAddMarketOrderResponse>): MsgAddMarketOrderResponse;
    fromAmino(_: MsgAddMarketOrderResponseAmino): MsgAddMarketOrderResponse;
    toAmino(_: MsgAddMarketOrderResponse): MsgAddMarketOrderResponseAmino;
    fromAminoMsg(object: MsgAddMarketOrderResponseAminoMsg): MsgAddMarketOrderResponse;
    fromProtoMsg(message: MsgAddMarketOrderResponseProtoMsg): MsgAddMarketOrderResponse;
    toProto(message: MsgAddMarketOrderResponse): Uint8Array;
    toProtoMsg(message: MsgAddMarketOrderResponse): MsgAddMarketOrderResponseProtoMsg;
};
export declare const MsgCancelOrder: {
    typeUrl: string;
    encode(message: MsgCancelOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelOrder;
    fromPartial(object: Partial<MsgCancelOrder>): MsgCancelOrder;
    fromAmino(object: MsgCancelOrderAmino): MsgCancelOrder;
    toAmino(message: MsgCancelOrder): MsgCancelOrderAmino;
    fromAminoMsg(object: MsgCancelOrderAminoMsg): MsgCancelOrder;
    fromProtoMsg(message: MsgCancelOrderProtoMsg): MsgCancelOrder;
    toProto(message: MsgCancelOrder): Uint8Array;
    toProtoMsg(message: MsgCancelOrder): MsgCancelOrderProtoMsg;
};
export declare const MsgCancelOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelOrderResponse;
    fromPartial(_: Partial<MsgCancelOrderResponse>): MsgCancelOrderResponse;
    fromAmino(_: MsgCancelOrderResponseAmino): MsgCancelOrderResponse;
    toAmino(_: MsgCancelOrderResponse): MsgCancelOrderResponseAmino;
    fromAminoMsg(object: MsgCancelOrderResponseAminoMsg): MsgCancelOrderResponse;
    fromProtoMsg(message: MsgCancelOrderResponseProtoMsg): MsgCancelOrderResponse;
    toProto(message: MsgCancelOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelOrderResponse): MsgCancelOrderResponseProtoMsg;
};
export declare const MsgCancelReplaceLimitOrder: {
    typeUrl: string;
    encode(message: MsgCancelReplaceLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelReplaceLimitOrder;
    fromPartial(object: Partial<MsgCancelReplaceLimitOrder>): MsgCancelReplaceLimitOrder;
    fromAmino(object: MsgCancelReplaceLimitOrderAmino): MsgCancelReplaceLimitOrder;
    toAmino(message: MsgCancelReplaceLimitOrder): MsgCancelReplaceLimitOrderAmino;
    fromAminoMsg(object: MsgCancelReplaceLimitOrderAminoMsg): MsgCancelReplaceLimitOrder;
    fromProtoMsg(message: MsgCancelReplaceLimitOrderProtoMsg): MsgCancelReplaceLimitOrder;
    toProto(message: MsgCancelReplaceLimitOrder): Uint8Array;
    toProtoMsg(message: MsgCancelReplaceLimitOrder): MsgCancelReplaceLimitOrderProtoMsg;
};
export declare const MsgCancelReplaceLimitOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelReplaceLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelReplaceLimitOrderResponse;
    fromPartial(_: Partial<MsgCancelReplaceLimitOrderResponse>): MsgCancelReplaceLimitOrderResponse;
    fromAmino(_: MsgCancelReplaceLimitOrderResponseAmino): MsgCancelReplaceLimitOrderResponse;
    toAmino(_: MsgCancelReplaceLimitOrderResponse): MsgCancelReplaceLimitOrderResponseAmino;
    fromAminoMsg(object: MsgCancelReplaceLimitOrderResponseAminoMsg): MsgCancelReplaceLimitOrderResponse;
    fromProtoMsg(message: MsgCancelReplaceLimitOrderResponseProtoMsg): MsgCancelReplaceLimitOrderResponse;
    toProto(message: MsgCancelReplaceLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelReplaceLimitOrderResponse): MsgCancelReplaceLimitOrderResponseProtoMsg;
};
export declare const MsgCancelReplaceMarketOrder: {
    typeUrl: string;
    encode(message: MsgCancelReplaceMarketOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelReplaceMarketOrder;
    fromPartial(object: Partial<MsgCancelReplaceMarketOrder>): MsgCancelReplaceMarketOrder;
    fromAmino(object: MsgCancelReplaceMarketOrderAmino): MsgCancelReplaceMarketOrder;
    toAmino(message: MsgCancelReplaceMarketOrder): MsgCancelReplaceMarketOrderAmino;
    fromAminoMsg(object: MsgCancelReplaceMarketOrderAminoMsg): MsgCancelReplaceMarketOrder;
    fromProtoMsg(message: MsgCancelReplaceMarketOrderProtoMsg): MsgCancelReplaceMarketOrder;
    toProto(message: MsgCancelReplaceMarketOrder): Uint8Array;
    toProtoMsg(message: MsgCancelReplaceMarketOrder): MsgCancelReplaceMarketOrderProtoMsg;
};
export declare const MsgCancelReplaceMarketOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelReplaceMarketOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelReplaceMarketOrderResponse;
    fromPartial(_: Partial<MsgCancelReplaceMarketOrderResponse>): MsgCancelReplaceMarketOrderResponse;
    fromAmino(_: MsgCancelReplaceMarketOrderResponseAmino): MsgCancelReplaceMarketOrderResponse;
    toAmino(_: MsgCancelReplaceMarketOrderResponse): MsgCancelReplaceMarketOrderResponseAmino;
    fromAminoMsg(object: MsgCancelReplaceMarketOrderResponseAminoMsg): MsgCancelReplaceMarketOrderResponse;
    fromProtoMsg(message: MsgCancelReplaceMarketOrderResponseProtoMsg): MsgCancelReplaceMarketOrderResponse;
    toProto(message: MsgCancelReplaceMarketOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelReplaceMarketOrderResponse): MsgCancelReplaceMarketOrderResponseProtoMsg;
};
