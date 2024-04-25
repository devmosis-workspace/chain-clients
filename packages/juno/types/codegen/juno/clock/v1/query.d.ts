import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ClockContract, ClockContractAmino, ClockContractSDKType } from "./clock";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContracts {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClockContractsProtoMsg {
    typeUrl: "/juno.clock.v1.QueryClockContracts";
    value: Uint8Array;
}
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClockContractsAminoMsg {
    type: "/juno.clock.v1.QueryClockContracts";
    value: QueryClockContractsAmino;
}
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponse {
    /** clock_contracts are the clock contracts. */
    clockContracts: ClockContract[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClockContractsResponseProtoMsg {
    typeUrl: "/juno.clock.v1.QueryClockContractsResponse";
    value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponseAmino {
    /** clock_contracts are the clock contracts. */
    clock_contracts?: ClockContractAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClockContractsResponseAminoMsg {
    type: "/juno.clock.v1.QueryClockContractsResponse";
    value: QueryClockContractsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponseSDKType {
    clock_contracts: ClockContractSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContract {
    /** contract_address is the address of the contract to query. */
    contractAddress: string;
}
export interface QueryClockContractProtoMsg {
    typeUrl: "/juno.clock.v1.QueryClockContract";
    value: Uint8Array;
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContractAmino {
    /** contract_address is the address of the contract to query. */
    contract_address?: string;
}
export interface QueryClockContractAminoMsg {
    type: "/juno.clock.v1.QueryClockContract";
    value: QueryClockContractAmino;
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContractSDKType {
    contract_address: string;
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponse {
    /** contract is the clock contract. */
    clockContract: ClockContract;
}
export interface QueryClockContractResponseProtoMsg {
    typeUrl: "/juno.clock.v1.QueryClockContractResponse";
    value: Uint8Array;
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponseAmino {
    /** contract is the clock contract. */
    clock_contract?: ClockContractAmino;
}
export interface QueryClockContractResponseAminoMsg {
    type: "/juno.clock.v1.QueryClockContractResponse";
    value: QueryClockContractResponseAmino;
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponseSDKType {
    clock_contract: ClockContractSDKType;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/juno.clock.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/juno.clock.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestSDKType {
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/juno.clock.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/juno.clock.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryClockContracts: {
    typeUrl: string;
    encode(message: QueryClockContracts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClockContracts;
    fromPartial(object: Partial<QueryClockContracts>): QueryClockContracts;
    fromAmino(object: QueryClockContractsAmino): QueryClockContracts;
    toAmino(message: QueryClockContracts): QueryClockContractsAmino;
    fromAminoMsg(object: QueryClockContractsAminoMsg): QueryClockContracts;
    fromProtoMsg(message: QueryClockContractsProtoMsg): QueryClockContracts;
    toProto(message: QueryClockContracts): Uint8Array;
    toProtoMsg(message: QueryClockContracts): QueryClockContractsProtoMsg;
};
export declare const QueryClockContractsResponse: {
    typeUrl: string;
    encode(message: QueryClockContractsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClockContractsResponse;
    fromPartial(object: Partial<QueryClockContractsResponse>): QueryClockContractsResponse;
    fromAmino(object: QueryClockContractsResponseAmino): QueryClockContractsResponse;
    toAmino(message: QueryClockContractsResponse): QueryClockContractsResponseAmino;
    fromAminoMsg(object: QueryClockContractsResponseAminoMsg): QueryClockContractsResponse;
    fromProtoMsg(message: QueryClockContractsResponseProtoMsg): QueryClockContractsResponse;
    toProto(message: QueryClockContractsResponse): Uint8Array;
    toProtoMsg(message: QueryClockContractsResponse): QueryClockContractsResponseProtoMsg;
};
export declare const QueryClockContract: {
    typeUrl: string;
    encode(message: QueryClockContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClockContract;
    fromPartial(object: Partial<QueryClockContract>): QueryClockContract;
    fromAmino(object: QueryClockContractAmino): QueryClockContract;
    toAmino(message: QueryClockContract): QueryClockContractAmino;
    fromAminoMsg(object: QueryClockContractAminoMsg): QueryClockContract;
    fromProtoMsg(message: QueryClockContractProtoMsg): QueryClockContract;
    toProto(message: QueryClockContract): Uint8Array;
    toProtoMsg(message: QueryClockContract): QueryClockContractProtoMsg;
};
export declare const QueryClockContractResponse: {
    typeUrl: string;
    encode(message: QueryClockContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClockContractResponse;
    fromPartial(object: Partial<QueryClockContractResponse>): QueryClockContractResponse;
    fromAmino(object: QueryClockContractResponseAmino): QueryClockContractResponse;
    toAmino(message: QueryClockContractResponse): QueryClockContractResponseAmino;
    fromAminoMsg(object: QueryClockContractResponseAminoMsg): QueryClockContractResponse;
    fromProtoMsg(message: QueryClockContractResponseProtoMsg): QueryClockContractResponse;
    toProto(message: QueryClockContractResponse): Uint8Array;
    toProtoMsg(message: QueryClockContractResponse): QueryClockContractResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
