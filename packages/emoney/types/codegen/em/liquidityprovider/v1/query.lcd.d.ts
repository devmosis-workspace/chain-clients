import { LCDClient } from "@osmonauts/lcd";
import { QueryListRequest, QueryListResponseSDKType, QueryMintableRequest, QueryMintableResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    list(_params?: QueryListRequest): Promise<QueryListResponseSDKType>;
    mintable(params: QueryMintableRequest): Promise<QueryMintableResponseSDKType>;
}
