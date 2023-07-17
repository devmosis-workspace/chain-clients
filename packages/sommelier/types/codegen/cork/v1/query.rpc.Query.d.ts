import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySubmittedCorksRequest, QuerySubmittedCorksResponse, QueryCommitPeriodRequest, QueryCommitPeriodResponse, QueryCellarIDsRequest, QueryCellarIDsResponse, QueryScheduledCorksRequest, QueryScheduledCorksResponse, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponse, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponse } from "./query";
/** Query defines the gRPC query service for the cork module. */
export interface Query {
    /** QueryParams queries the allocation module parameters. */
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** QuerySubmittedCorks queries the submitted corks awaiting vote */
    querySubmittedCorks(request?: QuerySubmittedCorksRequest): Promise<QuerySubmittedCorksResponse>;
    /** QueryCommitPeriod queries the heights for the current voting period (current, start and end) */
    queryCommitPeriod(request?: QueryCommitPeriodRequest): Promise<QueryCommitPeriodResponse>;
    /** QueryCellarIDs returns all cellars and current tick ranges */
    queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
    /** QueryScheduledCorks returns all scheduled corks */
    queryScheduledCorks(request?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
    /** QueryScheduledBlockHeights returns all scheduled block heights */
    queryScheduledBlockHeights(request?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
    /** QueryScheduledCorks returns all scheduled corks at a block height */
    queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    querySubmittedCorks(request?: QuerySubmittedCorksRequest): Promise<QuerySubmittedCorksResponse>;
    queryCommitPeriod(request?: QueryCommitPeriodRequest): Promise<QueryCommitPeriodResponse>;
    queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
    queryScheduledCorks(request?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
    queryScheduledBlockHeights(request?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
    queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    querySubmittedCorks(request?: QuerySubmittedCorksRequest): Promise<QuerySubmittedCorksResponse>;
    queryCommitPeriod(request?: QueryCommitPeriodRequest): Promise<QueryCommitPeriodResponse>;
    queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
    queryScheduledCorks(request?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
    queryScheduledBlockHeights(request?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
    queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
};
