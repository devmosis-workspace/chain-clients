import { LCDClient } from "@cosmology/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    epochInfos(params?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
}
