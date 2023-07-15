import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum OracleType {
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
  UNRECOGNIZED = -1,
}
export const OracleTypeSDKType = OracleType;
export function oracleTypeFromJSON(object: any): OracleType {
  switch (object) {
    case 0:
    case "Unspecified":
      return OracleType.Unspecified;
    case 1:
    case "Band":
      return OracleType.Band;
    case 2:
    case "PriceFeed":
      return OracleType.PriceFeed;
    case 3:
    case "Coinbase":
      return OracleType.Coinbase;
    case 4:
    case "Chainlink":
      return OracleType.Chainlink;
    case 5:
    case "Razor":
      return OracleType.Razor;
    case 6:
    case "Dia":
      return OracleType.Dia;
    case 7:
    case "API3":
      return OracleType.API3;
    case 8:
    case "Uma":
      return OracleType.Uma;
    case 9:
    case "Pyth":
      return OracleType.Pyth;
    case 10:
    case "BandIBC":
      return OracleType.BandIBC;
    case 11:
    case "Provider":
      return OracleType.Provider;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OracleType.UNRECOGNIZED;
  }
}
export function oracleTypeToJSON(object: OracleType): string {
  switch (object) {
    case OracleType.Unspecified:
      return "Unspecified";
    case OracleType.Band:
      return "Band";
    case OracleType.PriceFeed:
      return "PriceFeed";
    case OracleType.Coinbase:
      return "Coinbase";
    case OracleType.Chainlink:
      return "Chainlink";
    case OracleType.Razor:
      return "Razor";
    case OracleType.Dia:
      return "Dia";
    case OracleType.API3:
      return "API3";
    case OracleType.Uma:
      return "Uma";
    case OracleType.Pyth:
      return "Pyth";
    case OracleType.BandIBC:
      return "BandIBC";
    case OracleType.Provider:
      return "Provider";
    case OracleType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseParams(): Params {
  return {
    pythContract: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pythContract !== "") {
      writer.uint32(10).string(message.pythContract);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      pythContract: isSet(object.pythContract) ? String(object.pythContract) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.pythContract = object.pythContract ?? "";
    return message;
  }
};
function createBaseOracleInfo(): OracleInfo {
  return {
    symbol: "",
    oracleType: 0,
    scaleFactor: 0
  };
}
export const OracleInfo = {
  encode(message: OracleInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.oracleType !== 0) {
      writer.uint32(16).int32(message.oracleType);
    }
    if (message.scaleFactor !== 0) {
      writer.uint32(24).uint32(message.scaleFactor);
    }
    return writer;
  },
  fromJSON(object: any): OracleInfo {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      scaleFactor: isSet(object.scaleFactor) ? Number(object.scaleFactor) : 0
    };
  },
  fromPartial(object: Partial<OracleInfo>): OracleInfo {
    const message = createBaseOracleInfo();
    message.symbol = object.symbol ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.scaleFactor = object.scaleFactor ?? 0;
    return message;
  }
};
function createBaseChainlinkPriceState(): ChainlinkPriceState {
  return {
    feedId: "",
    answer: "",
    timestamp: Long.UZERO,
    priceState: undefined
  };
}
export const ChainlinkPriceState = {
  encode(message: ChainlinkPriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.answer !== "") {
      writer.uint32(18).string(message.answer);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ChainlinkPriceState {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      answer: isSet(object.answer) ? String(object.answer) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<ChainlinkPriceState>): ChainlinkPriceState {
    const message = createBaseChainlinkPriceState();
    message.feedId = object.feedId ?? "";
    message.answer = object.answer ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }
};
function createBaseBandPriceState(): BandPriceState {
  return {
    symbol: "",
    rate: "",
    resolveTime: Long.UZERO,
    request_ID: Long.UZERO,
    priceState: undefined
  };
}
export const BandPriceState = {
  encode(message: BandPriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (!message.resolveTime.isZero()) {
      writer.uint32(24).uint64(message.resolveTime);
    }
    if (!message.request_ID.isZero()) {
      writer.uint32(32).uint64(message.request_ID);
    }
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BandPriceState {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      rate: isSet(object.rate) ? String(object.rate) : "",
      resolveTime: isSet(object.resolveTime) ? Long.fromValue(object.resolveTime) : Long.UZERO,
      request_ID: isSet(object.request_ID) ? Long.fromValue(object.request_ID) : Long.UZERO,
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<BandPriceState>): BandPriceState {
    const message = createBaseBandPriceState();
    message.symbol = object.symbol ?? "";
    message.rate = object.rate ?? "";
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? Long.fromValue(object.resolveTime) : Long.UZERO;
    message.request_ID = object.request_ID !== undefined && object.request_ID !== null ? Long.fromValue(object.request_ID) : Long.UZERO;
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }
};
function createBasePriceFeedState(): PriceFeedState {
  return {
    base: "",
    quote: "",
    priceState: undefined,
    relayers: []
  };
}
export const PriceFeedState = {
  encode(message: PriceFeedState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.relayers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): PriceFeedState {
    return {
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<PriceFeedState>): PriceFeedState {
    const message = createBasePriceFeedState();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }
};
function createBaseProviderInfo(): ProviderInfo {
  return {
    provider: "",
    relayers: []
  };
}
export const ProviderInfo = {
  encode(message: ProviderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ProviderInfo {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ProviderInfo>): ProviderInfo {
    const message = createBaseProviderInfo();
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }
};
function createBaseProviderState(): ProviderState {
  return {
    providerInfo: undefined,
    providerPriceStates: []
  };
}
export const ProviderState = {
  encode(message: ProviderState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerInfo !== undefined) {
      ProviderInfo.encode(message.providerInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.providerPriceStates) {
      ProviderPriceState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProviderState {
    return {
      providerInfo: isSet(object.providerInfo) ? ProviderInfo.fromJSON(object.providerInfo) : undefined,
      providerPriceStates: Array.isArray(object?.providerPriceStates) ? object.providerPriceStates.map((e: any) => ProviderPriceState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ProviderState>): ProviderState {
    const message = createBaseProviderState();
    message.providerInfo = object.providerInfo !== undefined && object.providerInfo !== null ? ProviderInfo.fromPartial(object.providerInfo) : undefined;
    message.providerPriceStates = object.providerPriceStates?.map(e => ProviderPriceState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseProviderPriceState(): ProviderPriceState {
  return {
    symbol: "",
    state: undefined
  };
}
export const ProviderPriceState = {
  encode(message: ProviderPriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.state !== undefined) {
      PriceState.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProviderPriceState {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      state: isSet(object.state) ? PriceState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<ProviderPriceState>): ProviderPriceState {
    const message = createBaseProviderPriceState();
    message.symbol = object.symbol ?? "";
    message.state = object.state !== undefined && object.state !== null ? PriceState.fromPartial(object.state) : undefined;
    return message;
  }
};
function createBasePriceFeedInfo(): PriceFeedInfo {
  return {
    base: "",
    quote: ""
  };
}
export const PriceFeedInfo = {
  encode(message: PriceFeedInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    return writer;
  },
  fromJSON(object: any): PriceFeedInfo {
    return {
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : ""
    };
  },
  fromPartial(object: Partial<PriceFeedInfo>): PriceFeedInfo {
    const message = createBasePriceFeedInfo();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  }
};
function createBasePriceFeedPrice(): PriceFeedPrice {
  return {
    price: ""
  };
}
export const PriceFeedPrice = {
  encode(message: PriceFeedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    return writer;
  },
  fromJSON(object: any): PriceFeedPrice {
    return {
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<PriceFeedPrice>): PriceFeedPrice {
    const message = createBasePriceFeedPrice();
    message.price = object.price ?? "";
    return message;
  }
};
function createBaseCoinbasePriceState(): CoinbasePriceState {
  return {
    kind: "",
    timestamp: Long.UZERO,
    key: "",
    value: Long.UZERO,
    priceState: undefined
  };
}
export const CoinbasePriceState = {
  encode(message: CoinbasePriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(32).uint64(message.value);
    }
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CoinbasePriceState {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<CoinbasePriceState>): CoinbasePriceState {
    const message = createBaseCoinbasePriceState();
    message.kind = object.kind ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }
};
function createBasePriceState(): PriceState {
  return {
    price: "",
    cumulativePrice: "",
    timestamp: Long.ZERO
  };
}
export const PriceState = {
  encode(message: PriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.cumulativePrice !== "") {
      writer.uint32(18).string(message.cumulativePrice);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): PriceState {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      cumulativePrice: isSet(object.cumulativePrice) ? String(object.cumulativePrice) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PriceState>): PriceState {
    const message = createBasePriceState();
    message.price = object.price ?? "";
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  }
};
function createBasePythPriceState(): PythPriceState {
  return {
    priceId: "",
    emaPrice: "",
    emaConf: "",
    conf: "",
    publishTime: Long.UZERO,
    priceState: undefined
  };
}
export const PythPriceState = {
  encode(message: PythPriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceId !== "") {
      writer.uint32(10).string(message.priceId);
    }
    if (message.emaPrice !== "") {
      writer.uint32(18).string(message.emaPrice);
    }
    if (message.emaConf !== "") {
      writer.uint32(26).string(message.emaConf);
    }
    if (message.conf !== "") {
      writer.uint32(34).string(message.conf);
    }
    if (!message.publishTime.isZero()) {
      writer.uint32(40).uint64(message.publishTime);
    }
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PythPriceState {
    return {
      priceId: isSet(object.priceId) ? String(object.priceId) : "",
      emaPrice: isSet(object.emaPrice) ? String(object.emaPrice) : "",
      emaConf: isSet(object.emaConf) ? String(object.emaConf) : "",
      conf: isSet(object.conf) ? String(object.conf) : "",
      publishTime: isSet(object.publishTime) ? Long.fromValue(object.publishTime) : Long.UZERO,
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<PythPriceState>): PythPriceState {
    const message = createBasePythPriceState();
    message.priceId = object.priceId ?? "";
    message.emaPrice = object.emaPrice ?? "";
    message.emaConf = object.emaConf ?? "";
    message.conf = object.conf ?? "";
    message.publishTime = object.publishTime !== undefined && object.publishTime !== null ? Long.fromValue(object.publishTime) : Long.UZERO;
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }
};
function createBaseBandOracleRequest(): BandOracleRequest {
  return {
    requestId: Long.UZERO,
    oracleScriptId: Long.ZERO,
    symbols: [],
    askCount: Long.UZERO,
    minCount: Long.UZERO,
    feeLimit: [],
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO,
    minSourceCount: Long.UZERO
  };
}
export const BandOracleRequest = {
  encode(message: BandOracleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).uint64(message.requestId);
    }
    if (!message.oracleScriptId.isZero()) {
      writer.uint32(16).int64(message.oracleScriptId);
    }
    for (const v of message.symbols) {
      writer.uint32(26).string(v!);
    }
    if (!message.askCount.isZero()) {
      writer.uint32(32).uint64(message.askCount);
    }
    if (!message.minCount.isZero()) {
      writer.uint32(40).uint64(message.minCount);
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (!message.prepareGas.isZero()) {
      writer.uint32(56).uint64(message.prepareGas);
    }
    if (!message.executeGas.isZero()) {
      writer.uint32(64).uint64(message.executeGas);
    }
    if (!message.minSourceCount.isZero()) {
      writer.uint32(72).uint64(message.minSourceCount);
    }
    return writer;
  },
  fromJSON(object: any): BandOracleRequest {
    return {
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO,
      oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.UZERO,
      minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
      feeLimit: Array.isArray(object?.feeLimit) ? object.feeLimit.map((e: any) => Coin.fromJSON(e)) : [],
      prepareGas: isSet(object.prepareGas) ? Long.fromValue(object.prepareGas) : Long.UZERO,
      executeGas: isSet(object.executeGas) ? Long.fromValue(object.executeGas) : Long.UZERO,
      minSourceCount: isSet(object.minSourceCount) ? Long.fromValue(object.minSourceCount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<BandOracleRequest>): BandOracleRequest {
    const message = createBaseBandOracleRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? Long.fromValue(object.oracleScriptId) : Long.ZERO;
    message.symbols = object.symbols?.map(e => e) || [];
    message.askCount = object.askCount !== undefined && object.askCount !== null ? Long.fromValue(object.askCount) : Long.UZERO;
    message.minCount = object.minCount !== undefined && object.minCount !== null ? Long.fromValue(object.minCount) : Long.UZERO;
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? Long.fromValue(object.prepareGas) : Long.UZERO;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? Long.fromValue(object.executeGas) : Long.UZERO;
    message.minSourceCount = object.minSourceCount !== undefined && object.minSourceCount !== null ? Long.fromValue(object.minSourceCount) : Long.UZERO;
    return message;
  }
};
function createBaseBandIBCParams(): BandIBCParams {
  return {
    bandIbcEnabled: false,
    ibcRequestInterval: Long.ZERO,
    ibcSourceChannel: "",
    ibcVersion: "",
    ibcPortId: "",
    legacyOracleIds: []
  };
}
export const BandIBCParams = {
  encode(message: BandIBCParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bandIbcEnabled === true) {
      writer.uint32(8).bool(message.bandIbcEnabled);
    }
    if (!message.ibcRequestInterval.isZero()) {
      writer.uint32(16).int64(message.ibcRequestInterval);
    }
    if (message.ibcSourceChannel !== "") {
      writer.uint32(26).string(message.ibcSourceChannel);
    }
    if (message.ibcVersion !== "") {
      writer.uint32(34).string(message.ibcVersion);
    }
    if (message.ibcPortId !== "") {
      writer.uint32(42).string(message.ibcPortId);
    }
    writer.uint32(50).fork();
    for (const v of message.legacyOracleIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): BandIBCParams {
    return {
      bandIbcEnabled: isSet(object.bandIbcEnabled) ? Boolean(object.bandIbcEnabled) : false,
      ibcRequestInterval: isSet(object.ibcRequestInterval) ? Long.fromValue(object.ibcRequestInterval) : Long.ZERO,
      ibcSourceChannel: isSet(object.ibcSourceChannel) ? String(object.ibcSourceChannel) : "",
      ibcVersion: isSet(object.ibcVersion) ? String(object.ibcVersion) : "",
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      legacyOracleIds: Array.isArray(object?.legacyOracleIds) ? object.legacyOracleIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<BandIBCParams>): BandIBCParams {
    const message = createBaseBandIBCParams();
    message.bandIbcEnabled = object.bandIbcEnabled ?? false;
    message.ibcRequestInterval = object.ibcRequestInterval !== undefined && object.ibcRequestInterval !== null ? Long.fromValue(object.ibcRequestInterval) : Long.ZERO;
    message.ibcSourceChannel = object.ibcSourceChannel ?? "";
    message.ibcVersion = object.ibcVersion ?? "";
    message.ibcPortId = object.ibcPortId ?? "";
    message.legacyOracleIds = object.legacyOracleIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseSymbolPriceTimestamp(): SymbolPriceTimestamp {
  return {
    oracle: 0,
    symbolId: "",
    timestamp: Long.ZERO
  };
}
export const SymbolPriceTimestamp = {
  encode(message: SymbolPriceTimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }
    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): SymbolPriceTimestamp {
    return {
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : 0,
      symbolId: isSet(object.symbolId) ? String(object.symbolId) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<SymbolPriceTimestamp>): SymbolPriceTimestamp {
    const message = createBaseSymbolPriceTimestamp();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  }
};
function createBaseLastPriceTimestamps(): LastPriceTimestamps {
  return {
    lastPriceTimestamps: []
  };
}
export const LastPriceTimestamps = {
  encode(message: LastPriceTimestamps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lastPriceTimestamps) {
      SymbolPriceTimestamp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LastPriceTimestamps {
    return {
      lastPriceTimestamps: Array.isArray(object?.lastPriceTimestamps) ? object.lastPriceTimestamps.map((e: any) => SymbolPriceTimestamp.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LastPriceTimestamps>): LastPriceTimestamps {
    const message = createBaseLastPriceTimestamps();
    message.lastPriceTimestamps = object.lastPriceTimestamps?.map(e => SymbolPriceTimestamp.fromPartial(e)) || [];
    return message;
  }
};
function createBasePriceRecords(): PriceRecords {
  return {
    oracle: 0,
    symbolId: "",
    latestPriceRecords: []
  };
}
export const PriceRecords = {
  encode(message: PriceRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }
    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }
    for (const v of message.latestPriceRecords) {
      PriceRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PriceRecords {
    return {
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : 0,
      symbolId: isSet(object.symbolId) ? String(object.symbolId) : "",
      latestPriceRecords: Array.isArray(object?.latestPriceRecords) ? object.latestPriceRecords.map((e: any) => PriceRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PriceRecords>): PriceRecords {
    const message = createBasePriceRecords();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    message.latestPriceRecords = object.latestPriceRecords?.map(e => PriceRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBasePriceRecord(): PriceRecord {
  return {
    timestamp: Long.ZERO,
    price: ""
  };
}
export const PriceRecord = {
  encode(message: PriceRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    return writer;
  },
  fromJSON(object: any): PriceRecord {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<PriceRecord>): PriceRecord {
    const message = createBasePriceRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.price = object.price ?? "";
    return message;
  }
};
function createBaseMetadataStatistics(): MetadataStatistics {
  return {
    groupCount: 0,
    recordsSampleSize: 0,
    mean: "",
    twap: "",
    firstTimestamp: Long.ZERO,
    lastTimestamp: Long.ZERO,
    minPrice: "",
    maxPrice: "",
    medianPrice: ""
  };
}
export const MetadataStatistics = {
  encode(message: MetadataStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupCount !== 0) {
      writer.uint32(8).uint32(message.groupCount);
    }
    if (message.recordsSampleSize !== 0) {
      writer.uint32(16).uint32(message.recordsSampleSize);
    }
    if (message.mean !== "") {
      writer.uint32(26).string(message.mean);
    }
    if (message.twap !== "") {
      writer.uint32(34).string(message.twap);
    }
    if (!message.firstTimestamp.isZero()) {
      writer.uint32(40).int64(message.firstTimestamp);
    }
    if (!message.lastTimestamp.isZero()) {
      writer.uint32(48).int64(message.lastTimestamp);
    }
    if (message.minPrice !== "") {
      writer.uint32(58).string(message.minPrice);
    }
    if (message.maxPrice !== "") {
      writer.uint32(66).string(message.maxPrice);
    }
    if (message.medianPrice !== "") {
      writer.uint32(74).string(message.medianPrice);
    }
    return writer;
  },
  fromJSON(object: any): MetadataStatistics {
    return {
      groupCount: isSet(object.groupCount) ? Number(object.groupCount) : 0,
      recordsSampleSize: isSet(object.recordsSampleSize) ? Number(object.recordsSampleSize) : 0,
      mean: isSet(object.mean) ? String(object.mean) : "",
      twap: isSet(object.twap) ? String(object.twap) : "",
      firstTimestamp: isSet(object.firstTimestamp) ? Long.fromValue(object.firstTimestamp) : Long.ZERO,
      lastTimestamp: isSet(object.lastTimestamp) ? Long.fromValue(object.lastTimestamp) : Long.ZERO,
      minPrice: isSet(object.minPrice) ? String(object.minPrice) : "",
      maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : "",
      medianPrice: isSet(object.medianPrice) ? String(object.medianPrice) : ""
    };
  },
  fromPartial(object: Partial<MetadataStatistics>): MetadataStatistics {
    const message = createBaseMetadataStatistics();
    message.groupCount = object.groupCount ?? 0;
    message.recordsSampleSize = object.recordsSampleSize ?? 0;
    message.mean = object.mean ?? "";
    message.twap = object.twap ?? "";
    message.firstTimestamp = object.firstTimestamp !== undefined && object.firstTimestamp !== null ? Long.fromValue(object.firstTimestamp) : Long.ZERO;
    message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? Long.fromValue(object.lastTimestamp) : Long.ZERO;
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.medianPrice = object.medianPrice ?? "";
    return message;
  }
};
function createBasePriceAttestation(): PriceAttestation {
  return {
    priceId: "",
    price: Long.ZERO,
    conf: Long.UZERO,
    expo: 0,
    emaPrice: Long.ZERO,
    emaConf: Long.UZERO,
    emaExpo: 0,
    publishTime: Long.ZERO
  };
}
export const PriceAttestation = {
  encode(message: PriceAttestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceId !== "") {
      writer.uint32(10).string(message.priceId);
    }
    if (!message.price.isZero()) {
      writer.uint32(16).int64(message.price);
    }
    if (!message.conf.isZero()) {
      writer.uint32(24).uint64(message.conf);
    }
    if (message.expo !== 0) {
      writer.uint32(32).int32(message.expo);
    }
    if (!message.emaPrice.isZero()) {
      writer.uint32(40).int64(message.emaPrice);
    }
    if (!message.emaConf.isZero()) {
      writer.uint32(48).uint64(message.emaConf);
    }
    if (message.emaExpo !== 0) {
      writer.uint32(56).int32(message.emaExpo);
    }
    if (!message.publishTime.isZero()) {
      writer.uint32(64).int64(message.publishTime);
    }
    return writer;
  },
  fromJSON(object: any): PriceAttestation {
    return {
      priceId: isSet(object.priceId) ? String(object.priceId) : "",
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.ZERO,
      conf: isSet(object.conf) ? Long.fromValue(object.conf) : Long.UZERO,
      expo: isSet(object.expo) ? Number(object.expo) : 0,
      emaPrice: isSet(object.emaPrice) ? Long.fromValue(object.emaPrice) : Long.ZERO,
      emaConf: isSet(object.emaConf) ? Long.fromValue(object.emaConf) : Long.UZERO,
      emaExpo: isSet(object.emaExpo) ? Number(object.emaExpo) : 0,
      publishTime: isSet(object.publishTime) ? Long.fromValue(object.publishTime) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PriceAttestation>): PriceAttestation {
    const message = createBasePriceAttestation();
    message.priceId = object.priceId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.ZERO;
    message.conf = object.conf !== undefined && object.conf !== null ? Long.fromValue(object.conf) : Long.UZERO;
    message.expo = object.expo ?? 0;
    message.emaPrice = object.emaPrice !== undefined && object.emaPrice !== null ? Long.fromValue(object.emaPrice) : Long.ZERO;
    message.emaConf = object.emaConf !== undefined && object.emaConf !== null ? Long.fromValue(object.emaConf) : Long.UZERO;
    message.emaExpo = object.emaExpo ?? 0;
    message.publishTime = object.publishTime !== undefined && object.publishTime !== null ? Long.fromValue(object.publishTime) : Long.ZERO;
    return message;
  }
};