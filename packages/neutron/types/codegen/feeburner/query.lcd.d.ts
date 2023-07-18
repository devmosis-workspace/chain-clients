import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryTotalBurnedNeutronsAmountRequest, QueryTotalBurnedNeutronsAmountResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    totalBurnedNeutronsAmount(_params?: QueryTotalBurnedNeutronsAmountRequest): Promise<QueryTotalBurnedNeutronsAmountResponseSDKType>;
}
