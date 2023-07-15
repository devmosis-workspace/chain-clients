import { OracleType, OracleInfo, OracleInfoSDKType, PythPriceState, PythPriceStateSDKType, Params, ParamsSDKType, BandPriceState, BandPriceStateSDKType, PriceFeedState, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateSDKType, PriceState, PriceStateSDKType, PriceRecords, PriceRecordsSDKType, MetadataStatistics, MetadataStatisticsSDKType, PriceRecord, PriceRecordSDKType, ProviderInfo, ProviderInfoSDKType, ProviderState, ProviderStateSDKType } from "./oracle";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryPythPriceRequest {
    priceId: string;
}
export interface QueryPythPriceRequestSDKType {
    price_id: string;
}
export interface QueryPythPriceResponse {
    priceState?: PythPriceState;
}
export interface QueryPythPriceResponseSDKType {
    price_state?: PythPriceStateSDKType;
}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsRequest {
}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryOracleParamsResponse is the response type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QueryOracleParamsResponse is the response type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersRequest {
}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersRequestSDKType {
}
/**
 * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersResponse {
    /**
     * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
     * method.
     */
    relayers: string[];
}
/**
 * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersResponseSDKType {
    relayers: string[];
}
/**
 * QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates
 * RPC method.
 */
export interface QueryBandPriceStatesRequest {
}
/**
 * QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates
 * RPC method.
 */
export interface QueryBandPriceStatesRequestSDKType {
}
/**
 * QueryBandPriceStatesResponse is the response type for the
 * Query/BandPriceStates RPC method.
 */
export interface QueryBandPriceStatesResponse {
    priceStates: BandPriceState[];
}
/**
 * QueryBandPriceStatesResponse is the response type for the
 * Query/BandPriceStates RPC method.
 */
export interface QueryBandPriceStatesResponseSDKType {
    price_states: BandPriceStateSDKType[];
}
/**
 * QueryBandIBCPriceStatesRequest is the request type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesRequest {
}
/**
 * QueryBandIBCPriceStatesRequest is the request type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesRequestSDKType {
}
/**
 * QueryBandIBCPriceStatesResponse is the response type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesResponse {
    priceStates: BandPriceState[];
}
/**
 * QueryBandIBCPriceStatesResponse is the response type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesResponseSDKType {
    price_states: BandPriceStateSDKType[];
}
/**
 * QueryPriceFeedPriceStatesRequest is the request type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesRequest {
}
/**
 * QueryPriceFeedPriceStatesRequest is the request type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesRequestSDKType {
}
/**
 * QueryPriceFeedPriceStatesResponse is the response type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesResponse {
    priceStates: PriceFeedState[];
}
/**
 * QueryPriceFeedPriceStatesResponse is the response type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesResponseSDKType {
    price_states: PriceFeedStateSDKType[];
}
/**
 * QueryCoinbasePriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesRequest {
}
/**
 * QueryCoinbasePriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesRequestSDKType {
}
/**
 * QueryCoinbasePriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesResponse {
    priceStates: CoinbasePriceState[];
}
/**
 * QueryCoinbasePriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesResponseSDKType {
    price_states: CoinbasePriceStateSDKType[];
}
/**
 * QueryPythPriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesRequest {
}
/**
 * QueryPythPriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesRequestSDKType {
}
/**
 * QueryPythPriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesResponse {
    priceStates: PythPriceState[];
}
/**
 * QueryPythPriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesResponseSDKType {
    price_states: PythPriceStateSDKType[];
}
/**
 * QueryProviderPriceStateRequest is the request type for the
 * Query/ProviderPriceState RPC method.
 */
export interface QueryProviderPriceStateRequest {
    provider: string;
    symbol: string;
}
/**
 * QueryProviderPriceStateRequest is the request type for the
 * Query/ProviderPriceState RPC method.
 */
export interface QueryProviderPriceStateRequestSDKType {
    provider: string;
    symbol: string;
}
/**
 * QueryProviderPriceStatesResponse is the response type for the
 * Query/ProviderPriceStates RPC method.
 */
export interface QueryProviderPriceStateResponse {
    /**
     * QueryProviderPriceStatesResponse is the response type for the
     * Query/ProviderPriceStates RPC method.
     */
    priceState?: PriceState;
}
/**
 * QueryProviderPriceStatesResponse is the response type for the
 * Query/ProviderPriceStates RPC method.
 */
export interface QueryProviderPriceStateResponseSDKType {
    price_state?: PriceStateSDKType;
}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/**
 * QueryModuleStateResponse is the response type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateResponse {
    /**
     * QueryModuleStateResponse is the response type for the Query/OracleModuleState
     * RPC method.
     */
    state?: GenesisState;
}
/**
 * QueryModuleStateResponse is the response type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state?: GenesisStateSDKType;
}
export interface QueryHistoricalPriceRecordsRequest {
    oracle: OracleType;
    symbolId: string;
}
export interface QueryHistoricalPriceRecordsRequestSDKType {
    oracle: OracleType;
    symbol_id: string;
}
export interface QueryHistoricalPriceRecordsResponse {
    priceRecords: PriceRecords[];
}
export interface QueryHistoricalPriceRecordsResponseSDKType {
    price_records: PriceRecordsSDKType[];
}
export interface OracleHistoryOptions {
    /**
     * MaxAge restricts the oracle price records oldest age in seconds from the
     * current block time to consider. A value of 0 means use all the records
     * present on the chain.
     */
    maxAge: Long;
    /**
     * If IncludeRawHistory is true, the raw underlying data used for the
     * computation is included in the response
     */
    includeRawHistory: boolean;
    /**
     * If IncludeMetadata is true, metadata on the computation is included in the
     * response
     */
    includeMetadata: boolean;
}
export interface OracleHistoryOptionsSDKType {
    max_age: Long;
    include_raw_history: boolean;
    include_metadata: boolean;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityRequest {
    baseInfo?: OracleInfo;
    quoteInfo?: OracleInfo;
    oracleHistoryOptions?: OracleHistoryOptions;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityRequestSDKType {
    base_info?: OracleInfoSDKType;
    quote_info?: OracleInfoSDKType;
    oracle_history_options?: OracleHistoryOptionsSDKType;
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityResponse {
    volatility: string;
    historyMetadata?: MetadataStatistics;
    rawHistory: PriceRecord[];
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityResponseSDKType {
    volatility: string;
    history_metadata?: MetadataStatisticsSDKType;
    raw_history: PriceRecordSDKType[];
}
export interface QueryOracleProvidersInfoRequest {
}
export interface QueryOracleProvidersInfoRequestSDKType {
}
export interface QueryOracleProvidersInfoResponse {
    providers: ProviderInfo[];
}
export interface QueryOracleProvidersInfoResponseSDKType {
    providers: ProviderInfoSDKType[];
}
export interface QueryOracleProviderPricesRequest {
    provider: string;
}
export interface QueryOracleProviderPricesRequestSDKType {
    provider: string;
}
export interface QueryOracleProviderPricesResponse {
    providerState: ProviderState[];
}
export interface QueryOracleProviderPricesResponseSDKType {
    providerState: ProviderStateSDKType[];
}
/**
 * QueryOraclePriceRequest is the request type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceRequest {
    oracleType: OracleType;
    base: string;
    quote: string;
}
/**
 * QueryOraclePriceRequest is the request type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceRequestSDKType {
    oracle_type: OracleType;
    base: string;
    quote: string;
}
export interface PricePairState {
    pairPrice: string;
    basePrice: string;
    quotePrice: string;
    baseCumulativePrice: string;
    quoteCumulativePrice: string;
    baseTimestamp: Long;
    quoteTimestamp: Long;
}
export interface PricePairStateSDKType {
    pair_price: string;
    base_price: string;
    quote_price: string;
    base_cumulative_price: string;
    quote_cumulative_price: string;
    base_timestamp: Long;
    quote_timestamp: Long;
}
/**
 * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceResponse {
    /**
     * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
     * method.
     */
    pricePairState?: PricePairState;
}
/**
 * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceResponseSDKType {
    price_pair_state?: PricePairStateSDKType;
}
export declare const QueryPythPriceRequest: {
    encode(message: QueryPythPriceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPythPriceRequest;
    fromPartial(object: Partial<QueryPythPriceRequest>): QueryPythPriceRequest;
};
export declare const QueryPythPriceResponse: {
    encode(message: QueryPythPriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPythPriceResponse;
    fromPartial(object: Partial<QueryPythPriceResponse>): QueryPythPriceResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryBandRelayersRequest: {
    encode(_: QueryBandRelayersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBandRelayersRequest;
    fromPartial(_: Partial<QueryBandRelayersRequest>): QueryBandRelayersRequest;
};
export declare const QueryBandRelayersResponse: {
    encode(message: QueryBandRelayersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBandRelayersResponse;
    fromPartial(object: Partial<QueryBandRelayersResponse>): QueryBandRelayersResponse;
};
export declare const QueryBandPriceStatesRequest: {
    encode(_: QueryBandPriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBandPriceStatesRequest;
    fromPartial(_: Partial<QueryBandPriceStatesRequest>): QueryBandPriceStatesRequest;
};
export declare const QueryBandPriceStatesResponse: {
    encode(message: QueryBandPriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBandPriceStatesResponse;
    fromPartial(object: Partial<QueryBandPriceStatesResponse>): QueryBandPriceStatesResponse;
};
export declare const QueryBandIBCPriceStatesRequest: {
    encode(_: QueryBandIBCPriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBandIBCPriceStatesRequest;
    fromPartial(_: Partial<QueryBandIBCPriceStatesRequest>): QueryBandIBCPriceStatesRequest;
};
export declare const QueryBandIBCPriceStatesResponse: {
    encode(message: QueryBandIBCPriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBandIBCPriceStatesResponse;
    fromPartial(object: Partial<QueryBandIBCPriceStatesResponse>): QueryBandIBCPriceStatesResponse;
};
export declare const QueryPriceFeedPriceStatesRequest: {
    encode(_: QueryPriceFeedPriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryPriceFeedPriceStatesRequest;
    fromPartial(_: Partial<QueryPriceFeedPriceStatesRequest>): QueryPriceFeedPriceStatesRequest;
};
export declare const QueryPriceFeedPriceStatesResponse: {
    encode(message: QueryPriceFeedPriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPriceFeedPriceStatesResponse;
    fromPartial(object: Partial<QueryPriceFeedPriceStatesResponse>): QueryPriceFeedPriceStatesResponse;
};
export declare const QueryCoinbasePriceStatesRequest: {
    encode(_: QueryCoinbasePriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCoinbasePriceStatesRequest;
    fromPartial(_: Partial<QueryCoinbasePriceStatesRequest>): QueryCoinbasePriceStatesRequest;
};
export declare const QueryCoinbasePriceStatesResponse: {
    encode(message: QueryCoinbasePriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCoinbasePriceStatesResponse;
    fromPartial(object: Partial<QueryCoinbasePriceStatesResponse>): QueryCoinbasePriceStatesResponse;
};
export declare const QueryPythPriceStatesRequest: {
    encode(_: QueryPythPriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryPythPriceStatesRequest;
    fromPartial(_: Partial<QueryPythPriceStatesRequest>): QueryPythPriceStatesRequest;
};
export declare const QueryPythPriceStatesResponse: {
    encode(message: QueryPythPriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPythPriceStatesResponse;
    fromPartial(object: Partial<QueryPythPriceStatesResponse>): QueryPythPriceStatesResponse;
};
export declare const QueryProviderPriceStateRequest: {
    encode(message: QueryProviderPriceStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProviderPriceStateRequest;
    fromPartial(object: Partial<QueryProviderPriceStateRequest>): QueryProviderPriceStateRequest;
};
export declare const QueryProviderPriceStateResponse: {
    encode(message: QueryProviderPriceStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryProviderPriceStateResponse;
    fromPartial(object: Partial<QueryProviderPriceStateResponse>): QueryProviderPriceStateResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
export declare const QueryHistoricalPriceRecordsRequest: {
    encode(message: QueryHistoricalPriceRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryHistoricalPriceRecordsRequest;
    fromPartial(object: Partial<QueryHistoricalPriceRecordsRequest>): QueryHistoricalPriceRecordsRequest;
};
export declare const QueryHistoricalPriceRecordsResponse: {
    encode(message: QueryHistoricalPriceRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryHistoricalPriceRecordsResponse;
    fromPartial(object: Partial<QueryHistoricalPriceRecordsResponse>): QueryHistoricalPriceRecordsResponse;
};
export declare const OracleHistoryOptions: {
    encode(message: OracleHistoryOptions, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OracleHistoryOptions;
    fromPartial(object: Partial<OracleHistoryOptions>): OracleHistoryOptions;
};
export declare const QueryOracleVolatilityRequest: {
    encode(message: QueryOracleVolatilityRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOracleVolatilityRequest;
    fromPartial(object: Partial<QueryOracleVolatilityRequest>): QueryOracleVolatilityRequest;
};
export declare const QueryOracleVolatilityResponse: {
    encode(message: QueryOracleVolatilityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOracleVolatilityResponse;
    fromPartial(object: Partial<QueryOracleVolatilityResponse>): QueryOracleVolatilityResponse;
};
export declare const QueryOracleProvidersInfoRequest: {
    encode(_: QueryOracleProvidersInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryOracleProvidersInfoRequest;
    fromPartial(_: Partial<QueryOracleProvidersInfoRequest>): QueryOracleProvidersInfoRequest;
};
export declare const QueryOracleProvidersInfoResponse: {
    encode(message: QueryOracleProvidersInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOracleProvidersInfoResponse;
    fromPartial(object: Partial<QueryOracleProvidersInfoResponse>): QueryOracleProvidersInfoResponse;
};
export declare const QueryOracleProviderPricesRequest: {
    encode(message: QueryOracleProviderPricesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOracleProviderPricesRequest;
    fromPartial(object: Partial<QueryOracleProviderPricesRequest>): QueryOracleProviderPricesRequest;
};
export declare const QueryOracleProviderPricesResponse: {
    encode(message: QueryOracleProviderPricesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOracleProviderPricesResponse;
    fromPartial(object: Partial<QueryOracleProviderPricesResponse>): QueryOracleProviderPricesResponse;
};
export declare const QueryOraclePriceRequest: {
    encode(message: QueryOraclePriceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOraclePriceRequest;
    fromPartial(object: Partial<QueryOraclePriceRequest>): QueryOraclePriceRequest;
};
export declare const PricePairState: {
    encode(message: PricePairState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PricePairState;
    fromPartial(object: Partial<PricePairState>): PricePairState;
};
export declare const QueryOraclePriceResponse: {
    encode(message: QueryOraclePriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOraclePriceResponse;
    fromPartial(object: Partial<QueryOraclePriceResponse>): QueryOraclePriceResponse;
};
