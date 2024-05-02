import { SifnodeTokenRegistry, SifnodeTokenRegistryAmino, SifnodeTokenRegistrySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface QueryEntriesResponse {
    registry?: SifnodeTokenRegistry;
}
export interface QueryEntriesResponseProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesResponse";
    value: Uint8Array;
}
export interface QueryEntriesResponseAmino {
    registry?: SifnodeTokenRegistryAmino;
}
export interface QueryEntriesResponseAminoMsg {
    type: "/sifnode.tokenregistry.v1.QueryEntriesResponse";
    value: QueryEntriesResponseAmino;
}
export interface QueryEntriesResponseSDKType {
    registry?: SifnodeTokenRegistrySDKType;
}
export interface QueryEntriesRequest {
}
export interface QueryEntriesRequestProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesRequest";
    value: Uint8Array;
}
export interface QueryEntriesRequestAmino {
}
export interface QueryEntriesRequestAminoMsg {
    type: "/sifnode.tokenregistry.v1.QueryEntriesRequest";
    value: QueryEntriesRequestAmino;
}
export interface QueryEntriesRequestSDKType {
}
export declare const QueryEntriesResponse: {
    typeUrl: string;
    encode(message: QueryEntriesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEntriesResponse;
    fromPartial(object: Partial<QueryEntriesResponse>): QueryEntriesResponse;
    fromAmino(object: QueryEntriesResponseAmino): QueryEntriesResponse;
    toAmino(message: QueryEntriesResponse): QueryEntriesResponseAmino;
    fromAminoMsg(object: QueryEntriesResponseAminoMsg): QueryEntriesResponse;
    fromProtoMsg(message: QueryEntriesResponseProtoMsg): QueryEntriesResponse;
    toProto(message: QueryEntriesResponse): Uint8Array;
    toProtoMsg(message: QueryEntriesResponse): QueryEntriesResponseProtoMsg;
};
export declare const QueryEntriesRequest: {
    typeUrl: string;
    encode(_: QueryEntriesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryEntriesRequest;
    fromPartial(_: Partial<QueryEntriesRequest>): QueryEntriesRequest;
    fromAmino(_: QueryEntriesRequestAmino): QueryEntriesRequest;
    toAmino(_: QueryEntriesRequest): QueryEntriesRequestAmino;
    fromAminoMsg(object: QueryEntriesRequestAminoMsg): QueryEntriesRequest;
    fromProtoMsg(message: QueryEntriesRequestProtoMsg): QueryEntriesRequest;
    toProto(message: QueryEntriesRequest): Uint8Array;
    toProtoMsg(message: QueryEntriesRequest): QueryEntriesRequestProtoMsg;
};
