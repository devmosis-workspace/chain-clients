import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Super, SuperAmino, SuperSDKType } from "./guardian";
import { BinaryWriter } from "../binary";
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequest {
    /** pagination defines an optional pagination for the request */
    pagination: PageRequest;
}
export interface QuerySupersRequestProtoMsg {
    typeUrl: "/irishub.guardian.QuerySupersRequest";
    value: Uint8Array;
}
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequestAmino {
    /** pagination defines an optional pagination for the request */
    pagination?: PageRequestAmino;
}
export interface QuerySupersRequestAminoMsg {
    type: "/irishub.guardian.QuerySupersRequest";
    value: QuerySupersRequestAmino;
}
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponse {
    supers: Super[];
    pagination: PageResponse;
}
export interface QuerySupersResponseProtoMsg {
    typeUrl: "/irishub.guardian.QuerySupersResponse";
    value: Uint8Array;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponseAmino {
    supers: SuperAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySupersResponseAminoMsg {
    type: "/irishub.guardian.QuerySupersResponse";
    value: QuerySupersResponseAmino;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponseSDKType {
    supers: SuperSDKType[];
    pagination: PageResponseSDKType;
}
export declare const QuerySupersRequest: {
    typeUrl: string;
    encode(message: QuerySupersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySupersRequest;
    fromPartial(object: Partial<QuerySupersRequest>): QuerySupersRequest;
    fromAmino(object: QuerySupersRequestAmino): QuerySupersRequest;
    toAmino(message: QuerySupersRequest): QuerySupersRequestAmino;
    fromAminoMsg(object: QuerySupersRequestAminoMsg): QuerySupersRequest;
    fromProtoMsg(message: QuerySupersRequestProtoMsg): QuerySupersRequest;
    toProto(message: QuerySupersRequest): Uint8Array;
    toProtoMsg(message: QuerySupersRequest): QuerySupersRequestProtoMsg;
};
export declare const QuerySupersResponse: {
    typeUrl: string;
    encode(message: QuerySupersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySupersResponse;
    fromPartial(object: Partial<QuerySupersResponse>): QuerySupersResponse;
    fromAmino(object: QuerySupersResponseAmino): QuerySupersResponse;
    toAmino(message: QuerySupersResponse): QuerySupersResponseAmino;
    fromAminoMsg(object: QuerySupersResponseAminoMsg): QuerySupersResponse;
    fromProtoMsg(message: QuerySupersResponseProtoMsg): QuerySupersResponse;
    toProto(message: QuerySupersResponse): Uint8Array;
    toProtoMsg(message: QuerySupersResponse): QuerySupersResponseProtoMsg;
};
