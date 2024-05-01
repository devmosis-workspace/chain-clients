import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cyber.resources.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cyber.resources.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cyber.resources.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cyber.resources.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryInvestmintRequest {
    amount: Coin;
    resource: string;
    length: bigint;
}
export interface QueryInvestmintRequestProtoMsg {
    typeUrl: "/cyber.resources.v1beta1.QueryInvestmintRequest";
    value: Uint8Array;
}
export interface QueryInvestmintRequestAmino {
    amount?: CoinAmino;
    resource?: string;
    length?: string;
}
export interface QueryInvestmintRequestAminoMsg {
    type: "/cyber.resources.v1beta1.QueryInvestmintRequest";
    value: QueryInvestmintRequestAmino;
}
export interface QueryInvestmintRequestSDKType {
    amount: CoinSDKType;
    resource: string;
    length: bigint;
}
export interface QueryInvestmintResponse {
    amount: Coin;
}
export interface QueryInvestmintResponseProtoMsg {
    typeUrl: "/cyber.resources.v1beta1.QueryInvestmintResponse";
    value: Uint8Array;
}
export interface QueryInvestmintResponseAmino {
    amount?: CoinAmino;
}
export interface QueryInvestmintResponseAminoMsg {
    type: "/cyber.resources.v1beta1.QueryInvestmintResponse";
    value: QueryInvestmintResponseAmino;
}
export interface QueryInvestmintResponseSDKType {
    amount: CoinSDKType;
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
export declare const QueryInvestmintRequest: {
    typeUrl: string;
    encode(message: QueryInvestmintRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInvestmintRequest;
    fromPartial(object: Partial<QueryInvestmintRequest>): QueryInvestmintRequest;
    fromAmino(object: QueryInvestmintRequestAmino): QueryInvestmintRequest;
    toAmino(message: QueryInvestmintRequest): QueryInvestmintRequestAmino;
    fromAminoMsg(object: QueryInvestmintRequestAminoMsg): QueryInvestmintRequest;
    fromProtoMsg(message: QueryInvestmintRequestProtoMsg): QueryInvestmintRequest;
    toProto(message: QueryInvestmintRequest): Uint8Array;
    toProtoMsg(message: QueryInvestmintRequest): QueryInvestmintRequestProtoMsg;
};
export declare const QueryInvestmintResponse: {
    typeUrl: string;
    encode(message: QueryInvestmintResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInvestmintResponse;
    fromPartial(object: Partial<QueryInvestmintResponse>): QueryInvestmintResponse;
    fromAmino(object: QueryInvestmintResponseAmino): QueryInvestmintResponse;
    toAmino(message: QueryInvestmintResponse): QueryInvestmintResponseAmino;
    fromAminoMsg(object: QueryInvestmintResponseAminoMsg): QueryInvestmintResponse;
    fromProtoMsg(message: QueryInvestmintResponseProtoMsg): QueryInvestmintResponse;
    toProto(message: QueryInvestmintResponse): Uint8Array;
    toProtoMsg(message: QueryInvestmintResponse): QueryInvestmintResponseProtoMsg;
};
