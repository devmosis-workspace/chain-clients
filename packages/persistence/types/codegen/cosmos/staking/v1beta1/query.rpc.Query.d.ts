import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponse, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponse, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponse, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponse, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponse, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponse, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponse, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Validators queries all validators that match the given status.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    /** Validator queries validator info for given validator address. */
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    /**
     * ValidatorDelegations queries delegate info for given validator.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    /** Delegation queries delegate info for given validator delegator pair. */
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    /**
     * Redelegations queries redelegations of given address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    /** HistoricalInfo queries the historical info for given height. */
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    /** Pool queries the pool info. */
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Parameters queries the staking parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * Query for individual tokenize share record information by share by id.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
    /**
     * Query for individual tokenize share record information by share denom.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
    /**
     * Query tokenize share records by address.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
    /**
     * Query for all tokenize share records.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
    /**
     * Query for last tokenize share record id.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
    /**
     * Query for total tokenized staked assets.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
    /**
     * Query for total liquid staked (including tokenized shares or owned by an liquid staking provider).
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
    /**
     * Query tokenize share locks.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
    tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
    tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
    allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
    lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
    totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
    totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
    tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
    tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
    tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
    allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
    lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
    totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
    totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
    tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
};
