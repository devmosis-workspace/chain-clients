import { OrderFilters, OrderFiltersAmino, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersSDKType, BidID, BidIDAmino, BidIDSDKType, Bid, BidAmino, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDSDKType, Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { BinaryWriter } from "../../../binary";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
    filters: OrderFilters;
    pagination: PageRequest;
}
export interface QueryOrdersRequestProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryOrdersRequest";
    value: Uint8Array;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestAmino {
    filters?: OrderFiltersAmino;
    pagination?: PageRequestAmino;
}
export interface QueryOrdersRequestAminoMsg {
    type: "/akash.market.v1beta2.QueryOrdersRequest";
    value: QueryOrdersRequestAmino;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestSDKType {
    filters: OrderFiltersSDKType;
    pagination: PageRequestSDKType;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
    orders: Order[];
    pagination: PageResponse;
}
export interface QueryOrdersResponseProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryOrdersResponse";
    value: Uint8Array;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseAmino {
    orders: OrderAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryOrdersResponseAminoMsg {
    type: "/akash.market.v1beta2.QueryOrdersResponse";
    value: QueryOrdersResponseAmino;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseSDKType {
    orders: OrderSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
    id: OrderID;
}
export interface QueryOrderRequestProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryOrderRequest";
    value: Uint8Array;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestAmino {
    id?: OrderIDAmino;
}
export interface QueryOrderRequestAminoMsg {
    type: "/akash.market.v1beta2.QueryOrderRequest";
    value: QueryOrderRequestAmino;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestSDKType {
    id: OrderIDSDKType;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
    order: Order;
}
export interface QueryOrderResponseProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryOrderResponse";
    value: Uint8Array;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseAmino {
    order?: OrderAmino;
}
export interface QueryOrderResponseAminoMsg {
    type: "/akash.market.v1beta2.QueryOrderResponse";
    value: QueryOrderResponseAmino;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseSDKType {
    order: OrderSDKType;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
    filters: BidFilters;
    pagination: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryBidsRequest";
    value: Uint8Array;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestAmino {
    filters?: BidFiltersAmino;
    pagination?: PageRequestAmino;
}
export interface QueryBidsRequestAminoMsg {
    type: "/akash.market.v1beta2.QueryBidsRequest";
    value: QueryBidsRequestAmino;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestSDKType {
    filters: BidFiltersSDKType;
    pagination: PageRequestSDKType;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
    bids: QueryBidResponse[];
    pagination: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryBidsResponse";
    value: Uint8Array;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseAmino {
    bids: QueryBidResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryBidsResponseAminoMsg {
    type: "/akash.market.v1beta2.QueryBidsResponse";
    value: QueryBidsResponseAmino;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseSDKType {
    bids: QueryBidResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
    id: BidID;
}
export interface QueryBidRequestProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryBidRequest";
    value: Uint8Array;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestAmino {
    id?: BidIDAmino;
}
export interface QueryBidRequestAminoMsg {
    type: "/akash.market.v1beta2.QueryBidRequest";
    value: QueryBidRequestAmino;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestSDKType {
    id: BidIDSDKType;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
    bid: Bid;
    escrowAccount: Account;
}
export interface QueryBidResponseProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryBidResponse";
    value: Uint8Array;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseAmino {
    bid?: BidAmino;
    escrow_account?: AccountAmino;
}
export interface QueryBidResponseAminoMsg {
    type: "/akash.market.v1beta2.QueryBidResponse";
    value: QueryBidResponseAmino;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseSDKType {
    bid: BidSDKType;
    escrow_account: AccountSDKType;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
    filters: LeaseFilters;
    pagination: PageRequest;
}
export interface QueryLeasesRequestProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryLeasesRequest";
    value: Uint8Array;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestAmino {
    filters?: LeaseFiltersAmino;
    pagination?: PageRequestAmino;
}
export interface QueryLeasesRequestAminoMsg {
    type: "/akash.market.v1beta2.QueryLeasesRequest";
    value: QueryLeasesRequestAmino;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestSDKType {
    filters: LeaseFiltersSDKType;
    pagination: PageRequestSDKType;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
    leases: QueryLeaseResponse[];
    pagination: PageResponse;
}
export interface QueryLeasesResponseProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryLeasesResponse";
    value: Uint8Array;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseAmino {
    leases: QueryLeaseResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryLeasesResponseAminoMsg {
    type: "/akash.market.v1beta2.QueryLeasesResponse";
    value: QueryLeasesResponseAmino;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseSDKType {
    leases: QueryLeaseResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
    id: LeaseID;
}
export interface QueryLeaseRequestProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryLeaseRequest";
    value: Uint8Array;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestAmino {
    id?: LeaseIDAmino;
}
export interface QueryLeaseRequestAminoMsg {
    type: "/akash.market.v1beta2.QueryLeaseRequest";
    value: QueryLeaseRequestAmino;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestSDKType {
    id: LeaseIDSDKType;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
    lease: Lease;
    escrowPayment: FractionalPayment;
}
export interface QueryLeaseResponseProtoMsg {
    typeUrl: "/akash.market.v1beta2.QueryLeaseResponse";
    value: Uint8Array;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseAmino {
    lease?: LeaseAmino;
    escrow_payment?: FractionalPaymentAmino;
}
export interface QueryLeaseResponseAminoMsg {
    type: "/akash.market.v1beta2.QueryLeaseResponse";
    value: QueryLeaseResponseAmino;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseSDKType {
    lease: LeaseSDKType;
    escrow_payment: FractionalPaymentSDKType;
}
export declare const QueryOrdersRequest: {
    typeUrl: string;
    encode(message: QueryOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOrdersRequest;
    fromPartial(object: Partial<QueryOrdersRequest>): QueryOrdersRequest;
    fromAmino(object: QueryOrdersRequestAmino): QueryOrdersRequest;
    toAmino(message: QueryOrdersRequest): QueryOrdersRequestAmino;
    fromAminoMsg(object: QueryOrdersRequestAminoMsg): QueryOrdersRequest;
    fromProtoMsg(message: QueryOrdersRequestProtoMsg): QueryOrdersRequest;
    toProto(message: QueryOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryOrdersRequest): QueryOrdersRequestProtoMsg;
};
export declare const QueryOrdersResponse: {
    typeUrl: string;
    encode(message: QueryOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOrdersResponse;
    fromPartial(object: Partial<QueryOrdersResponse>): QueryOrdersResponse;
    fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse;
    toAmino(message: QueryOrdersResponse): QueryOrdersResponseAmino;
    fromAminoMsg(object: QueryOrdersResponseAminoMsg): QueryOrdersResponse;
    fromProtoMsg(message: QueryOrdersResponseProtoMsg): QueryOrdersResponse;
    toProto(message: QueryOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg;
};
export declare const QueryOrderRequest: {
    typeUrl: string;
    encode(message: QueryOrderRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOrderRequest;
    fromPartial(object: Partial<QueryOrderRequest>): QueryOrderRequest;
    fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest;
    toAmino(message: QueryOrderRequest): QueryOrderRequestAmino;
    fromAminoMsg(object: QueryOrderRequestAminoMsg): QueryOrderRequest;
    fromProtoMsg(message: QueryOrderRequestProtoMsg): QueryOrderRequest;
    toProto(message: QueryOrderRequest): Uint8Array;
    toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg;
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
export declare const QueryBidsRequest: {
    typeUrl: string;
    encode(message: QueryBidsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidsRequest;
    fromPartial(object: Partial<QueryBidsRequest>): QueryBidsRequest;
    fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest;
    toAmino(message: QueryBidsRequest): QueryBidsRequestAmino;
    fromAminoMsg(object: QueryBidsRequestAminoMsg): QueryBidsRequest;
    fromProtoMsg(message: QueryBidsRequestProtoMsg): QueryBidsRequest;
    toProto(message: QueryBidsRequest): Uint8Array;
    toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg;
};
export declare const QueryBidsResponse: {
    typeUrl: string;
    encode(message: QueryBidsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidsResponse;
    fromPartial(object: Partial<QueryBidsResponse>): QueryBidsResponse;
    fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse;
    toAmino(message: QueryBidsResponse): QueryBidsResponseAmino;
    fromAminoMsg(object: QueryBidsResponseAminoMsg): QueryBidsResponse;
    fromProtoMsg(message: QueryBidsResponseProtoMsg): QueryBidsResponse;
    toProto(message: QueryBidsResponse): Uint8Array;
    toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg;
};
export declare const QueryBidRequest: {
    typeUrl: string;
    encode(message: QueryBidRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidRequest;
    fromPartial(object: Partial<QueryBidRequest>): QueryBidRequest;
    fromAmino(object: QueryBidRequestAmino): QueryBidRequest;
    toAmino(message: QueryBidRequest): QueryBidRequestAmino;
    fromAminoMsg(object: QueryBidRequestAminoMsg): QueryBidRequest;
    fromProtoMsg(message: QueryBidRequestProtoMsg): QueryBidRequest;
    toProto(message: QueryBidRequest): Uint8Array;
    toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg;
};
export declare const QueryBidResponse: {
    typeUrl: string;
    encode(message: QueryBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidResponse;
    fromPartial(object: Partial<QueryBidResponse>): QueryBidResponse;
    fromAmino(object: QueryBidResponseAmino): QueryBidResponse;
    toAmino(message: QueryBidResponse): QueryBidResponseAmino;
    fromAminoMsg(object: QueryBidResponseAminoMsg): QueryBidResponse;
    fromProtoMsg(message: QueryBidResponseProtoMsg): QueryBidResponse;
    toProto(message: QueryBidResponse): Uint8Array;
    toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg;
};
export declare const QueryLeasesRequest: {
    typeUrl: string;
    encode(message: QueryLeasesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLeasesRequest;
    fromPartial(object: Partial<QueryLeasesRequest>): QueryLeasesRequest;
    fromAmino(object: QueryLeasesRequestAmino): QueryLeasesRequest;
    toAmino(message: QueryLeasesRequest): QueryLeasesRequestAmino;
    fromAminoMsg(object: QueryLeasesRequestAminoMsg): QueryLeasesRequest;
    fromProtoMsg(message: QueryLeasesRequestProtoMsg): QueryLeasesRequest;
    toProto(message: QueryLeasesRequest): Uint8Array;
    toProtoMsg(message: QueryLeasesRequest): QueryLeasesRequestProtoMsg;
};
export declare const QueryLeasesResponse: {
    typeUrl: string;
    encode(message: QueryLeasesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLeasesResponse;
    fromPartial(object: Partial<QueryLeasesResponse>): QueryLeasesResponse;
    fromAmino(object: QueryLeasesResponseAmino): QueryLeasesResponse;
    toAmino(message: QueryLeasesResponse): QueryLeasesResponseAmino;
    fromAminoMsg(object: QueryLeasesResponseAminoMsg): QueryLeasesResponse;
    fromProtoMsg(message: QueryLeasesResponseProtoMsg): QueryLeasesResponse;
    toProto(message: QueryLeasesResponse): Uint8Array;
    toProtoMsg(message: QueryLeasesResponse): QueryLeasesResponseProtoMsg;
};
export declare const QueryLeaseRequest: {
    typeUrl: string;
    encode(message: QueryLeaseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLeaseRequest;
    fromPartial(object: Partial<QueryLeaseRequest>): QueryLeaseRequest;
    fromAmino(object: QueryLeaseRequestAmino): QueryLeaseRequest;
    toAmino(message: QueryLeaseRequest): QueryLeaseRequestAmino;
    fromAminoMsg(object: QueryLeaseRequestAminoMsg): QueryLeaseRequest;
    fromProtoMsg(message: QueryLeaseRequestProtoMsg): QueryLeaseRequest;
    toProto(message: QueryLeaseRequest): Uint8Array;
    toProtoMsg(message: QueryLeaseRequest): QueryLeaseRequestProtoMsg;
};
export declare const QueryLeaseResponse: {
    typeUrl: string;
    encode(message: QueryLeaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLeaseResponse;
    fromPartial(object: Partial<QueryLeaseResponse>): QueryLeaseResponse;
    fromAmino(object: QueryLeaseResponseAmino): QueryLeaseResponse;
    toAmino(message: QueryLeaseResponse): QueryLeaseResponseAmino;
    fromAminoMsg(object: QueryLeaseResponseAminoMsg): QueryLeaseResponse;
    fromProtoMsg(message: QueryLeaseResponseProtoMsg): QueryLeaseResponse;
    toProto(message: QueryLeaseResponse): Uint8Array;
    toProtoMsg(message: QueryLeaseResponse): QueryLeaseResponseProtoMsg;
};
