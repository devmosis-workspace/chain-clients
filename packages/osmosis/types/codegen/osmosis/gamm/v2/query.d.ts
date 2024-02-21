import { BinaryWriter } from "../../../binary";
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest";
    value: Uint8Array;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequestAmino {
    pool_id?: string;
    base_asset_denom?: string;
    quote_asset_denom?: string;
}
export interface QuerySpotPriceRequestAminoMsg {
    type: "osmosis/gamm/v2/query-spot-price-request";
    value: QuerySpotPriceRequestAmino;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
    pool_id: bigint;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse";
    value: Uint8Array;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
    type: "osmosis/gamm/v2/query-spot-price-response";
    value: QuerySpotPriceResponseAmino;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
    spot_price: string;
}
export declare const QuerySpotPriceRequest: {
    typeUrl: string;
    encode(message: QuerySpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotPriceRequest;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
    fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest;
    toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino;
    fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest;
    toAminoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestAminoMsg;
    fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest;
    toProto(message: QuerySpotPriceRequest): Uint8Array;
    toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg;
};
export declare const QuerySpotPriceResponse: {
    typeUrl: string;
    encode(message: QuerySpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotPriceResponse;
    fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
    fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse;
    toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino;
    fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse;
    toAminoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseAminoMsg;
    fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse;
    toProto(message: QuerySpotPriceResponse): Uint8Array;
    toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg;
};
