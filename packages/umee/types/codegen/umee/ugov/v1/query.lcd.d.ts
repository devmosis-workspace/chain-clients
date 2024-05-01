import { LCDClient } from "@cosmology/lcd";
import { QueryMinGasPrice, QueryMinGasPriceResponseSDKType, QueryEmergencyGroup, QueryEmergencyGroupResponseSDKType, QueryInflationParams, QueryInflationParamsResponseSDKType, QueryInflationCycleEnd, QueryInflationCycleEndResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    minGasPrice(_params?: QueryMinGasPrice): Promise<QueryMinGasPriceResponseSDKType>;
    emergencyGroup(_params?: QueryEmergencyGroup): Promise<QueryEmergencyGroupResponseSDKType>;
    inflationParams(_params?: QueryInflationParams): Promise<QueryInflationParamsResponseSDKType>;
    inflationCycleEnd(_params?: QueryInflationCycleEnd): Promise<QueryInflationCycleEndResponseSDKType>;
}
