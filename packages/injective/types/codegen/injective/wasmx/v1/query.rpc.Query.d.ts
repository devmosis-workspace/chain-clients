import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves wasmx params */
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    /** Retrieves contract registration info */
    contractRegistrationInfo(request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse>;
    /** Retrieves the entire wasmx module's state */
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    contractRegistrationInfo(request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse>;
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    contractRegistrationInfo(request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse>;
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
};
