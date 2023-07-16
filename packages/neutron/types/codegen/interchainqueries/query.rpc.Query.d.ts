import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRegisteredQueriesRequest, QueryRegisteredQueriesResponse, QueryRegisteredQueryRequest, QueryRegisteredQueryResponse, QueryRegisteredQueryResultRequest, QueryRegisteredQueryResultResponse, QueryLastRemoteHeight, QueryLastRemoteHeightResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
    registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
    queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
    lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
    registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
    queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
    lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
    registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
    queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
    lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
};
