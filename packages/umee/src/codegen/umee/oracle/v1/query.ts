import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType, Params, ParamsSDKType } from "./oracle";
import { Price, PriceSDKType } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRates {
  /** denom defines the denomination to query for. */
  denom: string;
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRatesSDKType {
  denom: string;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchangeRates: DecCoin[];
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
  exchange_rates: DecCoinSDKType[];
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRates {}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesSDKType {}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponse {
  /**
   * activeRates defines a list of the denomination which oracle prices agreed
   * upon.
   */
  activeRates: string[];
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseSDKType {
  active_rates: string[];
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegation {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationSDKType {
  validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator */
  feederAddr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
  feeder_addr: string;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounter {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterSDKType {
  validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  /** miss_counter defines the oracle miss counter of a validator */
  missCounter: Long;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
  miss_counter: Long;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindow {}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowSDKType {}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponse {
  /**
   * window_progress defines the number of voting periods
   * since the last slashing event would have taken place.
   */
  windowProgress: Long;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
  window_progress: Long;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevote {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteSDKType {
  validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period
   */
  aggregatePrevote?: AggregateExchangeRatePrevote;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
  aggregate_prevote?: AggregateExchangeRatePrevoteSDKType;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotes {}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesSDKType {}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period
   */
  aggregatePrevotes: AggregateExchangeRatePrevote[];
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseSDKType {
  aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVote {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteSDKType {
  validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period
   */
  aggregateVote?: AggregateExchangeRateVote;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
  aggregate_vote?: AggregateExchangeRateVoteSDKType;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotes {}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesSDKType {}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period
   */
  aggregateVotes: AggregateExchangeRateVote[];
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseSDKType {
  aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParams {}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryMedians is the request type for the Query/Medians RPC Response. */
export interface QueryMedians {
  /** denom defines the denomination to query for. */
  denom: string;
  /**
   * numStamps defines the number of median stamps to query for. numStamps
   * must be greater than 0.
   */
  numStamps: number;
}
/** QueryMedians is the request type for the Query/Medians RPC Response. */
export interface QueryMediansSDKType {
  denom: string;
  numStamps: number;
}
/**
 * QueryMediansResponse is response type for the
 * Query/Medians RPC method.
 */
export interface QueryMediansResponse {
  /** medians defines a list of the medians for all stamped denoms. */
  medians: Price[];
}
/**
 * QueryMediansResponse is response type for the
 * Query/Medians RPC method.
 */
export interface QueryMediansResponseSDKType {
  medians: PriceSDKType[];
}
/** QueryMedianDeviations is the request type for the Query/MedianDeviations RPC Response. */
export interface QueryMedianDeviations {
  /** denom defines the denomination to query for. */
  denom: string;
}
/** QueryMedianDeviations is the request type for the Query/MedianDeviations RPC Response. */
export interface QueryMedianDeviationsSDKType {
  denom: string;
}
/**
 * QueryMedianDeviationsResponse is response type for the
 * Query/MedianDeviations RPC method.
 */
export interface QueryMedianDeviationsResponse {
  /** medians defines a list of the median deviations for all stamped denoms. */
  medianDeviations: Price[];
}
/**
 * QueryMedianDeviationsResponse is response type for the
 * Query/MedianDeviations RPC method.
 */
export interface QueryMedianDeviationsResponseSDKType {
  medianDeviations: PriceSDKType[];
}
/** QueryAvgPrice is a request type for AvgPrice method */
export interface QueryAvgPrice {
  denom: string;
}
/** QueryAvgPrice is a request type for AvgPrice method */
export interface QueryAvgPriceSDKType {
  denom: string;
}
/** QueryAvgPriceResponse is a response type for AvgPrice method */
export interface QueryAvgPriceResponse {
  price: string;
}
/** QueryAvgPriceResponse is a response type for AvgPrice method */
export interface QueryAvgPriceResponseSDKType {
  price: string;
}
function createBaseQueryExchangeRates(): QueryExchangeRates {
  return {
    denom: ""
  };
}
export const QueryExchangeRates = {
  encode(message: QueryExchangeRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeRates {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryExchangeRates>): QueryExchangeRates {
    const message = createBaseQueryExchangeRates();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    exchangeRates: []
  };
}
export const QueryExchangeRatesResponse = {
  encode(message: QueryExchangeRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeRatesResponse {
    return {
      exchangeRates: Array.isArray(object?.exchangeRates) ? object.exchangeRates.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryActiveExchangeRates(): QueryActiveExchangeRates {
  return {};
}
export const QueryActiveExchangeRates = {
  encode(_: QueryActiveExchangeRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryActiveExchangeRates {
    return {};
  },
  fromPartial(_: Partial<QueryActiveExchangeRates>): QueryActiveExchangeRates {
    const message = createBaseQueryActiveExchangeRates();
    return message;
  }
};
function createBaseQueryActiveExchangeRatesResponse(): QueryActiveExchangeRatesResponse {
  return {
    activeRates: []
  };
}
export const QueryActiveExchangeRatesResponse = {
  encode(message: QueryActiveExchangeRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activeRates) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryActiveExchangeRatesResponse {
    return {
      activeRates: Array.isArray(object?.activeRates) ? object.activeRates.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryActiveExchangeRatesResponse>): QueryActiveExchangeRatesResponse {
    const message = createBaseQueryActiveExchangeRatesResponse();
    message.activeRates = object.activeRates?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryFeederDelegation(): QueryFeederDelegation {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegation = {
  encode(message: QueryFeederDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryFeederDelegation {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryFeederDelegation>): QueryFeederDelegation {
    const message = createBaseQueryFeederDelegation();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }
};
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  encode(message: QueryFeederDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryFeederDelegationResponse {
    return {
      feederAddr: isSet(object.feederAddr) ? String(object.feederAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? "";
    return message;
  }
};
function createBaseQueryMissCounter(): QueryMissCounter {
  return {
    validatorAddr: ""
  };
}
export const QueryMissCounter = {
  encode(message: QueryMissCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCounter {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryMissCounter>): QueryMissCounter {
    const message = createBaseQueryMissCounter();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }
};
function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return {
    missCounter: Long.UZERO
  };
}
export const QueryMissCounterResponse = {
  encode(message: QueryMissCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.missCounter.isZero()) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCounterResponse {
    return {
      missCounter: isSet(object.missCounter) ? Long.fromValue(object.missCounter) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? Long.fromValue(object.missCounter) : Long.UZERO;
    return message;
  }
};
function createBaseQuerySlashWindow(): QuerySlashWindow {
  return {};
}
export const QuerySlashWindow = {
  encode(_: QuerySlashWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QuerySlashWindow {
    return {};
  },
  fromPartial(_: Partial<QuerySlashWindow>): QuerySlashWindow {
    const message = createBaseQuerySlashWindow();
    return message;
  }
};
function createBaseQuerySlashWindowResponse(): QuerySlashWindowResponse {
  return {
    windowProgress: Long.UZERO
  };
}
export const QuerySlashWindowResponse = {
  encode(message: QuerySlashWindowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.windowProgress.isZero()) {
      writer.uint32(8).uint64(message.windowProgress);
    }
    return writer;
  },
  fromJSON(object: any): QuerySlashWindowResponse {
    return {
      windowProgress: isSet(object.windowProgress) ? Long.fromValue(object.windowProgress) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QuerySlashWindowResponse>): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? Long.fromValue(object.windowProgress) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAggregatePrevote(): QueryAggregatePrevote {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregatePrevote = {
  encode(message: QueryAggregatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregatePrevote {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregatePrevote>): QueryAggregatePrevote {
    const message = createBaseQueryAggregatePrevote();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }
};
function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return {
    aggregatePrevote: undefined
  };
}
export const QueryAggregatePrevoteResponse = {
  encode(message: QueryAggregatePrevoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregatePrevoteResponse {
    return {
      aggregatePrevote: isSet(object.aggregatePrevote) ? AggregateExchangeRatePrevote.fromJSON(object.aggregatePrevote) : undefined
    };
  },
  fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    message.aggregatePrevote = object.aggregatePrevote !== undefined && object.aggregatePrevote !== null ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote) : undefined;
    return message;
  }
};
function createBaseQueryAggregatePrevotes(): QueryAggregatePrevotes {
  return {};
}
export const QueryAggregatePrevotes = {
  encode(_: QueryAggregatePrevotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAggregatePrevotes {
    return {};
  },
  fromPartial(_: Partial<QueryAggregatePrevotes>): QueryAggregatePrevotes {
    const message = createBaseQueryAggregatePrevotes();
    return message;
  }
};
function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return {
    aggregatePrevotes: []
  };
}
export const QueryAggregatePrevotesResponse = {
  encode(message: QueryAggregatePrevotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregatePrevotesResponse {
    return {
      aggregatePrevotes: Array.isArray(object?.aggregatePrevotes) ? object.aggregatePrevotes.map((e: any) => AggregateExchangeRatePrevote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAggregateVote(): QueryAggregateVote {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregateVote = {
  encode(message: QueryAggregateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVote {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregateVote>): QueryAggregateVote {
    const message = createBaseQueryAggregateVote();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }
};
function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return {
    aggregateVote: undefined
  };
}
export const QueryAggregateVoteResponse = {
  encode(message: QueryAggregateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVoteResponse {
    return {
      aggregateVote: isSet(object.aggregateVote) ? AggregateExchangeRateVote.fromJSON(object.aggregateVote) : undefined
    };
  },
  fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    message.aggregateVote = object.aggregateVote !== undefined && object.aggregateVote !== null ? AggregateExchangeRateVote.fromPartial(object.aggregateVote) : undefined;
    return message;
  }
};
function createBaseQueryAggregateVotes(): QueryAggregateVotes {
  return {};
}
export const QueryAggregateVotes = {
  encode(_: QueryAggregateVotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAggregateVotes {
    return {};
  },
  fromPartial(_: Partial<QueryAggregateVotes>): QueryAggregateVotes {
    const message = createBaseQueryAggregateVotes();
    return message;
  }
};
function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return {
    aggregateVotes: []
  };
}
export const QueryAggregateVotesResponse = {
  encode(message: QueryAggregateVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVotesResponse {
    return {
      aggregateVotes: Array.isArray(object?.aggregateVotes) ? object.aggregateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  encode(_: QueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
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
function createBaseQueryMedians(): QueryMedians {
  return {
    denom: "",
    numStamps: 0
  };
}
export const QueryMedians = {
  encode(message: QueryMedians, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.numStamps !== 0) {
      writer.uint32(16).uint32(message.numStamps);
    }
    return writer;
  },
  fromJSON(object: any): QueryMedians {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      numStamps: isSet(object.numStamps) ? Number(object.numStamps) : 0
    };
  },
  fromPartial(object: Partial<QueryMedians>): QueryMedians {
    const message = createBaseQueryMedians();
    message.denom = object.denom ?? "";
    message.numStamps = object.numStamps ?? 0;
    return message;
  }
};
function createBaseQueryMediansResponse(): QueryMediansResponse {
  return {
    medians: []
  };
}
export const QueryMediansResponse = {
  encode(message: QueryMediansResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.medians) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMediansResponse {
    return {
      medians: Array.isArray(object?.medians) ? object.medians.map((e: any) => Price.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMediansResponse>): QueryMediansResponse {
    const message = createBaseQueryMediansResponse();
    message.medians = object.medians?.map(e => Price.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryMedianDeviations(): QueryMedianDeviations {
  return {
    denom: ""
  };
}
export const QueryMedianDeviations = {
  encode(message: QueryMedianDeviations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryMedianDeviations {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryMedianDeviations>): QueryMedianDeviations {
    const message = createBaseQueryMedianDeviations();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryMedianDeviationsResponse(): QueryMedianDeviationsResponse {
  return {
    medianDeviations: []
  };
}
export const QueryMedianDeviationsResponse = {
  encode(message: QueryMedianDeviationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.medianDeviations) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMedianDeviationsResponse {
    return {
      medianDeviations: Array.isArray(object?.medianDeviations) ? object.medianDeviations.map((e: any) => Price.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMedianDeviationsResponse>): QueryMedianDeviationsResponse {
    const message = createBaseQueryMedianDeviationsResponse();
    message.medianDeviations = object.medianDeviations?.map(e => Price.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAvgPrice(): QueryAvgPrice {
  return {
    denom: ""
  };
}
export const QueryAvgPrice = {
  encode(message: QueryAvgPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryAvgPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryAvgPrice>): QueryAvgPrice {
    const message = createBaseQueryAvgPrice();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryAvgPriceResponse(): QueryAvgPriceResponse {
  return {
    price: ""
  };
}
export const QueryAvgPriceResponse = {
  encode(message: QueryAvgPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    return writer;
  },
  fromJSON(object: any): QueryAvgPriceResponse {
    return {
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<QueryAvgPriceResponse>): QueryAvgPriceResponse {
    const message = createBaseQueryAvgPriceResponse();
    message.price = object.price ?? "";
    return message;
  }
};