import { Rpc } from "../../../helpers";
import { QueryMinGasPrice, QueryMinGasPriceResponse, QueryEmergencyGroup, QueryEmergencyGroupResponse, QueryInflationParams, QueryInflationParamsResponse, QueryInflationCycleEnd, QueryInflationCycleEndResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** MinGasPrice returns minimum transaction fees. */
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
    /** EmergencyGroup returns emergency group address */
    emergencyGroup(request?: QueryEmergencyGroup): Promise<QueryEmergencyGroupResponse>;
    /** InflationParams returns params of inflation reduction rates */
    inflationParams(request?: QueryInflationParams): Promise<QueryInflationParamsResponse>;
    /** InflationCycleEnd returns inflation cycle end time */
    inflationCycleEnd(request?: QueryInflationCycleEnd): Promise<QueryInflationCycleEndResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
    emergencyGroup(request?: QueryEmergencyGroup): Promise<QueryEmergencyGroupResponse>;
    inflationParams(request?: QueryInflationParams): Promise<QueryInflationParamsResponse>;
    inflationCycleEnd(request?: QueryInflationCycleEnd): Promise<QueryInflationCycleEndResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
    emergencyGroup(request?: QueryEmergencyGroup): Promise<QueryEmergencyGroupResponse>;
    inflationParams(request?: QueryInflationParams): Promise<QueryInflationParamsResponse>;
    inflationCycleEnd(request?: QueryInflationCycleEnd): Promise<QueryInflationCycleEndResponse>;
};
