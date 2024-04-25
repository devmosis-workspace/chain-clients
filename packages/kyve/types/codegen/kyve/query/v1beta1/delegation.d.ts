import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerAmino, FullStakerSDKType } from "./query";
import { BinaryWriter } from "../../../binary";
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
}
export interface QueryDelegatorRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryDelegatorRequest";
    value: Uint8Array;
}
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequestAmino {
    /** staker ... */
    staker?: string;
    /** delegator ... */
    delegator?: string;
}
export interface QueryDelegatorRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryDelegatorRequest";
    value: QueryDelegatorRequestAmino;
}
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequestSDKType {
    staker: string;
    delegator: string;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponse {
    /** delegator ... */
    delegator?: StakerDelegatorResponse;
}
export interface QueryDelegatorResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryDelegatorResponse";
    value: Uint8Array;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponseAmino {
    /** delegator ... */
    delegator?: StakerDelegatorResponseAmino;
}
export interface QueryDelegatorResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryDelegatorResponse";
    value: QueryDelegatorResponseAmino;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponseSDKType {
    delegator?: StakerDelegatorResponseSDKType;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** current_reward ... */
    currentReward: bigint;
    /** delegation_amount ... */
    delegationAmount: bigint;
    /** staker ... */
    staker: string;
}
export interface StakerDelegatorResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.StakerDelegatorResponse";
    value: Uint8Array;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponseAmino {
    /** delegator ... */
    delegator?: string;
    /** current_reward ... */
    current_reward?: string;
    /** delegation_amount ... */
    delegation_amount?: string;
    /** staker ... */
    staker?: string;
}
export interface StakerDelegatorResponseAminoMsg {
    type: "/kyve.query.v1beta1.StakerDelegatorResponse";
    value: StakerDelegatorResponseAmino;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponseSDKType {
    delegator: string;
    current_reward: bigint;
    delegation_amount: bigint;
    staker: string;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** staker ... */
    staker: string;
}
export interface QueryDelegatorsByStakerRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerRequest";
    value: Uint8Array;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** staker ... */
    staker?: string;
}
export interface QueryDelegatorsByStakerRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryDelegatorsByStakerRequest";
    value: QueryDelegatorsByStakerRequestAmino;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequestSDKType {
    pagination?: PageRequestSDKType;
    staker: string;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponse {
    /** delegators ... */
    delegators: StakerDelegatorResponse[];
    /** total_delegation ... (consider metadata object) */
    totalDelegation: bigint;
    /** total_delegation ... */
    totalDelegatorCount: bigint;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDelegatorsByStakerResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerResponse";
    value: Uint8Array;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponseAmino {
    /** delegators ... */
    delegators?: StakerDelegatorResponseAmino[];
    /** total_delegation ... (consider metadata object) */
    total_delegation?: string;
    /** total_delegation ... */
    total_delegator_count?: string;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDelegatorsByStakerResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryDelegatorsByStakerResponse";
    value: QueryDelegatorsByStakerResponseAmino;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponseSDKType {
    delegators: StakerDelegatorResponseSDKType[];
    total_delegation: bigint;
    total_delegator_count: bigint;
    pagination?: PageResponseSDKType;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** delegator ... */
    delegator: string;
}
export interface QueryStakersByDelegatorRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorRequest";
    value: Uint8Array;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** delegator ... */
    delegator?: string;
}
export interface QueryStakersByDelegatorRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersByDelegatorRequest";
    value: QueryStakersByDelegatorRequestAmino;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequestSDKType {
    pagination?: PageRequestSDKType;
    delegator: string;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** stakers ... */
    stakers: DelegationForStakerResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryStakersByDelegatorResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorResponse";
    value: Uint8Array;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponseAmino {
    /** delegator ... */
    delegator?: string;
    /** stakers ... */
    stakers?: DelegationForStakerResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryStakersByDelegatorResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersByDelegatorResponse";
    value: QueryStakersByDelegatorResponseAmino;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponseSDKType {
    delegator: string;
    stakers: DelegationForStakerResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
    /** staker ... */
    staker?: FullStaker;
    /** current_reward ... */
    currentReward: bigint;
    /** delegation_amount ... */
    delegationAmount: bigint;
}
export interface DelegationForStakerResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.DelegationForStakerResponse";
    value: Uint8Array;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponseAmino {
    /** staker ... */
    staker?: FullStakerAmino;
    /** current_reward ... */
    current_reward?: string;
    /** delegation_amount ... */
    delegation_amount?: string;
}
export interface DelegationForStakerResponseAminoMsg {
    type: "/kyve.query.v1beta1.DelegationForStakerResponse";
    value: DelegationForStakerResponseAmino;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponseSDKType {
    staker?: FullStakerSDKType;
    current_reward: bigint;
    delegation_amount: bigint;
}
export declare const QueryDelegatorRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorRequest;
    fromPartial(object: Partial<QueryDelegatorRequest>): QueryDelegatorRequest;
    fromAmino(object: QueryDelegatorRequestAmino): QueryDelegatorRequest;
    toAmino(message: QueryDelegatorRequest): QueryDelegatorRequestAmino;
    fromAminoMsg(object: QueryDelegatorRequestAminoMsg): QueryDelegatorRequest;
    fromProtoMsg(message: QueryDelegatorRequestProtoMsg): QueryDelegatorRequest;
    toProto(message: QueryDelegatorRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorRequest): QueryDelegatorRequestProtoMsg;
};
export declare const QueryDelegatorResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorResponse;
    fromPartial(object: Partial<QueryDelegatorResponse>): QueryDelegatorResponse;
    fromAmino(object: QueryDelegatorResponseAmino): QueryDelegatorResponse;
    toAmino(message: QueryDelegatorResponse): QueryDelegatorResponseAmino;
    fromAminoMsg(object: QueryDelegatorResponseAminoMsg): QueryDelegatorResponse;
    fromProtoMsg(message: QueryDelegatorResponseProtoMsg): QueryDelegatorResponse;
    toProto(message: QueryDelegatorResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorResponse): QueryDelegatorResponseProtoMsg;
};
export declare const StakerDelegatorResponse: {
    typeUrl: string;
    encode(message: StakerDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StakerDelegatorResponse;
    fromPartial(object: Partial<StakerDelegatorResponse>): StakerDelegatorResponse;
    fromAmino(object: StakerDelegatorResponseAmino): StakerDelegatorResponse;
    toAmino(message: StakerDelegatorResponse): StakerDelegatorResponseAmino;
    fromAminoMsg(object: StakerDelegatorResponseAminoMsg): StakerDelegatorResponse;
    fromProtoMsg(message: StakerDelegatorResponseProtoMsg): StakerDelegatorResponse;
    toProto(message: StakerDelegatorResponse): Uint8Array;
    toProtoMsg(message: StakerDelegatorResponse): StakerDelegatorResponseProtoMsg;
};
export declare const QueryDelegatorsByStakerRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorsByStakerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorsByStakerRequest;
    fromPartial(object: Partial<QueryDelegatorsByStakerRequest>): QueryDelegatorsByStakerRequest;
    fromAmino(object: QueryDelegatorsByStakerRequestAmino): QueryDelegatorsByStakerRequest;
    toAmino(message: QueryDelegatorsByStakerRequest): QueryDelegatorsByStakerRequestAmino;
    fromAminoMsg(object: QueryDelegatorsByStakerRequestAminoMsg): QueryDelegatorsByStakerRequest;
    fromProtoMsg(message: QueryDelegatorsByStakerRequestProtoMsg): QueryDelegatorsByStakerRequest;
    toProto(message: QueryDelegatorsByStakerRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorsByStakerRequest): QueryDelegatorsByStakerRequestProtoMsg;
};
export declare const QueryDelegatorsByStakerResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorsByStakerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorsByStakerResponse;
    fromPartial(object: Partial<QueryDelegatorsByStakerResponse>): QueryDelegatorsByStakerResponse;
    fromAmino(object: QueryDelegatorsByStakerResponseAmino): QueryDelegatorsByStakerResponse;
    toAmino(message: QueryDelegatorsByStakerResponse): QueryDelegatorsByStakerResponseAmino;
    fromAminoMsg(object: QueryDelegatorsByStakerResponseAminoMsg): QueryDelegatorsByStakerResponse;
    fromProtoMsg(message: QueryDelegatorsByStakerResponseProtoMsg): QueryDelegatorsByStakerResponse;
    toProto(message: QueryDelegatorsByStakerResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorsByStakerResponse): QueryDelegatorsByStakerResponseProtoMsg;
};
export declare const QueryStakersByDelegatorRequest: {
    typeUrl: string;
    encode(message: QueryStakersByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersByDelegatorRequest;
    fromPartial(object: Partial<QueryStakersByDelegatorRequest>): QueryStakersByDelegatorRequest;
    fromAmino(object: QueryStakersByDelegatorRequestAmino): QueryStakersByDelegatorRequest;
    toAmino(message: QueryStakersByDelegatorRequest): QueryStakersByDelegatorRequestAmino;
    fromAminoMsg(object: QueryStakersByDelegatorRequestAminoMsg): QueryStakersByDelegatorRequest;
    fromProtoMsg(message: QueryStakersByDelegatorRequestProtoMsg): QueryStakersByDelegatorRequest;
    toProto(message: QueryStakersByDelegatorRequest): Uint8Array;
    toProtoMsg(message: QueryStakersByDelegatorRequest): QueryStakersByDelegatorRequestProtoMsg;
};
export declare const QueryStakersByDelegatorResponse: {
    typeUrl: string;
    encode(message: QueryStakersByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersByDelegatorResponse;
    fromPartial(object: Partial<QueryStakersByDelegatorResponse>): QueryStakersByDelegatorResponse;
    fromAmino(object: QueryStakersByDelegatorResponseAmino): QueryStakersByDelegatorResponse;
    toAmino(message: QueryStakersByDelegatorResponse): QueryStakersByDelegatorResponseAmino;
    fromAminoMsg(object: QueryStakersByDelegatorResponseAminoMsg): QueryStakersByDelegatorResponse;
    fromProtoMsg(message: QueryStakersByDelegatorResponseProtoMsg): QueryStakersByDelegatorResponse;
    toProto(message: QueryStakersByDelegatorResponse): Uint8Array;
    toProtoMsg(message: QueryStakersByDelegatorResponse): QueryStakersByDelegatorResponseProtoMsg;
};
export declare const DelegationForStakerResponse: {
    typeUrl: string;
    encode(message: DelegationForStakerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegationForStakerResponse;
    fromPartial(object: Partial<DelegationForStakerResponse>): DelegationForStakerResponse;
    fromAmino(object: DelegationForStakerResponseAmino): DelegationForStakerResponse;
    toAmino(message: DelegationForStakerResponse): DelegationForStakerResponseAmino;
    fromAminoMsg(object: DelegationForStakerResponseAminoMsg): DelegationForStakerResponse;
    fromProtoMsg(message: DelegationForStakerResponseProtoMsg): DelegationForStakerResponse;
    toProto(message: DelegationForStakerResponse): Uint8Array;
    toProtoMsg(message: DelegationForStakerResponse): DelegationForStakerResponseProtoMsg;
};
