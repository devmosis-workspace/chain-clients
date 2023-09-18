import { InflationState, InflationStateAmino, InflationStateSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
export interface QueryInflationRequest {
}
export interface QueryInflationRequestProtoMsg {
    typeUrl: "/em.inflation.v1.QueryInflationRequest";
    value: Uint8Array;
}
export interface QueryInflationRequestAmino {
}
export interface QueryInflationRequestAminoMsg {
    type: "/em.inflation.v1.QueryInflationRequest";
    value: QueryInflationRequestAmino;
}
export interface QueryInflationRequestSDKType {
}
export interface QueryInflationResponse {
    state: InflationState;
}
export interface QueryInflationResponseProtoMsg {
    typeUrl: "/em.inflation.v1.QueryInflationResponse";
    value: Uint8Array;
}
export interface QueryInflationResponseAmino {
    state?: InflationStateAmino;
}
export interface QueryInflationResponseAminoMsg {
    type: "/em.inflation.v1.QueryInflationResponse";
    value: QueryInflationResponseAmino;
}
export interface QueryInflationResponseSDKType {
    state: InflationStateSDKType;
}
export declare const QueryInflationRequest: {
    typeUrl: string;
    encode(_: QueryInflationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryInflationRequest;
    fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest;
    fromAmino(_: QueryInflationRequestAmino): QueryInflationRequest;
    toAmino(_: QueryInflationRequest): QueryInflationRequestAmino;
    fromAminoMsg(object: QueryInflationRequestAminoMsg): QueryInflationRequest;
    fromProtoMsg(message: QueryInflationRequestProtoMsg): QueryInflationRequest;
    toProto(message: QueryInflationRequest): Uint8Array;
    toProtoMsg(message: QueryInflationRequest): QueryInflationRequestProtoMsg;
};
export declare const QueryInflationResponse: {
    typeUrl: string;
    encode(message: QueryInflationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInflationResponse;
    fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse;
    fromAmino(object: QueryInflationResponseAmino): QueryInflationResponse;
    toAmino(message: QueryInflationResponse): QueryInflationResponseAmino;
    fromAminoMsg(object: QueryInflationResponseAminoMsg): QueryInflationResponse;
    fromProtoMsg(message: QueryInflationResponseProtoMsg): QueryInflationResponse;
    toProto(message: QueryInflationResponse): Uint8Array;
    toProtoMsg(message: QueryInflationResponse): QueryInflationResponseProtoMsg;
};
