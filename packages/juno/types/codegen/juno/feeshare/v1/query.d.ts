import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeeShare, FeeShareAmino, FeeShareSDKType } from "./feeshare";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryFeeSharesRequestProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryFeeSharesRequest";
    value: Uint8Array;
}
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryFeeSharesRequestAminoMsg {
    type: "/juno.feeshare.v1.QueryFeeSharesRequest";
    value: QueryFeeSharesRequestAmino;
}
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponse {
    /** FeeShare is a slice of all stored Reveneue */
    feeshare: FeeShare[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryFeeSharesResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryFeeSharesResponse";
    value: Uint8Array;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponseAmino {
    /** FeeShare is a slice of all stored Reveneue */
    feeshare?: FeeShareAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryFeeSharesResponseAminoMsg {
    type: "/juno.feeshare.v1.QueryFeeSharesResponse";
    value: QueryFeeSharesResponseAmino;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponseSDKType {
    feeshare: FeeShareSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequest {
    /** contract_address of a registered contract in bech32 format */
    contractAddress: string;
}
export interface QueryFeeShareRequestProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryFeeShareRequest";
    value: Uint8Array;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequestAmino {
    /** contract_address of a registered contract in bech32 format */
    contract_address?: string;
}
export interface QueryFeeShareRequestAminoMsg {
    type: "/juno.feeshare.v1.QueryFeeShareRequest";
    value: QueryFeeShareRequestAmino;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequestSDKType {
    contract_address: string;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponse {
    /** FeeShare is a stored Reveneue for the queried contract */
    feeshare: FeeShare;
}
export interface QueryFeeShareResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryFeeShareResponse";
    value: Uint8Array;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponseAmino {
    /** FeeShare is a stored Reveneue for the queried contract */
    feeshare?: FeeShareAmino;
}
export interface QueryFeeShareResponseAminoMsg {
    type: "/juno.feeshare.v1.QueryFeeShareResponse";
    value: QueryFeeShareResponseAmino;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponseSDKType {
    feeshare: FeeShareSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/juno.feeshare.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params is the returned FeeShare parameter */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params is the returned FeeShare parameter */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/juno.feeshare.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequest {
    /** deployer_address in bech32 format */
    deployerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDeployerFeeSharesRequestProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesRequest";
    value: Uint8Array;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequestAmino {
    /** deployer_address in bech32 format */
    deployer_address?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDeployerFeeSharesRequestAminoMsg {
    type: "/juno.feeshare.v1.QueryDeployerFeeSharesRequest";
    value: QueryDeployerFeeSharesRequestAmino;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequestSDKType {
    deployer_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponse {
    /**
     * contract_addresses is the slice of registered contract addresses for a
     * deployer
     */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDeployerFeeSharesResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryDeployerFeeSharesResponse";
    value: Uint8Array;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponseAmino {
    /**
     * contract_addresses is the slice of registered contract addresses for a
     * deployer
     */
    contract_addresses?: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDeployerFeeSharesResponseAminoMsg {
    type: "/juno.feeshare.v1.QueryDeployerFeeSharesResponse";
    value: QueryDeployerFeeSharesResponseAmino;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequest {
    /** withdrawer_address in bech32 format */
    withdrawerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryWithdrawerFeeSharesRequestProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesRequest";
    value: Uint8Array;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequestAmino {
    /** withdrawer_address in bech32 format */
    withdrawer_address?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryWithdrawerFeeSharesRequestAminoMsg {
    type: "/juno.feeshare.v1.QueryWithdrawerFeeSharesRequest";
    value: QueryWithdrawerFeeSharesRequestAmino;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequestSDKType {
    withdrawer_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponse {
    /**
     * contract_addresses is the slice of registered contract addresses for a
     * withdrawer
     */
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryWithdrawerFeeSharesResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.QueryWithdrawerFeeSharesResponse";
    value: Uint8Array;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponseAmino {
    /**
     * contract_addresses is the slice of registered contract addresses for a
     * withdrawer
     */
    contract_addresses?: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryWithdrawerFeeSharesResponseAminoMsg {
    type: "/juno.feeshare.v1.QueryWithdrawerFeeSharesResponse";
    value: QueryWithdrawerFeeSharesResponseAmino;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryFeeSharesRequest: {
    typeUrl: string;
    encode(message: QueryFeeSharesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeSharesRequest;
    fromPartial(object: Partial<QueryFeeSharesRequest>): QueryFeeSharesRequest;
    fromAmino(object: QueryFeeSharesRequestAmino): QueryFeeSharesRequest;
    toAmino(message: QueryFeeSharesRequest): QueryFeeSharesRequestAmino;
    fromAminoMsg(object: QueryFeeSharesRequestAminoMsg): QueryFeeSharesRequest;
    fromProtoMsg(message: QueryFeeSharesRequestProtoMsg): QueryFeeSharesRequest;
    toProto(message: QueryFeeSharesRequest): Uint8Array;
    toProtoMsg(message: QueryFeeSharesRequest): QueryFeeSharesRequestProtoMsg;
};
export declare const QueryFeeSharesResponse: {
    typeUrl: string;
    encode(message: QueryFeeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeSharesResponse;
    fromPartial(object: Partial<QueryFeeSharesResponse>): QueryFeeSharesResponse;
    fromAmino(object: QueryFeeSharesResponseAmino): QueryFeeSharesResponse;
    toAmino(message: QueryFeeSharesResponse): QueryFeeSharesResponseAmino;
    fromAminoMsg(object: QueryFeeSharesResponseAminoMsg): QueryFeeSharesResponse;
    fromProtoMsg(message: QueryFeeSharesResponseProtoMsg): QueryFeeSharesResponse;
    toProto(message: QueryFeeSharesResponse): Uint8Array;
    toProtoMsg(message: QueryFeeSharesResponse): QueryFeeSharesResponseProtoMsg;
};
export declare const QueryFeeShareRequest: {
    typeUrl: string;
    encode(message: QueryFeeShareRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeShareRequest;
    fromPartial(object: Partial<QueryFeeShareRequest>): QueryFeeShareRequest;
    fromAmino(object: QueryFeeShareRequestAmino): QueryFeeShareRequest;
    toAmino(message: QueryFeeShareRequest): QueryFeeShareRequestAmino;
    fromAminoMsg(object: QueryFeeShareRequestAminoMsg): QueryFeeShareRequest;
    fromProtoMsg(message: QueryFeeShareRequestProtoMsg): QueryFeeShareRequest;
    toProto(message: QueryFeeShareRequest): Uint8Array;
    toProtoMsg(message: QueryFeeShareRequest): QueryFeeShareRequestProtoMsg;
};
export declare const QueryFeeShareResponse: {
    typeUrl: string;
    encode(message: QueryFeeShareResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeShareResponse;
    fromPartial(object: Partial<QueryFeeShareResponse>): QueryFeeShareResponse;
    fromAmino(object: QueryFeeShareResponseAmino): QueryFeeShareResponse;
    toAmino(message: QueryFeeShareResponse): QueryFeeShareResponseAmino;
    fromAminoMsg(object: QueryFeeShareResponseAminoMsg): QueryFeeShareResponse;
    fromProtoMsg(message: QueryFeeShareResponseProtoMsg): QueryFeeShareResponse;
    toProto(message: QueryFeeShareResponse): Uint8Array;
    toProtoMsg(message: QueryFeeShareResponse): QueryFeeShareResponseProtoMsg;
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
export declare const QueryDeployerFeeSharesRequest: {
    typeUrl: string;
    encode(message: QueryDeployerFeeSharesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeployerFeeSharesRequest;
    fromPartial(object: Partial<QueryDeployerFeeSharesRequest>): QueryDeployerFeeSharesRequest;
    fromAmino(object: QueryDeployerFeeSharesRequestAmino): QueryDeployerFeeSharesRequest;
    toAmino(message: QueryDeployerFeeSharesRequest): QueryDeployerFeeSharesRequestAmino;
    fromAminoMsg(object: QueryDeployerFeeSharesRequestAminoMsg): QueryDeployerFeeSharesRequest;
    fromProtoMsg(message: QueryDeployerFeeSharesRequestProtoMsg): QueryDeployerFeeSharesRequest;
    toProto(message: QueryDeployerFeeSharesRequest): Uint8Array;
    toProtoMsg(message: QueryDeployerFeeSharesRequest): QueryDeployerFeeSharesRequestProtoMsg;
};
export declare const QueryDeployerFeeSharesResponse: {
    typeUrl: string;
    encode(message: QueryDeployerFeeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeployerFeeSharesResponse;
    fromPartial(object: Partial<QueryDeployerFeeSharesResponse>): QueryDeployerFeeSharesResponse;
    fromAmino(object: QueryDeployerFeeSharesResponseAmino): QueryDeployerFeeSharesResponse;
    toAmino(message: QueryDeployerFeeSharesResponse): QueryDeployerFeeSharesResponseAmino;
    fromAminoMsg(object: QueryDeployerFeeSharesResponseAminoMsg): QueryDeployerFeeSharesResponse;
    fromProtoMsg(message: QueryDeployerFeeSharesResponseProtoMsg): QueryDeployerFeeSharesResponse;
    toProto(message: QueryDeployerFeeSharesResponse): Uint8Array;
    toProtoMsg(message: QueryDeployerFeeSharesResponse): QueryDeployerFeeSharesResponseProtoMsg;
};
export declare const QueryWithdrawerFeeSharesRequest: {
    typeUrl: string;
    encode(message: QueryWithdrawerFeeSharesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWithdrawerFeeSharesRequest;
    fromPartial(object: Partial<QueryWithdrawerFeeSharesRequest>): QueryWithdrawerFeeSharesRequest;
    fromAmino(object: QueryWithdrawerFeeSharesRequestAmino): QueryWithdrawerFeeSharesRequest;
    toAmino(message: QueryWithdrawerFeeSharesRequest): QueryWithdrawerFeeSharesRequestAmino;
    fromAminoMsg(object: QueryWithdrawerFeeSharesRequestAminoMsg): QueryWithdrawerFeeSharesRequest;
    fromProtoMsg(message: QueryWithdrawerFeeSharesRequestProtoMsg): QueryWithdrawerFeeSharesRequest;
    toProto(message: QueryWithdrawerFeeSharesRequest): Uint8Array;
    toProtoMsg(message: QueryWithdrawerFeeSharesRequest): QueryWithdrawerFeeSharesRequestProtoMsg;
};
export declare const QueryWithdrawerFeeSharesResponse: {
    typeUrl: string;
    encode(message: QueryWithdrawerFeeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWithdrawerFeeSharesResponse;
    fromPartial(object: Partial<QueryWithdrawerFeeSharesResponse>): QueryWithdrawerFeeSharesResponse;
    fromAmino(object: QueryWithdrawerFeeSharesResponseAmino): QueryWithdrawerFeeSharesResponse;
    toAmino(message: QueryWithdrawerFeeSharesResponse): QueryWithdrawerFeeSharesResponseAmino;
    fromAminoMsg(object: QueryWithdrawerFeeSharesResponseAminoMsg): QueryWithdrawerFeeSharesResponse;
    fromProtoMsg(message: QueryWithdrawerFeeSharesResponseProtoMsg): QueryWithdrawerFeeSharesResponse;
    toProto(message: QueryWithdrawerFeeSharesResponse): Uint8Array;
    toProtoMsg(message: QueryWithdrawerFeeSharesResponse): QueryWithdrawerFeeSharesResponseProtoMsg;
};
