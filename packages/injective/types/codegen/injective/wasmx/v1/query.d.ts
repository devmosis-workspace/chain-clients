import { Params, ParamsAmino, ParamsSDKType, RegisteredContract, RegisteredContractAmino, RegisteredContractSDKType } from "./wasmx";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequest {
}
export interface QueryWasmxParamsRequestProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest";
    value: Uint8Array;
}
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequestAmino {
}
export interface QueryWasmxParamsRequestAminoMsg {
    type: "/injective.wasmx.v1.QueryWasmxParamsRequest";
    value: QueryWasmxParamsRequestAmino;
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
    params: Params;
}
export interface QueryWasmxParamsResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse";
    value: Uint8Array;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryWasmxParamsResponseAminoMsg {
    type: "/injective.wasmx.v1.QueryWasmxParamsResponse";
    value: QueryWasmxParamsResponseAmino;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest";
    value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.wasmx.v1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
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
    state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse";
    value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseAmino {
    /**
     * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
     * RPC method.
     */
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.wasmx.v1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequest {
    /** Contract registration info */
    contractAddress: string;
}
export interface QueryContractRegistrationInfoRequestProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest";
    value: Uint8Array;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequestAmino {
    /** Contract registration info */
    contract_address: string;
}
export interface QueryContractRegistrationInfoRequestAminoMsg {
    type: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest";
    value: QueryContractRegistrationInfoRequestAmino;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequestSDKType {
    contract_address: string;
}
export interface QueryContractRegistrationInfoResponse {
    contract: RegisteredContract;
}
export interface QueryContractRegistrationInfoResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse";
    value: Uint8Array;
}
export interface QueryContractRegistrationInfoResponseAmino {
    contract?: RegisteredContractAmino;
}
export interface QueryContractRegistrationInfoResponseAminoMsg {
    type: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse";
    value: QueryContractRegistrationInfoResponseAmino;
}
export interface QueryContractRegistrationInfoResponseSDKType {
    contract: RegisteredContractSDKType;
}
export declare const QueryWasmxParamsRequest: {
    typeUrl: string;
    encode(_: QueryWasmxParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryWasmxParamsRequest;
    fromPartial(_: Partial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest;
    fromAmino(_: QueryWasmxParamsRequestAmino): QueryWasmxParamsRequest;
    toAmino(_: QueryWasmxParamsRequest): QueryWasmxParamsRequestAmino;
    fromAminoMsg(object: QueryWasmxParamsRequestAminoMsg): QueryWasmxParamsRequest;
    fromProtoMsg(message: QueryWasmxParamsRequestProtoMsg): QueryWasmxParamsRequest;
    toProto(message: QueryWasmxParamsRequest): Uint8Array;
    toProtoMsg(message: QueryWasmxParamsRequest): QueryWasmxParamsRequestProtoMsg;
};
export declare const QueryWasmxParamsResponse: {
    typeUrl: string;
    encode(message: QueryWasmxParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWasmxParamsResponse;
    fromPartial(object: Partial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse;
    fromAmino(object: QueryWasmxParamsResponseAmino): QueryWasmxParamsResponse;
    toAmino(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseAmino;
    fromAminoMsg(object: QueryWasmxParamsResponseAminoMsg): QueryWasmxParamsResponse;
    fromProtoMsg(message: QueryWasmxParamsResponseProtoMsg): QueryWasmxParamsResponse;
    toProto(message: QueryWasmxParamsResponse): Uint8Array;
    toProtoMsg(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
export declare const QueryContractRegistrationInfoRequest: {
    typeUrl: string;
    encode(message: QueryContractRegistrationInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractRegistrationInfoRequest;
    fromPartial(object: Partial<QueryContractRegistrationInfoRequest>): QueryContractRegistrationInfoRequest;
    fromAmino(object: QueryContractRegistrationInfoRequestAmino): QueryContractRegistrationInfoRequest;
    toAmino(message: QueryContractRegistrationInfoRequest): QueryContractRegistrationInfoRequestAmino;
    fromAminoMsg(object: QueryContractRegistrationInfoRequestAminoMsg): QueryContractRegistrationInfoRequest;
    fromProtoMsg(message: QueryContractRegistrationInfoRequestProtoMsg): QueryContractRegistrationInfoRequest;
    toProto(message: QueryContractRegistrationInfoRequest): Uint8Array;
    toProtoMsg(message: QueryContractRegistrationInfoRequest): QueryContractRegistrationInfoRequestProtoMsg;
};
export declare const QueryContractRegistrationInfoResponse: {
    typeUrl: string;
    encode(message: QueryContractRegistrationInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractRegistrationInfoResponse;
    fromPartial(object: Partial<QueryContractRegistrationInfoResponse>): QueryContractRegistrationInfoResponse;
    fromAmino(object: QueryContractRegistrationInfoResponseAmino): QueryContractRegistrationInfoResponse;
    toAmino(message: QueryContractRegistrationInfoResponse): QueryContractRegistrationInfoResponseAmino;
    fromAminoMsg(object: QueryContractRegistrationInfoResponseAminoMsg): QueryContractRegistrationInfoResponse;
    fromProtoMsg(message: QueryContractRegistrationInfoResponseProtoMsg): QueryContractRegistrationInfoResponse;
    toProto(message: QueryContractRegistrationInfoResponse): Uint8Array;
    toProtoMsg(message: QueryContractRegistrationInfoResponse): QueryContractRegistrationInfoResponseProtoMsg;
};
