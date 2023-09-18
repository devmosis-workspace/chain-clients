import { Params, ParamsAmino, ParamsSDKType, State, StateAmino, StateSDKType } from "./vbank";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/agoric.vbank.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/agoric.vbank.QueryParamsRequest";
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
    typeUrl: "/agoric.vbank.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/agoric.vbank.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequest {
}
export interface QueryStateRequestProtoMsg {
    typeUrl: "/agoric.vbank.QueryStateRequest";
    value: Uint8Array;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequestAmino {
}
export interface QueryStateRequestAminoMsg {
    type: "/agoric.vbank.QueryStateRequest";
    value: QueryStateRequestAmino;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequestSDKType {
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponse {
    /** state defines the parameters of the module. */
    state: State;
}
export interface QueryStateResponseProtoMsg {
    typeUrl: "/agoric.vbank.QueryStateResponse";
    value: Uint8Array;
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponseAmino {
    /** state defines the parameters of the module. */
    state?: StateAmino;
}
export interface QueryStateResponseAminoMsg {
    type: "/agoric.vbank.QueryStateResponse";
    value: QueryStateResponseAmino;
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponseSDKType {
    state: StateSDKType;
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
export declare const QueryStateRequest: {
    typeUrl: string;
    encode(_: QueryStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryStateRequest;
    fromPartial(_: Partial<QueryStateRequest>): QueryStateRequest;
    fromAmino(_: QueryStateRequestAmino): QueryStateRequest;
    toAmino(_: QueryStateRequest): QueryStateRequestAmino;
    fromAminoMsg(object: QueryStateRequestAminoMsg): QueryStateRequest;
    fromProtoMsg(message: QueryStateRequestProtoMsg): QueryStateRequest;
    toProto(message: QueryStateRequest): Uint8Array;
    toProtoMsg(message: QueryStateRequest): QueryStateRequestProtoMsg;
};
export declare const QueryStateResponse: {
    typeUrl: string;
    encode(message: QueryStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStateResponse;
    fromPartial(object: Partial<QueryStateResponse>): QueryStateResponse;
    fromAmino(object: QueryStateResponseAmino): QueryStateResponse;
    toAmino(message: QueryStateResponse): QueryStateResponseAmino;
    fromAminoMsg(object: QueryStateResponseAminoMsg): QueryStateResponse;
    fromProtoMsg(message: QueryStateResponseProtoMsg): QueryStateResponse;
    toProto(message: QueryStateResponse): Uint8Array;
    toProtoMsg(message: QueryStateResponse): QueryStateResponseProtoMsg;
};
