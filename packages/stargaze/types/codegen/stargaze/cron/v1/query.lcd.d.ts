import { LCDClient } from "@cosmology/lcd";
import { QueryListPrivilegedRequest, QueryListPrivilegedResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    listPrivileged(_params?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponseSDKType>;
}
