import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountAmino, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import { BinaryWriter } from "../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/neutron.feeburner.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/neutron.feeburner.QueryParamsRequest";
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
    typeUrl: "/neutron.feeburner.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/neutron.feeburner.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequest {
}
export interface QueryTotalBurnedNeutronsAmountRequestProtoMsg {
    typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest";
    value: Uint8Array;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequestAmino {
}
export interface QueryTotalBurnedNeutronsAmountRequestAminoMsg {
    type: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest";
    value: QueryTotalBurnedNeutronsAmountRequestAmino;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequestSDKType {
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponse {
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
export interface QueryTotalBurnedNeutronsAmountResponseProtoMsg {
    typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse";
    value: Uint8Array;
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponseAmino {
    total_burned_neutrons_amount?: TotalBurnedNeutronsAmountAmino;
}
export interface QueryTotalBurnedNeutronsAmountResponseAminoMsg {
    type: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse";
    value: QueryTotalBurnedNeutronsAmountResponseAmino;
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponseSDKType {
    total_burned_neutrons_amount: TotalBurnedNeutronsAmountSDKType;
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
export declare const QueryTotalBurnedNeutronsAmountRequest: {
    typeUrl: string;
    encode(_: QueryTotalBurnedNeutronsAmountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalBurnedNeutronsAmountRequest;
    fromPartial(_: Partial<QueryTotalBurnedNeutronsAmountRequest>): QueryTotalBurnedNeutronsAmountRequest;
    fromAmino(_: QueryTotalBurnedNeutronsAmountRequestAmino): QueryTotalBurnedNeutronsAmountRequest;
    toAmino(_: QueryTotalBurnedNeutronsAmountRequest): QueryTotalBurnedNeutronsAmountRequestAmino;
    fromAminoMsg(object: QueryTotalBurnedNeutronsAmountRequestAminoMsg): QueryTotalBurnedNeutronsAmountRequest;
    fromProtoMsg(message: QueryTotalBurnedNeutronsAmountRequestProtoMsg): QueryTotalBurnedNeutronsAmountRequest;
    toProto(message: QueryTotalBurnedNeutronsAmountRequest): Uint8Array;
    toProtoMsg(message: QueryTotalBurnedNeutronsAmountRequest): QueryTotalBurnedNeutronsAmountRequestProtoMsg;
};
export declare const QueryTotalBurnedNeutronsAmountResponse: {
    typeUrl: string;
    encode(message: QueryTotalBurnedNeutronsAmountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalBurnedNeutronsAmountResponse;
    fromPartial(object: Partial<QueryTotalBurnedNeutronsAmountResponse>): QueryTotalBurnedNeutronsAmountResponse;
    fromAmino(object: QueryTotalBurnedNeutronsAmountResponseAmino): QueryTotalBurnedNeutronsAmountResponse;
    toAmino(message: QueryTotalBurnedNeutronsAmountResponse): QueryTotalBurnedNeutronsAmountResponseAmino;
    fromAminoMsg(object: QueryTotalBurnedNeutronsAmountResponseAminoMsg): QueryTotalBurnedNeutronsAmountResponse;
    fromProtoMsg(message: QueryTotalBurnedNeutronsAmountResponseProtoMsg): QueryTotalBurnedNeutronsAmountResponse;
    toProto(message: QueryTotalBurnedNeutronsAmountResponse): Uint8Array;
    toProtoMsg(message: QueryTotalBurnedNeutronsAmountResponse): QueryTotalBurnedNeutronsAmountResponseProtoMsg;
};
