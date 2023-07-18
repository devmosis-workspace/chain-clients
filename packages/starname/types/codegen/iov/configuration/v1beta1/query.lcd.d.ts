import { LCDClient } from "@osmonauts/lcd";
import { QueryConfigRequest, QueryConfigResponseSDKType, QueryFeesRequest, QueryFeesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    config(_params?: QueryConfigRequest): Promise<QueryConfigResponseSDKType>;
    fees(_params?: QueryFeesRequest): Promise<QueryFeesResponseSDKType>;
}
