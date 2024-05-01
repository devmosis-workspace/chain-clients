import { LCDClient } from "@cosmology/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryOutflows, QueryOutflowsResponseSDKType, QueryAllOutflows, QueryAllOutflowsResponseSDKType, QueryInflows, QueryInflowsResponseSDKType, QueryQuotaExpires, QueryQuotaExpiresResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParams): Promise<QueryParamsResponseSDKType>;
    outflows(params: QueryOutflows): Promise<QueryOutflowsResponseSDKType>;
    allOutflows(_params?: QueryAllOutflows): Promise<QueryAllOutflowsResponseSDKType>;
    inflows(params: QueryInflows): Promise<QueryInflowsResponseSDKType>;
    quotaExpires(_params?: QueryQuotaExpires): Promise<QueryQuotaExpiresResponseSDKType>;
}
