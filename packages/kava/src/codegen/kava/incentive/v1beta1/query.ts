import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { USDXMintingClaim, USDXMintingClaimAmino, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimAmino, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimAmino, DelegatorClaimSDKType, SwapClaim, SwapClaimAmino, SwapClaimSDKType, SavingsClaim, SavingsClaimAmino, SavingsClaimSDKType, EarnClaim, EarnClaimAmino, EarnClaimSDKType, RewardIndex, RewardIndexAmino, RewardIndexSDKType, MultiRewardIndex, MultiRewardIndexAmino, MultiRewardIndexSDKType } from "./claims";
import { Apy, ApyAmino, ApySDKType } from "./apy";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.incentive.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
export interface QueryRewardFactorsRequest {}
export interface QueryRewardFactorsRequestProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.QueryRewardFactorsRequest";
  value: Uint8Array;
}
/** QueryRewardFactorsRequest is the request type for the Query/RewardFactors RPC method. */
export interface QueryRewardFactorsRequestAmino {}
export interface QueryRewardFactorsRequestAminoMsg {
  type: "/kava.incentive.v1beta1.QueryRewardFactorsRequest";
  value: QueryRewardFactorsRequestAmino;
}
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
export interface QueryApyRequest {}
export interface QueryApyRequestProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.QueryApyRequest";
  value: Uint8Array;
}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequestAmino {}
export interface QueryApyRequestAminoMsg {
  type: "/kava.incentive.v1beta1.QueryApyRequest";
  value: QueryApyRequestAmino;
}
/** QueryApysRequest is the request type for the Query/Apys RPC method. */
export interface QueryApyRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.incentive.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kava.incentive.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
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
  typeUrl: "/kava.incentive.v1beta1.QueryRewardsRequest",
  encode(message: QueryRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRewardsRequestAmino): QueryRewardsRequest {
    return {
      owner: object.owner,
      rewardType: object.reward_type,
      unsynchronized: object.unsynchronized
    };
  },
  toAmino(message: QueryRewardsRequest): QueryRewardsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.reward_type = message.rewardType;
    obj.unsynchronized = message.unsynchronized;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsRequestAminoMsg): QueryRewardsRequest {
    return QueryRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsRequestProtoMsg): QueryRewardsRequest {
    return QueryRewardsRequest.decode(message.value);
  },
  toProto(message: QueryRewardsRequest): Uint8Array {
    return QueryRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsRequest): QueryRewardsRequestProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryRewardsRequest",
      value: QueryRewardsRequest.encode(message).finish()
    };
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
  typeUrl: "/kava.incentive.v1beta1.QueryRewardsResponse",
  encode(message: QueryRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRewardsResponseAmino): QueryRewardsResponse {
    return {
      usdxMintingClaims: Array.isArray(object?.usdx_minting_claims) ? object.usdx_minting_claims.map((e: any) => USDXMintingClaim.fromAmino(e)) : [],
      hardLiquidityProviderClaims: Array.isArray(object?.hard_liquidity_provider_claims) ? object.hard_liquidity_provider_claims.map((e: any) => HardLiquidityProviderClaim.fromAmino(e)) : [],
      delegatorClaims: Array.isArray(object?.delegator_claims) ? object.delegator_claims.map((e: any) => DelegatorClaim.fromAmino(e)) : [],
      swapClaims: Array.isArray(object?.swap_claims) ? object.swap_claims.map((e: any) => SwapClaim.fromAmino(e)) : [],
      savingsClaims: Array.isArray(object?.savings_claims) ? object.savings_claims.map((e: any) => SavingsClaim.fromAmino(e)) : [],
      earnClaims: Array.isArray(object?.earn_claims) ? object.earn_claims.map((e: any) => EarnClaim.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryRewardsResponse): QueryRewardsResponseAmino {
    const obj: any = {};
    if (message.usdxMintingClaims) {
      obj.usdx_minting_claims = message.usdxMintingClaims.map(e => e ? USDXMintingClaim.toAmino(e) : undefined);
    } else {
      obj.usdx_minting_claims = [];
    }
    if (message.hardLiquidityProviderClaims) {
      obj.hard_liquidity_provider_claims = message.hardLiquidityProviderClaims.map(e => e ? HardLiquidityProviderClaim.toAmino(e) : undefined);
    } else {
      obj.hard_liquidity_provider_claims = [];
    }
    if (message.delegatorClaims) {
      obj.delegator_claims = message.delegatorClaims.map(e => e ? DelegatorClaim.toAmino(e) : undefined);
    } else {
      obj.delegator_claims = [];
    }
    if (message.swapClaims) {
      obj.swap_claims = message.swapClaims.map(e => e ? SwapClaim.toAmino(e) : undefined);
    } else {
      obj.swap_claims = [];
    }
    if (message.savingsClaims) {
      obj.savings_claims = message.savingsClaims.map(e => e ? SavingsClaim.toAmino(e) : undefined);
    } else {
      obj.savings_claims = [];
    }
    if (message.earnClaims) {
      obj.earn_claims = message.earnClaims.map(e => e ? EarnClaim.toAmino(e) : undefined);
    } else {
      obj.earn_claims = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardsResponseAminoMsg): QueryRewardsResponse {
    return QueryRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsResponseProtoMsg): QueryRewardsResponse {
    return QueryRewardsResponse.decode(message.value);
  },
  toProto(message: QueryRewardsResponse): Uint8Array {
    return QueryRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsResponse): QueryRewardsResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryRewardsResponse",
      value: QueryRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardFactorsRequest(): QueryRewardFactorsRequest {
  return {};
}
export const QueryRewardFactorsRequest = {
  typeUrl: "/kava.incentive.v1beta1.QueryRewardFactorsRequest",
  encode(_: QueryRewardFactorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryRewardFactorsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryRewardFactorsRequest>): QueryRewardFactorsRequest {
    const message = createBaseQueryRewardFactorsRequest();
    return message;
  },
  fromAmino(_: QueryRewardFactorsRequestAmino): QueryRewardFactorsRequest {
    return {};
  },
  toAmino(_: QueryRewardFactorsRequest): QueryRewardFactorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRewardFactorsRequestAminoMsg): QueryRewardFactorsRequest {
    return QueryRewardFactorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardFactorsRequestProtoMsg): QueryRewardFactorsRequest {
    return QueryRewardFactorsRequest.decode(message.value);
  },
  toProto(message: QueryRewardFactorsRequest): Uint8Array {
    return QueryRewardFactorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardFactorsRequest): QueryRewardFactorsRequestProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryRewardFactorsRequest",
      value: QueryRewardFactorsRequest.encode(message).finish()
    };
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
  typeUrl: "/kava.incentive.v1beta1.QueryRewardFactorsResponse",
  encode(message: QueryRewardFactorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRewardFactorsResponseAmino): QueryRewardFactorsResponse {
    return {
      usdxMintingRewardFactors: Array.isArray(object?.usdx_minting_reward_factors) ? object.usdx_minting_reward_factors.map((e: any) => RewardIndex.fromAmino(e)) : [],
      hardSupplyRewardFactors: Array.isArray(object?.hard_supply_reward_factors) ? object.hard_supply_reward_factors.map((e: any) => MultiRewardIndex.fromAmino(e)) : [],
      hardBorrowRewardFactors: Array.isArray(object?.hard_borrow_reward_factors) ? object.hard_borrow_reward_factors.map((e: any) => MultiRewardIndex.fromAmino(e)) : [],
      delegatorRewardFactors: Array.isArray(object?.delegator_reward_factors) ? object.delegator_reward_factors.map((e: any) => MultiRewardIndex.fromAmino(e)) : [],
      swapRewardFactors: Array.isArray(object?.swap_reward_factors) ? object.swap_reward_factors.map((e: any) => MultiRewardIndex.fromAmino(e)) : [],
      savingsRewardFactors: Array.isArray(object?.savings_reward_factors) ? object.savings_reward_factors.map((e: any) => MultiRewardIndex.fromAmino(e)) : [],
      earnRewardFactors: Array.isArray(object?.earn_reward_factors) ? object.earn_reward_factors.map((e: any) => MultiRewardIndex.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryRewardFactorsResponse): QueryRewardFactorsResponseAmino {
    const obj: any = {};
    if (message.usdxMintingRewardFactors) {
      obj.usdx_minting_reward_factors = message.usdxMintingRewardFactors.map(e => e ? RewardIndex.toAmino(e) : undefined);
    } else {
      obj.usdx_minting_reward_factors = [];
    }
    if (message.hardSupplyRewardFactors) {
      obj.hard_supply_reward_factors = message.hardSupplyRewardFactors.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.hard_supply_reward_factors = [];
    }
    if (message.hardBorrowRewardFactors) {
      obj.hard_borrow_reward_factors = message.hardBorrowRewardFactors.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.hard_borrow_reward_factors = [];
    }
    if (message.delegatorRewardFactors) {
      obj.delegator_reward_factors = message.delegatorRewardFactors.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.delegator_reward_factors = [];
    }
    if (message.swapRewardFactors) {
      obj.swap_reward_factors = message.swapRewardFactors.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.swap_reward_factors = [];
    }
    if (message.savingsRewardFactors) {
      obj.savings_reward_factors = message.savingsRewardFactors.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.savings_reward_factors = [];
    }
    if (message.earnRewardFactors) {
      obj.earn_reward_factors = message.earnRewardFactors.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.earn_reward_factors = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardFactorsResponseAminoMsg): QueryRewardFactorsResponse {
    return QueryRewardFactorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardFactorsResponseProtoMsg): QueryRewardFactorsResponse {
    return QueryRewardFactorsResponse.decode(message.value);
  },
  toProto(message: QueryRewardFactorsResponse): Uint8Array {
    return QueryRewardFactorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardFactorsResponse): QueryRewardFactorsResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryRewardFactorsResponse",
      value: QueryRewardFactorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryApyRequest(): QueryApyRequest {
  return {};
}
export const QueryApyRequest = {
  typeUrl: "/kava.incentive.v1beta1.QueryApyRequest",
  encode(_: QueryApyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryApyRequest {
    return {};
  },
  fromPartial(_: Partial<QueryApyRequest>): QueryApyRequest {
    const message = createBaseQueryApyRequest();
    return message;
  },
  fromAmino(_: QueryApyRequestAmino): QueryApyRequest {
    return {};
  },
  toAmino(_: QueryApyRequest): QueryApyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryApyRequestAminoMsg): QueryApyRequest {
    return QueryApyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryApyRequestProtoMsg): QueryApyRequest {
    return QueryApyRequest.decode(message.value);
  },
  toProto(message: QueryApyRequest): Uint8Array {
    return QueryApyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryApyRequest): QueryApyRequestProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryApyRequest",
      value: QueryApyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryApyResponse(): QueryApyResponse {
  return {
    earn: []
  };
}
export const QueryApyResponse = {
  typeUrl: "/kava.incentive.v1beta1.QueryApyResponse",
  encode(message: QueryApyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryApyResponseAmino): QueryApyResponse {
    return {
      earn: Array.isArray(object?.earn) ? object.earn.map((e: any) => Apy.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryApyResponse): QueryApyResponseAmino {
    const obj: any = {};
    if (message.earn) {
      obj.earn = message.earn.map(e => e ? Apy.toAmino(e) : undefined);
    } else {
      obj.earn = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryApyResponseAminoMsg): QueryApyResponse {
    return QueryApyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryApyResponseProtoMsg): QueryApyResponse {
    return QueryApyResponse.decode(message.value);
  },
  toProto(message: QueryApyResponse): Uint8Array {
    return QueryApyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryApyResponse): QueryApyResponseProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.QueryApyResponse",
      value: QueryApyResponse.encode(message).finish()
    };
  }
};