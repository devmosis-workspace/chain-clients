import { LCDClient } from "@cosmology/lcd";
import { QueryGraphStatsRequest, QueryGraphStatsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    graphStats(_params?: QueryGraphStatsRequest): Promise<QueryGraphStatsResponseSDKType>;
}
