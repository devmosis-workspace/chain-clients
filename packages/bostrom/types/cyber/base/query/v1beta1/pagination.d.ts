import { BinaryWriter } from "../../../../binary";
export interface PageRequest {
    page: number;
    perPage: number;
}
export interface PageRequestProtoMsg {
    typeUrl: "/cyber.base.query.v1beta1.PageRequest";
    value: Uint8Array;
}
export interface PageRequestAmino {
    page?: number;
    per_page?: number;
}
export interface PageRequestAminoMsg {
    type: "/cyber.base.query.v1beta1.PageRequest";
    value: PageRequestAmino;
}
export interface PageRequestSDKType {
    page: number;
    per_page: number;
}
export interface PageResponse {
    total: number;
}
export interface PageResponseProtoMsg {
    typeUrl: "/cyber.base.query.v1beta1.PageResponse";
    value: Uint8Array;
}
export interface PageResponseAmino {
    total?: number;
}
export interface PageResponseAminoMsg {
    type: "/cyber.base.query.v1beta1.PageResponse";
    value: PageResponseAmino;
}
export interface PageResponseSDKType {
    total: number;
}
export declare const PageRequest: {
    typeUrl: string;
    encode(message: PageRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PageRequest;
    fromPartial(object: Partial<PageRequest>): PageRequest;
    fromAmino(object: PageRequestAmino): PageRequest;
    toAmino(message: PageRequest): PageRequestAmino;
    fromAminoMsg(object: PageRequestAminoMsg): PageRequest;
    fromProtoMsg(message: PageRequestProtoMsg): PageRequest;
    toProto(message: PageRequest): Uint8Array;
    toProtoMsg(message: PageRequest): PageRequestProtoMsg;
};
export declare const PageResponse: {
    typeUrl: string;
    encode(message: PageResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PageResponse;
    fromPartial(object: Partial<PageResponse>): PageResponse;
    fromAmino(object: PageResponseAmino): PageResponse;
    toAmino(message: PageResponse): PageResponseAmino;
    fromAminoMsg(object: PageResponseAminoMsg): PageResponse;
    fromProtoMsg(message: PageResponseProtoMsg): PageResponse;
    toProto(message: PageResponse): Uint8Array;
    toProtoMsg(message: PageResponse): PageResponseProtoMsg;
};
