import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerAmino, FullStakerSDKType } from "./query";
import { Valaccount, ValaccountAmino, ValaccountSDKType } from "../../stakers/v1beta1/stakers";
import { BinaryWriter } from "../../../binary";
/** StakerStatus ... */
export declare enum StakerStatus {
    /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
    STAKER_STATUS_UNSPECIFIED = 0,
    /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
    STAKER_STATUS_ACTIVE = 1,
    /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
    STAKER_STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const StakerStatusSDKType: typeof StakerStatus;
export declare const StakerStatusAmino: typeof StakerStatus;
export declare function stakerStatusFromJSON(object: any): StakerStatus;
export declare function stakerStatusToJSON(object: StakerStatus): string;
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
    /** status looks whether a staker is participating in pools or not */
    status: StakerStatus;
    /** search searches for moniker OR address */
    search: string;
}
export interface QueryStakersRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersRequest";
    value: Uint8Array;
}
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** status looks whether a staker is participating in pools or not */
    status: StakerStatus;
    /** search searches for moniker OR address */
    search: string;
}
export interface QueryStakersRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersRequest";
    value: QueryStakersRequestAmino;
}
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequestSDKType {
    pagination: PageRequestSDKType;
    status: StakerStatus;
    search: string;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponse {
    /** stakers ... */
    stakers: FullStaker[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryStakersResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersResponse";
    value: Uint8Array;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponseAmino {
    /** stakers ... */
    stakers: FullStakerAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryStakersResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersResponse";
    value: QueryStakersResponseAmino;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponseSDKType {
    stakers: FullStakerSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
    /** address ... */
    address: string;
}
export interface QueryStakerRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakerRequest";
    value: Uint8Array;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequestAmino {
    /** address ... */
    address: string;
}
export interface QueryStakerRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakerRequest";
    value: QueryStakerRequestAmino;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequestSDKType {
    address: string;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
    /** staker ... */
    staker: FullStaker;
}
export interface QueryStakerResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakerResponse";
    value: Uint8Array;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponseAmino {
    /** staker ... */
    staker?: FullStakerAmino;
}
export interface QueryStakerResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakerResponse";
    value: QueryStakerResponseAmino;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponseSDKType {
    staker: FullStakerSDKType;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequest {
    /** pool_id ... */
    poolId: bigint;
}
export interface QueryStakersByPoolRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolRequest";
    value: Uint8Array;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequestAmino {
    /** pool_id ... */
    pool_id: string;
}
export interface QueryStakersByPoolRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersByPoolRequest";
    value: QueryStakersByPoolRequestAmino;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequestSDKType {
    pool_id: bigint;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponse {
    /** stakers ... */
    stakers: StakerPoolResponse[];
}
export interface QueryStakersByPoolResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolResponse";
    value: Uint8Array;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponseAmino {
    /** stakers ... */
    stakers: StakerPoolResponseAmino[];
}
export interface QueryStakersByPoolResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersByPoolResponse";
    value: QueryStakersByPoolResponseAmino;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponseSDKType {
    stakers: StakerPoolResponseSDKType[];
}
/** StakerPoolResponse ... */
export interface StakerPoolResponse {
    /** staker ... */
    staker: FullStaker;
    /** valaccount ... */
    valaccount: Valaccount;
}
export interface StakerPoolResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.StakerPoolResponse";
    value: Uint8Array;
}
/** StakerPoolResponse ... */
export interface StakerPoolResponseAmino {
    /** staker ... */
    staker?: FullStakerAmino;
    /** valaccount ... */
    valaccount?: ValaccountAmino;
}
export interface StakerPoolResponseAminoMsg {
    type: "/kyve.query.v1beta1.StakerPoolResponse";
    value: StakerPoolResponseAmino;
}
/** StakerPoolResponse ... */
export interface StakerPoolResponseSDKType {
    staker: FullStakerSDKType;
    valaccount: ValaccountSDKType;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryStakersByPoolCountRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountRequest";
    value: Uint8Array;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryStakersByPoolCountRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersByPoolCountRequest";
    value: QueryStakersByPoolCountRequestAmino;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponse {
    /** stakers ... */
    stakers: FullStaker[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryStakersByPoolCountResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountResponse";
    value: Uint8Array;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponseAmino {
    /** stakers ... */
    stakers: FullStakerAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryStakersByPoolCountResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryStakersByPoolCountResponse";
    value: QueryStakersByPoolCountResponseAmino;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponseSDKType {
    stakers: FullStakerSDKType[];
    pagination: PageResponseSDKType;
}
export declare const QueryStakersRequest: {
    typeUrl: string;
    encode(message: QueryStakersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersRequest;
    fromPartial(object: Partial<QueryStakersRequest>): QueryStakersRequest;
    fromAmino(object: QueryStakersRequestAmino): QueryStakersRequest;
    toAmino(message: QueryStakersRequest): QueryStakersRequestAmino;
    fromAminoMsg(object: QueryStakersRequestAminoMsg): QueryStakersRequest;
    fromProtoMsg(message: QueryStakersRequestProtoMsg): QueryStakersRequest;
    toProto(message: QueryStakersRequest): Uint8Array;
    toProtoMsg(message: QueryStakersRequest): QueryStakersRequestProtoMsg;
};
export declare const QueryStakersResponse: {
    typeUrl: string;
    encode(message: QueryStakersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersResponse;
    fromPartial(object: Partial<QueryStakersResponse>): QueryStakersResponse;
    fromAmino(object: QueryStakersResponseAmino): QueryStakersResponse;
    toAmino(message: QueryStakersResponse): QueryStakersResponseAmino;
    fromAminoMsg(object: QueryStakersResponseAminoMsg): QueryStakersResponse;
    fromProtoMsg(message: QueryStakersResponseProtoMsg): QueryStakersResponse;
    toProto(message: QueryStakersResponse): Uint8Array;
    toProtoMsg(message: QueryStakersResponse): QueryStakersResponseProtoMsg;
};
export declare const QueryStakerRequest: {
    typeUrl: string;
    encode(message: QueryStakerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakerRequest;
    fromPartial(object: Partial<QueryStakerRequest>): QueryStakerRequest;
    fromAmino(object: QueryStakerRequestAmino): QueryStakerRequest;
    toAmino(message: QueryStakerRequest): QueryStakerRequestAmino;
    fromAminoMsg(object: QueryStakerRequestAminoMsg): QueryStakerRequest;
    fromProtoMsg(message: QueryStakerRequestProtoMsg): QueryStakerRequest;
    toProto(message: QueryStakerRequest): Uint8Array;
    toProtoMsg(message: QueryStakerRequest): QueryStakerRequestProtoMsg;
};
export declare const QueryStakerResponse: {
    typeUrl: string;
    encode(message: QueryStakerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakerResponse;
    fromPartial(object: Partial<QueryStakerResponse>): QueryStakerResponse;
    fromAmino(object: QueryStakerResponseAmino): QueryStakerResponse;
    toAmino(message: QueryStakerResponse): QueryStakerResponseAmino;
    fromAminoMsg(object: QueryStakerResponseAminoMsg): QueryStakerResponse;
    fromProtoMsg(message: QueryStakerResponseProtoMsg): QueryStakerResponse;
    toProto(message: QueryStakerResponse): Uint8Array;
    toProtoMsg(message: QueryStakerResponse): QueryStakerResponseProtoMsg;
};
export declare const QueryStakersByPoolRequest: {
    typeUrl: string;
    encode(message: QueryStakersByPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersByPoolRequest;
    fromPartial(object: Partial<QueryStakersByPoolRequest>): QueryStakersByPoolRequest;
    fromAmino(object: QueryStakersByPoolRequestAmino): QueryStakersByPoolRequest;
    toAmino(message: QueryStakersByPoolRequest): QueryStakersByPoolRequestAmino;
    fromAminoMsg(object: QueryStakersByPoolRequestAminoMsg): QueryStakersByPoolRequest;
    fromProtoMsg(message: QueryStakersByPoolRequestProtoMsg): QueryStakersByPoolRequest;
    toProto(message: QueryStakersByPoolRequest): Uint8Array;
    toProtoMsg(message: QueryStakersByPoolRequest): QueryStakersByPoolRequestProtoMsg;
};
export declare const QueryStakersByPoolResponse: {
    typeUrl: string;
    encode(message: QueryStakersByPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersByPoolResponse;
    fromPartial(object: Partial<QueryStakersByPoolResponse>): QueryStakersByPoolResponse;
    fromAmino(object: QueryStakersByPoolResponseAmino): QueryStakersByPoolResponse;
    toAmino(message: QueryStakersByPoolResponse): QueryStakersByPoolResponseAmino;
    fromAminoMsg(object: QueryStakersByPoolResponseAminoMsg): QueryStakersByPoolResponse;
    fromProtoMsg(message: QueryStakersByPoolResponseProtoMsg): QueryStakersByPoolResponse;
    toProto(message: QueryStakersByPoolResponse): Uint8Array;
    toProtoMsg(message: QueryStakersByPoolResponse): QueryStakersByPoolResponseProtoMsg;
};
export declare const StakerPoolResponse: {
    typeUrl: string;
    encode(message: StakerPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StakerPoolResponse;
    fromPartial(object: Partial<StakerPoolResponse>): StakerPoolResponse;
    fromAmino(object: StakerPoolResponseAmino): StakerPoolResponse;
    toAmino(message: StakerPoolResponse): StakerPoolResponseAmino;
    fromAminoMsg(object: StakerPoolResponseAminoMsg): StakerPoolResponse;
    fromProtoMsg(message: StakerPoolResponseProtoMsg): StakerPoolResponse;
    toProto(message: StakerPoolResponse): Uint8Array;
    toProtoMsg(message: StakerPoolResponse): StakerPoolResponseProtoMsg;
};
export declare const QueryStakersByPoolCountRequest: {
    typeUrl: string;
    encode(message: QueryStakersByPoolCountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersByPoolCountRequest;
    fromPartial(object: Partial<QueryStakersByPoolCountRequest>): QueryStakersByPoolCountRequest;
    fromAmino(object: QueryStakersByPoolCountRequestAmino): QueryStakersByPoolCountRequest;
    toAmino(message: QueryStakersByPoolCountRequest): QueryStakersByPoolCountRequestAmino;
    fromAminoMsg(object: QueryStakersByPoolCountRequestAminoMsg): QueryStakersByPoolCountRequest;
    fromProtoMsg(message: QueryStakersByPoolCountRequestProtoMsg): QueryStakersByPoolCountRequest;
    toProto(message: QueryStakersByPoolCountRequest): Uint8Array;
    toProtoMsg(message: QueryStakersByPoolCountRequest): QueryStakersByPoolCountRequestProtoMsg;
};
export declare const QueryStakersByPoolCountResponse: {
    typeUrl: string;
    encode(message: QueryStakersByPoolCountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakersByPoolCountResponse;
    fromPartial(object: Partial<QueryStakersByPoolCountResponse>): QueryStakersByPoolCountResponse;
    fromAmino(object: QueryStakersByPoolCountResponseAmino): QueryStakersByPoolCountResponse;
    toAmino(message: QueryStakersByPoolCountResponse): QueryStakersByPoolCountResponseAmino;
    fromAminoMsg(object: QueryStakersByPoolCountResponseAminoMsg): QueryStakersByPoolCountResponse;
    fromProtoMsg(message: QueryStakersByPoolCountResponseProtoMsg): QueryStakersByPoolCountResponse;
    toProto(message: QueryStakersByPoolCountResponse): Uint8Array;
    toProtoMsg(message: QueryStakersByPoolCountResponse): QueryStakersByPoolCountResponseProtoMsg;
};
