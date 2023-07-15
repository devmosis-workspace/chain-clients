import { Order, OrderSDKType } from "./market";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryByAccountRequest {
    address: string;
}
export interface QueryByAccountRequestSDKType {
    address: string;
}
export interface QueryByAccountResponse {
    orders: Order[];
}
export interface QueryByAccountResponseSDKType {
    orders: OrderSDKType[];
}
export interface QueryInstrumentsRequest {
}
export interface QueryInstrumentsRequestSDKType {
}
export interface QueryInstrumentsResponse {
    instruments: QueryInstrumentsResponse_Element[];
}
export interface QueryInstrumentsResponseSDKType {
    instruments: QueryInstrumentsResponse_ElementSDKType[];
}
export interface QueryInstrumentsResponse_Element {
    source: string;
    destination: string;
    lastPrice: string;
    bestPrice: string;
    lastTraded?: Timestamp;
}
export interface QueryInstrumentsResponse_ElementSDKType {
    source: string;
    destination: string;
    last_price: string;
    best_price: string;
    last_traded?: TimestampSDKType;
}
export interface QueryInstrumentRequest {
    source: string;
    destination: string;
}
export interface QueryInstrumentRequestSDKType {
    source: string;
    destination: string;
}
export interface QueryInstrumentResponse {
    source: string;
    destination: string;
    orders: QueryOrderResponse[];
}
export interface QueryInstrumentResponseSDKType {
    source: string;
    destination: string;
    orders: QueryOrderResponseSDKType[];
}
export interface QueryOrderResponse {
    id: Long;
    owner: string;
    sourceRemaining: string;
    clientOrderId: string;
    price: string;
    created?: Timestamp;
}
export interface QueryOrderResponseSDKType {
    id: Long;
    owner: string;
    source_remaining: string;
    client_order_id: string;
    price: string;
    created?: TimestampSDKType;
}
export declare const QueryByAccountRequest: {
    encode(message: QueryByAccountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryByAccountRequest;
    fromPartial(object: Partial<QueryByAccountRequest>): QueryByAccountRequest;
};
export declare const QueryByAccountResponse: {
    encode(message: QueryByAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryByAccountResponse;
    fromPartial(object: Partial<QueryByAccountResponse>): QueryByAccountResponse;
};
export declare const QueryInstrumentsRequest: {
    encode(_: QueryInstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryInstrumentsRequest;
    fromPartial(_: Partial<QueryInstrumentsRequest>): QueryInstrumentsRequest;
};
export declare const QueryInstrumentsResponse: {
    encode(message: QueryInstrumentsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInstrumentsResponse;
    fromPartial(object: Partial<QueryInstrumentsResponse>): QueryInstrumentsResponse;
};
export declare const QueryInstrumentsResponse_Element: {
    encode(message: QueryInstrumentsResponse_Element, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInstrumentsResponse_Element;
    fromPartial(object: Partial<QueryInstrumentsResponse_Element>): QueryInstrumentsResponse_Element;
};
export declare const QueryInstrumentRequest: {
    encode(message: QueryInstrumentRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInstrumentRequest;
    fromPartial(object: Partial<QueryInstrumentRequest>): QueryInstrumentRequest;
};
export declare const QueryInstrumentResponse: {
    encode(message: QueryInstrumentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInstrumentResponse;
    fromPartial(object: Partial<QueryInstrumentResponse>): QueryInstrumentResponse;
};
export declare const QueryOrderResponse: {
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOrderResponse;
    fromPartial(object: Partial<QueryOrderResponse>): QueryOrderResponse;
};
