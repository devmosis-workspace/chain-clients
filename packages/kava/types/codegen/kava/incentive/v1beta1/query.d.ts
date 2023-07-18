import { Params, ParamsSDKType } from "./params";
import { USDXMintingClaim, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimSDKType, SwapClaim, SwapClaimSDKType, SavingsClaim, SavingsClaimSDKType, EarnClaim, EarnClaimSDKType, RewardIndex, RewardIndexSDKType, MultiRewardIndex, MultiRewardIndexSDKType } from "./claims";
import { Apy, ApySDKType } from "./apy";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */
export interface QueryRewardsRequest {
    /** owner is the address of the user to query rewards for. */
    owner: string;
    /**
     * reward_type is the type of reward to query rewards for, e.g. hard, earn,
     * swap.
     */
    rewardType: string;
    /**
     * unsynchronized is a flag to query rewards that are not simulated for reward
     * synchronized for the current block.
     */
    unsynchronized: boolean;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */
export interface QueryRewardsRequestSDKType {
    owner: string;
    reward_type: string;
    unsynchronized: boolean;
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */
export interface QueryRewardsResponse {
    usdxMintingClaims: USDXMintingClaim[];
    hardLiquidityProviderClaims: HardLiquidityProviderClaim[];
    delegatorClaims: DelegatorClaim[];
    swapClaims: SwapClaim[];
    savingsClaims: SavingsClaim[];
    earnClaims: EarnClaim[];
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */
export interface QueryRewardsResponseSDKType {
    usdx_minting_claims: USDXMintingClaimSDKType[];
    hard_liquidity_provider_claims: HardLiquidityProviderClaimSDKType[];
    delegator_claims: DelegatorClaimSDKType[];
    swap_claims: SwapClaimSDKType[];
    savings_claims: SavingsClaimSDKType[];
    earn_claims: EarnClaimSDKType[];
}
/** QueryRewardFactorsRequest is the request type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsRequest {
}
/** QueryRewardFactorsRequest is the request type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsRequestSDKType {
}
/** QueryRewardFactorsResponse is the response type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsResponse {
    usdxMintingRewardFactors: RewardIndex[];
    hardSupplyRewardFactors: MultiRewardIndex[];
    hardBorrowRewardFactors: MultiRewardIndex[];
    delegatorRewardFactors: MultiRewardIndex[];
    swapRewardFactors: MultiRewardIndex[];
    savingsRewardFactors: MultiRewardIndex[];
    earnRewardFactors: MultiRewardIndex[];
}
/** QueryRewardFactorsResponse is the response type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsResponseSDKType {
    usdx_minting_reward_factors: RewardIndexSDKType[];
    hard_supply_reward_factors: MultiRewardIndexSDKType[];
    hard_borrow_reward_factors: MultiRewardIndexSDKType[];
    delegator_reward_factors: MultiRewardIndexSDKType[];
    swap_reward_factors: MultiRewardIndexSDKType[];
    savings_reward_factors: MultiRewardIndexSDKType[];
    earn_reward_factors: MultiRewardIndexSDKType[];
}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequest {
}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequestSDKType {
}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponse {
    earn: Apy[];
}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponseSDKType {
    earn: ApySDKType[];
}
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
export declare const QueryRewardsRequest: {
    encode(message: QueryRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRewardsRequest;
    fromPartial(object: Partial<QueryRewardsRequest>): QueryRewardsRequest;
};
export declare const QueryRewardsResponse: {
    encode(message: QueryRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRewardsResponse;
    fromPartial(object: Partial<QueryRewardsResponse>): QueryRewardsResponse;
};
export declare const QueryRewardFactorsRequest: {
    encode(_: QueryRewardFactorsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryRewardFactorsRequest;
    fromPartial(_: Partial<QueryRewardFactorsRequest>): QueryRewardFactorsRequest;
};
export declare const QueryRewardFactorsResponse: {
    encode(message: QueryRewardFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRewardFactorsResponse;
    fromPartial(object: Partial<QueryRewardFactorsResponse>): QueryRewardFactorsResponse;
};
export declare const QueryApyRequest: {
    encode(_: QueryApyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryApyRequest;
    fromPartial(_: Partial<QueryApyRequest>): QueryApyRequest;
};
export declare const QueryApyResponse: {
    encode(message: QueryApyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryApyResponse;
    fromPartial(object: Partial<QueryApyResponse>): QueryApyResponse;
};
