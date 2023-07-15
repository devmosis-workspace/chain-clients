import { TimeInForce } from "./market";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgAddLimitOrder {
    owner: string;
    clientOrderId: string;
    timeInForce: TimeInForce;
    source?: Coin;
    destination?: Coin;
}
export interface MsgAddLimitOrderSDKType {
    owner: string;
    client_order_id: string;
    time_in_force: TimeInForce;
    source?: CoinSDKType;
    destination?: CoinSDKType;
}
export interface MsgAddLimitOrderResponse {
}
export interface MsgAddLimitOrderResponseSDKType {
}
export interface MsgAddMarketOrder {
    owner: string;
    clientOrderId: string;
    timeInForce: TimeInForce;
    source: string;
    destination?: Coin;
    maximumSlippage: string;
}
export interface MsgAddMarketOrderSDKType {
    owner: string;
    client_order_id: string;
    time_in_force: TimeInForce;
    source: string;
    destination?: CoinSDKType;
    maximum_slippage: string;
}
export interface MsgAddMarketOrderResponse {
}
export interface MsgAddMarketOrderResponseSDKType {
}
export interface MsgCancelOrder {
    owner: string;
    clientOrderId: string;
}
export interface MsgCancelOrderSDKType {
    owner: string;
    client_order_id: string;
}
export interface MsgCancelOrderResponse {
}
export interface MsgCancelOrderResponseSDKType {
}
export interface MsgCancelReplaceLimitOrder {
    owner: string;
    originalClientOrderId: string;
    newClientOrderId: string;
    timeInForce: TimeInForce;
    source?: Coin;
    destination?: Coin;
}
export interface MsgCancelReplaceLimitOrderSDKType {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: TimeInForce;
    source?: CoinSDKType;
    destination?: CoinSDKType;
}
export interface MsgCancelReplaceLimitOrderResponse {
}
export interface MsgCancelReplaceLimitOrderResponseSDKType {
}
export interface MsgCancelReplaceMarketOrder {
    owner: string;
    originalClientOrderId: string;
    newClientOrderId: string;
    timeInForce: TimeInForce;
    source: string;
    destination?: Coin;
    maximumSlippage: string;
}
export interface MsgCancelReplaceMarketOrderSDKType {
    owner: string;
    original_client_order_id: string;
    new_client_order_id: string;
    time_in_force: TimeInForce;
    source: string;
    destination?: CoinSDKType;
    maximum_slippage: string;
}
export interface MsgCancelReplaceMarketOrderResponse {
}
export interface MsgCancelReplaceMarketOrderResponseSDKType {
}
export declare const MsgAddLimitOrder: {
    encode(message: MsgAddLimitOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddLimitOrder;
    fromPartial(object: Partial<MsgAddLimitOrder>): MsgAddLimitOrder;
};
export declare const MsgAddLimitOrderResponse: {
    encode(_: MsgAddLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddLimitOrderResponse;
    fromPartial(_: Partial<MsgAddLimitOrderResponse>): MsgAddLimitOrderResponse;
};
export declare const MsgAddMarketOrder: {
    encode(message: MsgAddMarketOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddMarketOrder;
    fromPartial(object: Partial<MsgAddMarketOrder>): MsgAddMarketOrder;
};
export declare const MsgAddMarketOrderResponse: {
    encode(_: MsgAddMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddMarketOrderResponse;
    fromPartial(_: Partial<MsgAddMarketOrderResponse>): MsgAddMarketOrderResponse;
};
export declare const MsgCancelOrder: {
    encode(message: MsgCancelOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelOrder;
    fromPartial(object: Partial<MsgCancelOrder>): MsgCancelOrder;
};
export declare const MsgCancelOrderResponse: {
    encode(_: MsgCancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelOrderResponse;
    fromPartial(_: Partial<MsgCancelOrderResponse>): MsgCancelOrderResponse;
};
export declare const MsgCancelReplaceLimitOrder: {
    encode(message: MsgCancelReplaceLimitOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelReplaceLimitOrder;
    fromPartial(object: Partial<MsgCancelReplaceLimitOrder>): MsgCancelReplaceLimitOrder;
};
export declare const MsgCancelReplaceLimitOrderResponse: {
    encode(_: MsgCancelReplaceLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelReplaceLimitOrderResponse;
    fromPartial(_: Partial<MsgCancelReplaceLimitOrderResponse>): MsgCancelReplaceLimitOrderResponse;
};
export declare const MsgCancelReplaceMarketOrder: {
    encode(message: MsgCancelReplaceMarketOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelReplaceMarketOrder;
    fromPartial(object: Partial<MsgCancelReplaceMarketOrder>): MsgCancelReplaceMarketOrder;
};
export declare const MsgCancelReplaceMarketOrderResponse: {
    encode(_: MsgCancelReplaceMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelReplaceMarketOrderResponse;
    fromPartial(_: Partial<MsgCancelReplaceMarketOrderResponse>): MsgCancelReplaceMarketOrderResponse;
};
