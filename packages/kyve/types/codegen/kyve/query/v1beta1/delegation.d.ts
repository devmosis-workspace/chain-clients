import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerSDKType } from "./query";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
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
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponseSDKType {
    delegator?: StakerDelegatorResponseSDKType;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** current_reward ... */
    currentReward: Long;
    /** delegation_amount ... */
    delegationAmount: Long;
    /** staker ... */
    staker: string;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponseSDKType {
    delegator: string;
    current_reward: Long;
    delegation_amount: Long;
    staker: string;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** staker ... */
    staker: string;
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
    totalDelegation: Long;
    /** total_delegation ... */
    totalDelegatorCount: Long;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponseSDKType {
    delegators: StakerDelegatorResponseSDKType[];
    total_delegation: Long;
    total_delegator_count: Long;
    pagination?: PageResponseSDKType;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** delegator ... */
    delegator: string;
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
    currentReward: Long;
    /** delegation_amount ... */
    delegationAmount: Long;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponseSDKType {
    staker?: FullStakerSDKType;
    current_reward: Long;
    delegation_amount: Long;
}
export declare const QueryDelegatorRequest: {
    encode(message: QueryDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorRequest;
    fromPartial(object: Partial<QueryDelegatorRequest>): QueryDelegatorRequest;
};
export declare const QueryDelegatorResponse: {
    encode(message: QueryDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorResponse;
    fromPartial(object: Partial<QueryDelegatorResponse>): QueryDelegatorResponse;
};
export declare const StakerDelegatorResponse: {
    encode(message: StakerDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StakerDelegatorResponse;
    fromPartial(object: Partial<StakerDelegatorResponse>): StakerDelegatorResponse;
};
export declare const QueryDelegatorsByStakerRequest: {
    encode(message: QueryDelegatorsByStakerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorsByStakerRequest;
    fromPartial(object: Partial<QueryDelegatorsByStakerRequest>): QueryDelegatorsByStakerRequest;
};
export declare const QueryDelegatorsByStakerResponse: {
    encode(message: QueryDelegatorsByStakerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorsByStakerResponse;
    fromPartial(object: Partial<QueryDelegatorsByStakerResponse>): QueryDelegatorsByStakerResponse;
};
export declare const QueryStakersByDelegatorRequest: {
    encode(message: QueryStakersByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersByDelegatorRequest;
    fromPartial(object: Partial<QueryStakersByDelegatorRequest>): QueryStakersByDelegatorRequest;
};
export declare const QueryStakersByDelegatorResponse: {
    encode(message: QueryStakersByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStakersByDelegatorResponse;
    fromPartial(object: Partial<QueryStakersByDelegatorResponse>): QueryStakersByDelegatorResponse;
};
export declare const DelegationForStakerResponse: {
    encode(message: DelegationForStakerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelegationForStakerResponse;
    fromPartial(object: Partial<DelegationForStakerResponse>): DelegationForStakerResponse;
};
