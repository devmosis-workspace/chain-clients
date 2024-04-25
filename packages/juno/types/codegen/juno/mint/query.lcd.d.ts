import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType, QueryTargetSupplyRequest, QueryTargetSupplyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    inflation(_params?: QueryInflationRequest): Promise<QueryInflationResponseSDKType>;
    annualProvisions(_params?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType>;
    targetSupply(_params?: QueryTargetSupplyRequest): Promise<QueryTargetSupplyResponseSDKType>;
}
