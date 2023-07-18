import { LCDClient } from "@osmonauts/lcd";
import { QueryEscrowRequest, QueryEscrowResponseSDKType, QueryEscrowsRequest, QueryEscrowsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    escrow(params: QueryEscrowRequest): Promise<QueryEscrowResponseSDKType>;
    escrows(params: QueryEscrowsRequest): Promise<QueryEscrowsResponseSDKType>;
}
