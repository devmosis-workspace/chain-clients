import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    pools(params: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
}
