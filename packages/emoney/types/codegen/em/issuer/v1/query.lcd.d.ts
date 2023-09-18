import { LCDClient } from "@cosmology/lcd";
import { QueryIssuersRequest, QueryIssuersResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    issuers(_params?: QueryIssuersRequest): Promise<QueryIssuersResponseSDKType>;
}
