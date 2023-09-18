import { LCDClient } from "@cosmology/lcd";
import { QueryBalancesRequest, QueryBalancesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    balances(params: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType>;
}
