import { LCDClient } from "@cosmology/lcd";
import { QueryGasPricesRequest, QueryGasPricesResponseSDKType, QueryUpgradePlanRequest, QueryUpgradePlanResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    gasPrices(_params?: QueryGasPricesRequest): Promise<QueryGasPricesResponseSDKType>;
    upgradePlan(_params?: QueryUpgradePlanRequest): Promise<QueryUpgradePlanResponseSDKType>;
}
