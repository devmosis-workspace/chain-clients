import { Params, ParamsAmino, ParamsSDKType, RewardParams, RewardParamsAmino, RewardParamsSDKType, PmtpParams, PmtpParamsAmino, PmtpParamsSDKType, PmtpRateParams, PmtpRateParamsAmino, PmtpRateParamsSDKType, LiquidityProtectionParams, LiquidityProtectionParamsAmino, LiquidityProtectionParamsSDKType, LiquidityProtectionRateParams, LiquidityProtectionRateParamsAmino, LiquidityProtectionRateParamsSDKType, SwapFeeParams, SwapFeeParamsAmino, SwapFeeParamsSDKType, ProviderDistributionParams, ProviderDistributionParamsAmino, ProviderDistributionParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType, LiquidityProvider, LiquidityProviderAmino, LiquidityProviderSDKType, PmtpEpoch, PmtpEpochAmino, PmtpEpochSDKType } from "./types";
import { RewardsBucket, RewardsBucketAmino, RewardsBucketSDKType } from "./rewards_bucket";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState - all clp state that must be provided at genesis */
export interface GenesisState {
  params: Params;
  addressWhitelist: string[];
  poolList: Pool[];
  liquidityProviders: LiquidityProvider[];
  rewardsBucketList: RewardsBucket[];
  rewardParams: RewardParams;
  pmtpParams: PmtpParams;
  pmtpEpoch: PmtpEpoch;
  pmtpRateParams: PmtpRateParams;
  liquidityProtectionParams: LiquidityProtectionParams;
  liquidityProtectionRateParams: LiquidityProtectionRateParams;
  swapFeeParams: SwapFeeParams;
  providerDistributionParams: ProviderDistributionParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sifnode.clp.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - all clp state that must be provided at genesis */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  address_whitelist?: string[];
  pool_list?: PoolAmino[];
  liquidity_providers?: LiquidityProviderAmino[];
  rewards_bucket_list?: RewardsBucketAmino[];
  reward_params?: RewardParamsAmino;
  pmtp_params?: PmtpParamsAmino;
  pmtp_epoch?: PmtpEpochAmino;
  pmtp_rate_params?: PmtpRateParamsAmino;
  liquidity_protection_params?: LiquidityProtectionParamsAmino;
  liquidity_protection_rate_params?: LiquidityProtectionRateParamsAmino;
  swap_fee_params?: SwapFeeParamsAmino;
  provider_distribution_params?: ProviderDistributionParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sifnode.clp.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - all clp state that must be provided at genesis */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  address_whitelist: string[];
  pool_list: PoolSDKType[];
  liquidity_providers: LiquidityProviderSDKType[];
  rewards_bucket_list: RewardsBucketSDKType[];
  reward_params: RewardParamsSDKType;
  pmtp_params: PmtpParamsSDKType;
  pmtp_epoch: PmtpEpochSDKType;
  pmtp_rate_params: PmtpRateParamsSDKType;
  liquidity_protection_params: LiquidityProtectionParamsSDKType;
  liquidity_protection_rate_params: LiquidityProtectionRateParamsSDKType;
  swap_fee_params: SwapFeeParamsSDKType;
  provider_distribution_params: ProviderDistributionParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    addressWhitelist: [],
    poolList: [],
    liquidityProviders: [],
    rewardsBucketList: [],
    rewardParams: RewardParams.fromPartial({}),
    pmtpParams: PmtpParams.fromPartial({}),
    pmtpEpoch: PmtpEpoch.fromPartial({}),
    pmtpRateParams: PmtpRateParams.fromPartial({}),
    liquidityProtectionParams: LiquidityProtectionParams.fromPartial({}),
    liquidityProtectionRateParams: LiquidityProtectionRateParams.fromPartial({}),
    swapFeeParams: SwapFeeParams.fromPartial({}),
    providerDistributionParams: ProviderDistributionParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/sifnode.clp.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.addressWhitelist) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.rewardsBucketList) {
      RewardsBucket.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardParams !== undefined) {
      RewardParams.encode(message.rewardParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.pmtpParams !== undefined) {
      PmtpParams.encode(message.pmtpParams, writer.uint32(58).fork()).ldelim();
    }
    if (message.pmtpEpoch !== undefined) {
      PmtpEpoch.encode(message.pmtpEpoch, writer.uint32(66).fork()).ldelim();
    }
    if (message.pmtpRateParams !== undefined) {
      PmtpRateParams.encode(message.pmtpRateParams, writer.uint32(74).fork()).ldelim();
    }
    if (message.liquidityProtectionParams !== undefined) {
      LiquidityProtectionParams.encode(message.liquidityProtectionParams, writer.uint32(82).fork()).ldelim();
    }
    if (message.liquidityProtectionRateParams !== undefined) {
      LiquidityProtectionRateParams.encode(message.liquidityProtectionRateParams, writer.uint32(90).fork()).ldelim();
    }
    if (message.swapFeeParams !== undefined) {
      SwapFeeParams.encode(message.swapFeeParams, writer.uint32(98).fork()).ldelim();
    }
    if (message.providerDistributionParams !== undefined) {
      ProviderDistributionParams.encode(message.providerDistributionParams, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      addressWhitelist: Array.isArray(object?.addressWhitelist) ? object.addressWhitelist.map((e: any) => String(e)) : [],
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromJSON(e)) : [],
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : [],
      rewardsBucketList: Array.isArray(object?.rewardsBucketList) ? object.rewardsBucketList.map((e: any) => RewardsBucket.fromJSON(e)) : [],
      rewardParams: isSet(object.rewardParams) ? RewardParams.fromJSON(object.rewardParams) : undefined,
      pmtpParams: isSet(object.pmtpParams) ? PmtpParams.fromJSON(object.pmtpParams) : undefined,
      pmtpEpoch: isSet(object.pmtpEpoch) ? PmtpEpoch.fromJSON(object.pmtpEpoch) : undefined,
      pmtpRateParams: isSet(object.pmtpRateParams) ? PmtpRateParams.fromJSON(object.pmtpRateParams) : undefined,
      liquidityProtectionParams: isSet(object.liquidityProtectionParams) ? LiquidityProtectionParams.fromJSON(object.liquidityProtectionParams) : undefined,
      liquidityProtectionRateParams: isSet(object.liquidityProtectionRateParams) ? LiquidityProtectionRateParams.fromJSON(object.liquidityProtectionRateParams) : undefined,
      swapFeeParams: isSet(object.swapFeeParams) ? SwapFeeParams.fromJSON(object.swapFeeParams) : undefined,
      providerDistributionParams: isSet(object.providerDistributionParams) ? ProviderDistributionParams.fromJSON(object.providerDistributionParams) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.addressWhitelist = object.addressWhitelist?.map(e => e) || [];
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.rewardsBucketList = object.rewardsBucketList?.map(e => RewardsBucket.fromPartial(e)) || [];
    message.rewardParams = object.rewardParams !== undefined && object.rewardParams !== null ? RewardParams.fromPartial(object.rewardParams) : undefined;
    message.pmtpParams = object.pmtpParams !== undefined && object.pmtpParams !== null ? PmtpParams.fromPartial(object.pmtpParams) : undefined;
    message.pmtpEpoch = object.pmtpEpoch !== undefined && object.pmtpEpoch !== null ? PmtpEpoch.fromPartial(object.pmtpEpoch) : undefined;
    message.pmtpRateParams = object.pmtpRateParams !== undefined && object.pmtpRateParams !== null ? PmtpRateParams.fromPartial(object.pmtpRateParams) : undefined;
    message.liquidityProtectionParams = object.liquidityProtectionParams !== undefined && object.liquidityProtectionParams !== null ? LiquidityProtectionParams.fromPartial(object.liquidityProtectionParams) : undefined;
    message.liquidityProtectionRateParams = object.liquidityProtectionRateParams !== undefined && object.liquidityProtectionRateParams !== null ? LiquidityProtectionRateParams.fromPartial(object.liquidityProtectionRateParams) : undefined;
    message.swapFeeParams = object.swapFeeParams !== undefined && object.swapFeeParams !== null ? SwapFeeParams.fromPartial(object.swapFeeParams) : undefined;
    message.providerDistributionParams = object.providerDistributionParams !== undefined && object.providerDistributionParams !== null ? ProviderDistributionParams.fromPartial(object.providerDistributionParams) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.addressWhitelist = object.address_whitelist?.map(e => e) || [];
    message.poolList = object.pool_list?.map(e => Pool.fromAmino(e)) || [];
    message.liquidityProviders = object.liquidity_providers?.map(e => LiquidityProvider.fromAmino(e)) || [];
    message.rewardsBucketList = object.rewards_bucket_list?.map(e => RewardsBucket.fromAmino(e)) || [];
    if (object.reward_params !== undefined && object.reward_params !== null) {
      message.rewardParams = RewardParams.fromAmino(object.reward_params);
    }
    if (object.pmtp_params !== undefined && object.pmtp_params !== null) {
      message.pmtpParams = PmtpParams.fromAmino(object.pmtp_params);
    }
    if (object.pmtp_epoch !== undefined && object.pmtp_epoch !== null) {
      message.pmtpEpoch = PmtpEpoch.fromAmino(object.pmtp_epoch);
    }
    if (object.pmtp_rate_params !== undefined && object.pmtp_rate_params !== null) {
      message.pmtpRateParams = PmtpRateParams.fromAmino(object.pmtp_rate_params);
    }
    if (object.liquidity_protection_params !== undefined && object.liquidity_protection_params !== null) {
      message.liquidityProtectionParams = LiquidityProtectionParams.fromAmino(object.liquidity_protection_params);
    }
    if (object.liquidity_protection_rate_params !== undefined && object.liquidity_protection_rate_params !== null) {
      message.liquidityProtectionRateParams = LiquidityProtectionRateParams.fromAmino(object.liquidity_protection_rate_params);
    }
    if (object.swap_fee_params !== undefined && object.swap_fee_params !== null) {
      message.swapFeeParams = SwapFeeParams.fromAmino(object.swap_fee_params);
    }
    if (object.provider_distribution_params !== undefined && object.provider_distribution_params !== null) {
      message.providerDistributionParams = ProviderDistributionParams.fromAmino(object.provider_distribution_params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.addressWhitelist) {
      obj.address_whitelist = message.addressWhitelist.map(e => e);
    } else {
      obj.address_whitelist = message.addressWhitelist;
    }
    if (message.poolList) {
      obj.pool_list = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool_list = message.poolList;
    }
    if (message.liquidityProviders) {
      obj.liquidity_providers = message.liquidityProviders.map(e => e ? LiquidityProvider.toAmino(e) : undefined);
    } else {
      obj.liquidity_providers = message.liquidityProviders;
    }
    if (message.rewardsBucketList) {
      obj.rewards_bucket_list = message.rewardsBucketList.map(e => e ? RewardsBucket.toAmino(e) : undefined);
    } else {
      obj.rewards_bucket_list = message.rewardsBucketList;
    }
    obj.reward_params = message.rewardParams ? RewardParams.toAmino(message.rewardParams) : undefined;
    obj.pmtp_params = message.pmtpParams ? PmtpParams.toAmino(message.pmtpParams) : undefined;
    obj.pmtp_epoch = message.pmtpEpoch ? PmtpEpoch.toAmino(message.pmtpEpoch) : undefined;
    obj.pmtp_rate_params = message.pmtpRateParams ? PmtpRateParams.toAmino(message.pmtpRateParams) : undefined;
    obj.liquidity_protection_params = message.liquidityProtectionParams ? LiquidityProtectionParams.toAmino(message.liquidityProtectionParams) : undefined;
    obj.liquidity_protection_rate_params = message.liquidityProtectionRateParams ? LiquidityProtectionRateParams.toAmino(message.liquidityProtectionRateParams) : undefined;
    obj.swap_fee_params = message.swapFeeParams ? SwapFeeParams.toAmino(message.swapFeeParams) : undefined;
    obj.provider_distribution_params = message.providerDistributionParams ? ProviderDistributionParams.toAmino(message.providerDistributionParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};