import { LCDClient } from "@cosmology/lcd";
import { QueryInflationRateRequest, QueryInflationRateResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType, QueryGenesisTimeRequest, QueryGenesisTimeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    inflationRate(_params?: QueryInflationRateRequest): Promise<QueryInflationRateResponseSDKType>;
    annualProvisions(_params?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType>;
    genesisTime(_params?: QueryGenesisTimeRequest): Promise<QueryGenesisTimeResponseSDKType>;
}
