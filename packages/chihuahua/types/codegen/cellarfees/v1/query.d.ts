import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FeeAccrualCounters, FeeAccrualCountersAmino, FeeAccrualCountersSDKType } from "./cellarfees";
import { BinaryWriter } from "../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cellarfees.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cellarfees.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cellarfees.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cellarfees.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryModuleAccountsRequest {
}
export interface QueryModuleAccountsRequestProtoMsg {
    typeUrl: "/cellarfees.v1.QueryModuleAccountsRequest";
    value: Uint8Array;
}
export interface QueryModuleAccountsRequestAmino {
}
export interface QueryModuleAccountsRequestAminoMsg {
    type: "/cellarfees.v1.QueryModuleAccountsRequest";
    value: QueryModuleAccountsRequestAmino;
}
export interface QueryModuleAccountsRequestSDKType {
}
export interface QueryModuleAccountsResponse {
    feesAddress: string;
}
export interface QueryModuleAccountsResponseProtoMsg {
    typeUrl: "/cellarfees.v1.QueryModuleAccountsResponse";
    value: Uint8Array;
}
export interface QueryModuleAccountsResponseAmino {
    fees_address?: string;
}
export interface QueryModuleAccountsResponseAminoMsg {
    type: "/cellarfees.v1.QueryModuleAccountsResponse";
    value: QueryModuleAccountsResponseAmino;
}
export interface QueryModuleAccountsResponseSDKType {
    fees_address: string;
}
export interface QueryLastRewardSupplyPeakRequest {
}
export interface QueryLastRewardSupplyPeakRequestProtoMsg {
    typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakRequest";
    value: Uint8Array;
}
export interface QueryLastRewardSupplyPeakRequestAmino {
}
export interface QueryLastRewardSupplyPeakRequestAminoMsg {
    type: "/cellarfees.v1.QueryLastRewardSupplyPeakRequest";
    value: QueryLastRewardSupplyPeakRequestAmino;
}
export interface QueryLastRewardSupplyPeakRequestSDKType {
}
export interface QueryLastRewardSupplyPeakResponse {
    lastRewardSupplyPeak: string;
}
export interface QueryLastRewardSupplyPeakResponseProtoMsg {
    typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakResponse";
    value: Uint8Array;
}
export interface QueryLastRewardSupplyPeakResponseAmino {
    last_reward_supply_peak?: string;
}
export interface QueryLastRewardSupplyPeakResponseAminoMsg {
    type: "/cellarfees.v1.QueryLastRewardSupplyPeakResponse";
    value: QueryLastRewardSupplyPeakResponseAmino;
}
export interface QueryLastRewardSupplyPeakResponseSDKType {
    last_reward_supply_peak: string;
}
export interface QueryFeeAccrualCountersRequest {
}
export interface QueryFeeAccrualCountersRequestProtoMsg {
    typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersRequest";
    value: Uint8Array;
}
export interface QueryFeeAccrualCountersRequestAmino {
}
export interface QueryFeeAccrualCountersRequestAminoMsg {
    type: "/cellarfees.v1.QueryFeeAccrualCountersRequest";
    value: QueryFeeAccrualCountersRequestAmino;
}
export interface QueryFeeAccrualCountersRequestSDKType {
}
export interface QueryFeeAccrualCountersResponse {
    feeAccrualCounters: FeeAccrualCounters;
}
export interface QueryFeeAccrualCountersResponseProtoMsg {
    typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersResponse";
    value: Uint8Array;
}
export interface QueryFeeAccrualCountersResponseAmino {
    fee_accrual_counters?: FeeAccrualCountersAmino;
}
export interface QueryFeeAccrualCountersResponseAminoMsg {
    type: "/cellarfees.v1.QueryFeeAccrualCountersResponse";
    value: QueryFeeAccrualCountersResponseAmino;
}
export interface QueryFeeAccrualCountersResponseSDKType {
    fee_accrual_counters: FeeAccrualCountersSDKType;
}
export interface QueryAPYRequest {
}
export interface QueryAPYRequestProtoMsg {
    typeUrl: "/cellarfees.v1.QueryAPYRequest";
    value: Uint8Array;
}
export interface QueryAPYRequestAmino {
}
export interface QueryAPYRequestAminoMsg {
    type: "/cellarfees.v1.QueryAPYRequest";
    value: QueryAPYRequestAmino;
}
export interface QueryAPYRequestSDKType {
}
export interface QueryAPYResponse {
    apy: string;
}
export interface QueryAPYResponseProtoMsg {
    typeUrl: "/cellarfees.v1.QueryAPYResponse";
    value: Uint8Array;
}
export interface QueryAPYResponseAmino {
    apy?: string;
}
export interface QueryAPYResponseAminoMsg {
    type: "/cellarfees.v1.QueryAPYResponse";
    value: QueryAPYResponseAmino;
}
export interface QueryAPYResponseSDKType {
    apy: string;
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
export declare const QueryModuleAccountsRequest: {
    typeUrl: string;
    encode(_: QueryModuleAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleAccountsRequest;
    fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
    fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest;
    toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino;
    fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest;
    fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest;
    toProto(message: QueryModuleAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg;
};
export declare const QueryModuleAccountsResponse: {
    typeUrl: string;
    encode(message: QueryModuleAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleAccountsResponse;
    fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
    fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse;
    toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino;
    fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse;
    fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse;
    toProto(message: QueryModuleAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg;
};
export declare const QueryLastRewardSupplyPeakRequest: {
    typeUrl: string;
    encode(_: QueryLastRewardSupplyPeakRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLastRewardSupplyPeakRequest;
    fromPartial(_: Partial<QueryLastRewardSupplyPeakRequest>): QueryLastRewardSupplyPeakRequest;
    fromAmino(_: QueryLastRewardSupplyPeakRequestAmino): QueryLastRewardSupplyPeakRequest;
    toAmino(_: QueryLastRewardSupplyPeakRequest): QueryLastRewardSupplyPeakRequestAmino;
    fromAminoMsg(object: QueryLastRewardSupplyPeakRequestAminoMsg): QueryLastRewardSupplyPeakRequest;
    fromProtoMsg(message: QueryLastRewardSupplyPeakRequestProtoMsg): QueryLastRewardSupplyPeakRequest;
    toProto(message: QueryLastRewardSupplyPeakRequest): Uint8Array;
    toProtoMsg(message: QueryLastRewardSupplyPeakRequest): QueryLastRewardSupplyPeakRequestProtoMsg;
};
export declare const QueryLastRewardSupplyPeakResponse: {
    typeUrl: string;
    encode(message: QueryLastRewardSupplyPeakResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastRewardSupplyPeakResponse;
    fromPartial(object: Partial<QueryLastRewardSupplyPeakResponse>): QueryLastRewardSupplyPeakResponse;
    fromAmino(object: QueryLastRewardSupplyPeakResponseAmino): QueryLastRewardSupplyPeakResponse;
    toAmino(message: QueryLastRewardSupplyPeakResponse): QueryLastRewardSupplyPeakResponseAmino;
    fromAminoMsg(object: QueryLastRewardSupplyPeakResponseAminoMsg): QueryLastRewardSupplyPeakResponse;
    fromProtoMsg(message: QueryLastRewardSupplyPeakResponseProtoMsg): QueryLastRewardSupplyPeakResponse;
    toProto(message: QueryLastRewardSupplyPeakResponse): Uint8Array;
    toProtoMsg(message: QueryLastRewardSupplyPeakResponse): QueryLastRewardSupplyPeakResponseProtoMsg;
};
export declare const QueryFeeAccrualCountersRequest: {
    typeUrl: string;
    encode(_: QueryFeeAccrualCountersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryFeeAccrualCountersRequest;
    fromPartial(_: Partial<QueryFeeAccrualCountersRequest>): QueryFeeAccrualCountersRequest;
    fromAmino(_: QueryFeeAccrualCountersRequestAmino): QueryFeeAccrualCountersRequest;
    toAmino(_: QueryFeeAccrualCountersRequest): QueryFeeAccrualCountersRequestAmino;
    fromAminoMsg(object: QueryFeeAccrualCountersRequestAminoMsg): QueryFeeAccrualCountersRequest;
    fromProtoMsg(message: QueryFeeAccrualCountersRequestProtoMsg): QueryFeeAccrualCountersRequest;
    toProto(message: QueryFeeAccrualCountersRequest): Uint8Array;
    toProtoMsg(message: QueryFeeAccrualCountersRequest): QueryFeeAccrualCountersRequestProtoMsg;
};
export declare const QueryFeeAccrualCountersResponse: {
    typeUrl: string;
    encode(message: QueryFeeAccrualCountersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeAccrualCountersResponse;
    fromPartial(object: Partial<QueryFeeAccrualCountersResponse>): QueryFeeAccrualCountersResponse;
    fromAmino(object: QueryFeeAccrualCountersResponseAmino): QueryFeeAccrualCountersResponse;
    toAmino(message: QueryFeeAccrualCountersResponse): QueryFeeAccrualCountersResponseAmino;
    fromAminoMsg(object: QueryFeeAccrualCountersResponseAminoMsg): QueryFeeAccrualCountersResponse;
    fromProtoMsg(message: QueryFeeAccrualCountersResponseProtoMsg): QueryFeeAccrualCountersResponse;
    toProto(message: QueryFeeAccrualCountersResponse): Uint8Array;
    toProtoMsg(message: QueryFeeAccrualCountersResponse): QueryFeeAccrualCountersResponseProtoMsg;
};
export declare const QueryAPYRequest: {
    typeUrl: string;
    encode(_: QueryAPYRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAPYRequest;
    fromPartial(_: Partial<QueryAPYRequest>): QueryAPYRequest;
    fromAmino(_: QueryAPYRequestAmino): QueryAPYRequest;
    toAmino(_: QueryAPYRequest): QueryAPYRequestAmino;
    fromAminoMsg(object: QueryAPYRequestAminoMsg): QueryAPYRequest;
    fromProtoMsg(message: QueryAPYRequestProtoMsg): QueryAPYRequest;
    toProto(message: QueryAPYRequest): Uint8Array;
    toProtoMsg(message: QueryAPYRequest): QueryAPYRequestProtoMsg;
};
export declare const QueryAPYResponse: {
    typeUrl: string;
    encode(message: QueryAPYResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAPYResponse;
    fromPartial(object: Partial<QueryAPYResponse>): QueryAPYResponse;
    fromAmino(object: QueryAPYResponseAmino): QueryAPYResponse;
    toAmino(message: QueryAPYResponse): QueryAPYResponseAmino;
    fromAminoMsg(object: QueryAPYResponseAminoMsg): QueryAPYResponse;
    fromProtoMsg(message: QueryAPYResponseProtoMsg): QueryAPYResponse;
    toProto(message: QueryAPYResponse): Uint8Array;
    toProtoMsg(message: QueryAPYResponse): QueryAPYResponseProtoMsg;
};
