import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryTotalBalanceRequest, QueryTotalBalanceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    balance(_params?: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    totalBalance(_params?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponseSDKType>;
}
