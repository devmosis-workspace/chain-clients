import { LCDClient } from "@cosmology/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryOutflows, QueryOutflowsResponseSDKType, QueryAllOutflows, QueryAllOutflowsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParams): Promise<QueryParamsResponseSDKType>;
    outflows(params: QueryOutflows): Promise<QueryOutflowsResponseSDKType>;
    allOutflows(_params?: QueryAllOutflows): Promise<QueryAllOutflowsResponseSDKType>;
}
