import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Allocation, AllocationAmino, AllocationSDKType } from "./allocation";
import { Payout, PayoutAmino, PayoutSDKType } from "./payout";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface QuerySubscriptionsRequest {
    pagination?: PageRequest;
}
export interface QuerySubscriptionsRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsRequest";
    value: Uint8Array;
}
export interface QuerySubscriptionsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsRequestAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsRequest";
    value: QuerySubscriptionsRequestAmino;
}
export interface QuerySubscriptionsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionsForAccountRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QuerySubscriptionsForAccountRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountRequest";
    value: Uint8Array;
}
export interface QuerySubscriptionsForAccountRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsForAccountRequestAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsForAccountRequest";
    value: QuerySubscriptionsForAccountRequestAmino;
}
export interface QuerySubscriptionsForAccountRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionsForNodeRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QuerySubscriptionsForNodeRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeRequest";
    value: Uint8Array;
}
export interface QuerySubscriptionsForNodeRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsForNodeRequestAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsForNodeRequest";
    value: QuerySubscriptionsForNodeRequestAmino;
}
export interface QuerySubscriptionsForNodeRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionsForPlanRequest {
    id: bigint;
    pagination?: PageRequest;
}
export interface QuerySubscriptionsForPlanRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanRequest";
    value: Uint8Array;
}
export interface QuerySubscriptionsForPlanRequestAmino {
    id?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySubscriptionsForPlanRequestAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsForPlanRequest";
    value: QuerySubscriptionsForPlanRequestAmino;
}
export interface QuerySubscriptionsForPlanRequestSDKType {
    id: bigint;
    pagination?: PageRequestSDKType;
}
export interface QuerySubscriptionRequest {
    id: bigint;
}
export interface QuerySubscriptionRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionRequest";
    value: Uint8Array;
}
export interface QuerySubscriptionRequestAmino {
    id?: string;
}
export interface QuerySubscriptionRequestAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionRequest";
    value: QuerySubscriptionRequestAmino;
}
export interface QuerySubscriptionRequestSDKType {
    id: bigint;
}
export interface QueryAllocationRequest {
    id: bigint;
    address: string;
}
export interface QueryAllocationRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryAllocationRequest";
    value: Uint8Array;
}
export interface QueryAllocationRequestAmino {
    id?: string;
    address?: string;
}
export interface QueryAllocationRequestAminoMsg {
    type: "/sentinel.subscription.v2.QueryAllocationRequest";
    value: QueryAllocationRequestAmino;
}
export interface QueryAllocationRequestSDKType {
    id: bigint;
    address: string;
}
export interface QueryAllocationsRequest {
    id: bigint;
    pagination?: PageRequest;
}
export interface QueryAllocationsRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryAllocationsRequest";
    value: Uint8Array;
}
export interface QueryAllocationsRequestAmino {
    id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllocationsRequestAminoMsg {
    type: "/sentinel.subscription.v2.QueryAllocationsRequest";
    value: QueryAllocationsRequestAmino;
}
export interface QueryAllocationsRequestSDKType {
    id: bigint;
    pagination?: PageRequestSDKType;
}
export interface QueryPayoutsRequest {
    pagination?: PageRequest;
}
export interface QueryPayoutsRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutsRequest";
    value: Uint8Array;
}
export interface QueryPayoutsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryPayoutsRequestAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutsRequest";
    value: QueryPayoutsRequestAmino;
}
export interface QueryPayoutsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPayoutsForAccountRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryPayoutsForAccountRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountRequest";
    value: Uint8Array;
}
export interface QueryPayoutsForAccountRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryPayoutsForAccountRequestAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutsForAccountRequest";
    value: QueryPayoutsForAccountRequestAmino;
}
export interface QueryPayoutsForAccountRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryPayoutsForNodeRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryPayoutsForNodeRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeRequest";
    value: Uint8Array;
}
export interface QueryPayoutsForNodeRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryPayoutsForNodeRequestAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutsForNodeRequest";
    value: QueryPayoutsForNodeRequestAmino;
}
export interface QueryPayoutsForNodeRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryPayoutRequest {
    id: bigint;
}
export interface QueryPayoutRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutRequest";
    value: Uint8Array;
}
export interface QueryPayoutRequestAmino {
    id?: string;
}
export interface QueryPayoutRequestAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutRequest";
    value: QueryPayoutRequestAmino;
}
export interface QueryPayoutRequestSDKType {
    id: bigint;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/sentinel.subscription.v2.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QuerySubscriptionsResponse {
    subscriptions: Any[];
    pagination?: PageResponse;
}
export interface QuerySubscriptionsResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsResponse";
    value: Uint8Array;
}
export interface QuerySubscriptionsResponseAmino {
    subscriptions?: AnyAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsResponseAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsResponse";
    value: QuerySubscriptionsResponseAmino;
}
export interface QuerySubscriptionsResponseSDKType {
    subscriptions: AnySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionsForAccountResponse {
    subscriptions: Any[];
    pagination?: PageResponse;
}
export interface QuerySubscriptionsForAccountResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForAccountResponse";
    value: Uint8Array;
}
export interface QuerySubscriptionsForAccountResponseAmino {
    subscriptions?: AnyAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsForAccountResponseAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsForAccountResponse";
    value: QuerySubscriptionsForAccountResponseAmino;
}
export interface QuerySubscriptionsForAccountResponseSDKType {
    subscriptions: AnySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionsForNodeResponse {
    subscriptions: Any[];
    pagination?: PageResponse;
}
export interface QuerySubscriptionsForNodeResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForNodeResponse";
    value: Uint8Array;
}
export interface QuerySubscriptionsForNodeResponseAmino {
    subscriptions?: AnyAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsForNodeResponseAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsForNodeResponse";
    value: QuerySubscriptionsForNodeResponseAmino;
}
export interface QuerySubscriptionsForNodeResponseSDKType {
    subscriptions: AnySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionsForPlanResponse {
    subscriptions: Any[];
    pagination?: PageResponse;
}
export interface QuerySubscriptionsForPlanResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionsForPlanResponse";
    value: Uint8Array;
}
export interface QuerySubscriptionsForPlanResponseAmino {
    subscriptions?: AnyAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySubscriptionsForPlanResponseAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionsForPlanResponse";
    value: QuerySubscriptionsForPlanResponseAmino;
}
export interface QuerySubscriptionsForPlanResponseSDKType {
    subscriptions: AnySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QuerySubscriptionResponse {
    subscription?: Any;
}
export interface QuerySubscriptionResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QuerySubscriptionResponse";
    value: Uint8Array;
}
export interface QuerySubscriptionResponseAmino {
    subscription?: AnyAmino;
}
export interface QuerySubscriptionResponseAminoMsg {
    type: "/sentinel.subscription.v2.QuerySubscriptionResponse";
    value: QuerySubscriptionResponseAmino;
}
export interface QuerySubscriptionResponseSDKType {
    subscription?: AnySDKType;
}
export interface QueryAllocationResponse {
    allocation: Allocation;
}
export interface QueryAllocationResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryAllocationResponse";
    value: Uint8Array;
}
export interface QueryAllocationResponseAmino {
    allocation?: AllocationAmino;
}
export interface QueryAllocationResponseAminoMsg {
    type: "/sentinel.subscription.v2.QueryAllocationResponse";
    value: QueryAllocationResponseAmino;
}
export interface QueryAllocationResponseSDKType {
    allocation: AllocationSDKType;
}
export interface QueryAllocationsResponse {
    allocations: Allocation[];
    pagination?: PageResponse;
}
export interface QueryAllocationsResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryAllocationsResponse";
    value: Uint8Array;
}
export interface QueryAllocationsResponseAmino {
    allocations?: AllocationAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllocationsResponseAminoMsg {
    type: "/sentinel.subscription.v2.QueryAllocationsResponse";
    value: QueryAllocationsResponseAmino;
}
export interface QueryAllocationsResponseSDKType {
    allocations: AllocationSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPayoutsResponse {
    payouts: Payout[];
    pagination?: PageResponse;
}
export interface QueryPayoutsResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutsResponse";
    value: Uint8Array;
}
export interface QueryPayoutsResponseAmino {
    payouts?: PayoutAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPayoutsResponseAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutsResponse";
    value: QueryPayoutsResponseAmino;
}
export interface QueryPayoutsResponseSDKType {
    payouts: PayoutSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPayoutsForAccountResponse {
    payouts: Payout[];
    pagination?: PageResponse;
}
export interface QueryPayoutsForAccountResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutsForAccountResponse";
    value: Uint8Array;
}
export interface QueryPayoutsForAccountResponseAmino {
    payouts?: PayoutAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPayoutsForAccountResponseAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutsForAccountResponse";
    value: QueryPayoutsForAccountResponseAmino;
}
export interface QueryPayoutsForAccountResponseSDKType {
    payouts: PayoutSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPayoutsForNodeResponse {
    payouts: Payout[];
    pagination?: PageResponse;
}
export interface QueryPayoutsForNodeResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutsForNodeResponse";
    value: Uint8Array;
}
export interface QueryPayoutsForNodeResponseAmino {
    payouts?: PayoutAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPayoutsForNodeResponseAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutsForNodeResponse";
    value: QueryPayoutsForNodeResponseAmino;
}
export interface QueryPayoutsForNodeResponseSDKType {
    payouts: PayoutSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPayoutResponse {
    payout: Payout;
}
export interface QueryPayoutResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryPayoutResponse";
    value: Uint8Array;
}
export interface QueryPayoutResponseAmino {
    payout?: PayoutAmino;
}
export interface QueryPayoutResponseAminoMsg {
    type: "/sentinel.subscription.v2.QueryPayoutResponse";
    value: QueryPayoutResponseAmino;
}
export interface QueryPayoutResponseSDKType {
    payout: PayoutSDKType;
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/sentinel.subscription.v2.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/sentinel.subscription.v2.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QuerySubscriptionsRequest: {
    typeUrl: string;
    encode(message: QuerySubscriptionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsRequest;
    fromPartial(object: Partial<QuerySubscriptionsRequest>): QuerySubscriptionsRequest;
    fromAmino(object: QuerySubscriptionsRequestAmino): QuerySubscriptionsRequest;
    toAmino(message: QuerySubscriptionsRequest): QuerySubscriptionsRequestAmino;
    fromAminoMsg(object: QuerySubscriptionsRequestAminoMsg): QuerySubscriptionsRequest;
    fromProtoMsg(message: QuerySubscriptionsRequestProtoMsg): QuerySubscriptionsRequest;
    toProto(message: QuerySubscriptionsRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsRequest): QuerySubscriptionsRequestProtoMsg;
};
export declare const QuerySubscriptionsForAccountRequest: {
    typeUrl: string;
    encode(message: QuerySubscriptionsForAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsForAccountRequest;
    fromPartial(object: Partial<QuerySubscriptionsForAccountRequest>): QuerySubscriptionsForAccountRequest;
    fromAmino(object: QuerySubscriptionsForAccountRequestAmino): QuerySubscriptionsForAccountRequest;
    toAmino(message: QuerySubscriptionsForAccountRequest): QuerySubscriptionsForAccountRequestAmino;
    fromAminoMsg(object: QuerySubscriptionsForAccountRequestAminoMsg): QuerySubscriptionsForAccountRequest;
    fromProtoMsg(message: QuerySubscriptionsForAccountRequestProtoMsg): QuerySubscriptionsForAccountRequest;
    toProto(message: QuerySubscriptionsForAccountRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsForAccountRequest): QuerySubscriptionsForAccountRequestProtoMsg;
};
export declare const QuerySubscriptionsForNodeRequest: {
    typeUrl: string;
    encode(message: QuerySubscriptionsForNodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsForNodeRequest;
    fromPartial(object: Partial<QuerySubscriptionsForNodeRequest>): QuerySubscriptionsForNodeRequest;
    fromAmino(object: QuerySubscriptionsForNodeRequestAmino): QuerySubscriptionsForNodeRequest;
    toAmino(message: QuerySubscriptionsForNodeRequest): QuerySubscriptionsForNodeRequestAmino;
    fromAminoMsg(object: QuerySubscriptionsForNodeRequestAminoMsg): QuerySubscriptionsForNodeRequest;
    fromProtoMsg(message: QuerySubscriptionsForNodeRequestProtoMsg): QuerySubscriptionsForNodeRequest;
    toProto(message: QuerySubscriptionsForNodeRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsForNodeRequest): QuerySubscriptionsForNodeRequestProtoMsg;
};
export declare const QuerySubscriptionsForPlanRequest: {
    typeUrl: string;
    encode(message: QuerySubscriptionsForPlanRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsForPlanRequest;
    fromPartial(object: Partial<QuerySubscriptionsForPlanRequest>): QuerySubscriptionsForPlanRequest;
    fromAmino(object: QuerySubscriptionsForPlanRequestAmino): QuerySubscriptionsForPlanRequest;
    toAmino(message: QuerySubscriptionsForPlanRequest): QuerySubscriptionsForPlanRequestAmino;
    fromAminoMsg(object: QuerySubscriptionsForPlanRequestAminoMsg): QuerySubscriptionsForPlanRequest;
    fromProtoMsg(message: QuerySubscriptionsForPlanRequestProtoMsg): QuerySubscriptionsForPlanRequest;
    toProto(message: QuerySubscriptionsForPlanRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsForPlanRequest): QuerySubscriptionsForPlanRequestProtoMsg;
};
export declare const QuerySubscriptionRequest: {
    typeUrl: string;
    encode(message: QuerySubscriptionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionRequest;
    fromPartial(object: Partial<QuerySubscriptionRequest>): QuerySubscriptionRequest;
    fromAmino(object: QuerySubscriptionRequestAmino): QuerySubscriptionRequest;
    toAmino(message: QuerySubscriptionRequest): QuerySubscriptionRequestAmino;
    fromAminoMsg(object: QuerySubscriptionRequestAminoMsg): QuerySubscriptionRequest;
    fromProtoMsg(message: QuerySubscriptionRequestProtoMsg): QuerySubscriptionRequest;
    toProto(message: QuerySubscriptionRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriptionRequest): QuerySubscriptionRequestProtoMsg;
};
export declare const QueryAllocationRequest: {
    typeUrl: string;
    encode(message: QueryAllocationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationRequest;
    fromPartial(object: Partial<QueryAllocationRequest>): QueryAllocationRequest;
    fromAmino(object: QueryAllocationRequestAmino): QueryAllocationRequest;
    toAmino(message: QueryAllocationRequest): QueryAllocationRequestAmino;
    fromAminoMsg(object: QueryAllocationRequestAminoMsg): QueryAllocationRequest;
    fromProtoMsg(message: QueryAllocationRequestProtoMsg): QueryAllocationRequest;
    toProto(message: QueryAllocationRequest): Uint8Array;
    toProtoMsg(message: QueryAllocationRequest): QueryAllocationRequestProtoMsg;
};
export declare const QueryAllocationsRequest: {
    typeUrl: string;
    encode(message: QueryAllocationsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationsRequest;
    fromPartial(object: Partial<QueryAllocationsRequest>): QueryAllocationsRequest;
    fromAmino(object: QueryAllocationsRequestAmino): QueryAllocationsRequest;
    toAmino(message: QueryAllocationsRequest): QueryAllocationsRequestAmino;
    fromAminoMsg(object: QueryAllocationsRequestAminoMsg): QueryAllocationsRequest;
    fromProtoMsg(message: QueryAllocationsRequestProtoMsg): QueryAllocationsRequest;
    toProto(message: QueryAllocationsRequest): Uint8Array;
    toProtoMsg(message: QueryAllocationsRequest): QueryAllocationsRequestProtoMsg;
};
export declare const QueryPayoutsRequest: {
    typeUrl: string;
    encode(message: QueryPayoutsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutsRequest;
    fromPartial(object: Partial<QueryPayoutsRequest>): QueryPayoutsRequest;
    fromAmino(object: QueryPayoutsRequestAmino): QueryPayoutsRequest;
    toAmino(message: QueryPayoutsRequest): QueryPayoutsRequestAmino;
    fromAminoMsg(object: QueryPayoutsRequestAminoMsg): QueryPayoutsRequest;
    fromProtoMsg(message: QueryPayoutsRequestProtoMsg): QueryPayoutsRequest;
    toProto(message: QueryPayoutsRequest): Uint8Array;
    toProtoMsg(message: QueryPayoutsRequest): QueryPayoutsRequestProtoMsg;
};
export declare const QueryPayoutsForAccountRequest: {
    typeUrl: string;
    encode(message: QueryPayoutsForAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutsForAccountRequest;
    fromPartial(object: Partial<QueryPayoutsForAccountRequest>): QueryPayoutsForAccountRequest;
    fromAmino(object: QueryPayoutsForAccountRequestAmino): QueryPayoutsForAccountRequest;
    toAmino(message: QueryPayoutsForAccountRequest): QueryPayoutsForAccountRequestAmino;
    fromAminoMsg(object: QueryPayoutsForAccountRequestAminoMsg): QueryPayoutsForAccountRequest;
    fromProtoMsg(message: QueryPayoutsForAccountRequestProtoMsg): QueryPayoutsForAccountRequest;
    toProto(message: QueryPayoutsForAccountRequest): Uint8Array;
    toProtoMsg(message: QueryPayoutsForAccountRequest): QueryPayoutsForAccountRequestProtoMsg;
};
export declare const QueryPayoutsForNodeRequest: {
    typeUrl: string;
    encode(message: QueryPayoutsForNodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutsForNodeRequest;
    fromPartial(object: Partial<QueryPayoutsForNodeRequest>): QueryPayoutsForNodeRequest;
    fromAmino(object: QueryPayoutsForNodeRequestAmino): QueryPayoutsForNodeRequest;
    toAmino(message: QueryPayoutsForNodeRequest): QueryPayoutsForNodeRequestAmino;
    fromAminoMsg(object: QueryPayoutsForNodeRequestAminoMsg): QueryPayoutsForNodeRequest;
    fromProtoMsg(message: QueryPayoutsForNodeRequestProtoMsg): QueryPayoutsForNodeRequest;
    toProto(message: QueryPayoutsForNodeRequest): Uint8Array;
    toProtoMsg(message: QueryPayoutsForNodeRequest): QueryPayoutsForNodeRequestProtoMsg;
};
export declare const QueryPayoutRequest: {
    typeUrl: string;
    encode(message: QueryPayoutRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutRequest;
    fromPartial(object: Partial<QueryPayoutRequest>): QueryPayoutRequest;
    fromAmino(object: QueryPayoutRequestAmino): QueryPayoutRequest;
    toAmino(message: QueryPayoutRequest): QueryPayoutRequestAmino;
    fromAminoMsg(object: QueryPayoutRequestAminoMsg): QueryPayoutRequest;
    fromProtoMsg(message: QueryPayoutRequestProtoMsg): QueryPayoutRequest;
    toProto(message: QueryPayoutRequest): Uint8Array;
    toProtoMsg(message: QueryPayoutRequest): QueryPayoutRequestProtoMsg;
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
export declare const QuerySubscriptionsResponse: {
    typeUrl: string;
    encode(message: QuerySubscriptionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsResponse;
    fromPartial(object: Partial<QuerySubscriptionsResponse>): QuerySubscriptionsResponse;
    fromAmino(object: QuerySubscriptionsResponseAmino): QuerySubscriptionsResponse;
    toAmino(message: QuerySubscriptionsResponse): QuerySubscriptionsResponseAmino;
    fromAminoMsg(object: QuerySubscriptionsResponseAminoMsg): QuerySubscriptionsResponse;
    fromProtoMsg(message: QuerySubscriptionsResponseProtoMsg): QuerySubscriptionsResponse;
    toProto(message: QuerySubscriptionsResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsResponse): QuerySubscriptionsResponseProtoMsg;
};
export declare const QuerySubscriptionsForAccountResponse: {
    typeUrl: string;
    encode(message: QuerySubscriptionsForAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsForAccountResponse;
    fromPartial(object: Partial<QuerySubscriptionsForAccountResponse>): QuerySubscriptionsForAccountResponse;
    fromAmino(object: QuerySubscriptionsForAccountResponseAmino): QuerySubscriptionsForAccountResponse;
    toAmino(message: QuerySubscriptionsForAccountResponse): QuerySubscriptionsForAccountResponseAmino;
    fromAminoMsg(object: QuerySubscriptionsForAccountResponseAminoMsg): QuerySubscriptionsForAccountResponse;
    fromProtoMsg(message: QuerySubscriptionsForAccountResponseProtoMsg): QuerySubscriptionsForAccountResponse;
    toProto(message: QuerySubscriptionsForAccountResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsForAccountResponse): QuerySubscriptionsForAccountResponseProtoMsg;
};
export declare const QuerySubscriptionsForNodeResponse: {
    typeUrl: string;
    encode(message: QuerySubscriptionsForNodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsForNodeResponse;
    fromPartial(object: Partial<QuerySubscriptionsForNodeResponse>): QuerySubscriptionsForNodeResponse;
    fromAmino(object: QuerySubscriptionsForNodeResponseAmino): QuerySubscriptionsForNodeResponse;
    toAmino(message: QuerySubscriptionsForNodeResponse): QuerySubscriptionsForNodeResponseAmino;
    fromAminoMsg(object: QuerySubscriptionsForNodeResponseAminoMsg): QuerySubscriptionsForNodeResponse;
    fromProtoMsg(message: QuerySubscriptionsForNodeResponseProtoMsg): QuerySubscriptionsForNodeResponse;
    toProto(message: QuerySubscriptionsForNodeResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsForNodeResponse): QuerySubscriptionsForNodeResponseProtoMsg;
};
export declare const QuerySubscriptionsForPlanResponse: {
    typeUrl: string;
    encode(message: QuerySubscriptionsForPlanResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionsForPlanResponse;
    fromPartial(object: Partial<QuerySubscriptionsForPlanResponse>): QuerySubscriptionsForPlanResponse;
    fromAmino(object: QuerySubscriptionsForPlanResponseAmino): QuerySubscriptionsForPlanResponse;
    toAmino(message: QuerySubscriptionsForPlanResponse): QuerySubscriptionsForPlanResponseAmino;
    fromAminoMsg(object: QuerySubscriptionsForPlanResponseAminoMsg): QuerySubscriptionsForPlanResponse;
    fromProtoMsg(message: QuerySubscriptionsForPlanResponseProtoMsg): QuerySubscriptionsForPlanResponse;
    toProto(message: QuerySubscriptionsForPlanResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriptionsForPlanResponse): QuerySubscriptionsForPlanResponseProtoMsg;
};
export declare const QuerySubscriptionResponse: {
    typeUrl: string;
    encode(message: QuerySubscriptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriptionResponse;
    fromPartial(object: Partial<QuerySubscriptionResponse>): QuerySubscriptionResponse;
    fromAmino(object: QuerySubscriptionResponseAmino): QuerySubscriptionResponse;
    toAmino(message: QuerySubscriptionResponse): QuerySubscriptionResponseAmino;
    fromAminoMsg(object: QuerySubscriptionResponseAminoMsg): QuerySubscriptionResponse;
    fromProtoMsg(message: QuerySubscriptionResponseProtoMsg): QuerySubscriptionResponse;
    toProto(message: QuerySubscriptionResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriptionResponse): QuerySubscriptionResponseProtoMsg;
};
export declare const QueryAllocationResponse: {
    typeUrl: string;
    encode(message: QueryAllocationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationResponse;
    fromPartial(object: Partial<QueryAllocationResponse>): QueryAllocationResponse;
    fromAmino(object: QueryAllocationResponseAmino): QueryAllocationResponse;
    toAmino(message: QueryAllocationResponse): QueryAllocationResponseAmino;
    fromAminoMsg(object: QueryAllocationResponseAminoMsg): QueryAllocationResponse;
    fromProtoMsg(message: QueryAllocationResponseProtoMsg): QueryAllocationResponse;
    toProto(message: QueryAllocationResponse): Uint8Array;
    toProtoMsg(message: QueryAllocationResponse): QueryAllocationResponseProtoMsg;
};
export declare const QueryAllocationsResponse: {
    typeUrl: string;
    encode(message: QueryAllocationsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationsResponse;
    fromPartial(object: Partial<QueryAllocationsResponse>): QueryAllocationsResponse;
    fromAmino(object: QueryAllocationsResponseAmino): QueryAllocationsResponse;
    toAmino(message: QueryAllocationsResponse): QueryAllocationsResponseAmino;
    fromAminoMsg(object: QueryAllocationsResponseAminoMsg): QueryAllocationsResponse;
    fromProtoMsg(message: QueryAllocationsResponseProtoMsg): QueryAllocationsResponse;
    toProto(message: QueryAllocationsResponse): Uint8Array;
    toProtoMsg(message: QueryAllocationsResponse): QueryAllocationsResponseProtoMsg;
};
export declare const QueryPayoutsResponse: {
    typeUrl: string;
    encode(message: QueryPayoutsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutsResponse;
    fromPartial(object: Partial<QueryPayoutsResponse>): QueryPayoutsResponse;
    fromAmino(object: QueryPayoutsResponseAmino): QueryPayoutsResponse;
    toAmino(message: QueryPayoutsResponse): QueryPayoutsResponseAmino;
    fromAminoMsg(object: QueryPayoutsResponseAminoMsg): QueryPayoutsResponse;
    fromProtoMsg(message: QueryPayoutsResponseProtoMsg): QueryPayoutsResponse;
    toProto(message: QueryPayoutsResponse): Uint8Array;
    toProtoMsg(message: QueryPayoutsResponse): QueryPayoutsResponseProtoMsg;
};
export declare const QueryPayoutsForAccountResponse: {
    typeUrl: string;
    encode(message: QueryPayoutsForAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutsForAccountResponse;
    fromPartial(object: Partial<QueryPayoutsForAccountResponse>): QueryPayoutsForAccountResponse;
    fromAmino(object: QueryPayoutsForAccountResponseAmino): QueryPayoutsForAccountResponse;
    toAmino(message: QueryPayoutsForAccountResponse): QueryPayoutsForAccountResponseAmino;
    fromAminoMsg(object: QueryPayoutsForAccountResponseAminoMsg): QueryPayoutsForAccountResponse;
    fromProtoMsg(message: QueryPayoutsForAccountResponseProtoMsg): QueryPayoutsForAccountResponse;
    toProto(message: QueryPayoutsForAccountResponse): Uint8Array;
    toProtoMsg(message: QueryPayoutsForAccountResponse): QueryPayoutsForAccountResponseProtoMsg;
};
export declare const QueryPayoutsForNodeResponse: {
    typeUrl: string;
    encode(message: QueryPayoutsForNodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutsForNodeResponse;
    fromPartial(object: Partial<QueryPayoutsForNodeResponse>): QueryPayoutsForNodeResponse;
    fromAmino(object: QueryPayoutsForNodeResponseAmino): QueryPayoutsForNodeResponse;
    toAmino(message: QueryPayoutsForNodeResponse): QueryPayoutsForNodeResponseAmino;
    fromAminoMsg(object: QueryPayoutsForNodeResponseAminoMsg): QueryPayoutsForNodeResponse;
    fromProtoMsg(message: QueryPayoutsForNodeResponseProtoMsg): QueryPayoutsForNodeResponse;
    toProto(message: QueryPayoutsForNodeResponse): Uint8Array;
    toProtoMsg(message: QueryPayoutsForNodeResponse): QueryPayoutsForNodeResponseProtoMsg;
};
export declare const QueryPayoutResponse: {
    typeUrl: string;
    encode(message: QueryPayoutResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPayoutResponse;
    fromPartial(object: Partial<QueryPayoutResponse>): QueryPayoutResponse;
    fromAmino(object: QueryPayoutResponseAmino): QueryPayoutResponse;
    toAmino(message: QueryPayoutResponse): QueryPayoutResponseAmino;
    fromAminoMsg(object: QueryPayoutResponseAminoMsg): QueryPayoutResponse;
    fromProtoMsg(message: QueryPayoutResponseProtoMsg): QueryPayoutResponse;
    toProto(message: QueryPayoutResponse): Uint8Array;
    toProtoMsg(message: QueryPayoutResponse): QueryPayoutResponseProtoMsg;
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
