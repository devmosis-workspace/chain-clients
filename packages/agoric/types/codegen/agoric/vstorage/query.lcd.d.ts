import { LCDClient } from "@osmonauts/lcd";
import { QueryDataRequest, QueryDataResponseSDKType, QueryChildrenRequest, QueryChildrenResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    data(params: QueryDataRequest): Promise<QueryDataResponseSDKType>;
    children(params: QueryChildrenRequest): Promise<QueryChildrenResponseSDKType>;
}
