import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves auction params */
    auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
    /** Retrieves current auction basket with current highest bid and bidder */
    currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
    /** Retrieves the entire auction module's state */
    auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
    currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
    auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
    currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
    auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
};
