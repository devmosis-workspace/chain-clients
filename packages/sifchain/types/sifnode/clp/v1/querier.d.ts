import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset, AssetAmino, AssetSDKType, Pool, PoolAmino, PoolSDKType, LiquidityProvider, LiquidityProviderAmino, LiquidityProviderSDKType, LiquidityProviderData, LiquidityProviderDataAmino, LiquidityProviderDataSDKType, PmtpEpoch, PmtpEpochAmino, PmtpEpochSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType, RewardParams, RewardParamsAmino, RewardParamsSDKType, PmtpParams, PmtpParamsAmino, PmtpParamsSDKType, PmtpRateParams, PmtpRateParamsAmino, PmtpRateParamsSDKType, LiquidityProtectionParams, LiquidityProtectionParamsAmino, LiquidityProtectionParamsSDKType, LiquidityProtectionRateParams, LiquidityProtectionRateParamsAmino, LiquidityProtectionRateParamsSDKType, ProviderDistributionParams, ProviderDistributionParamsAmino, ProviderDistributionParamsSDKType, SwapFeeTokenParams, SwapFeeTokenParamsAmino, SwapFeeTokenParamsSDKType } from "./params";
import { RewardsBucket, RewardsBucketAmino, RewardsBucketSDKType } from "./rewards_bucket";
import { BinaryWriter } from "../../../binary";
export declare enum SwapStatus {
    UNSPECIFIED = 0,
    NO_SWAP = 1,
    SELL_NATIVE = 2,
    BUY_NATIVE = 3,
    UNRECOGNIZED = -1
}
export declare const SwapStatusSDKType: typeof SwapStatus;
export declare const SwapStatusAmino: typeof SwapStatus;
export declare function swapStatusFromJSON(object: any): SwapStatus;
export declare function swapStatusToJSON(object: SwapStatus): string;
export interface PoolReq {
    symbol: string;
}
export interface PoolReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.PoolReq";
    value: Uint8Array;
}
export interface PoolReqAmino {
    symbol?: string;
}
export interface PoolReqAminoMsg {
    type: "/sifnode.clp.v1.PoolReq";
    value: PoolReqAmino;
}
export interface PoolReqSDKType {
    symbol: string;
}
export interface PoolRes {
    pool?: Pool;
    clpModuleAddress: string;
    height: bigint;
}
export interface PoolResProtoMsg {
    typeUrl: "/sifnode.clp.v1.PoolRes";
    value: Uint8Array;
}
export interface PoolResAmino {
    pool?: PoolAmino;
    clp_module_address?: string;
    height?: string;
}
export interface PoolResAminoMsg {
    type: "/sifnode.clp.v1.PoolRes";
    value: PoolResAmino;
}
export interface PoolResSDKType {
    pool?: PoolSDKType;
    clp_module_address: string;
    height: bigint;
}
export interface PoolsReq {
    pagination?: PageRequest;
}
export interface PoolsReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.PoolsReq";
    value: Uint8Array;
}
export interface PoolsReqAmino {
    pagination?: PageRequestAmino;
}
export interface PoolsReqAminoMsg {
    type: "/sifnode.clp.v1.PoolsReq";
    value: PoolsReqAmino;
}
export interface PoolsReqSDKType {
    pagination?: PageRequestSDKType;
}
export interface PoolsRes {
    pools: Pool[];
    clpModuleAddress: string;
    height: bigint;
    pagination?: PageResponse;
}
export interface PoolsResProtoMsg {
    typeUrl: "/sifnode.clp.v1.PoolsRes";
    value: Uint8Array;
}
export interface PoolsResAmino {
    pools?: PoolAmino[];
    clp_module_address?: string;
    height?: string;
    pagination?: PageResponseAmino;
}
export interface PoolsResAminoMsg {
    type: "/sifnode.clp.v1.PoolsRes";
    value: PoolsResAmino;
}
export interface PoolsResSDKType {
    pools: PoolSDKType[];
    clp_module_address: string;
    height: bigint;
    pagination?: PageResponseSDKType;
}
export interface LiquidityProviderReq {
    symbol: string;
    lpAddress: string;
}
export interface LiquidityProviderReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProviderReq";
    value: Uint8Array;
}
export interface LiquidityProviderReqAmino {
    symbol?: string;
    lp_address?: string;
}
export interface LiquidityProviderReqAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProviderReq";
    value: LiquidityProviderReqAmino;
}
export interface LiquidityProviderReqSDKType {
    symbol: string;
    lp_address: string;
}
export interface LiquidityProviderRes {
    liquidityProvider?: LiquidityProvider;
    nativeAssetBalance: string;
    externalAssetBalance: string;
    height: bigint;
}
export interface LiquidityProviderResProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProviderRes";
    value: Uint8Array;
}
export interface LiquidityProviderResAmino {
    liquidity_provider?: LiquidityProviderAmino;
    native_asset_balance?: string;
    external_asset_balance?: string;
    height?: string;
}
export interface LiquidityProviderResAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProviderRes";
    value: LiquidityProviderResAmino;
}
export interface LiquidityProviderResSDKType {
    liquidity_provider?: LiquidityProviderSDKType;
    native_asset_balance: string;
    external_asset_balance: string;
    height: bigint;
}
export interface AssetListReq {
    lpAddress: string;
    pagination?: PageRequest;
}
export interface AssetListReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.AssetListReq";
    value: Uint8Array;
}
export interface AssetListReqAmino {
    lp_address?: string;
    pagination?: PageRequestAmino;
}
export interface AssetListReqAminoMsg {
    type: "/sifnode.clp.v1.AssetListReq";
    value: AssetListReqAmino;
}
export interface AssetListReqSDKType {
    lp_address: string;
    pagination?: PageRequestSDKType;
}
export interface AssetListRes {
    assets: Asset[];
    height: bigint;
    pagination?: PageResponse;
}
export interface AssetListResProtoMsg {
    typeUrl: "/sifnode.clp.v1.AssetListRes";
    value: Uint8Array;
}
export interface AssetListResAmino {
    assets?: AssetAmino[];
    height?: string;
    pagination?: PageResponseAmino;
}
export interface AssetListResAminoMsg {
    type: "/sifnode.clp.v1.AssetListRes";
    value: AssetListResAmino;
}
export interface AssetListResSDKType {
    assets: AssetSDKType[];
    height: bigint;
    pagination?: PageResponseSDKType;
}
export interface LiquidityProviderDataReq {
    lpAddress: string;
    pagination?: PageRequest;
}
export interface LiquidityProviderDataReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProviderDataReq";
    value: Uint8Array;
}
export interface LiquidityProviderDataReqAmino {
    lp_address?: string;
    pagination?: PageRequestAmino;
}
export interface LiquidityProviderDataReqAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProviderDataReq";
    value: LiquidityProviderDataReqAmino;
}
export interface LiquidityProviderDataReqSDKType {
    lp_address: string;
    pagination?: PageRequestSDKType;
}
export interface LiquidityProviderDataRes {
    liquidityProviderData: LiquidityProviderData[];
    height: bigint;
    pagination?: PageRequest;
}
export interface LiquidityProviderDataResProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProviderDataRes";
    value: Uint8Array;
}
export interface LiquidityProviderDataResAmino {
    liquidity_provider_data?: LiquidityProviderDataAmino[];
    height?: string;
    pagination?: PageRequestAmino;
}
export interface LiquidityProviderDataResAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProviderDataRes";
    value: LiquidityProviderDataResAmino;
}
export interface LiquidityProviderDataResSDKType {
    liquidity_provider_data: LiquidityProviderDataSDKType[];
    height: bigint;
    pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListReq {
    symbol: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface LiquidityProviderListReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProviderListReq";
    value: Uint8Array;
}
export interface LiquidityProviderListReqAmino {
    symbol?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface LiquidityProviderListReqAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProviderListReq";
    value: LiquidityProviderListReqAmino;
}
export interface LiquidityProviderListReqSDKType {
    symbol: string;
    pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListRes {
    liquidityProviders: LiquidityProvider[];
    height: bigint;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface LiquidityProviderListResProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProviderListRes";
    value: Uint8Array;
}
export interface LiquidityProviderListResAmino {
    liquidity_providers?: LiquidityProviderAmino[];
    height?: string;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface LiquidityProviderListResAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProviderListRes";
    value: LiquidityProviderListResAmino;
}
export interface LiquidityProviderListResSDKType {
    liquidity_providers: LiquidityProviderSDKType[];
    height: bigint;
    pagination?: PageResponseSDKType;
}
export interface LiquidityProvidersReq {
    pagination?: PageRequest;
}
export interface LiquidityProvidersReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProvidersReq";
    value: Uint8Array;
}
export interface LiquidityProvidersReqAmino {
    pagination?: PageRequestAmino;
}
export interface LiquidityProvidersReqAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProvidersReq";
    value: LiquidityProvidersReqAmino;
}
export interface LiquidityProvidersReqSDKType {
    pagination?: PageRequestSDKType;
}
export interface LiquidityProvidersRes {
    liquidityProviders: LiquidityProvider[];
    height: bigint;
    pagination?: PageResponse;
}
export interface LiquidityProvidersResProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProvidersRes";
    value: Uint8Array;
}
export interface LiquidityProvidersResAmino {
    liquidity_providers?: LiquidityProviderAmino[];
    height?: string;
    pagination?: PageResponseAmino;
}
export interface LiquidityProvidersResAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProvidersRes";
    value: LiquidityProvidersResAmino;
}
export interface LiquidityProvidersResSDKType {
    liquidity_providers: LiquidityProviderSDKType[];
    height: bigint;
    pagination?: PageResponseSDKType;
}
export interface ParamsReq {
}
export interface ParamsReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.ParamsReq";
    value: Uint8Array;
}
export interface ParamsReqAmino {
}
export interface ParamsReqAminoMsg {
    type: "/sifnode.clp.v1.ParamsReq";
    value: ParamsReqAmino;
}
export interface ParamsReqSDKType {
}
export interface ParamsRes {
    params?: Params;
    symmetryThreshold: string;
    symmetryRatioThreshold: string;
}
export interface ParamsResProtoMsg {
    typeUrl: "/sifnode.clp.v1.ParamsRes";
    value: Uint8Array;
}
export interface ParamsResAmino {
    params?: ParamsAmino;
    symmetry_threshold?: string;
    symmetry_ratio_threshold?: string;
}
export interface ParamsResAminoMsg {
    type: "/sifnode.clp.v1.ParamsRes";
    value: ParamsResAmino;
}
export interface ParamsResSDKType {
    params?: ParamsSDKType;
    symmetry_threshold: string;
    symmetry_ratio_threshold: string;
}
export interface RewardParamsReq {
}
export interface RewardParamsReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.RewardParamsReq";
    value: Uint8Array;
}
export interface RewardParamsReqAmino {
}
export interface RewardParamsReqAminoMsg {
    type: "/sifnode.clp.v1.RewardParamsReq";
    value: RewardParamsReqAmino;
}
export interface RewardParamsReqSDKType {
}
export interface RewardParamsRes {
    params?: RewardParams;
}
export interface RewardParamsResProtoMsg {
    typeUrl: "/sifnode.clp.v1.RewardParamsRes";
    value: Uint8Array;
}
export interface RewardParamsResAmino {
    params?: RewardParamsAmino;
}
export interface RewardParamsResAminoMsg {
    type: "/sifnode.clp.v1.RewardParamsRes";
    value: RewardParamsResAmino;
}
export interface RewardParamsResSDKType {
    params?: RewardParamsSDKType;
}
export interface PmtpParamsReq {
}
export interface PmtpParamsReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.PmtpParamsReq";
    value: Uint8Array;
}
export interface PmtpParamsReqAmino {
}
export interface PmtpParamsReqAminoMsg {
    type: "/sifnode.clp.v1.PmtpParamsReq";
    value: PmtpParamsReqAmino;
}
export interface PmtpParamsReqSDKType {
}
export interface PmtpParamsRes {
    params?: PmtpParams;
    pmtpRateParams?: PmtpRateParams;
    pmtpEpoch?: PmtpEpoch;
    height: bigint;
}
export interface PmtpParamsResProtoMsg {
    typeUrl: "/sifnode.clp.v1.PmtpParamsRes";
    value: Uint8Array;
}
export interface PmtpParamsResAmino {
    params?: PmtpParamsAmino;
    pmtp_rate_params?: PmtpRateParamsAmino;
    pmtp_epoch?: PmtpEpochAmino;
    height?: string;
}
export interface PmtpParamsResAminoMsg {
    type: "/sifnode.clp.v1.PmtpParamsRes";
    value: PmtpParamsResAmino;
}
export interface PmtpParamsResSDKType {
    params?: PmtpParamsSDKType;
    pmtp_rate_params?: PmtpRateParamsSDKType;
    pmtp_epoch?: PmtpEpochSDKType;
    height: bigint;
}
export interface LiquidityProtectionParamsReq {
}
export interface LiquidityProtectionParamsReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsReq";
    value: Uint8Array;
}
export interface LiquidityProtectionParamsReqAmino {
}
export interface LiquidityProtectionParamsReqAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProtectionParamsReq";
    value: LiquidityProtectionParamsReqAmino;
}
export interface LiquidityProtectionParamsReqSDKType {
}
export interface LiquidityProtectionParamsRes {
    params?: LiquidityProtectionParams;
    rateParams?: LiquidityProtectionRateParams;
    height: bigint;
}
export interface LiquidityProtectionParamsResProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsRes";
    value: Uint8Array;
}
export interface LiquidityProtectionParamsResAmino {
    params?: LiquidityProtectionParamsAmino;
    rate_params?: LiquidityProtectionRateParamsAmino;
    height?: string;
}
export interface LiquidityProtectionParamsResAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProtectionParamsRes";
    value: LiquidityProtectionParamsResAmino;
}
export interface LiquidityProtectionParamsResSDKType {
    params?: LiquidityProtectionParamsSDKType;
    rate_params?: LiquidityProtectionRateParamsSDKType;
    height: bigint;
}
export interface ProviderDistributionParamsReq {
}
export interface ProviderDistributionParamsReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsReq";
    value: Uint8Array;
}
export interface ProviderDistributionParamsReqAmino {
}
export interface ProviderDistributionParamsReqAminoMsg {
    type: "/sifnode.clp.v1.ProviderDistributionParamsReq";
    value: ProviderDistributionParamsReqAmino;
}
export interface ProviderDistributionParamsReqSDKType {
}
export interface ProviderDistributionParamsRes {
    params?: ProviderDistributionParams;
}
export interface ProviderDistributionParamsResProtoMsg {
    typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsRes";
    value: Uint8Array;
}
export interface ProviderDistributionParamsResAmino {
    params?: ProviderDistributionParamsAmino;
}
export interface ProviderDistributionParamsResAminoMsg {
    type: "/sifnode.clp.v1.ProviderDistributionParamsRes";
    value: ProviderDistributionParamsResAmino;
}
export interface ProviderDistributionParamsResSDKType {
    params?: ProviderDistributionParamsSDKType;
}
export interface SwapFeeParamsReq {
}
export interface SwapFeeParamsReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.SwapFeeParamsReq";
    value: Uint8Array;
}
export interface SwapFeeParamsReqAmino {
}
export interface SwapFeeParamsReqAminoMsg {
    type: "/sifnode.clp.v1.SwapFeeParamsReq";
    value: SwapFeeParamsReqAmino;
}
export interface SwapFeeParamsReqSDKType {
}
export interface SwapFeeParamsRes {
    defaultSwapFeeRate: string;
    tokenParams: SwapFeeTokenParams[];
}
export interface SwapFeeParamsResProtoMsg {
    typeUrl: "/sifnode.clp.v1.SwapFeeParamsRes";
    value: Uint8Array;
}
export interface SwapFeeParamsResAmino {
    default_swap_fee_rate?: string;
    token_params?: SwapFeeTokenParamsAmino[];
}
export interface SwapFeeParamsResAminoMsg {
    type: "/sifnode.clp.v1.SwapFeeParamsRes";
    value: SwapFeeParamsResAmino;
}
export interface SwapFeeParamsResSDKType {
    default_swap_fee_rate: string;
    token_params: SwapFeeTokenParamsSDKType[];
}
export interface PoolShareEstimateReq {
    externalAsset?: Asset;
    nativeAssetAmount: string;
    externalAssetAmount: string;
}
export interface PoolShareEstimateReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.PoolShareEstimateReq";
    value: Uint8Array;
}
export interface PoolShareEstimateReqAmino {
    external_asset?: AssetAmino;
    native_asset_amount?: string;
    external_asset_amount?: string;
}
export interface PoolShareEstimateReqAminoMsg {
    type: "/sifnode.clp.v1.PoolShareEstimateReq";
    value: PoolShareEstimateReqAmino;
}
export interface PoolShareEstimateReqSDKType {
    external_asset?: AssetSDKType;
    native_asset_amount: string;
    external_asset_amount: string;
}
export interface PoolShareEstimateRes {
    percentage: string;
    nativeAssetAmount: string;
    externalAssetAmount: string;
    swapInfo: SwapInfo;
}
export interface PoolShareEstimateResProtoMsg {
    typeUrl: "/sifnode.clp.v1.PoolShareEstimateRes";
    value: Uint8Array;
}
export interface PoolShareEstimateResAmino {
    percentage?: string;
    native_asset_amount?: string;
    external_asset_amount?: string;
    swap_info?: SwapInfoAmino;
}
export interface PoolShareEstimateResAminoMsg {
    type: "/sifnode.clp.v1.PoolShareEstimateRes";
    value: PoolShareEstimateResAmino;
}
export interface PoolShareEstimateResSDKType {
    percentage: string;
    native_asset_amount: string;
    external_asset_amount: string;
    swap_info: SwapInfoSDKType;
}
export interface SwapInfo {
    status: SwapStatus;
    fee: string;
    feeRate: string;
    amount: string;
    result: string;
}
export interface SwapInfoProtoMsg {
    typeUrl: "/sifnode.clp.v1.SwapInfo";
    value: Uint8Array;
}
export interface SwapInfoAmino {
    status?: SwapStatus;
    fee?: string;
    fee_rate?: string;
    amount?: string;
    result?: string;
}
export interface SwapInfoAminoMsg {
    type: "/sifnode.clp.v1.SwapInfo";
    value: SwapInfoAmino;
}
export interface SwapInfoSDKType {
    status: SwapStatus;
    fee: string;
    fee_rate: string;
    amount: string;
    result: string;
}
export interface RewardsBucketReq {
    denom: string;
}
export interface RewardsBucketReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.RewardsBucketReq";
    value: Uint8Array;
}
export interface RewardsBucketReqAmino {
    denom?: string;
}
export interface RewardsBucketReqAminoMsg {
    type: "/sifnode.clp.v1.RewardsBucketReq";
    value: RewardsBucketReqAmino;
}
export interface RewardsBucketReqSDKType {
    denom: string;
}
export interface RewardsBucketRes {
    rewardsBucket: RewardsBucket;
}
export interface RewardsBucketResProtoMsg {
    typeUrl: "/sifnode.clp.v1.RewardsBucketRes";
    value: Uint8Array;
}
export interface RewardsBucketResAmino {
    rewards_bucket?: RewardsBucketAmino;
}
export interface RewardsBucketResAminoMsg {
    type: "/sifnode.clp.v1.RewardsBucketRes";
    value: RewardsBucketResAmino;
}
export interface RewardsBucketResSDKType {
    rewards_bucket: RewardsBucketSDKType;
}
export interface AllRewardsBucketReq {
    pagination?: PageRequest;
}
export interface AllRewardsBucketReqProtoMsg {
    typeUrl: "/sifnode.clp.v1.AllRewardsBucketReq";
    value: Uint8Array;
}
export interface AllRewardsBucketReqAmino {
    pagination?: PageRequestAmino;
}
export interface AllRewardsBucketReqAminoMsg {
    type: "/sifnode.clp.v1.AllRewardsBucketReq";
    value: AllRewardsBucketReqAmino;
}
export interface AllRewardsBucketReqSDKType {
    pagination?: PageRequestSDKType;
}
export interface AllRewardsBucketRes {
    rewardsBucket: RewardsBucket[];
    pagination?: PageResponse;
}
export interface AllRewardsBucketResProtoMsg {
    typeUrl: "/sifnode.clp.v1.AllRewardsBucketRes";
    value: Uint8Array;
}
export interface AllRewardsBucketResAmino {
    rewards_bucket?: RewardsBucketAmino[];
    pagination?: PageResponseAmino;
}
export interface AllRewardsBucketResAminoMsg {
    type: "/sifnode.clp.v1.AllRewardsBucketRes";
    value: AllRewardsBucketResAmino;
}
export interface AllRewardsBucketResSDKType {
    rewards_bucket: RewardsBucketSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const PoolReq: {
    typeUrl: string;
    encode(message: PoolReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolReq;
    fromPartial(object: Partial<PoolReq>): PoolReq;
    fromAmino(object: PoolReqAmino): PoolReq;
    toAmino(message: PoolReq): PoolReqAmino;
    fromAminoMsg(object: PoolReqAminoMsg): PoolReq;
    fromProtoMsg(message: PoolReqProtoMsg): PoolReq;
    toProto(message: PoolReq): Uint8Array;
    toProtoMsg(message: PoolReq): PoolReqProtoMsg;
};
export declare const PoolRes: {
    typeUrl: string;
    encode(message: PoolRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolRes;
    fromPartial(object: Partial<PoolRes>): PoolRes;
    fromAmino(object: PoolResAmino): PoolRes;
    toAmino(message: PoolRes): PoolResAmino;
    fromAminoMsg(object: PoolResAminoMsg): PoolRes;
    fromProtoMsg(message: PoolResProtoMsg): PoolRes;
    toProto(message: PoolRes): Uint8Array;
    toProtoMsg(message: PoolRes): PoolResProtoMsg;
};
export declare const PoolsReq: {
    typeUrl: string;
    encode(message: PoolsReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolsReq;
    fromPartial(object: Partial<PoolsReq>): PoolsReq;
    fromAmino(object: PoolsReqAmino): PoolsReq;
    toAmino(message: PoolsReq): PoolsReqAmino;
    fromAminoMsg(object: PoolsReqAminoMsg): PoolsReq;
    fromProtoMsg(message: PoolsReqProtoMsg): PoolsReq;
    toProto(message: PoolsReq): Uint8Array;
    toProtoMsg(message: PoolsReq): PoolsReqProtoMsg;
};
export declare const PoolsRes: {
    typeUrl: string;
    encode(message: PoolsRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolsRes;
    fromPartial(object: Partial<PoolsRes>): PoolsRes;
    fromAmino(object: PoolsResAmino): PoolsRes;
    toAmino(message: PoolsRes): PoolsResAmino;
    fromAminoMsg(object: PoolsResAminoMsg): PoolsRes;
    fromProtoMsg(message: PoolsResProtoMsg): PoolsRes;
    toProto(message: PoolsRes): Uint8Array;
    toProtoMsg(message: PoolsRes): PoolsResProtoMsg;
};
export declare const LiquidityProviderReq: {
    typeUrl: string;
    encode(message: LiquidityProviderReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderReq;
    fromPartial(object: Partial<LiquidityProviderReq>): LiquidityProviderReq;
    fromAmino(object: LiquidityProviderReqAmino): LiquidityProviderReq;
    toAmino(message: LiquidityProviderReq): LiquidityProviderReqAmino;
    fromAminoMsg(object: LiquidityProviderReqAminoMsg): LiquidityProviderReq;
    fromProtoMsg(message: LiquidityProviderReqProtoMsg): LiquidityProviderReq;
    toProto(message: LiquidityProviderReq): Uint8Array;
    toProtoMsg(message: LiquidityProviderReq): LiquidityProviderReqProtoMsg;
};
export declare const LiquidityProviderRes: {
    typeUrl: string;
    encode(message: LiquidityProviderRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderRes;
    fromPartial(object: Partial<LiquidityProviderRes>): LiquidityProviderRes;
    fromAmino(object: LiquidityProviderResAmino): LiquidityProviderRes;
    toAmino(message: LiquidityProviderRes): LiquidityProviderResAmino;
    fromAminoMsg(object: LiquidityProviderResAminoMsg): LiquidityProviderRes;
    fromProtoMsg(message: LiquidityProviderResProtoMsg): LiquidityProviderRes;
    toProto(message: LiquidityProviderRes): Uint8Array;
    toProtoMsg(message: LiquidityProviderRes): LiquidityProviderResProtoMsg;
};
export declare const AssetListReq: {
    typeUrl: string;
    encode(message: AssetListReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetListReq;
    fromPartial(object: Partial<AssetListReq>): AssetListReq;
    fromAmino(object: AssetListReqAmino): AssetListReq;
    toAmino(message: AssetListReq): AssetListReqAmino;
    fromAminoMsg(object: AssetListReqAminoMsg): AssetListReq;
    fromProtoMsg(message: AssetListReqProtoMsg): AssetListReq;
    toProto(message: AssetListReq): Uint8Array;
    toProtoMsg(message: AssetListReq): AssetListReqProtoMsg;
};
export declare const AssetListRes: {
    typeUrl: string;
    encode(message: AssetListRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetListRes;
    fromPartial(object: Partial<AssetListRes>): AssetListRes;
    fromAmino(object: AssetListResAmino): AssetListRes;
    toAmino(message: AssetListRes): AssetListResAmino;
    fromAminoMsg(object: AssetListResAminoMsg): AssetListRes;
    fromProtoMsg(message: AssetListResProtoMsg): AssetListRes;
    toProto(message: AssetListRes): Uint8Array;
    toProtoMsg(message: AssetListRes): AssetListResProtoMsg;
};
export declare const LiquidityProviderDataReq: {
    typeUrl: string;
    encode(message: LiquidityProviderDataReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderDataReq;
    fromPartial(object: Partial<LiquidityProviderDataReq>): LiquidityProviderDataReq;
    fromAmino(object: LiquidityProviderDataReqAmino): LiquidityProviderDataReq;
    toAmino(message: LiquidityProviderDataReq): LiquidityProviderDataReqAmino;
    fromAminoMsg(object: LiquidityProviderDataReqAminoMsg): LiquidityProviderDataReq;
    fromProtoMsg(message: LiquidityProviderDataReqProtoMsg): LiquidityProviderDataReq;
    toProto(message: LiquidityProviderDataReq): Uint8Array;
    toProtoMsg(message: LiquidityProviderDataReq): LiquidityProviderDataReqProtoMsg;
};
export declare const LiquidityProviderDataRes: {
    typeUrl: string;
    encode(message: LiquidityProviderDataRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderDataRes;
    fromPartial(object: Partial<LiquidityProviderDataRes>): LiquidityProviderDataRes;
    fromAmino(object: LiquidityProviderDataResAmino): LiquidityProviderDataRes;
    toAmino(message: LiquidityProviderDataRes): LiquidityProviderDataResAmino;
    fromAminoMsg(object: LiquidityProviderDataResAminoMsg): LiquidityProviderDataRes;
    fromProtoMsg(message: LiquidityProviderDataResProtoMsg): LiquidityProviderDataRes;
    toProto(message: LiquidityProviderDataRes): Uint8Array;
    toProtoMsg(message: LiquidityProviderDataRes): LiquidityProviderDataResProtoMsg;
};
export declare const LiquidityProviderListReq: {
    typeUrl: string;
    encode(message: LiquidityProviderListReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderListReq;
    fromPartial(object: Partial<LiquidityProviderListReq>): LiquidityProviderListReq;
    fromAmino(object: LiquidityProviderListReqAmino): LiquidityProviderListReq;
    toAmino(message: LiquidityProviderListReq): LiquidityProviderListReqAmino;
    fromAminoMsg(object: LiquidityProviderListReqAminoMsg): LiquidityProviderListReq;
    fromProtoMsg(message: LiquidityProviderListReqProtoMsg): LiquidityProviderListReq;
    toProto(message: LiquidityProviderListReq): Uint8Array;
    toProtoMsg(message: LiquidityProviderListReq): LiquidityProviderListReqProtoMsg;
};
export declare const LiquidityProviderListRes: {
    typeUrl: string;
    encode(message: LiquidityProviderListRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderListRes;
    fromPartial(object: Partial<LiquidityProviderListRes>): LiquidityProviderListRes;
    fromAmino(object: LiquidityProviderListResAmino): LiquidityProviderListRes;
    toAmino(message: LiquidityProviderListRes): LiquidityProviderListResAmino;
    fromAminoMsg(object: LiquidityProviderListResAminoMsg): LiquidityProviderListRes;
    fromProtoMsg(message: LiquidityProviderListResProtoMsg): LiquidityProviderListRes;
    toProto(message: LiquidityProviderListRes): Uint8Array;
    toProtoMsg(message: LiquidityProviderListRes): LiquidityProviderListResProtoMsg;
};
export declare const LiquidityProvidersReq: {
    typeUrl: string;
    encode(message: LiquidityProvidersReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProvidersReq;
    fromPartial(object: Partial<LiquidityProvidersReq>): LiquidityProvidersReq;
    fromAmino(object: LiquidityProvidersReqAmino): LiquidityProvidersReq;
    toAmino(message: LiquidityProvidersReq): LiquidityProvidersReqAmino;
    fromAminoMsg(object: LiquidityProvidersReqAminoMsg): LiquidityProvidersReq;
    fromProtoMsg(message: LiquidityProvidersReqProtoMsg): LiquidityProvidersReq;
    toProto(message: LiquidityProvidersReq): Uint8Array;
    toProtoMsg(message: LiquidityProvidersReq): LiquidityProvidersReqProtoMsg;
};
export declare const LiquidityProvidersRes: {
    typeUrl: string;
    encode(message: LiquidityProvidersRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProvidersRes;
    fromPartial(object: Partial<LiquidityProvidersRes>): LiquidityProvidersRes;
    fromAmino(object: LiquidityProvidersResAmino): LiquidityProvidersRes;
    toAmino(message: LiquidityProvidersRes): LiquidityProvidersResAmino;
    fromAminoMsg(object: LiquidityProvidersResAminoMsg): LiquidityProvidersRes;
    fromProtoMsg(message: LiquidityProvidersResProtoMsg): LiquidityProvidersRes;
    toProto(message: LiquidityProvidersRes): Uint8Array;
    toProtoMsg(message: LiquidityProvidersRes): LiquidityProvidersResProtoMsg;
};
export declare const ParamsReq: {
    typeUrl: string;
    encode(_: ParamsReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ParamsReq;
    fromPartial(_: Partial<ParamsReq>): ParamsReq;
    fromAmino(_: ParamsReqAmino): ParamsReq;
    toAmino(_: ParamsReq): ParamsReqAmino;
    fromAminoMsg(object: ParamsReqAminoMsg): ParamsReq;
    fromProtoMsg(message: ParamsReqProtoMsg): ParamsReq;
    toProto(message: ParamsReq): Uint8Array;
    toProtoMsg(message: ParamsReq): ParamsReqProtoMsg;
};
export declare const ParamsRes: {
    typeUrl: string;
    encode(message: ParamsRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsRes;
    fromPartial(object: Partial<ParamsRes>): ParamsRes;
    fromAmino(object: ParamsResAmino): ParamsRes;
    toAmino(message: ParamsRes): ParamsResAmino;
    fromAminoMsg(object: ParamsResAminoMsg): ParamsRes;
    fromProtoMsg(message: ParamsResProtoMsg): ParamsRes;
    toProto(message: ParamsRes): Uint8Array;
    toProtoMsg(message: ParamsRes): ParamsResProtoMsg;
};
export declare const RewardParamsReq: {
    typeUrl: string;
    encode(_: RewardParamsReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RewardParamsReq;
    fromPartial(_: Partial<RewardParamsReq>): RewardParamsReq;
    fromAmino(_: RewardParamsReqAmino): RewardParamsReq;
    toAmino(_: RewardParamsReq): RewardParamsReqAmino;
    fromAminoMsg(object: RewardParamsReqAminoMsg): RewardParamsReq;
    fromProtoMsg(message: RewardParamsReqProtoMsg): RewardParamsReq;
    toProto(message: RewardParamsReq): Uint8Array;
    toProtoMsg(message: RewardParamsReq): RewardParamsReqProtoMsg;
};
export declare const RewardParamsRes: {
    typeUrl: string;
    encode(message: RewardParamsRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardParamsRes;
    fromPartial(object: Partial<RewardParamsRes>): RewardParamsRes;
    fromAmino(object: RewardParamsResAmino): RewardParamsRes;
    toAmino(message: RewardParamsRes): RewardParamsResAmino;
    fromAminoMsg(object: RewardParamsResAminoMsg): RewardParamsRes;
    fromProtoMsg(message: RewardParamsResProtoMsg): RewardParamsRes;
    toProto(message: RewardParamsRes): Uint8Array;
    toProtoMsg(message: RewardParamsRes): RewardParamsResProtoMsg;
};
export declare const PmtpParamsReq: {
    typeUrl: string;
    encode(_: PmtpParamsReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): PmtpParamsReq;
    fromPartial(_: Partial<PmtpParamsReq>): PmtpParamsReq;
    fromAmino(_: PmtpParamsReqAmino): PmtpParamsReq;
    toAmino(_: PmtpParamsReq): PmtpParamsReqAmino;
    fromAminoMsg(object: PmtpParamsReqAminoMsg): PmtpParamsReq;
    fromProtoMsg(message: PmtpParamsReqProtoMsg): PmtpParamsReq;
    toProto(message: PmtpParamsReq): Uint8Array;
    toProtoMsg(message: PmtpParamsReq): PmtpParamsReqProtoMsg;
};
export declare const PmtpParamsRes: {
    typeUrl: string;
    encode(message: PmtpParamsRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PmtpParamsRes;
    fromPartial(object: Partial<PmtpParamsRes>): PmtpParamsRes;
    fromAmino(object: PmtpParamsResAmino): PmtpParamsRes;
    toAmino(message: PmtpParamsRes): PmtpParamsResAmino;
    fromAminoMsg(object: PmtpParamsResAminoMsg): PmtpParamsRes;
    fromProtoMsg(message: PmtpParamsResProtoMsg): PmtpParamsRes;
    toProto(message: PmtpParamsRes): Uint8Array;
    toProtoMsg(message: PmtpParamsRes): PmtpParamsResProtoMsg;
};
export declare const LiquidityProtectionParamsReq: {
    typeUrl: string;
    encode(_: LiquidityProtectionParamsReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): LiquidityProtectionParamsReq;
    fromPartial(_: Partial<LiquidityProtectionParamsReq>): LiquidityProtectionParamsReq;
    fromAmino(_: LiquidityProtectionParamsReqAmino): LiquidityProtectionParamsReq;
    toAmino(_: LiquidityProtectionParamsReq): LiquidityProtectionParamsReqAmino;
    fromAminoMsg(object: LiquidityProtectionParamsReqAminoMsg): LiquidityProtectionParamsReq;
    fromProtoMsg(message: LiquidityProtectionParamsReqProtoMsg): LiquidityProtectionParamsReq;
    toProto(message: LiquidityProtectionParamsReq): Uint8Array;
    toProtoMsg(message: LiquidityProtectionParamsReq): LiquidityProtectionParamsReqProtoMsg;
};
export declare const LiquidityProtectionParamsRes: {
    typeUrl: string;
    encode(message: LiquidityProtectionParamsRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProtectionParamsRes;
    fromPartial(object: Partial<LiquidityProtectionParamsRes>): LiquidityProtectionParamsRes;
    fromAmino(object: LiquidityProtectionParamsResAmino): LiquidityProtectionParamsRes;
    toAmino(message: LiquidityProtectionParamsRes): LiquidityProtectionParamsResAmino;
    fromAminoMsg(object: LiquidityProtectionParamsResAminoMsg): LiquidityProtectionParamsRes;
    fromProtoMsg(message: LiquidityProtectionParamsResProtoMsg): LiquidityProtectionParamsRes;
    toProto(message: LiquidityProtectionParamsRes): Uint8Array;
    toProtoMsg(message: LiquidityProtectionParamsRes): LiquidityProtectionParamsResProtoMsg;
};
export declare const ProviderDistributionParamsReq: {
    typeUrl: string;
    encode(_: ProviderDistributionParamsReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ProviderDistributionParamsReq;
    fromPartial(_: Partial<ProviderDistributionParamsReq>): ProviderDistributionParamsReq;
    fromAmino(_: ProviderDistributionParamsReqAmino): ProviderDistributionParamsReq;
    toAmino(_: ProviderDistributionParamsReq): ProviderDistributionParamsReqAmino;
    fromAminoMsg(object: ProviderDistributionParamsReqAminoMsg): ProviderDistributionParamsReq;
    fromProtoMsg(message: ProviderDistributionParamsReqProtoMsg): ProviderDistributionParamsReq;
    toProto(message: ProviderDistributionParamsReq): Uint8Array;
    toProtoMsg(message: ProviderDistributionParamsReq): ProviderDistributionParamsReqProtoMsg;
};
export declare const ProviderDistributionParamsRes: {
    typeUrl: string;
    encode(message: ProviderDistributionParamsRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderDistributionParamsRes;
    fromPartial(object: Partial<ProviderDistributionParamsRes>): ProviderDistributionParamsRes;
    fromAmino(object: ProviderDistributionParamsResAmino): ProviderDistributionParamsRes;
    toAmino(message: ProviderDistributionParamsRes): ProviderDistributionParamsResAmino;
    fromAminoMsg(object: ProviderDistributionParamsResAminoMsg): ProviderDistributionParamsRes;
    fromProtoMsg(message: ProviderDistributionParamsResProtoMsg): ProviderDistributionParamsRes;
    toProto(message: ProviderDistributionParamsRes): Uint8Array;
    toProtoMsg(message: ProviderDistributionParamsRes): ProviderDistributionParamsResProtoMsg;
};
export declare const SwapFeeParamsReq: {
    typeUrl: string;
    encode(_: SwapFeeParamsReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SwapFeeParamsReq;
    fromPartial(_: Partial<SwapFeeParamsReq>): SwapFeeParamsReq;
    fromAmino(_: SwapFeeParamsReqAmino): SwapFeeParamsReq;
    toAmino(_: SwapFeeParamsReq): SwapFeeParamsReqAmino;
    fromAminoMsg(object: SwapFeeParamsReqAminoMsg): SwapFeeParamsReq;
    fromProtoMsg(message: SwapFeeParamsReqProtoMsg): SwapFeeParamsReq;
    toProto(message: SwapFeeParamsReq): Uint8Array;
    toProtoMsg(message: SwapFeeParamsReq): SwapFeeParamsReqProtoMsg;
};
export declare const SwapFeeParamsRes: {
    typeUrl: string;
    encode(message: SwapFeeParamsRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SwapFeeParamsRes;
    fromPartial(object: Partial<SwapFeeParamsRes>): SwapFeeParamsRes;
    fromAmino(object: SwapFeeParamsResAmino): SwapFeeParamsRes;
    toAmino(message: SwapFeeParamsRes): SwapFeeParamsResAmino;
    fromAminoMsg(object: SwapFeeParamsResAminoMsg): SwapFeeParamsRes;
    fromProtoMsg(message: SwapFeeParamsResProtoMsg): SwapFeeParamsRes;
    toProto(message: SwapFeeParamsRes): Uint8Array;
    toProtoMsg(message: SwapFeeParamsRes): SwapFeeParamsResProtoMsg;
};
export declare const PoolShareEstimateReq: {
    typeUrl: string;
    encode(message: PoolShareEstimateReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolShareEstimateReq;
    fromPartial(object: Partial<PoolShareEstimateReq>): PoolShareEstimateReq;
    fromAmino(object: PoolShareEstimateReqAmino): PoolShareEstimateReq;
    toAmino(message: PoolShareEstimateReq): PoolShareEstimateReqAmino;
    fromAminoMsg(object: PoolShareEstimateReqAminoMsg): PoolShareEstimateReq;
    fromProtoMsg(message: PoolShareEstimateReqProtoMsg): PoolShareEstimateReq;
    toProto(message: PoolShareEstimateReq): Uint8Array;
    toProtoMsg(message: PoolShareEstimateReq): PoolShareEstimateReqProtoMsg;
};
export declare const PoolShareEstimateRes: {
    typeUrl: string;
    encode(message: PoolShareEstimateRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolShareEstimateRes;
    fromPartial(object: Partial<PoolShareEstimateRes>): PoolShareEstimateRes;
    fromAmino(object: PoolShareEstimateResAmino): PoolShareEstimateRes;
    toAmino(message: PoolShareEstimateRes): PoolShareEstimateResAmino;
    fromAminoMsg(object: PoolShareEstimateResAminoMsg): PoolShareEstimateRes;
    fromProtoMsg(message: PoolShareEstimateResProtoMsg): PoolShareEstimateRes;
    toProto(message: PoolShareEstimateRes): Uint8Array;
    toProtoMsg(message: PoolShareEstimateRes): PoolShareEstimateResProtoMsg;
};
export declare const SwapInfo: {
    typeUrl: string;
    encode(message: SwapInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SwapInfo;
    fromPartial(object: Partial<SwapInfo>): SwapInfo;
    fromAmino(object: SwapInfoAmino): SwapInfo;
    toAmino(message: SwapInfo): SwapInfoAmino;
    fromAminoMsg(object: SwapInfoAminoMsg): SwapInfo;
    fromProtoMsg(message: SwapInfoProtoMsg): SwapInfo;
    toProto(message: SwapInfo): Uint8Array;
    toProtoMsg(message: SwapInfo): SwapInfoProtoMsg;
};
export declare const RewardsBucketReq: {
    typeUrl: string;
    encode(message: RewardsBucketReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardsBucketReq;
    fromPartial(object: Partial<RewardsBucketReq>): RewardsBucketReq;
    fromAmino(object: RewardsBucketReqAmino): RewardsBucketReq;
    toAmino(message: RewardsBucketReq): RewardsBucketReqAmino;
    fromAminoMsg(object: RewardsBucketReqAminoMsg): RewardsBucketReq;
    fromProtoMsg(message: RewardsBucketReqProtoMsg): RewardsBucketReq;
    toProto(message: RewardsBucketReq): Uint8Array;
    toProtoMsg(message: RewardsBucketReq): RewardsBucketReqProtoMsg;
};
export declare const RewardsBucketRes: {
    typeUrl: string;
    encode(message: RewardsBucketRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardsBucketRes;
    fromPartial(object: Partial<RewardsBucketRes>): RewardsBucketRes;
    fromAmino(object: RewardsBucketResAmino): RewardsBucketRes;
    toAmino(message: RewardsBucketRes): RewardsBucketResAmino;
    fromAminoMsg(object: RewardsBucketResAminoMsg): RewardsBucketRes;
    fromProtoMsg(message: RewardsBucketResProtoMsg): RewardsBucketRes;
    toProto(message: RewardsBucketRes): Uint8Array;
    toProtoMsg(message: RewardsBucketRes): RewardsBucketResProtoMsg;
};
export declare const AllRewardsBucketReq: {
    typeUrl: string;
    encode(message: AllRewardsBucketReq, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllRewardsBucketReq;
    fromPartial(object: Partial<AllRewardsBucketReq>): AllRewardsBucketReq;
    fromAmino(object: AllRewardsBucketReqAmino): AllRewardsBucketReq;
    toAmino(message: AllRewardsBucketReq): AllRewardsBucketReqAmino;
    fromAminoMsg(object: AllRewardsBucketReqAminoMsg): AllRewardsBucketReq;
    fromProtoMsg(message: AllRewardsBucketReqProtoMsg): AllRewardsBucketReq;
    toProto(message: AllRewardsBucketReq): Uint8Array;
    toProtoMsg(message: AllRewardsBucketReq): AllRewardsBucketReqProtoMsg;
};
export declare const AllRewardsBucketRes: {
    typeUrl: string;
    encode(message: AllRewardsBucketRes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllRewardsBucketRes;
    fromPartial(object: Partial<AllRewardsBucketRes>): AllRewardsBucketRes;
    fromAmino(object: AllRewardsBucketResAmino): AllRewardsBucketRes;
    toAmino(message: AllRewardsBucketRes): AllRewardsBucketResAmino;
    fromAminoMsg(object: AllRewardsBucketResAminoMsg): AllRewardsBucketRes;
    fromProtoMsg(message: AllRewardsBucketResProtoMsg): AllRewardsBucketRes;
    toProto(message: AllRewardsBucketRes): Uint8Array;
    toProtoMsg(message: AllRewardsBucketRes): AllRewardsBucketResProtoMsg;
};
