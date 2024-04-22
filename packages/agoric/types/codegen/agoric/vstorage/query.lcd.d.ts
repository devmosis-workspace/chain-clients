import { LCDClient } from "@cosmology/lcd";
import { QueryDataRequest, QueryDataResponseSDKType, QueryCapDataRequest, QueryCapDataResponseSDKType, QueryChildrenRequest, QueryChildrenResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    data(params: QueryDataRequest): Promise<QueryDataResponseSDKType>;
    capData(params: QueryCapDataRequest): Promise<QueryCapDataResponseSDKType>;
    children(params: QueryChildrenRequest): Promise<QueryChildrenResponseSDKType>;
}
