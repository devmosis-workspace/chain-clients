import { LCDClient } from "@cosmology/lcd";
import { QueryInflationRequest, QueryInflationResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    inflation(_params?: QueryInflationRequest): Promise<QueryInflationResponseSDKType>;
}
