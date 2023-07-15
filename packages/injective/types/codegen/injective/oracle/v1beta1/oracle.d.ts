import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum OracleType {
    Unspecified = 0,
    Band = 1,
    PriceFeed = 2,
    Coinbase = 3,
    Chainlink = 4,
    Razor = 5,
    Dia = 6,
    API3 = 7,
    Uma = 8,
    Pyth = 9,
    BandIBC = 10,
    Provider = 11,
    UNRECOGNIZED = -1
}
export declare const OracleTypeSDKType: typeof OracleType;
export declare function oracleTypeFromJSON(object: any): OracleType;
export declare function oracleTypeToJSON(object: OracleType): string;
export interface Params {
    pythContract: string;
}
export interface ParamsSDKType {
    pyth_contract: string;
}
export interface OracleInfo {
    symbol: string;
    oracleType: OracleType;
    scaleFactor: number;
}
export interface OracleInfoSDKType {
    symbol: string;
    oracle_type: OracleType;
    scale_factor: number;
}
export interface ChainlinkPriceState {
    feedId: string;
    answer: string;
    timestamp: Long;
    priceState?: PriceState;
}
export interface ChainlinkPriceStateSDKType {
    feed_id: string;
    answer: string;
    timestamp: Long;
    price_state?: PriceStateSDKType;
}
export interface BandPriceState {
    symbol: string;
    rate: string;
    resolveTime: Long;
    request_ID: Long;
    priceState?: PriceState;
}
export interface BandPriceStateSDKType {
    symbol: string;
    rate: string;
    resolve_time: Long;
    request_ID: Long;
    price_state?: PriceStateSDKType;
}
export interface PriceFeedState {
    base: string;
    quote: string;
    priceState?: PriceState;
    relayers: string[];
}
export interface PriceFeedStateSDKType {
    base: string;
    quote: string;
    price_state?: PriceStateSDKType;
    relayers: string[];
}
export interface ProviderInfo {
    provider: string;
    relayers: string[];
}
export interface ProviderInfoSDKType {
    provider: string;
    relayers: string[];
}
export interface ProviderState {
    providerInfo?: ProviderInfo;
    providerPriceStates: ProviderPriceState[];
}
export interface ProviderStateSDKType {
    provider_info?: ProviderInfoSDKType;
    provider_price_states: ProviderPriceStateSDKType[];
}
export interface ProviderPriceState {
    symbol: string;
    state?: PriceState;
}
export interface ProviderPriceStateSDKType {
    symbol: string;
    state?: PriceStateSDKType;
}
export interface PriceFeedInfo {
    base: string;
    quote: string;
}
export interface PriceFeedInfoSDKType {
    base: string;
    quote: string;
}
export interface PriceFeedPrice {
    price: string;
}
export interface PriceFeedPriceSDKType {
    price: string;
}
export interface CoinbasePriceState {
    /** kind should always be "prices" */
    kind: string;
    /** timestamp of the when the price was signed by coinbase */
    timestamp: Long;
    /** the symbol of the price, e.g. BTC */
    key: string;
    /** the value of the price scaled by 1e6 */
    value: Long;
    /** the price state */
    priceState?: PriceState;
}
export interface CoinbasePriceStateSDKType {
    kind: string;
    timestamp: Long;
    key: string;
    value: Long;
    price_state?: PriceStateSDKType;
}
export interface PriceState {
    price: string;
    cumulativePrice: string;
    timestamp: Long;
}
export interface PriceStateSDKType {
    price: string;
    cumulative_price: string;
    timestamp: Long;
}
export interface PythPriceState {
    priceId: string;
    emaPrice: string;
    emaConf: string;
    conf: string;
    publishTime: Long;
    priceState?: PriceState;
}
export interface PythPriceStateSDKType {
    price_id: string;
    ema_price: string;
    ema_conf: string;
    conf: string;
    publish_time: Long;
    price_state?: PriceStateSDKType;
}
export interface BandOracleRequest {
    /** Unique Identifier for band ibc oracle request */
    requestId: Long;
    /**
     * OracleScriptID is the unique identifier of the oracle script to be
     * executed.
     */
    oracleScriptId: Long;
    /** Symbols is the list of symbols to prepare in the calldata */
    symbols: string[];
    /**
     * AskCount is the number of validators that are requested to respond to this
     * oracle request. Higher value means more security, at a higher gas cost.
     */
    askCount: Long;
    /**
     * MinCount is the minimum number of validators necessary for the request to
     * proceed to the execution phase. Higher value means more security, at the
     * cost of liveness.
     */
    minCount: Long;
    /**
     * FeeLimit is the maximum tokens that will be paid to all data source
     * providers.
     */
    feeLimit: Coin[];
    /** PrepareGas is amount of gas to pay to prepare raw requests */
    prepareGas: Long;
    /** ExecuteGas is amount of gas to reserve for executing */
    executeGas: Long;
    /**
     * MinSourceCount is the minimum number of data sources that must be used by
     * each validator
     */
    minSourceCount: Long;
}
export interface BandOracleRequestSDKType {
    request_id: Long;
    oracle_script_id: Long;
    symbols: string[];
    ask_count: Long;
    min_count: Long;
    fee_limit: CoinSDKType[];
    prepare_gas: Long;
    execute_gas: Long;
    min_source_count: Long;
}
export interface BandIBCParams {
    /** true if Band IBC should be enabled */
    bandIbcEnabled: boolean;
    /** block request interval to send Band IBC prices */
    ibcRequestInterval: Long;
    /** band IBC source channel */
    ibcSourceChannel: string;
    /** band IBC version */
    ibcVersion: string;
    /** band IBC portID */
    ibcPortId: string;
    /** legacy oracle scheme ids */
    legacyOracleIds: Long[];
}
export interface BandIBCParamsSDKType {
    band_ibc_enabled: boolean;
    ibc_request_interval: Long;
    ibc_source_channel: string;
    ibc_version: string;
    ibc_port_id: string;
    legacy_oracle_ids: Long[];
}
export interface SymbolPriceTimestamp {
    oracle: OracleType;
    symbolId: string;
    timestamp: Long;
}
export interface SymbolPriceTimestampSDKType {
    oracle: OracleType;
    symbol_id: string;
    timestamp: Long;
}
export interface LastPriceTimestamps {
    lastPriceTimestamps: SymbolPriceTimestamp[];
}
export interface LastPriceTimestampsSDKType {
    last_price_timestamps: SymbolPriceTimestampSDKType[];
}
export interface PriceRecords {
    oracle: OracleType;
    symbolId: string;
    latestPriceRecords: PriceRecord[];
}
export interface PriceRecordsSDKType {
    oracle: OracleType;
    symbol_id: string;
    latest_price_records: PriceRecordSDKType[];
}
export interface PriceRecord {
    timestamp: Long;
    price: string;
}
export interface PriceRecordSDKType {
    timestamp: Long;
    price: string;
}
/**
 * MetadataStatistics refers to the metadata summary statistics of the
 * historical sample considered
 */
export interface MetadataStatistics {
    /**
     * GroupCount refers to the number of groups used. Equals RecordsSampleSize if
     * no grouping is used
     */
    groupCount: number;
    /** RecordsSampleSize refers to the total number of records used. */
    recordsSampleSize: number;
    /**
     * Mean refers to the arithmetic mean
     * For trades, the mean is the VWAP computed over the grouped trade records ∑
     * (price * quantity) / ∑ quantity For oracle prices, the mean is computed
     * over the price records ∑ (price) / prices_count
     */
    mean: string;
    /**
     * TWAP refers to the time-weighted average price which equals ∑ (price_i *
     * ∆t_i) / ∑ ∆t_i where ∆t_i = t_i - t_{i-1}
     */
    twap: string;
    /** FirstTimestamp is the timestamp of the oldest record considered */
    firstTimestamp: Long;
    /** LastTimestamp is the timestamp of the youngest record considered */
    lastTimestamp: Long;
    /** MinPrice refers to the smallest individual raw price considered */
    minPrice: string;
    /** MaxPrice refers to the largest individual raw price considered */
    maxPrice: string;
    /** MedianPrice refers to the median individual raw price considered */
    medianPrice: string;
}
/**
 * MetadataStatistics refers to the metadata summary statistics of the
 * historical sample considered
 */
export interface MetadataStatisticsSDKType {
    group_count: number;
    records_sample_size: number;
    mean: string;
    twap: string;
    first_timestamp: Long;
    last_timestamp: Long;
    min_price: string;
    max_price: string;
    median_price: string;
}
export interface PriceAttestation {
    priceId: string;
    /** MaxPrice refers to the largest individual raw price considered */
    price: Long;
    conf: Long;
    expo: number;
    emaPrice: Long;
    emaConf: Long;
    emaExpo: number;
    publishTime: Long;
}
export interface PriceAttestationSDKType {
    price_id: string;
    price: Long;
    conf: Long;
    expo: number;
    ema_price: Long;
    ema_conf: Long;
    ema_expo: number;
    publish_time: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const OracleInfo: {
    encode(message: OracleInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OracleInfo;
    fromPartial(object: Partial<OracleInfo>): OracleInfo;
};
export declare const ChainlinkPriceState: {
    encode(message: ChainlinkPriceState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainlinkPriceState;
    fromPartial(object: Partial<ChainlinkPriceState>): ChainlinkPriceState;
};
export declare const BandPriceState: {
    encode(message: BandPriceState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BandPriceState;
    fromPartial(object: Partial<BandPriceState>): BandPriceState;
};
export declare const PriceFeedState: {
    encode(message: PriceFeedState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceFeedState;
    fromPartial(object: Partial<PriceFeedState>): PriceFeedState;
};
export declare const ProviderInfo: {
    encode(message: ProviderInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderInfo;
    fromPartial(object: Partial<ProviderInfo>): ProviderInfo;
};
export declare const ProviderState: {
    encode(message: ProviderState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderState;
    fromPartial(object: Partial<ProviderState>): ProviderState;
};
export declare const ProviderPriceState: {
    encode(message: ProviderPriceState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderPriceState;
    fromPartial(object: Partial<ProviderPriceState>): ProviderPriceState;
};
export declare const PriceFeedInfo: {
    encode(message: PriceFeedInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceFeedInfo;
    fromPartial(object: Partial<PriceFeedInfo>): PriceFeedInfo;
};
export declare const PriceFeedPrice: {
    encode(message: PriceFeedPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceFeedPrice;
    fromPartial(object: Partial<PriceFeedPrice>): PriceFeedPrice;
};
export declare const CoinbasePriceState: {
    encode(message: CoinbasePriceState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CoinbasePriceState;
    fromPartial(object: Partial<CoinbasePriceState>): CoinbasePriceState;
};
export declare const PriceState: {
    encode(message: PriceState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceState;
    fromPartial(object: Partial<PriceState>): PriceState;
};
export declare const PythPriceState: {
    encode(message: PythPriceState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PythPriceState;
    fromPartial(object: Partial<PythPriceState>): PythPriceState;
};
export declare const BandOracleRequest: {
    encode(message: BandOracleRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BandOracleRequest;
    fromPartial(object: Partial<BandOracleRequest>): BandOracleRequest;
};
export declare const BandIBCParams: {
    encode(message: BandIBCParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BandIBCParams;
    fromPartial(object: Partial<BandIBCParams>): BandIBCParams;
};
export declare const SymbolPriceTimestamp: {
    encode(message: SymbolPriceTimestamp, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SymbolPriceTimestamp;
    fromPartial(object: Partial<SymbolPriceTimestamp>): SymbolPriceTimestamp;
};
export declare const LastPriceTimestamps: {
    encode(message: LastPriceTimestamps, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LastPriceTimestamps;
    fromPartial(object: Partial<LastPriceTimestamps>): LastPriceTimestamps;
};
export declare const PriceRecords: {
    encode(message: PriceRecords, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceRecords;
    fromPartial(object: Partial<PriceRecords>): PriceRecords;
};
export declare const PriceRecord: {
    encode(message: PriceRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceRecord;
    fromPartial(object: Partial<PriceRecord>): PriceRecord;
};
export declare const MetadataStatistics: {
    encode(message: MetadataStatistics, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MetadataStatistics;
    fromPartial(object: Partial<MetadataStatistics>): MetadataStatistics;
};
export declare const PriceAttestation: {
    encode(message: PriceAttestation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceAttestation;
    fromPartial(object: Partial<PriceAttestation>): PriceAttestation;
};
