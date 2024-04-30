import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}
export interface QueryExchangeRateRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryExchangeRateRequest";
  value: Uint8Array;
}
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateRequestAmino {
  /** denom defines the denomination to query for. */
  denom?: string;
}
export interface QueryExchangeRateRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryExchangeRateRequest";
  value: QueryExchangeRateRequestAmino;
}
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateRequestSDKType {
  denom: string;
}
/**
 * QueryExchangeRateResponse is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateResponse {
  /** denom defines the denomination to query for. */
  exchangeRate: string;
}
export interface QueryExchangeRateResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryExchangeRateResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRateResponse is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateResponseAmino {
  /** denom defines the denomination to query for. */
  exchange_rate?: string;
}
export interface QueryExchangeRateResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryExchangeRateResponse";
  value: QueryExchangeRateResponseAmino;
}
/**
 * QueryExchangeRateResponse is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateResponseSDKType {
  exchange_rate: string;
}
/**
 * QueryAllExchangeRatesRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryAllExchangeRatesRequest {}
export interface QueryAllExchangeRatesRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAllExchangeRatesRequest";
  value: Uint8Array;
}
/**
 * QueryAllExchangeRatesRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryAllExchangeRatesRequestAmino {}
export interface QueryAllExchangeRatesRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAllExchangeRatesRequest";
  value: QueryAllExchangeRatesRequestAmino;
}
/**
 * QueryAllExchangeRatesRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryAllExchangeRatesRequestSDKType {}
/**
 * QueryAllExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryAllExchangeRatesResponse {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchangeRates: DecCoin[];
}
export interface QueryAllExchangeRatesResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAllExchangeRatesResponse";
  value: Uint8Array;
}
/**
 * QueryAllExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryAllExchangeRatesResponseAmino {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchange_rates?: DecCoinAmino[];
}
export interface QueryAllExchangeRatesResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAllExchangeRatesResponse";
  value: QueryAllExchangeRatesResponseAmino;
}
/**
 * QueryAllExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryAllExchangeRatesResponseSDKType {
  exchange_rates: DecCoinSDKType[];
}
/** QueryActiveExchangeRatesRequest is the request type for the Query/ActiveExchangeRates RPC method. */
export interface QueryActiveExchangeRatesRequest {}
export interface QueryActiveExchangeRatesRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesRequest";
  value: Uint8Array;
}
/** QueryActiveExchangeRatesRequest is the request type for the Query/ActiveExchangeRates RPC method. */
export interface QueryActiveExchangeRatesRequestAmino {}
export interface QueryActiveExchangeRatesRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesRequest";
  value: QueryActiveExchangeRatesRequestAmino;
}
/** QueryActiveExchangeRatesRequest is the request type for the Query/ActiveExchangeRates RPC method. */
export interface QueryActiveExchangeRatesRequestSDKType {}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponse {
  /**
   * activeRates defines a list of the denomination which oracle prices aggreed
   * upon.
   */
  activeRates: string[];
}
export interface QueryActiveExchangeRatesResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesResponse";
  value: Uint8Array;
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseAmino {
  /**
   * activeRates defines a list of the denomination which oracle prices aggreed
   * upon.
   */
  active_rates?: string[];
}
export interface QueryActiveExchangeRatesResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesResponse";
  value: QueryActiveExchangeRatesResponseAmino;
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseSDKType {
  active_rates: string[];
}
/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryFeederDelegationRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryFeederDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryFeederDelegationRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryFeederDelegationRequest";
  value: QueryFeederDelegationRequestAmino;
}
/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationRequestSDKType {
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
export interface QueryFeederDelegationResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryFeederDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseAmino {
  /** feeder_addr defines the feeder delegation of a validator */
  feeder_addr?: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryFeederDelegationResponse";
  value: QueryFeederDelegationResponseAmino;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
  feeder_addr: string;
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryMissCounterRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryMissCounterRequest";
  value: Uint8Array;
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryMissCounterRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryMissCounterRequest";
  value: QueryMissCounterRequestAmino;
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterRequestSDKType {
  validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  /** miss_counter defines the oracle miss counter of a validator */
  missCounter: bigint;
}
export interface QueryMissCounterResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryMissCounterResponse";
  value: Uint8Array;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseAmino {
  /** miss_counter defines the oracle miss counter of a validator */
  miss_counter?: string;
}
export interface QueryMissCounterResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryMissCounterResponse";
  value: QueryMissCounterResponseAmino;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
  miss_counter: bigint;
}
/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryAggregatePrevoteRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevoteRequest";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryAggregatePrevoteRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregatePrevoteRequest";
  value: QueryAggregatePrevoteRequestAmino;
}
/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteRequestSDKType {
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
  aggregatePrevote: AggregateExchangeRatePrevote;
}
export interface QueryAggregatePrevoteResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevoteResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseAmino {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period
   */
  aggregate_prevote?: AggregateExchangeRatePrevoteAmino;
}
export interface QueryAggregatePrevoteResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregatePrevoteResponse";
  value: QueryAggregatePrevoteResponseAmino;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
  aggregate_prevote: AggregateExchangeRatePrevoteSDKType;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesRequest {}
export interface QueryAggregatePrevotesRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevotesRequest";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesRequestAmino {}
export interface QueryAggregatePrevotesRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregatePrevotesRequest";
  value: QueryAggregatePrevotesRequestAmino;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesRequestSDKType {}
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
export interface QueryAggregatePrevotesResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevotesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseAmino {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period
   */
  aggregate_prevotes?: AggregateExchangeRatePrevoteAmino[];
}
export interface QueryAggregatePrevotesResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregatePrevotesResponse";
  value: QueryAggregatePrevotesResponseAmino;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseSDKType {
  aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryAggregateVoteRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVoteRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryAggregateVoteRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregateVoteRequest";
  value: QueryAggregateVoteRequestAmino;
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteRequestSDKType {
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
  aggregateVote: AggregateExchangeRateVote;
}
export interface QueryAggregateVoteResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVoteResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseAmino {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period
   */
  aggregate_vote?: AggregateExchangeRateVoteAmino;
}
export interface QueryAggregateVoteResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregateVoteResponse";
  value: QueryAggregateVoteResponseAmino;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
  aggregate_vote: AggregateExchangeRateVoteSDKType;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesRequest {}
export interface QueryAggregateVotesRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVotesRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesRequestAmino {}
export interface QueryAggregateVotesRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregateVotesRequest";
  value: QueryAggregateVotesRequestAmino;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesRequestSDKType {}
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
export interface QueryAggregateVotesResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVotesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseAmino {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period
   */
  aggregate_votes?: AggregateExchangeRateVoteAmino[];
}
export interface QueryAggregateVotesResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryAggregateVotesResponse";
  value: QueryAggregateVotesResponseAmino;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseSDKType {
  aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryRewardPoolBalanceRequest {}
export interface QueryRewardPoolBalanceRequestProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceRequest";
  value: Uint8Array;
}
export interface QueryRewardPoolBalanceRequestAmino {}
export interface QueryRewardPoolBalanceRequestAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceRequest";
  value: QueryRewardPoolBalanceRequestAmino;
}
export interface QueryRewardPoolBalanceRequestSDKType {}
export interface QueryRewardPoolBalanceResponse {
  /** funds left in the reward pool */
  remainingFunds: Coin[];
}
export interface QueryRewardPoolBalanceResponseProtoMsg {
  typeUrl: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceResponse";
  value: Uint8Array;
}
export interface QueryRewardPoolBalanceResponseAmino {
  /** funds left in the reward pool */
  remaining_funds?: CoinAmino[];
}
export interface QueryRewardPoolBalanceResponseAminoMsg {
  type: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceResponse";
  value: QueryRewardPoolBalanceResponseAmino;
}
export interface QueryRewardPoolBalanceResponseSDKType {
  remaining_funds: CoinSDKType[];
}
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    denom: ""
  };
}
export const QueryExchangeRateRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryExchangeRateRequest",
  encode(message: QueryExchangeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeRateRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryExchangeRateRequest>): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryExchangeRateRequestAmino): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryExchangeRateRequest): QueryExchangeRateRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRateRequestAminoMsg): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRateRequestProtoMsg): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRateRequest): Uint8Array {
    return QueryExchangeRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateRequest): QueryExchangeRateRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryExchangeRateRequest",
      value: QueryExchangeRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {
    exchangeRate: ""
  };
}
export const QueryExchangeRateResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryExchangeRateResponse",
  encode(message: QueryExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(message.exchangeRate);
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeRateResponse {
    return {
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : ""
    };
  },
  fromPartial(object: Partial<QueryExchangeRateResponse>): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromAmino(object: QueryExchangeRateResponseAmino): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: QueryExchangeRateResponse): QueryExchangeRateResponseAmino {
    const obj: any = {};
    obj.exchange_rate = message.exchangeRate;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRateResponseAminoMsg): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRateResponseProtoMsg): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRateResponse): Uint8Array {
    return QueryExchangeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateResponse): QueryExchangeRateResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryExchangeRateResponse",
      value: QueryExchangeRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllExchangeRatesRequest(): QueryAllExchangeRatesRequest {
  return {};
}
export const QueryAllExchangeRatesRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAllExchangeRatesRequest",
  encode(_: QueryAllExchangeRatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAllExchangeRatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllExchangeRatesRequest>): QueryAllExchangeRatesRequest {
    const message = createBaseQueryAllExchangeRatesRequest();
    return message;
  },
  fromAmino(_: QueryAllExchangeRatesRequestAmino): QueryAllExchangeRatesRequest {
    const message = createBaseQueryAllExchangeRatesRequest();
    return message;
  },
  toAmino(_: QueryAllExchangeRatesRequest): QueryAllExchangeRatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllExchangeRatesRequestAminoMsg): QueryAllExchangeRatesRequest {
    return QueryAllExchangeRatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExchangeRatesRequestProtoMsg): QueryAllExchangeRatesRequest {
    return QueryAllExchangeRatesRequest.decode(message.value);
  },
  toProto(message: QueryAllExchangeRatesRequest): Uint8Array {
    return QueryAllExchangeRatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExchangeRatesRequest): QueryAllExchangeRatesRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAllExchangeRatesRequest",
      value: QueryAllExchangeRatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllExchangeRatesResponse(): QueryAllExchangeRatesResponse {
  return {
    exchangeRates: []
  };
}
export const QueryAllExchangeRatesResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAllExchangeRatesResponse",
  encode(message: QueryAllExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllExchangeRatesResponse {
    return {
      exchangeRates: Array.isArray(object?.exchangeRates) ? object.exchangeRates.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAllExchangeRatesResponse>): QueryAllExchangeRatesResponse {
    const message = createBaseQueryAllExchangeRatesResponse();
    message.exchangeRates = object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllExchangeRatesResponseAmino): QueryAllExchangeRatesResponse {
    const message = createBaseQueryAllExchangeRatesResponse();
    message.exchangeRates = object.exchange_rates?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllExchangeRatesResponse): QueryAllExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchange_rates = message.exchangeRates.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.exchange_rates = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllExchangeRatesResponseAminoMsg): QueryAllExchangeRatesResponse {
    return QueryAllExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExchangeRatesResponseProtoMsg): QueryAllExchangeRatesResponse {
    return QueryAllExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryAllExchangeRatesResponse): Uint8Array {
    return QueryAllExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExchangeRatesResponse): QueryAllExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAllExchangeRatesResponse",
      value: QueryAllExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveExchangeRatesRequest(): QueryActiveExchangeRatesRequest {
  return {};
}
export const QueryActiveExchangeRatesRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesRequest",
  encode(_: QueryActiveExchangeRatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryActiveExchangeRatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryActiveExchangeRatesRequest>): QueryActiveExchangeRatesRequest {
    const message = createBaseQueryActiveExchangeRatesRequest();
    return message;
  },
  fromAmino(_: QueryActiveExchangeRatesRequestAmino): QueryActiveExchangeRatesRequest {
    const message = createBaseQueryActiveExchangeRatesRequest();
    return message;
  },
  toAmino(_: QueryActiveExchangeRatesRequest): QueryActiveExchangeRatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActiveExchangeRatesRequestAminoMsg): QueryActiveExchangeRatesRequest {
    return QueryActiveExchangeRatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveExchangeRatesRequestProtoMsg): QueryActiveExchangeRatesRequest {
    return QueryActiveExchangeRatesRequest.decode(message.value);
  },
  toProto(message: QueryActiveExchangeRatesRequest): Uint8Array {
    return QueryActiveExchangeRatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveExchangeRatesRequest): QueryActiveExchangeRatesRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesRequest",
      value: QueryActiveExchangeRatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveExchangeRatesResponse(): QueryActiveExchangeRatesResponse {
  return {
    activeRates: []
  };
}
export const QueryActiveExchangeRatesResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesResponse",
  encode(message: QueryActiveExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryActiveExchangeRatesResponseAmino): QueryActiveExchangeRatesResponse {
    const message = createBaseQueryActiveExchangeRatesResponse();
    message.activeRates = object.active_rates?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.activeRates) {
      obj.active_rates = message.activeRates.map(e => e);
    } else {
      obj.active_rates = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryActiveExchangeRatesResponseAminoMsg): QueryActiveExchangeRatesResponse {
    return QueryActiveExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveExchangeRatesResponseProtoMsg): QueryActiveExchangeRatesResponse {
    return QueryActiveExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryActiveExchangeRatesResponse): Uint8Array {
    return QueryActiveExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesResponse",
      value: QueryActiveExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegationRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryFeederDelegationRequest",
  encode(message: QueryFeederDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryFeederDelegationRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryFeederDelegationRequestAmino): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationRequestAminoMsg): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationRequestProtoMsg): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.decode(message.value);
  },
  toProto(message: QueryFeederDelegationRequest): Uint8Array {
    return QueryFeederDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryFeederDelegationRequest",
      value: QueryFeederDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryFeederDelegationResponse",
  encode(message: QueryFeederDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
      message.feederAddr = object.feeder_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino {
    const obj: any = {};
    obj.feeder_addr = message.feederAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.decode(message.value);
  },
  toProto(message: QueryFeederDelegationResponse): Uint8Array {
    return QueryFeederDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryFeederDelegationResponse",
      value: QueryFeederDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMissCounterRequest(): QueryMissCounterRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryMissCounterRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryMissCounterRequest",
  encode(message: QueryMissCounterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCounterRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryMissCounterRequest>): QueryMissCounterRequest {
    const message = createBaseQueryMissCounterRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryMissCounterRequestAmino): QueryMissCounterRequest {
    const message = createBaseQueryMissCounterRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryMissCounterRequest): QueryMissCounterRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryMissCounterRequestAminoMsg): QueryMissCounterRequest {
    return QueryMissCounterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCounterRequestProtoMsg): QueryMissCounterRequest {
    return QueryMissCounterRequest.decode(message.value);
  },
  toProto(message: QueryMissCounterRequest): Uint8Array {
    return QueryMissCounterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounterRequest): QueryMissCounterRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryMissCounterRequest",
      value: QueryMissCounterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return {
    missCounter: BigInt(0)
  };
}
export const QueryMissCounterResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryMissCounterResponse",
  encode(message: QueryMissCounterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissCounterResponse {
    return {
      missCounter: isSet(object.missCounter) ? BigInt(object.missCounter.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMissCounterResponseAmino): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    return message;
  },
  toAmino(message: QueryMissCounterResponse): QueryMissCounterResponseAmino {
    const obj: any = {};
    obj.miss_counter = message.missCounter ? message.missCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMissCounterResponseAminoMsg): QueryMissCounterResponse {
    return QueryMissCounterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse {
    return QueryMissCounterResponse.decode(message.value);
  },
  toProto(message: QueryMissCounterResponse): Uint8Array {
    return QueryMissCounterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryMissCounterResponse",
      value: QueryMissCounterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevoteRequest(): QueryAggregatePrevoteRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregatePrevoteRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevoteRequest",
  encode(message: QueryAggregatePrevoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregatePrevoteRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregatePrevoteRequest>): QueryAggregatePrevoteRequest {
    const message = createBaseQueryAggregatePrevoteRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryAggregatePrevoteRequestAmino): QueryAggregatePrevoteRequest {
    const message = createBaseQueryAggregatePrevoteRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAggregatePrevoteRequest): QueryAggregatePrevoteRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevoteRequestAminoMsg): QueryAggregatePrevoteRequest {
    return QueryAggregatePrevoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevoteRequestProtoMsg): QueryAggregatePrevoteRequest {
    return QueryAggregatePrevoteRequest.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteRequest): Uint8Array {
    return QueryAggregatePrevoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevoteRequest): QueryAggregatePrevoteRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevoteRequest",
      value: QueryAggregatePrevoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return {
    aggregatePrevote: AggregateExchangeRatePrevote.fromPartial({})
  };
}
export const QueryAggregatePrevoteResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevoteResponse",
  encode(message: QueryAggregatePrevoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregatePrevoteResponseAmino): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromAmino(object.aggregate_prevote);
    }
    return message;
  },
  toAmino(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseAmino {
    const obj: any = {};
    obj.aggregate_prevote = message.aggregatePrevote ? AggregateExchangeRatePrevote.toAmino(message.aggregatePrevote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevoteResponseAminoMsg): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteResponse): Uint8Array {
    return QueryAggregatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevoteResponse",
      value: QueryAggregatePrevoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevotesRequest(): QueryAggregatePrevotesRequest {
  return {};
}
export const QueryAggregatePrevotesRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevotesRequest",
  encode(_: QueryAggregatePrevotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAggregatePrevotesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAggregatePrevotesRequest>): QueryAggregatePrevotesRequest {
    const message = createBaseQueryAggregatePrevotesRequest();
    return message;
  },
  fromAmino(_: QueryAggregatePrevotesRequestAmino): QueryAggregatePrevotesRequest {
    const message = createBaseQueryAggregatePrevotesRequest();
    return message;
  },
  toAmino(_: QueryAggregatePrevotesRequest): QueryAggregatePrevotesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevotesRequestAminoMsg): QueryAggregatePrevotesRequest {
    return QueryAggregatePrevotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevotesRequestProtoMsg): QueryAggregatePrevotesRequest {
    return QueryAggregatePrevotesRequest.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesRequest): Uint8Array {
    return QueryAggregatePrevotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotesRequest): QueryAggregatePrevotesRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevotesRequest",
      value: QueryAggregatePrevotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return {
    aggregatePrevotes: []
  };
}
export const QueryAggregatePrevotesResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevotesResponse",
  encode(message: QueryAggregatePrevotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregatePrevotesResponseAmino): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregate_prevotes?.map(e => AggregateExchangeRatePrevote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseAmino {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregate_prevotes = message.aggregatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toAmino(e) : undefined);
    } else {
      obj.aggregate_prevotes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregatePrevotesResponseAminoMsg): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesResponse): Uint8Array {
    return QueryAggregatePrevotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevotesResponse",
      value: QueryAggregatePrevotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVoteRequest(): QueryAggregateVoteRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryAggregateVoteRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVoteRequest",
  encode(message: QueryAggregateVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVoteRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregateVoteRequest>): QueryAggregateVoteRequest {
    const message = createBaseQueryAggregateVoteRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryAggregateVoteRequestAmino): QueryAggregateVoteRequest {
    const message = createBaseQueryAggregateVoteRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAggregateVoteRequest): QueryAggregateVoteRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVoteRequestAminoMsg): QueryAggregateVoteRequest {
    return QueryAggregateVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVoteRequestProtoMsg): QueryAggregateVoteRequest {
    return QueryAggregateVoteRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVoteRequest): Uint8Array {
    return QueryAggregateVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVoteRequest): QueryAggregateVoteRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVoteRequest",
      value: QueryAggregateVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return {
    aggregateVote: AggregateExchangeRateVote.fromPartial({})
  };
}
export const QueryAggregateVoteResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVoteResponse",
  encode(message: QueryAggregateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateVoteResponseAmino): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromAmino(object.aggregate_vote);
    }
    return message;
  },
  toAmino(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseAmino {
    const obj: any = {};
    obj.aggregate_vote = message.aggregateVote ? AggregateExchangeRateVote.toAmino(message.aggregateVote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVoteResponseAminoMsg): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVoteResponse): Uint8Array {
    return QueryAggregateVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVoteResponse",
      value: QueryAggregateVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVotesRequest(): QueryAggregateVotesRequest {
  return {};
}
export const QueryAggregateVotesRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVotesRequest",
  encode(_: QueryAggregateVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAggregateVotesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAggregateVotesRequest>): QueryAggregateVotesRequest {
    const message = createBaseQueryAggregateVotesRequest();
    return message;
  },
  fromAmino(_: QueryAggregateVotesRequestAmino): QueryAggregateVotesRequest {
    const message = createBaseQueryAggregateVotesRequest();
    return message;
  },
  toAmino(_: QueryAggregateVotesRequest): QueryAggregateVotesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVotesRequestAminoMsg): QueryAggregateVotesRequest {
    return QueryAggregateVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVotesRequestProtoMsg): QueryAggregateVotesRequest {
    return QueryAggregateVotesRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVotesRequest): Uint8Array {
    return QueryAggregateVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotesRequest): QueryAggregateVotesRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVotesRequest",
      value: QueryAggregateVotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return {
    aggregateVotes: []
  };
}
export const QueryAggregateVotesResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVotesResponse",
  encode(message: QueryAggregateVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateVotesResponseAmino): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseAmino {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregate_votes = message.aggregateVotes.map(e => e ? AggregateExchangeRateVote.toAmino(e) : undefined);
    } else {
      obj.aggregate_votes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVotesResponseAminoMsg): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVotesResponse): Uint8Array {
    return QueryAggregateVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVotesResponse",
      value: QueryAggregateVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardPoolBalanceRequest(): QueryRewardPoolBalanceRequest {
  return {};
}
export const QueryRewardPoolBalanceRequest = {
  typeUrl: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceRequest",
  encode(_: QueryRewardPoolBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryRewardPoolBalanceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryRewardPoolBalanceRequest>): QueryRewardPoolBalanceRequest {
    const message = createBaseQueryRewardPoolBalanceRequest();
    return message;
  },
  fromAmino(_: QueryRewardPoolBalanceRequestAmino): QueryRewardPoolBalanceRequest {
    const message = createBaseQueryRewardPoolBalanceRequest();
    return message;
  },
  toAmino(_: QueryRewardPoolBalanceRequest): QueryRewardPoolBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRewardPoolBalanceRequestAminoMsg): QueryRewardPoolBalanceRequest {
    return QueryRewardPoolBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardPoolBalanceRequestProtoMsg): QueryRewardPoolBalanceRequest {
    return QueryRewardPoolBalanceRequest.decode(message.value);
  },
  toProto(message: QueryRewardPoolBalanceRequest): Uint8Array {
    return QueryRewardPoolBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardPoolBalanceRequest): QueryRewardPoolBalanceRequestProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceRequest",
      value: QueryRewardPoolBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardPoolBalanceResponse(): QueryRewardPoolBalanceResponse {
  return {
    remainingFunds: []
  };
}
export const QueryRewardPoolBalanceResponse = {
  typeUrl: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceResponse",
  encode(message: QueryRewardPoolBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.remainingFunds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRewardPoolBalanceResponse {
    return {
      remainingFunds: Array.isArray(object?.remainingFunds) ? object.remainingFunds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRewardPoolBalanceResponse>): QueryRewardPoolBalanceResponse {
    const message = createBaseQueryRewardPoolBalanceResponse();
    message.remainingFunds = object.remainingFunds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRewardPoolBalanceResponseAmino): QueryRewardPoolBalanceResponse {
    const message = createBaseQueryRewardPoolBalanceResponse();
    message.remainingFunds = object.remaining_funds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRewardPoolBalanceResponse): QueryRewardPoolBalanceResponseAmino {
    const obj: any = {};
    if (message.remainingFunds) {
      obj.remaining_funds = message.remainingFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.remaining_funds = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardPoolBalanceResponseAminoMsg): QueryRewardPoolBalanceResponse {
    return QueryRewardPoolBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardPoolBalanceResponseProtoMsg): QueryRewardPoolBalanceResponse {
    return QueryRewardPoolBalanceResponse.decode(message.value);
  },
  toProto(message: QueryRewardPoolBalanceResponse): Uint8Array {
    return QueryRewardPoolBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardPoolBalanceResponse): QueryRewardPoolBalanceResponseProtoMsg {
    return {
      typeUrl: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceResponse",
      value: QueryRewardPoolBalanceResponse.encode(message).finish()
    };
  }
};