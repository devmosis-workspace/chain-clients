import { LCDClient } from "@osmonauts/lcd";
import { QueryOrdersRequest, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsResponseSDKType, QueryBidRequest, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType>;
    order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType>;
    bids(params: QueryBidsRequest): Promise<QueryBidsResponseSDKType>;
    bid(params: QueryBidRequest): Promise<QueryBidResponseSDKType>;
    leases(params: QueryLeasesRequest): Promise<QueryLeasesResponseSDKType>;
    lease(params: QueryLeaseRequest): Promise<QueryLeaseResponseSDKType>;
}
