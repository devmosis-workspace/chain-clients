import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeEntriesRequest {
    delegator: string;
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeEntriesRequestSDKType {
    delegator: string;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakingEntriesResponse {
    /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
    validators: string[];
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakingEntriesResponseSDKType {
    validators: string[];
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdRequest {
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdRequestSDKType {
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdResponse {
    /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
    threshold: string;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdResponseSDKType {
    threshold: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestSDKType {
    validator_address: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
    rewards?: ValidatorOutstandingRewards;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseSDKType {
    rewards?: ValidatorOutstandingRewardsSDKType;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestSDKType {
    validator_address: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
    /** commission defines the commision the validator received. */
    commission?: ValidatorAccumulatedCommission;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseSDKType {
    commission?: ValidatorAccumulatedCommissionSDKType;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
    /** starting_height defines the optional starting height to query the slashes. */
    startingHeight: Long;
    /** starting_height defines the optional ending height to query the slashes. */
    endingHeight: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestSDKType {
    validator_address: string;
    starting_height: Long;
    ending_height: Long;
    pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
    /** slashes defines the slashes the validator received. */
    slashes: ValidatorSlashEvent[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseSDKType {
    slashes: ValidatorSlashEventSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestSDKType {
    delegator_address: string;
    validator_address: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecCoin[];
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseSDKType {
    rewards: DecCoinSDKType[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: DelegationDelegatorReward[];
    /** total defines the sum of all the rewards. */
    total: DecCoin[];
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseSDKType {
    rewards: DelegationDelegatorRewardSDKType[];
    total: DecCoinSDKType[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators a delegator is delegating for. */
    validators: string[];
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
    validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
    /** withdraw_address defines the delegator address to query for. */
    withdrawAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseSDKType {
    withdraw_address: string;
}
/**
 * QueryFoundationTaxRequest is the request type for the
 * Query/FoundationTax RPC method.
 */
export interface QueryFoundationTaxRequest {
}
/**
 * QueryFoundationTaxRequest is the request type for the
 * Query/FoundationTax RPC method.
 */
export interface QueryFoundationTaxRequestSDKType {
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryFoundationTaxResponse {
    /** withdraw_address defines the delegator address to query for. */
    tax: string;
    foundationAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryFoundationTaxResponseSDKType {
    tax: string;
    foundation_address: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestSDKType {
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
    /** pool defines community pool's coins. */
    pool: DecCoin[];
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseSDKType {
    pool: DecCoinSDKType[];
}
export declare const QueryRestakeEntriesRequest: {
    encode(message: QueryRestakeEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRestakeEntriesRequest;
    fromPartial(object: Partial<QueryRestakeEntriesRequest>): QueryRestakeEntriesRequest;
};
export declare const QueryRestakingEntriesResponse: {
    encode(message: QueryRestakingEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRestakingEntriesResponse;
    fromPartial(object: Partial<QueryRestakingEntriesResponse>): QueryRestakingEntriesResponse;
};
export declare const QueryRestakeThresholdRequest: {
    encode(_: QueryRestakeThresholdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryRestakeThresholdRequest;
    fromPartial(_: Partial<QueryRestakeThresholdRequest>): QueryRestakeThresholdRequest;
};
export declare const QueryRestakeThresholdResponse: {
    encode(message: QueryRestakeThresholdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRestakeThresholdResponse;
    fromPartial(object: Partial<QueryRestakeThresholdResponse>): QueryRestakeThresholdResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryValidatorOutstandingRewardsRequest: {
    encode(message: QueryValidatorOutstandingRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorOutstandingRewardsRequest;
    fromPartial(object: Partial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest;
};
export declare const QueryValidatorOutstandingRewardsResponse: {
    encode(message: QueryValidatorOutstandingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorOutstandingRewardsResponse;
    fromPartial(object: Partial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse;
};
export declare const QueryValidatorCommissionRequest: {
    encode(message: QueryValidatorCommissionRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorCommissionRequest;
    fromPartial(object: Partial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest;
};
export declare const QueryValidatorCommissionResponse: {
    encode(message: QueryValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorCommissionResponse;
    fromPartial(object: Partial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse;
};
export declare const QueryValidatorSlashesRequest: {
    encode(message: QueryValidatorSlashesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorSlashesRequest;
    fromPartial(object: Partial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest;
};
export declare const QueryValidatorSlashesResponse: {
    encode(message: QueryValidatorSlashesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorSlashesResponse;
    fromPartial(object: Partial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse;
};
export declare const QueryDelegationRewardsRequest: {
    encode(message: QueryDelegationRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegationRewardsRequest;
    fromPartial(object: Partial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest;
};
export declare const QueryDelegationRewardsResponse: {
    encode(message: QueryDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegationRewardsResponse;
    fromPartial(object: Partial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse;
};
export declare const QueryDelegationTotalRewardsRequest: {
    encode(message: QueryDelegationTotalRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegationTotalRewardsRequest;
    fromPartial(object: Partial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest;
};
export declare const QueryDelegationTotalRewardsResponse: {
    encode(message: QueryDelegationTotalRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegationTotalRewardsResponse;
    fromPartial(object: Partial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse;
};
export declare const QueryDelegatorValidatorsRequest: {
    encode(message: QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest;
};
export declare const QueryDelegatorValidatorsResponse: {
    encode(message: QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse;
};
export declare const QueryDelegatorWithdrawAddressRequest: {
    encode(message: QueryDelegatorWithdrawAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorWithdrawAddressRequest;
    fromPartial(object: Partial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest;
};
export declare const QueryDelegatorWithdrawAddressResponse: {
    encode(message: QueryDelegatorWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegatorWithdrawAddressResponse;
    fromPartial(object: Partial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse;
};
export declare const QueryFoundationTaxRequest: {
    encode(_: QueryFoundationTaxRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryFoundationTaxRequest;
    fromPartial(_: Partial<QueryFoundationTaxRequest>): QueryFoundationTaxRequest;
};
export declare const QueryFoundationTaxResponse: {
    encode(message: QueryFoundationTaxResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFoundationTaxResponse;
    fromPartial(object: Partial<QueryFoundationTaxResponse>): QueryFoundationTaxResponse;
};
export declare const QueryCommunityPoolRequest: {
    encode(_: QueryCommunityPoolRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCommunityPoolRequest;
    fromPartial(_: Partial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest;
};
export declare const QueryCommunityPoolResponse: {
    encode(message: QueryCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCommunityPoolResponse;
    fromPartial(object: Partial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse;
};
