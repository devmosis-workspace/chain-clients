import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAPYRequest, QueryAPYResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryParams(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    queryAPY(_params?: QueryAPYRequest): Promise<QueryAPYResponseSDKType>;
}
