import { Order, OrderAmino, OrderSDKType } from "./market";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface QueryByAccountRequest {
    address: string;
}
export interface QueryByAccountRequestProtoMsg {
    typeUrl: "/em.market.v1.QueryByAccountRequest";
    value: Uint8Array;
}
export interface QueryByAccountRequestAmino {
    address: string;
}
export interface QueryByAccountRequestAminoMsg {
    type: "/em.market.v1.QueryByAccountRequest";
    value: QueryByAccountRequestAmino;
}
export interface QueryByAccountRequestSDKType {
    address: string;
}
export interface QueryByAccountResponse {
    orders?: Order[];
}
export interface QueryByAccountResponseProtoMsg {
    typeUrl: "/em.market.v1.QueryByAccountResponse";
    value: Uint8Array;
}
export interface QueryByAccountResponseAmino {
    orders: OrderAmino[];
}
export interface QueryByAccountResponseAminoMsg {
    type: "/em.market.v1.QueryByAccountResponse";
    value: QueryByAccountResponseAmino;
}
export interface QueryByAccountResponseSDKType {
    orders?: OrderSDKType[];
}
export interface QueryInstrumentsRequest {
}
export interface QueryInstrumentsRequestProtoMsg {
    typeUrl: "/em.market.v1.QueryInstrumentsRequest";
    value: Uint8Array;
}
export interface QueryInstrumentsRequestAmino {
}
export interface QueryInstrumentsRequestAminoMsg {
    type: "/em.market.v1.QueryInstrumentsRequest";
    value: QueryInstrumentsRequestAmino;
}
export interface QueryInstrumentsRequestSDKType {
}
export interface QueryInstrumentsResponse {
    instruments: QueryInstrumentsResponse_Element[];
}
export interface QueryInstrumentsResponseProtoMsg {
    typeUrl: "/em.market.v1.QueryInstrumentsResponse";
    value: Uint8Array;
}
export interface QueryInstrumentsResponseAmino {
    instruments: QueryInstrumentsResponse_ElementAmino[];
}
export interface QueryInstrumentsResponseAminoMsg {
    type: "/em.market.v1.QueryInstrumentsResponse";
    value: QueryInstrumentsResponseAmino;
}
export interface QueryInstrumentsResponseSDKType {
    instruments: QueryInstrumentsResponse_ElementSDKType[];
}
export interface QueryInstrumentsResponse_Element {
    source: string;
    destination: string;
    lastPrice: string;
    bestPrice: string;
    lastTraded: Timestamp;
}
export interface QueryInstrumentsResponse_ElementProtoMsg {
    typeUrl: "/em.market.v1.Element";
    value: Uint8Array;
}
export interface QueryInstrumentsResponse_ElementAmino {
    source: string;
    destination: string;
    last_price: string;
    best_price: string;
    last_traded?: TimestampAmino;
}
export interface QueryInstrumentsResponse_ElementAminoMsg {
    type: "/em.market.v1.Element";
    value: QueryInstrumentsResponse_ElementAmino;
}
export interface QueryInstrumentsResponse_ElementSDKType {
    source: string;
    destination: string;
    last_price: string;
    best_price: string;
    last_traded: TimestampSDKType;
}
export interface QueryInstrumentRequest {
    source: string;
    destination: string;
}
export interface QueryInstrumentRequestProtoMsg {
    typeUrl: "/em.market.v1.QueryInstrumentRequest";
    value: Uint8Array;
}
export interface QueryInstrumentRequestAmino {
    source: string;
    destination: string;
}
export interface QueryInstrumentRequestAminoMsg {
    type: "/em.market.v1.QueryInstrumentRequest";
    value: QueryInstrumentRequestAmino;
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
export interface QueryInstrumentResponseProtoMsg {
    typeUrl: "/em.market.v1.QueryInstrumentResponse";
    value: Uint8Array;
}
export interface QueryInstrumentResponseAmino {
    source: string;
    destination: string;
    orders: QueryOrderResponseAmino[];
}
export interface QueryInstrumentResponseAminoMsg {
    type: "/em.market.v1.QueryInstrumentResponse";
    value: QueryInstrumentResponseAmino;
}
export interface QueryInstrumentResponseSDKType {
    source: string;
    destination: string;
    orders: QueryOrderResponseSDKType[];
}
export interface QueryOrderResponse {
    id: bigint;
    owner: string;
    sourceRemaining: string;
    clientOrderId?: string;
    price: string;
    created: Timestamp;
}
export interface QueryOrderResponseProtoMsg {
    typeUrl: "/em.market.v1.QueryOrderResponse";
    value: Uint8Array;
}
export interface QueryOrderResponseAmino {
    id: string;
    owner: string;
    source_remaining: string;
    client_order_id: string;
    price: string;
    created?: TimestampAmino;
}
export interface QueryOrderResponseAminoMsg {
    type: "/em.market.v1.QueryOrderResponse";
    value: QueryOrderResponseAmino;
}
export interface QueryOrderResponseSDKType {
    id: bigint;
    owner: string;
    source_remaining: string;
    client_order_id?: string;
    price: string;
    created: TimestampSDKType;
}
export declare const QueryByAccountRequest: {
    typeUrl: string;
    encode(message: QueryByAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryByAccountRequest;
    fromPartial(object: Partial<QueryByAccountRequest>): QueryByAccountRequest;
    fromAmino(object: QueryByAccountRequestAmino): QueryByAccountRequest;
    toAmino(message: QueryByAccountRequest): QueryByAccountRequestAmino;
    fromAminoMsg(object: QueryByAccountRequestAminoMsg): QueryByAccountRequest;
    fromProtoMsg(message: QueryByAccountRequestProtoMsg): QueryByAccountRequest;
    toProto(message: QueryByAccountRequest): Uint8Array;
    toProtoMsg(message: QueryByAccountRequest): QueryByAccountRequestProtoMsg;
};
export declare const QueryByAccountResponse: {
    typeUrl: string;
    encode(message: QueryByAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryByAccountResponse;
    fromPartial(object: Partial<QueryByAccountResponse>): QueryByAccountResponse;
    fromAmino(object: QueryByAccountResponseAmino): QueryByAccountResponse;
    toAmino(message: QueryByAccountResponse): QueryByAccountResponseAmino;
    fromAminoMsg(object: QueryByAccountResponseAminoMsg): QueryByAccountResponse;
    fromProtoMsg(message: QueryByAccountResponseProtoMsg): QueryByAccountResponse;
    toProto(message: QueryByAccountResponse): Uint8Array;
    toProtoMsg(message: QueryByAccountResponse): QueryByAccountResponseProtoMsg;
};
export declare const QueryInstrumentsRequest: {
    typeUrl: string;
    encode(_: QueryInstrumentsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryInstrumentsRequest;
    fromPartial(_: Partial<QueryInstrumentsRequest>): QueryInstrumentsRequest;
    fromAmino(_: QueryInstrumentsRequestAmino): QueryInstrumentsRequest;
    toAmino(_: QueryInstrumentsRequest): QueryInstrumentsRequestAmino;
    fromAminoMsg(object: QueryInstrumentsRequestAminoMsg): QueryInstrumentsRequest;
    fromProtoMsg(message: QueryInstrumentsRequestProtoMsg): QueryInstrumentsRequest;
    toProto(message: QueryInstrumentsRequest): Uint8Array;
    toProtoMsg(message: QueryInstrumentsRequest): QueryInstrumentsRequestProtoMsg;
};
export declare const QueryInstrumentsResponse: {
    typeUrl: string;
    encode(message: QueryInstrumentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInstrumentsResponse;
    fromPartial(object: Partial<QueryInstrumentsResponse>): QueryInstrumentsResponse;
    fromAmino(object: QueryInstrumentsResponseAmino): QueryInstrumentsResponse;
    toAmino(message: QueryInstrumentsResponse): QueryInstrumentsResponseAmino;
    fromAminoMsg(object: QueryInstrumentsResponseAminoMsg): QueryInstrumentsResponse;
    fromProtoMsg(message: QueryInstrumentsResponseProtoMsg): QueryInstrumentsResponse;
    toProto(message: QueryInstrumentsResponse): Uint8Array;
    toProtoMsg(message: QueryInstrumentsResponse): QueryInstrumentsResponseProtoMsg;
};
export declare const QueryInstrumentsResponse_Element: {
    typeUrl: string;
    encode(message: QueryInstrumentsResponse_Element, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInstrumentsResponse_Element;
    fromPartial(object: Partial<QueryInstrumentsResponse_Element>): QueryInstrumentsResponse_Element;
    fromAmino(object: QueryInstrumentsResponse_ElementAmino): QueryInstrumentsResponse_Element;
    toAmino(message: QueryInstrumentsResponse_Element): QueryInstrumentsResponse_ElementAmino;
    fromAminoMsg(object: QueryInstrumentsResponse_ElementAminoMsg): QueryInstrumentsResponse_Element;
    fromProtoMsg(message: QueryInstrumentsResponse_ElementProtoMsg): QueryInstrumentsResponse_Element;
    toProto(message: QueryInstrumentsResponse_Element): Uint8Array;
    toProtoMsg(message: QueryInstrumentsResponse_Element): QueryInstrumentsResponse_ElementProtoMsg;
};
export declare const QueryInstrumentRequest: {
    typeUrl: string;
    encode(message: QueryInstrumentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInstrumentRequest;
    fromPartial(object: Partial<QueryInstrumentRequest>): QueryInstrumentRequest;
    fromAmino(object: QueryInstrumentRequestAmino): QueryInstrumentRequest;
    toAmino(message: QueryInstrumentRequest): QueryInstrumentRequestAmino;
    fromAminoMsg(object: QueryInstrumentRequestAminoMsg): QueryInstrumentRequest;
    fromProtoMsg(message: QueryInstrumentRequestProtoMsg): QueryInstrumentRequest;
    toProto(message: QueryInstrumentRequest): Uint8Array;
    toProtoMsg(message: QueryInstrumentRequest): QueryInstrumentRequestProtoMsg;
};
export declare const QueryInstrumentResponse: {
    typeUrl: string;
    encode(message: QueryInstrumentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInstrumentResponse;
    fromPartial(object: Partial<QueryInstrumentResponse>): QueryInstrumentResponse;
    fromAmino(object: QueryInstrumentResponseAmino): QueryInstrumentResponse;
    toAmino(message: QueryInstrumentResponse): QueryInstrumentResponseAmino;
    fromAminoMsg(object: QueryInstrumentResponseAminoMsg): QueryInstrumentResponse;
    fromProtoMsg(message: QueryInstrumentResponseProtoMsg): QueryInstrumentResponse;
    toProto(message: QueryInstrumentResponse): Uint8Array;
    toProtoMsg(message: QueryInstrumentResponse): QueryInstrumentResponseProtoMsg;
};
export declare const QueryOrderResponse: {
    typeUrl: string;
    encode(message: QueryOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOrderResponse;
    fromPartial(object: Partial<QueryOrderResponse>): QueryOrderResponse;
    fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse;
    toAmino(message: QueryOrderResponse): QueryOrderResponseAmino;
    fromAminoMsg(object: QueryOrderResponseAminoMsg): QueryOrderResponse;
    fromProtoMsg(message: QueryOrderResponseProtoMsg): QueryOrderResponse;
    toProto(message: QueryOrderResponse): Uint8Array;
    toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg;
};
