import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerSDKType } from "./query";
import { Valaccount, ValaccountSDKType } from "../../stakers/v1beta1/stakers";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare function stakerStatusFromJSON(object: any): StakerStatus;
export declare function stakerStatusToJSON(object: StakerStatus): string;
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** status looks whether a staker is participating in pools or not */
    status: StakerStatus;
    /** search searches for moniker OR address */
    search: string;
}
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequestSDKType {
    pagination?: PageRequestSDKType;
    status: StakerStatus;
    search: string;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponse {
    /** stakers ... */
    stakers: FullStaker[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponseSDKType {
    stakers: FullStakerSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
    /** address ... */
    address: string;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequestSDKType {
    address: string;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
    /** staker ... */
    staker?: FullStaker;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponseSDKType {
    staker?: FullStakerSDKType;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequest {
    /** pool_id ... */
    poolId: Long;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequestSDKType {
    pool_id: Long;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponse {
    /** stakers ... */
    stakers: StakerPoolResponse[];
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponseSDKType {
    stakers: StakerPoolResponseSDKType[];
}
/** StakerPoolResponse ... */
export interface StakerPoolResponse {
    /** staker ... */
    staker?: FullStaker;
    /** valaccount ... */
    valaccount?: Valaccount;
}
/** StakerPoolResponse ... */
export interface StakerPoolResponseSDKType {
    staker?: FullStakerSDKType;
    valaccount?: ValaccountSDKType;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponse {
    /** stakers ... */
    stakers: FullStaker[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponseSDKType {
    stakers: FullStakerSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryStakersRequest: {
    encode(message: QueryStakersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersRequest;
    fromPartial(object: Partial<QueryStakersRequest>): QueryStakersRequest;
};
export declare const QueryStakersResponse: {
    encode(message: QueryStakersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersResponse;
    fromPartial(object: Partial<QueryStakersResponse>): QueryStakersResponse;
};
export declare const QueryStakerRequest: {
    encode(message: QueryStakerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakerRequest;
    fromPartial(object: Partial<QueryStakerRequest>): QueryStakerRequest;
};
export declare const QueryStakerResponse: {
    encode(message: QueryStakerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakerResponse;
    fromPartial(object: Partial<QueryStakerResponse>): QueryStakerResponse;
};
export declare const QueryStakersByPoolRequest: {
    encode(message: QueryStakersByPoolRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersByPoolRequest;
    fromPartial(object: Partial<QueryStakersByPoolRequest>): QueryStakersByPoolRequest;
};
export declare const QueryStakersByPoolResponse: {
    encode(message: QueryStakersByPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersByPoolResponse;
    fromPartial(object: Partial<QueryStakersByPoolResponse>): QueryStakersByPoolResponse;
};
export declare const StakerPoolResponse: {
    encode(message: StakerPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StakerPoolResponse;
    fromPartial(object: Partial<StakerPoolResponse>): StakerPoolResponse;
};
export declare const QueryStakersByPoolCountRequest: {
    encode(message: QueryStakersByPoolCountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersByPoolCountRequest;
    fromPartial(object: Partial<QueryStakersByPoolCountRequest>): QueryStakersByPoolCountRequest;
};
export declare const QueryStakersByPoolCountResponse: {
    encode(message: QueryStakersByPoolCountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersByPoolCountResponse;
    fromPartial(object: Partial<QueryStakersByPoolCountResponse>): QueryStakersByPoolCountResponse;
};
