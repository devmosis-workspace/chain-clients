import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../binary";
/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/irishub.mint.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/irishub.mint.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params: Params;
    res: PageResponse;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/irishub.mint.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
    res?: PageResponseAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/irishub.mint.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
    res: PageResponseSDKType;
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
