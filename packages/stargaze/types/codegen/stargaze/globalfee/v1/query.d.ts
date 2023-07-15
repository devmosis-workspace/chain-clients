import { Params, ParamsSDKType, CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryCodeAuthorizationRequest {
    codeId: Long;
}
export interface QueryCodeAuthorizationRequestSDKType {
    code_id: Long;
}
export interface QueryCodeAuthorizationResponse {
    methods: string[];
}
export interface QueryCodeAuthorizationResponseSDKType {
    methods: string[];
}
export interface QueryContractAuthorizationRequest {
    contractAddress: string;
}
export interface QueryContractAuthorizationRequestSDKType {
    contract_address: string;
}
export interface QueryContractAuthorizationResponse {
    methods: string[];
}
export interface QueryContractAuthorizationResponseSDKType {
    methods: string[];
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryAuthorizationsRequest {
}
export interface QueryAuthorizationsRequestSDKType {
}
export interface QueryAuthorizationsResponse {
    codeAuthorizations: CodeAuthorization[];
    contractAuthorizations: ContractAuthorization[];
}
export interface QueryAuthorizationsResponseSDKType {
    code_authorizations: CodeAuthorizationSDKType[];
    contract_authorizations: ContractAuthorizationSDKType[];
}
export declare const QueryCodeAuthorizationRequest: {
    encode(message: QueryCodeAuthorizationRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCodeAuthorizationRequest;
    fromPartial(object: Partial<QueryCodeAuthorizationRequest>): QueryCodeAuthorizationRequest;
};
export declare const QueryCodeAuthorizationResponse: {
    encode(message: QueryCodeAuthorizationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCodeAuthorizationResponse;
    fromPartial(object: Partial<QueryCodeAuthorizationResponse>): QueryCodeAuthorizationResponse;
};
export declare const QueryContractAuthorizationRequest: {
    encode(message: QueryContractAuthorizationRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractAuthorizationRequest;
    fromPartial(object: Partial<QueryContractAuthorizationRequest>): QueryContractAuthorizationRequest;
};
export declare const QueryContractAuthorizationResponse: {
    encode(message: QueryContractAuthorizationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractAuthorizationResponse;
    fromPartial(object: Partial<QueryContractAuthorizationResponse>): QueryContractAuthorizationResponse;
};
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
export declare const QueryAuthorizationsRequest: {
    encode(_: QueryAuthorizationsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAuthorizationsRequest;
    fromPartial(_: Partial<QueryAuthorizationsRequest>): QueryAuthorizationsRequest;
};
export declare const QueryAuthorizationsResponse: {
    encode(message: QueryAuthorizationsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAuthorizationsResponse;
    fromPartial(object: Partial<QueryAuthorizationsResponse>): QueryAuthorizationsResponse;
};
