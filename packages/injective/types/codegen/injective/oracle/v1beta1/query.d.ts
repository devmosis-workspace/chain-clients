import { OracleType, OracleInfo, OracleInfoAmino, OracleInfoSDKType, PythPriceState, PythPriceStateAmino, PythPriceStateSDKType, Params, ParamsAmino, ParamsSDKType, BandPriceState, BandPriceStateAmino, BandPriceStateSDKType, PriceFeedState, PriceFeedStateAmino, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateAmino, CoinbasePriceStateSDKType, PriceState, PriceStateAmino, PriceStateSDKType, PriceRecords, PriceRecordsAmino, PriceRecordsSDKType, MetadataStatistics, MetadataStatisticsAmino, MetadataStatisticsSDKType, PriceRecord, PriceRecordAmino, PriceRecordSDKType, ProviderInfo, ProviderInfoAmino, ProviderInfoSDKType, ProviderState, ProviderStateAmino, ProviderStateSDKType } from "./oracle";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
export interface QueryPythPriceRequest {
    priceId: string;
}
export interface QueryPythPriceRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryPythPriceRequest";
    value: Uint8Array;
}
export interface QueryPythPriceRequestAmino {
    price_id: string;
}
export interface QueryPythPriceRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryPythPriceRequest";
    value: QueryPythPriceRequestAmino;
}
export interface QueryPythPriceRequestSDKType {
    price_id: string;
}
export interface QueryPythPriceResponse {
    priceState: PythPriceState;
}
export interface QueryPythPriceResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryPythPriceResponse";
    value: Uint8Array;
}
export interface QueryPythPriceResponseAmino {
    price_state?: PythPriceStateAmino;
}
export interface QueryPythPriceResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryPythPriceResponse";
    value: QueryPythPriceResponseAmino;
}
export interface QueryPythPriceResponseSDKType {
    price_state: PythPriceStateSDKType;
}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
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
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryOracleParamsResponse is the response type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryOracleParamsResponse is the response type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersRequest {
}
export interface QueryBandRelayersRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest";
    value: Uint8Array;
}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersRequestAmino {
}
export interface QueryBandRelayersRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryBandRelayersRequest";
    value: QueryBandRelayersRequestAmino;
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
export interface QueryBandRelayersResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse";
    value: Uint8Array;
}
/**
 * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersResponseAmino {
    /**
     * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
     * method.
     */
    relayers: string[];
}
export interface QueryBandRelayersResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryBandRelayersResponse";
    value: QueryBandRelayersResponseAmino;
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
export interface QueryBandPriceStatesRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest";
    value: Uint8Array;
}
/**
 * QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates
 * RPC method.
 */
export interface QueryBandPriceStatesRequestAmino {
}
export interface QueryBandPriceStatesRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest";
    value: QueryBandPriceStatesRequestAmino;
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
export interface QueryBandPriceStatesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse";
    value: Uint8Array;
}
/**
 * QueryBandPriceStatesResponse is the response type for the
 * Query/BandPriceStates RPC method.
 */
export interface QueryBandPriceStatesResponseAmino {
    price_states: BandPriceStateAmino[];
}
export interface QueryBandPriceStatesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse";
    value: QueryBandPriceStatesResponseAmino;
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
export interface QueryBandIBCPriceStatesRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest";
    value: Uint8Array;
}
/**
 * QueryBandIBCPriceStatesRequest is the request type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesRequestAmino {
}
export interface QueryBandIBCPriceStatesRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest";
    value: QueryBandIBCPriceStatesRequestAmino;
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
export interface QueryBandIBCPriceStatesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse";
    value: Uint8Array;
}
/**
 * QueryBandIBCPriceStatesResponse is the response type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesResponseAmino {
    price_states: BandPriceStateAmino[];
}
export interface QueryBandIBCPriceStatesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse";
    value: QueryBandIBCPriceStatesResponseAmino;
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
export interface QueryPriceFeedPriceStatesRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest";
    value: Uint8Array;
}
/**
 * QueryPriceFeedPriceStatesRequest is the request type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesRequestAmino {
}
export interface QueryPriceFeedPriceStatesRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest";
    value: QueryPriceFeedPriceStatesRequestAmino;
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
export interface QueryPriceFeedPriceStatesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse";
    value: Uint8Array;
}
/**
 * QueryPriceFeedPriceStatesResponse is the response type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesResponseAmino {
    price_states: PriceFeedStateAmino[];
}
export interface QueryPriceFeedPriceStatesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse";
    value: QueryPriceFeedPriceStatesResponseAmino;
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
export interface QueryCoinbasePriceStatesRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest";
    value: Uint8Array;
}
/**
 * QueryCoinbasePriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesRequestAmino {
}
export interface QueryCoinbasePriceStatesRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest";
    value: QueryCoinbasePriceStatesRequestAmino;
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
export interface QueryCoinbasePriceStatesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse";
    value: Uint8Array;
}
/**
 * QueryCoinbasePriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesResponseAmino {
    price_states: CoinbasePriceStateAmino[];
}
export interface QueryCoinbasePriceStatesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse";
    value: QueryCoinbasePriceStatesResponseAmino;
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
export interface QueryPythPriceStatesRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesRequest";
    value: Uint8Array;
}
/**
 * QueryPythPriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesRequestAmino {
}
export interface QueryPythPriceStatesRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryPythPriceStatesRequest";
    value: QueryPythPriceStatesRequestAmino;
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
export interface QueryPythPriceStatesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesResponse";
    value: Uint8Array;
}
/**
 * QueryPythPriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesResponseAmino {
    price_states: PythPriceStateAmino[];
}
export interface QueryPythPriceStatesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryPythPriceStatesResponse";
    value: QueryPythPriceStatesResponseAmino;
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
export interface QueryProviderPriceStateRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest";
    value: Uint8Array;
}
/**
 * QueryProviderPriceStateRequest is the request type for the
 * Query/ProviderPriceState RPC method.
 */
export interface QueryProviderPriceStateRequestAmino {
    provider: string;
    symbol: string;
}
export interface QueryProviderPriceStateRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest";
    value: QueryProviderPriceStateRequestAmino;
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
    priceState: PriceState;
}
export interface QueryProviderPriceStateResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse";
    value: Uint8Array;
}
/**
 * QueryProviderPriceStatesResponse is the response type for the
 * Query/ProviderPriceStates RPC method.
 */
export interface QueryProviderPriceStateResponseAmino {
    /**
     * QueryProviderPriceStatesResponse is the response type for the
     * Query/ProviderPriceStates RPC method.
     */
    price_state?: PriceStateAmino;
}
export interface QueryProviderPriceStateResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse";
    value: QueryProviderPriceStateResponseAmino;
}
/**
 * QueryProviderPriceStatesResponse is the response type for the
 * Query/ProviderPriceStates RPC method.
 */
export interface QueryProviderPriceStateResponseSDKType {
    price_state: PriceStateSDKType;
}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest";
    value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
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
    state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse";
    value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseAmino {
    /**
     * QueryModuleStateResponse is the response type for the Query/OracleModuleState
     * RPC method.
     */
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export interface QueryHistoricalPriceRecordsRequest {
    oracle: OracleType;
    symbolId: string;
}
export interface QueryHistoricalPriceRecordsRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest";
    value: Uint8Array;
}
export interface QueryHistoricalPriceRecordsRequestAmino {
    oracle: OracleType;
    symbol_id: string;
}
export interface QueryHistoricalPriceRecordsRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest";
    value: QueryHistoricalPriceRecordsRequestAmino;
}
export interface QueryHistoricalPriceRecordsRequestSDKType {
    oracle: OracleType;
    symbol_id: string;
}
export interface QueryHistoricalPriceRecordsResponse {
    priceRecords: PriceRecords[];
}
export interface QueryHistoricalPriceRecordsResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse";
    value: Uint8Array;
}
export interface QueryHistoricalPriceRecordsResponseAmino {
    price_records: PriceRecordsAmino[];
}
export interface QueryHistoricalPriceRecordsResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse";
    value: QueryHistoricalPriceRecordsResponseAmino;
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
    maxAge: bigint;
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
export interface OracleHistoryOptionsProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions";
    value: Uint8Array;
}
export interface OracleHistoryOptionsAmino {
    /**
     * MaxAge restricts the oracle price records oldest age in seconds from the
     * current block time to consider. A value of 0 means use all the records
     * present on the chain.
     */
    max_age: string;
    /**
     * If IncludeRawHistory is true, the raw underlying data used for the
     * computation is included in the response
     */
    include_raw_history: boolean;
    /**
     * If IncludeMetadata is true, metadata on the computation is included in the
     * response
     */
    include_metadata: boolean;
}
export interface OracleHistoryOptionsAminoMsg {
    type: "/injective.oracle.v1beta1.OracleHistoryOptions";
    value: OracleHistoryOptionsAmino;
}
export interface OracleHistoryOptionsSDKType {
    max_age: bigint;
    include_raw_history: boolean;
    include_metadata: boolean;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityRequest {
    baseInfo: OracleInfo;
    quoteInfo: OracleInfo;
    oracleHistoryOptions: OracleHistoryOptions;
}
export interface QueryOracleVolatilityRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest";
    value: Uint8Array;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityRequestAmino {
    base_info?: OracleInfoAmino;
    quote_info?: OracleInfoAmino;
    oracle_history_options?: OracleHistoryOptionsAmino;
}
export interface QueryOracleVolatilityRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest";
    value: QueryOracleVolatilityRequestAmino;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityRequestSDKType {
    base_info: OracleInfoSDKType;
    quote_info: OracleInfoSDKType;
    oracle_history_options: OracleHistoryOptionsSDKType;
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityResponse {
    volatility: string;
    historyMetadata: MetadataStatistics;
    rawHistory: PriceRecord[];
}
export interface QueryOracleVolatilityResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse";
    value: Uint8Array;
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityResponseAmino {
    volatility: string;
    history_metadata?: MetadataStatisticsAmino;
    raw_history: PriceRecordAmino[];
}
export interface QueryOracleVolatilityResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse";
    value: QueryOracleVolatilityResponseAmino;
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityResponseSDKType {
    volatility: string;
    history_metadata: MetadataStatisticsSDKType;
    raw_history: PriceRecordSDKType[];
}
export interface QueryOracleProvidersInfoRequest {
}
export interface QueryOracleProvidersInfoRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest";
    value: Uint8Array;
}
export interface QueryOracleProvidersInfoRequestAmino {
}
export interface QueryOracleProvidersInfoRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest";
    value: QueryOracleProvidersInfoRequestAmino;
}
export interface QueryOracleProvidersInfoRequestSDKType {
}
export interface QueryOracleProvidersInfoResponse {
    providers: ProviderInfo[];
}
export interface QueryOracleProvidersInfoResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse";
    value: Uint8Array;
}
export interface QueryOracleProvidersInfoResponseAmino {
    providers: ProviderInfoAmino[];
}
export interface QueryOracleProvidersInfoResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse";
    value: QueryOracleProvidersInfoResponseAmino;
}
export interface QueryOracleProvidersInfoResponseSDKType {
    providers: ProviderInfoSDKType[];
}
export interface QueryOracleProviderPricesRequest {
    provider: string;
}
export interface QueryOracleProviderPricesRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest";
    value: Uint8Array;
}
export interface QueryOracleProviderPricesRequestAmino {
    provider: string;
}
export interface QueryOracleProviderPricesRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest";
    value: QueryOracleProviderPricesRequestAmino;
}
export interface QueryOracleProviderPricesRequestSDKType {
    provider: string;
}
export interface QueryOracleProviderPricesResponse {
    providerState: ProviderState[];
}
export interface QueryOracleProviderPricesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse";
    value: Uint8Array;
}
export interface QueryOracleProviderPricesResponseAmino {
    providerState: ProviderStateAmino[];
}
export interface QueryOracleProviderPricesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse";
    value: QueryOracleProviderPricesResponseAmino;
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
export interface QueryOraclePriceRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceRequest";
    value: Uint8Array;
}
/**
 * QueryOraclePriceRequest is the request type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceRequestAmino {
    oracle_type: OracleType;
    base: string;
    quote: string;
}
export interface QueryOraclePriceRequestAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOraclePriceRequest";
    value: QueryOraclePriceRequestAmino;
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
    baseTimestamp: bigint;
    quoteTimestamp: bigint;
}
export interface PricePairStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PricePairState";
    value: Uint8Array;
}
export interface PricePairStateAmino {
    pair_price: string;
    base_price: string;
    quote_price: string;
    base_cumulative_price: string;
    quote_cumulative_price: string;
    base_timestamp: string;
    quote_timestamp: string;
}
export interface PricePairStateAminoMsg {
    type: "/injective.oracle.v1beta1.PricePairState";
    value: PricePairStateAmino;
}
export interface PricePairStateSDKType {
    pair_price: string;
    base_price: string;
    quote_price: string;
    base_cumulative_price: string;
    quote_cumulative_price: string;
    base_timestamp: bigint;
    quote_timestamp: bigint;
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
    pricePairState: PricePairState;
}
export interface QueryOraclePriceResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceResponse";
    value: Uint8Array;
}
/**
 * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceResponseAmino {
    /**
     * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
     * method.
     */
    price_pair_state?: PricePairStateAmino;
}
export interface QueryOraclePriceResponseAminoMsg {
    type: "/injective.oracle.v1beta1.QueryOraclePriceResponse";
    value: QueryOraclePriceResponseAmino;
}
/**
 * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceResponseSDKType {
    price_pair_state: PricePairStateSDKType;
}
export declare const QueryPythPriceRequest: {
    typeUrl: string;
    encode(message: QueryPythPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPythPriceRequest;
    fromPartial(object: Partial<QueryPythPriceRequest>): QueryPythPriceRequest;
    fromAmino(object: QueryPythPriceRequestAmino): QueryPythPriceRequest;
    toAmino(message: QueryPythPriceRequest): QueryPythPriceRequestAmino;
    fromAminoMsg(object: QueryPythPriceRequestAminoMsg): QueryPythPriceRequest;
    fromProtoMsg(message: QueryPythPriceRequestProtoMsg): QueryPythPriceRequest;
    toProto(message: QueryPythPriceRequest): Uint8Array;
    toProtoMsg(message: QueryPythPriceRequest): QueryPythPriceRequestProtoMsg;
};
export declare const QueryPythPriceResponse: {
    typeUrl: string;
    encode(message: QueryPythPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPythPriceResponse;
    fromPartial(object: Partial<QueryPythPriceResponse>): QueryPythPriceResponse;
    fromAmino(object: QueryPythPriceResponseAmino): QueryPythPriceResponse;
    toAmino(message: QueryPythPriceResponse): QueryPythPriceResponseAmino;
    fromAminoMsg(object: QueryPythPriceResponseAminoMsg): QueryPythPriceResponse;
    fromProtoMsg(message: QueryPythPriceResponseProtoMsg): QueryPythPriceResponse;
    toProto(message: QueryPythPriceResponse): Uint8Array;
    toProtoMsg(message: QueryPythPriceResponse): QueryPythPriceResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryBandRelayersRequest: {
    typeUrl: string;
    encode(_: QueryBandRelayersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBandRelayersRequest;
    fromPartial(_: Partial<QueryBandRelayersRequest>): QueryBandRelayersRequest;
    fromAmino(_: QueryBandRelayersRequestAmino): QueryBandRelayersRequest;
    toAmino(_: QueryBandRelayersRequest): QueryBandRelayersRequestAmino;
    fromAminoMsg(object: QueryBandRelayersRequestAminoMsg): QueryBandRelayersRequest;
    fromProtoMsg(message: QueryBandRelayersRequestProtoMsg): QueryBandRelayersRequest;
    toProto(message: QueryBandRelayersRequest): Uint8Array;
    toProtoMsg(message: QueryBandRelayersRequest): QueryBandRelayersRequestProtoMsg;
};
export declare const QueryBandRelayersResponse: {
    typeUrl: string;
    encode(message: QueryBandRelayersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBandRelayersResponse;
    fromPartial(object: Partial<QueryBandRelayersResponse>): QueryBandRelayersResponse;
    fromAmino(object: QueryBandRelayersResponseAmino): QueryBandRelayersResponse;
    toAmino(message: QueryBandRelayersResponse): QueryBandRelayersResponseAmino;
    fromAminoMsg(object: QueryBandRelayersResponseAminoMsg): QueryBandRelayersResponse;
    fromProtoMsg(message: QueryBandRelayersResponseProtoMsg): QueryBandRelayersResponse;
    toProto(message: QueryBandRelayersResponse): Uint8Array;
    toProtoMsg(message: QueryBandRelayersResponse): QueryBandRelayersResponseProtoMsg;
};
export declare const QueryBandPriceStatesRequest: {
    typeUrl: string;
    encode(_: QueryBandPriceStatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBandPriceStatesRequest;
    fromPartial(_: Partial<QueryBandPriceStatesRequest>): QueryBandPriceStatesRequest;
    fromAmino(_: QueryBandPriceStatesRequestAmino): QueryBandPriceStatesRequest;
    toAmino(_: QueryBandPriceStatesRequest): QueryBandPriceStatesRequestAmino;
    fromAminoMsg(object: QueryBandPriceStatesRequestAminoMsg): QueryBandPriceStatesRequest;
    fromProtoMsg(message: QueryBandPriceStatesRequestProtoMsg): QueryBandPriceStatesRequest;
    toProto(message: QueryBandPriceStatesRequest): Uint8Array;
    toProtoMsg(message: QueryBandPriceStatesRequest): QueryBandPriceStatesRequestProtoMsg;
};
export declare const QueryBandPriceStatesResponse: {
    typeUrl: string;
    encode(message: QueryBandPriceStatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBandPriceStatesResponse;
    fromPartial(object: Partial<QueryBandPriceStatesResponse>): QueryBandPriceStatesResponse;
    fromAmino(object: QueryBandPriceStatesResponseAmino): QueryBandPriceStatesResponse;
    toAmino(message: QueryBandPriceStatesResponse): QueryBandPriceStatesResponseAmino;
    fromAminoMsg(object: QueryBandPriceStatesResponseAminoMsg): QueryBandPriceStatesResponse;
    fromProtoMsg(message: QueryBandPriceStatesResponseProtoMsg): QueryBandPriceStatesResponse;
    toProto(message: QueryBandPriceStatesResponse): Uint8Array;
    toProtoMsg(message: QueryBandPriceStatesResponse): QueryBandPriceStatesResponseProtoMsg;
};
export declare const QueryBandIBCPriceStatesRequest: {
    typeUrl: string;
    encode(_: QueryBandIBCPriceStatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBandIBCPriceStatesRequest;
    fromPartial(_: Partial<QueryBandIBCPriceStatesRequest>): QueryBandIBCPriceStatesRequest;
    fromAmino(_: QueryBandIBCPriceStatesRequestAmino): QueryBandIBCPriceStatesRequest;
    toAmino(_: QueryBandIBCPriceStatesRequest): QueryBandIBCPriceStatesRequestAmino;
    fromAminoMsg(object: QueryBandIBCPriceStatesRequestAminoMsg): QueryBandIBCPriceStatesRequest;
    fromProtoMsg(message: QueryBandIBCPriceStatesRequestProtoMsg): QueryBandIBCPriceStatesRequest;
    toProto(message: QueryBandIBCPriceStatesRequest): Uint8Array;
    toProtoMsg(message: QueryBandIBCPriceStatesRequest): QueryBandIBCPriceStatesRequestProtoMsg;
};
export declare const QueryBandIBCPriceStatesResponse: {
    typeUrl: string;
    encode(message: QueryBandIBCPriceStatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBandIBCPriceStatesResponse;
    fromPartial(object: Partial<QueryBandIBCPriceStatesResponse>): QueryBandIBCPriceStatesResponse;
    fromAmino(object: QueryBandIBCPriceStatesResponseAmino): QueryBandIBCPriceStatesResponse;
    toAmino(message: QueryBandIBCPriceStatesResponse): QueryBandIBCPriceStatesResponseAmino;
    fromAminoMsg(object: QueryBandIBCPriceStatesResponseAminoMsg): QueryBandIBCPriceStatesResponse;
    fromProtoMsg(message: QueryBandIBCPriceStatesResponseProtoMsg): QueryBandIBCPriceStatesResponse;
    toProto(message: QueryBandIBCPriceStatesResponse): Uint8Array;
    toProtoMsg(message: QueryBandIBCPriceStatesResponse): QueryBandIBCPriceStatesResponseProtoMsg;
};
export declare const QueryPriceFeedPriceStatesRequest: {
    typeUrl: string;
    encode(_: QueryPriceFeedPriceStatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPriceFeedPriceStatesRequest;
    fromPartial(_: Partial<QueryPriceFeedPriceStatesRequest>): QueryPriceFeedPriceStatesRequest;
    fromAmino(_: QueryPriceFeedPriceStatesRequestAmino): QueryPriceFeedPriceStatesRequest;
    toAmino(_: QueryPriceFeedPriceStatesRequest): QueryPriceFeedPriceStatesRequestAmino;
    fromAminoMsg(object: QueryPriceFeedPriceStatesRequestAminoMsg): QueryPriceFeedPriceStatesRequest;
    fromProtoMsg(message: QueryPriceFeedPriceStatesRequestProtoMsg): QueryPriceFeedPriceStatesRequest;
    toProto(message: QueryPriceFeedPriceStatesRequest): Uint8Array;
    toProtoMsg(message: QueryPriceFeedPriceStatesRequest): QueryPriceFeedPriceStatesRequestProtoMsg;
};
export declare const QueryPriceFeedPriceStatesResponse: {
    typeUrl: string;
    encode(message: QueryPriceFeedPriceStatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPriceFeedPriceStatesResponse;
    fromPartial(object: Partial<QueryPriceFeedPriceStatesResponse>): QueryPriceFeedPriceStatesResponse;
    fromAmino(object: QueryPriceFeedPriceStatesResponseAmino): QueryPriceFeedPriceStatesResponse;
    toAmino(message: QueryPriceFeedPriceStatesResponse): QueryPriceFeedPriceStatesResponseAmino;
    fromAminoMsg(object: QueryPriceFeedPriceStatesResponseAminoMsg): QueryPriceFeedPriceStatesResponse;
    fromProtoMsg(message: QueryPriceFeedPriceStatesResponseProtoMsg): QueryPriceFeedPriceStatesResponse;
    toProto(message: QueryPriceFeedPriceStatesResponse): Uint8Array;
    toProtoMsg(message: QueryPriceFeedPriceStatesResponse): QueryPriceFeedPriceStatesResponseProtoMsg;
};
export declare const QueryCoinbasePriceStatesRequest: {
    typeUrl: string;
    encode(_: QueryCoinbasePriceStatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCoinbasePriceStatesRequest;
    fromPartial(_: Partial<QueryCoinbasePriceStatesRequest>): QueryCoinbasePriceStatesRequest;
    fromAmino(_: QueryCoinbasePriceStatesRequestAmino): QueryCoinbasePriceStatesRequest;
    toAmino(_: QueryCoinbasePriceStatesRequest): QueryCoinbasePriceStatesRequestAmino;
    fromAminoMsg(object: QueryCoinbasePriceStatesRequestAminoMsg): QueryCoinbasePriceStatesRequest;
    fromProtoMsg(message: QueryCoinbasePriceStatesRequestProtoMsg): QueryCoinbasePriceStatesRequest;
    toProto(message: QueryCoinbasePriceStatesRequest): Uint8Array;
    toProtoMsg(message: QueryCoinbasePriceStatesRequest): QueryCoinbasePriceStatesRequestProtoMsg;
};
export declare const QueryCoinbasePriceStatesResponse: {
    typeUrl: string;
    encode(message: QueryCoinbasePriceStatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCoinbasePriceStatesResponse;
    fromPartial(object: Partial<QueryCoinbasePriceStatesResponse>): QueryCoinbasePriceStatesResponse;
    fromAmino(object: QueryCoinbasePriceStatesResponseAmino): QueryCoinbasePriceStatesResponse;
    toAmino(message: QueryCoinbasePriceStatesResponse): QueryCoinbasePriceStatesResponseAmino;
    fromAminoMsg(object: QueryCoinbasePriceStatesResponseAminoMsg): QueryCoinbasePriceStatesResponse;
    fromProtoMsg(message: QueryCoinbasePriceStatesResponseProtoMsg): QueryCoinbasePriceStatesResponse;
    toProto(message: QueryCoinbasePriceStatesResponse): Uint8Array;
    toProtoMsg(message: QueryCoinbasePriceStatesResponse): QueryCoinbasePriceStatesResponseProtoMsg;
};
export declare const QueryPythPriceStatesRequest: {
    typeUrl: string;
    encode(_: QueryPythPriceStatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPythPriceStatesRequest;
    fromPartial(_: Partial<QueryPythPriceStatesRequest>): QueryPythPriceStatesRequest;
    fromAmino(_: QueryPythPriceStatesRequestAmino): QueryPythPriceStatesRequest;
    toAmino(_: QueryPythPriceStatesRequest): QueryPythPriceStatesRequestAmino;
    fromAminoMsg(object: QueryPythPriceStatesRequestAminoMsg): QueryPythPriceStatesRequest;
    fromProtoMsg(message: QueryPythPriceStatesRequestProtoMsg): QueryPythPriceStatesRequest;
    toProto(message: QueryPythPriceStatesRequest): Uint8Array;
    toProtoMsg(message: QueryPythPriceStatesRequest): QueryPythPriceStatesRequestProtoMsg;
};
export declare const QueryPythPriceStatesResponse: {
    typeUrl: string;
    encode(message: QueryPythPriceStatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPythPriceStatesResponse;
    fromPartial(object: Partial<QueryPythPriceStatesResponse>): QueryPythPriceStatesResponse;
    fromAmino(object: QueryPythPriceStatesResponseAmino): QueryPythPriceStatesResponse;
    toAmino(message: QueryPythPriceStatesResponse): QueryPythPriceStatesResponseAmino;
    fromAminoMsg(object: QueryPythPriceStatesResponseAminoMsg): QueryPythPriceStatesResponse;
    fromProtoMsg(message: QueryPythPriceStatesResponseProtoMsg): QueryPythPriceStatesResponse;
    toProto(message: QueryPythPriceStatesResponse): Uint8Array;
    toProtoMsg(message: QueryPythPriceStatesResponse): QueryPythPriceStatesResponseProtoMsg;
};
export declare const QueryProviderPriceStateRequest: {
    typeUrl: string;
    encode(message: QueryProviderPriceStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderPriceStateRequest;
    fromPartial(object: Partial<QueryProviderPriceStateRequest>): QueryProviderPriceStateRequest;
    fromAmino(object: QueryProviderPriceStateRequestAmino): QueryProviderPriceStateRequest;
    toAmino(message: QueryProviderPriceStateRequest): QueryProviderPriceStateRequestAmino;
    fromAminoMsg(object: QueryProviderPriceStateRequestAminoMsg): QueryProviderPriceStateRequest;
    fromProtoMsg(message: QueryProviderPriceStateRequestProtoMsg): QueryProviderPriceStateRequest;
    toProto(message: QueryProviderPriceStateRequest): Uint8Array;
    toProtoMsg(message: QueryProviderPriceStateRequest): QueryProviderPriceStateRequestProtoMsg;
};
export declare const QueryProviderPriceStateResponse: {
    typeUrl: string;
    encode(message: QueryProviderPriceStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderPriceStateResponse;
    fromPartial(object: Partial<QueryProviderPriceStateResponse>): QueryProviderPriceStateResponse;
    fromAmino(object: QueryProviderPriceStateResponseAmino): QueryProviderPriceStateResponse;
    toAmino(message: QueryProviderPriceStateResponse): QueryProviderPriceStateResponseAmino;
    fromAminoMsg(object: QueryProviderPriceStateResponseAminoMsg): QueryProviderPriceStateResponse;
    fromProtoMsg(message: QueryProviderPriceStateResponseProtoMsg): QueryProviderPriceStateResponse;
    toProto(message: QueryProviderPriceStateResponse): Uint8Array;
    toProtoMsg(message: QueryProviderPriceStateResponse): QueryProviderPriceStateResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
export declare const QueryHistoricalPriceRecordsRequest: {
    typeUrl: string;
    encode(message: QueryHistoricalPriceRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryHistoricalPriceRecordsRequest;
    fromPartial(object: Partial<QueryHistoricalPriceRecordsRequest>): QueryHistoricalPriceRecordsRequest;
    fromAmino(object: QueryHistoricalPriceRecordsRequestAmino): QueryHistoricalPriceRecordsRequest;
    toAmino(message: QueryHistoricalPriceRecordsRequest): QueryHistoricalPriceRecordsRequestAmino;
    fromAminoMsg(object: QueryHistoricalPriceRecordsRequestAminoMsg): QueryHistoricalPriceRecordsRequest;
    fromProtoMsg(message: QueryHistoricalPriceRecordsRequestProtoMsg): QueryHistoricalPriceRecordsRequest;
    toProto(message: QueryHistoricalPriceRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryHistoricalPriceRecordsRequest): QueryHistoricalPriceRecordsRequestProtoMsg;
};
export declare const QueryHistoricalPriceRecordsResponse: {
    typeUrl: string;
    encode(message: QueryHistoricalPriceRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryHistoricalPriceRecordsResponse;
    fromPartial(object: Partial<QueryHistoricalPriceRecordsResponse>): QueryHistoricalPriceRecordsResponse;
    fromAmino(object: QueryHistoricalPriceRecordsResponseAmino): QueryHistoricalPriceRecordsResponse;
    toAmino(message: QueryHistoricalPriceRecordsResponse): QueryHistoricalPriceRecordsResponseAmino;
    fromAminoMsg(object: QueryHistoricalPriceRecordsResponseAminoMsg): QueryHistoricalPriceRecordsResponse;
    fromProtoMsg(message: QueryHistoricalPriceRecordsResponseProtoMsg): QueryHistoricalPriceRecordsResponse;
    toProto(message: QueryHistoricalPriceRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryHistoricalPriceRecordsResponse): QueryHistoricalPriceRecordsResponseProtoMsg;
};
export declare const OracleHistoryOptions: {
    typeUrl: string;
    encode(message: OracleHistoryOptions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OracleHistoryOptions;
    fromPartial(object: Partial<OracleHistoryOptions>): OracleHistoryOptions;
    fromAmino(object: OracleHistoryOptionsAmino): OracleHistoryOptions;
    toAmino(message: OracleHistoryOptions): OracleHistoryOptionsAmino;
    fromAminoMsg(object: OracleHistoryOptionsAminoMsg): OracleHistoryOptions;
    fromProtoMsg(message: OracleHistoryOptionsProtoMsg): OracleHistoryOptions;
    toProto(message: OracleHistoryOptions): Uint8Array;
    toProtoMsg(message: OracleHistoryOptions): OracleHistoryOptionsProtoMsg;
};
export declare const QueryOracleVolatilityRequest: {
    typeUrl: string;
    encode(message: QueryOracleVolatilityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOracleVolatilityRequest;
    fromPartial(object: Partial<QueryOracleVolatilityRequest>): QueryOracleVolatilityRequest;
    fromAmino(object: QueryOracleVolatilityRequestAmino): QueryOracleVolatilityRequest;
    toAmino(message: QueryOracleVolatilityRequest): QueryOracleVolatilityRequestAmino;
    fromAminoMsg(object: QueryOracleVolatilityRequestAminoMsg): QueryOracleVolatilityRequest;
    fromProtoMsg(message: QueryOracleVolatilityRequestProtoMsg): QueryOracleVolatilityRequest;
    toProto(message: QueryOracleVolatilityRequest): Uint8Array;
    toProtoMsg(message: QueryOracleVolatilityRequest): QueryOracleVolatilityRequestProtoMsg;
};
export declare const QueryOracleVolatilityResponse: {
    typeUrl: string;
    encode(message: QueryOracleVolatilityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOracleVolatilityResponse;
    fromPartial(object: Partial<QueryOracleVolatilityResponse>): QueryOracleVolatilityResponse;
    fromAmino(object: QueryOracleVolatilityResponseAmino): QueryOracleVolatilityResponse;
    toAmino(message: QueryOracleVolatilityResponse): QueryOracleVolatilityResponseAmino;
    fromAminoMsg(object: QueryOracleVolatilityResponseAminoMsg): QueryOracleVolatilityResponse;
    fromProtoMsg(message: QueryOracleVolatilityResponseProtoMsg): QueryOracleVolatilityResponse;
    toProto(message: QueryOracleVolatilityResponse): Uint8Array;
    toProtoMsg(message: QueryOracleVolatilityResponse): QueryOracleVolatilityResponseProtoMsg;
};
export declare const QueryOracleProvidersInfoRequest: {
    typeUrl: string;
    encode(_: QueryOracleProvidersInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryOracleProvidersInfoRequest;
    fromPartial(_: Partial<QueryOracleProvidersInfoRequest>): QueryOracleProvidersInfoRequest;
    fromAmino(_: QueryOracleProvidersInfoRequestAmino): QueryOracleProvidersInfoRequest;
    toAmino(_: QueryOracleProvidersInfoRequest): QueryOracleProvidersInfoRequestAmino;
    fromAminoMsg(object: QueryOracleProvidersInfoRequestAminoMsg): QueryOracleProvidersInfoRequest;
    fromProtoMsg(message: QueryOracleProvidersInfoRequestProtoMsg): QueryOracleProvidersInfoRequest;
    toProto(message: QueryOracleProvidersInfoRequest): Uint8Array;
    toProtoMsg(message: QueryOracleProvidersInfoRequest): QueryOracleProvidersInfoRequestProtoMsg;
};
export declare const QueryOracleProvidersInfoResponse: {
    typeUrl: string;
    encode(message: QueryOracleProvidersInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOracleProvidersInfoResponse;
    fromPartial(object: Partial<QueryOracleProvidersInfoResponse>): QueryOracleProvidersInfoResponse;
    fromAmino(object: QueryOracleProvidersInfoResponseAmino): QueryOracleProvidersInfoResponse;
    toAmino(message: QueryOracleProvidersInfoResponse): QueryOracleProvidersInfoResponseAmino;
    fromAminoMsg(object: QueryOracleProvidersInfoResponseAminoMsg): QueryOracleProvidersInfoResponse;
    fromProtoMsg(message: QueryOracleProvidersInfoResponseProtoMsg): QueryOracleProvidersInfoResponse;
    toProto(message: QueryOracleProvidersInfoResponse): Uint8Array;
    toProtoMsg(message: QueryOracleProvidersInfoResponse): QueryOracleProvidersInfoResponseProtoMsg;
};
export declare const QueryOracleProviderPricesRequest: {
    typeUrl: string;
    encode(message: QueryOracleProviderPricesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOracleProviderPricesRequest;
    fromPartial(object: Partial<QueryOracleProviderPricesRequest>): QueryOracleProviderPricesRequest;
    fromAmino(object: QueryOracleProviderPricesRequestAmino): QueryOracleProviderPricesRequest;
    toAmino(message: QueryOracleProviderPricesRequest): QueryOracleProviderPricesRequestAmino;
    fromAminoMsg(object: QueryOracleProviderPricesRequestAminoMsg): QueryOracleProviderPricesRequest;
    fromProtoMsg(message: QueryOracleProviderPricesRequestProtoMsg): QueryOracleProviderPricesRequest;
    toProto(message: QueryOracleProviderPricesRequest): Uint8Array;
    toProtoMsg(message: QueryOracleProviderPricesRequest): QueryOracleProviderPricesRequestProtoMsg;
};
export declare const QueryOracleProviderPricesResponse: {
    typeUrl: string;
    encode(message: QueryOracleProviderPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOracleProviderPricesResponse;
    fromPartial(object: Partial<QueryOracleProviderPricesResponse>): QueryOracleProviderPricesResponse;
    fromAmino(object: QueryOracleProviderPricesResponseAmino): QueryOracleProviderPricesResponse;
    toAmino(message: QueryOracleProviderPricesResponse): QueryOracleProviderPricesResponseAmino;
    fromAminoMsg(object: QueryOracleProviderPricesResponseAminoMsg): QueryOracleProviderPricesResponse;
    fromProtoMsg(message: QueryOracleProviderPricesResponseProtoMsg): QueryOracleProviderPricesResponse;
    toProto(message: QueryOracleProviderPricesResponse): Uint8Array;
    toProtoMsg(message: QueryOracleProviderPricesResponse): QueryOracleProviderPricesResponseProtoMsg;
};
export declare const QueryOraclePriceRequest: {
    typeUrl: string;
    encode(message: QueryOraclePriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOraclePriceRequest;
    fromPartial(object: Partial<QueryOraclePriceRequest>): QueryOraclePriceRequest;
    fromAmino(object: QueryOraclePriceRequestAmino): QueryOraclePriceRequest;
    toAmino(message: QueryOraclePriceRequest): QueryOraclePriceRequestAmino;
    fromAminoMsg(object: QueryOraclePriceRequestAminoMsg): QueryOraclePriceRequest;
    fromProtoMsg(message: QueryOraclePriceRequestProtoMsg): QueryOraclePriceRequest;
    toProto(message: QueryOraclePriceRequest): Uint8Array;
    toProtoMsg(message: QueryOraclePriceRequest): QueryOraclePriceRequestProtoMsg;
};
export declare const PricePairState: {
    typeUrl: string;
    encode(message: PricePairState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PricePairState;
    fromPartial(object: Partial<PricePairState>): PricePairState;
    fromAmino(object: PricePairStateAmino): PricePairState;
    toAmino(message: PricePairState): PricePairStateAmino;
    fromAminoMsg(object: PricePairStateAminoMsg): PricePairState;
    fromProtoMsg(message: PricePairStateProtoMsg): PricePairState;
    toProto(message: PricePairState): Uint8Array;
    toProtoMsg(message: PricePairState): PricePairStateProtoMsg;
};
export declare const QueryOraclePriceResponse: {
    typeUrl: string;
    encode(message: QueryOraclePriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOraclePriceResponse;
    fromPartial(object: Partial<QueryOraclePriceResponse>): QueryOraclePriceResponse;
    fromAmino(object: QueryOraclePriceResponseAmino): QueryOraclePriceResponse;
    toAmino(message: QueryOraclePriceResponse): QueryOraclePriceResponseAmino;
    fromAminoMsg(object: QueryOraclePriceResponseAminoMsg): QueryOraclePriceResponse;
    fromProtoMsg(message: QueryOraclePriceResponseProtoMsg): QueryOraclePriceResponse;
    toProto(message: QueryOraclePriceResponse): Uint8Array;
    toProtoMsg(message: QueryOraclePriceResponse): QueryOraclePriceResponseProtoMsg;
};
