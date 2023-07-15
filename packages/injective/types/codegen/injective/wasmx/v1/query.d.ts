import { Params, ParamsSDKType, RegisteredContract, RegisteredContractSDKType } from "./wasmx";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequest {
}
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequestSDKType {
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponse {
    params?: Params;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponse {
    /**
     * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
     * RPC method.
     */
    state?: GenesisState;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state?: GenesisStateSDKType;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequest {
    /** Contract registration info */
    contractAddress: string;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequestSDKType {
    contract_address: string;
}
export interface QueryContractRegistrationInfoResponse {
    contract?: RegisteredContract;
}
export interface QueryContractRegistrationInfoResponseSDKType {
    contract?: RegisteredContractSDKType;
}
export declare const QueryWasmxParamsRequest: {
    encode(_: QueryWasmxParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryWasmxParamsRequest;
    fromPartial(_: Partial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest;
};
export declare const QueryWasmxParamsResponse: {
    encode(message: QueryWasmxParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryWasmxParamsResponse;
    fromPartial(object: Partial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
export declare const QueryContractRegistrationInfoRequest: {
    encode(message: QueryContractRegistrationInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractRegistrationInfoRequest;
    fromPartial(object: Partial<QueryContractRegistrationInfoRequest>): QueryContractRegistrationInfoRequest;
};
export declare const QueryContractRegistrationInfoResponse: {
    encode(message: QueryContractRegistrationInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractRegistrationInfoResponse;
    fromPartial(object: Partial<QueryContractRegistrationInfoResponse>): QueryContractRegistrationInfoResponse;
};
