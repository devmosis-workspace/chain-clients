import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRegisteredQueriesRequest, QueryRegisteredQueriesResponseSDKType, QueryRegisteredQueryRequest, QueryRegisteredQueryResponseSDKType, QueryRegisteredQueryResultRequest, QueryRegisteredQueryResultResponseSDKType, QueryLastRemoteHeight, QueryLastRemoteHeightResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    registeredQueries(params: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponseSDKType>;
    registeredQuery(params: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponseSDKType>;
    queryResult(params: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponseSDKType>;
    lastRemoteHeight(params: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponseSDKType>;
}
