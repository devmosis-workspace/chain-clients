import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest defines the request type for querying x/kavadist parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/kavadist parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.kavadist.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/kavadist parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/kavadist parameters. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/kavadist parameters. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.kavadist.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/kavadist parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryBalanceRequest defines the request type for querying x/kavadist balance. */
export interface QueryBalanceRequest {
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest defines the request type for querying x/kavadist balance. */
export interface QueryBalanceRequestAmino {
}
export interface QueryBalanceRequestAminoMsg {
    type: "/kava.kavadist.v1beta1.QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest defines the request type for querying x/kavadist balance. */
export interface QueryBalanceRequestSDKType {
}
/** QueryBalanceResponse defines the response type for querying x/kavadist balance. */
export interface QueryBalanceResponse {
    coins: Coin[];
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse defines the response type for querying x/kavadist balance. */
export interface QueryBalanceResponseAmino {
    coins: CoinAmino[];
}
export interface QueryBalanceResponseAminoMsg {
    type: "/kava.kavadist.v1beta1.QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse defines the response type for querying x/kavadist balance. */
export interface QueryBalanceResponseSDKType {
    coins: CoinSDKType[];
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
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(_: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBalanceRequest;
    fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(_: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(_: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
