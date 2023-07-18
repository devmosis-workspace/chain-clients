import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolResponseSDKType, QueryFoundationTaxRequest, QueryFoundationTaxResponseSDKType, QueryRestakeThresholdRequest, QueryRestakeThresholdResponseSDKType, QueryRestakeEntriesRequest, QueryRestakingEntriesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType>;
    validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType>;
    validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType>;
    delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType>;
    delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType>;
    delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType>;
    communityPool(_params?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponseSDKType>;
    foundationTax(_params?: QueryFoundationTaxRequest): Promise<QueryFoundationTaxResponseSDKType>;
    restakeThreshold(_params?: QueryRestakeThresholdRequest): Promise<QueryRestakeThresholdResponseSDKType>;
    restakingEntries(params: QueryRestakeEntriesRequest): Promise<QueryRestakingEntriesResponseSDKType>;
}
