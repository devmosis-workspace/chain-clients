import { OracleType, OracleInfo, OracleInfoSDKType, PythPriceState, PythPriceStateSDKType, Params, ParamsSDKType, BandPriceState, BandPriceStateSDKType, PriceFeedState, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateSDKType, PriceState, PriceStateSDKType, PriceRecords, PriceRecordsSDKType, MetadataStatistics, MetadataStatisticsSDKType, PriceRecord, PriceRecordSDKType, ProviderInfo, ProviderInfoSDKType, ProviderState, ProviderStateSDKType, oracleTypeFromJSON } from "./oracle";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import { Long, isSet } from "../../../helpers";
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
export interface QueryParamsRequest {}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsRequestSDKType {}
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
export interface QueryBandRelayersRequest {}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersRequestSDKType {}
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
export interface QueryBandPriceStatesRequest {}
/**
 * QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates
 * RPC method.
 */
export interface QueryBandPriceStatesRequestSDKType {}
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
export interface QueryBandIBCPriceStatesRequest {}
/**
 * QueryBandIBCPriceStatesRequest is the request type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesRequestSDKType {}
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
export interface QueryPriceFeedPriceStatesRequest {}
/**
 * QueryPriceFeedPriceStatesRequest is the request type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesRequestSDKType {}
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
export interface QueryCoinbasePriceStatesRequest {}
/**
 * QueryCoinbasePriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesRequestSDKType {}
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
export interface QueryPythPriceStatesRequest {}
/**
 * QueryPythPriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesRequestSDKType {}
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
export interface QueryModuleStateRequest {}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {}
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
export interface QueryOracleProvidersInfoRequest {}
export interface QueryOracleProvidersInfoRequestSDKType {}
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
function createBaseQueryPythPriceRequest(): QueryPythPriceRequest {
  return {
    priceId: ""
  };
}
export const QueryPythPriceRequest = {
  encode(message: QueryPythPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceId !== "") {
      writer.uint32(10).string(message.priceId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPythPriceRequest {
    return {
      priceId: isSet(object.priceId) ? String(object.priceId) : ""
    };
  },
  fromPartial(object: Partial<QueryPythPriceRequest>): QueryPythPriceRequest {
    const message = createBaseQueryPythPriceRequest();
    message.priceId = object.priceId ?? "";
    return message;
  }
};
function createBaseQueryPythPriceResponse(): QueryPythPriceResponse {
  return {
    priceState: undefined
  };
}
export const QueryPythPriceResponse = {
  encode(message: QueryPythPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceState !== undefined) {
      PythPriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPythPriceResponse {
    return {
      priceState: isSet(object.priceState) ? PythPriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<QueryPythPriceResponse>): QueryPythPriceResponse {
    const message = createBaseQueryPythPriceResponse();
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PythPriceState.fromPartial(object.priceState) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryBandRelayersRequest(): QueryBandRelayersRequest {
  return {};
}
export const QueryBandRelayersRequest = {
  encode(_: QueryBandRelayersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBandRelayersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBandRelayersRequest>): QueryBandRelayersRequest {
    const message = createBaseQueryBandRelayersRequest();
    return message;
  }
};
function createBaseQueryBandRelayersResponse(): QueryBandRelayersResponse {
  return {
    relayers: []
  };
}
export const QueryBandRelayersResponse = {
  encode(message: QueryBandRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryBandRelayersResponse {
    return {
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBandRelayersResponse>): QueryBandRelayersResponse {
    const message = createBaseQueryBandRelayersResponse();
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryBandPriceStatesRequest(): QueryBandPriceStatesRequest {
  return {};
}
export const QueryBandPriceStatesRequest = {
  encode(_: QueryBandPriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBandPriceStatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBandPriceStatesRequest>): QueryBandPriceStatesRequest {
    const message = createBaseQueryBandPriceStatesRequest();
    return message;
  }
};
function createBaseQueryBandPriceStatesResponse(): QueryBandPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryBandPriceStatesResponse = {
  encode(message: QueryBandPriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBandPriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.priceStates) ? object.priceStates.map((e: any) => BandPriceState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBandPriceStatesResponse>): QueryBandPriceStatesResponse {
    const message = createBaseQueryBandPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryBandIBCPriceStatesRequest(): QueryBandIBCPriceStatesRequest {
  return {};
}
export const QueryBandIBCPriceStatesRequest = {
  encode(_: QueryBandIBCPriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBandIBCPriceStatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBandIBCPriceStatesRequest>): QueryBandIBCPriceStatesRequest {
    const message = createBaseQueryBandIBCPriceStatesRequest();
    return message;
  }
};
function createBaseQueryBandIBCPriceStatesResponse(): QueryBandIBCPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryBandIBCPriceStatesResponse = {
  encode(message: QueryBandIBCPriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBandIBCPriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.priceStates) ? object.priceStates.map((e: any) => BandPriceState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBandIBCPriceStatesResponse>): QueryBandIBCPriceStatesResponse {
    const message = createBaseQueryBandIBCPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryPriceFeedPriceStatesRequest(): QueryPriceFeedPriceStatesRequest {
  return {};
}
export const QueryPriceFeedPriceStatesRequest = {
  encode(_: QueryPriceFeedPriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryPriceFeedPriceStatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPriceFeedPriceStatesRequest>): QueryPriceFeedPriceStatesRequest {
    const message = createBaseQueryPriceFeedPriceStatesRequest();
    return message;
  }
};
function createBaseQueryPriceFeedPriceStatesResponse(): QueryPriceFeedPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryPriceFeedPriceStatesResponse = {
  encode(message: QueryPriceFeedPriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      PriceFeedState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPriceFeedPriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.priceStates) ? object.priceStates.map((e: any) => PriceFeedState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPriceFeedPriceStatesResponse>): QueryPriceFeedPriceStatesResponse {
    const message = createBaseQueryPriceFeedPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryCoinbasePriceStatesRequest(): QueryCoinbasePriceStatesRequest {
  return {};
}
export const QueryCoinbasePriceStatesRequest = {
  encode(_: QueryCoinbasePriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryCoinbasePriceStatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCoinbasePriceStatesRequest>): QueryCoinbasePriceStatesRequest {
    const message = createBaseQueryCoinbasePriceStatesRequest();
    return message;
  }
};
function createBaseQueryCoinbasePriceStatesResponse(): QueryCoinbasePriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryCoinbasePriceStatesResponse = {
  encode(message: QueryCoinbasePriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      CoinbasePriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCoinbasePriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.priceStates) ? object.priceStates.map((e: any) => CoinbasePriceState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCoinbasePriceStatesResponse>): QueryCoinbasePriceStatesResponse {
    const message = createBaseQueryCoinbasePriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryPythPriceStatesRequest(): QueryPythPriceStatesRequest {
  return {};
}
export const QueryPythPriceStatesRequest = {
  encode(_: QueryPythPriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryPythPriceStatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPythPriceStatesRequest>): QueryPythPriceStatesRequest {
    const message = createBaseQueryPythPriceStatesRequest();
    return message;
  }
};
function createBaseQueryPythPriceStatesResponse(): QueryPythPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryPythPriceStatesResponse = {
  encode(message: QueryPythPriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      PythPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPythPriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.priceStates) ? object.priceStates.map((e: any) => PythPriceState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPythPriceStatesResponse>): QueryPythPriceStatesResponse {
    const message = createBaseQueryPythPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => PythPriceState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryProviderPriceStateRequest(): QueryProviderPriceStateRequest {
  return {
    provider: "",
    symbol: ""
  };
}
export const QueryProviderPriceStateRequest = {
  encode(message: QueryProviderPriceStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderPriceStateRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  fromPartial(object: Partial<QueryProviderPriceStateRequest>): QueryProviderPriceStateRequest {
    const message = createBaseQueryProviderPriceStateRequest();
    message.provider = object.provider ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  }
};
function createBaseQueryProviderPriceStateResponse(): QueryProviderPriceStateResponse {
  return {
    priceState: undefined
  };
}
export const QueryProviderPriceStateResponse = {
  encode(message: QueryProviderPriceStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderPriceStateResponse {
    return {
      priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined
    };
  },
  fromPartial(object: Partial<QueryProviderPriceStateResponse>): QueryProviderPriceStateResponse {
    const message = createBaseQueryProviderPriceStateResponse();
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    return {
      state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }
};
function createBaseQueryHistoricalPriceRecordsRequest(): QueryHistoricalPriceRecordsRequest {
  return {
    oracle: 0,
    symbolId: ""
  };
}
export const QueryHistoricalPriceRecordsRequest = {
  encode(message: QueryHistoricalPriceRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }
    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryHistoricalPriceRecordsRequest {
    return {
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : 0,
      symbolId: isSet(object.symbolId) ? String(object.symbolId) : ""
    };
  },
  fromPartial(object: Partial<QueryHistoricalPriceRecordsRequest>): QueryHistoricalPriceRecordsRequest {
    const message = createBaseQueryHistoricalPriceRecordsRequest();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    return message;
  }
};
function createBaseQueryHistoricalPriceRecordsResponse(): QueryHistoricalPriceRecordsResponse {
  return {
    priceRecords: []
  };
}
export const QueryHistoricalPriceRecordsResponse = {
  encode(message: QueryHistoricalPriceRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceRecords) {
      PriceRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryHistoricalPriceRecordsResponse {
    return {
      priceRecords: Array.isArray(object?.priceRecords) ? object.priceRecords.map((e: any) => PriceRecords.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryHistoricalPriceRecordsResponse>): QueryHistoricalPriceRecordsResponse {
    const message = createBaseQueryHistoricalPriceRecordsResponse();
    message.priceRecords = object.priceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    return message;
  }
};
function createBaseOracleHistoryOptions(): OracleHistoryOptions {
  return {
    maxAge: Long.UZERO,
    includeRawHistory: false,
    includeMetadata: false
  };
}
export const OracleHistoryOptions = {
  encode(message: OracleHistoryOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxAge.isZero()) {
      writer.uint32(8).uint64(message.maxAge);
    }
    if (message.includeRawHistory === true) {
      writer.uint32(16).bool(message.includeRawHistory);
    }
    if (message.includeMetadata === true) {
      writer.uint32(24).bool(message.includeMetadata);
    }
    return writer;
  },
  fromJSON(object: any): OracleHistoryOptions {
    return {
      maxAge: isSet(object.maxAge) ? Long.fromValue(object.maxAge) : Long.UZERO,
      includeRawHistory: isSet(object.includeRawHistory) ? Boolean(object.includeRawHistory) : false,
      includeMetadata: isSet(object.includeMetadata) ? Boolean(object.includeMetadata) : false
    };
  },
  fromPartial(object: Partial<OracleHistoryOptions>): OracleHistoryOptions {
    const message = createBaseOracleHistoryOptions();
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? Long.fromValue(object.maxAge) : Long.UZERO;
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  }
};
function createBaseQueryOracleVolatilityRequest(): QueryOracleVolatilityRequest {
  return {
    baseInfo: undefined,
    quoteInfo: undefined,
    oracleHistoryOptions: undefined
  };
}
export const QueryOracleVolatilityRequest = {
  encode(message: QueryOracleVolatilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseInfo !== undefined) {
      OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.quoteInfo !== undefined) {
      OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.oracleHistoryOptions !== undefined) {
      OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOracleVolatilityRequest {
    return {
      baseInfo: isSet(object.baseInfo) ? OracleInfo.fromJSON(object.baseInfo) : undefined,
      quoteInfo: isSet(object.quoteInfo) ? OracleInfo.fromJSON(object.quoteInfo) : undefined,
      oracleHistoryOptions: isSet(object.oracleHistoryOptions) ? OracleHistoryOptions.fromJSON(object.oracleHistoryOptions) : undefined
    };
  },
  fromPartial(object: Partial<QueryOracleVolatilityRequest>): QueryOracleVolatilityRequest {
    const message = createBaseQueryOracleVolatilityRequest();
    message.baseInfo = object.baseInfo !== undefined && object.baseInfo !== null ? OracleInfo.fromPartial(object.baseInfo) : undefined;
    message.quoteInfo = object.quoteInfo !== undefined && object.quoteInfo !== null ? OracleInfo.fromPartial(object.quoteInfo) : undefined;
    message.oracleHistoryOptions = object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null ? OracleHistoryOptions.fromPartial(object.oracleHistoryOptions) : undefined;
    return message;
  }
};
function createBaseQueryOracleVolatilityResponse(): QueryOracleVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}
export const QueryOracleVolatilityResponse = {
  encode(message: QueryOracleVolatilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volatility !== "") {
      writer.uint32(10).string(message.volatility);
    }
    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rawHistory) {
      PriceRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOracleVolatilityResponse {
    return {
      volatility: isSet(object.volatility) ? String(object.volatility) : "",
      historyMetadata: isSet(object.historyMetadata) ? MetadataStatistics.fromJSON(object.historyMetadata) : undefined,
      rawHistory: Array.isArray(object?.rawHistory) ? object.rawHistory.map((e: any) => PriceRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOracleVolatilityResponse>): QueryOracleVolatilityResponse {
    const message = createBaseQueryOracleVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => PriceRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryOracleProvidersInfoRequest(): QueryOracleProvidersInfoRequest {
  return {};
}
export const QueryOracleProvidersInfoRequest = {
  encode(_: QueryOracleProvidersInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryOracleProvidersInfoRequest {
    return {};
  },
  fromPartial(_: Partial<QueryOracleProvidersInfoRequest>): QueryOracleProvidersInfoRequest {
    const message = createBaseQueryOracleProvidersInfoRequest();
    return message;
  }
};
function createBaseQueryOracleProvidersInfoResponse(): QueryOracleProvidersInfoResponse {
  return {
    providers: []
  };
}
export const QueryOracleProvidersInfoResponse = {
  encode(message: QueryOracleProvidersInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      ProviderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOracleProvidersInfoResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => ProviderInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOracleProvidersInfoResponse>): QueryOracleProvidersInfoResponse {
    const message = createBaseQueryOracleProvidersInfoResponse();
    message.providers = object.providers?.map(e => ProviderInfo.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryOracleProviderPricesRequest(): QueryOracleProviderPricesRequest {
  return {
    provider: ""
  };
}
export const QueryOracleProviderPricesRequest = {
  encode(message: QueryOracleProviderPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    return writer;
  },
  fromJSON(object: any): QueryOracleProviderPricesRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  fromPartial(object: Partial<QueryOracleProviderPricesRequest>): QueryOracleProviderPricesRequest {
    const message = createBaseQueryOracleProviderPricesRequest();
    message.provider = object.provider ?? "";
    return message;
  }
};
function createBaseQueryOracleProviderPricesResponse(): QueryOracleProviderPricesResponse {
  return {
    providerState: []
  };
}
export const QueryOracleProviderPricesResponse = {
  encode(message: QueryOracleProviderPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providerState) {
      ProviderState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOracleProviderPricesResponse {
    return {
      providerState: Array.isArray(object?.providerState) ? object.providerState.map((e: any) => ProviderState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOracleProviderPricesResponse>): QueryOracleProviderPricesResponse {
    const message = createBaseQueryOracleProviderPricesResponse();
    message.providerState = object.providerState?.map(e => ProviderState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryOraclePriceRequest(): QueryOraclePriceRequest {
  return {
    oracleType: 0,
    base: "",
    quote: ""
  };
}
export const QueryOraclePriceRequest = {
  encode(message: QueryOraclePriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleType !== 0) {
      writer.uint32(8).int32(message.oracleType);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    return writer;
  },
  fromJSON(object: any): QueryOraclePriceRequest {
    return {
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : ""
    };
  },
  fromPartial(object: Partial<QueryOraclePriceRequest>): QueryOraclePriceRequest {
    const message = createBaseQueryOraclePriceRequest();
    message.oracleType = object.oracleType ?? 0;
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  }
};
function createBasePricePairState(): PricePairState {
  return {
    pairPrice: "",
    basePrice: "",
    quotePrice: "",
    baseCumulativePrice: "",
    quoteCumulativePrice: "",
    baseTimestamp: Long.ZERO,
    quoteTimestamp: Long.ZERO
  };
}
export const PricePairState = {
  encode(message: PricePairState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairPrice !== "") {
      writer.uint32(10).string(message.pairPrice);
    }
    if (message.basePrice !== "") {
      writer.uint32(18).string(message.basePrice);
    }
    if (message.quotePrice !== "") {
      writer.uint32(26).string(message.quotePrice);
    }
    if (message.baseCumulativePrice !== "") {
      writer.uint32(34).string(message.baseCumulativePrice);
    }
    if (message.quoteCumulativePrice !== "") {
      writer.uint32(42).string(message.quoteCumulativePrice);
    }
    if (!message.baseTimestamp.isZero()) {
      writer.uint32(48).int64(message.baseTimestamp);
    }
    if (!message.quoteTimestamp.isZero()) {
      writer.uint32(56).int64(message.quoteTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): PricePairState {
    return {
      pairPrice: isSet(object.pairPrice) ? String(object.pairPrice) : "",
      basePrice: isSet(object.basePrice) ? String(object.basePrice) : "",
      quotePrice: isSet(object.quotePrice) ? String(object.quotePrice) : "",
      baseCumulativePrice: isSet(object.baseCumulativePrice) ? String(object.baseCumulativePrice) : "",
      quoteCumulativePrice: isSet(object.quoteCumulativePrice) ? String(object.quoteCumulativePrice) : "",
      baseTimestamp: isSet(object.baseTimestamp) ? Long.fromValue(object.baseTimestamp) : Long.ZERO,
      quoteTimestamp: isSet(object.quoteTimestamp) ? Long.fromValue(object.quoteTimestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PricePairState>): PricePairState {
    const message = createBasePricePairState();
    message.pairPrice = object.pairPrice ?? "";
    message.basePrice = object.basePrice ?? "";
    message.quotePrice = object.quotePrice ?? "";
    message.baseCumulativePrice = object.baseCumulativePrice ?? "";
    message.quoteCumulativePrice = object.quoteCumulativePrice ?? "";
    message.baseTimestamp = object.baseTimestamp !== undefined && object.baseTimestamp !== null ? Long.fromValue(object.baseTimestamp) : Long.ZERO;
    message.quoteTimestamp = object.quoteTimestamp !== undefined && object.quoteTimestamp !== null ? Long.fromValue(object.quoteTimestamp) : Long.ZERO;
    return message;
  }
};
function createBaseQueryOraclePriceResponse(): QueryOraclePriceResponse {
  return {
    pricePairState: undefined
  };
}
export const QueryOraclePriceResponse = {
  encode(message: QueryOraclePriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pricePairState !== undefined) {
      PricePairState.encode(message.pricePairState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOraclePriceResponse {
    return {
      pricePairState: isSet(object.pricePairState) ? PricePairState.fromJSON(object.pricePairState) : undefined
    };
  },
  fromPartial(object: Partial<QueryOraclePriceResponse>): QueryOraclePriceResponse {
    const message = createBaseQueryOraclePriceResponse();
    message.pricePairState = object.pricePairState !== undefined && object.pricePairState !== null ? PricePairState.fromPartial(object.pricePairState) : undefined;
    return message;
  }
};