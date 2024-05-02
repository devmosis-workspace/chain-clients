import { Params, ParamsAmino, ParamsSDKType } from "./cron";
import { BinaryWriter } from "../../../../binary";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {
}
export interface QueryListPrivilegedRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
    value: Uint8Array;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestAmino {
}
export interface QueryListPrivilegedRequestAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
    value: QueryListPrivilegedRequestAmino;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestSDKType {
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
    /**
     * contract_addresses holds all the smart contract addresses which have
     * privilege status.
     */
    contractAddresses: string[];
}
export interface QueryListPrivilegedResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
    value: Uint8Array;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseAmino {
    /**
     * contract_addresses holds all the smart contract addresses which have
     * privilege status.
     */
    contract_addresses?: string[];
}
export interface QueryListPrivilegedResponseAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
    value: QueryListPrivilegedResponseAmino;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseSDKType {
    contract_addresses: string[];
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC
 * method.
 */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC
 * method.
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC
 * method.
 */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryListPrivilegedRequest: {
    typeUrl: string;
    encode(_: QueryListPrivilegedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryListPrivilegedRequest;
    fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest;
    fromAmino(_: QueryListPrivilegedRequestAmino): QueryListPrivilegedRequest;
    toAmino(_: QueryListPrivilegedRequest): QueryListPrivilegedRequestAmino;
    fromAminoMsg(object: QueryListPrivilegedRequestAminoMsg): QueryListPrivilegedRequest;
    fromProtoMsg(message: QueryListPrivilegedRequestProtoMsg): QueryListPrivilegedRequest;
    toProto(message: QueryListPrivilegedRequest): Uint8Array;
    toProtoMsg(message: QueryListPrivilegedRequest): QueryListPrivilegedRequestProtoMsg;
};
export declare const QueryListPrivilegedResponse: {
    typeUrl: string;
    encode(message: QueryListPrivilegedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListPrivilegedResponse;
    fromPartial(object: Partial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse;
    fromAmino(object: QueryListPrivilegedResponseAmino): QueryListPrivilegedResponse;
    toAmino(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseAmino;
    fromAminoMsg(object: QueryListPrivilegedResponseAminoMsg): QueryListPrivilegedResponse;
    fromProtoMsg(message: QueryListPrivilegedResponseProtoMsg): QueryListPrivilegedResponse;
    toProto(message: QueryListPrivilegedResponse): Uint8Array;
    toProtoMsg(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseProtoMsg;
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
