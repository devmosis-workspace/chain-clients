import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { USDXMintingClaim, USDXMintingClaimAmino, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimAmino, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimAmino, DelegatorClaimSDKType, SwapClaim, SwapClaimAmino, SwapClaimSDKType, SavingsClaim, SavingsClaimAmino, SavingsClaimSDKType, EarnClaim, EarnClaimAmino, EarnClaimSDKType, RewardIndex, RewardIndexAmino, RewardIndexSDKType, MultiRewardIndex, MultiRewardIndexAmino, MultiRewardIndexSDKType } from "./claims";
import { Apy, ApyAmino, ApySDKType } from "./apy";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.incentive.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.incentive.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
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
export interface QueryRewardsRequestProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryRewardsRequest";
    value: Uint8Array;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */
export interface QueryRewardsRequestAmino {
    /** owner is the address of the user to query rewards for. */
    owner: string;
    /**
     * reward_type is the type of reward to query rewards for, e.g. hard, earn,
     * swap.
     */
    reward_type: string;
    /**
     * unsynchronized is a flag to query rewards that are not simulated for reward
     * synchronized for the current block.
     */
    unsynchronized: boolean;
}
export interface QueryRewardsRequestAminoMsg {
    type: "/kava.incentive.v1beta1.QueryRewardsRequest";
    value: QueryRewardsRequestAmino;
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
export interface QueryRewardsResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryRewardsResponse";
    value: Uint8Array;
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */
export interface QueryRewardsResponseAmino {
    usdx_minting_claims: USDXMintingClaimAmino[];
    hard_liquidity_provider_claims: HardLiquidityProviderClaimAmino[];
    delegator_claims: DelegatorClaimAmino[];
    swap_claims: SwapClaimAmino[];
    savings_claims: SavingsClaimAmino[];
    earn_claims: EarnClaimAmino[];
}
export interface QueryRewardsResponseAminoMsg {
    type: "/kava.incentive.v1beta1.QueryRewardsResponse";
    value: QueryRewardsResponseAmino;
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
export interface QueryRewardFactorsRequestProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryRewardFactorsRequest";
    value: Uint8Array;
}
/** QueryRewardFactorsRequest is the request type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsRequestAmino {
}
export interface QueryRewardFactorsRequestAminoMsg {
    type: "/kava.incentive.v1beta1.QueryRewardFactorsRequest";
    value: QueryRewardFactorsRequestAmino;
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
export interface QueryRewardFactorsResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryRewardFactorsResponse";
    value: Uint8Array;
}
/** QueryRewardFactorsResponse is the response type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsResponseAmino {
    usdx_minting_reward_factors: RewardIndexAmino[];
    hard_supply_reward_factors: MultiRewardIndexAmino[];
    hard_borrow_reward_factors: MultiRewardIndexAmino[];
    delegator_reward_factors: MultiRewardIndexAmino[];
    swap_reward_factors: MultiRewardIndexAmino[];
    savings_reward_factors: MultiRewardIndexAmino[];
    earn_reward_factors: MultiRewardIndexAmino[];
}
export interface QueryRewardFactorsResponseAminoMsg {
    type: "/kava.incentive.v1beta1.QueryRewardFactorsResponse";
    value: QueryRewardFactorsResponseAmino;
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
export interface QueryApyRequestProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryApyRequest";
    value: Uint8Array;
}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequestAmino {
}
export interface QueryApyRequestAminoMsg {
    type: "/kava.incentive.v1beta1.QueryApyRequest";
    value: QueryApyRequestAmino;
}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequestSDKType {
}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponse {
    earn: Apy[];
}
export interface QueryApyResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.QueryApyResponse";
    value: Uint8Array;
}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponseAmino {
    earn: ApyAmino[];
}
export interface QueryApyResponseAminoMsg {
    type: "/kava.incentive.v1beta1.QueryApyResponse";
    value: QueryApyResponseAmino;
}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponseSDKType {
    earn: ApySDKType[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryRewardsRequest: {
    typeUrl: string;
    encode(message: QueryRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRewardsRequest;
    fromPartial(object: Partial<QueryRewardsRequest>): QueryRewardsRequest;
    fromAmino(object: QueryRewardsRequestAmino): QueryRewardsRequest;
    toAmino(message: QueryRewardsRequest): QueryRewardsRequestAmino;
    fromAminoMsg(object: QueryRewardsRequestAminoMsg): QueryRewardsRequest;
    fromProtoMsg(message: QueryRewardsRequestProtoMsg): QueryRewardsRequest;
    toProto(message: QueryRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryRewardsRequest): QueryRewardsRequestProtoMsg;
};
export declare const QueryRewardsResponse: {
    typeUrl: string;
    encode(message: QueryRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRewardsResponse;
    fromPartial(object: Partial<QueryRewardsResponse>): QueryRewardsResponse;
    fromAmino(object: QueryRewardsResponseAmino): QueryRewardsResponse;
    toAmino(message: QueryRewardsResponse): QueryRewardsResponseAmino;
    fromAminoMsg(object: QueryRewardsResponseAminoMsg): QueryRewardsResponse;
    fromProtoMsg(message: QueryRewardsResponseProtoMsg): QueryRewardsResponse;
    toProto(message: QueryRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryRewardsResponse): QueryRewardsResponseProtoMsg;
};
export declare const QueryRewardFactorsRequest: {
    typeUrl: string;
    encode(_: QueryRewardFactorsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryRewardFactorsRequest;
    fromPartial(_: Partial<QueryRewardFactorsRequest>): QueryRewardFactorsRequest;
    fromAmino(_: QueryRewardFactorsRequestAmino): QueryRewardFactorsRequest;
    toAmino(_: QueryRewardFactorsRequest): QueryRewardFactorsRequestAmino;
    fromAminoMsg(object: QueryRewardFactorsRequestAminoMsg): QueryRewardFactorsRequest;
    fromProtoMsg(message: QueryRewardFactorsRequestProtoMsg): QueryRewardFactorsRequest;
    toProto(message: QueryRewardFactorsRequest): Uint8Array;
    toProtoMsg(message: QueryRewardFactorsRequest): QueryRewardFactorsRequestProtoMsg;
};
export declare const QueryRewardFactorsResponse: {
    typeUrl: string;
    encode(message: QueryRewardFactorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRewardFactorsResponse;
    fromPartial(object: Partial<QueryRewardFactorsResponse>): QueryRewardFactorsResponse;
    fromAmino(object: QueryRewardFactorsResponseAmino): QueryRewardFactorsResponse;
    toAmino(message: QueryRewardFactorsResponse): QueryRewardFactorsResponseAmino;
    fromAminoMsg(object: QueryRewardFactorsResponseAminoMsg): QueryRewardFactorsResponse;
    fromProtoMsg(message: QueryRewardFactorsResponseProtoMsg): QueryRewardFactorsResponse;
    toProto(message: QueryRewardFactorsResponse): Uint8Array;
    toProtoMsg(message: QueryRewardFactorsResponse): QueryRewardFactorsResponseProtoMsg;
};
export declare const QueryApyRequest: {
    typeUrl: string;
    encode(_: QueryApyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryApyRequest;
    fromPartial(_: Partial<QueryApyRequest>): QueryApyRequest;
    fromAmino(_: QueryApyRequestAmino): QueryApyRequest;
    toAmino(_: QueryApyRequest): QueryApyRequestAmino;
    fromAminoMsg(object: QueryApyRequestAminoMsg): QueryApyRequest;
    fromProtoMsg(message: QueryApyRequestProtoMsg): QueryApyRequest;
    toProto(message: QueryApyRequest): Uint8Array;
    toProtoMsg(message: QueryApyRequest): QueryApyRequestProtoMsg;
};
export declare const QueryApyResponse: {
    typeUrl: string;
    encode(message: QueryApyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryApyResponse;
    fromPartial(object: Partial<QueryApyResponse>): QueryApyResponse;
    fromAmino(object: QueryApyResponseAmino): QueryApyResponse;
    toAmino(message: QueryApyResponse): QueryApyResponseAmino;
    fromAminoMsg(object: QueryApyResponseAminoMsg): QueryApyResponse;
    fromProtoMsg(message: QueryApyResponseProtoMsg): QueryApyResponse;
    toProto(message: QueryApyResponse): Uint8Array;
    toProtoMsg(message: QueryApyResponse): QueryApyResponseProtoMsg;
};
