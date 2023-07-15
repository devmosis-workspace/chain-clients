import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, EstimateSinglePoolSwapExactAmountOutRequest, NumPoolsRequest, NumPoolsResponse, PoolRequest, PoolResponse, AllPoolsRequest, AllPoolsResponse, SpotPriceRequest, SpotPriceResponse, TotalPoolLiquidityRequest, TotalPoolLiquidityResponse, TotalLiquidityRequest, TotalLiquidityResponse } from "./query";
export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** Estimates swap amount out given in. */
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
  estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
  /** Estimates swap amount in given out. */
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
  estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
  /** Returns the total number of pools existing in Osmosis. */
  numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
  /** Pool returns the Pool specified by the pool id */
  pool(request: PoolRequest): Promise<PoolResponse>;
  /** AllPools returns all pools on the Osmosis chain sorted by IDs. */
  allPools(request?: AllPoolsRequest): Promise<AllPoolsResponse>;
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
  /** TotalPoolLiquidity returns the total liquidity of the specified pool. */
  totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse>;
  /** TotalLiquidity returns the total liquidity across all pools. */
  totalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSinglePoolSwapExactAmountIn = this.estimateSinglePoolSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.estimateSinglePoolSwapExactAmountOut = this.estimateSinglePoolSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
    this.pool = this.pool.bind(this);
    this.allPools = this.allPools.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new _m0.Reader(data)));
  }
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => EstimateSwapExactAmountInResponse.decode(new _m0.Reader(data)));
  }
  estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountIn", data);
    return promise.then(data => EstimateSwapExactAmountInResponse.decode(new _m0.Reader(data)));
  }
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new _m0.Reader(data)));
  }
  estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountOut", data);
    return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new _m0.Reader(data)));
  }
  numPools(request: NumPoolsRequest = {}): Promise<NumPoolsResponse> {
    const data = NumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "NumPools", data);
    return promise.then(data => NumPoolsResponse.decode(new _m0.Reader(data)));
  }
  pool(request: PoolRequest): Promise<PoolResponse> {
    const data = PoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Pool", data);
    return promise.then(data => PoolResponse.decode(new _m0.Reader(data)));
  }
  allPools(request: AllPoolsRequest = {}): Promise<AllPoolsResponse> {
    const data = AllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "AllPools", data);
    return promise.then(data => AllPoolsResponse.decode(new _m0.Reader(data)));
  }
  spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse> {
    const data = SpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "SpotPrice", data);
    return promise.then(data => SpotPriceResponse.decode(new _m0.Reader(data)));
  }
  totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse> {
    const data = TotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalPoolLiquidity", data);
    return promise.then(data => TotalPoolLiquidityResponse.decode(new _m0.Reader(data)));
  }
  totalLiquidity(request: TotalLiquidityRequest = {}): Promise<TotalLiquidityResponse> {
    const data = TotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalLiquidity", data);
    return promise.then(data => TotalLiquidityResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
      return queryService.estimateSinglePoolSwapExactAmountIn(request);
    },
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
      return queryService.estimateSwapExactAmountOut(request);
    },
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
      return queryService.estimateSinglePoolSwapExactAmountOut(request);
    },
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse> {
      return queryService.numPools(request);
    },
    pool(request: PoolRequest): Promise<PoolResponse> {
      return queryService.pool(request);
    },
    allPools(request?: AllPoolsRequest): Promise<AllPoolsResponse> {
      return queryService.allPools(request);
    },
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse> {
      return queryService.spotPrice(request);
    },
    totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse> {
      return queryService.totalPoolLiquidity(request);
    },
    totalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse> {
      return queryService.totalLiquidity(request);
    }
  };
};