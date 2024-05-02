import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  getPool(request: PoolReq): Promise<PoolRes> {
    const data = PoolReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetPool", data);
    return promise.then(data => PoolRes.decode(new BinaryReader(data)));
  }
  getPools(request: PoolsReq = {
    pagination: undefined
  }): Promise<PoolsRes> {
    const data = PoolsReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetPools", data);
    return promise.then(data => PoolsRes.decode(new BinaryReader(data)));
  }
  getLiquidityProvider(request: LiquidityProviderReq): Promise<LiquidityProviderRes> {
    const data = LiquidityProviderReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetLiquidityProvider", data);
    return promise.then(data => LiquidityProviderRes.decode(new BinaryReader(data)));
  }
  getLiquidityProviderData(request: LiquidityProviderDataReq): Promise<LiquidityProviderDataRes> {
    const data = LiquidityProviderDataReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetLiquidityProviderData", data);
    return promise.then(data => LiquidityProviderDataRes.decode(new BinaryReader(data)));
  }
  getAssetList(request: AssetListReq): Promise<AssetListRes> {
    const data = AssetListReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetAssetList", data);
    return promise.then(data => AssetListRes.decode(new BinaryReader(data)));
  }
  getLiquidityProviders(request: LiquidityProvidersReq = {
    pagination: undefined
  }): Promise<LiquidityProvidersRes> {
    const data = LiquidityProvidersReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetLiquidityProviders", data);
    return promise.then(data => LiquidityProvidersRes.decode(new BinaryReader(data)));
  }
  getLiquidityProviderList(request: LiquidityProviderListReq): Promise<LiquidityProviderListRes> {
    const data = LiquidityProviderListReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetLiquidityProviderList", data);
    return promise.then(data => LiquidityProviderListRes.decode(new BinaryReader(data)));
  }
  getParams(request: ParamsReq = {}): Promise<ParamsRes> {
    const data = ParamsReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetParams", data);
    return promise.then(data => ParamsRes.decode(new BinaryReader(data)));
  }
  getRewardParams(request: RewardParamsReq = {}): Promise<RewardParamsRes> {
    const data = RewardParamsReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetRewardParams", data);
    return promise.then(data => RewardParamsRes.decode(new BinaryReader(data)));
  }
  getPmtpParams(request: PmtpParamsReq = {}): Promise<PmtpParamsRes> {
    const data = PmtpParamsReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetPmtpParams", data);
    return promise.then(data => PmtpParamsRes.decode(new BinaryReader(data)));
  }
  getLiquidityProtectionParams(request: LiquidityProtectionParamsReq = {}): Promise<LiquidityProtectionParamsRes> {
    const data = LiquidityProtectionParamsReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetLiquidityProtectionParams", data);
    return promise.then(data => LiquidityProtectionParamsRes.decode(new BinaryReader(data)));
  }
  getProviderDistributionParams(request: ProviderDistributionParamsReq = {}): Promise<ProviderDistributionParamsRes> {
    const data = ProviderDistributionParamsReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetProviderDistributionParams", data);
    return promise.then(data => ProviderDistributionParamsRes.decode(new BinaryReader(data)));
  }
  getSwapFeeParams(request: SwapFeeParamsReq = {}): Promise<SwapFeeParamsRes> {
    const data = SwapFeeParamsReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetSwapFeeParams", data);
    return promise.then(data => SwapFeeParamsRes.decode(new BinaryReader(data)));
  }
  getPoolShareEstimate(request: PoolShareEstimateReq): Promise<PoolShareEstimateRes> {
    const data = PoolShareEstimateReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetPoolShareEstimate", data);
    return promise.then(data => PoolShareEstimateRes.decode(new BinaryReader(data)));
  }
  getRewardsBucket(request: RewardsBucketReq): Promise<RewardsBucketRes> {
    const data = RewardsBucketReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetRewardsBucket", data);
    return promise.then(data => RewardsBucketRes.decode(new BinaryReader(data)));
  }
  getRewardsBucketAll(request: AllRewardsBucketReq = {
    pagination: undefined
  }): Promise<AllRewardsBucketRes> {
    const data = AllRewardsBucketReq.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Query", "GetRewardsBucketAll", data);
    return promise.then(data => AllRewardsBucketRes.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getPool(request: PoolReq): Promise<PoolRes> {
      return queryService.getPool(request);
    },
    getPools(request?: PoolsReq): Promise<PoolsRes> {
      return queryService.getPools(request);
    },
    getLiquidityProvider(request: LiquidityProviderReq): Promise<LiquidityProviderRes> {
      return queryService.getLiquidityProvider(request);
    },
    getLiquidityProviderData(request: LiquidityProviderDataReq): Promise<LiquidityProviderDataRes> {
      return queryService.getLiquidityProviderData(request);
    },
    getAssetList(request: AssetListReq): Promise<AssetListRes> {
      return queryService.getAssetList(request);
    },
    getLiquidityProviders(request?: LiquidityProvidersReq): Promise<LiquidityProvidersRes> {
      return queryService.getLiquidityProviders(request);
    },
    getLiquidityProviderList(request: LiquidityProviderListReq): Promise<LiquidityProviderListRes> {
      return queryService.getLiquidityProviderList(request);
    },
    getParams(request?: ParamsReq): Promise<ParamsRes> {
      return queryService.getParams(request);
    },
    getRewardParams(request?: RewardParamsReq): Promise<RewardParamsRes> {
      return queryService.getRewardParams(request);
    },
    getPmtpParams(request?: PmtpParamsReq): Promise<PmtpParamsRes> {
      return queryService.getPmtpParams(request);
    },
    getLiquidityProtectionParams(request?: LiquidityProtectionParamsReq): Promise<LiquidityProtectionParamsRes> {
      return queryService.getLiquidityProtectionParams(request);
    },
    getProviderDistributionParams(request?: ProviderDistributionParamsReq): Promise<ProviderDistributionParamsRes> {
      return queryService.getProviderDistributionParams(request);
    },
    getSwapFeeParams(request?: SwapFeeParamsReq): Promise<SwapFeeParamsRes> {
      return queryService.getSwapFeeParams(request);
    },
    getPoolShareEstimate(request: PoolShareEstimateReq): Promise<PoolShareEstimateRes> {
      return queryService.getPoolShareEstimate(request);
    },
    getRewardsBucket(request: RewardsBucketReq): Promise<RewardsBucketRes> {
      return queryService.getRewardsBucket(request);
    },
    getRewardsBucketAll(request?: AllRewardsBucketReq): Promise<AllRewardsBucketRes> {
      return queryService.getRewardsBucketAll(request);
    }
  };
};