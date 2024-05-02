import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryWriter } from "../../../binary";
export interface QueryCodeRequest {
    address: string;
}
export interface QueryCodeRequestProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryCodeRequest";
    value: Uint8Array;
}
export interface QueryCodeRequestAmino {
    address?: string;
}
export interface QueryCodeRequestAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryCodeRequest";
    value: QueryCodeRequestAmino;
}
export interface QueryCodeRequestSDKType {
    address: string;
}
export interface QueryCodeResponse {
    code: string;
}
export interface QueryCodeResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryCodeResponse";
    value: Uint8Array;
}
export interface QueryCodeResponseAmino {
    code?: string;
}
export interface QueryCodeResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryCodeResponse";
    value: QueryCodeResponseAmino;
}
export interface QueryCodeResponseSDKType {
    code: string;
}
export interface QueryAbiRequest {
    address: string;
}
export interface QueryAbiRequestProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryAbiRequest";
    value: Uint8Array;
}
export interface QueryAbiRequestAmino {
    address?: string;
}
export interface QueryAbiRequestAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryAbiRequest";
    value: QueryAbiRequestAmino;
}
export interface QueryAbiRequestSDKType {
    address: string;
}
export interface QueryAbiResponse {
    abi: string;
}
export interface QueryAbiResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryAbiResponse";
    value: Uint8Array;
}
export interface QueryAbiResponseAmino {
    abi?: string;
}
export interface QueryAbiResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryAbiResponse";
    value: QueryAbiResponseAmino;
}
export interface QueryAbiResponseSDKType {
    abi: string;
}
export interface QueryStorageRequest {
    address: string;
    key: string;
}
export interface QueryStorageRequestProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryStorageRequest";
    value: Uint8Array;
}
export interface QueryStorageRequestAmino {
    address?: string;
    key?: string;
}
export interface QueryStorageRequestAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryStorageRequest";
    value: QueryStorageRequestAmino;
}
export interface QueryStorageRequestSDKType {
    address: string;
    key: string;
}
export interface QueryStorageResponse {
    value: Uint8Array;
}
export interface QueryStorageResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryStorageResponse";
    value: Uint8Array;
}
export interface QueryStorageResponseAmino {
    value?: string;
}
export interface QueryStorageResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryStorageResponse";
    value: QueryStorageResponseAmino;
}
export interface QueryStorageResponseSDKType {
    value: Uint8Array;
}
export interface QueryAddressMetaRequest {
    address: string;
}
export interface QueryAddressMetaRequestProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaRequest";
    value: Uint8Array;
}
export interface QueryAddressMetaRequestAmino {
    address?: string;
}
export interface QueryAddressMetaRequestAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryAddressMetaRequest";
    value: QueryAddressMetaRequestAmino;
}
export interface QueryAddressMetaRequestSDKType {
    address: string;
}
export interface QueryAddressMetaResponse {
    metaHash: string;
}
export interface QueryAddressMetaResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaResponse";
    value: Uint8Array;
}
export interface QueryAddressMetaResponseAmino {
    meta_hash?: string;
}
export interface QueryAddressMetaResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryAddressMetaResponse";
    value: QueryAddressMetaResponseAmino;
}
export interface QueryAddressMetaResponseSDKType {
    meta_hash: string;
}
export interface QueryMetaRequest {
    hash: string;
}
export interface QueryMetaRequestProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryMetaRequest";
    value: Uint8Array;
}
export interface QueryMetaRequestAmino {
    hash?: string;
}
export interface QueryMetaRequestAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryMetaRequest";
    value: QueryMetaRequestAmino;
}
export interface QueryMetaRequestSDKType {
    hash: string;
}
export interface QueryMetaResponse {
    meta: string;
}
export interface QueryMetaResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryMetaResponse";
    value: Uint8Array;
}
export interface QueryMetaResponseAmino {
    meta?: string;
}
export interface QueryMetaResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryMetaResponse";
    value: QueryMetaResponseAmino;
}
export interface QueryMetaResponseSDKType {
    meta: string;
}
export interface QueryAccountRequest {
    address: string;
}
export interface QueryAccountRequestProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryAccountRequest";
    value: Uint8Array;
}
export interface QueryAccountRequestAmino {
    address?: string;
}
export interface QueryAccountRequestAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryAccountRequest";
    value: QueryAccountRequestAmino;
}
export interface QueryAccountRequestSDKType {
    address: string;
}
export interface CVMAccount {
    baseAccount?: BaseAccount;
    code: string;
    abi: string;
}
export interface CVMAccountProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.CVMAccount";
    value: Uint8Array;
}
export interface CVMAccountAmino {
    base_account?: BaseAccountAmino;
    code?: string;
    abi?: string;
}
export interface CVMAccountAminoMsg {
    type: "/shentu.cvm.v1alpha1.CVMAccount";
    value: CVMAccountAmino;
}
export interface CVMAccountSDKType {
    base_account?: BaseAccountSDKType;
    code: string;
    abi: string;
}
export interface QueryViewRequest {
    caller: string;
    callee: string;
    abiSpec: Uint8Array;
    functionName: string;
    data: Uint8Array;
}
export interface QueryViewRequestProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryViewRequest";
    value: Uint8Array;
}
export interface QueryViewRequestAmino {
    caller?: string;
    callee?: string;
    abi_spec?: string;
    function_name?: string;
    data?: string;
}
export interface QueryViewRequestAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryViewRequest";
    value: QueryViewRequestAmino;
}
export interface QueryViewRequestSDKType {
    caller: string;
    callee: string;
    abi_spec: Uint8Array;
    function_name: string;
    data: Uint8Array;
}
export interface QueryViewResponse {
    returnVars: ReturnVars[];
}
export interface QueryViewResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.QueryViewResponse";
    value: Uint8Array;
}
export interface QueryViewResponseAmino {
    return_vars?: ReturnVarsAmino[];
}
export interface QueryViewResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.QueryViewResponse";
    value: QueryViewResponseAmino;
}
export interface QueryViewResponseSDKType {
    return_vars: ReturnVarsSDKType[];
}
export interface ReturnVars {
    name: string;
    value: string;
}
export interface ReturnVarsProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.ReturnVars";
    value: Uint8Array;
}
export interface ReturnVarsAmino {
    name?: string;
    value?: string;
}
export interface ReturnVarsAminoMsg {
    type: "/shentu.cvm.v1alpha1.ReturnVars";
    value: ReturnVarsAmino;
}
export interface ReturnVarsSDKType {
    name: string;
    value: string;
}
export declare const QueryCodeRequest: {
    typeUrl: string;
    encode(message: QueryCodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCodeRequest;
    fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest;
    fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest;
    toAmino(message: QueryCodeRequest): QueryCodeRequestAmino;
    fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest;
    fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest;
    toProto(message: QueryCodeRequest): Uint8Array;
    toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    encode(message: QueryCodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCodeResponse;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
    fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse;
    toAmino(message: QueryCodeResponse): QueryCodeResponseAmino;
    fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse;
    fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse;
    toProto(message: QueryCodeResponse): Uint8Array;
    toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg;
};
export declare const QueryAbiRequest: {
    typeUrl: string;
    encode(message: QueryAbiRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAbiRequest;
    fromPartial(object: Partial<QueryAbiRequest>): QueryAbiRequest;
    fromAmino(object: QueryAbiRequestAmino): QueryAbiRequest;
    toAmino(message: QueryAbiRequest): QueryAbiRequestAmino;
    fromAminoMsg(object: QueryAbiRequestAminoMsg): QueryAbiRequest;
    fromProtoMsg(message: QueryAbiRequestProtoMsg): QueryAbiRequest;
    toProto(message: QueryAbiRequest): Uint8Array;
    toProtoMsg(message: QueryAbiRequest): QueryAbiRequestProtoMsg;
};
export declare const QueryAbiResponse: {
    typeUrl: string;
    encode(message: QueryAbiResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAbiResponse;
    fromPartial(object: Partial<QueryAbiResponse>): QueryAbiResponse;
    fromAmino(object: QueryAbiResponseAmino): QueryAbiResponse;
    toAmino(message: QueryAbiResponse): QueryAbiResponseAmino;
    fromAminoMsg(object: QueryAbiResponseAminoMsg): QueryAbiResponse;
    fromProtoMsg(message: QueryAbiResponseProtoMsg): QueryAbiResponse;
    toProto(message: QueryAbiResponse): Uint8Array;
    toProtoMsg(message: QueryAbiResponse): QueryAbiResponseProtoMsg;
};
export declare const QueryStorageRequest: {
    typeUrl: string;
    encode(message: QueryStorageRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStorageRequest;
    fromPartial(object: Partial<QueryStorageRequest>): QueryStorageRequest;
    fromAmino(object: QueryStorageRequestAmino): QueryStorageRequest;
    toAmino(message: QueryStorageRequest): QueryStorageRequestAmino;
    fromAminoMsg(object: QueryStorageRequestAminoMsg): QueryStorageRequest;
    fromProtoMsg(message: QueryStorageRequestProtoMsg): QueryStorageRequest;
    toProto(message: QueryStorageRequest): Uint8Array;
    toProtoMsg(message: QueryStorageRequest): QueryStorageRequestProtoMsg;
};
export declare const QueryStorageResponse: {
    typeUrl: string;
    encode(message: QueryStorageResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStorageResponse;
    fromPartial(object: Partial<QueryStorageResponse>): QueryStorageResponse;
    fromAmino(object: QueryStorageResponseAmino): QueryStorageResponse;
    toAmino(message: QueryStorageResponse): QueryStorageResponseAmino;
    fromAminoMsg(object: QueryStorageResponseAminoMsg): QueryStorageResponse;
    fromProtoMsg(message: QueryStorageResponseProtoMsg): QueryStorageResponse;
    toProto(message: QueryStorageResponse): Uint8Array;
    toProtoMsg(message: QueryStorageResponse): QueryStorageResponseProtoMsg;
};
export declare const QueryAddressMetaRequest: {
    typeUrl: string;
    encode(message: QueryAddressMetaRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAddressMetaRequest;
    fromPartial(object: Partial<QueryAddressMetaRequest>): QueryAddressMetaRequest;
    fromAmino(object: QueryAddressMetaRequestAmino): QueryAddressMetaRequest;
    toAmino(message: QueryAddressMetaRequest): QueryAddressMetaRequestAmino;
    fromAminoMsg(object: QueryAddressMetaRequestAminoMsg): QueryAddressMetaRequest;
    fromProtoMsg(message: QueryAddressMetaRequestProtoMsg): QueryAddressMetaRequest;
    toProto(message: QueryAddressMetaRequest): Uint8Array;
    toProtoMsg(message: QueryAddressMetaRequest): QueryAddressMetaRequestProtoMsg;
};
export declare const QueryAddressMetaResponse: {
    typeUrl: string;
    encode(message: QueryAddressMetaResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAddressMetaResponse;
    fromPartial(object: Partial<QueryAddressMetaResponse>): QueryAddressMetaResponse;
    fromAmino(object: QueryAddressMetaResponseAmino): QueryAddressMetaResponse;
    toAmino(message: QueryAddressMetaResponse): QueryAddressMetaResponseAmino;
    fromAminoMsg(object: QueryAddressMetaResponseAminoMsg): QueryAddressMetaResponse;
    fromProtoMsg(message: QueryAddressMetaResponseProtoMsg): QueryAddressMetaResponse;
    toProto(message: QueryAddressMetaResponse): Uint8Array;
    toProtoMsg(message: QueryAddressMetaResponse): QueryAddressMetaResponseProtoMsg;
};
export declare const QueryMetaRequest: {
    typeUrl: string;
    encode(message: QueryMetaRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMetaRequest;
    fromPartial(object: Partial<QueryMetaRequest>): QueryMetaRequest;
    fromAmino(object: QueryMetaRequestAmino): QueryMetaRequest;
    toAmino(message: QueryMetaRequest): QueryMetaRequestAmino;
    fromAminoMsg(object: QueryMetaRequestAminoMsg): QueryMetaRequest;
    fromProtoMsg(message: QueryMetaRequestProtoMsg): QueryMetaRequest;
    toProto(message: QueryMetaRequest): Uint8Array;
    toProtoMsg(message: QueryMetaRequest): QueryMetaRequestProtoMsg;
};
export declare const QueryMetaResponse: {
    typeUrl: string;
    encode(message: QueryMetaResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMetaResponse;
    fromPartial(object: Partial<QueryMetaResponse>): QueryMetaResponse;
    fromAmino(object: QueryMetaResponseAmino): QueryMetaResponse;
    toAmino(message: QueryMetaResponse): QueryMetaResponseAmino;
    fromAminoMsg(object: QueryMetaResponseAminoMsg): QueryMetaResponse;
    fromProtoMsg(message: QueryMetaResponseProtoMsg): QueryMetaResponse;
    toProto(message: QueryMetaResponse): Uint8Array;
    toProtoMsg(message: QueryMetaResponse): QueryMetaResponseProtoMsg;
};
export declare const QueryAccountRequest: {
    typeUrl: string;
    encode(message: QueryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountRequest;
    fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest;
    fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest;
    toAmino(message: QueryAccountRequest): QueryAccountRequestAmino;
    fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest;
    fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest;
    toProto(message: QueryAccountRequest): Uint8Array;
    toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg;
};
export declare const CVMAccount: {
    typeUrl: string;
    encode(message: CVMAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CVMAccount;
    fromPartial(object: Partial<CVMAccount>): CVMAccount;
    fromAmino(object: CVMAccountAmino): CVMAccount;
    toAmino(message: CVMAccount): CVMAccountAmino;
    fromAminoMsg(object: CVMAccountAminoMsg): CVMAccount;
    fromProtoMsg(message: CVMAccountProtoMsg): CVMAccount;
    toProto(message: CVMAccount): Uint8Array;
    toProtoMsg(message: CVMAccount): CVMAccountProtoMsg;
};
export declare const QueryViewRequest: {
    typeUrl: string;
    encode(message: QueryViewRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryViewRequest;
    fromPartial(object: Partial<QueryViewRequest>): QueryViewRequest;
    fromAmino(object: QueryViewRequestAmino): QueryViewRequest;
    toAmino(message: QueryViewRequest): QueryViewRequestAmino;
    fromAminoMsg(object: QueryViewRequestAminoMsg): QueryViewRequest;
    fromProtoMsg(message: QueryViewRequestProtoMsg): QueryViewRequest;
    toProto(message: QueryViewRequest): Uint8Array;
    toProtoMsg(message: QueryViewRequest): QueryViewRequestProtoMsg;
};
export declare const QueryViewResponse: {
    typeUrl: string;
    encode(message: QueryViewResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryViewResponse;
    fromPartial(object: Partial<QueryViewResponse>): QueryViewResponse;
    fromAmino(object: QueryViewResponseAmino): QueryViewResponse;
    toAmino(message: QueryViewResponse): QueryViewResponseAmino;
    fromAminoMsg(object: QueryViewResponseAminoMsg): QueryViewResponse;
    fromProtoMsg(message: QueryViewResponseProtoMsg): QueryViewResponse;
    toProto(message: QueryViewResponse): Uint8Array;
    toProtoMsg(message: QueryViewResponse): QueryViewResponseProtoMsg;
};
export declare const ReturnVars: {
    typeUrl: string;
    encode(message: ReturnVars, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ReturnVars;
    fromPartial(object: Partial<ReturnVars>): ReturnVars;
    fromAmino(object: ReturnVarsAmino): ReturnVars;
    toAmino(message: ReturnVars): ReturnVarsAmino;
    fromAminoMsg(object: ReturnVarsAminoMsg): ReturnVars;
    fromProtoMsg(message: ReturnVarsProtoMsg): ReturnVars;
    toProto(message: ReturnVars): Uint8Array;
    toProtoMsg(message: ReturnVars): ReturnVarsProtoMsg;
};
