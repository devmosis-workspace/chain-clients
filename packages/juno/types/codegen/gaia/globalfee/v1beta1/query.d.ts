import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequest {
}
export interface QueryMinimumGasPricesRequestProtoMsg {
    typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesRequest";
    value: Uint8Array;
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequestAmino {
}
export interface QueryMinimumGasPricesRequestAminoMsg {
    type: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesRequest";
    value: QueryMinimumGasPricesRequestAmino;
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequestSDKType {
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponse {
    minimumGasPrices: DecCoin[];
}
export interface QueryMinimumGasPricesResponseProtoMsg {
    typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesResponse";
    value: Uint8Array;
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponseAmino {
    minimum_gas_prices?: DecCoinAmino[];
}
export interface QueryMinimumGasPricesResponseAminoMsg {
    type: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesResponse";
    value: QueryMinimumGasPricesResponseAmino;
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponseSDKType {
    minimum_gas_prices: DecCoinSDKType[];
}
export declare const QueryMinimumGasPricesRequest: {
    typeUrl: string;
    encode(_: QueryMinimumGasPricesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryMinimumGasPricesRequest;
    fromPartial(_: Partial<QueryMinimumGasPricesRequest>): QueryMinimumGasPricesRequest;
    fromAmino(_: QueryMinimumGasPricesRequestAmino): QueryMinimumGasPricesRequest;
    toAmino(_: QueryMinimumGasPricesRequest): QueryMinimumGasPricesRequestAmino;
    fromAminoMsg(object: QueryMinimumGasPricesRequestAminoMsg): QueryMinimumGasPricesRequest;
    fromProtoMsg(message: QueryMinimumGasPricesRequestProtoMsg): QueryMinimumGasPricesRequest;
    toProto(message: QueryMinimumGasPricesRequest): Uint8Array;
    toProtoMsg(message: QueryMinimumGasPricesRequest): QueryMinimumGasPricesRequestProtoMsg;
};
export declare const QueryMinimumGasPricesResponse: {
    typeUrl: string;
    encode(message: QueryMinimumGasPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMinimumGasPricesResponse;
    fromPartial(object: Partial<QueryMinimumGasPricesResponse>): QueryMinimumGasPricesResponse;
    fromAmino(object: QueryMinimumGasPricesResponseAmino): QueryMinimumGasPricesResponse;
    toAmino(message: QueryMinimumGasPricesResponse): QueryMinimumGasPricesResponseAmino;
    fromAminoMsg(object: QueryMinimumGasPricesResponseAminoMsg): QueryMinimumGasPricesResponse;
    fromProtoMsg(message: QueryMinimumGasPricesResponseProtoMsg): QueryMinimumGasPricesResponse;
    toProto(message: QueryMinimumGasPricesResponse): Uint8Array;
    toProtoMsg(message: QueryMinimumGasPricesResponse): QueryMinimumGasPricesResponseProtoMsg;
};
