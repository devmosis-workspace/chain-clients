import { LCDClient } from "@cosmology/lcd";
import { QuerySwapRequest, QuerySwapResponseSDKType, QueryTerraPoolDeltaRequest, QueryTerraPoolDeltaResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    swap(params: QuerySwapRequest): Promise<QuerySwapResponseSDKType>;
    terraPoolDelta(_params?: QueryTerraPoolDeltaRequest): Promise<QueryTerraPoolDeltaResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
