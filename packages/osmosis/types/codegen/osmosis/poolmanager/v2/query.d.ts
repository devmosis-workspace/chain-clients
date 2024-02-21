import { BinaryWriter } from "../../../binary";
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
export interface SpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest";
    value: Uint8Array;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestAmino {
    pool_id?: string;
    base_asset_denom?: string;
    quote_asset_denom?: string;
}
export interface SpotPriceRequestAminoMsg {
    type: "osmosis/poolmanager/v2/spot-price-request";
    value: SpotPriceRequestAmino;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestSDKType {
    pool_id: bigint;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
    /** String of the BigDec. Ex) 10.203uatom */
    spotPrice: string;
}
export interface SpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse";
    value: Uint8Array;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseAmino {
    /** String of the BigDec. Ex) 10.203uatom */
    spot_price?: string;
}
export interface SpotPriceResponseAminoMsg {
    type: "osmosis/poolmanager/v2/spot-price-response";
    value: SpotPriceResponseAmino;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
    spot_price: string;
}
export declare const SpotPriceRequest: {
    typeUrl: string;
    encode(message: SpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotPriceRequest;
    fromPartial(object: Partial<SpotPriceRequest>): SpotPriceRequest;
    fromAmino(object: SpotPriceRequestAmino): SpotPriceRequest;
    toAmino(message: SpotPriceRequest): SpotPriceRequestAmino;
    fromAminoMsg(object: SpotPriceRequestAminoMsg): SpotPriceRequest;
    toAminoMsg(message: SpotPriceRequest): SpotPriceRequestAminoMsg;
    fromProtoMsg(message: SpotPriceRequestProtoMsg): SpotPriceRequest;
    toProto(message: SpotPriceRequest): Uint8Array;
    toProtoMsg(message: SpotPriceRequest): SpotPriceRequestProtoMsg;
};
export declare const SpotPriceResponse: {
    typeUrl: string;
    encode(message: SpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotPriceResponse;
    fromPartial(object: Partial<SpotPriceResponse>): SpotPriceResponse;
    fromAmino(object: SpotPriceResponseAmino): SpotPriceResponse;
    toAmino(message: SpotPriceResponse): SpotPriceResponseAmino;
    fromAminoMsg(object: SpotPriceResponseAminoMsg): SpotPriceResponse;
    toAminoMsg(message: SpotPriceResponse): SpotPriceResponseAminoMsg;
    fromProtoMsg(message: SpotPriceResponseProtoMsg): SpotPriceResponse;
    toProto(message: SpotPriceResponse): Uint8Array;
    toProtoMsg(message: SpotPriceResponse): SpotPriceResponseProtoMsg;
};
