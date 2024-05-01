import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryZonesRequest, QueryZonesResponse, QueryZoneRequest, QueryZoneResponse, QueryZoneValidatorsRequest, QueryZoneValidatorsResponse, QueryDepositAccountForChainRequest, QueryDepositAccountForChainResponse, QueryDelegatorIntentRequest, QueryDelegatorIntentResponse, QueryDelegatorIntentsRequest, QueryDelegatorIntentsResponse, QueryDelegationsRequest, QueryDelegationsResponse, QueryReceiptsRequest, QueryReceiptsResponse, QueryTxStatusRequest, QueryTxStatusResponse, QueryWithdrawalRecordsRequest, QueryWithdrawalRecordsResponse, QueryUserWithdrawalRecordsRequest, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponse, QueryRedelegationRecordsRequest, QueryRedelegationRecordsResponse, QueryMappedAccountsRequest, QueryMappedAccountsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Zones provides meta data on connected zones. */
    zones(request?: QueryZonesRequest): Promise<QueryZonesResponse>;
    /** Zone provides meta data on a specific zone. */
    zone(request: QueryZoneRequest): Promise<QueryZoneResponse>;
    zoneValidators(request: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponse>;
    /** DepositAccount provides data on the deposit address for a connected zone. */
    depositAccount(request: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponse>;
    /**
     * DelegatorIntent provides data on the intent of the delegator for the given
     * zone.
     */
    delegatorIntent(request: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponse>;
    /** DelegatorIntents provides data on the intent of the delegator for all zones */
    delegatorIntents(request: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponse>;
    /** Delegations provides data on the delegations for the given zone. */
    delegations(request: QueryDelegationsRequest): Promise<QueryDelegationsResponse>;
    /** Delegations provides data on the delegations for the given zone. */
    receipts(request: QueryReceiptsRequest): Promise<QueryReceiptsResponse>;
    txStatus(request: QueryTxStatusRequest): Promise<QueryTxStatusResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    withdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    /** UnbondingRecords provides data on the active unbondings. */
    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
    /** RedelegationRecords provides data on the active unbondings. */
    redelegationRecords(request: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponse>;
    /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
    mappedAccounts(request: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    zones(request?: QueryZonesRequest): Promise<QueryZonesResponse>;
    zone(request: QueryZoneRequest): Promise<QueryZoneResponse>;
    zoneValidators(request: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponse>;
    depositAccount(request: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponse>;
    delegatorIntent(request: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponse>;
    delegatorIntents(request: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponse>;
    delegations(request: QueryDelegationsRequest): Promise<QueryDelegationsResponse>;
    receipts(request: QueryReceiptsRequest): Promise<QueryReceiptsResponse>;
    txStatus(request: QueryTxStatusRequest): Promise<QueryTxStatusResponse>;
    zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    withdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
    redelegationRecords(request: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponse>;
    mappedAccounts(request: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    zones(request?: QueryZonesRequest): Promise<QueryZonesResponse>;
    zone(request: QueryZoneRequest): Promise<QueryZoneResponse>;
    zoneValidators(request: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponse>;
    depositAccount(request: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponse>;
    delegatorIntent(request: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponse>;
    delegatorIntents(request: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponse>;
    delegations(request: QueryDelegationsRequest): Promise<QueryDelegationsResponse>;
    receipts(request: QueryReceiptsRequest): Promise<QueryReceiptsResponse>;
    txStatus(request: QueryTxStatusRequest): Promise<QueryTxStatusResponse>;
    zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    withdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
    redelegationRecords(request: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponse>;
    mappedAccounts(request: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponse>;
};
