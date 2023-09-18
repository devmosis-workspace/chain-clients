import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
    creator: string;
    subDenom: string;
}
export interface QueryDenomAuthorityMetadataRequestProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
    value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestAmino {
    creator: string;
    sub_denom: string;
}
export interface QueryDenomAuthorityMetadataRequestAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
    value: QueryDenomAuthorityMetadataRequestAmino;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
    creator: string;
    sub_denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
    authorityMetadata: DenomAuthorityMetadata;
}
export interface QueryDenomAuthorityMetadataResponseProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseAmino {
    authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface QueryDenomAuthorityMetadataResponseAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
    value: QueryDenomAuthorityMetadataResponseAmino;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
    authority_metadata: DenomAuthorityMetadataSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
export interface QueryDenomsFromCreatorRequestProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
    value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestAmino {
    creator: string;
}
export interface QueryDenomsFromCreatorRequestAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
    value: QueryDenomsFromCreatorRequestAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
export interface QueryDenomsFromCreatorResponseProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
    value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseAmino {
    denoms: string[];
}
export interface QueryDenomsFromCreatorResponseAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
    value: QueryDenomsFromCreatorResponseAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
    denoms: string[];
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/TokenfactoryModuleState RPC method.
 */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryModuleStateRequest";
    value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/TokenfactoryModuleState RPC method.
 */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/TokenfactoryModuleState RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/TokenfactoryModuleState RPC method.
 */
export interface QueryModuleStateResponse {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/TokenfactoryModuleState RPC method.
     */
    state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.QueryModuleStateResponse";
    value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/TokenfactoryModuleState RPC method.
 */
export interface QueryModuleStateResponseAmino {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/TokenfactoryModuleState RPC method.
     */
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.tokenfactory.v1beta1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/TokenfactoryModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
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
export declare const QueryDenomAuthorityMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomAuthorityMetadataRequest;
    fromPartial(object: Partial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest;
    fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest;
    toAmino(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomAuthorityMetadataRequestAminoMsg): QueryDenomAuthorityMetadataRequest;
    fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg): QueryDenomAuthorityMetadataRequest;
    toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomAuthorityMetadataResponse;
    fromPartial(object: Partial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse;
    fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse;
    toAmino(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomAuthorityMetadataResponseAminoMsg): QueryDenomAuthorityMetadataResponse;
    fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg): QueryDenomAuthorityMetadataResponse;
    toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg;
};
export declare const QueryDenomsFromCreatorRequest: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomsFromCreatorRequest;
    fromPartial(object: Partial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
    fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest;
    toAmino(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAmino;
    fromAminoMsg(object: QueryDenomsFromCreatorRequestAminoMsg): QueryDenomsFromCreatorRequest;
    fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg): QueryDenomsFromCreatorRequest;
    toProto(message: QueryDenomsFromCreatorRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg;
};
export declare const QueryDenomsFromCreatorResponse: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomsFromCreatorResponse;
    fromPartial(object: Partial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
    fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse;
    toAmino(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAmino;
    fromAminoMsg(object: QueryDenomsFromCreatorResponseAminoMsg): QueryDenomsFromCreatorResponse;
    fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg): QueryDenomsFromCreatorResponse;
    toProto(message: QueryDenomsFromCreatorResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg;
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
