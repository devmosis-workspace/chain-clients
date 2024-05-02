import { LCDClient } from "@cosmology/lcd";
import { QueryEntriesRequest, QueryEntriesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    entries(_params?: QueryEntriesRequest): Promise<QueryEntriesResponseSDKType>;
}
