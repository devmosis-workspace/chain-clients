import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FeeInfo, FeeInfoAmino, FeeInfoSDKType } from "./genesis";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/neutron.feerefunder.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/neutron.feerefunder.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/neutron.feerefunder.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/neutron.feerefunder.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface FeeInfoRequest {
    channelId: string;
    portId: string;
    sequence: bigint;
}
export interface FeeInfoRequestProtoMsg {
    typeUrl: "/neutron.feerefunder.FeeInfoRequest";
    value: Uint8Array;
}
export interface FeeInfoRequestAmino {
    channel_id?: string;
    port_id?: string;
    sequence?: string;
}
export interface FeeInfoRequestAminoMsg {
    type: "/neutron.feerefunder.FeeInfoRequest";
    value: FeeInfoRequestAmino;
}
export interface FeeInfoRequestSDKType {
    channel_id: string;
    port_id: string;
    sequence: bigint;
}
export interface FeeInfoResponse {
    feeInfo?: FeeInfo;
}
export interface FeeInfoResponseProtoMsg {
    typeUrl: "/neutron.feerefunder.FeeInfoResponse";
    value: Uint8Array;
}
export interface FeeInfoResponseAmino {
    fee_info?: FeeInfoAmino;
}
export interface FeeInfoResponseAminoMsg {
    type: "/neutron.feerefunder.FeeInfoResponse";
    value: FeeInfoResponseAmino;
}
export interface FeeInfoResponseSDKType {
    fee_info?: FeeInfoSDKType;
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
export declare const FeeInfoRequest: {
    typeUrl: string;
    encode(message: FeeInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeInfoRequest;
    fromPartial(object: Partial<FeeInfoRequest>): FeeInfoRequest;
    fromAmino(object: FeeInfoRequestAmino): FeeInfoRequest;
    toAmino(message: FeeInfoRequest): FeeInfoRequestAmino;
    fromAminoMsg(object: FeeInfoRequestAminoMsg): FeeInfoRequest;
    fromProtoMsg(message: FeeInfoRequestProtoMsg): FeeInfoRequest;
    toProto(message: FeeInfoRequest): Uint8Array;
    toProtoMsg(message: FeeInfoRequest): FeeInfoRequestProtoMsg;
};
export declare const FeeInfoResponse: {
    typeUrl: string;
    encode(message: FeeInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeInfoResponse;
    fromPartial(object: Partial<FeeInfoResponse>): FeeInfoResponse;
    fromAmino(object: FeeInfoResponseAmino): FeeInfoResponse;
    toAmino(message: FeeInfoResponse): FeeInfoResponseAmino;
    fromAminoMsg(object: FeeInfoResponseAminoMsg): FeeInfoResponse;
    fromProtoMsg(message: FeeInfoResponseProtoMsg): FeeInfoResponse;
    toProto(message: FeeInfoResponse): Uint8Array;
    toProtoMsg(message: FeeInfoResponse): FeeInfoResponseProtoMsg;
};
