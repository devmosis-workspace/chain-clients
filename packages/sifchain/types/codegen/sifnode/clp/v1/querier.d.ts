import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset, AssetSDKType, Pool, PoolSDKType, LiquidityProvider, LiquidityProviderSDKType, LiquidityProviderData, LiquidityProviderDataSDKType, PmtpEpoch, PmtpEpochSDKType } from "./types";
import { Params, ParamsSDKType, RewardParams, RewardParamsSDKType, PmtpParams, PmtpParamsSDKType, PmtpRateParams, PmtpRateParamsSDKType, LiquidityProtectionParams, LiquidityProtectionParamsSDKType, LiquidityProtectionRateParams, LiquidityProtectionRateParamsSDKType, ProviderDistributionParams, ProviderDistributionParamsSDKType, SwapFeeTokenParams, SwapFeeTokenParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum SwapStatus {
    UNSPECIFIED = 0,
    NO_SWAP = 1,
    SELL_NATIVE = 2,
    BUY_NATIVE = 3,
    UNRECOGNIZED = -1
}
export declare const SwapStatusSDKType: typeof SwapStatus;
export declare function swapStatusFromJSON(object: any): SwapStatus;
export declare function swapStatusToJSON(object: SwapStatus): string;
export interface PoolReq {
    symbol: string;
}
export interface PoolReqSDKType {
    symbol: string;
}
export interface PoolRes {
    pool?: Pool;
    clpModuleAddress: string;
    height: Long;
}
export interface PoolResSDKType {
    pool?: PoolSDKType;
    clp_module_address: string;
    height: Long;
}
export interface PoolsReq {
    pagination?: PageRequest;
}
export interface PoolsReqSDKType {
    pagination?: PageRequestSDKType;
}
export interface PoolsRes {
    pools: Pool[];
    clpModuleAddress: string;
    height: Long;
    pagination?: PageResponse;
}
export interface PoolsResSDKType {
    pools: PoolSDKType[];
    clp_module_address: string;
    height: Long;
    pagination?: PageResponseSDKType;
}
export interface LiquidityProviderReq {
    symbol: string;
    lpAddress: string;
}
export interface LiquidityProviderReqSDKType {
    symbol: string;
    lp_address: string;
}
export interface LiquidityProviderRes {
    liquidityProvider?: LiquidityProvider;
    nativeAssetBalance: string;
    externalAssetBalance: string;
    height: Long;
}
export interface LiquidityProviderResSDKType {
    liquidity_provider?: LiquidityProviderSDKType;
    native_asset_balance: string;
    external_asset_balance: string;
    height: Long;
}
export interface AssetListReq {
    lpAddress: string;
    pagination?: PageRequest;
}
export interface AssetListReqSDKType {
    lp_address: string;
    pagination?: PageRequestSDKType;
}
export interface AssetListRes {
    assets: Asset[];
    height: Long;
    pagination?: PageResponse;
}
export interface AssetListResSDKType {
    assets: AssetSDKType[];
    height: Long;
    pagination?: PageResponseSDKType;
}
export interface LiquidityProviderDataReq {
    lpAddress: string;
    pagination?: PageRequest;
}
export interface LiquidityProviderDataReqSDKType {
    lp_address: string;
    pagination?: PageRequestSDKType;
}
export interface LiquidityProviderDataRes {
    liquidityProviderData: LiquidityProviderData[];
    height: Long;
    pagination?: PageRequest;
}
export interface LiquidityProviderDataResSDKType {
    liquidity_provider_data: LiquidityProviderDataSDKType[];
    height: Long;
    pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListReq {
    symbol: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface LiquidityProviderListReqSDKType {
    symbol: string;
    pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListRes {
    liquidityProviders: LiquidityProvider[];
    height: Long;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface LiquidityProviderListResSDKType {
    liquidity_providers: LiquidityProviderSDKType[];
    height: Long;
    pagination?: PageResponseSDKType;
}
export interface LiquidityProvidersReq {
    pagination?: PageRequest;
}
export interface LiquidityProvidersReqSDKType {
    pagination?: PageRequestSDKType;
}
export interface LiquidityProvidersRes {
    liquidityProviders: LiquidityProvider[];
    height: Long;
    pagination?: PageResponse;
}
export interface LiquidityProvidersResSDKType {
    liquidity_providers: LiquidityProviderSDKType[];
    height: Long;
    pagination?: PageResponseSDKType;
}
export interface ParamsReq {
}
export interface ParamsReqSDKType {
}
export interface ParamsRes {
    params?: Params;
    symmetryThreshold: string;
    symmetryRatioThreshold: string;
}
export interface ParamsResSDKType {
    params?: ParamsSDKType;
    symmetry_threshold: string;
    symmetry_ratio_threshold: string;
}
export interface RewardParamsReq {
}
export interface RewardParamsReqSDKType {
}
export interface RewardParamsRes {
    params?: RewardParams;
}
export interface RewardParamsResSDKType {
    params?: RewardParamsSDKType;
}
export interface PmtpParamsReq {
}
export interface PmtpParamsReqSDKType {
}
export interface PmtpParamsRes {
    params?: PmtpParams;
    pmtpRateParams?: PmtpRateParams;
    pmtpEpoch?: PmtpEpoch;
    height: Long;
}
export interface PmtpParamsResSDKType {
    params?: PmtpParamsSDKType;
    pmtp_rate_params?: PmtpRateParamsSDKType;
    pmtp_epoch?: PmtpEpochSDKType;
    height: Long;
}
export interface LiquidityProtectionParamsReq {
}
export interface LiquidityProtectionParamsReqSDKType {
}
export interface LiquidityProtectionParamsRes {
    params?: LiquidityProtectionParams;
    rateParams?: LiquidityProtectionRateParams;
    height: Long;
}
export interface LiquidityProtectionParamsResSDKType {
    params?: LiquidityProtectionParamsSDKType;
    rate_params?: LiquidityProtectionRateParamsSDKType;
    height: Long;
}
export interface ProviderDistributionParamsReq {
}
export interface ProviderDistributionParamsReqSDKType {
}
export interface ProviderDistributionParamsRes {
    params?: ProviderDistributionParams;
}
export interface ProviderDistributionParamsResSDKType {
    params?: ProviderDistributionParamsSDKType;
}
export interface SwapFeeParamsReq {
}
export interface SwapFeeParamsReqSDKType {
}
export interface SwapFeeParamsRes {
    defaultSwapFeeRate: string;
    tokenParams: SwapFeeTokenParams[];
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
export interface PoolShareEstimateReqSDKType {
    external_asset?: AssetSDKType;
    native_asset_amount: string;
    external_asset_amount: string;
}
export interface PoolShareEstimateRes {
    percentage: string;
    nativeAssetAmount: string;
    externalAssetAmount: string;
    swapInfo?: SwapInfo;
}
export interface PoolShareEstimateResSDKType {
    percentage: string;
    native_asset_amount: string;
    external_asset_amount: string;
    swap_info?: SwapInfoSDKType;
}
export interface SwapInfo {
    status: SwapStatus;
    fee: string;
    feeRate: string;
    amount: string;
    result: string;
}
export interface SwapInfoSDKType {
    status: SwapStatus;
    fee: string;
    fee_rate: string;
    amount: string;
    result: string;
}
export declare const PoolReq: {
    encode(message: PoolReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolReq;
    fromPartial(object: Partial<PoolReq>): PoolReq;
};
export declare const PoolRes: {
    encode(message: PoolRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolRes;
    fromPartial(object: Partial<PoolRes>): PoolRes;
};
export declare const PoolsReq: {
    encode(message: PoolsReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolsReq;
    fromPartial(object: Partial<PoolsReq>): PoolsReq;
};
export declare const PoolsRes: {
    encode(message: PoolsRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolsRes;
    fromPartial(object: Partial<PoolsRes>): PoolsRes;
};
export declare const LiquidityProviderReq: {
    encode(message: LiquidityProviderReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderReq;
    fromPartial(object: Partial<LiquidityProviderReq>): LiquidityProviderReq;
};
export declare const LiquidityProviderRes: {
    encode(message: LiquidityProviderRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderRes;
    fromPartial(object: Partial<LiquidityProviderRes>): LiquidityProviderRes;
};
export declare const AssetListReq: {
    encode(message: AssetListReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetListReq;
    fromPartial(object: Partial<AssetListReq>): AssetListReq;
};
export declare const AssetListRes: {
    encode(message: AssetListRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetListRes;
    fromPartial(object: Partial<AssetListRes>): AssetListRes;
};
export declare const LiquidityProviderDataReq: {
    encode(message: LiquidityProviderDataReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderDataReq;
    fromPartial(object: Partial<LiquidityProviderDataReq>): LiquidityProviderDataReq;
};
export declare const LiquidityProviderDataRes: {
    encode(message: LiquidityProviderDataRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderDataRes;
    fromPartial(object: Partial<LiquidityProviderDataRes>): LiquidityProviderDataRes;
};
export declare const LiquidityProviderListReq: {
    encode(message: LiquidityProviderListReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderListReq;
    fromPartial(object: Partial<LiquidityProviderListReq>): LiquidityProviderListReq;
};
export declare const LiquidityProviderListRes: {
    encode(message: LiquidityProviderListRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderListRes;
    fromPartial(object: Partial<LiquidityProviderListRes>): LiquidityProviderListRes;
};
export declare const LiquidityProvidersReq: {
    encode(message: LiquidityProvidersReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProvidersReq;
    fromPartial(object: Partial<LiquidityProvidersReq>): LiquidityProvidersReq;
};
export declare const LiquidityProvidersRes: {
    encode(message: LiquidityProvidersRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProvidersRes;
    fromPartial(object: Partial<LiquidityProvidersRes>): LiquidityProvidersRes;
};
export declare const ParamsReq: {
    encode(_: ParamsReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ParamsReq;
    fromPartial(_: Partial<ParamsReq>): ParamsReq;
};
export declare const ParamsRes: {
    encode(message: ParamsRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParamsRes;
    fromPartial(object: Partial<ParamsRes>): ParamsRes;
};
export declare const RewardParamsReq: {
    encode(_: RewardParamsReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RewardParamsReq;
    fromPartial(_: Partial<RewardParamsReq>): RewardParamsReq;
};
export declare const RewardParamsRes: {
    encode(message: RewardParamsRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardParamsRes;
    fromPartial(object: Partial<RewardParamsRes>): RewardParamsRes;
};
export declare const PmtpParamsReq: {
    encode(_: PmtpParamsReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): PmtpParamsReq;
    fromPartial(_: Partial<PmtpParamsReq>): PmtpParamsReq;
};
export declare const PmtpParamsRes: {
    encode(message: PmtpParamsRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PmtpParamsRes;
    fromPartial(object: Partial<PmtpParamsRes>): PmtpParamsRes;
};
export declare const LiquidityProtectionParamsReq: {
    encode(_: LiquidityProtectionParamsReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): LiquidityProtectionParamsReq;
    fromPartial(_: Partial<LiquidityProtectionParamsReq>): LiquidityProtectionParamsReq;
};
export declare const LiquidityProtectionParamsRes: {
    encode(message: LiquidityProtectionParamsRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProtectionParamsRes;
    fromPartial(object: Partial<LiquidityProtectionParamsRes>): LiquidityProtectionParamsRes;
};
export declare const ProviderDistributionParamsReq: {
    encode(_: ProviderDistributionParamsReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ProviderDistributionParamsReq;
    fromPartial(_: Partial<ProviderDistributionParamsReq>): ProviderDistributionParamsReq;
};
export declare const ProviderDistributionParamsRes: {
    encode(message: ProviderDistributionParamsRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderDistributionParamsRes;
    fromPartial(object: Partial<ProviderDistributionParamsRes>): ProviderDistributionParamsRes;
};
export declare const SwapFeeParamsReq: {
    encode(_: SwapFeeParamsReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SwapFeeParamsReq;
    fromPartial(_: Partial<SwapFeeParamsReq>): SwapFeeParamsReq;
};
export declare const SwapFeeParamsRes: {
    encode(message: SwapFeeParamsRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapFeeParamsRes;
    fromPartial(object: Partial<SwapFeeParamsRes>): SwapFeeParamsRes;
};
export declare const PoolShareEstimateReq: {
    encode(message: PoolShareEstimateReq, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolShareEstimateReq;
    fromPartial(object: Partial<PoolShareEstimateReq>): PoolShareEstimateReq;
};
export declare const PoolShareEstimateRes: {
    encode(message: PoolShareEstimateRes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolShareEstimateRes;
    fromPartial(object: Partial<PoolShareEstimateRes>): PoolShareEstimateRes;
};
export declare const SwapInfo: {
    encode(message: SwapInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapInfo;
    fromPartial(object: Partial<SwapInfo>): SwapInfo;
};
