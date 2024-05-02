import { Params, ParamsAmino, ParamsSDKType, CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../../binary";
export interface QueryCodeAuthorizationRequest {
    codeId: bigint;
}
export interface QueryCodeAuthorizationRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationRequest";
    value: Uint8Array;
}
export interface QueryCodeAuthorizationRequestAmino {
    code_id?: string;
}
export interface QueryCodeAuthorizationRequestAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationRequest";
    value: QueryCodeAuthorizationRequestAmino;
}
export interface QueryCodeAuthorizationRequestSDKType {
    code_id: bigint;
}
export interface QueryCodeAuthorizationResponse {
    methods: string[];
}
export interface QueryCodeAuthorizationResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationResponse";
    value: Uint8Array;
}
export interface QueryCodeAuthorizationResponseAmino {
    methods?: string[];
}
export interface QueryCodeAuthorizationResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationResponse";
    value: QueryCodeAuthorizationResponseAmino;
}
export interface QueryCodeAuthorizationResponseSDKType {
    methods: string[];
}
export interface QueryContractAuthorizationRequest {
    contractAddress: string;
}
export interface QueryContractAuthorizationRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationRequest";
    value: Uint8Array;
}
export interface QueryContractAuthorizationRequestAmino {
    contract_address?: string;
}
export interface QueryContractAuthorizationRequestAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationRequest";
    value: QueryContractAuthorizationRequestAmino;
}
export interface QueryContractAuthorizationRequestSDKType {
    contract_address: string;
}
export interface QueryContractAuthorizationResponse {
    methods: string[];
}
export interface QueryContractAuthorizationResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationResponse";
    value: Uint8Array;
}
export interface QueryContractAuthorizationResponseAmino {
    methods?: string[];
}
export interface QueryContractAuthorizationResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationResponse";
    value: QueryContractAuthorizationResponseAmino;
}
export interface QueryContractAuthorizationResponseSDKType {
    methods: string[];
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryAuthorizationsRequest {
}
export interface QueryAuthorizationsRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsRequest";
    value: Uint8Array;
}
export interface QueryAuthorizationsRequestAmino {
}
export interface QueryAuthorizationsRequestAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsRequest";
    value: QueryAuthorizationsRequestAmino;
}
export interface QueryAuthorizationsRequestSDKType {
}
export interface QueryAuthorizationsResponse {
    codeAuthorizations: CodeAuthorization[];
    contractAuthorizations: ContractAuthorization[];
}
export interface QueryAuthorizationsResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsResponse";
    value: Uint8Array;
}
export interface QueryAuthorizationsResponseAmino {
    code_authorizations?: CodeAuthorizationAmino[];
    contract_authorizations?: ContractAuthorizationAmino[];
}
export interface QueryAuthorizationsResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsResponse";
    value: QueryAuthorizationsResponseAmino;
}
export interface QueryAuthorizationsResponseSDKType {
    code_authorizations: CodeAuthorizationSDKType[];
    contract_authorizations: ContractAuthorizationSDKType[];
}
export declare const QueryCodeAuthorizationRequest: {
    typeUrl: string;
    encode(message: QueryCodeAuthorizationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCodeAuthorizationRequest;
    fromPartial(object: Partial<QueryCodeAuthorizationRequest>): QueryCodeAuthorizationRequest;
    fromAmino(object: QueryCodeAuthorizationRequestAmino): QueryCodeAuthorizationRequest;
    toAmino(message: QueryCodeAuthorizationRequest): QueryCodeAuthorizationRequestAmino;
    fromAminoMsg(object: QueryCodeAuthorizationRequestAminoMsg): QueryCodeAuthorizationRequest;
    fromProtoMsg(message: QueryCodeAuthorizationRequestProtoMsg): QueryCodeAuthorizationRequest;
    toProto(message: QueryCodeAuthorizationRequest): Uint8Array;
    toProtoMsg(message: QueryCodeAuthorizationRequest): QueryCodeAuthorizationRequestProtoMsg;
};
export declare const QueryCodeAuthorizationResponse: {
    typeUrl: string;
    encode(message: QueryCodeAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCodeAuthorizationResponse;
    fromPartial(object: Partial<QueryCodeAuthorizationResponse>): QueryCodeAuthorizationResponse;
    fromAmino(object: QueryCodeAuthorizationResponseAmino): QueryCodeAuthorizationResponse;
    toAmino(message: QueryCodeAuthorizationResponse): QueryCodeAuthorizationResponseAmino;
    fromAminoMsg(object: QueryCodeAuthorizationResponseAminoMsg): QueryCodeAuthorizationResponse;
    fromProtoMsg(message: QueryCodeAuthorizationResponseProtoMsg): QueryCodeAuthorizationResponse;
    toProto(message: QueryCodeAuthorizationResponse): Uint8Array;
    toProtoMsg(message: QueryCodeAuthorizationResponse): QueryCodeAuthorizationResponseProtoMsg;
};
export declare const QueryContractAuthorizationRequest: {
    typeUrl: string;
    encode(message: QueryContractAuthorizationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractAuthorizationRequest;
    fromPartial(object: Partial<QueryContractAuthorizationRequest>): QueryContractAuthorizationRequest;
    fromAmino(object: QueryContractAuthorizationRequestAmino): QueryContractAuthorizationRequest;
    toAmino(message: QueryContractAuthorizationRequest): QueryContractAuthorizationRequestAmino;
    fromAminoMsg(object: QueryContractAuthorizationRequestAminoMsg): QueryContractAuthorizationRequest;
    fromProtoMsg(message: QueryContractAuthorizationRequestProtoMsg): QueryContractAuthorizationRequest;
    toProto(message: QueryContractAuthorizationRequest): Uint8Array;
    toProtoMsg(message: QueryContractAuthorizationRequest): QueryContractAuthorizationRequestProtoMsg;
};
export declare const QueryContractAuthorizationResponse: {
    typeUrl: string;
    encode(message: QueryContractAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractAuthorizationResponse;
    fromPartial(object: Partial<QueryContractAuthorizationResponse>): QueryContractAuthorizationResponse;
    fromAmino(object: QueryContractAuthorizationResponseAmino): QueryContractAuthorizationResponse;
    toAmino(message: QueryContractAuthorizationResponse): QueryContractAuthorizationResponseAmino;
    fromAminoMsg(object: QueryContractAuthorizationResponseAminoMsg): QueryContractAuthorizationResponse;
    fromProtoMsg(message: QueryContractAuthorizationResponseProtoMsg): QueryContractAuthorizationResponse;
    toProto(message: QueryContractAuthorizationResponse): Uint8Array;
    toProtoMsg(message: QueryContractAuthorizationResponse): QueryContractAuthorizationResponseProtoMsg;
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
export declare const QueryAuthorizationsRequest: {
    typeUrl: string;
    encode(_: QueryAuthorizationsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAuthorizationsRequest;
    fromPartial(_: Partial<QueryAuthorizationsRequest>): QueryAuthorizationsRequest;
    fromAmino(_: QueryAuthorizationsRequestAmino): QueryAuthorizationsRequest;
    toAmino(_: QueryAuthorizationsRequest): QueryAuthorizationsRequestAmino;
    fromAminoMsg(object: QueryAuthorizationsRequestAminoMsg): QueryAuthorizationsRequest;
    fromProtoMsg(message: QueryAuthorizationsRequestProtoMsg): QueryAuthorizationsRequest;
    toProto(message: QueryAuthorizationsRequest): Uint8Array;
    toProtoMsg(message: QueryAuthorizationsRequest): QueryAuthorizationsRequestProtoMsg;
};
export declare const QueryAuthorizationsResponse: {
    typeUrl: string;
    encode(message: QueryAuthorizationsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuthorizationsResponse;
    fromPartial(object: Partial<QueryAuthorizationsResponse>): QueryAuthorizationsResponse;
    fromAmino(object: QueryAuthorizationsResponseAmino): QueryAuthorizationsResponse;
    toAmino(message: QueryAuthorizationsResponse): QueryAuthorizationsResponseAmino;
    fromAminoMsg(object: QueryAuthorizationsResponseAminoMsg): QueryAuthorizationsResponse;
    fromProtoMsg(message: QueryAuthorizationsResponseProtoMsg): QueryAuthorizationsResponse;
    toProto(message: QueryAuthorizationsResponse): Uint8Array;
    toProtoMsg(message: QueryAuthorizationsResponse): QueryAuthorizationsResponseProtoMsg;
};
