import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export declare const OracleTypeAmino: typeof OracleType;
export declare function oracleTypeFromJSON(object: any): OracleType;
export declare function oracleTypeToJSON(object: OracleType): string;
export interface Params {
    pythContract: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    pyth_contract: string;
}
export interface ParamsAminoMsg {
    type: "/injective.oracle.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    pyth_contract: string;
}
export interface OracleInfo {
    symbol: string;
    oracleType: OracleType;
    scaleFactor: number;
}
export interface OracleInfoProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.OracleInfo";
    value: Uint8Array;
}
export interface OracleInfoAmino {
    symbol: string;
    oracle_type: OracleType;
    scale_factor: number;
}
export interface OracleInfoAminoMsg {
    type: "/injective.oracle.v1beta1.OracleInfo";
    value: OracleInfoAmino;
}
export interface OracleInfoSDKType {
    symbol: string;
    oracle_type: OracleType;
    scale_factor: number;
}
export interface ChainlinkPriceState {
    feedId: string;
    answer: string;
    timestamp: bigint;
    priceState: PriceState;
}
export interface ChainlinkPriceStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.ChainlinkPriceState";
    value: Uint8Array;
}
export interface ChainlinkPriceStateAmino {
    feed_id: string;
    answer: string;
    timestamp: string;
    price_state?: PriceStateAmino;
}
export interface ChainlinkPriceStateAminoMsg {
    type: "/injective.oracle.v1beta1.ChainlinkPriceState";
    value: ChainlinkPriceStateAmino;
}
export interface ChainlinkPriceStateSDKType {
    feed_id: string;
    answer: string;
    timestamp: bigint;
    price_state: PriceStateSDKType;
}
export interface BandPriceState {
    symbol: string;
    rate: string;
    resolveTime: bigint;
    requestID: bigint;
    priceState: PriceState;
}
export interface BandPriceStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.BandPriceState";
    value: Uint8Array;
}
export interface BandPriceStateAmino {
    symbol: string;
    rate: string;
    resolve_time: string;
    request_ID: string;
    price_state?: PriceStateAmino;
}
export interface BandPriceStateAminoMsg {
    type: "/injective.oracle.v1beta1.BandPriceState";
    value: BandPriceStateAmino;
}
export interface BandPriceStateSDKType {
    symbol: string;
    rate: string;
    resolve_time: bigint;
    request_ID: bigint;
    price_state: PriceStateSDKType;
}
export interface PriceFeedState {
    base: string;
    quote: string;
    priceState: PriceState;
    relayers: string[];
}
export interface PriceFeedStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PriceFeedState";
    value: Uint8Array;
}
export interface PriceFeedStateAmino {
    base: string;
    quote: string;
    price_state?: PriceStateAmino;
    relayers: string[];
}
export interface PriceFeedStateAminoMsg {
    type: "/injective.oracle.v1beta1.PriceFeedState";
    value: PriceFeedStateAmino;
}
export interface PriceFeedStateSDKType {
    base: string;
    quote: string;
    price_state: PriceStateSDKType;
    relayers: string[];
}
export interface ProviderInfo {
    provider: string;
    relayers: string[];
}
export interface ProviderInfoProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.ProviderInfo";
    value: Uint8Array;
}
export interface ProviderInfoAmino {
    provider: string;
    relayers: string[];
}
export interface ProviderInfoAminoMsg {
    type: "/injective.oracle.v1beta1.ProviderInfo";
    value: ProviderInfoAmino;
}
export interface ProviderInfoSDKType {
    provider: string;
    relayers: string[];
}
export interface ProviderState {
    providerInfo: ProviderInfo;
    providerPriceStates: ProviderPriceState[];
}
export interface ProviderStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.ProviderState";
    value: Uint8Array;
}
export interface ProviderStateAmino {
    provider_info?: ProviderInfoAmino;
    provider_price_states: ProviderPriceStateAmino[];
}
export interface ProviderStateAminoMsg {
    type: "/injective.oracle.v1beta1.ProviderState";
    value: ProviderStateAmino;
}
export interface ProviderStateSDKType {
    provider_info: ProviderInfoSDKType;
    provider_price_states: ProviderPriceStateSDKType[];
}
export interface ProviderPriceState {
    symbol: string;
    state: PriceState;
}
export interface ProviderPriceStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.ProviderPriceState";
    value: Uint8Array;
}
export interface ProviderPriceStateAmino {
    symbol: string;
    state?: PriceStateAmino;
}
export interface ProviderPriceStateAminoMsg {
    type: "/injective.oracle.v1beta1.ProviderPriceState";
    value: ProviderPriceStateAmino;
}
export interface ProviderPriceStateSDKType {
    symbol: string;
    state: PriceStateSDKType;
}
export interface PriceFeedInfo {
    base: string;
    quote: string;
}
export interface PriceFeedInfoProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PriceFeedInfo";
    value: Uint8Array;
}
export interface PriceFeedInfoAmino {
    base: string;
    quote: string;
}
export interface PriceFeedInfoAminoMsg {
    type: "/injective.oracle.v1beta1.PriceFeedInfo";
    value: PriceFeedInfoAmino;
}
export interface PriceFeedInfoSDKType {
    base: string;
    quote: string;
}
export interface PriceFeedPrice {
    price: string;
}
export interface PriceFeedPriceProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PriceFeedPrice";
    value: Uint8Array;
}
export interface PriceFeedPriceAmino {
    price: string;
}
export interface PriceFeedPriceAminoMsg {
    type: "/injective.oracle.v1beta1.PriceFeedPrice";
    value: PriceFeedPriceAmino;
}
export interface PriceFeedPriceSDKType {
    price: string;
}
export interface CoinbasePriceState {
    /** kind should always be "prices" */
    kind: string;
    /** timestamp of the when the price was signed by coinbase */
    timestamp: bigint;
    /** the symbol of the price, e.g. BTC */
    key: string;
    /** the value of the price scaled by 1e6 */
    value: bigint;
    /** the price state */
    priceState: PriceState;
}
export interface CoinbasePriceStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.CoinbasePriceState";
    value: Uint8Array;
}
export interface CoinbasePriceStateAmino {
    /** kind should always be "prices" */
    kind: string;
    /** timestamp of the when the price was signed by coinbase */
    timestamp: string;
    /** the symbol of the price, e.g. BTC */
    key: string;
    /** the value of the price scaled by 1e6 */
    value: string;
    /** the price state */
    price_state?: PriceStateAmino;
}
export interface CoinbasePriceStateAminoMsg {
    type: "/injective.oracle.v1beta1.CoinbasePriceState";
    value: CoinbasePriceStateAmino;
}
export interface CoinbasePriceStateSDKType {
    kind: string;
    timestamp: bigint;
    key: string;
    value: bigint;
    price_state: PriceStateSDKType;
}
export interface PriceState {
    price: string;
    cumulativePrice: string;
    timestamp: bigint;
}
export interface PriceStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PriceState";
    value: Uint8Array;
}
export interface PriceStateAmino {
    price: string;
    cumulative_price: string;
    timestamp: string;
}
export interface PriceStateAminoMsg {
    type: "/injective.oracle.v1beta1.PriceState";
    value: PriceStateAmino;
}
export interface PriceStateSDKType {
    price: string;
    cumulative_price: string;
    timestamp: bigint;
}
export interface PythPriceState {
    priceId: string;
    emaPrice: string;
    emaConf: string;
    conf: string;
    publishTime: bigint;
    priceState: PriceState;
}
export interface PythPriceStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PythPriceState";
    value: Uint8Array;
}
export interface PythPriceStateAmino {
    price_id: string;
    ema_price: string;
    ema_conf: string;
    conf: string;
    publish_time: string;
    price_state?: PriceStateAmino;
}
export interface PythPriceStateAminoMsg {
    type: "/injective.oracle.v1beta1.PythPriceState";
    value: PythPriceStateAmino;
}
export interface PythPriceStateSDKType {
    price_id: string;
    ema_price: string;
    ema_conf: string;
    conf: string;
    publish_time: bigint;
    price_state: PriceStateSDKType;
}
export interface BandOracleRequest {
    /** Unique Identifier for band ibc oracle request */
    requestId: bigint;
    /**
     * OracleScriptID is the unique identifier of the oracle script to be
     * executed.
     */
    oracleScriptId: bigint;
    /** Symbols is the list of symbols to prepare in the calldata */
    symbols: string[];
    /**
     * AskCount is the number of validators that are requested to respond to this
     * oracle request. Higher value means more security, at a higher gas cost.
     */
    askCount: bigint;
    /**
     * MinCount is the minimum number of validators necessary for the request to
     * proceed to the execution phase. Higher value means more security, at the
     * cost of liveness.
     */
    minCount: bigint;
    /**
     * FeeLimit is the maximum tokens that will be paid to all data source
     * providers.
     */
    feeLimit: Coin[];
    /** PrepareGas is amount of gas to pay to prepare raw requests */
    prepareGas: bigint;
    /** ExecuteGas is amount of gas to reserve for executing */
    executeGas: bigint;
    /**
     * MinSourceCount is the minimum number of data sources that must be used by
     * each validator
     */
    minSourceCount: bigint;
}
export interface BandOracleRequestProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.BandOracleRequest";
    value: Uint8Array;
}
export interface BandOracleRequestAmino {
    /** Unique Identifier for band ibc oracle request */
    request_id: string;
    /**
     * OracleScriptID is the unique identifier of the oracle script to be
     * executed.
     */
    oracle_script_id: string;
    /** Symbols is the list of symbols to prepare in the calldata */
    symbols: string[];
    /**
     * AskCount is the number of validators that are requested to respond to this
     * oracle request. Higher value means more security, at a higher gas cost.
     */
    ask_count: string;
    /**
     * MinCount is the minimum number of validators necessary for the request to
     * proceed to the execution phase. Higher value means more security, at the
     * cost of liveness.
     */
    min_count: string;
    /**
     * FeeLimit is the maximum tokens that will be paid to all data source
     * providers.
     */
    fee_limit: CoinAmino[];
    /** PrepareGas is amount of gas to pay to prepare raw requests */
    prepare_gas: string;
    /** ExecuteGas is amount of gas to reserve for executing */
    execute_gas: string;
    /**
     * MinSourceCount is the minimum number of data sources that must be used by
     * each validator
     */
    min_source_count: string;
}
export interface BandOracleRequestAminoMsg {
    type: "/injective.oracle.v1beta1.BandOracleRequest";
    value: BandOracleRequestAmino;
}
export interface BandOracleRequestSDKType {
    request_id: bigint;
    oracle_script_id: bigint;
    symbols: string[];
    ask_count: bigint;
    min_count: bigint;
    fee_limit: CoinSDKType[];
    prepare_gas: bigint;
    execute_gas: bigint;
    min_source_count: bigint;
}
export interface BandIBCParams {
    /** true if Band IBC should be enabled */
    bandIbcEnabled: boolean;
    /** block request interval to send Band IBC prices */
    ibcRequestInterval: bigint;
    /** band IBC source channel */
    ibcSourceChannel: string;
    /** band IBC version */
    ibcVersion: string;
    /** band IBC portID */
    ibcPortId: string;
    /** legacy oracle scheme ids */
    legacyOracleIds: bigint[];
}
export interface BandIBCParamsProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.BandIBCParams";
    value: Uint8Array;
}
export interface BandIBCParamsAmino {
    /** true if Band IBC should be enabled */
    band_ibc_enabled: boolean;
    /** block request interval to send Band IBC prices */
    ibc_request_interval: string;
    /** band IBC source channel */
    ibc_source_channel: string;
    /** band IBC version */
    ibc_version: string;
    /** band IBC portID */
    ibc_port_id: string;
    /** legacy oracle scheme ids */
    legacy_oracle_ids: string[];
}
export interface BandIBCParamsAminoMsg {
    type: "/injective.oracle.v1beta1.BandIBCParams";
    value: BandIBCParamsAmino;
}
export interface BandIBCParamsSDKType {
    band_ibc_enabled: boolean;
    ibc_request_interval: bigint;
    ibc_source_channel: string;
    ibc_version: string;
    ibc_port_id: string;
    legacy_oracle_ids: bigint[];
}
export interface SymbolPriceTimestamp {
    oracle: OracleType;
    symbolId: string;
    timestamp: bigint;
}
export interface SymbolPriceTimestampProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.SymbolPriceTimestamp";
    value: Uint8Array;
}
export interface SymbolPriceTimestampAmino {
    oracle: OracleType;
    symbol_id: string;
    timestamp: string;
}
export interface SymbolPriceTimestampAminoMsg {
    type: "/injective.oracle.v1beta1.SymbolPriceTimestamp";
    value: SymbolPriceTimestampAmino;
}
export interface SymbolPriceTimestampSDKType {
    oracle: OracleType;
    symbol_id: string;
    timestamp: bigint;
}
export interface LastPriceTimestamps {
    lastPriceTimestamps: SymbolPriceTimestamp[];
}
export interface LastPriceTimestampsProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.LastPriceTimestamps";
    value: Uint8Array;
}
export interface LastPriceTimestampsAmino {
    last_price_timestamps: SymbolPriceTimestampAmino[];
}
export interface LastPriceTimestampsAminoMsg {
    type: "/injective.oracle.v1beta1.LastPriceTimestamps";
    value: LastPriceTimestampsAmino;
}
export interface LastPriceTimestampsSDKType {
    last_price_timestamps: SymbolPriceTimestampSDKType[];
}
export interface PriceRecords {
    oracle: OracleType;
    symbolId: string;
    latestPriceRecords: PriceRecord[];
}
export interface PriceRecordsProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PriceRecords";
    value: Uint8Array;
}
export interface PriceRecordsAmino {
    oracle: OracleType;
    symbol_id: string;
    latest_price_records: PriceRecordAmino[];
}
export interface PriceRecordsAminoMsg {
    type: "/injective.oracle.v1beta1.PriceRecords";
    value: PriceRecordsAmino;
}
export interface PriceRecordsSDKType {
    oracle: OracleType;
    symbol_id: string;
    latest_price_records: PriceRecordSDKType[];
}
export interface PriceRecord {
    timestamp: bigint;
    price: string;
}
export interface PriceRecordProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PriceRecord";
    value: Uint8Array;
}
export interface PriceRecordAmino {
    timestamp: string;
    price: string;
}
export interface PriceRecordAminoMsg {
    type: "/injective.oracle.v1beta1.PriceRecord";
    value: PriceRecordAmino;
}
export interface PriceRecordSDKType {
    timestamp: bigint;
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
    firstTimestamp: bigint;
    /** LastTimestamp is the timestamp of the youngest record considered */
    lastTimestamp: bigint;
    /** MinPrice refers to the smallest individual raw price considered */
    minPrice: string;
    /** MaxPrice refers to the largest individual raw price considered */
    maxPrice: string;
    /** MedianPrice refers to the median individual raw price considered */
    medianPrice: string;
}
export interface MetadataStatisticsProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MetadataStatistics";
    value: Uint8Array;
}
/**
 * MetadataStatistics refers to the metadata summary statistics of the
 * historical sample considered
 */
export interface MetadataStatisticsAmino {
    /**
     * GroupCount refers to the number of groups used. Equals RecordsSampleSize if
     * no grouping is used
     */
    group_count: number;
    /** RecordsSampleSize refers to the total number of records used. */
    records_sample_size: number;
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
    first_timestamp: string;
    /** LastTimestamp is the timestamp of the youngest record considered */
    last_timestamp: string;
    /** MinPrice refers to the smallest individual raw price considered */
    min_price: string;
    /** MaxPrice refers to the largest individual raw price considered */
    max_price: string;
    /** MedianPrice refers to the median individual raw price considered */
    median_price: string;
}
export interface MetadataStatisticsAminoMsg {
    type: "/injective.oracle.v1beta1.MetadataStatistics";
    value: MetadataStatisticsAmino;
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
    first_timestamp: bigint;
    last_timestamp: bigint;
    min_price: string;
    max_price: string;
    median_price: string;
}
export interface PriceAttestation {
    priceId: string;
    /** MaxPrice refers to the largest individual raw price considered */
    price: bigint;
    conf: bigint;
    expo: number;
    emaPrice: bigint;
    emaConf: bigint;
    emaExpo: number;
    publishTime: bigint;
}
export interface PriceAttestationProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.PriceAttestation";
    value: Uint8Array;
}
export interface PriceAttestationAmino {
    price_id: string;
    /** MaxPrice refers to the largest individual raw price considered */
    price: string;
    conf: string;
    expo: number;
    ema_price: string;
    ema_conf: string;
    ema_expo: number;
    publish_time: string;
}
export interface PriceAttestationAminoMsg {
    type: "/injective.oracle.v1beta1.PriceAttestation";
    value: PriceAttestationAmino;
}
export interface PriceAttestationSDKType {
    price_id: string;
    price: bigint;
    conf: bigint;
    expo: number;
    ema_price: bigint;
    ema_conf: bigint;
    ema_expo: number;
    publish_time: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const OracleInfo: {
    typeUrl: string;
    encode(message: OracleInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OracleInfo;
    fromPartial(object: Partial<OracleInfo>): OracleInfo;
    fromAmino(object: OracleInfoAmino): OracleInfo;
    toAmino(message: OracleInfo): OracleInfoAmino;
    fromAminoMsg(object: OracleInfoAminoMsg): OracleInfo;
    fromProtoMsg(message: OracleInfoProtoMsg): OracleInfo;
    toProto(message: OracleInfo): Uint8Array;
    toProtoMsg(message: OracleInfo): OracleInfoProtoMsg;
};
export declare const ChainlinkPriceState: {
    typeUrl: string;
    encode(message: ChainlinkPriceState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainlinkPriceState;
    fromPartial(object: Partial<ChainlinkPriceState>): ChainlinkPriceState;
    fromAmino(object: ChainlinkPriceStateAmino): ChainlinkPriceState;
    toAmino(message: ChainlinkPriceState): ChainlinkPriceStateAmino;
    fromAminoMsg(object: ChainlinkPriceStateAminoMsg): ChainlinkPriceState;
    fromProtoMsg(message: ChainlinkPriceStateProtoMsg): ChainlinkPriceState;
    toProto(message: ChainlinkPriceState): Uint8Array;
    toProtoMsg(message: ChainlinkPriceState): ChainlinkPriceStateProtoMsg;
};
export declare const BandPriceState: {
    typeUrl: string;
    encode(message: BandPriceState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BandPriceState;
    fromPartial(object: Partial<BandPriceState>): BandPriceState;
    fromAmino(object: BandPriceStateAmino): BandPriceState;
    toAmino(message: BandPriceState): BandPriceStateAmino;
    fromAminoMsg(object: BandPriceStateAminoMsg): BandPriceState;
    fromProtoMsg(message: BandPriceStateProtoMsg): BandPriceState;
    toProto(message: BandPriceState): Uint8Array;
    toProtoMsg(message: BandPriceState): BandPriceStateProtoMsg;
};
export declare const PriceFeedState: {
    typeUrl: string;
    encode(message: PriceFeedState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceFeedState;
    fromPartial(object: Partial<PriceFeedState>): PriceFeedState;
    fromAmino(object: PriceFeedStateAmino): PriceFeedState;
    toAmino(message: PriceFeedState): PriceFeedStateAmino;
    fromAminoMsg(object: PriceFeedStateAminoMsg): PriceFeedState;
    fromProtoMsg(message: PriceFeedStateProtoMsg): PriceFeedState;
    toProto(message: PriceFeedState): Uint8Array;
    toProtoMsg(message: PriceFeedState): PriceFeedStateProtoMsg;
};
export declare const ProviderInfo: {
    typeUrl: string;
    encode(message: ProviderInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderInfo;
    fromPartial(object: Partial<ProviderInfo>): ProviderInfo;
    fromAmino(object: ProviderInfoAmino): ProviderInfo;
    toAmino(message: ProviderInfo): ProviderInfoAmino;
    fromAminoMsg(object: ProviderInfoAminoMsg): ProviderInfo;
    fromProtoMsg(message: ProviderInfoProtoMsg): ProviderInfo;
    toProto(message: ProviderInfo): Uint8Array;
    toProtoMsg(message: ProviderInfo): ProviderInfoProtoMsg;
};
export declare const ProviderState: {
    typeUrl: string;
    encode(message: ProviderState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderState;
    fromPartial(object: Partial<ProviderState>): ProviderState;
    fromAmino(object: ProviderStateAmino): ProviderState;
    toAmino(message: ProviderState): ProviderStateAmino;
    fromAminoMsg(object: ProviderStateAminoMsg): ProviderState;
    fromProtoMsg(message: ProviderStateProtoMsg): ProviderState;
    toProto(message: ProviderState): Uint8Array;
    toProtoMsg(message: ProviderState): ProviderStateProtoMsg;
};
export declare const ProviderPriceState: {
    typeUrl: string;
    encode(message: ProviderPriceState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderPriceState;
    fromPartial(object: Partial<ProviderPriceState>): ProviderPriceState;
    fromAmino(object: ProviderPriceStateAmino): ProviderPriceState;
    toAmino(message: ProviderPriceState): ProviderPriceStateAmino;
    fromAminoMsg(object: ProviderPriceStateAminoMsg): ProviderPriceState;
    fromProtoMsg(message: ProviderPriceStateProtoMsg): ProviderPriceState;
    toProto(message: ProviderPriceState): Uint8Array;
    toProtoMsg(message: ProviderPriceState): ProviderPriceStateProtoMsg;
};
export declare const PriceFeedInfo: {
    typeUrl: string;
    encode(message: PriceFeedInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceFeedInfo;
    fromPartial(object: Partial<PriceFeedInfo>): PriceFeedInfo;
    fromAmino(object: PriceFeedInfoAmino): PriceFeedInfo;
    toAmino(message: PriceFeedInfo): PriceFeedInfoAmino;
    fromAminoMsg(object: PriceFeedInfoAminoMsg): PriceFeedInfo;
    fromProtoMsg(message: PriceFeedInfoProtoMsg): PriceFeedInfo;
    toProto(message: PriceFeedInfo): Uint8Array;
    toProtoMsg(message: PriceFeedInfo): PriceFeedInfoProtoMsg;
};
export declare const PriceFeedPrice: {
    typeUrl: string;
    encode(message: PriceFeedPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceFeedPrice;
    fromPartial(object: Partial<PriceFeedPrice>): PriceFeedPrice;
    fromAmino(object: PriceFeedPriceAmino): PriceFeedPrice;
    toAmino(message: PriceFeedPrice): PriceFeedPriceAmino;
    fromAminoMsg(object: PriceFeedPriceAminoMsg): PriceFeedPrice;
    fromProtoMsg(message: PriceFeedPriceProtoMsg): PriceFeedPrice;
    toProto(message: PriceFeedPrice): Uint8Array;
    toProtoMsg(message: PriceFeedPrice): PriceFeedPriceProtoMsg;
};
export declare const CoinbasePriceState: {
    typeUrl: string;
    encode(message: CoinbasePriceState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CoinbasePriceState;
    fromPartial(object: Partial<CoinbasePriceState>): CoinbasePriceState;
    fromAmino(object: CoinbasePriceStateAmino): CoinbasePriceState;
    toAmino(message: CoinbasePriceState): CoinbasePriceStateAmino;
    fromAminoMsg(object: CoinbasePriceStateAminoMsg): CoinbasePriceState;
    fromProtoMsg(message: CoinbasePriceStateProtoMsg): CoinbasePriceState;
    toProto(message: CoinbasePriceState): Uint8Array;
    toProtoMsg(message: CoinbasePriceState): CoinbasePriceStateProtoMsg;
};
export declare const PriceState: {
    typeUrl: string;
    encode(message: PriceState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceState;
    fromPartial(object: Partial<PriceState>): PriceState;
    fromAmino(object: PriceStateAmino): PriceState;
    toAmino(message: PriceState): PriceStateAmino;
    fromAminoMsg(object: PriceStateAminoMsg): PriceState;
    fromProtoMsg(message: PriceStateProtoMsg): PriceState;
    toProto(message: PriceState): Uint8Array;
    toProtoMsg(message: PriceState): PriceStateProtoMsg;
};
export declare const PythPriceState: {
    typeUrl: string;
    encode(message: PythPriceState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PythPriceState;
    fromPartial(object: Partial<PythPriceState>): PythPriceState;
    fromAmino(object: PythPriceStateAmino): PythPriceState;
    toAmino(message: PythPriceState): PythPriceStateAmino;
    fromAminoMsg(object: PythPriceStateAminoMsg): PythPriceState;
    fromProtoMsg(message: PythPriceStateProtoMsg): PythPriceState;
    toProto(message: PythPriceState): Uint8Array;
    toProtoMsg(message: PythPriceState): PythPriceStateProtoMsg;
};
export declare const BandOracleRequest: {
    typeUrl: string;
    encode(message: BandOracleRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BandOracleRequest;
    fromPartial(object: Partial<BandOracleRequest>): BandOracleRequest;
    fromAmino(object: BandOracleRequestAmino): BandOracleRequest;
    toAmino(message: BandOracleRequest): BandOracleRequestAmino;
    fromAminoMsg(object: BandOracleRequestAminoMsg): BandOracleRequest;
    fromProtoMsg(message: BandOracleRequestProtoMsg): BandOracleRequest;
    toProto(message: BandOracleRequest): Uint8Array;
    toProtoMsg(message: BandOracleRequest): BandOracleRequestProtoMsg;
};
export declare const BandIBCParams: {
    typeUrl: string;
    encode(message: BandIBCParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BandIBCParams;
    fromPartial(object: Partial<BandIBCParams>): BandIBCParams;
    fromAmino(object: BandIBCParamsAmino): BandIBCParams;
    toAmino(message: BandIBCParams): BandIBCParamsAmino;
    fromAminoMsg(object: BandIBCParamsAminoMsg): BandIBCParams;
    fromProtoMsg(message: BandIBCParamsProtoMsg): BandIBCParams;
    toProto(message: BandIBCParams): Uint8Array;
    toProtoMsg(message: BandIBCParams): BandIBCParamsProtoMsg;
};
export declare const SymbolPriceTimestamp: {
    typeUrl: string;
    encode(message: SymbolPriceTimestamp, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SymbolPriceTimestamp;
    fromPartial(object: Partial<SymbolPriceTimestamp>): SymbolPriceTimestamp;
    fromAmino(object: SymbolPriceTimestampAmino): SymbolPriceTimestamp;
    toAmino(message: SymbolPriceTimestamp): SymbolPriceTimestampAmino;
    fromAminoMsg(object: SymbolPriceTimestampAminoMsg): SymbolPriceTimestamp;
    fromProtoMsg(message: SymbolPriceTimestampProtoMsg): SymbolPriceTimestamp;
    toProto(message: SymbolPriceTimestamp): Uint8Array;
    toProtoMsg(message: SymbolPriceTimestamp): SymbolPriceTimestampProtoMsg;
};
export declare const LastPriceTimestamps: {
    typeUrl: string;
    encode(message: LastPriceTimestamps, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LastPriceTimestamps;
    fromPartial(object: Partial<LastPriceTimestamps>): LastPriceTimestamps;
    fromAmino(object: LastPriceTimestampsAmino): LastPriceTimestamps;
    toAmino(message: LastPriceTimestamps): LastPriceTimestampsAmino;
    fromAminoMsg(object: LastPriceTimestampsAminoMsg): LastPriceTimestamps;
    fromProtoMsg(message: LastPriceTimestampsProtoMsg): LastPriceTimestamps;
    toProto(message: LastPriceTimestamps): Uint8Array;
    toProtoMsg(message: LastPriceTimestamps): LastPriceTimestampsProtoMsg;
};
export declare const PriceRecords: {
    typeUrl: string;
    encode(message: PriceRecords, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceRecords;
    fromPartial(object: Partial<PriceRecords>): PriceRecords;
    fromAmino(object: PriceRecordsAmino): PriceRecords;
    toAmino(message: PriceRecords): PriceRecordsAmino;
    fromAminoMsg(object: PriceRecordsAminoMsg): PriceRecords;
    fromProtoMsg(message: PriceRecordsProtoMsg): PriceRecords;
    toProto(message: PriceRecords): Uint8Array;
    toProtoMsg(message: PriceRecords): PriceRecordsProtoMsg;
};
export declare const PriceRecord: {
    typeUrl: string;
    encode(message: PriceRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceRecord;
    fromPartial(object: Partial<PriceRecord>): PriceRecord;
    fromAmino(object: PriceRecordAmino): PriceRecord;
    toAmino(message: PriceRecord): PriceRecordAmino;
    fromAminoMsg(object: PriceRecordAminoMsg): PriceRecord;
    fromProtoMsg(message: PriceRecordProtoMsg): PriceRecord;
    toProto(message: PriceRecord): Uint8Array;
    toProtoMsg(message: PriceRecord): PriceRecordProtoMsg;
};
export declare const MetadataStatistics: {
    typeUrl: string;
    encode(message: MetadataStatistics, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MetadataStatistics;
    fromPartial(object: Partial<MetadataStatistics>): MetadataStatistics;
    fromAmino(object: MetadataStatisticsAmino): MetadataStatistics;
    toAmino(message: MetadataStatistics): MetadataStatisticsAmino;
    fromAminoMsg(object: MetadataStatisticsAminoMsg): MetadataStatistics;
    fromProtoMsg(message: MetadataStatisticsProtoMsg): MetadataStatistics;
    toProto(message: MetadataStatistics): Uint8Array;
    toProtoMsg(message: MetadataStatistics): MetadataStatisticsProtoMsg;
};
export declare const PriceAttestation: {
    typeUrl: string;
    encode(message: PriceAttestation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceAttestation;
    fromPartial(object: Partial<PriceAttestation>): PriceAttestation;
    fromAmino(object: PriceAttestationAmino): PriceAttestation;
    toAmino(message: PriceAttestation): PriceAttestationAmino;
    fromAminoMsg(object: PriceAttestationAminoMsg): PriceAttestation;
    fromProtoMsg(message: PriceAttestationProtoMsg): PriceAttestation;
    toProto(message: PriceAttestation): Uint8Array;
    toProtoMsg(message: PriceAttestation): PriceAttestationProtoMsg;
};
