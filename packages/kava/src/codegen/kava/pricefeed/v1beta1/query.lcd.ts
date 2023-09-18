import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPriceRequest, QueryPriceResponseSDKType, QueryPricesRequest, QueryPricesResponseSDKType, QueryRawPricesRequest, QueryRawPricesResponseSDKType, QueryOraclesRequest, QueryOraclesResponseSDKType, QueryMarketsRequest, QueryMarketsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.price = this.price.bind(this);
    this.prices = this.prices.bind(this);
    this.rawPrices = this.rawPrices.bind(this);
    this.oracles = this.oracles.bind(this);
    this.markets = this.markets.bind(this);
  }
  /* Params queries all parameters of the pricefeed module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/pricefeed/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Price queries price details based on a market */
  async price(params: QueryPriceRequest): Promise<QueryPriceResponseSDKType> {
    const endpoint = `kava/pricefeed/v1beta1/prices/${params.marketId}`;
    return await this.req.get<QueryPriceResponseSDKType>(endpoint);
  }
  /* Prices queries all prices */
  async prices(_params: QueryPricesRequest = {}): Promise<QueryPricesResponseSDKType> {
    const endpoint = `kava/pricefeed/v1beta1/prices`;
    return await this.req.get<QueryPricesResponseSDKType>(endpoint);
  }
  /* RawPrices queries all raw prices based on a market */
  async rawPrices(params: QueryRawPricesRequest): Promise<QueryRawPricesResponseSDKType> {
    const endpoint = `kava/pricefeed/v1beta1/rawprices/${params.marketId}`;
    return await this.req.get<QueryRawPricesResponseSDKType>(endpoint);
  }
  /* Oracles queries all oracles based on a market */
  async oracles(params: QueryOraclesRequest): Promise<QueryOraclesResponseSDKType> {
    const endpoint = `kava/pricefeed/v1beta1/oracles/${params.marketId}`;
    return await this.req.get<QueryOraclesResponseSDKType>(endpoint);
  }
  /* Markets queries all markets */
  async markets(_params: QueryMarketsRequest = {}): Promise<QueryMarketsResponseSDKType> {
    const endpoint = `kava/pricefeed/v1beta1/markets`;
    return await this.req.get<QueryMarketsResponseSDKType>(endpoint);
  }
}