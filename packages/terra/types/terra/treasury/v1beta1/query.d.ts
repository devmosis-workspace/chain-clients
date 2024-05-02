import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./treasury";
import { BinaryWriter } from "../../../binary";
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequest {
}
export interface QueryTaxRateRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxRateRequest";
    value: Uint8Array;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestAmino {
}
export interface QueryTaxRateRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxRateRequest";
    value: QueryTaxRateRequestAmino;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestSDKType {
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponse {
    taxRate: string;
}
export interface QueryTaxRateResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxRateResponse";
    value: Uint8Array;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseAmino {
    tax_rate?: string;
}
export interface QueryTaxRateResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxRateResponse";
    value: QueryTaxRateResponseAmino;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseSDKType {
    tax_rate: string;
}
/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequest {
    /** denom defines the denomination to query for. */
    denom: string;
}
export interface QueryTaxCapRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxCapRequest";
    value: Uint8Array;
}
/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequestAmino {
    /** denom defines the denomination to query for. */
    denom?: string;
}
export interface QueryTaxCapRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxCapRequest";
    value: QueryTaxCapRequestAmino;
}
/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequestSDKType {
    denom: string;
}
/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponse {
    taxCap: string;
}
export interface QueryTaxCapResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxCapResponse";
    value: Uint8Array;
}
/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponseAmino {
    tax_cap?: string;
}
export interface QueryTaxCapResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxCapResponse";
    value: QueryTaxCapResponseAmino;
}
/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponseSDKType {
    tax_cap: string;
}
/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequest {
}
export interface QueryTaxCapsRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsRequest";
    value: Uint8Array;
}
/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequestAmino {
}
export interface QueryTaxCapsRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxCapsRequest";
    value: QueryTaxCapsRequestAmino;
}
/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequestSDKType {
}
/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItem {
    denom: string;
    taxCap: string;
}
export interface QueryTaxCapsResponseItemProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponseItem";
    value: Uint8Array;
}
/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItemAmino {
    denom?: string;
    tax_cap?: string;
}
export interface QueryTaxCapsResponseItemAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxCapsResponseItem";
    value: QueryTaxCapsResponseItemAmino;
}
/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItemSDKType {
    denom: string;
    tax_cap: string;
}
/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponse {
    taxCaps: QueryTaxCapsResponseItem[];
}
export interface QueryTaxCapsResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponse";
    value: Uint8Array;
}
/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseAmino {
    tax_caps?: QueryTaxCapsResponseItemAmino[];
}
export interface QueryTaxCapsResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxCapsResponse";
    value: QueryTaxCapsResponseAmino;
}
/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseSDKType {
    tax_caps: QueryTaxCapsResponseItemSDKType[];
}
/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequest {
}
export interface QueryRewardWeightRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightRequest";
    value: Uint8Array;
}
/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequestAmino {
}
export interface QueryRewardWeightRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryRewardWeightRequest";
    value: QueryRewardWeightRequestAmino;
}
/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequestSDKType {
}
/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponse {
    rewardWeight: string;
}
export interface QueryRewardWeightResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightResponse";
    value: Uint8Array;
}
/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponseAmino {
    reward_weight?: string;
}
export interface QueryRewardWeightResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryRewardWeightResponse";
    value: QueryRewardWeightResponseAmino;
}
/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponseSDKType {
    reward_weight: string;
}
/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequest {
}
export interface QueryTaxProceedsRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsRequest";
    value: Uint8Array;
}
/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequestAmino {
}
export interface QueryTaxProceedsRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxProceedsRequest";
    value: QueryTaxProceedsRequestAmino;
}
/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequestSDKType {
}
/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponse {
    taxProceeds: Coin[];
}
export interface QueryTaxProceedsResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsResponse";
    value: Uint8Array;
}
/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponseAmino {
    tax_proceeds?: CoinAmino[];
}
export interface QueryTaxProceedsResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryTaxProceedsResponse";
    value: QueryTaxProceedsResponseAmino;
}
/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponseSDKType {
    tax_proceeds: CoinSDKType[];
}
/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequest {
}
export interface QuerySeigniorageProceedsRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsRequest";
    value: Uint8Array;
}
/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequestAmino {
}
export interface QuerySeigniorageProceedsRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QuerySeigniorageProceedsRequest";
    value: QuerySeigniorageProceedsRequestAmino;
}
/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequestSDKType {
}
/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponse {
    seigniorageProceeds: string;
}
export interface QuerySeigniorageProceedsResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsResponse";
    value: Uint8Array;
}
/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponseAmino {
    seigniorage_proceeds?: string;
}
export interface QuerySeigniorageProceedsResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QuerySeigniorageProceedsResponse";
    value: QuerySeigniorageProceedsResponseAmino;
}
/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponseSDKType {
    seigniorage_proceeds: string;
}
/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequest {
}
export interface QueryIndicatorsRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsRequest";
    value: Uint8Array;
}
/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequestAmino {
}
export interface QueryIndicatorsRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryIndicatorsRequest";
    value: QueryIndicatorsRequestAmino;
}
/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequestSDKType {
}
/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponse {
    trlYear: string;
    trlMonth: string;
}
export interface QueryIndicatorsResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsResponse";
    value: Uint8Array;
}
/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponseAmino {
    trl_year?: string;
    trl_month?: string;
}
export interface QueryIndicatorsResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryIndicatorsResponse";
    value: QueryIndicatorsResponseAmino;
}
/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponseSDKType {
    trl_year: string;
    trl_month: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryParamsRequest";
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
    typeUrl: "/terra.treasury.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryBurnTaxExemptionListRequest is the request type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListRequest {
    pagination?: PageRequest;
}
export interface QueryBurnTaxExemptionListRequestProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListRequest";
    value: Uint8Array;
}
/** QueryBurnTaxExemptionListRequest is the request type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryBurnTaxExemptionListRequestAminoMsg {
    type: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListRequest";
    value: QueryBurnTaxExemptionListRequestAmino;
}
/** QueryBurnTaxExemptionListRequest is the request type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryBurnTaxExemptionListResponse is response type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListResponse {
    addresses: string[];
    pagination?: PageResponse;
}
export interface QueryBurnTaxExemptionListResponseProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListResponse";
    value: Uint8Array;
}
/** QueryBurnTaxExemptionListResponse is response type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListResponseAmino {
    addresses?: string[];
    pagination?: PageResponseAmino;
}
export interface QueryBurnTaxExemptionListResponseAminoMsg {
    type: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListResponse";
    value: QueryBurnTaxExemptionListResponseAmino;
}
/** QueryBurnTaxExemptionListResponse is response type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListResponseSDKType {
    addresses: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryTaxRateRequest: {
    typeUrl: string;
    encode(_: QueryTaxRateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTaxRateRequest;
    fromPartial(_: Partial<QueryTaxRateRequest>): QueryTaxRateRequest;
    fromAmino(_: QueryTaxRateRequestAmino): QueryTaxRateRequest;
    toAmino(_: QueryTaxRateRequest): QueryTaxRateRequestAmino;
    fromAminoMsg(object: QueryTaxRateRequestAminoMsg): QueryTaxRateRequest;
    fromProtoMsg(message: QueryTaxRateRequestProtoMsg): QueryTaxRateRequest;
    toProto(message: QueryTaxRateRequest): Uint8Array;
    toProtoMsg(message: QueryTaxRateRequest): QueryTaxRateRequestProtoMsg;
};
export declare const QueryTaxRateResponse: {
    typeUrl: string;
    encode(message: QueryTaxRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaxRateResponse;
    fromPartial(object: Partial<QueryTaxRateResponse>): QueryTaxRateResponse;
    fromAmino(object: QueryTaxRateResponseAmino): QueryTaxRateResponse;
    toAmino(message: QueryTaxRateResponse): QueryTaxRateResponseAmino;
    fromAminoMsg(object: QueryTaxRateResponseAminoMsg): QueryTaxRateResponse;
    fromProtoMsg(message: QueryTaxRateResponseProtoMsg): QueryTaxRateResponse;
    toProto(message: QueryTaxRateResponse): Uint8Array;
    toProtoMsg(message: QueryTaxRateResponse): QueryTaxRateResponseProtoMsg;
};
export declare const QueryTaxCapRequest: {
    typeUrl: string;
    encode(message: QueryTaxCapRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaxCapRequest;
    fromPartial(object: Partial<QueryTaxCapRequest>): QueryTaxCapRequest;
    fromAmino(object: QueryTaxCapRequestAmino): QueryTaxCapRequest;
    toAmino(message: QueryTaxCapRequest): QueryTaxCapRequestAmino;
    fromAminoMsg(object: QueryTaxCapRequestAminoMsg): QueryTaxCapRequest;
    fromProtoMsg(message: QueryTaxCapRequestProtoMsg): QueryTaxCapRequest;
    toProto(message: QueryTaxCapRequest): Uint8Array;
    toProtoMsg(message: QueryTaxCapRequest): QueryTaxCapRequestProtoMsg;
};
export declare const QueryTaxCapResponse: {
    typeUrl: string;
    encode(message: QueryTaxCapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaxCapResponse;
    fromPartial(object: Partial<QueryTaxCapResponse>): QueryTaxCapResponse;
    fromAmino(object: QueryTaxCapResponseAmino): QueryTaxCapResponse;
    toAmino(message: QueryTaxCapResponse): QueryTaxCapResponseAmino;
    fromAminoMsg(object: QueryTaxCapResponseAminoMsg): QueryTaxCapResponse;
    fromProtoMsg(message: QueryTaxCapResponseProtoMsg): QueryTaxCapResponse;
    toProto(message: QueryTaxCapResponse): Uint8Array;
    toProtoMsg(message: QueryTaxCapResponse): QueryTaxCapResponseProtoMsg;
};
export declare const QueryTaxCapsRequest: {
    typeUrl: string;
    encode(_: QueryTaxCapsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTaxCapsRequest;
    fromPartial(_: Partial<QueryTaxCapsRequest>): QueryTaxCapsRequest;
    fromAmino(_: QueryTaxCapsRequestAmino): QueryTaxCapsRequest;
    toAmino(_: QueryTaxCapsRequest): QueryTaxCapsRequestAmino;
    fromAminoMsg(object: QueryTaxCapsRequestAminoMsg): QueryTaxCapsRequest;
    fromProtoMsg(message: QueryTaxCapsRequestProtoMsg): QueryTaxCapsRequest;
    toProto(message: QueryTaxCapsRequest): Uint8Array;
    toProtoMsg(message: QueryTaxCapsRequest): QueryTaxCapsRequestProtoMsg;
};
export declare const QueryTaxCapsResponseItem: {
    typeUrl: string;
    encode(message: QueryTaxCapsResponseItem, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaxCapsResponseItem;
    fromPartial(object: Partial<QueryTaxCapsResponseItem>): QueryTaxCapsResponseItem;
    fromAmino(object: QueryTaxCapsResponseItemAmino): QueryTaxCapsResponseItem;
    toAmino(message: QueryTaxCapsResponseItem): QueryTaxCapsResponseItemAmino;
    fromAminoMsg(object: QueryTaxCapsResponseItemAminoMsg): QueryTaxCapsResponseItem;
    fromProtoMsg(message: QueryTaxCapsResponseItemProtoMsg): QueryTaxCapsResponseItem;
    toProto(message: QueryTaxCapsResponseItem): Uint8Array;
    toProtoMsg(message: QueryTaxCapsResponseItem): QueryTaxCapsResponseItemProtoMsg;
};
export declare const QueryTaxCapsResponse: {
    typeUrl: string;
    encode(message: QueryTaxCapsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaxCapsResponse;
    fromPartial(object: Partial<QueryTaxCapsResponse>): QueryTaxCapsResponse;
    fromAmino(object: QueryTaxCapsResponseAmino): QueryTaxCapsResponse;
    toAmino(message: QueryTaxCapsResponse): QueryTaxCapsResponseAmino;
    fromAminoMsg(object: QueryTaxCapsResponseAminoMsg): QueryTaxCapsResponse;
    fromProtoMsg(message: QueryTaxCapsResponseProtoMsg): QueryTaxCapsResponse;
    toProto(message: QueryTaxCapsResponse): Uint8Array;
    toProtoMsg(message: QueryTaxCapsResponse): QueryTaxCapsResponseProtoMsg;
};
export declare const QueryRewardWeightRequest: {
    typeUrl: string;
    encode(_: QueryRewardWeightRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryRewardWeightRequest;
    fromPartial(_: Partial<QueryRewardWeightRequest>): QueryRewardWeightRequest;
    fromAmino(_: QueryRewardWeightRequestAmino): QueryRewardWeightRequest;
    toAmino(_: QueryRewardWeightRequest): QueryRewardWeightRequestAmino;
    fromAminoMsg(object: QueryRewardWeightRequestAminoMsg): QueryRewardWeightRequest;
    fromProtoMsg(message: QueryRewardWeightRequestProtoMsg): QueryRewardWeightRequest;
    toProto(message: QueryRewardWeightRequest): Uint8Array;
    toProtoMsg(message: QueryRewardWeightRequest): QueryRewardWeightRequestProtoMsg;
};
export declare const QueryRewardWeightResponse: {
    typeUrl: string;
    encode(message: QueryRewardWeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRewardWeightResponse;
    fromPartial(object: Partial<QueryRewardWeightResponse>): QueryRewardWeightResponse;
    fromAmino(object: QueryRewardWeightResponseAmino): QueryRewardWeightResponse;
    toAmino(message: QueryRewardWeightResponse): QueryRewardWeightResponseAmino;
    fromAminoMsg(object: QueryRewardWeightResponseAminoMsg): QueryRewardWeightResponse;
    fromProtoMsg(message: QueryRewardWeightResponseProtoMsg): QueryRewardWeightResponse;
    toProto(message: QueryRewardWeightResponse): Uint8Array;
    toProtoMsg(message: QueryRewardWeightResponse): QueryRewardWeightResponseProtoMsg;
};
export declare const QueryTaxProceedsRequest: {
    typeUrl: string;
    encode(_: QueryTaxProceedsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTaxProceedsRequest;
    fromPartial(_: Partial<QueryTaxProceedsRequest>): QueryTaxProceedsRequest;
    fromAmino(_: QueryTaxProceedsRequestAmino): QueryTaxProceedsRequest;
    toAmino(_: QueryTaxProceedsRequest): QueryTaxProceedsRequestAmino;
    fromAminoMsg(object: QueryTaxProceedsRequestAminoMsg): QueryTaxProceedsRequest;
    fromProtoMsg(message: QueryTaxProceedsRequestProtoMsg): QueryTaxProceedsRequest;
    toProto(message: QueryTaxProceedsRequest): Uint8Array;
    toProtoMsg(message: QueryTaxProceedsRequest): QueryTaxProceedsRequestProtoMsg;
};
export declare const QueryTaxProceedsResponse: {
    typeUrl: string;
    encode(message: QueryTaxProceedsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaxProceedsResponse;
    fromPartial(object: Partial<QueryTaxProceedsResponse>): QueryTaxProceedsResponse;
    fromAmino(object: QueryTaxProceedsResponseAmino): QueryTaxProceedsResponse;
    toAmino(message: QueryTaxProceedsResponse): QueryTaxProceedsResponseAmino;
    fromAminoMsg(object: QueryTaxProceedsResponseAminoMsg): QueryTaxProceedsResponse;
    fromProtoMsg(message: QueryTaxProceedsResponseProtoMsg): QueryTaxProceedsResponse;
    toProto(message: QueryTaxProceedsResponse): Uint8Array;
    toProtoMsg(message: QueryTaxProceedsResponse): QueryTaxProceedsResponseProtoMsg;
};
export declare const QuerySeigniorageProceedsRequest: {
    typeUrl: string;
    encode(_: QuerySeigniorageProceedsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QuerySeigniorageProceedsRequest;
    fromPartial(_: Partial<QuerySeigniorageProceedsRequest>): QuerySeigniorageProceedsRequest;
    fromAmino(_: QuerySeigniorageProceedsRequestAmino): QuerySeigniorageProceedsRequest;
    toAmino(_: QuerySeigniorageProceedsRequest): QuerySeigniorageProceedsRequestAmino;
    fromAminoMsg(object: QuerySeigniorageProceedsRequestAminoMsg): QuerySeigniorageProceedsRequest;
    fromProtoMsg(message: QuerySeigniorageProceedsRequestProtoMsg): QuerySeigniorageProceedsRequest;
    toProto(message: QuerySeigniorageProceedsRequest): Uint8Array;
    toProtoMsg(message: QuerySeigniorageProceedsRequest): QuerySeigniorageProceedsRequestProtoMsg;
};
export declare const QuerySeigniorageProceedsResponse: {
    typeUrl: string;
    encode(message: QuerySeigniorageProceedsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySeigniorageProceedsResponse;
    fromPartial(object: Partial<QuerySeigniorageProceedsResponse>): QuerySeigniorageProceedsResponse;
    fromAmino(object: QuerySeigniorageProceedsResponseAmino): QuerySeigniorageProceedsResponse;
    toAmino(message: QuerySeigniorageProceedsResponse): QuerySeigniorageProceedsResponseAmino;
    fromAminoMsg(object: QuerySeigniorageProceedsResponseAminoMsg): QuerySeigniorageProceedsResponse;
    fromProtoMsg(message: QuerySeigniorageProceedsResponseProtoMsg): QuerySeigniorageProceedsResponse;
    toProto(message: QuerySeigniorageProceedsResponse): Uint8Array;
    toProtoMsg(message: QuerySeigniorageProceedsResponse): QuerySeigniorageProceedsResponseProtoMsg;
};
export declare const QueryIndicatorsRequest: {
    typeUrl: string;
    encode(_: QueryIndicatorsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryIndicatorsRequest;
    fromPartial(_: Partial<QueryIndicatorsRequest>): QueryIndicatorsRequest;
    fromAmino(_: QueryIndicatorsRequestAmino): QueryIndicatorsRequest;
    toAmino(_: QueryIndicatorsRequest): QueryIndicatorsRequestAmino;
    fromAminoMsg(object: QueryIndicatorsRequestAminoMsg): QueryIndicatorsRequest;
    fromProtoMsg(message: QueryIndicatorsRequestProtoMsg): QueryIndicatorsRequest;
    toProto(message: QueryIndicatorsRequest): Uint8Array;
    toProtoMsg(message: QueryIndicatorsRequest): QueryIndicatorsRequestProtoMsg;
};
export declare const QueryIndicatorsResponse: {
    typeUrl: string;
    encode(message: QueryIndicatorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIndicatorsResponse;
    fromPartial(object: Partial<QueryIndicatorsResponse>): QueryIndicatorsResponse;
    fromAmino(object: QueryIndicatorsResponseAmino): QueryIndicatorsResponse;
    toAmino(message: QueryIndicatorsResponse): QueryIndicatorsResponseAmino;
    fromAminoMsg(object: QueryIndicatorsResponseAminoMsg): QueryIndicatorsResponse;
    fromProtoMsg(message: QueryIndicatorsResponseProtoMsg): QueryIndicatorsResponse;
    toProto(message: QueryIndicatorsResponse): Uint8Array;
    toProtoMsg(message: QueryIndicatorsResponse): QueryIndicatorsResponseProtoMsg;
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
export declare const QueryBurnTaxExemptionListRequest: {
    typeUrl: string;
    encode(message: QueryBurnTaxExemptionListRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBurnTaxExemptionListRequest;
    fromPartial(object: Partial<QueryBurnTaxExemptionListRequest>): QueryBurnTaxExemptionListRequest;
    fromAmino(object: QueryBurnTaxExemptionListRequestAmino): QueryBurnTaxExemptionListRequest;
    toAmino(message: QueryBurnTaxExemptionListRequest): QueryBurnTaxExemptionListRequestAmino;
    fromAminoMsg(object: QueryBurnTaxExemptionListRequestAminoMsg): QueryBurnTaxExemptionListRequest;
    fromProtoMsg(message: QueryBurnTaxExemptionListRequestProtoMsg): QueryBurnTaxExemptionListRequest;
    toProto(message: QueryBurnTaxExemptionListRequest): Uint8Array;
    toProtoMsg(message: QueryBurnTaxExemptionListRequest): QueryBurnTaxExemptionListRequestProtoMsg;
};
export declare const QueryBurnTaxExemptionListResponse: {
    typeUrl: string;
    encode(message: QueryBurnTaxExemptionListResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBurnTaxExemptionListResponse;
    fromPartial(object: Partial<QueryBurnTaxExemptionListResponse>): QueryBurnTaxExemptionListResponse;
    fromAmino(object: QueryBurnTaxExemptionListResponseAmino): QueryBurnTaxExemptionListResponse;
    toAmino(message: QueryBurnTaxExemptionListResponse): QueryBurnTaxExemptionListResponseAmino;
    fromAminoMsg(object: QueryBurnTaxExemptionListResponseAminoMsg): QueryBurnTaxExemptionListResponse;
    fromProtoMsg(message: QueryBurnTaxExemptionListResponseProtoMsg): QueryBurnTaxExemptionListResponse;
    toProto(message: QueryBurnTaxExemptionListResponse): Uint8Array;
    toProtoMsg(message: QueryBurnTaxExemptionListResponse): QueryBurnTaxExemptionListResponseProtoMsg;
};
