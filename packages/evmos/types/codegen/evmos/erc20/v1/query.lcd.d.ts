import { LCDClient } from "@cosmology/lcd";
import { QueryTokenPairsRequest, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    tokenPairs(params?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponseSDKType>;
    tokenPair(params: QueryTokenPairRequest): Promise<QueryTokenPairResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
