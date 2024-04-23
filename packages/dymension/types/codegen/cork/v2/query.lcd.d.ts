import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCellarIDsRequest, QueryCellarIDsResponseSDKType, QueryScheduledCorksRequest, QueryScheduledCorksResponseSDKType, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponseSDKType, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponseSDKType, QueryScheduledCorksByIDRequest, QueryScheduledCorksByIDResponseSDKType, QueryCorkResultRequest, QueryCorkResultResponseSDKType, QueryCorkResultsRequest, QueryCorkResultsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryParams(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    queryCellarIDs(_params?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponseSDKType>;
    queryScheduledCorks(_params?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponseSDKType>;
    queryScheduledBlockHeights(_params?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponseSDKType>;
    queryScheduledCorksByBlockHeight(params: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponseSDKType>;
    queryScheduledCorksByID(params: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponseSDKType>;
    queryCorkResult(params: QueryCorkResultRequest): Promise<QueryCorkResultResponseSDKType>;
    queryCorkResults(_params?: QueryCorkResultsRequest): Promise<QueryCorkResultsResponseSDKType>;
}
