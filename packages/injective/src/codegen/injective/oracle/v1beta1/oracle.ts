import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
export const OracleTypeAmino = OracleType;
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
function createBaseParams(): Params {
  return {
    pythContract: ""
  };
}
export const Params = {
  typeUrl: "/injective.oracle.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      pythContract: object.pyth_contract
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.pyth_contract = message.pythContract;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.Params",
      value: Params.encode(message).finish()
    };
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
  typeUrl: "/injective.oracle.v1beta1.OracleInfo",
  encode(message: OracleInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      scaleFactor: isSet(object.scaleFactor) ? Number(object.scaleFactor) : 0
    };
  },
  fromPartial(object: Partial<OracleInfo>): OracleInfo {
    const message = createBaseOracleInfo();
    message.symbol = object.symbol ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.scaleFactor = object.scaleFactor ?? 0;
    return message;
  },
  fromAmino(object: OracleInfoAmino): OracleInfo {
    return {
      symbol: object.symbol,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      scaleFactor: object.scale_factor
    };
  },
  toAmino(message: OracleInfo): OracleInfoAmino {
    const obj: any = {};
    obj.symbol = message.symbol;
    obj.oracle_type = message.oracleType;
    obj.scale_factor = message.scaleFactor;
    return obj;
  },
  fromAminoMsg(object: OracleInfoAminoMsg): OracleInfo {
    return OracleInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleInfoProtoMsg): OracleInfo {
    return OracleInfo.decode(message.value);
  },
  toProto(message: OracleInfo): Uint8Array {
    return OracleInfo.encode(message).finish();
  },
  toProtoMsg(message: OracleInfo): OracleInfoProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.OracleInfo",
      value: OracleInfo.encode(message).finish()
    };
  }
};
function createBaseChainlinkPriceState(): ChainlinkPriceState {
  return {
    feedId: "",
    answer: "",
    timestamp: BigInt(0),
    priceState: PriceState.fromPartial({})
  };
}
export const ChainlinkPriceState = {
  typeUrl: "/injective.oracle.v1beta1.ChainlinkPriceState",
  encode(message: ChainlinkPriceState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.answer !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.answer, 18).atomics);
    }
    if (message.timestamp !== BigInt(0)) {
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
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<ChainlinkPriceState>): ChainlinkPriceState {
    const message = createBaseChainlinkPriceState();
    message.feedId = object.feedId ?? "";
    message.answer = object.answer ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  },
  fromAmino(object: ChainlinkPriceStateAmino): ChainlinkPriceState {
    return {
      feedId: object.feed_id,
      answer: object.answer,
      timestamp: BigInt(object.timestamp),
      priceState: object?.price_state ? PriceState.fromAmino(object.price_state) : undefined
    };
  },
  toAmino(message: ChainlinkPriceState): ChainlinkPriceStateAmino {
    const obj: any = {};
    obj.feed_id = message.feedId;
    obj.answer = message.answer;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ChainlinkPriceStateAminoMsg): ChainlinkPriceState {
    return ChainlinkPriceState.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainlinkPriceStateProtoMsg): ChainlinkPriceState {
    return ChainlinkPriceState.decode(message.value);
  },
  toProto(message: ChainlinkPriceState): Uint8Array {
    return ChainlinkPriceState.encode(message).finish();
  },
  toProtoMsg(message: ChainlinkPriceState): ChainlinkPriceStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.ChainlinkPriceState",
      value: ChainlinkPriceState.encode(message).finish()
    };
  }
};
function createBaseBandPriceState(): BandPriceState {
  return {
    symbol: "",
    rate: "",
    resolveTime: BigInt(0),
    requestID: BigInt(0),
    priceState: PriceState.fromPartial({})
  };
}
export const BandPriceState = {
  typeUrl: "/injective.oracle.v1beta1.BandPriceState",
  encode(message: BandPriceState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.resolveTime);
    }
    if (message.requestID !== BigInt(0)) {
      writer.uint32(32).uint64(message.requestID);
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
      resolveTime: isSet(object.resolveTime) ? BigInt(object.resolveTime.toString()) : BigInt(0),
      requestID: isSet(object.requestID) ? BigInt(object.requestID.toString()) : BigInt(0),
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<BandPriceState>): BandPriceState {
    const message = createBaseBandPriceState();
    message.symbol = object.symbol ?? "";
    message.rate = object.rate ?? "";
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    message.requestID = object.requestID !== undefined && object.requestID !== null ? BigInt(object.requestID.toString()) : BigInt(0);
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  },
  fromAmino(object: BandPriceStateAmino): BandPriceState {
    return {
      symbol: object.symbol,
      rate: object.rate,
      resolveTime: BigInt(object.resolve_time),
      requestID: BigInt(object.request_ID),
      priceState: object?.price_state ? PriceState.fromAmino(object.price_state) : undefined
    };
  },
  toAmino(message: BandPriceState): BandPriceStateAmino {
    const obj: any = {};
    obj.symbol = message.symbol;
    obj.rate = message.rate;
    obj.resolve_time = message.resolveTime ? message.resolveTime.toString() : undefined;
    obj.request_ID = message.requestID ? message.requestID.toString() : undefined;
    obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
    return obj;
  },
  fromAminoMsg(object: BandPriceStateAminoMsg): BandPriceState {
    return BandPriceState.fromAmino(object.value);
  },
  fromProtoMsg(message: BandPriceStateProtoMsg): BandPriceState {
    return BandPriceState.decode(message.value);
  },
  toProto(message: BandPriceState): Uint8Array {
    return BandPriceState.encode(message).finish();
  },
  toProtoMsg(message: BandPriceState): BandPriceStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.BandPriceState",
      value: BandPriceState.encode(message).finish()
    };
  }
};
function createBasePriceFeedState(): PriceFeedState {
  return {
    base: "",
    quote: "",
    priceState: PriceState.fromPartial({}),
    relayers: []
  };
}
export const PriceFeedState = {
  typeUrl: "/injective.oracle.v1beta1.PriceFeedState",
  encode(message: PriceFeedState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PriceFeedStateAmino): PriceFeedState {
    return {
      base: object.base,
      quote: object.quote,
      priceState: object?.price_state ? PriceState.fromAmino(object.price_state) : undefined,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: PriceFeedState): PriceFeedStateAmino {
    const obj: any = {};
    obj.base = message.base;
    obj.quote = message.quote;
    obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: PriceFeedStateAminoMsg): PriceFeedState {
    return PriceFeedState.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceFeedStateProtoMsg): PriceFeedState {
    return PriceFeedState.decode(message.value);
  },
  toProto(message: PriceFeedState): Uint8Array {
    return PriceFeedState.encode(message).finish();
  },
  toProtoMsg(message: PriceFeedState): PriceFeedStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PriceFeedState",
      value: PriceFeedState.encode(message).finish()
    };
  }
};
function createBaseProviderInfo(): ProviderInfo {
  return {
    provider: "",
    relayers: []
  };
}
export const ProviderInfo = {
  typeUrl: "/injective.oracle.v1beta1.ProviderInfo",
  encode(message: ProviderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ProviderInfoAmino): ProviderInfo {
    return {
      provider: object.provider,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: ProviderInfo): ProviderInfoAmino {
    const obj: any = {};
    obj.provider = message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProviderInfoAminoMsg): ProviderInfo {
    return ProviderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderInfoProtoMsg): ProviderInfo {
    return ProviderInfo.decode(message.value);
  },
  toProto(message: ProviderInfo): Uint8Array {
    return ProviderInfo.encode(message).finish();
  },
  toProtoMsg(message: ProviderInfo): ProviderInfoProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.ProviderInfo",
      value: ProviderInfo.encode(message).finish()
    };
  }
};
function createBaseProviderState(): ProviderState {
  return {
    providerInfo: ProviderInfo.fromPartial({}),
    providerPriceStates: []
  };
}
export const ProviderState = {
  typeUrl: "/injective.oracle.v1beta1.ProviderState",
  encode(message: ProviderState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ProviderStateAmino): ProviderState {
    return {
      providerInfo: object?.provider_info ? ProviderInfo.fromAmino(object.provider_info) : undefined,
      providerPriceStates: Array.isArray(object?.provider_price_states) ? object.provider_price_states.map((e: any) => ProviderPriceState.fromAmino(e)) : []
    };
  },
  toAmino(message: ProviderState): ProviderStateAmino {
    const obj: any = {};
    obj.provider_info = message.providerInfo ? ProviderInfo.toAmino(message.providerInfo) : undefined;
    if (message.providerPriceStates) {
      obj.provider_price_states = message.providerPriceStates.map(e => e ? ProviderPriceState.toAmino(e) : undefined);
    } else {
      obj.provider_price_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProviderStateAminoMsg): ProviderState {
    return ProviderState.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderStateProtoMsg): ProviderState {
    return ProviderState.decode(message.value);
  },
  toProto(message: ProviderState): Uint8Array {
    return ProviderState.encode(message).finish();
  },
  toProtoMsg(message: ProviderState): ProviderStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.ProviderState",
      value: ProviderState.encode(message).finish()
    };
  }
};
function createBaseProviderPriceState(): ProviderPriceState {
  return {
    symbol: "",
    state: PriceState.fromPartial({})
  };
}
export const ProviderPriceState = {
  typeUrl: "/injective.oracle.v1beta1.ProviderPriceState",
  encode(message: ProviderPriceState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ProviderPriceStateAmino): ProviderPriceState {
    return {
      symbol: object.symbol,
      state: object?.state ? PriceState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: ProviderPriceState): ProviderPriceStateAmino {
    const obj: any = {};
    obj.symbol = message.symbol;
    obj.state = message.state ? PriceState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderPriceStateAminoMsg): ProviderPriceState {
    return ProviderPriceState.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderPriceStateProtoMsg): ProviderPriceState {
    return ProviderPriceState.decode(message.value);
  },
  toProto(message: ProviderPriceState): Uint8Array {
    return ProviderPriceState.encode(message).finish();
  },
  toProtoMsg(message: ProviderPriceState): ProviderPriceStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.ProviderPriceState",
      value: ProviderPriceState.encode(message).finish()
    };
  }
};
function createBasePriceFeedInfo(): PriceFeedInfo {
  return {
    base: "",
    quote: ""
  };
}
export const PriceFeedInfo = {
  typeUrl: "/injective.oracle.v1beta1.PriceFeedInfo",
  encode(message: PriceFeedInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PriceFeedInfoAmino): PriceFeedInfo {
    return {
      base: object.base,
      quote: object.quote
    };
  },
  toAmino(message: PriceFeedInfo): PriceFeedInfoAmino {
    const obj: any = {};
    obj.base = message.base;
    obj.quote = message.quote;
    return obj;
  },
  fromAminoMsg(object: PriceFeedInfoAminoMsg): PriceFeedInfo {
    return PriceFeedInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceFeedInfoProtoMsg): PriceFeedInfo {
    return PriceFeedInfo.decode(message.value);
  },
  toProto(message: PriceFeedInfo): Uint8Array {
    return PriceFeedInfo.encode(message).finish();
  },
  toProtoMsg(message: PriceFeedInfo): PriceFeedInfoProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PriceFeedInfo",
      value: PriceFeedInfo.encode(message).finish()
    };
  }
};
function createBasePriceFeedPrice(): PriceFeedPrice {
  return {
    price: ""
  };
}
export const PriceFeedPrice = {
  typeUrl: "/injective.oracle.v1beta1.PriceFeedPrice",
  encode(message: PriceFeedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
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
  },
  fromAmino(object: PriceFeedPriceAmino): PriceFeedPrice {
    return {
      price: object.price
    };
  },
  toAmino(message: PriceFeedPrice): PriceFeedPriceAmino {
    const obj: any = {};
    obj.price = message.price;
    return obj;
  },
  fromAminoMsg(object: PriceFeedPriceAminoMsg): PriceFeedPrice {
    return PriceFeedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceFeedPriceProtoMsg): PriceFeedPrice {
    return PriceFeedPrice.decode(message.value);
  },
  toProto(message: PriceFeedPrice): Uint8Array {
    return PriceFeedPrice.encode(message).finish();
  },
  toProtoMsg(message: PriceFeedPrice): PriceFeedPriceProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PriceFeedPrice",
      value: PriceFeedPrice.encode(message).finish()
    };
  }
};
function createBaseCoinbasePriceState(): CoinbasePriceState {
  return {
    kind: "",
    timestamp: BigInt(0),
    key: "",
    value: BigInt(0),
    priceState: PriceState.fromPartial({})
  };
}
export const CoinbasePriceState = {
  typeUrl: "/injective.oracle.v1beta1.CoinbasePriceState",
  encode(message: CoinbasePriceState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.value !== BigInt(0)) {
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
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0),
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<CoinbasePriceState>): CoinbasePriceState {
    const message = createBaseCoinbasePriceState();
    message.kind = object.kind ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  },
  fromAmino(object: CoinbasePriceStateAmino): CoinbasePriceState {
    return {
      kind: object.kind,
      timestamp: BigInt(object.timestamp),
      key: object.key,
      value: BigInt(object.value),
      priceState: object?.price_state ? PriceState.fromAmino(object.price_state) : undefined
    };
  },
  toAmino(message: CoinbasePriceState): CoinbasePriceStateAmino {
    const obj: any = {};
    obj.kind = message.kind;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.key = message.key;
    obj.value = message.value ? message.value.toString() : undefined;
    obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
    return obj;
  },
  fromAminoMsg(object: CoinbasePriceStateAminoMsg): CoinbasePriceState {
    return CoinbasePriceState.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinbasePriceStateProtoMsg): CoinbasePriceState {
    return CoinbasePriceState.decode(message.value);
  },
  toProto(message: CoinbasePriceState): Uint8Array {
    return CoinbasePriceState.encode(message).finish();
  },
  toProtoMsg(message: CoinbasePriceState): CoinbasePriceStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.CoinbasePriceState",
      value: CoinbasePriceState.encode(message).finish()
    };
  }
};
function createBasePriceState(): PriceState {
  return {
    price: "",
    cumulativePrice: "",
    timestamp: BigInt(0)
  };
}
export const PriceState = {
  typeUrl: "/injective.oracle.v1beta1.PriceState",
  encode(message: PriceState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.cumulativePrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): PriceState {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      cumulativePrice: isSet(object.cumulativePrice) ? String(object.cumulativePrice) : "",
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PriceState>): PriceState {
    const message = createBasePriceState();
    message.price = object.price ?? "";
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceStateAmino): PriceState {
    return {
      price: object.price,
      cumulativePrice: object.cumulative_price,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: PriceState): PriceStateAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.cumulative_price = message.cumulativePrice;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PriceStateAminoMsg): PriceState {
    return PriceState.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceStateProtoMsg): PriceState {
    return PriceState.decode(message.value);
  },
  toProto(message: PriceState): Uint8Array {
    return PriceState.encode(message).finish();
  },
  toProtoMsg(message: PriceState): PriceStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PriceState",
      value: PriceState.encode(message).finish()
    };
  }
};
function createBasePythPriceState(): PythPriceState {
  return {
    priceId: "",
    emaPrice: "",
    emaConf: "",
    conf: "",
    publishTime: BigInt(0),
    priceState: PriceState.fromPartial({})
  };
}
export const PythPriceState = {
  typeUrl: "/injective.oracle.v1beta1.PythPriceState",
  encode(message: PythPriceState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceId !== "") {
      writer.uint32(10).string(message.priceId);
    }
    if (message.emaPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.emaPrice, 18).atomics);
    }
    if (message.emaConf !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.emaConf, 18).atomics);
    }
    if (message.conf !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.conf, 18).atomics);
    }
    if (message.publishTime !== BigInt(0)) {
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
      publishTime: isSet(object.publishTime) ? BigInt(object.publishTime.toString()) : BigInt(0),
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<PythPriceState>): PythPriceState {
    const message = createBasePythPriceState();
    message.priceId = object.priceId ?? "";
    message.emaPrice = object.emaPrice ?? "";
    message.emaConf = object.emaConf ?? "";
    message.conf = object.conf ?? "";
    message.publishTime = object.publishTime !== undefined && object.publishTime !== null ? BigInt(object.publishTime.toString()) : BigInt(0);
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  },
  fromAmino(object: PythPriceStateAmino): PythPriceState {
    return {
      priceId: object.price_id,
      emaPrice: object.ema_price,
      emaConf: object.ema_conf,
      conf: object.conf,
      publishTime: BigInt(object.publish_time),
      priceState: object?.price_state ? PriceState.fromAmino(object.price_state) : undefined
    };
  },
  toAmino(message: PythPriceState): PythPriceStateAmino {
    const obj: any = {};
    obj.price_id = message.priceId;
    obj.ema_price = message.emaPrice;
    obj.ema_conf = message.emaConf;
    obj.conf = message.conf;
    obj.publish_time = message.publishTime ? message.publishTime.toString() : undefined;
    obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
    return obj;
  },
  fromAminoMsg(object: PythPriceStateAminoMsg): PythPriceState {
    return PythPriceState.fromAmino(object.value);
  },
  fromProtoMsg(message: PythPriceStateProtoMsg): PythPriceState {
    return PythPriceState.decode(message.value);
  },
  toProto(message: PythPriceState): Uint8Array {
    return PythPriceState.encode(message).finish();
  },
  toProtoMsg(message: PythPriceState): PythPriceStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PythPriceState",
      value: PythPriceState.encode(message).finish()
    };
  }
};
function createBaseBandOracleRequest(): BandOracleRequest {
  return {
    requestId: BigInt(0),
    oracleScriptId: BigInt(0),
    symbols: [],
    askCount: BigInt(0),
    minCount: BigInt(0),
    feeLimit: [],
    prepareGas: BigInt(0),
    executeGas: BigInt(0),
    minSourceCount: BigInt(0)
  };
}
export const BandOracleRequest = {
  typeUrl: "/injective.oracle.v1beta1.BandOracleRequest",
  encode(message: BandOracleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).uint64(message.requestId);
    }
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(16).int64(message.oracleScriptId);
    }
    for (const v of message.symbols) {
      writer.uint32(26).string(v!);
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.minCount);
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.prepareGas !== BigInt(0)) {
      writer.uint32(56).uint64(message.prepareGas);
    }
    if (message.executeGas !== BigInt(0)) {
      writer.uint32(64).uint64(message.executeGas);
    }
    if (message.minSourceCount !== BigInt(0)) {
      writer.uint32(72).uint64(message.minSourceCount);
    }
    return writer;
  },
  fromJSON(object: any): BandOracleRequest {
    return {
      requestId: isSet(object.requestId) ? BigInt(object.requestId.toString()) : BigInt(0),
      oracleScriptId: isSet(object.oracleScriptId) ? BigInt(object.oracleScriptId.toString()) : BigInt(0),
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      askCount: isSet(object.askCount) ? BigInt(object.askCount.toString()) : BigInt(0),
      minCount: isSet(object.minCount) ? BigInt(object.minCount.toString()) : BigInt(0),
      feeLimit: Array.isArray(object?.feeLimit) ? object.feeLimit.map((e: any) => Coin.fromJSON(e)) : [],
      prepareGas: isSet(object.prepareGas) ? BigInt(object.prepareGas.toString()) : BigInt(0),
      executeGas: isSet(object.executeGas) ? BigInt(object.executeGas.toString()) : BigInt(0),
      minSourceCount: isSet(object.minSourceCount) ? BigInt(object.minSourceCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<BandOracleRequest>): BandOracleRequest {
    const message = createBaseBandOracleRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.symbols = object.symbols?.map(e => e) || [];
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? BigInt(object.prepareGas.toString()) : BigInt(0);
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
    message.minSourceCount = object.minSourceCount !== undefined && object.minSourceCount !== null ? BigInt(object.minSourceCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BandOracleRequestAmino): BandOracleRequest {
    return {
      requestId: BigInt(object.request_id),
      oracleScriptId: BigInt(object.oracle_script_id),
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => e) : [],
      askCount: BigInt(object.ask_count),
      minCount: BigInt(object.min_count),
      feeLimit: Array.isArray(object?.fee_limit) ? object.fee_limit.map((e: any) => Coin.fromAmino(e)) : [],
      prepareGas: BigInt(object.prepare_gas),
      executeGas: BigInt(object.execute_gas),
      minSourceCount: BigInt(object.min_source_count)
    };
  },
  toAmino(message: BandOracleRequest): BandOracleRequestAmino {
    const obj: any = {};
    obj.request_id = message.requestId ? message.requestId.toString() : undefined;
    obj.oracle_script_id = message.oracleScriptId ? message.oracleScriptId.toString() : undefined;
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = [];
    }
    obj.ask_count = message.askCount ? message.askCount.toString() : undefined;
    obj.min_count = message.minCount ? message.minCount.toString() : undefined;
    if (message.feeLimit) {
      obj.fee_limit = message.feeLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_limit = [];
    }
    obj.prepare_gas = message.prepareGas ? message.prepareGas.toString() : undefined;
    obj.execute_gas = message.executeGas ? message.executeGas.toString() : undefined;
    obj.min_source_count = message.minSourceCount ? message.minSourceCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BandOracleRequestAminoMsg): BandOracleRequest {
    return BandOracleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BandOracleRequestProtoMsg): BandOracleRequest {
    return BandOracleRequest.decode(message.value);
  },
  toProto(message: BandOracleRequest): Uint8Array {
    return BandOracleRequest.encode(message).finish();
  },
  toProtoMsg(message: BandOracleRequest): BandOracleRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.BandOracleRequest",
      value: BandOracleRequest.encode(message).finish()
    };
  }
};
function createBaseBandIBCParams(): BandIBCParams {
  return {
    bandIbcEnabled: false,
    ibcRequestInterval: BigInt(0),
    ibcSourceChannel: "",
    ibcVersion: "",
    ibcPortId: "",
    legacyOracleIds: []
  };
}
export const BandIBCParams = {
  typeUrl: "/injective.oracle.v1beta1.BandIBCParams",
  encode(message: BandIBCParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bandIbcEnabled === true) {
      writer.uint32(8).bool(message.bandIbcEnabled);
    }
    if (message.ibcRequestInterval !== BigInt(0)) {
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
      ibcRequestInterval: isSet(object.ibcRequestInterval) ? BigInt(object.ibcRequestInterval.toString()) : BigInt(0),
      ibcSourceChannel: isSet(object.ibcSourceChannel) ? String(object.ibcSourceChannel) : "",
      ibcVersion: isSet(object.ibcVersion) ? String(object.ibcVersion) : "",
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      legacyOracleIds: Array.isArray(object?.legacyOracleIds) ? object.legacyOracleIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<BandIBCParams>): BandIBCParams {
    const message = createBaseBandIBCParams();
    message.bandIbcEnabled = object.bandIbcEnabled ?? false;
    message.ibcRequestInterval = object.ibcRequestInterval !== undefined && object.ibcRequestInterval !== null ? BigInt(object.ibcRequestInterval.toString()) : BigInt(0);
    message.ibcSourceChannel = object.ibcSourceChannel ?? "";
    message.ibcVersion = object.ibcVersion ?? "";
    message.ibcPortId = object.ibcPortId ?? "";
    message.legacyOracleIds = object.legacyOracleIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: BandIBCParamsAmino): BandIBCParams {
    return {
      bandIbcEnabled: object.band_ibc_enabled,
      ibcRequestInterval: BigInt(object.ibc_request_interval),
      ibcSourceChannel: object.ibc_source_channel,
      ibcVersion: object.ibc_version,
      ibcPortId: object.ibc_port_id,
      legacyOracleIds: Array.isArray(object?.legacy_oracle_ids) ? object.legacy_oracle_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: BandIBCParams): BandIBCParamsAmino {
    const obj: any = {};
    obj.band_ibc_enabled = message.bandIbcEnabled;
    obj.ibc_request_interval = message.ibcRequestInterval ? message.ibcRequestInterval.toString() : undefined;
    obj.ibc_source_channel = message.ibcSourceChannel;
    obj.ibc_version = message.ibcVersion;
    obj.ibc_port_id = message.ibcPortId;
    if (message.legacyOracleIds) {
      obj.legacy_oracle_ids = message.legacyOracleIds.map(e => e.toString());
    } else {
      obj.legacy_oracle_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: BandIBCParamsAminoMsg): BandIBCParams {
    return BandIBCParams.fromAmino(object.value);
  },
  fromProtoMsg(message: BandIBCParamsProtoMsg): BandIBCParams {
    return BandIBCParams.decode(message.value);
  },
  toProto(message: BandIBCParams): Uint8Array {
    return BandIBCParams.encode(message).finish();
  },
  toProtoMsg(message: BandIBCParams): BandIBCParamsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.BandIBCParams",
      value: BandIBCParams.encode(message).finish()
    };
  }
};
function createBaseSymbolPriceTimestamp(): SymbolPriceTimestamp {
  return {
    oracle: 0,
    symbolId: "",
    timestamp: BigInt(0)
  };
}
export const SymbolPriceTimestamp = {
  typeUrl: "/injective.oracle.v1beta1.SymbolPriceTimestamp",
  encode(message: SymbolPriceTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }
    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): SymbolPriceTimestamp {
    return {
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : -1,
      symbolId: isSet(object.symbolId) ? String(object.symbolId) : "",
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<SymbolPriceTimestamp>): SymbolPriceTimestamp {
    const message = createBaseSymbolPriceTimestamp();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SymbolPriceTimestampAmino): SymbolPriceTimestamp {
    return {
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : -1,
      symbolId: object.symbol_id,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: SymbolPriceTimestamp): SymbolPriceTimestampAmino {
    const obj: any = {};
    obj.oracle = message.oracle;
    obj.symbol_id = message.symbolId;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SymbolPriceTimestampAminoMsg): SymbolPriceTimestamp {
    return SymbolPriceTimestamp.fromAmino(object.value);
  },
  fromProtoMsg(message: SymbolPriceTimestampProtoMsg): SymbolPriceTimestamp {
    return SymbolPriceTimestamp.decode(message.value);
  },
  toProto(message: SymbolPriceTimestamp): Uint8Array {
    return SymbolPriceTimestamp.encode(message).finish();
  },
  toProtoMsg(message: SymbolPriceTimestamp): SymbolPriceTimestampProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SymbolPriceTimestamp",
      value: SymbolPriceTimestamp.encode(message).finish()
    };
  }
};
function createBaseLastPriceTimestamps(): LastPriceTimestamps {
  return {
    lastPriceTimestamps: []
  };
}
export const LastPriceTimestamps = {
  typeUrl: "/injective.oracle.v1beta1.LastPriceTimestamps",
  encode(message: LastPriceTimestamps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LastPriceTimestampsAmino): LastPriceTimestamps {
    return {
      lastPriceTimestamps: Array.isArray(object?.last_price_timestamps) ? object.last_price_timestamps.map((e: any) => SymbolPriceTimestamp.fromAmino(e)) : []
    };
  },
  toAmino(message: LastPriceTimestamps): LastPriceTimestampsAmino {
    const obj: any = {};
    if (message.lastPriceTimestamps) {
      obj.last_price_timestamps = message.lastPriceTimestamps.map(e => e ? SymbolPriceTimestamp.toAmino(e) : undefined);
    } else {
      obj.last_price_timestamps = [];
    }
    return obj;
  },
  fromAminoMsg(object: LastPriceTimestampsAminoMsg): LastPriceTimestamps {
    return LastPriceTimestamps.fromAmino(object.value);
  },
  fromProtoMsg(message: LastPriceTimestampsProtoMsg): LastPriceTimestamps {
    return LastPriceTimestamps.decode(message.value);
  },
  toProto(message: LastPriceTimestamps): Uint8Array {
    return LastPriceTimestamps.encode(message).finish();
  },
  toProtoMsg(message: LastPriceTimestamps): LastPriceTimestampsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.LastPriceTimestamps",
      value: LastPriceTimestamps.encode(message).finish()
    };
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
  typeUrl: "/injective.oracle.v1beta1.PriceRecords",
  encode(message: PriceRecords, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : -1,
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
  },
  fromAmino(object: PriceRecordsAmino): PriceRecords {
    return {
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : -1,
      symbolId: object.symbol_id,
      latestPriceRecords: Array.isArray(object?.latest_price_records) ? object.latest_price_records.map((e: any) => PriceRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: PriceRecords): PriceRecordsAmino {
    const obj: any = {};
    obj.oracle = message.oracle;
    obj.symbol_id = message.symbolId;
    if (message.latestPriceRecords) {
      obj.latest_price_records = message.latestPriceRecords.map(e => e ? PriceRecord.toAmino(e) : undefined);
    } else {
      obj.latest_price_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: PriceRecordsAminoMsg): PriceRecords {
    return PriceRecords.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceRecordsProtoMsg): PriceRecords {
    return PriceRecords.decode(message.value);
  },
  toProto(message: PriceRecords): Uint8Array {
    return PriceRecords.encode(message).finish();
  },
  toProtoMsg(message: PriceRecords): PriceRecordsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PriceRecords",
      value: PriceRecords.encode(message).finish()
    };
  }
};
function createBasePriceRecord(): PriceRecord {
  return {
    timestamp: BigInt(0),
    price: ""
  };
}
export const PriceRecord = {
  typeUrl: "/injective.oracle.v1beta1.PriceRecord",
  encode(message: PriceRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): PriceRecord {
    return {
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<PriceRecord>): PriceRecord {
    const message = createBasePriceRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: PriceRecordAmino): PriceRecord {
    return {
      timestamp: BigInt(object.timestamp),
      price: object.price
    };
  },
  toAmino(message: PriceRecord): PriceRecordAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.price = message.price;
    return obj;
  },
  fromAminoMsg(object: PriceRecordAminoMsg): PriceRecord {
    return PriceRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceRecordProtoMsg): PriceRecord {
    return PriceRecord.decode(message.value);
  },
  toProto(message: PriceRecord): Uint8Array {
    return PriceRecord.encode(message).finish();
  },
  toProtoMsg(message: PriceRecord): PriceRecordProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PriceRecord",
      value: PriceRecord.encode(message).finish()
    };
  }
};
function createBaseMetadataStatistics(): MetadataStatistics {
  return {
    groupCount: 0,
    recordsSampleSize: 0,
    mean: "",
    twap: "",
    firstTimestamp: BigInt(0),
    lastTimestamp: BigInt(0),
    minPrice: "",
    maxPrice: "",
    medianPrice: ""
  };
}
export const MetadataStatistics = {
  typeUrl: "/injective.oracle.v1beta1.MetadataStatistics",
  encode(message: MetadataStatistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupCount !== 0) {
      writer.uint32(8).uint32(message.groupCount);
    }
    if (message.recordsSampleSize !== 0) {
      writer.uint32(16).uint32(message.recordsSampleSize);
    }
    if (message.mean !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.mean, 18).atomics);
    }
    if (message.twap !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.twap, 18).atomics);
    }
    if (message.firstTimestamp !== BigInt(0)) {
      writer.uint32(40).int64(message.firstTimestamp);
    }
    if (message.lastTimestamp !== BigInt(0)) {
      writer.uint32(48).int64(message.lastTimestamp);
    }
    if (message.minPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.minPrice, 18).atomics);
    }
    if (message.maxPrice !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
    }
    if (message.medianPrice !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.medianPrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MetadataStatistics {
    return {
      groupCount: isSet(object.groupCount) ? Number(object.groupCount) : 0,
      recordsSampleSize: isSet(object.recordsSampleSize) ? Number(object.recordsSampleSize) : 0,
      mean: isSet(object.mean) ? String(object.mean) : "",
      twap: isSet(object.twap) ? String(object.twap) : "",
      firstTimestamp: isSet(object.firstTimestamp) ? BigInt(object.firstTimestamp.toString()) : BigInt(0),
      lastTimestamp: isSet(object.lastTimestamp) ? BigInt(object.lastTimestamp.toString()) : BigInt(0),
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
    message.firstTimestamp = object.firstTimestamp !== undefined && object.firstTimestamp !== null ? BigInt(object.firstTimestamp.toString()) : BigInt(0);
    message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? BigInt(object.lastTimestamp.toString()) : BigInt(0);
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.medianPrice = object.medianPrice ?? "";
    return message;
  },
  fromAmino(object: MetadataStatisticsAmino): MetadataStatistics {
    return {
      groupCount: object.group_count,
      recordsSampleSize: object.records_sample_size,
      mean: object.mean,
      twap: object.twap,
      firstTimestamp: BigInt(object.first_timestamp),
      lastTimestamp: BigInt(object.last_timestamp),
      minPrice: object.min_price,
      maxPrice: object.max_price,
      medianPrice: object.median_price
    };
  },
  toAmino(message: MetadataStatistics): MetadataStatisticsAmino {
    const obj: any = {};
    obj.group_count = message.groupCount;
    obj.records_sample_size = message.recordsSampleSize;
    obj.mean = message.mean;
    obj.twap = message.twap;
    obj.first_timestamp = message.firstTimestamp ? message.firstTimestamp.toString() : undefined;
    obj.last_timestamp = message.lastTimestamp ? message.lastTimestamp.toString() : undefined;
    obj.min_price = message.minPrice;
    obj.max_price = message.maxPrice;
    obj.median_price = message.medianPrice;
    return obj;
  },
  fromAminoMsg(object: MetadataStatisticsAminoMsg): MetadataStatistics {
    return MetadataStatistics.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataStatisticsProtoMsg): MetadataStatistics {
    return MetadataStatistics.decode(message.value);
  },
  toProto(message: MetadataStatistics): Uint8Array {
    return MetadataStatistics.encode(message).finish();
  },
  toProtoMsg(message: MetadataStatistics): MetadataStatisticsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MetadataStatistics",
      value: MetadataStatistics.encode(message).finish()
    };
  }
};
function createBasePriceAttestation(): PriceAttestation {
  return {
    priceId: "",
    price: BigInt(0),
    conf: BigInt(0),
    expo: 0,
    emaPrice: BigInt(0),
    emaConf: BigInt(0),
    emaExpo: 0,
    publishTime: BigInt(0)
  };
}
export const PriceAttestation = {
  typeUrl: "/injective.oracle.v1beta1.PriceAttestation",
  encode(message: PriceAttestation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceId !== "") {
      writer.uint32(10).string(message.priceId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(16).int64(message.price);
    }
    if (message.conf !== BigInt(0)) {
      writer.uint32(24).uint64(message.conf);
    }
    if (message.expo !== 0) {
      writer.uint32(32).int32(message.expo);
    }
    if (message.emaPrice !== BigInt(0)) {
      writer.uint32(40).int64(message.emaPrice);
    }
    if (message.emaConf !== BigInt(0)) {
      writer.uint32(48).uint64(message.emaConf);
    }
    if (message.emaExpo !== 0) {
      writer.uint32(56).int32(message.emaExpo);
    }
    if (message.publishTime !== BigInt(0)) {
      writer.uint32(64).int64(message.publishTime);
    }
    return writer;
  },
  fromJSON(object: any): PriceAttestation {
    return {
      priceId: isSet(object.priceId) ? String(object.priceId) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      conf: isSet(object.conf) ? BigInt(object.conf.toString()) : BigInt(0),
      expo: isSet(object.expo) ? Number(object.expo) : 0,
      emaPrice: isSet(object.emaPrice) ? BigInt(object.emaPrice.toString()) : BigInt(0),
      emaConf: isSet(object.emaConf) ? BigInt(object.emaConf.toString()) : BigInt(0),
      emaExpo: isSet(object.emaExpo) ? Number(object.emaExpo) : 0,
      publishTime: isSet(object.publishTime) ? BigInt(object.publishTime.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PriceAttestation>): PriceAttestation {
    const message = createBasePriceAttestation();
    message.priceId = object.priceId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.conf = object.conf !== undefined && object.conf !== null ? BigInt(object.conf.toString()) : BigInt(0);
    message.expo = object.expo ?? 0;
    message.emaPrice = object.emaPrice !== undefined && object.emaPrice !== null ? BigInt(object.emaPrice.toString()) : BigInt(0);
    message.emaConf = object.emaConf !== undefined && object.emaConf !== null ? BigInt(object.emaConf.toString()) : BigInt(0);
    message.emaExpo = object.emaExpo ?? 0;
    message.publishTime = object.publishTime !== undefined && object.publishTime !== null ? BigInt(object.publishTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceAttestationAmino): PriceAttestation {
    return {
      priceId: object.price_id,
      price: BigInt(object.price),
      conf: BigInt(object.conf),
      expo: object.expo,
      emaPrice: BigInt(object.ema_price),
      emaConf: BigInt(object.ema_conf),
      emaExpo: object.ema_expo,
      publishTime: BigInt(object.publish_time)
    };
  },
  toAmino(message: PriceAttestation): PriceAttestationAmino {
    const obj: any = {};
    obj.price_id = message.priceId;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.conf = message.conf ? message.conf.toString() : undefined;
    obj.expo = message.expo;
    obj.ema_price = message.emaPrice ? message.emaPrice.toString() : undefined;
    obj.ema_conf = message.emaConf ? message.emaConf.toString() : undefined;
    obj.ema_expo = message.emaExpo;
    obj.publish_time = message.publishTime ? message.publishTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PriceAttestationAminoMsg): PriceAttestation {
    return PriceAttestation.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceAttestationProtoMsg): PriceAttestation {
    return PriceAttestation.decode(message.value);
  },
  toProto(message: PriceAttestation): Uint8Array {
    return PriceAttestation.encode(message).finish();
  },
  toProtoMsg(message: PriceAttestation): PriceAttestationProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PriceAttestation",
      value: PriceAttestation.encode(message).finish()
    };
  }
};