import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryBuybackTimeRequest, QueryBuybackTimeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    balance(_params?: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    buybackTime(_params?: QueryBuybackTimeRequest): Promise<QueryBuybackTimeResponseSDKType>;
}
