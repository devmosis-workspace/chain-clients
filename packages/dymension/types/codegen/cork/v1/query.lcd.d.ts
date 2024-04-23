import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySubmittedCorksRequest, QuerySubmittedCorksResponseSDKType, QueryCommitPeriodRequest, QueryCommitPeriodResponseSDKType, QueryCellarIDsRequest, QueryCellarIDsResponseSDKType, QueryScheduledCorksRequest, QueryScheduledCorksResponseSDKType, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponseSDKType, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryParams(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    querySubmittedCorks(_params?: QuerySubmittedCorksRequest): Promise<QuerySubmittedCorksResponseSDKType>;
    queryCommitPeriod(_params?: QueryCommitPeriodRequest): Promise<QueryCommitPeriodResponseSDKType>;
    queryCellarIDs(_params?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponseSDKType>;
    queryScheduledCorks(_params?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponseSDKType>;
    queryScheduledBlockHeights(_params?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponseSDKType>;
    queryScheduledCorksByBlockHeight(params: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponseSDKType>;
}
