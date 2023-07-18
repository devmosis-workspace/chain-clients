import { LCDClient } from "@osmonauts/lcd";
import { QueryBalancesRequest, QueryBalancesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    balances(_params?: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType>;
}
