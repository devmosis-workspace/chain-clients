import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./market";
import { BinaryWriter } from "../../../binary";
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequest {
    /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
    offerCoin: string;
    /** ask_denom defines the denom of the coin to swap to */
    askDenom: string;
}
export interface QuerySwapRequestProtoMsg {
    typeUrl: "/terra.market.v1beta1.QuerySwapRequest";
    value: Uint8Array;
}
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequestAmino {
    /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
    offer_coin?: string;
    /** ask_denom defines the denom of the coin to swap to */
    ask_denom?: string;
}
export interface QuerySwapRequestAminoMsg {
    type: "/terra.market.v1beta1.QuerySwapRequest";
    value: QuerySwapRequestAmino;
}
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequestSDKType {
    offer_coin: string;
    ask_denom: string;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponse {
    /** return_coin defines the coin returned as a result of the swap simulation. */
    returnCoin: Coin;
}
export interface QuerySwapResponseProtoMsg {
    typeUrl: "/terra.market.v1beta1.QuerySwapResponse";
    value: Uint8Array;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseAmino {
    /** return_coin defines the coin returned as a result of the swap simulation. */
    return_coin?: CoinAmino;
}
export interface QuerySwapResponseAminoMsg {
    type: "/terra.market.v1beta1.QuerySwapResponse";
    value: QuerySwapResponseAmino;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseSDKType {
    return_coin: CoinSDKType;
}
/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequest {
}
export interface QueryTerraPoolDeltaRequestProtoMsg {
    typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaRequest";
    value: Uint8Array;
}
/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequestAmino {
}
export interface QueryTerraPoolDeltaRequestAminoMsg {
    type: "/terra.market.v1beta1.QueryTerraPoolDeltaRequest";
    value: QueryTerraPoolDeltaRequestAmino;
}
/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequestSDKType {
}
/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponse {
    /** terra_pool_delta defines the gap between the TerraPool and the TerraBasePool */
    terraPoolDelta: Uint8Array;
}
export interface QueryTerraPoolDeltaResponseProtoMsg {
    typeUrl: "/terra.market.v1beta1.QueryTerraPoolDeltaResponse";
    value: Uint8Array;
}
/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponseAmino {
    /** terra_pool_delta defines the gap between the TerraPool and the TerraBasePool */
    terra_pool_delta?: string;
}
export interface QueryTerraPoolDeltaResponseAminoMsg {
    type: "/terra.market.v1beta1.QueryTerraPoolDeltaResponse";
    value: QueryTerraPoolDeltaResponseAmino;
}
/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponseSDKType {
    terra_pool_delta: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/terra.market.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/terra.market.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/terra.market.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/terra.market.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QuerySwapRequest: {
    typeUrl: string;
    encode(message: QuerySwapRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapRequest;
    fromPartial(object: Partial<QuerySwapRequest>): QuerySwapRequest;
    fromAmino(object: QuerySwapRequestAmino): QuerySwapRequest;
    toAmino(message: QuerySwapRequest): QuerySwapRequestAmino;
    fromAminoMsg(object: QuerySwapRequestAminoMsg): QuerySwapRequest;
    fromProtoMsg(message: QuerySwapRequestProtoMsg): QuerySwapRequest;
    toProto(message: QuerySwapRequest): Uint8Array;
    toProtoMsg(message: QuerySwapRequest): QuerySwapRequestProtoMsg;
};
export declare const QuerySwapResponse: {
    typeUrl: string;
    encode(message: QuerySwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapResponse;
    fromPartial(object: Partial<QuerySwapResponse>): QuerySwapResponse;
    fromAmino(object: QuerySwapResponseAmino): QuerySwapResponse;
    toAmino(message: QuerySwapResponse): QuerySwapResponseAmino;
    fromAminoMsg(object: QuerySwapResponseAminoMsg): QuerySwapResponse;
    fromProtoMsg(message: QuerySwapResponseProtoMsg): QuerySwapResponse;
    toProto(message: QuerySwapResponse): Uint8Array;
    toProtoMsg(message: QuerySwapResponse): QuerySwapResponseProtoMsg;
};
export declare const QueryTerraPoolDeltaRequest: {
    typeUrl: string;
    encode(_: QueryTerraPoolDeltaRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTerraPoolDeltaRequest;
    fromPartial(_: Partial<QueryTerraPoolDeltaRequest>): QueryTerraPoolDeltaRequest;
    fromAmino(_: QueryTerraPoolDeltaRequestAmino): QueryTerraPoolDeltaRequest;
    toAmino(_: QueryTerraPoolDeltaRequest): QueryTerraPoolDeltaRequestAmino;
    fromAminoMsg(object: QueryTerraPoolDeltaRequestAminoMsg): QueryTerraPoolDeltaRequest;
    fromProtoMsg(message: QueryTerraPoolDeltaRequestProtoMsg): QueryTerraPoolDeltaRequest;
    toProto(message: QueryTerraPoolDeltaRequest): Uint8Array;
    toProtoMsg(message: QueryTerraPoolDeltaRequest): QueryTerraPoolDeltaRequestProtoMsg;
};
export declare const QueryTerraPoolDeltaResponse: {
    typeUrl: string;
    encode(message: QueryTerraPoolDeltaResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTerraPoolDeltaResponse;
    fromPartial(object: Partial<QueryTerraPoolDeltaResponse>): QueryTerraPoolDeltaResponse;
    fromAmino(object: QueryTerraPoolDeltaResponseAmino): QueryTerraPoolDeltaResponse;
    toAmino(message: QueryTerraPoolDeltaResponse): QueryTerraPoolDeltaResponseAmino;
    fromAminoMsg(object: QueryTerraPoolDeltaResponseAminoMsg): QueryTerraPoolDeltaResponse;
    fromProtoMsg(message: QueryTerraPoolDeltaResponseProtoMsg): QueryTerraPoolDeltaResponse;
    toProto(message: QueryTerraPoolDeltaResponse): Uint8Array;
    toProtoMsg(message: QueryTerraPoolDeltaResponse): QueryTerraPoolDeltaResponseProtoMsg;
};
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
