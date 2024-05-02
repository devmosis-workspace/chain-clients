import { LCDClient } from "@cosmology/lcd";
import { QuerySwapRequest, QuerySwapResponseSDKType, QueryTerraPoolDeltaRequest, QueryTerraPoolDeltaResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.swap = this.swap.bind(this);
    this.terraPoolDelta = this.terraPoolDelta.bind(this);
    this.params = this.params.bind(this);
  }
  /* Swap returns simulated swap amount. */
  async swap(params: QuerySwapRequest): Promise<QuerySwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.offerCoin !== "undefined") {
      options.params.offer_coin = params.offerCoin;
    }
    if (typeof params?.askDenom !== "undefined") {
      options.params.ask_denom = params.askDenom;
    }
    const endpoint = `terra/market/v1beta1/swap`;
    return await this.req.get<QuerySwapResponseSDKType>(endpoint, options);
  }
  /* TerraPoolDelta returns terra_pool_delta amount. */
  async terraPoolDelta(_params: QueryTerraPoolDeltaRequest = {}): Promise<QueryTerraPoolDeltaResponseSDKType> {
    const endpoint = `terra/market/v1beta1/terra_pool_delta`;
    return await this.req.get<QueryTerraPoolDeltaResponseSDKType>(endpoint);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `terra/market/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}