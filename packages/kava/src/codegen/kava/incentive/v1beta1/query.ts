import { Params, ParamsSDKType } from "./params";
import { USDXMintingClaim, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimSDKType, SwapClaim, SwapClaimSDKType, SavingsClaim, SavingsClaimSDKType, EarnClaim, EarnClaimSDKType, RewardIndex, RewardIndexSDKType, MultiRewardIndex, MultiRewardIndexSDKType } from "./claims";
import { Apy, ApySDKType } from "./apy";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
export interface QueryRewardFactorsRequest {}
/** QueryRewardFactorsRequest is the request type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsRequestSDKType {}
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
export interface QueryApyRequest {}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequestSDKType {}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponse {
  earn: Apy[];
}
/** QueryApysResponse is the response type for the Query/Apys RPC method. */
export interface QueryApyResponseSDKType {
  earn: ApySDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryRewardsRequest(): QueryRewardsRequest {
  return {
    owner: "",
    rewardType: "",
    unsynchronized: false
  };
}
export const QueryRewardsRequest = {
  encode(message: QueryRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.rewardType !== "") {
      writer.uint32(18).string(message.rewardType);
    }
    if (message.unsynchronized === true) {
      writer.uint32(24).bool(message.unsynchronized);
    }
    return writer;
  },
  fromJSON(object: any): QueryRewardsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      rewardType: isSet(object.rewardType) ? String(object.rewardType) : "",
      unsynchronized: isSet(object.unsynchronized) ? Boolean(object.unsynchronized) : false
    };
  },
  fromPartial(object: Partial<QueryRewardsRequest>): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    message.owner = object.owner ?? "";
    message.rewardType = object.rewardType ?? "";
    message.unsynchronized = object.unsynchronized ?? false;
    return message;
  }
};
function createBaseQueryRewardsResponse(): QueryRewardsResponse {
  return {
    usdxMintingClaims: [],
    hardLiquidityProviderClaims: [],
    delegatorClaims: [],
    swapClaims: [],
    savingsClaims: [],
    earnClaims: []
  };
}
export const QueryRewardsResponse = {
  encode(message: QueryRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.usdxMintingClaims) {
      USDXMintingClaim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hardLiquidityProviderClaims) {
      HardLiquidityProviderClaim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatorClaims) {
      DelegatorClaim.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapClaims) {
      SwapClaim.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.savingsClaims) {
      SavingsClaim.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.earnClaims) {
      EarnClaim.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRewardsResponse {
    return {
      usdxMintingClaims: Array.isArray(object?.usdxMintingClaims) ? object.usdxMintingClaims.map((e: any) => USDXMintingClaim.fromJSON(e)) : [],
      hardLiquidityProviderClaims: Array.isArray(object?.hardLiquidityProviderClaims) ? object.hardLiquidityProviderClaims.map((e: any) => HardLiquidityProviderClaim.fromJSON(e)) : [],
      delegatorClaims: Array.isArray(object?.delegatorClaims) ? object.delegatorClaims.map((e: any) => DelegatorClaim.fromJSON(e)) : [],
      swapClaims: Array.isArray(object?.swapClaims) ? object.swapClaims.map((e: any) => SwapClaim.fromJSON(e)) : [],
      savingsClaims: Array.isArray(object?.savingsClaims) ? object.savingsClaims.map((e: any) => SavingsClaim.fromJSON(e)) : [],
      earnClaims: Array.isArray(object?.earnClaims) ? object.earnClaims.map((e: any) => EarnClaim.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRewardsResponse>): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.usdxMintingClaims = object.usdxMintingClaims?.map(e => USDXMintingClaim.fromPartial(e)) || [];
    message.hardLiquidityProviderClaims = object.hardLiquidityProviderClaims?.map(e => HardLiquidityProviderClaim.fromPartial(e)) || [];
    message.delegatorClaims = object.delegatorClaims?.map(e => DelegatorClaim.fromPartial(e)) || [];
    message.swapClaims = object.swapClaims?.map(e => SwapClaim.fromPartial(e)) || [];
    message.savingsClaims = object.savingsClaims?.map(e => SavingsClaim.fromPartial(e)) || [];
    message.earnClaims = object.earnClaims?.map(e => EarnClaim.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryRewardFactorsRequest(): QueryRewardFactorsRequest {
  return {};
}
export const QueryRewardFactorsRequest = {
  encode(_: QueryRewardFactorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryRewardFactorsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryRewardFactorsRequest>): QueryRewardFactorsRequest {
    const message = createBaseQueryRewardFactorsRequest();
    return message;
  }
};
function createBaseQueryRewardFactorsResponse(): QueryRewardFactorsResponse {
  return {
    usdxMintingRewardFactors: [],
    hardSupplyRewardFactors: [],
    hardBorrowRewardFactors: [],
    delegatorRewardFactors: [],
    swapRewardFactors: [],
    savingsRewardFactors: [],
    earnRewardFactors: []
  };
}
export const QueryRewardFactorsResponse = {
  encode(message: QueryRewardFactorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.usdxMintingRewardFactors) {
      RewardIndex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hardSupplyRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hardBorrowRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatorRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.savingsRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.earnRewardFactors) {
      MultiRewardIndex.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRewardFactorsResponse {
    return {
      usdxMintingRewardFactors: Array.isArray(object?.usdxMintingRewardFactors) ? object.usdxMintingRewardFactors.map((e: any) => RewardIndex.fromJSON(e)) : [],
      hardSupplyRewardFactors: Array.isArray(object?.hardSupplyRewardFactors) ? object.hardSupplyRewardFactors.map((e: any) => MultiRewardIndex.fromJSON(e)) : [],
      hardBorrowRewardFactors: Array.isArray(object?.hardBorrowRewardFactors) ? object.hardBorrowRewardFactors.map((e: any) => MultiRewardIndex.fromJSON(e)) : [],
      delegatorRewardFactors: Array.isArray(object?.delegatorRewardFactors) ? object.delegatorRewardFactors.map((e: any) => MultiRewardIndex.fromJSON(e)) : [],
      swapRewardFactors: Array.isArray(object?.swapRewardFactors) ? object.swapRewardFactors.map((e: any) => MultiRewardIndex.fromJSON(e)) : [],
      savingsRewardFactors: Array.isArray(object?.savingsRewardFactors) ? object.savingsRewardFactors.map((e: any) => MultiRewardIndex.fromJSON(e)) : [],
      earnRewardFactors: Array.isArray(object?.earnRewardFactors) ? object.earnRewardFactors.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRewardFactorsResponse>): QueryRewardFactorsResponse {
    const message = createBaseQueryRewardFactorsResponse();
    message.usdxMintingRewardFactors = object.usdxMintingRewardFactors?.map(e => RewardIndex.fromPartial(e)) || [];
    message.hardSupplyRewardFactors = object.hardSupplyRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.hardBorrowRewardFactors = object.hardBorrowRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.delegatorRewardFactors = object.delegatorRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.swapRewardFactors = object.swapRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.savingsRewardFactors = object.savingsRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.earnRewardFactors = object.earnRewardFactors?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryApyRequest(): QueryApyRequest {
  return {};
}
export const QueryApyRequest = {
  encode(_: QueryApyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryApyRequest {
    return {};
  },
  fromPartial(_: Partial<QueryApyRequest>): QueryApyRequest {
    const message = createBaseQueryApyRequest();
    return message;
  }
};
function createBaseQueryApyResponse(): QueryApyResponse {
  return {
    earn: []
  };
}
export const QueryApyResponse = {
  encode(message: QueryApyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.earn) {
      Apy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryApyResponse {
    return {
      earn: Array.isArray(object?.earn) ? object.earn.map((e: any) => Apy.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryApyResponse>): QueryApyResponse {
    const message = createBaseQueryApyResponse();
    message.earn = object.earn?.map(e => Apy.fromPartial(e)) || [];
    return message;
  }
};