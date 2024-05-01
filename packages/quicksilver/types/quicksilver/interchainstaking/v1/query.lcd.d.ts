import { LCDClient } from "@cosmology/lcd";
import { QueryZonesRequest, QueryZonesResponseSDKType, QueryZoneRequest, QueryZoneResponseSDKType, QueryZoneValidatorsRequest, QueryZoneValidatorsResponseSDKType, QueryDepositAccountForChainRequest, QueryDepositAccountForChainResponseSDKType, QueryDelegatorIntentRequest, QueryDelegatorIntentResponseSDKType, QueryDelegatorIntentsRequest, QueryDelegatorIntentsResponseSDKType, QueryDelegationsRequest, QueryDelegationsResponseSDKType, QueryReceiptsRequest, QueryReceiptsResponseSDKType, QueryTxStatusRequest, QueryTxStatusResponseSDKType, QueryWithdrawalRecordsRequest, QueryWithdrawalRecordsResponseSDKType, QueryUserWithdrawalRecordsRequest, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponseSDKType, QueryRedelegationRecordsRequest, QueryRedelegationRecordsResponseSDKType, QueryMappedAccountsRequest, QueryMappedAccountsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    zones(params?: QueryZonesRequest): Promise<QueryZonesResponseSDKType>;
    zone(params: QueryZoneRequest): Promise<QueryZoneResponseSDKType>;
    zoneValidators(params: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponseSDKType>;
    depositAccount(params: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponseSDKType>;
    delegatorIntent(params: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponseSDKType>;
    delegatorIntents(params: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponseSDKType>;
    delegations(params: QueryDelegationsRequest): Promise<QueryDelegationsResponseSDKType>;
    receipts(params: QueryReceiptsRequest): Promise<QueryReceiptsResponseSDKType>;
    txStatus(params: QueryTxStatusRequest): Promise<QueryTxStatusResponseSDKType>;
    zoneWithdrawalRecords(params: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponseSDKType>;
    withdrawalRecords(params: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponseSDKType>;
    userWithdrawalRecords(params: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponseSDKType>;
    unbondingRecords(params: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponseSDKType>;
    redelegationRecords(params: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponseSDKType>;
    mappedAccounts(params: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponseSDKType>;
}
