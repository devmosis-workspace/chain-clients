import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Zone, ZoneAmino, ZoneSDKType, Validator, ValidatorAmino, ValidatorSDKType, DelegatorIntent, DelegatorIntentAmino, DelegatorIntentSDKType, Delegation, DelegationAmino, DelegationSDKType, Receipt, ReceiptAmino, ReceiptSDKType, WithdrawalRecord, WithdrawalRecordAmino, WithdrawalRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, RedelegationRecord, RedelegationRecordAmino, RedelegationRecordSDKType } from "./interchainstaking";
import { BinaryWriter } from "../../../binary";
export interface Statistics {
    chainId: string;
    deposited: string;
    deposits: bigint;
    depositors: bigint;
    delegated: string;
    supply: string;
    distanceToTarget: string;
    /** Current number of tokens in the unbonding state. */
    unbondingAmount: Coin;
    /** Current number of tokens in the queued state. */
    queuedAmount: Coin;
    /** Number of withdrawal records in the unbonding state. */
    unbondingCount: number;
    /** Number of withdrawal records in the queued state. */
    queuedCount: number;
    /** Number of active unbonding records. */
    unbondRecordCount: number;
}
export interface StatisticsProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Statistics";
    value: Uint8Array;
}
export interface StatisticsAmino {
    chain_id?: string;
    deposited?: string;
    deposits?: string;
    depositors?: string;
    delegated?: string;
    supply?: string;
    distance_to_target?: string;
    /** Current number of tokens in the unbonding state. */
    unbonding_amount?: CoinAmino;
    /** Current number of tokens in the queued state. */
    queued_amount?: CoinAmino;
    /** Number of withdrawal records in the unbonding state. */
    unbonding_count?: number;
    /** Number of withdrawal records in the queued state. */
    queued_count?: number;
    /** Number of active unbonding records. */
    unbond_record_count?: number;
}
export interface StatisticsAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Statistics";
    value: StatisticsAmino;
}
export interface StatisticsSDKType {
    chain_id: string;
    deposited: string;
    deposits: bigint;
    depositors: bigint;
    delegated: string;
    supply: string;
    distance_to_target: string;
    unbonding_amount: CoinSDKType;
    queued_amount: CoinSDKType;
    unbonding_count: number;
    queued_count: number;
    unbond_record_count: number;
}
export interface QueryZonesRequest {
    pagination?: PageRequest;
}
export interface QueryZonesRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest";
    value: Uint8Array;
}
export interface QueryZonesRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryZonesRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryZonesRequest";
    value: QueryZonesRequestAmino;
}
export interface QueryZonesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryZonesResponse {
    zones: Zone[];
    stats: Statistics[];
    pagination?: PageResponse;
}
export interface QueryZonesResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse";
    value: Uint8Array;
}
export interface QueryZonesResponseAmino {
    zones?: ZoneAmino[];
    stats?: StatisticsAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryZonesResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryZonesResponse";
    value: QueryZonesResponseAmino;
}
export interface QueryZonesResponseSDKType {
    zones: ZoneSDKType[];
    stats: StatisticsSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryZoneRequest {
    chainId: string;
}
export interface QueryZoneRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest";
    value: Uint8Array;
}
export interface QueryZoneRequestAmino {
    chain_id?: string;
}
export interface QueryZoneRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryZoneRequest";
    value: QueryZoneRequestAmino;
}
export interface QueryZoneRequestSDKType {
    chain_id: string;
}
export interface QueryZoneResponse {
    zone: Zone;
    stats?: Statistics;
}
export interface QueryZoneResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse";
    value: Uint8Array;
}
export interface QueryZoneResponseAmino {
    zone?: ZoneAmino;
    stats?: StatisticsAmino;
}
export interface QueryZoneResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryZoneResponse";
    value: QueryZoneResponseAmino;
}
export interface QueryZoneResponseSDKType {
    zone: ZoneSDKType;
    stats?: StatisticsSDKType;
}
export interface QueryZoneValidatorsRequest {
    chainId: string;
    status: string;
    pagination?: PageRequest;
}
export interface QueryZoneValidatorsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest";
    value: Uint8Array;
}
export interface QueryZoneValidatorsRequestAmino {
    chain_id?: string;
    status?: string;
    pagination?: PageRequestAmino;
}
export interface QueryZoneValidatorsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest";
    value: QueryZoneValidatorsRequestAmino;
}
export interface QueryZoneValidatorsRequestSDKType {
    chain_id: string;
    status: string;
    pagination?: PageRequestSDKType;
}
export interface QueryZoneValidatorsResponse {
    validators: Validator[];
    pagination?: PageResponse;
}
export interface QueryZoneValidatorsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse";
    value: Uint8Array;
}
export interface QueryZoneValidatorsResponseAmino {
    validators?: ValidatorAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryZoneValidatorsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse";
    value: QueryZoneValidatorsResponseAmino;
}
export interface QueryZoneValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequest {
    chainId: string;
}
export interface QueryDepositAccountForChainRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest";
    value: Uint8Array;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequestAmino {
    chain_id?: string;
}
export interface QueryDepositAccountForChainRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest";
    value: QueryDepositAccountForChainRequestAmino;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequestSDKType {
    chain_id: string;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponse {
    depositAccountAddress: string;
}
export interface QueryDepositAccountForChainResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse";
    value: Uint8Array;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponseAmino {
    deposit_account_address?: string;
}
export interface QueryDepositAccountForChainResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse";
    value: QueryDepositAccountForChainResponseAmino;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponseSDKType {
    deposit_account_address: string;
}
export interface QueryDelegatorIntentRequest {
    chainId: string;
    delegatorAddress: string;
}
export interface QueryDelegatorIntentRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest";
    value: Uint8Array;
}
export interface QueryDelegatorIntentRequestAmino {
    chain_id?: string;
    delegator_address?: string;
}
export interface QueryDelegatorIntentRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest";
    value: QueryDelegatorIntentRequestAmino;
}
export interface QueryDelegatorIntentRequestSDKType {
    chain_id: string;
    delegator_address: string;
}
export interface QueryDelegatorIntentResponse {
    intent?: DelegatorIntent;
}
export interface QueryDelegatorIntentResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse";
    value: Uint8Array;
}
export interface QueryDelegatorIntentResponseAmino {
    intent?: DelegatorIntentAmino;
}
export interface QueryDelegatorIntentResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse";
    value: QueryDelegatorIntentResponseAmino;
}
export interface QueryDelegatorIntentResponseSDKType {
    intent?: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsRequest {
    delegatorAddress: string;
}
export interface QueryDelegatorIntentsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest";
    value: Uint8Array;
}
export interface QueryDelegatorIntentsRequestAmino {
    delegator_address?: string;
}
export interface QueryDelegatorIntentsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest";
    value: QueryDelegatorIntentsRequestAmino;
}
export interface QueryDelegatorIntentsRequestSDKType {
    delegator_address: string;
}
export interface DelegatorIntentsResponse {
    chainId: string;
    intent?: DelegatorIntent;
}
export interface DelegatorIntentsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse";
    value: Uint8Array;
}
export interface DelegatorIntentsResponseAmino {
    chain_id?: string;
    intent?: DelegatorIntentAmino;
}
export interface DelegatorIntentsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse";
    value: DelegatorIntentsResponseAmino;
}
export interface DelegatorIntentsResponseSDKType {
    chain_id: string;
    intent?: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsResponse {
    intents: DelegatorIntentsResponse[];
}
export interface QueryDelegatorIntentsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse";
    value: Uint8Array;
}
export interface QueryDelegatorIntentsResponseAmino {
    intents?: DelegatorIntentsResponseAmino[];
}
export interface QueryDelegatorIntentsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse";
    value: QueryDelegatorIntentsResponseAmino;
}
export interface QueryDelegatorIntentsResponseSDKType {
    intents: DelegatorIntentsResponseSDKType[];
}
export interface QueryDelegationsRequest {
    chainId: string;
    pagination?: PageRequest;
}
export interface QueryDelegationsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest";
    value: Uint8Array;
}
export interface QueryDelegationsRequestAmino {
    chain_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryDelegationsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest";
    value: QueryDelegationsRequestAmino;
}
export interface QueryDelegationsRequestSDKType {
    chain_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryDelegationsResponse {
    delegations: Delegation[];
    tvl: string;
    pagination?: PageResponse;
}
export interface QueryDelegationsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse";
    value: Uint8Array;
}
export interface QueryDelegationsResponseAmino {
    delegations?: DelegationAmino[];
    tvl?: string;
    pagination?: PageResponseAmino;
}
export interface QueryDelegationsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse";
    value: QueryDelegationsResponseAmino;
}
export interface QueryDelegationsResponseSDKType {
    delegations: DelegationSDKType[];
    tvl: string;
    pagination?: PageResponseSDKType;
}
export interface QueryReceiptsRequest {
    chainId: string;
    pagination?: PageRequest;
}
export interface QueryReceiptsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest";
    value: Uint8Array;
}
export interface QueryReceiptsRequestAmino {
    chain_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryReceiptsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest";
    value: QueryReceiptsRequestAmino;
}
export interface QueryReceiptsRequestSDKType {
    chain_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryReceiptsResponse {
    receipts: Receipt[];
    pagination?: PageResponse;
}
export interface QueryReceiptsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse";
    value: Uint8Array;
}
export interface QueryReceiptsResponseAmino {
    receipts?: ReceiptAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryReceiptsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse";
    value: QueryReceiptsResponseAmino;
}
export interface QueryReceiptsResponseSDKType {
    receipts: ReceiptSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryTxStatusRequest {
    chainId: string;
    txHash: string;
}
export interface QueryTxStatusRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest";
    value: Uint8Array;
}
export interface QueryTxStatusRequestAmino {
    chain_id?: string;
    tx_hash?: string;
}
export interface QueryTxStatusRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest";
    value: QueryTxStatusRequestAmino;
}
export interface QueryTxStatusRequestSDKType {
    chain_id: string;
    tx_hash: string;
}
export interface QueryTxStatusResponse {
    receipt?: Receipt;
}
export interface QueryTxStatusResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse";
    value: Uint8Array;
}
export interface QueryTxStatusResponseAmino {
    receipt?: ReceiptAmino;
}
export interface QueryTxStatusResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse";
    value: QueryTxStatusResponseAmino;
}
export interface QueryTxStatusResponseSDKType {
    receipt?: ReceiptSDKType;
}
export interface QueryWithdrawalRecordsRequest {
    chainId: string;
    delegatorAddress: string;
    pagination?: PageRequest;
}
export interface QueryWithdrawalRecordsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest";
    value: Uint8Array;
}
export interface QueryWithdrawalRecordsRequestAmino {
    chain_id?: string;
    delegator_address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryWithdrawalRecordsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest";
    value: QueryWithdrawalRecordsRequestAmino;
}
export interface QueryWithdrawalRecordsRequestSDKType {
    chain_id: string;
    delegator_address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryWithdrawalRecordsResponse {
    withdrawals: WithdrawalRecord[];
    pagination?: PageResponse;
}
export interface QueryWithdrawalRecordsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse";
    value: Uint8Array;
}
export interface QueryWithdrawalRecordsResponseAmino {
    withdrawals?: WithdrawalRecordAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryWithdrawalRecordsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse";
    value: QueryWithdrawalRecordsResponseAmino;
}
export interface QueryWithdrawalRecordsResponseSDKType {
    withdrawals: WithdrawalRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryUserWithdrawalRecordsRequest {
    userAddress: string;
    pagination?: PageRequest;
}
export interface QueryUserWithdrawalRecordsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest";
    value: Uint8Array;
}
export interface QueryUserWithdrawalRecordsRequestAmino {
    user_address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryUserWithdrawalRecordsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest";
    value: QueryUserWithdrawalRecordsRequestAmino;
}
export interface QueryUserWithdrawalRecordsRequestSDKType {
    user_address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryUnbondingRecordsRequest {
    chainId: string;
    pagination?: PageRequest;
}
export interface QueryUnbondingRecordsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest";
    value: Uint8Array;
}
export interface QueryUnbondingRecordsRequestAmino {
    chain_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryUnbondingRecordsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest";
    value: QueryUnbondingRecordsRequestAmino;
}
export interface QueryUnbondingRecordsRequestSDKType {
    chain_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryUnbondingRecordsResponse {
    unbondings: UnbondingRecord[];
    pagination?: PageResponse;
}
export interface QueryUnbondingRecordsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse";
    value: Uint8Array;
}
export interface QueryUnbondingRecordsResponseAmino {
    unbondings?: UnbondingRecordAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryUnbondingRecordsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse";
    value: QueryUnbondingRecordsResponseAmino;
}
export interface QueryUnbondingRecordsResponseSDKType {
    unbondings: UnbondingRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryRedelegationRecordsRequest {
    chainId: string;
    pagination?: PageRequest;
}
export interface QueryRedelegationRecordsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest";
    value: Uint8Array;
}
export interface QueryRedelegationRecordsRequestAmino {
    chain_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryRedelegationRecordsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest";
    value: QueryRedelegationRecordsRequestAmino;
}
export interface QueryRedelegationRecordsRequestSDKType {
    chain_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryRedelegationRecordsResponse {
    redelegations: RedelegationRecord[];
    pagination?: PageResponse;
}
export interface QueryRedelegationRecordsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse";
    value: Uint8Array;
}
export interface QueryRedelegationRecordsResponseAmino {
    redelegations?: RedelegationRecordAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryRedelegationRecordsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse";
    value: QueryRedelegationRecordsResponseAmino;
}
export interface QueryRedelegationRecordsResponseSDKType {
    redelegations: RedelegationRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryMappedAccountsRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryMappedAccountsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest";
    value: Uint8Array;
}
export interface QueryMappedAccountsRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryMappedAccountsRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest";
    value: QueryMappedAccountsRequestAmino;
}
export interface QueryMappedAccountsRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntry {
    key: string;
    value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryAmino {
    key?: string;
    value?: string;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg {
    type: string;
    value: QueryMappedAccountsResponse_RemoteAddressMapEntryAmino;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface QueryMappedAccountsResponse {
    RemoteAddressMap: {
        [key: string]: Uint8Array;
    };
    pagination?: PageResponse;
}
export interface QueryMappedAccountsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse";
    value: Uint8Array;
}
export interface QueryMappedAccountsResponseAmino {
    RemoteAddressMap?: {
        [key: string]: string;
    };
    pagination?: PageResponseAmino;
}
export interface QueryMappedAccountsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse";
    value: QueryMappedAccountsResponseAmino;
}
export interface QueryMappedAccountsResponseSDKType {
    RemoteAddressMap: {
        [key: string]: Uint8Array;
    };
    pagination?: PageResponseSDKType;
}
export interface QueryDenyListRequest {
    chainId: string;
}
export interface QueryDenyListRequestProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListRequest";
    value: Uint8Array;
}
export interface QueryDenyListRequestAmino {
    chain_id?: string;
}
export interface QueryDenyListRequestAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDenyListRequest";
    value: QueryDenyListRequestAmino;
}
export interface QueryDenyListRequestSDKType {
    chain_id: string;
}
export interface QueryDenyListResponse {
    validators: string[];
    pagination?: PageResponse;
}
export interface QueryDenyListResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListResponse";
    value: Uint8Array;
}
export interface QueryDenyListResponseAmino {
    validators?: string[];
    pagination?: PageResponseAmino;
}
export interface QueryDenyListResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.QueryDenyListResponse";
    value: QueryDenyListResponseAmino;
}
export interface QueryDenyListResponseSDKType {
    validators: string[];
    pagination?: PageResponseSDKType;
}
export declare const Statistics: {
    typeUrl: string;
    encode(message: Statistics, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Statistics;
    fromPartial(object: Partial<Statistics>): Statistics;
    fromAmino(object: StatisticsAmino): Statistics;
    toAmino(message: Statistics): StatisticsAmino;
    fromAminoMsg(object: StatisticsAminoMsg): Statistics;
    fromProtoMsg(message: StatisticsProtoMsg): Statistics;
    toProto(message: Statistics): Uint8Array;
    toProtoMsg(message: Statistics): StatisticsProtoMsg;
};
export declare const QueryZonesRequest: {
    typeUrl: string;
    encode(message: QueryZonesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZonesRequest;
    fromPartial(object: Partial<QueryZonesRequest>): QueryZonesRequest;
    fromAmino(object: QueryZonesRequestAmino): QueryZonesRequest;
    toAmino(message: QueryZonesRequest): QueryZonesRequestAmino;
    fromAminoMsg(object: QueryZonesRequestAminoMsg): QueryZonesRequest;
    fromProtoMsg(message: QueryZonesRequestProtoMsg): QueryZonesRequest;
    toProto(message: QueryZonesRequest): Uint8Array;
    toProtoMsg(message: QueryZonesRequest): QueryZonesRequestProtoMsg;
};
export declare const QueryZonesResponse: {
    typeUrl: string;
    encode(message: QueryZonesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZonesResponse;
    fromPartial(object: Partial<QueryZonesResponse>): QueryZonesResponse;
    fromAmino(object: QueryZonesResponseAmino): QueryZonesResponse;
    toAmino(message: QueryZonesResponse): QueryZonesResponseAmino;
    fromAminoMsg(object: QueryZonesResponseAminoMsg): QueryZonesResponse;
    fromProtoMsg(message: QueryZonesResponseProtoMsg): QueryZonesResponse;
    toProto(message: QueryZonesResponse): Uint8Array;
    toProtoMsg(message: QueryZonesResponse): QueryZonesResponseProtoMsg;
};
export declare const QueryZoneRequest: {
    typeUrl: string;
    encode(message: QueryZoneRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneRequest;
    fromPartial(object: Partial<QueryZoneRequest>): QueryZoneRequest;
    fromAmino(object: QueryZoneRequestAmino): QueryZoneRequest;
    toAmino(message: QueryZoneRequest): QueryZoneRequestAmino;
    fromAminoMsg(object: QueryZoneRequestAminoMsg): QueryZoneRequest;
    fromProtoMsg(message: QueryZoneRequestProtoMsg): QueryZoneRequest;
    toProto(message: QueryZoneRequest): Uint8Array;
    toProtoMsg(message: QueryZoneRequest): QueryZoneRequestProtoMsg;
};
export declare const QueryZoneResponse: {
    typeUrl: string;
    encode(message: QueryZoneResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneResponse;
    fromPartial(object: Partial<QueryZoneResponse>): QueryZoneResponse;
    fromAmino(object: QueryZoneResponseAmino): QueryZoneResponse;
    toAmino(message: QueryZoneResponse): QueryZoneResponseAmino;
    fromAminoMsg(object: QueryZoneResponseAminoMsg): QueryZoneResponse;
    fromProtoMsg(message: QueryZoneResponseProtoMsg): QueryZoneResponse;
    toProto(message: QueryZoneResponse): Uint8Array;
    toProtoMsg(message: QueryZoneResponse): QueryZoneResponseProtoMsg;
};
export declare const QueryZoneValidatorsRequest: {
    typeUrl: string;
    encode(message: QueryZoneValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneValidatorsRequest;
    fromPartial(object: Partial<QueryZoneValidatorsRequest>): QueryZoneValidatorsRequest;
    fromAmino(object: QueryZoneValidatorsRequestAmino): QueryZoneValidatorsRequest;
    toAmino(message: QueryZoneValidatorsRequest): QueryZoneValidatorsRequestAmino;
    fromAminoMsg(object: QueryZoneValidatorsRequestAminoMsg): QueryZoneValidatorsRequest;
    fromProtoMsg(message: QueryZoneValidatorsRequestProtoMsg): QueryZoneValidatorsRequest;
    toProto(message: QueryZoneValidatorsRequest): Uint8Array;
    toProtoMsg(message: QueryZoneValidatorsRequest): QueryZoneValidatorsRequestProtoMsg;
};
export declare const QueryZoneValidatorsResponse: {
    typeUrl: string;
    encode(message: QueryZoneValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneValidatorsResponse;
    fromPartial(object: Partial<QueryZoneValidatorsResponse>): QueryZoneValidatorsResponse;
    fromAmino(object: QueryZoneValidatorsResponseAmino): QueryZoneValidatorsResponse;
    toAmino(message: QueryZoneValidatorsResponse): QueryZoneValidatorsResponseAmino;
    fromAminoMsg(object: QueryZoneValidatorsResponseAminoMsg): QueryZoneValidatorsResponse;
    fromProtoMsg(message: QueryZoneValidatorsResponseProtoMsg): QueryZoneValidatorsResponse;
    toProto(message: QueryZoneValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryZoneValidatorsResponse): QueryZoneValidatorsResponseProtoMsg;
};
export declare const QueryDepositAccountForChainRequest: {
    typeUrl: string;
    encode(message: QueryDepositAccountForChainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositAccountForChainRequest;
    fromPartial(object: Partial<QueryDepositAccountForChainRequest>): QueryDepositAccountForChainRequest;
    fromAmino(object: QueryDepositAccountForChainRequestAmino): QueryDepositAccountForChainRequest;
    toAmino(message: QueryDepositAccountForChainRequest): QueryDepositAccountForChainRequestAmino;
    fromAminoMsg(object: QueryDepositAccountForChainRequestAminoMsg): QueryDepositAccountForChainRequest;
    fromProtoMsg(message: QueryDepositAccountForChainRequestProtoMsg): QueryDepositAccountForChainRequest;
    toProto(message: QueryDepositAccountForChainRequest): Uint8Array;
    toProtoMsg(message: QueryDepositAccountForChainRequest): QueryDepositAccountForChainRequestProtoMsg;
};
export declare const QueryDepositAccountForChainResponse: {
    typeUrl: string;
    encode(message: QueryDepositAccountForChainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositAccountForChainResponse;
    fromPartial(object: Partial<QueryDepositAccountForChainResponse>): QueryDepositAccountForChainResponse;
    fromAmino(object: QueryDepositAccountForChainResponseAmino): QueryDepositAccountForChainResponse;
    toAmino(message: QueryDepositAccountForChainResponse): QueryDepositAccountForChainResponseAmino;
    fromAminoMsg(object: QueryDepositAccountForChainResponseAminoMsg): QueryDepositAccountForChainResponse;
    fromProtoMsg(message: QueryDepositAccountForChainResponseProtoMsg): QueryDepositAccountForChainResponse;
    toProto(message: QueryDepositAccountForChainResponse): Uint8Array;
    toProtoMsg(message: QueryDepositAccountForChainResponse): QueryDepositAccountForChainResponseProtoMsg;
};
export declare const QueryDelegatorIntentRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorIntentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorIntentRequest;
    fromPartial(object: Partial<QueryDelegatorIntentRequest>): QueryDelegatorIntentRequest;
    fromAmino(object: QueryDelegatorIntentRequestAmino): QueryDelegatorIntentRequest;
    toAmino(message: QueryDelegatorIntentRequest): QueryDelegatorIntentRequestAmino;
    fromAminoMsg(object: QueryDelegatorIntentRequestAminoMsg): QueryDelegatorIntentRequest;
    fromProtoMsg(message: QueryDelegatorIntentRequestProtoMsg): QueryDelegatorIntentRequest;
    toProto(message: QueryDelegatorIntentRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorIntentRequest): QueryDelegatorIntentRequestProtoMsg;
};
export declare const QueryDelegatorIntentResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorIntentResponse;
    fromPartial(object: Partial<QueryDelegatorIntentResponse>): QueryDelegatorIntentResponse;
    fromAmino(object: QueryDelegatorIntentResponseAmino): QueryDelegatorIntentResponse;
    toAmino(message: QueryDelegatorIntentResponse): QueryDelegatorIntentResponseAmino;
    fromAminoMsg(object: QueryDelegatorIntentResponseAminoMsg): QueryDelegatorIntentResponse;
    fromProtoMsg(message: QueryDelegatorIntentResponseProtoMsg): QueryDelegatorIntentResponse;
    toProto(message: QueryDelegatorIntentResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorIntentResponse): QueryDelegatorIntentResponseProtoMsg;
};
export declare const QueryDelegatorIntentsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorIntentsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorIntentsRequest;
    fromPartial(object: Partial<QueryDelegatorIntentsRequest>): QueryDelegatorIntentsRequest;
    fromAmino(object: QueryDelegatorIntentsRequestAmino): QueryDelegatorIntentsRequest;
    toAmino(message: QueryDelegatorIntentsRequest): QueryDelegatorIntentsRequestAmino;
    fromAminoMsg(object: QueryDelegatorIntentsRequestAminoMsg): QueryDelegatorIntentsRequest;
    fromProtoMsg(message: QueryDelegatorIntentsRequestProtoMsg): QueryDelegatorIntentsRequest;
    toProto(message: QueryDelegatorIntentsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorIntentsRequest): QueryDelegatorIntentsRequestProtoMsg;
};
export declare const DelegatorIntentsResponse: {
    typeUrl: string;
    encode(message: DelegatorIntentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegatorIntentsResponse;
    fromPartial(object: Partial<DelegatorIntentsResponse>): DelegatorIntentsResponse;
    fromAmino(object: DelegatorIntentsResponseAmino): DelegatorIntentsResponse;
    toAmino(message: DelegatorIntentsResponse): DelegatorIntentsResponseAmino;
    fromAminoMsg(object: DelegatorIntentsResponseAminoMsg): DelegatorIntentsResponse;
    fromProtoMsg(message: DelegatorIntentsResponseProtoMsg): DelegatorIntentsResponse;
    toProto(message: DelegatorIntentsResponse): Uint8Array;
    toProtoMsg(message: DelegatorIntentsResponse): DelegatorIntentsResponseProtoMsg;
};
export declare const QueryDelegatorIntentsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorIntentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatorIntentsResponse;
    fromPartial(object: Partial<QueryDelegatorIntentsResponse>): QueryDelegatorIntentsResponse;
    fromAmino(object: QueryDelegatorIntentsResponseAmino): QueryDelegatorIntentsResponse;
    toAmino(message: QueryDelegatorIntentsResponse): QueryDelegatorIntentsResponseAmino;
    fromAminoMsg(object: QueryDelegatorIntentsResponseAminoMsg): QueryDelegatorIntentsResponse;
    fromProtoMsg(message: QueryDelegatorIntentsResponseProtoMsg): QueryDelegatorIntentsResponse;
    toProto(message: QueryDelegatorIntentsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorIntentsResponse): QueryDelegatorIntentsResponseProtoMsg;
};
export declare const QueryDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegationsRequest;
    fromPartial(object: Partial<QueryDelegationsRequest>): QueryDelegationsRequest;
    fromAmino(object: QueryDelegationsRequestAmino): QueryDelegationsRequest;
    toAmino(message: QueryDelegationsRequest): QueryDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegationsRequestAminoMsg): QueryDelegationsRequest;
    fromProtoMsg(message: QueryDelegationsRequestProtoMsg): QueryDelegationsRequest;
    toProto(message: QueryDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegationsRequest): QueryDelegationsRequestProtoMsg;
};
export declare const QueryDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegationsResponse;
    fromPartial(object: Partial<QueryDelegationsResponse>): QueryDelegationsResponse;
    fromAmino(object: QueryDelegationsResponseAmino): QueryDelegationsResponse;
    toAmino(message: QueryDelegationsResponse): QueryDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegationsResponseAminoMsg): QueryDelegationsResponse;
    fromProtoMsg(message: QueryDelegationsResponseProtoMsg): QueryDelegationsResponse;
    toProto(message: QueryDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegationsResponse): QueryDelegationsResponseProtoMsg;
};
export declare const QueryReceiptsRequest: {
    typeUrl: string;
    encode(message: QueryReceiptsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryReceiptsRequest;
    fromPartial(object: Partial<QueryReceiptsRequest>): QueryReceiptsRequest;
    fromAmino(object: QueryReceiptsRequestAmino): QueryReceiptsRequest;
    toAmino(message: QueryReceiptsRequest): QueryReceiptsRequestAmino;
    fromAminoMsg(object: QueryReceiptsRequestAminoMsg): QueryReceiptsRequest;
    fromProtoMsg(message: QueryReceiptsRequestProtoMsg): QueryReceiptsRequest;
    toProto(message: QueryReceiptsRequest): Uint8Array;
    toProtoMsg(message: QueryReceiptsRequest): QueryReceiptsRequestProtoMsg;
};
export declare const QueryReceiptsResponse: {
    typeUrl: string;
    encode(message: QueryReceiptsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryReceiptsResponse;
    fromPartial(object: Partial<QueryReceiptsResponse>): QueryReceiptsResponse;
    fromAmino(object: QueryReceiptsResponseAmino): QueryReceiptsResponse;
    toAmino(message: QueryReceiptsResponse): QueryReceiptsResponseAmino;
    fromAminoMsg(object: QueryReceiptsResponseAminoMsg): QueryReceiptsResponse;
    fromProtoMsg(message: QueryReceiptsResponseProtoMsg): QueryReceiptsResponse;
    toProto(message: QueryReceiptsResponse): Uint8Array;
    toProtoMsg(message: QueryReceiptsResponse): QueryReceiptsResponseProtoMsg;
};
export declare const QueryTxStatusRequest: {
    typeUrl: string;
    encode(message: QueryTxStatusRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTxStatusRequest;
    fromPartial(object: Partial<QueryTxStatusRequest>): QueryTxStatusRequest;
    fromAmino(object: QueryTxStatusRequestAmino): QueryTxStatusRequest;
    toAmino(message: QueryTxStatusRequest): QueryTxStatusRequestAmino;
    fromAminoMsg(object: QueryTxStatusRequestAminoMsg): QueryTxStatusRequest;
    fromProtoMsg(message: QueryTxStatusRequestProtoMsg): QueryTxStatusRequest;
    toProto(message: QueryTxStatusRequest): Uint8Array;
    toProtoMsg(message: QueryTxStatusRequest): QueryTxStatusRequestProtoMsg;
};
export declare const QueryTxStatusResponse: {
    typeUrl: string;
    encode(message: QueryTxStatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTxStatusResponse;
    fromPartial(object: Partial<QueryTxStatusResponse>): QueryTxStatusResponse;
    fromAmino(object: QueryTxStatusResponseAmino): QueryTxStatusResponse;
    toAmino(message: QueryTxStatusResponse): QueryTxStatusResponseAmino;
    fromAminoMsg(object: QueryTxStatusResponseAminoMsg): QueryTxStatusResponse;
    fromProtoMsg(message: QueryTxStatusResponseProtoMsg): QueryTxStatusResponse;
    toProto(message: QueryTxStatusResponse): Uint8Array;
    toProtoMsg(message: QueryTxStatusResponse): QueryTxStatusResponseProtoMsg;
};
export declare const QueryWithdrawalRecordsRequest: {
    typeUrl: string;
    encode(message: QueryWithdrawalRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWithdrawalRecordsRequest;
    fromPartial(object: Partial<QueryWithdrawalRecordsRequest>): QueryWithdrawalRecordsRequest;
    fromAmino(object: QueryWithdrawalRecordsRequestAmino): QueryWithdrawalRecordsRequest;
    toAmino(message: QueryWithdrawalRecordsRequest): QueryWithdrawalRecordsRequestAmino;
    fromAminoMsg(object: QueryWithdrawalRecordsRequestAminoMsg): QueryWithdrawalRecordsRequest;
    fromProtoMsg(message: QueryWithdrawalRecordsRequestProtoMsg): QueryWithdrawalRecordsRequest;
    toProto(message: QueryWithdrawalRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryWithdrawalRecordsRequest): QueryWithdrawalRecordsRequestProtoMsg;
};
export declare const QueryWithdrawalRecordsResponse: {
    typeUrl: string;
    encode(message: QueryWithdrawalRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWithdrawalRecordsResponse;
    fromPartial(object: Partial<QueryWithdrawalRecordsResponse>): QueryWithdrawalRecordsResponse;
    fromAmino(object: QueryWithdrawalRecordsResponseAmino): QueryWithdrawalRecordsResponse;
    toAmino(message: QueryWithdrawalRecordsResponse): QueryWithdrawalRecordsResponseAmino;
    fromAminoMsg(object: QueryWithdrawalRecordsResponseAminoMsg): QueryWithdrawalRecordsResponse;
    fromProtoMsg(message: QueryWithdrawalRecordsResponseProtoMsg): QueryWithdrawalRecordsResponse;
    toProto(message: QueryWithdrawalRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryWithdrawalRecordsResponse): QueryWithdrawalRecordsResponseProtoMsg;
};
export declare const QueryUserWithdrawalRecordsRequest: {
    typeUrl: string;
    encode(message: QueryUserWithdrawalRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUserWithdrawalRecordsRequest;
    fromPartial(object: Partial<QueryUserWithdrawalRecordsRequest>): QueryUserWithdrawalRecordsRequest;
    fromAmino(object: QueryUserWithdrawalRecordsRequestAmino): QueryUserWithdrawalRecordsRequest;
    toAmino(message: QueryUserWithdrawalRecordsRequest): QueryUserWithdrawalRecordsRequestAmino;
    fromAminoMsg(object: QueryUserWithdrawalRecordsRequestAminoMsg): QueryUserWithdrawalRecordsRequest;
    fromProtoMsg(message: QueryUserWithdrawalRecordsRequestProtoMsg): QueryUserWithdrawalRecordsRequest;
    toProto(message: QueryUserWithdrawalRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryUserWithdrawalRecordsRequest): QueryUserWithdrawalRecordsRequestProtoMsg;
};
export declare const QueryUnbondingRecordsRequest: {
    typeUrl: string;
    encode(message: QueryUnbondingRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUnbondingRecordsRequest;
    fromPartial(object: Partial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest;
    fromAmino(object: QueryUnbondingRecordsRequestAmino): QueryUnbondingRecordsRequest;
    toAmino(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestAmino;
    fromAminoMsg(object: QueryUnbondingRecordsRequestAminoMsg): QueryUnbondingRecordsRequest;
    fromProtoMsg(message: QueryUnbondingRecordsRequestProtoMsg): QueryUnbondingRecordsRequest;
    toProto(message: QueryUnbondingRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestProtoMsg;
};
export declare const QueryUnbondingRecordsResponse: {
    typeUrl: string;
    encode(message: QueryUnbondingRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUnbondingRecordsResponse;
    fromPartial(object: Partial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse;
    fromAmino(object: QueryUnbondingRecordsResponseAmino): QueryUnbondingRecordsResponse;
    toAmino(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseAmino;
    fromAminoMsg(object: QueryUnbondingRecordsResponseAminoMsg): QueryUnbondingRecordsResponse;
    fromProtoMsg(message: QueryUnbondingRecordsResponseProtoMsg): QueryUnbondingRecordsResponse;
    toProto(message: QueryUnbondingRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseProtoMsg;
};
export declare const QueryRedelegationRecordsRequest: {
    typeUrl: string;
    encode(message: QueryRedelegationRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRedelegationRecordsRequest;
    fromPartial(object: Partial<QueryRedelegationRecordsRequest>): QueryRedelegationRecordsRequest;
    fromAmino(object: QueryRedelegationRecordsRequestAmino): QueryRedelegationRecordsRequest;
    toAmino(message: QueryRedelegationRecordsRequest): QueryRedelegationRecordsRequestAmino;
    fromAminoMsg(object: QueryRedelegationRecordsRequestAminoMsg): QueryRedelegationRecordsRequest;
    fromProtoMsg(message: QueryRedelegationRecordsRequestProtoMsg): QueryRedelegationRecordsRequest;
    toProto(message: QueryRedelegationRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryRedelegationRecordsRequest): QueryRedelegationRecordsRequestProtoMsg;
};
export declare const QueryRedelegationRecordsResponse: {
    typeUrl: string;
    encode(message: QueryRedelegationRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRedelegationRecordsResponse;
    fromPartial(object: Partial<QueryRedelegationRecordsResponse>): QueryRedelegationRecordsResponse;
    fromAmino(object: QueryRedelegationRecordsResponseAmino): QueryRedelegationRecordsResponse;
    toAmino(message: QueryRedelegationRecordsResponse): QueryRedelegationRecordsResponseAmino;
    fromAminoMsg(object: QueryRedelegationRecordsResponseAminoMsg): QueryRedelegationRecordsResponse;
    fromProtoMsg(message: QueryRedelegationRecordsResponseProtoMsg): QueryRedelegationRecordsResponse;
    toProto(message: QueryRedelegationRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryRedelegationRecordsResponse): QueryRedelegationRecordsResponseProtoMsg;
};
export declare const QueryMappedAccountsRequest: {
    typeUrl: string;
    encode(message: QueryMappedAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMappedAccountsRequest;
    fromPartial(object: Partial<QueryMappedAccountsRequest>): QueryMappedAccountsRequest;
    fromAmino(object: QueryMappedAccountsRequestAmino): QueryMappedAccountsRequest;
    toAmino(message: QueryMappedAccountsRequest): QueryMappedAccountsRequestAmino;
    fromAminoMsg(object: QueryMappedAccountsRequestAminoMsg): QueryMappedAccountsRequest;
    fromProtoMsg(message: QueryMappedAccountsRequestProtoMsg): QueryMappedAccountsRequest;
    toProto(message: QueryMappedAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryMappedAccountsRequest): QueryMappedAccountsRequestProtoMsg;
};
export declare const QueryMappedAccountsResponse_RemoteAddressMapEntry: {
    encode(message: QueryMappedAccountsResponse_RemoteAddressMapEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMappedAccountsResponse_RemoteAddressMapEntry;
    fromPartial(object: Partial<QueryMappedAccountsResponse_RemoteAddressMapEntry>): QueryMappedAccountsResponse_RemoteAddressMapEntry;
    fromAmino(object: QueryMappedAccountsResponse_RemoteAddressMapEntryAmino): QueryMappedAccountsResponse_RemoteAddressMapEntry;
    toAmino(message: QueryMappedAccountsResponse_RemoteAddressMapEntry): QueryMappedAccountsResponse_RemoteAddressMapEntryAmino;
    fromAminoMsg(object: QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg): QueryMappedAccountsResponse_RemoteAddressMapEntry;
    fromProtoMsg(message: QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg): QueryMappedAccountsResponse_RemoteAddressMapEntry;
    toProto(message: QueryMappedAccountsResponse_RemoteAddressMapEntry): Uint8Array;
};
export declare const QueryMappedAccountsResponse: {
    typeUrl: string;
    encode(message: QueryMappedAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMappedAccountsResponse;
    fromPartial(object: Partial<QueryMappedAccountsResponse>): QueryMappedAccountsResponse;
    fromAmino(object: QueryMappedAccountsResponseAmino): QueryMappedAccountsResponse;
    toAmino(message: QueryMappedAccountsResponse): QueryMappedAccountsResponseAmino;
    fromAminoMsg(object: QueryMappedAccountsResponseAminoMsg): QueryMappedAccountsResponse;
    fromProtoMsg(message: QueryMappedAccountsResponseProtoMsg): QueryMappedAccountsResponse;
    toProto(message: QueryMappedAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryMappedAccountsResponse): QueryMappedAccountsResponseProtoMsg;
};
export declare const QueryDenyListRequest: {
    typeUrl: string;
    encode(message: QueryDenyListRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenyListRequest;
    fromPartial(object: Partial<QueryDenyListRequest>): QueryDenyListRequest;
    fromAmino(object: QueryDenyListRequestAmino): QueryDenyListRequest;
    toAmino(message: QueryDenyListRequest): QueryDenyListRequestAmino;
    fromAminoMsg(object: QueryDenyListRequestAminoMsg): QueryDenyListRequest;
    fromProtoMsg(message: QueryDenyListRequestProtoMsg): QueryDenyListRequest;
    toProto(message: QueryDenyListRequest): Uint8Array;
    toProtoMsg(message: QueryDenyListRequest): QueryDenyListRequestProtoMsg;
};
export declare const QueryDenyListResponse: {
    typeUrl: string;
    encode(message: QueryDenyListResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenyListResponse;
    fromPartial(object: Partial<QueryDenyListResponse>): QueryDenyListResponse;
    fromAmino(object: QueryDenyListResponseAmino): QueryDenyListResponse;
    toAmino(message: QueryDenyListResponse): QueryDenyListResponseAmino;
    fromAminoMsg(object: QueryDenyListResponseAminoMsg): QueryDenyListResponse;
    fromProtoMsg(message: QueryDenyListResponseProtoMsg): QueryDenyListResponse;
    toProto(message: QueryDenyListResponse): Uint8Array;
    toProtoMsg(message: QueryDenyListResponse): QueryDenyListResponseProtoMsg;
};
