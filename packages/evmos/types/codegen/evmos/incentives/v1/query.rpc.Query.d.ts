import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Incentives retrieves registered incentives */
    incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse>;
    /** Incentive retrieves a registered incentive */
    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
    /** GasMeters retrieves active gas meters for a given contract */
    gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse>;
    /** GasMeter retrieves a active gas meter */
    gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse>;
    /**
     * AllocationMeters retrieves active allocation meters for a given
     * denomination
     */
    allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse>;
    /** AllocationMeter retrieves a active gas meter */
    allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse>;
    /** Params retrieves the incentives module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse>;
    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
    gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse>;
    gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse>;
    allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse>;
    allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse>;
    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
    gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse>;
    gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse>;
    allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse>;
    allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
