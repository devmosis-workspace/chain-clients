import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAssetSupplyRequest, QueryAssetSupplyResponseSDKType, QueryAssetSuppliesRequest, QueryAssetSuppliesResponseSDKType, QueryAtomicSwapRequest, QueryAtomicSwapResponseSDKType, QueryAtomicSwapsRequest, QueryAtomicSwapsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.assetSupply = this.assetSupply.bind(this);
    this.assetSupplies = this.assetSupplies.bind(this);
    this.atomicSwap = this.atomicSwap.bind(this);
    this.atomicSwaps = this.atomicSwaps.bind(this);
  }
  /* Params queries module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/bep3/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AssetSupply queries info about an asset's supply */
  async assetSupply(params: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponseSDKType> {
    const endpoint = `kava/bep3/v1beta1/assetsupply/${params.denom}`;
    return await this.req.get<QueryAssetSupplyResponseSDKType>(endpoint);
  }
  /* AssetSupplies queries a list of asset supplies */
  async assetSupplies(_params: QueryAssetSuppliesRequest = {}): Promise<QueryAssetSuppliesResponseSDKType> {
    const endpoint = `kava/bep3/v1beta1/assetsupplies`;
    return await this.req.get<QueryAssetSuppliesResponseSDKType>(endpoint);
  }
  /* AtomicSwap queries info about an atomic swap */
  async atomicSwap(params: QueryAtomicSwapRequest): Promise<QueryAtomicSwapResponseSDKType> {
    const endpoint = `kava/bep3/v1beta1/atomicswap/${params.swapId}`;
    return await this.req.get<QueryAtomicSwapResponseSDKType>(endpoint);
  }
  /* AtomicSwaps queries a list of atomic swaps */
  async atomicSwaps(params: QueryAtomicSwapsRequest): Promise<QueryAtomicSwapsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.involve !== "undefined") {
      options.params.involve = params.involve;
    }
    if (typeof params?.expiration !== "undefined") {
      options.params.expiration = params.expiration;
    }
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.direction !== "undefined") {
      options.params.direction = params.direction;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/bep3/v1beta1/atomicswaps`;
    return await this.req.get<QueryAtomicSwapsResponseSDKType>(endpoint, options);
  }
}