import { BinaryWriter } from "../../../binary";
export interface QueryGraphStatsRequest {
}
export interface QueryGraphStatsRequestProtoMsg {
    typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsRequest";
    value: Uint8Array;
}
export interface QueryGraphStatsRequestAmino {
}
export interface QueryGraphStatsRequestAminoMsg {
    type: "/cyber.graph.v1beta1.QueryGraphStatsRequest";
    value: QueryGraphStatsRequestAmino;
}
export interface QueryGraphStatsRequestSDKType {
}
export interface QueryGraphStatsResponse {
    cyberlinks: bigint;
    particles: bigint;
}
export interface QueryGraphStatsResponseProtoMsg {
    typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsResponse";
    value: Uint8Array;
}
export interface QueryGraphStatsResponseAmino {
    cyberlinks?: string;
    particles?: string;
}
export interface QueryGraphStatsResponseAminoMsg {
    type: "/cyber.graph.v1beta1.QueryGraphStatsResponse";
    value: QueryGraphStatsResponseAmino;
}
export interface QueryGraphStatsResponseSDKType {
    cyberlinks: bigint;
    particles: bigint;
}
export declare const QueryGraphStatsRequest: {
    typeUrl: string;
    encode(_: QueryGraphStatsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGraphStatsRequest;
    fromPartial(_: Partial<QueryGraphStatsRequest>): QueryGraphStatsRequest;
    fromAmino(_: QueryGraphStatsRequestAmino): QueryGraphStatsRequest;
    toAmino(_: QueryGraphStatsRequest): QueryGraphStatsRequestAmino;
    fromAminoMsg(object: QueryGraphStatsRequestAminoMsg): QueryGraphStatsRequest;
    fromProtoMsg(message: QueryGraphStatsRequestProtoMsg): QueryGraphStatsRequest;
    toProto(message: QueryGraphStatsRequest): Uint8Array;
    toProtoMsg(message: QueryGraphStatsRequest): QueryGraphStatsRequestProtoMsg;
};
export declare const QueryGraphStatsResponse: {
    typeUrl: string;
    encode(message: QueryGraphStatsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGraphStatsResponse;
    fromPartial(object: Partial<QueryGraphStatsResponse>): QueryGraphStatsResponse;
    fromAmino(object: QueryGraphStatsResponseAmino): QueryGraphStatsResponse;
    toAmino(message: QueryGraphStatsResponse): QueryGraphStatsResponseAmino;
    fromAminoMsg(object: QueryGraphStatsResponseAminoMsg): QueryGraphStatsResponse;
    fromProtoMsg(message: QueryGraphStatsResponseProtoMsg): QueryGraphStatsResponse;
    toProto(message: QueryGraphStatsResponse): Uint8Array;
    toProtoMsg(message: QueryGraphStatsResponse): QueryGraphStatsResponseProtoMsg;
};
