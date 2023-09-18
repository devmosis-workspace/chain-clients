import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerAmino, FullStakerSDKType, BasicPool, BasicPoolAmino, BasicPoolSDKType } from "./query";
import { BinaryWriter } from "../../../binary";
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequest {
    /** address ... */
    address: string;
}
export interface QueryAccountAssetsRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsRequest";
    value: Uint8Array;
}
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequestAmino {
    /** address ... */
    address: string;
}
export interface QueryAccountAssetsRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountAssetsRequest";
    value: QueryAccountAssetsRequestAmino;
}
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequestSDKType {
    address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponse {
    /** balance ... */
    balance: bigint;
    /** protocol_staking ... */
    protocolSelfDelegation: bigint;
    /** protocol_staking_unbonding */
    protocolSelfDelegationUnbonding: bigint;
    /** protocol_delegation ... */
    protocolDelegation: bigint;
    /** protocol_delegation_unbonding */
    protocolDelegationUnbonding: bigint;
    /** protocol_rewards ... */
    protocolRewards: bigint;
    /** protocol_funding ... */
    protocolFunding: bigint;
}
export interface QueryAccountAssetsResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsResponse";
    value: Uint8Array;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponseAmino {
    /** balance ... */
    balance: string;
    /** protocol_staking ... */
    protocol_self_delegation: string;
    /** protocol_staking_unbonding */
    protocol_self_delegation_unbonding: string;
    /** protocol_delegation ... */
    protocol_delegation: string;
    /** protocol_delegation_unbonding */
    protocol_delegation_unbonding: string;
    /** protocol_rewards ... */
    protocol_rewards: string;
    /** protocol_funding ... */
    protocol_funding: string;
}
export interface QueryAccountAssetsResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountAssetsResponse";
    value: QueryAccountAssetsResponseAmino;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponseSDKType {
    balance: bigint;
    protocol_self_delegation: bigint;
    protocol_self_delegation_unbonding: bigint;
    protocol_delegation: bigint;
    protocol_delegation_unbonding: bigint;
    protocol_rewards: bigint;
    protocol_funding: bigint;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
    /** address ... */
    address: string;
}
export interface QueryAccountDelegationUnbondingsRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsRequest";
    value: Uint8Array;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** address ... */
    address: string;
}
export interface QueryAccountDelegationUnbondingsRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsRequest";
    value: QueryAccountDelegationUnbondingsRequestAmino;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequestSDKType {
    pagination: PageRequestSDKType;
    address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponse {
    /** balance ... */
    unbondings: DelegationUnbonding[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryAccountDelegationUnbondingsResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsResponse";
    value: Uint8Array;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponseAmino {
    /** balance ... */
    unbondings: DelegationUnbondingAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAccountDelegationUnbondingsResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsResponse";
    value: QueryAccountDelegationUnbondingsResponseAmino;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponseSDKType {
    unbondings: DelegationUnbondingSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbonding {
    /** amount */
    amount: bigint;
    /** creation_time */
    creationTime: bigint;
    /** staker */
    staker: FullStaker;
}
export interface DelegationUnbondingProtoMsg {
    typeUrl: "/kyve.query.v1beta1.DelegationUnbonding";
    value: Uint8Array;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbondingAmino {
    /** amount */
    amount: string;
    /** creation_time */
    creation_time: string;
    /** staker */
    staker?: FullStakerAmino;
}
export interface DelegationUnbondingAminoMsg {
    type: "/kyve.query.v1beta1.DelegationUnbonding";
    value: DelegationUnbondingAmino;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbondingSDKType {
    amount: bigint;
    creation_time: bigint;
    staker: FullStakerSDKType;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequest {
    /** address ... */
    address: string;
}
export interface QueryAccountFundedListRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListRequest";
    value: Uint8Array;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequestAmino {
    /** address ... */
    address: string;
}
export interface QueryAccountFundedListRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountFundedListRequest";
    value: QueryAccountFundedListRequestAmino;
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
export interface QueryAccountFundedListResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListResponse";
    value: Uint8Array;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponseAmino {
    /** funded ... */
    funded: FundedAmino[];
}
export interface QueryAccountFundedListResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountFundedListResponse";
    value: QueryAccountFundedListResponseAmino;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponseSDKType {
    funded: FundedSDKType[];
}
/** Funded ... */
export interface Funded {
    /** amount ... */
    amount: bigint;
    /** pool ... */
    pool: BasicPool;
}
export interface FundedProtoMsg {
    typeUrl: "/kyve.query.v1beta1.Funded";
    value: Uint8Array;
}
/** Funded ... */
export interface FundedAmino {
    /** amount ... */
    amount: string;
    /** pool ... */
    pool?: BasicPoolAmino;
}
export interface FundedAminoMsg {
    type: "/kyve.query.v1beta1.Funded";
    value: FundedAmino;
}
/** Funded ... */
export interface FundedSDKType {
    amount: bigint;
    pool: BasicPoolSDKType;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequest {
    /** address ... */
    address: string;
}
export interface QueryAccountRedelegationRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationRequest";
    value: Uint8Array;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequestAmino {
    /** address ... */
    address: string;
}
export interface QueryAccountRedelegationRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountRedelegationRequest";
    value: QueryAccountRedelegationRequestAmino;
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
    availableSlots: bigint;
}
export interface QueryAccountRedelegationResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationResponse";
    value: Uint8Array;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponseAmino {
    /** redelegation_cooldown_entries ... */
    redelegation_cooldown_entries: RedelegationEntryAmino[];
    /** availableSlots ... */
    available_slots: string;
}
export interface QueryAccountRedelegationResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryAccountRedelegationResponse";
    value: QueryAccountRedelegationResponseAmino;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponseSDKType {
    redelegation_cooldown_entries: RedelegationEntrySDKType[];
    available_slots: bigint;
}
/** RedelegationEntry ... */
export interface RedelegationEntry {
    /** creation_date ... */
    creationDate: bigint;
    /** finish_date ... */
    finishDate: bigint;
}
export interface RedelegationEntryProtoMsg {
    typeUrl: "/kyve.query.v1beta1.RedelegationEntry";
    value: Uint8Array;
}
/** RedelegationEntry ... */
export interface RedelegationEntryAmino {
    /** creation_date ... */
    creation_date: string;
    /** finish_date ... */
    finish_date: string;
}
export interface RedelegationEntryAminoMsg {
    type: "/kyve.query.v1beta1.RedelegationEntry";
    value: RedelegationEntryAmino;
}
/** RedelegationEntry ... */
export interface RedelegationEntrySDKType {
    creation_date: bigint;
    finish_date: bigint;
}
export declare const QueryAccountAssetsRequest: {
    typeUrl: string;
    encode(message: QueryAccountAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountAssetsRequest;
    fromPartial(object: Partial<QueryAccountAssetsRequest>): QueryAccountAssetsRequest;
    fromAmino(object: QueryAccountAssetsRequestAmino): QueryAccountAssetsRequest;
    toAmino(message: QueryAccountAssetsRequest): QueryAccountAssetsRequestAmino;
    fromAminoMsg(object: QueryAccountAssetsRequestAminoMsg): QueryAccountAssetsRequest;
    fromProtoMsg(message: QueryAccountAssetsRequestProtoMsg): QueryAccountAssetsRequest;
    toProto(message: QueryAccountAssetsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountAssetsRequest): QueryAccountAssetsRequestProtoMsg;
};
export declare const QueryAccountAssetsResponse: {
    typeUrl: string;
    encode(message: QueryAccountAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountAssetsResponse;
    fromPartial(object: Partial<QueryAccountAssetsResponse>): QueryAccountAssetsResponse;
    fromAmino(object: QueryAccountAssetsResponseAmino): QueryAccountAssetsResponse;
    toAmino(message: QueryAccountAssetsResponse): QueryAccountAssetsResponseAmino;
    fromAminoMsg(object: QueryAccountAssetsResponseAminoMsg): QueryAccountAssetsResponse;
    fromProtoMsg(message: QueryAccountAssetsResponseProtoMsg): QueryAccountAssetsResponse;
    toProto(message: QueryAccountAssetsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountAssetsResponse): QueryAccountAssetsResponseProtoMsg;
};
export declare const QueryAccountDelegationUnbondingsRequest: {
    typeUrl: string;
    encode(message: QueryAccountDelegationUnbondingsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountDelegationUnbondingsRequest;
    fromPartial(object: Partial<QueryAccountDelegationUnbondingsRequest>): QueryAccountDelegationUnbondingsRequest;
    fromAmino(object: QueryAccountDelegationUnbondingsRequestAmino): QueryAccountDelegationUnbondingsRequest;
    toAmino(message: QueryAccountDelegationUnbondingsRequest): QueryAccountDelegationUnbondingsRequestAmino;
    fromAminoMsg(object: QueryAccountDelegationUnbondingsRequestAminoMsg): QueryAccountDelegationUnbondingsRequest;
    fromProtoMsg(message: QueryAccountDelegationUnbondingsRequestProtoMsg): QueryAccountDelegationUnbondingsRequest;
    toProto(message: QueryAccountDelegationUnbondingsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountDelegationUnbondingsRequest): QueryAccountDelegationUnbondingsRequestProtoMsg;
};
export declare const QueryAccountDelegationUnbondingsResponse: {
    typeUrl: string;
    encode(message: QueryAccountDelegationUnbondingsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountDelegationUnbondingsResponse;
    fromPartial(object: Partial<QueryAccountDelegationUnbondingsResponse>): QueryAccountDelegationUnbondingsResponse;
    fromAmino(object: QueryAccountDelegationUnbondingsResponseAmino): QueryAccountDelegationUnbondingsResponse;
    toAmino(message: QueryAccountDelegationUnbondingsResponse): QueryAccountDelegationUnbondingsResponseAmino;
    fromAminoMsg(object: QueryAccountDelegationUnbondingsResponseAminoMsg): QueryAccountDelegationUnbondingsResponse;
    fromProtoMsg(message: QueryAccountDelegationUnbondingsResponseProtoMsg): QueryAccountDelegationUnbondingsResponse;
    toProto(message: QueryAccountDelegationUnbondingsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountDelegationUnbondingsResponse): QueryAccountDelegationUnbondingsResponseProtoMsg;
};
export declare const DelegationUnbonding: {
    typeUrl: string;
    encode(message: DelegationUnbonding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegationUnbonding;
    fromPartial(object: Partial<DelegationUnbonding>): DelegationUnbonding;
    fromAmino(object: DelegationUnbondingAmino): DelegationUnbonding;
    toAmino(message: DelegationUnbonding): DelegationUnbondingAmino;
    fromAminoMsg(object: DelegationUnbondingAminoMsg): DelegationUnbonding;
    fromProtoMsg(message: DelegationUnbondingProtoMsg): DelegationUnbonding;
    toProto(message: DelegationUnbonding): Uint8Array;
    toProtoMsg(message: DelegationUnbonding): DelegationUnbondingProtoMsg;
};
export declare const QueryAccountFundedListRequest: {
    typeUrl: string;
    encode(message: QueryAccountFundedListRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountFundedListRequest;
    fromPartial(object: Partial<QueryAccountFundedListRequest>): QueryAccountFundedListRequest;
    fromAmino(object: QueryAccountFundedListRequestAmino): QueryAccountFundedListRequest;
    toAmino(message: QueryAccountFundedListRequest): QueryAccountFundedListRequestAmino;
    fromAminoMsg(object: QueryAccountFundedListRequestAminoMsg): QueryAccountFundedListRequest;
    fromProtoMsg(message: QueryAccountFundedListRequestProtoMsg): QueryAccountFundedListRequest;
    toProto(message: QueryAccountFundedListRequest): Uint8Array;
    toProtoMsg(message: QueryAccountFundedListRequest): QueryAccountFundedListRequestProtoMsg;
};
export declare const QueryAccountFundedListResponse: {
    typeUrl: string;
    encode(message: QueryAccountFundedListResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountFundedListResponse;
    fromPartial(object: Partial<QueryAccountFundedListResponse>): QueryAccountFundedListResponse;
    fromAmino(object: QueryAccountFundedListResponseAmino): QueryAccountFundedListResponse;
    toAmino(message: QueryAccountFundedListResponse): QueryAccountFundedListResponseAmino;
    fromAminoMsg(object: QueryAccountFundedListResponseAminoMsg): QueryAccountFundedListResponse;
    fromProtoMsg(message: QueryAccountFundedListResponseProtoMsg): QueryAccountFundedListResponse;
    toProto(message: QueryAccountFundedListResponse): Uint8Array;
    toProtoMsg(message: QueryAccountFundedListResponse): QueryAccountFundedListResponseProtoMsg;
};
export declare const Funded: {
    typeUrl: string;
    encode(message: Funded, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Funded;
    fromPartial(object: Partial<Funded>): Funded;
    fromAmino(object: FundedAmino): Funded;
    toAmino(message: Funded): FundedAmino;
    fromAminoMsg(object: FundedAminoMsg): Funded;
    fromProtoMsg(message: FundedProtoMsg): Funded;
    toProto(message: Funded): Uint8Array;
    toProtoMsg(message: Funded): FundedProtoMsg;
};
export declare const QueryAccountRedelegationRequest: {
    typeUrl: string;
    encode(message: QueryAccountRedelegationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountRedelegationRequest;
    fromPartial(object: Partial<QueryAccountRedelegationRequest>): QueryAccountRedelegationRequest;
    fromAmino(object: QueryAccountRedelegationRequestAmino): QueryAccountRedelegationRequest;
    toAmino(message: QueryAccountRedelegationRequest): QueryAccountRedelegationRequestAmino;
    fromAminoMsg(object: QueryAccountRedelegationRequestAminoMsg): QueryAccountRedelegationRequest;
    fromProtoMsg(message: QueryAccountRedelegationRequestProtoMsg): QueryAccountRedelegationRequest;
    toProto(message: QueryAccountRedelegationRequest): Uint8Array;
    toProtoMsg(message: QueryAccountRedelegationRequest): QueryAccountRedelegationRequestProtoMsg;
};
export declare const QueryAccountRedelegationResponse: {
    typeUrl: string;
    encode(message: QueryAccountRedelegationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountRedelegationResponse;
    fromPartial(object: Partial<QueryAccountRedelegationResponse>): QueryAccountRedelegationResponse;
    fromAmino(object: QueryAccountRedelegationResponseAmino): QueryAccountRedelegationResponse;
    toAmino(message: QueryAccountRedelegationResponse): QueryAccountRedelegationResponseAmino;
    fromAminoMsg(object: QueryAccountRedelegationResponseAminoMsg): QueryAccountRedelegationResponse;
    fromProtoMsg(message: QueryAccountRedelegationResponseProtoMsg): QueryAccountRedelegationResponse;
    toProto(message: QueryAccountRedelegationResponse): Uint8Array;
    toProtoMsg(message: QueryAccountRedelegationResponse): QueryAccountRedelegationResponseProtoMsg;
};
export declare const RedelegationEntry: {
    typeUrl: string;
    encode(message: RedelegationEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RedelegationEntry;
    fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry;
    fromAmino(object: RedelegationEntryAmino): RedelegationEntry;
    toAmino(message: RedelegationEntry): RedelegationEntryAmino;
    fromAminoMsg(object: RedelegationEntryAminoMsg): RedelegationEntry;
    fromProtoMsg(message: RedelegationEntryProtoMsg): RedelegationEntry;
    toProto(message: RedelegationEntry): Uint8Array;
    toProtoMsg(message: RedelegationEntry): RedelegationEntryProtoMsg;
};
