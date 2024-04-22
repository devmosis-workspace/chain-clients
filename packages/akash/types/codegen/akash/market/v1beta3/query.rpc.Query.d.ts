import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** Orders queries orders with filters */
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    /** Order queries order details */
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    /** Bids queries bids with filters */
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    /** Bid queries bid details */
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    /** Leases queries leases with filters */
    leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    /** Lease queries lease details */
    lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
};
