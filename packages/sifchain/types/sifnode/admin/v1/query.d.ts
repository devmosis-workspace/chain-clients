import { AdminAccount, AdminAccountAmino, AdminAccountSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface ListAccountsRequest {
}
export interface ListAccountsRequestProtoMsg {
    typeUrl: "/sifnode.admin.v1.ListAccountsRequest";
    value: Uint8Array;
}
export interface ListAccountsRequestAmino {
}
export interface ListAccountsRequestAminoMsg {
    type: "/sifnode.admin.v1.ListAccountsRequest";
    value: ListAccountsRequestAmino;
}
export interface ListAccountsRequestSDKType {
}
export interface ListAccountsResponse {
    keys: AdminAccount[];
}
export interface ListAccountsResponseProtoMsg {
    typeUrl: "/sifnode.admin.v1.ListAccountsResponse";
    value: Uint8Array;
}
export interface ListAccountsResponseAmino {
    keys?: AdminAccountAmino[];
}
export interface ListAccountsResponseAminoMsg {
    type: "/sifnode.admin.v1.ListAccountsResponse";
    value: ListAccountsResponseAmino;
}
export interface ListAccountsResponseSDKType {
    keys: AdminAccountSDKType[];
}
export interface GetParamsRequest {
}
export interface GetParamsRequestProtoMsg {
    typeUrl: "/sifnode.admin.v1.GetParamsRequest";
    value: Uint8Array;
}
export interface GetParamsRequestAmino {
}
export interface GetParamsRequestAminoMsg {
    type: "/sifnode.admin.v1.GetParamsRequest";
    value: GetParamsRequestAmino;
}
export interface GetParamsRequestSDKType {
}
export interface GetParamsResponse {
    params?: Params;
}
export interface GetParamsResponseProtoMsg {
    typeUrl: "/sifnode.admin.v1.GetParamsResponse";
    value: Uint8Array;
}
export interface GetParamsResponseAmino {
    params?: ParamsAmino;
}
export interface GetParamsResponseAminoMsg {
    type: "/sifnode.admin.v1.GetParamsResponse";
    value: GetParamsResponseAmino;
}
export interface GetParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ListAccountsRequest: {
    typeUrl: string;
    encode(_: ListAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ListAccountsRequest;
    fromPartial(_: Partial<ListAccountsRequest>): ListAccountsRequest;
    fromAmino(_: ListAccountsRequestAmino): ListAccountsRequest;
    toAmino(_: ListAccountsRequest): ListAccountsRequestAmino;
    fromAminoMsg(object: ListAccountsRequestAminoMsg): ListAccountsRequest;
    fromProtoMsg(message: ListAccountsRequestProtoMsg): ListAccountsRequest;
    toProto(message: ListAccountsRequest): Uint8Array;
    toProtoMsg(message: ListAccountsRequest): ListAccountsRequestProtoMsg;
};
export declare const ListAccountsResponse: {
    typeUrl: string;
    encode(message: ListAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ListAccountsResponse;
    fromPartial(object: Partial<ListAccountsResponse>): ListAccountsResponse;
    fromAmino(object: ListAccountsResponseAmino): ListAccountsResponse;
    toAmino(message: ListAccountsResponse): ListAccountsResponseAmino;
    fromAminoMsg(object: ListAccountsResponseAminoMsg): ListAccountsResponse;
    fromProtoMsg(message: ListAccountsResponseProtoMsg): ListAccountsResponse;
    toProto(message: ListAccountsResponse): Uint8Array;
    toProtoMsg(message: ListAccountsResponse): ListAccountsResponseProtoMsg;
};
export declare const GetParamsRequest: {
    typeUrl: string;
    encode(_: GetParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): GetParamsRequest;
    fromPartial(_: Partial<GetParamsRequest>): GetParamsRequest;
    fromAmino(_: GetParamsRequestAmino): GetParamsRequest;
    toAmino(_: GetParamsRequest): GetParamsRequestAmino;
    fromAminoMsg(object: GetParamsRequestAminoMsg): GetParamsRequest;
    fromProtoMsg(message: GetParamsRequestProtoMsg): GetParamsRequest;
    toProto(message: GetParamsRequest): Uint8Array;
    toProtoMsg(message: GetParamsRequest): GetParamsRequestProtoMsg;
};
export declare const GetParamsResponse: {
    typeUrl: string;
    encode(message: GetParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GetParamsResponse;
    fromPartial(object: Partial<GetParamsResponse>): GetParamsResponse;
    fromAmino(object: GetParamsResponseAmino): GetParamsResponse;
    toAmino(message: GetParamsResponse): GetParamsResponseAmino;
    fromAminoMsg(object: GetParamsResponseAminoMsg): GetParamsResponse;
    fromProtoMsg(message: GetParamsResponseProtoMsg): GetParamsResponse;
    toProto(message: GetParamsResponse): Uint8Array;
    toProtoMsg(message: GetParamsResponse): GetParamsResponseProtoMsg;
};
