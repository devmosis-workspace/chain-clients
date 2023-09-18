import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPrice {
}
export interface QueryMinGasPriceProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryMinGasPrice";
    value: Uint8Array;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceAmino {
}
export interface QueryMinGasPriceAminoMsg {
    type: "/umee.ugov.v1.QueryMinGasPrice";
    value: QueryMinGasPriceAmino;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceSDKType {
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponse {
    minGasPrice: DecCoin;
}
export interface QueryMinGasPriceResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse";
    value: Uint8Array;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseAmino {
    min_gas_price?: DecCoinAmino;
}
export interface QueryMinGasPriceResponseAminoMsg {
    type: "/umee.ugov.v1.QueryMinGasPriceResponse";
    value: QueryMinGasPriceResponseAmino;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseSDKType {
    min_gas_price: DecCoinSDKType;
}
export declare const QueryMinGasPrice: {
    typeUrl: string;
    encode(_: QueryMinGasPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryMinGasPrice;
    fromPartial(_: Partial<QueryMinGasPrice>): QueryMinGasPrice;
    fromAmino(_: QueryMinGasPriceAmino): QueryMinGasPrice;
    toAmino(_: QueryMinGasPrice): QueryMinGasPriceAmino;
    fromAminoMsg(object: QueryMinGasPriceAminoMsg): QueryMinGasPrice;
    fromProtoMsg(message: QueryMinGasPriceProtoMsg): QueryMinGasPrice;
    toProto(message: QueryMinGasPrice): Uint8Array;
    toProtoMsg(message: QueryMinGasPrice): QueryMinGasPriceProtoMsg;
};
export declare const QueryMinGasPriceResponse: {
    typeUrl: string;
    encode(message: QueryMinGasPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMinGasPriceResponse;
    fromPartial(object: Partial<QueryMinGasPriceResponse>): QueryMinGasPriceResponse;
    fromAmino(object: QueryMinGasPriceResponseAmino): QueryMinGasPriceResponse;
    toAmino(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseAmino;
    fromAminoMsg(object: QueryMinGasPriceResponseAminoMsg): QueryMinGasPriceResponse;
    fromProtoMsg(message: QueryMinGasPriceResponseProtoMsg): QueryMinGasPriceResponse;
    toProto(message: QueryMinGasPriceResponse): Uint8Array;
    toProtoMsg(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseProtoMsg;
};
