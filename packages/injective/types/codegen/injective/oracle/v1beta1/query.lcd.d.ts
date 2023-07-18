import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBandRelayersRequest, QueryBandRelayersResponseSDKType, QueryBandPriceStatesRequest, QueryBandPriceStatesResponseSDKType, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponseSDKType, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponseSDKType, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponseSDKType, QueryPythPriceStatesRequest, QueryPythPriceStatesResponseSDKType, QueryProviderPriceStateRequest, QueryProviderPriceStateResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponseSDKType, QueryOracleVolatilityRequest, QueryOracleVolatilityResponseSDKType, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponseSDKType, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponseSDKType, QueryOraclePriceRequest, QueryOraclePriceResponseSDKType, QueryPythPriceRequest, QueryPythPriceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    bandRelayers(_params?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponseSDKType>;
    bandPriceStates(_params?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponseSDKType>;
    bandIBCPriceStates(_params?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponseSDKType>;
    priceFeedPriceStates(_params?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponseSDKType>;
    coinbasePriceStates(_params?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponseSDKType>;
    pythPriceStates(_params?: QueryPythPriceStatesRequest): Promise<QueryPythPriceStatesResponseSDKType>;
    providerPriceState(params: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponseSDKType>;
    oracleModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
    historicalPriceRecords(params: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponseSDKType>;
    oracleVolatility(params: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponseSDKType>;
    oracleProvidersInfo(_params?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponseSDKType>;
    oracleProviderPrices(params: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponseSDKType>;
    oraclePrice(params: QueryOraclePriceRequest): Promise<QueryOraclePriceResponseSDKType>;
    pythPrice(params: QueryPythPriceRequest): Promise<QueryPythPriceResponseSDKType>;
}
