import { LCDClient } from "@cosmology/lcd";
import { QuerySupplyRequest, QuerySupplyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    supply(_params?: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
}
