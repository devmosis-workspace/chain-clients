import { LCDClient } from "@cosmology/lcd";
import { PoolReq, PoolResSDKType, PoolsReq, PoolsResSDKType, LiquidityProviderReq, LiquidityProviderResSDKType, LiquidityProviderDataReq, LiquidityProviderDataResSDKType, AssetListReq, AssetListResSDKType, LiquidityProvidersReq, LiquidityProvidersResSDKType, LiquidityProviderListReq, LiquidityProviderListResSDKType, ParamsReq, ParamsResSDKType, RewardParamsReq, RewardParamsResSDKType, PmtpParamsReq, PmtpParamsResSDKType, LiquidityProtectionParamsReq, LiquidityProtectionParamsResSDKType, ProviderDistributionParamsReq, ProviderDistributionParamsResSDKType, SwapFeeParamsReq, SwapFeeParamsResSDKType, PoolShareEstimateReq, PoolShareEstimateResSDKType, RewardsBucketReq, RewardsBucketResSDKType, AllRewardsBucketReq, AllRewardsBucketResSDKType } from "./querier";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    getPool(params: PoolReq): Promise<PoolResSDKType>;
    getPools(params?: PoolsReq): Promise<PoolsResSDKType>;
    getLiquidityProvider(params: LiquidityProviderReq): Promise<LiquidityProviderResSDKType>;
    getLiquidityProviderData(params: LiquidityProviderDataReq): Promise<LiquidityProviderDataResSDKType>;
    getAssetList(params: AssetListReq): Promise<AssetListResSDKType>;
    getLiquidityProviders(params?: LiquidityProvidersReq): Promise<LiquidityProvidersResSDKType>;
    getLiquidityProviderList(params: LiquidityProviderListReq): Promise<LiquidityProviderListResSDKType>;
    getParams(_params?: ParamsReq): Promise<ParamsResSDKType>;
    getRewardParams(_params?: RewardParamsReq): Promise<RewardParamsResSDKType>;
    getPmtpParams(_params?: PmtpParamsReq): Promise<PmtpParamsResSDKType>;
    getLiquidityProtectionParams(_params?: LiquidityProtectionParamsReq): Promise<LiquidityProtectionParamsResSDKType>;
    getProviderDistributionParams(_params?: ProviderDistributionParamsReq): Promise<ProviderDistributionParamsResSDKType>;
    getSwapFeeParams(_params?: SwapFeeParamsReq): Promise<SwapFeeParamsResSDKType>;
    getPoolShareEstimate(params: PoolShareEstimateReq): Promise<PoolShareEstimateResSDKType>;
    getRewardsBucket(params: RewardsBucketReq): Promise<RewardsBucketResSDKType>;
    getRewardsBucketAll(params?: AllRewardsBucketReq): Promise<AllRewardsBucketResSDKType>;
}
