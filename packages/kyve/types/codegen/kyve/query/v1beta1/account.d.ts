import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerSDKType, BasicPool, BasicPoolSDKType } from "./query";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequest {
    /** address ... */
    address: string;
}
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequestSDKType {
    address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponse {
    /** balance ... */
    balance: Long;
    /** protocol_staking ... */
    protocolSelfDelegation: Long;
    /** protocol_staking_unbonding */
    protocolSelfDelegationUnbonding: Long;
    /** protocol_delegation ... */
    protocolDelegation: Long;
    /** protocol_delegation_unbonding */
    protocolDelegationUnbonding: Long;
    /** protocol_rewards ... */
    protocolRewards: Long;
    /** protocol_funding ... */
    protocolFunding: Long;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponseSDKType {
    balance: Long;
    protocol_self_delegation: Long;
    protocol_self_delegation_unbonding: Long;
    protocol_delegation: Long;
    protocol_delegation_unbonding: Long;
    protocol_rewards: Long;
    protocol_funding: Long;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** address ... */
    address: string;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequestSDKType {
    pagination?: PageRequestSDKType;
    address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponse {
    /** balance ... */
    unbondings: DelegationUnbonding[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponseSDKType {
    unbondings: DelegationUnbondingSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbonding {
    /** amount */
    amount: Long;
    /** creation_time */
    creationTime: Long;
    /** staker */
    staker?: FullStaker;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbondingSDKType {
    amount: Long;
    creation_time: Long;
    staker?: FullStakerSDKType;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequest {
    /** address ... */
    address: string;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequestSDKType {
    address: string;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponse {
    /** funded ... */
    funded: Funded[];
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponseSDKType {
    funded: FundedSDKType[];
}
/** Funded ... */
export interface Funded {
    /** amount ... */
    amount: Long;
    /** pool ... */
    pool?: BasicPool;
}
/** Funded ... */
export interface FundedSDKType {
    amount: Long;
    pool?: BasicPoolSDKType;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequest {
    /** address ... */
    address: string;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequestSDKType {
    address: string;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponse {
    /** redelegation_cooldown_entries ... */
    redelegationCooldownEntries: RedelegationEntry[];
    /** availableSlots ... */
    availableSlots: Long;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponseSDKType {
    redelegation_cooldown_entries: RedelegationEntrySDKType[];
    available_slots: Long;
}
/** RedelegationEntry ... */
export interface RedelegationEntry {
    /** creation_date ... */
    creationDate: Long;
    /** finish_date ... */
    finishDate: Long;
}
/** RedelegationEntry ... */
export interface RedelegationEntrySDKType {
    creation_date: Long;
    finish_date: Long;
}
export declare const QueryAccountAssetsRequest: {
    encode(message: QueryAccountAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountAssetsRequest;
    fromPartial(object: Partial<QueryAccountAssetsRequest>): QueryAccountAssetsRequest;
};
export declare const QueryAccountAssetsResponse: {
    encode(message: QueryAccountAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountAssetsResponse;
    fromPartial(object: Partial<QueryAccountAssetsResponse>): QueryAccountAssetsResponse;
};
export declare const QueryAccountDelegationUnbondingsRequest: {
    encode(message: QueryAccountDelegationUnbondingsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountDelegationUnbondingsRequest;
    fromPartial(object: Partial<QueryAccountDelegationUnbondingsRequest>): QueryAccountDelegationUnbondingsRequest;
};
export declare const QueryAccountDelegationUnbondingsResponse: {
    encode(message: QueryAccountDelegationUnbondingsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountDelegationUnbondingsResponse;
    fromPartial(object: Partial<QueryAccountDelegationUnbondingsResponse>): QueryAccountDelegationUnbondingsResponse;
};
export declare const DelegationUnbonding: {
    encode(message: DelegationUnbonding, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelegationUnbonding;
    fromPartial(object: Partial<DelegationUnbonding>): DelegationUnbonding;
};
export declare const QueryAccountFundedListRequest: {
    encode(message: QueryAccountFundedListRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountFundedListRequest;
    fromPartial(object: Partial<QueryAccountFundedListRequest>): QueryAccountFundedListRequest;
};
export declare const QueryAccountFundedListResponse: {
    encode(message: QueryAccountFundedListResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountFundedListResponse;
    fromPartial(object: Partial<QueryAccountFundedListResponse>): QueryAccountFundedListResponse;
};
export declare const Funded: {
    encode(message: Funded, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Funded;
    fromPartial(object: Partial<Funded>): Funded;
};
export declare const QueryAccountRedelegationRequest: {
    encode(message: QueryAccountRedelegationRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountRedelegationRequest;
    fromPartial(object: Partial<QueryAccountRedelegationRequest>): QueryAccountRedelegationRequest;
};
export declare const QueryAccountRedelegationResponse: {
    encode(message: QueryAccountRedelegationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountRedelegationResponse;
    fromPartial(object: Partial<QueryAccountRedelegationResponse>): QueryAccountRedelegationResponse;
};
export declare const RedelegationEntry: {
    encode(message: RedelegationEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RedelegationEntry;
    fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry;
};
