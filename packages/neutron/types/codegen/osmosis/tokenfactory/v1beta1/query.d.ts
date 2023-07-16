import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryDenomAuthorityMetadataRequest {
    creator: string;
    subdenom: string;
}
export interface QueryDenomAuthorityMetadataRequestSDKType {
    creator: string;
    subdenom: string;
}
export interface QueryDenomAuthorityMetadataResponse {
    authorityMetadata?: DenomAuthorityMetadata;
}
export interface QueryDenomAuthorityMetadataResponseSDKType {
    authority_metadata?: DenomAuthorityMetadataSDKType;
}
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
export interface QueryDenomsFromCreatorRequestSDKType {
    creator: string;
}
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
export interface QueryDenomsFromCreatorResponseSDKType {
    denoms: string[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDenomAuthorityMetadataRequest: {
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomAuthorityMetadataRequest;
    fromPartial(object: Partial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomAuthorityMetadataResponse;
    fromPartial(object: Partial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse;
};
export declare const QueryDenomsFromCreatorRequest: {
    encode(message: QueryDenomsFromCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomsFromCreatorRequest;
    fromPartial(object: Partial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
};
export declare const QueryDenomsFromCreatorResponse: {
    encode(message: QueryDenomsFromCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomsFromCreatorResponse;
    fromPartial(object: Partial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
};
