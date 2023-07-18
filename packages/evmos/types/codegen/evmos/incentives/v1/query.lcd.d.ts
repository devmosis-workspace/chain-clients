import { LCDClient } from "@osmonauts/lcd";
import { QueryIncentivesRequest, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    incentives(params?: QueryIncentivesRequest): Promise<QueryIncentivesResponseSDKType>;
    incentive(params: QueryIncentiveRequest): Promise<QueryIncentiveResponseSDKType>;
    gasMeters(params: QueryGasMetersRequest): Promise<QueryGasMetersResponseSDKType>;
    gasMeter(params: QueryGasMeterRequest): Promise<QueryGasMeterResponseSDKType>;
    allocationMeters(params?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponseSDKType>;
    allocationMeter(params: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
