import { Params, ParamsAmino, ParamsSDKType } from "./participationrewards";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/quicksilver.participationrewards.v1.QueryParamsRequest";
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
    typeUrl: "/quicksilver.participationrewards.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/quicksilver.participationrewards.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryProtocolDataRequest is the request type for querying Protocol Data. */
export interface QueryProtocolDataRequest {
    type: string;
    key: string;
}
export interface QueryProtocolDataRequestProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataRequest";
    value: Uint8Array;
}
/** QueryProtocolDataRequest is the request type for querying Protocol Data. */
export interface QueryProtocolDataRequestAmino {
    type?: string;
    key?: string;
}
export interface QueryProtocolDataRequestAminoMsg {
    type: "/quicksilver.participationrewards.v1.QueryProtocolDataRequest";
    value: QueryProtocolDataRequestAmino;
}
/** QueryProtocolDataRequest is the request type for querying Protocol Data. */
export interface QueryProtocolDataRequestSDKType {
    type: string;
    key: string;
}
/** QueryProtocolDataResponse is the response type for querying Protocol Data. */
export interface QueryProtocolDataResponse {
    /** data defines the underlying protocol data. */
    data: Uint8Array[];
}
export interface QueryProtocolDataResponseProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataResponse";
    value: Uint8Array;
}
/** QueryProtocolDataResponse is the response type for querying Protocol Data. */
export interface QueryProtocolDataResponseAmino {
    /** data defines the underlying protocol data. */
    data?: string[];
}
export interface QueryProtocolDataResponseAminoMsg {
    type: "/quicksilver.participationrewards.v1.QueryProtocolDataResponse";
    value: QueryProtocolDataResponseAmino;
}
/** QueryProtocolDataResponse is the response type for querying Protocol Data. */
export interface QueryProtocolDataResponseSDKType {
    data: Uint8Array[];
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
export declare const QueryProtocolDataRequest: {
    typeUrl: string;
    encode(message: QueryProtocolDataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProtocolDataRequest;
    fromPartial(object: Partial<QueryProtocolDataRequest>): QueryProtocolDataRequest;
    fromAmino(object: QueryProtocolDataRequestAmino): QueryProtocolDataRequest;
    toAmino(message: QueryProtocolDataRequest): QueryProtocolDataRequestAmino;
    fromAminoMsg(object: QueryProtocolDataRequestAminoMsg): QueryProtocolDataRequest;
    fromProtoMsg(message: QueryProtocolDataRequestProtoMsg): QueryProtocolDataRequest;
    toProto(message: QueryProtocolDataRequest): Uint8Array;
    toProtoMsg(message: QueryProtocolDataRequest): QueryProtocolDataRequestProtoMsg;
};
export declare const QueryProtocolDataResponse: {
    typeUrl: string;
    encode(message: QueryProtocolDataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProtocolDataResponse;
    fromPartial(object: Partial<QueryProtocolDataResponse>): QueryProtocolDataResponse;
    fromAmino(object: QueryProtocolDataResponseAmino): QueryProtocolDataResponse;
    toAmino(message: QueryProtocolDataResponse): QueryProtocolDataResponseAmino;
    fromAminoMsg(object: QueryProtocolDataResponseAminoMsg): QueryProtocolDataResponse;
    fromProtoMsg(message: QueryProtocolDataResponseProtoMsg): QueryProtocolDataResponse;
    toProto(message: QueryProtocolDataResponse): Uint8Array;
    toProtoMsg(message: QueryProtocolDataResponse): QueryProtocolDataResponseProtoMsg;
};
