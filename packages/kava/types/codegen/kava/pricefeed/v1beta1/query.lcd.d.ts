import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPriceRequest, QueryPriceResponseSDKType, QueryPricesRequest, QueryPricesResponseSDKType, QueryRawPricesRequest, QueryRawPricesResponseSDKType, QueryOraclesRequest, QueryOraclesResponseSDKType, QueryMarketsRequest, QueryMarketsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    price(params: QueryPriceRequest): Promise<QueryPriceResponseSDKType>;
    prices(_params?: QueryPricesRequest): Promise<QueryPricesResponseSDKType>;
    rawPrices(params: QueryRawPricesRequest): Promise<QueryRawPricesResponseSDKType>;
    oracles(params: QueryOraclesRequest): Promise<QueryOraclesResponseSDKType>;
    markets(_params?: QueryMarketsRequest): Promise<QueryMarketsResponseSDKType>;
}
