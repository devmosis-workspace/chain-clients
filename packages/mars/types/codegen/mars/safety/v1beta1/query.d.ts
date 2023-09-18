import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequest {
}
export interface QueryBalancesRequestProtoMsg {
    typeUrl: "/mars.safety.v1beta1.QueryBalancesRequest";
    value: Uint8Array;
}
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequestAmino {
}
export interface QueryBalancesRequestAminoMsg {
    type: "/mars.safety.v1beta1.QueryBalancesRequest";
    value: QueryBalancesRequestAmino;
}
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequestSDKType {
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponse {
    /** Balances is the coins available in the safety fund */
    balances: Coin[];
}
export interface QueryBalancesResponseProtoMsg {
    typeUrl: "/mars.safety.v1beta1.QueryBalancesResponse";
    value: Uint8Array;
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponseAmino {
    /** Balances is the coins available in the safety fund */
    balances: CoinAmino[];
}
export interface QueryBalancesResponseAminoMsg {
    type: "/mars.safety.v1beta1.QueryBalancesResponse";
    value: QueryBalancesResponseAmino;
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponseSDKType {
    balances: CoinSDKType[];
}
export declare const QueryBalancesRequest: {
    typeUrl: string;
    encode(_: QueryBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBalancesRequest;
    fromPartial(_: Partial<QueryBalancesRequest>): QueryBalancesRequest;
    fromAmino(_: QueryBalancesRequestAmino): QueryBalancesRequest;
    toAmino(_: QueryBalancesRequest): QueryBalancesRequestAmino;
    fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest;
    fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest;
    toProto(message: QueryBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg;
};
export declare const QueryBalancesResponse: {
    typeUrl: string;
    encode(message: QueryBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBalancesResponse;
    fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse;
    fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse;
    toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino;
    fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse;
    fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse;
    toProto(message: QueryBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg;
};
