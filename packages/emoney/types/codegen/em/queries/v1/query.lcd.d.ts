import { LCDClient } from "@cosmology/lcd";
import { QueryCirculatingRequest, QueryCirculatingResponseSDKType, QueryMissedBlocksRequest, QueryMissedBlocksResponseSDKType, QuerySpendableRequest, QuerySpendableResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    circulating(_params?: QueryCirculatingRequest): Promise<QueryCirculatingResponseSDKType>;
    missedBlocks(params: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponseSDKType>;
    spendable(params: QuerySpendableRequest): Promise<QuerySpendableResponseSDKType>;
}
