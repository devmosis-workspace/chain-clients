import { Params, ParamsAmino, ParamsSDKType, RewardParams, RewardParamsAmino, RewardParamsSDKType, PmtpParams, PmtpParamsAmino, PmtpParamsSDKType, PmtpRateParams, PmtpRateParamsAmino, PmtpRateParamsSDKType, LiquidityProtectionParams, LiquidityProtectionParamsAmino, LiquidityProtectionParamsSDKType, LiquidityProtectionRateParams, LiquidityProtectionRateParamsAmino, LiquidityProtectionRateParamsSDKType, SwapFeeParams, SwapFeeParamsAmino, SwapFeeParamsSDKType, ProviderDistributionParams, ProviderDistributionParamsAmino, ProviderDistributionParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType, LiquidityProvider, LiquidityProviderAmino, LiquidityProviderSDKType, PmtpEpoch, PmtpEpochAmino, PmtpEpochSDKType } from "./types";
import { RewardsBucket, RewardsBucketAmino, RewardsBucketSDKType } from "./rewards_bucket";
import { BinaryWriter } from "../../../binary";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
