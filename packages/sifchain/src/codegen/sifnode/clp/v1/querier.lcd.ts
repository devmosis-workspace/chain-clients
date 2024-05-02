import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { PoolReq, PoolResSDKType, PoolsReq, PoolsResSDKType, LiquidityProviderReq, LiquidityProviderResSDKType, LiquidityProviderDataReq, LiquidityProviderDataResSDKType, AssetListReq, AssetListResSDKType, LiquidityProvidersReq, LiquidityProvidersResSDKType, LiquidityProviderListReq, LiquidityProviderListResSDKType, ParamsReq, ParamsResSDKType, RewardParamsReq, RewardParamsResSDKType, PmtpParamsReq, PmtpParamsResSDKType, LiquidityProtectionParamsReq, LiquidityProtectionParamsResSDKType, ProviderDistributionParamsReq, ProviderDistributionParamsResSDKType, SwapFeeParamsReq, SwapFeeParamsResSDKType, PoolShareEstimateReq, PoolShareEstimateResSDKType, RewardsBucketReq, RewardsBucketResSDKType, AllRewardsBucketReq, AllRewardsBucketResSDKType } from "./querier";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getPool = this.getPool.bind(this);
    this.getPools = this.getPools.bind(this);
    this.getLiquidityProvider = this.getLiquidityProvider.bind(this);
    this.getLiquidityProviderData = this.getLiquidityProviderData.bind(this);
    this.getAssetList = this.getAssetList.bind(this);
    this.getLiquidityProviders = this.getLiquidityProviders.bind(this);
    this.getLiquidityProviderList = this.getLiquidityProviderList.bind(this);
    this.getParams = this.getParams.bind(this);
    this.getRewardParams = this.getRewardParams.bind(this);
    this.getPmtpParams = this.getPmtpParams.bind(this);
    this.getLiquidityProtectionParams = this.getLiquidityProtectionParams.bind(this);
    this.getProviderDistributionParams = this.getProviderDistributionParams.bind(this);
    this.getSwapFeeParams = this.getSwapFeeParams.bind(this);
    this.getPoolShareEstimate = this.getPoolShareEstimate.bind(this);
    this.getRewardsBucket = this.getRewardsBucket.bind(this);
    this.getRewardsBucketAll = this.getRewardsBucketAll.bind(this);
  }
  /* GetPool */
  async getPool(params: PoolReq): Promise<PoolResSDKType> {
    const endpoint = `sifchain/clp/v1/pool/${params.symbol}`;
    return await this.req.get<PoolResSDKType>(endpoint);
  }
  /* GetPools */
  async getPools(params: PoolsReq = {
    pagination: undefined
  }): Promise<PoolsResSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/clp/v1/pools`;
    return await this.req.get<PoolsResSDKType>(endpoint, options);
  }
  /* GetLiquidityProvider */
  async getLiquidityProvider(params: LiquidityProviderReq): Promise<LiquidityProviderResSDKType> {
    const endpoint = `sifchain/clp/v1/liquidity_provider/${params.symbol}/${params.lpAddress}`;
    return await this.req.get<LiquidityProviderResSDKType>(endpoint);
  }
  /* GetLiquidityProviderData */
  async getLiquidityProviderData(params: LiquidityProviderDataReq): Promise<LiquidityProviderDataResSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/clp/v1/liquidity_provider_data/${params.lpAddress}`;
    return await this.req.get<LiquidityProviderDataResSDKType>(endpoint, options);
  }
  /* GetAssetList */
  async getAssetList(params: AssetListReq): Promise<AssetListResSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/clp/v1/asset_list/${params.lpAddress}`;
    return await this.req.get<AssetListResSDKType>(endpoint, options);
  }
  /* GetLiquidityProviders */
  async getLiquidityProviders(params: LiquidityProvidersReq = {
    pagination: undefined
  }): Promise<LiquidityProvidersResSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/clp/v1/liquidity_providers`;
    return await this.req.get<LiquidityProvidersResSDKType>(endpoint, options);
  }
  /* GetLiquidityProviderList */
  async getLiquidityProviderList(params: LiquidityProviderListReq): Promise<LiquidityProviderListResSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/clp/v1/liquidity_provider_list/${params.symbol}`;
    return await this.req.get<LiquidityProviderListResSDKType>(endpoint, options);
  }
  /* GetParams */
  async getParams(_params: ParamsReq = {}): Promise<ParamsResSDKType> {
    const endpoint = `sifchain/clp/v1/params`;
    return await this.req.get<ParamsResSDKType>(endpoint);
  }
  /* GetRewardParams */
  async getRewardParams(_params: RewardParamsReq = {}): Promise<RewardParamsResSDKType> {
    const endpoint = `sifchain/clp/v1/reward_params`;
    return await this.req.get<RewardParamsResSDKType>(endpoint);
  }
  /* GetPmtpParams */
  async getPmtpParams(_params: PmtpParamsReq = {}): Promise<PmtpParamsResSDKType> {
    const endpoint = `sifchain/clp/v1/pmtp_params`;
    return await this.req.get<PmtpParamsResSDKType>(endpoint);
  }
  /* GetLiquidityProtectionParams */
  async getLiquidityProtectionParams(_params: LiquidityProtectionParamsReq = {}): Promise<LiquidityProtectionParamsResSDKType> {
    const endpoint = `sifchain/clp/v1/liquidity_protection_params`;
    return await this.req.get<LiquidityProtectionParamsResSDKType>(endpoint);
  }
  /* GetProviderDistributionParams */
  async getProviderDistributionParams(_params: ProviderDistributionParamsReq = {}): Promise<ProviderDistributionParamsResSDKType> {
    const endpoint = `sifchain/clp/v1/provider_distribution_params`;
    return await this.req.get<ProviderDistributionParamsResSDKType>(endpoint);
  }
  /* GetSwapFeeParams */
  async getSwapFeeParams(_params: SwapFeeParamsReq = {}): Promise<SwapFeeParamsResSDKType> {
    const endpoint = `sifchain/clp/v1/swap_fee_rate`;
    return await this.req.get<SwapFeeParamsResSDKType>(endpoint);
  }
  /* GetPoolShareEstimate */
  async getPoolShareEstimate(params: PoolShareEstimateReq): Promise<PoolShareEstimateResSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.externalAsset !== "undefined") {
      options.params.external_asset = params.externalAsset;
    }
    if (typeof params?.nativeAssetAmount !== "undefined") {
      options.params.native_asset_amount = params.nativeAssetAmount;
    }
    if (typeof params?.externalAssetAmount !== "undefined") {
      options.params.external_asset_amount = params.externalAssetAmount;
    }
    const endpoint = `sifchain/clp/v1/pool_share_estimate`;
    return await this.req.get<PoolShareEstimateResSDKType>(endpoint, options);
  }
  /* Queries a list of RewardsBucket items. */
  async getRewardsBucket(params: RewardsBucketReq): Promise<RewardsBucketResSDKType> {
    const endpoint = `sifchain/clp/v1/rewards_bucket/${params.denom}`;
    return await this.req.get<RewardsBucketResSDKType>(endpoint);
  }
  /* GetRewardsBucketAll */
  async getRewardsBucketAll(params: AllRewardsBucketReq = {
    pagination: undefined
  }): Promise<AllRewardsBucketResSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/clp/v1/clp/rewards_bucket`;
    return await this.req.get<AllRewardsBucketResSDKType>(endpoint, options);
  }
}