import { Rpc } from "../../../helpers";
import { PoolReq, PoolRes, PoolsReq, PoolsRes, LiquidityProviderReq, LiquidityProviderRes, LiquidityProviderDataReq, LiquidityProviderDataRes, AssetListReq, AssetListRes, LiquidityProvidersReq, LiquidityProvidersRes, LiquidityProviderListReq, LiquidityProviderListRes, ParamsReq, ParamsRes, RewardParamsReq, RewardParamsRes, PmtpParamsReq, PmtpParamsRes, LiquidityProtectionParamsReq, LiquidityProtectionParamsRes, ProviderDistributionParamsReq, ProviderDistributionParamsRes, SwapFeeParamsReq, SwapFeeParamsRes, PoolShareEstimateReq, PoolShareEstimateRes, RewardsBucketReq, RewardsBucketRes, AllRewardsBucketReq, AllRewardsBucketRes } from "./querier";
export interface Query {
    getPool(request: PoolReq): Promise<PoolRes>;
    getPools(request?: PoolsReq): Promise<PoolsRes>;
    getLiquidityProvider(request: LiquidityProviderReq): Promise<LiquidityProviderRes>;
    getLiquidityProviderData(request: LiquidityProviderDataReq): Promise<LiquidityProviderDataRes>;
    getAssetList(request: AssetListReq): Promise<AssetListRes>;
    getLiquidityProviders(request?: LiquidityProvidersReq): Promise<LiquidityProvidersRes>;
    getLiquidityProviderList(request: LiquidityProviderListReq): Promise<LiquidityProviderListRes>;
    getParams(request?: ParamsReq): Promise<ParamsRes>;
    getRewardParams(request?: RewardParamsReq): Promise<RewardParamsRes>;
    getPmtpParams(request?: PmtpParamsReq): Promise<PmtpParamsRes>;
    getLiquidityProtectionParams(request?: LiquidityProtectionParamsReq): Promise<LiquidityProtectionParamsRes>;
    getProviderDistributionParams(request?: ProviderDistributionParamsReq): Promise<ProviderDistributionParamsRes>;
    getSwapFeeParams(request?: SwapFeeParamsReq): Promise<SwapFeeParamsRes>;
    getPoolShareEstimate(request: PoolShareEstimateReq): Promise<PoolShareEstimateRes>;
    /** Queries a list of RewardsBucket items. */
    getRewardsBucket(request: RewardsBucketReq): Promise<RewardsBucketRes>;
    getRewardsBucketAll(request?: AllRewardsBucketReq): Promise<AllRewardsBucketRes>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    getPool(request: PoolReq): Promise<PoolRes>;
    getPools(request?: PoolsReq): Promise<PoolsRes>;
    getLiquidityProvider(request: LiquidityProviderReq): Promise<LiquidityProviderRes>;
    getLiquidityProviderData(request: LiquidityProviderDataReq): Promise<LiquidityProviderDataRes>;
    getAssetList(request: AssetListReq): Promise<AssetListRes>;
    getLiquidityProviders(request?: LiquidityProvidersReq): Promise<LiquidityProvidersRes>;
    getLiquidityProviderList(request: LiquidityProviderListReq): Promise<LiquidityProviderListRes>;
    getParams(request?: ParamsReq): Promise<ParamsRes>;
    getRewardParams(request?: RewardParamsReq): Promise<RewardParamsRes>;
    getPmtpParams(request?: PmtpParamsReq): Promise<PmtpParamsRes>;
    getLiquidityProtectionParams(request?: LiquidityProtectionParamsReq): Promise<LiquidityProtectionParamsRes>;
    getProviderDistributionParams(request?: ProviderDistributionParamsReq): Promise<ProviderDistributionParamsRes>;
    getSwapFeeParams(request?: SwapFeeParamsReq): Promise<SwapFeeParamsRes>;
    getPoolShareEstimate(request: PoolShareEstimateReq): Promise<PoolShareEstimateRes>;
    getRewardsBucket(request: RewardsBucketReq): Promise<RewardsBucketRes>;
    getRewardsBucketAll(request?: AllRewardsBucketReq): Promise<AllRewardsBucketRes>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getPool(request: PoolReq): Promise<PoolRes>;
    getPools(request?: PoolsReq): Promise<PoolsRes>;
    getLiquidityProvider(request: LiquidityProviderReq): Promise<LiquidityProviderRes>;
    getLiquidityProviderData(request: LiquidityProviderDataReq): Promise<LiquidityProviderDataRes>;
    getAssetList(request: AssetListReq): Promise<AssetListRes>;
    getLiquidityProviders(request?: LiquidityProvidersReq): Promise<LiquidityProvidersRes>;
    getLiquidityProviderList(request: LiquidityProviderListReq): Promise<LiquidityProviderListRes>;
    getParams(request?: ParamsReq): Promise<ParamsRes>;
    getRewardParams(request?: RewardParamsReq): Promise<RewardParamsRes>;
    getPmtpParams(request?: PmtpParamsReq): Promise<PmtpParamsRes>;
    getLiquidityProtectionParams(request?: LiquidityProtectionParamsReq): Promise<LiquidityProtectionParamsRes>;
    getProviderDistributionParams(request?: ProviderDistributionParamsReq): Promise<ProviderDistributionParamsRes>;
    getSwapFeeParams(request?: SwapFeeParamsReq): Promise<SwapFeeParamsRes>;
    getPoolShareEstimate(request: PoolShareEstimateReq): Promise<PoolShareEstimateRes>;
    getRewardsBucket(request: RewardsBucketReq): Promise<RewardsBucketRes>;
    getRewardsBucketAll(request?: AllRewardsBucketReq): Promise<AllRewardsBucketRes>;
};
