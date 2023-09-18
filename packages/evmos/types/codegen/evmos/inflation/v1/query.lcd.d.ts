import { LCDClient } from "@cosmology/lcd";
import { QueryPeriodRequest, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    period(_params?: QueryPeriodRequest): Promise<QueryPeriodResponseSDKType>;
    epochMintProvision(_params?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponseSDKType>;
    skippedEpochs(_params?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponseSDKType>;
    circulatingSupply(_params?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponseSDKType>;
    inflationRate(_params?: QueryInflationRateRequest): Promise<QueryInflationRateResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
