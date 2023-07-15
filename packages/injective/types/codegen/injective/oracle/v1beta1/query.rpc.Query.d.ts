import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves oracle params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Retrieves the band relayers */
    bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse>;
    /** Retrieves the state for all band price feeds */
    bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse>;
    /** Retrieves the state for all band ibc price feeds */
    bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse>;
    /** Retrieves the state for all price feeds */
    priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse>;
    /** Retrieves the state for all coinbase price feeds */
    coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse>;
    /** Retrieves the state for all pyth price feeds */
    pythPriceStates(request?: QueryPythPriceStatesRequest): Promise<QueryPythPriceStatesResponse>;
    /** Retrieves the state for all provider price feeds */
    providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse>;
    /** Retrieves the entire oracle module's state */
    oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
    /** Retrieves historical price records for a given OracleType and Symbol */
    historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse>;
    /** Retrieves mixed volatility value for the specified pair of base/quote */
    oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse>;
    oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse>;
    oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse>;
    oraclePrice(request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse>;
    pythPrice(request: QueryPythPriceRequest): Promise<QueryPythPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse>;
    bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse>;
    bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse>;
    priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse>;
    coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse>;
    pythPriceStates(request?: QueryPythPriceStatesRequest): Promise<QueryPythPriceStatesResponse>;
    providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse>;
    oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
    historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse>;
    oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse>;
    oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse>;
    oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse>;
    oraclePrice(request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse>;
    pythPrice(request: QueryPythPriceRequest): Promise<QueryPythPriceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse>;
    bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse>;
    bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse>;
    priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse>;
    coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse>;
    pythPriceStates(request?: QueryPythPriceStatesRequest): Promise<QueryPythPriceStatesResponse>;
    providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse>;
    oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
    historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse>;
    oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse>;
    oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse>;
    oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse>;
    oraclePrice(request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse>;
    pythPrice(request: QueryPythPriceRequest): Promise<QueryPythPriceResponse>;
};
