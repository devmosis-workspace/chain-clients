import { LCDClient } from "@cosmology/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryIndexes, QueryIndexesResponseSDKType, QuerySwapFee, QuerySwapFeeResponseSDKType, QueryRedeemFee, QueryRedeemFeeResponseSDKType, QueryIndexBalances, QueryIndexBalancesResponseSDKType, QueryIndexPrices, QueryIndexPricesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.indexes = this.indexes.bind(this);
    this.swapFee = this.swapFee.bind(this);
    this.redeemFee = this.redeemFee.bind(this);
    this.indexBalances = this.indexBalances.bind(this);
    this.indexPrices = this.indexPrices.bind(this);
  }
  /* Params queries the parameters of the x/metoken module. */
  async params(_params: QueryParams = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `umee/metoken/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Indexes queries for a specific or all the registered indexes. */
  async indexes(params: QueryIndexes): Promise<QueryIndexesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.metokenDenom !== "undefined") {
      options.params.metoken_denom = params.metokenDenom;
    }
    const endpoint = `umee/metoken/v1/indexes`;
    return await this.req.get<QueryIndexesResponseSDKType>(endpoint, options);
  }
  /* SwapFee computes fee that would be applied when executing MsgSwap. */
  async swapFee(params: QuerySwapFee): Promise<QuerySwapFeeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.asset !== "undefined") {
      options.params.asset = params.asset;
    }
    if (typeof params?.metokenDenom !== "undefined") {
      options.params.metoken_denom = params.metokenDenom;
    }
    const endpoint = `umee/metoken/v1/swap_fee`;
    return await this.req.get<QuerySwapFeeResponseSDKType>(endpoint, options);
  }
  /* RedeemFee computes a fee that would be applied when executing MsgRedeem. */
  async redeemFee(params: QueryRedeemFee): Promise<QueryRedeemFeeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.metoken !== "undefined") {
      options.params.metoken = params.metoken;
    }
    if (typeof params?.assetDenom !== "undefined") {
      options.params.asset_denom = params.assetDenom;
    }
    const endpoint = `umee/metoken/v1/redeem_fee`;
    return await this.req.get<QueryRedeemFeeResponseSDKType>(endpoint, options);
  }
  /* IndexBalances queries for Index's balances of a specific or all the registered indexes. */
  async indexBalances(params: QueryIndexBalances): Promise<QueryIndexBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.metokenDenom !== "undefined") {
      options.params.metoken_denom = params.metokenDenom;
    }
    const endpoint = `umee/metoken/v1/index_balances`;
    return await this.req.get<QueryIndexBalancesResponseSDKType>(endpoint, options);
  }
  /* IndexPrices queries for Index's price of a specific or all the registered indexes. It also includes the
   underlying assets prices as well as swap and redeem rates. */
  async indexPrices(params: QueryIndexPrices): Promise<QueryIndexPricesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.metokenDenom !== "undefined") {
      options.params.metoken_denom = params.metokenDenom;
    }
    const endpoint = `umee/metoken/v1/index_prices`;
    return await this.req.get<QueryIndexPricesResponseSDKType>(endpoint, options);
  }
}