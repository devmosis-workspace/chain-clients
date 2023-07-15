import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import * as _m0 from "protobufjs/minimal";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
    filters?: OrderFilters;
    pagination?: PageRequest;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestSDKType {
    filters?: OrderFiltersSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
    orders: Order[];
    pagination?: PageResponse;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseSDKType {
    orders: OrderSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
    id?: OrderID;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestSDKType {
    id?: OrderIDSDKType;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
    order?: Order;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseSDKType {
    order?: OrderSDKType;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
    filters?: BidFilters;
    pagination?: PageRequest;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestSDKType {
    filters?: BidFiltersSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
    bids: QueryBidResponse[];
    pagination?: PageResponse;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseSDKType {
    bids: QueryBidResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
    id?: BidID;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestSDKType {
    id?: BidIDSDKType;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
    bid?: Bid;
    escrowAccount?: Account;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseSDKType {
    bid?: BidSDKType;
    escrow_account?: AccountSDKType;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
    filters?: LeaseFilters;
    pagination?: PageRequest;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestSDKType {
    filters?: LeaseFiltersSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
    leases: QueryLeaseResponse[];
    pagination?: PageResponse;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseSDKType {
    leases: QueryLeaseResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
    id?: LeaseID;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestSDKType {
    id?: LeaseIDSDKType;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
    lease?: Lease;
    escrowPayment?: FractionalPayment;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseSDKType {
    lease?: LeaseSDKType;
    escrow_payment?: FractionalPaymentSDKType;
}
export declare const QueryOrdersRequest: {
    encode(message: QueryOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOrdersRequest;
    fromPartial(object: Partial<QueryOrdersRequest>): QueryOrdersRequest;
};
export declare const QueryOrdersResponse: {
    encode(message: QueryOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOrdersResponse;
    fromPartial(object: Partial<QueryOrdersResponse>): QueryOrdersResponse;
};
export declare const QueryOrderRequest: {
    encode(message: QueryOrderRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOrderRequest;
    fromPartial(object: Partial<QueryOrderRequest>): QueryOrderRequest;
};
export declare const QueryOrderResponse: {
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOrderResponse;
    fromPartial(object: Partial<QueryOrderResponse>): QueryOrderResponse;
};
export declare const QueryBidsRequest: {
    encode(message: QueryBidsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBidsRequest;
    fromPartial(object: Partial<QueryBidsRequest>): QueryBidsRequest;
};
export declare const QueryBidsResponse: {
    encode(message: QueryBidsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBidsResponse;
    fromPartial(object: Partial<QueryBidsResponse>): QueryBidsResponse;
};
export declare const QueryBidRequest: {
    encode(message: QueryBidRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBidRequest;
    fromPartial(object: Partial<QueryBidRequest>): QueryBidRequest;
};
export declare const QueryBidResponse: {
    encode(message: QueryBidResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBidResponse;
    fromPartial(object: Partial<QueryBidResponse>): QueryBidResponse;
};
export declare const QueryLeasesRequest: {
    encode(message: QueryLeasesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLeasesRequest;
    fromPartial(object: Partial<QueryLeasesRequest>): QueryLeasesRequest;
};
export declare const QueryLeasesResponse: {
    encode(message: QueryLeasesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLeasesResponse;
    fromPartial(object: Partial<QueryLeasesResponse>): QueryLeasesResponse;
};
export declare const QueryLeaseRequest: {
    encode(message: QueryLeaseRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLeaseRequest;
    fromPartial(object: Partial<QueryLeaseRequest>): QueryLeaseRequest;
};
export declare const QueryLeaseResponse: {
    encode(message: QueryLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLeaseResponse;
    fromPartial(object: Partial<QueryLeaseResponse>): QueryLeaseResponse;
};
