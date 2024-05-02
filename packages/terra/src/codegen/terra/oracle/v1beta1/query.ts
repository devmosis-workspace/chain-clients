import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Denom, DenomAmino, DenomSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}
export interface QueryExchangeRateRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRateRequest";
  value: Uint8Array;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestAmino {
  /** denom defines the denomination to query for. */
  denom?: string;
}
export interface QueryExchangeRateRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryExchangeRateRequest";
  value: QueryExchangeRateRequestAmino;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestSDKType {
  denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  /** exchange_rate defines the exchange rate of Luna denominated in various Terra */
  exchangeRate: string;
}
export interface QueryExchangeRateResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRateResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseAmino {
  /** exchange_rate defines the exchange rate of Luna denominated in various Terra */
  exchange_rate?: string;
}
export interface QueryExchangeRateResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryExchangeRateResponse";
  value: QueryExchangeRateResponseAmino;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseSDKType {
  exchange_rate: string;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {}
export interface QueryExchangeRatesRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRatesRequest";
  value: Uint8Array;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestAmino {}
export interface QueryExchangeRatesRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryExchangeRatesRequest";
  value: QueryExchangeRatesRequestAmino;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  exchangeRates: DecCoin[];
}
export interface QueryExchangeRatesResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRatesResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseAmino {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  exchange_rates?: DecCoinAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryExchangeRatesResponse";
  value: QueryExchangeRatesResponseAmino;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
  exchange_rates: DecCoinSDKType[];
}
/** QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method. */
export interface QueryTobinTaxRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}
export interface QueryTobinTaxRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxRequest";
  value: Uint8Array;
}
/** QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method. */
export interface QueryTobinTaxRequestAmino {
  /** denom defines the denomination to query for. */
  denom?: string;
}
export interface QueryTobinTaxRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryTobinTaxRequest";
  value: QueryTobinTaxRequestAmino;
}
/** QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method. */
export interface QueryTobinTaxRequestSDKType {
  denom: string;
}
/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 */
export interface QueryTobinTaxResponse {
  /** tobin_taxe defines the tobin tax of a denom */
  tobinTax: string;
}
export interface QueryTobinTaxResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxResponse";
  value: Uint8Array;
}
/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 */
export interface QueryTobinTaxResponseAmino {
  /** tobin_taxe defines the tobin tax of a denom */
  tobin_tax?: string;
}
export interface QueryTobinTaxResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryTobinTaxResponse";
  value: QueryTobinTaxResponseAmino;
}
/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 */
export interface QueryTobinTaxResponseSDKType {
  tobin_tax: string;
}
/** QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method. */
export interface QueryTobinTaxesRequest {}
export interface QueryTobinTaxesRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxesRequest";
  value: Uint8Array;
}
/** QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method. */
export interface QueryTobinTaxesRequestAmino {}
export interface QueryTobinTaxesRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryTobinTaxesRequest";
  value: QueryTobinTaxesRequestAmino;
}
/** QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method. */
export interface QueryTobinTaxesRequestSDKType {}
/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 */
export interface QueryTobinTaxesResponse {
  /** tobin_taxes defines a list of the tobin tax of all whitelisted denoms */
  tobinTaxes: Denom[];
}
export interface QueryTobinTaxesResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxesResponse";
  value: Uint8Array;
}
/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 */
export interface QueryTobinTaxesResponseAmino {
  /** tobin_taxes defines a list of the tobin tax of all whitelisted denoms */
  tobin_taxes?: DenomAmino[];
}
export interface QueryTobinTaxesResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryTobinTaxesResponse";
  value: QueryTobinTaxesResponseAmino;
}
/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 */
export interface QueryTobinTaxesResponseSDKType {
  tobin_taxes: DenomSDKType[];
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {}
export interface QueryActivesRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryActivesRequest";
  value: Uint8Array;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestAmino {}
export interface QueryActivesRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryActivesRequest";
  value: QueryActivesRequestAmino;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives: string[];
}
export interface QueryActivesResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryActivesResponse";
  value: Uint8Array;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseAmino {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives?: string[];
}
export interface QueryActivesResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryActivesResponse";
  value: QueryActivesResponseAmino;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseSDKType {
  actives: string[];
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {}
export interface QueryVoteTargetsRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryVoteTargetsRequest";
  value: Uint8Array;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestAmino {}
export interface QueryVoteTargetsRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryVoteTargetsRequest";
  value: QueryVoteTargetsRequestAmino;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[];
}
export interface QueryVoteTargetsResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryVoteTargetsResponse";
  value: Uint8Array;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseAmino {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  vote_targets?: string[];
}
export interface QueryVoteTargetsResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryVoteTargetsResponse";
  value: QueryVoteTargetsResponseAmino;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseSDKType {
  vote_targets: string[];
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryFeederDelegationRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryFeederDelegationRequest";
  value: Uint8Array;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryFeederDelegationRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryFeederDelegationRequest";
  value: QueryFeederDelegationRequestAmino;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
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
  typeUrl: "/terra.oracle.v1beta1.QueryFeederDelegationResponse";
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
  type: "/terra.oracle.v1beta1.QueryFeederDelegationResponse";
  value: QueryFeederDelegationResponseAmino;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
  feeder_addr: string;
}
/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryMissCounterRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryMissCounterRequest";
  value: Uint8Array;
}
/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryMissCounterRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryMissCounterRequest";
  value: QueryMissCounterRequestAmino;
}
/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
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
  typeUrl: "/terra.oracle.v1beta1.QueryMissCounterResponse";
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
  type: "/terra.oracle.v1beta1.QueryMissCounterResponse";
  value: QueryMissCounterResponseAmino;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
  miss_counter: bigint;
}
/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryAggregatePrevoteRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevoteRequest";
  value: Uint8Array;
}
/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryAggregatePrevoteRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregatePrevoteRequest";
  value: QueryAggregatePrevoteRequestAmino;
}
/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequestSDKType {
  validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  /** aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period */
  aggregatePrevote: AggregateExchangeRatePrevote;
}
export interface QueryAggregatePrevoteResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevoteResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseAmino {
  /** aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period */
  aggregate_prevote?: AggregateExchangeRatePrevoteAmino;
}
export interface QueryAggregatePrevoteResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregatePrevoteResponse";
  value: QueryAggregatePrevoteResponseAmino;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
  aggregate_prevote: AggregateExchangeRatePrevoteSDKType;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequest {}
export interface QueryAggregatePrevotesRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevotesRequest";
  value: Uint8Array;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequestAmino {}
export interface QueryAggregatePrevotesRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregatePrevotesRequest";
  value: QueryAggregatePrevotesRequestAmino;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequestSDKType {}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  /** aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period */
  aggregatePrevotes: AggregateExchangeRatePrevote[];
}
export interface QueryAggregatePrevotesResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevotesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseAmino {
  /** aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period */
  aggregate_prevotes?: AggregateExchangeRatePrevoteAmino[];
}
export interface QueryAggregatePrevotesResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregatePrevotesResponse";
  value: QueryAggregatePrevotesResponseAmino;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseSDKType {
  aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryAggregateVoteRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVoteRequest";
  value: Uint8Array;
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryAggregateVoteRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregateVoteRequest";
  value: QueryAggregateVoteRequestAmino;
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequestSDKType {
  validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
  aggregateVote: AggregateExchangeRateVote;
}
export interface QueryAggregateVoteResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVoteResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseAmino {
  /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
  aggregate_vote?: AggregateExchangeRateVoteAmino;
}
export interface QueryAggregateVoteResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregateVoteResponse";
  value: QueryAggregateVoteResponseAmino;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
  aggregate_vote: AggregateExchangeRateVoteSDKType;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequest {}
export interface QueryAggregateVotesRequestProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVotesRequest";
  value: Uint8Array;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequestAmino {}
export interface QueryAggregateVotesRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregateVotesRequest";
  value: QueryAggregateVotesRequestAmino;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequestSDKType {}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
  aggregateVotes: AggregateExchangeRateVote[];
}
export interface QueryAggregateVotesResponseProtoMsg {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVotesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseAmino {
  /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
  aggregate_votes?: AggregateExchangeRateVoteAmino[];
}
export interface QueryAggregateVotesResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryAggregateVotesResponse";
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
  typeUrl: "/terra.oracle.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/terra.oracle.v1beta1.QueryParamsRequest";
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
  typeUrl: "/terra.oracle.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/terra.oracle.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    denom: ""
  };
}
export const QueryExchangeRateRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRateRequest",
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
    obj.denom = message.denom === "" ? undefined : message.denom;
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
      typeUrl: "/terra.oracle.v1beta1.QueryExchangeRateRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRateResponse",
  encode(message: QueryExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
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
    obj.exchange_rate = message.exchangeRate === "" ? undefined : message.exchangeRate;
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
      typeUrl: "/terra.oracle.v1beta1.QueryExchangeRateResponse",
      value: QueryExchangeRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return {};
}
export const QueryExchangeRatesRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRatesRequest",
  encode(_: QueryExchangeRatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryExchangeRatesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  fromAmino(_: QueryExchangeRatesRequestAmino): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  toAmino(_: QueryExchangeRatesRequest): QueryExchangeRatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesRequestAminoMsg): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesRequestProtoMsg): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRatesRequest): Uint8Array {
    return QueryExchangeRatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesRequest): QueryExchangeRatesRequestProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryExchangeRatesRequest",
      value: QueryExchangeRatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    exchangeRates: []
  };
}
export const QueryExchangeRatesResponse = {
  typeUrl: "/terra.oracle.v1beta1.QueryExchangeRatesResponse",
  encode(message: QueryExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchange_rates?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchange_rates = message.exchangeRates.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.exchange_rates = message.exchangeRates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRatesResponse): Uint8Array {
    return QueryExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryExchangeRatesResponse",
      value: QueryExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTobinTaxRequest(): QueryTobinTaxRequest {
  return {
    denom: ""
  };
}
export const QueryTobinTaxRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxRequest",
  encode(message: QueryTobinTaxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTobinTaxRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTobinTaxRequest>): QueryTobinTaxRequest {
    const message = createBaseQueryTobinTaxRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTobinTaxRequestAmino): QueryTobinTaxRequest {
    const message = createBaseQueryTobinTaxRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTobinTaxRequest): QueryTobinTaxRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTobinTaxRequestAminoMsg): QueryTobinTaxRequest {
    return QueryTobinTaxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTobinTaxRequestProtoMsg): QueryTobinTaxRequest {
    return QueryTobinTaxRequest.decode(message.value);
  },
  toProto(message: QueryTobinTaxRequest): Uint8Array {
    return QueryTobinTaxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTobinTaxRequest): QueryTobinTaxRequestProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxRequest",
      value: QueryTobinTaxRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTobinTaxResponse(): QueryTobinTaxResponse {
  return {
    tobinTax: ""
  };
}
export const QueryTobinTaxResponse = {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxResponse",
  encode(message: QueryTobinTaxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tobinTax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.tobinTax, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryTobinTaxResponse {
    return {
      tobinTax: isSet(object.tobinTax) ? String(object.tobinTax) : ""
    };
  },
  fromPartial(object: Partial<QueryTobinTaxResponse>): QueryTobinTaxResponse {
    const message = createBaseQueryTobinTaxResponse();
    message.tobinTax = object.tobinTax ?? "";
    return message;
  },
  fromAmino(object: QueryTobinTaxResponseAmino): QueryTobinTaxResponse {
    const message = createBaseQueryTobinTaxResponse();
    if (object.tobin_tax !== undefined && object.tobin_tax !== null) {
      message.tobinTax = object.tobin_tax;
    }
    return message;
  },
  toAmino(message: QueryTobinTaxResponse): QueryTobinTaxResponseAmino {
    const obj: any = {};
    obj.tobin_tax = message.tobinTax === "" ? undefined : message.tobinTax;
    return obj;
  },
  fromAminoMsg(object: QueryTobinTaxResponseAminoMsg): QueryTobinTaxResponse {
    return QueryTobinTaxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTobinTaxResponseProtoMsg): QueryTobinTaxResponse {
    return QueryTobinTaxResponse.decode(message.value);
  },
  toProto(message: QueryTobinTaxResponse): Uint8Array {
    return QueryTobinTaxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTobinTaxResponse): QueryTobinTaxResponseProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxResponse",
      value: QueryTobinTaxResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTobinTaxesRequest(): QueryTobinTaxesRequest {
  return {};
}
export const QueryTobinTaxesRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxesRequest",
  encode(_: QueryTobinTaxesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTobinTaxesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTobinTaxesRequest>): QueryTobinTaxesRequest {
    const message = createBaseQueryTobinTaxesRequest();
    return message;
  },
  fromAmino(_: QueryTobinTaxesRequestAmino): QueryTobinTaxesRequest {
    const message = createBaseQueryTobinTaxesRequest();
    return message;
  },
  toAmino(_: QueryTobinTaxesRequest): QueryTobinTaxesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTobinTaxesRequestAminoMsg): QueryTobinTaxesRequest {
    return QueryTobinTaxesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTobinTaxesRequestProtoMsg): QueryTobinTaxesRequest {
    return QueryTobinTaxesRequest.decode(message.value);
  },
  toProto(message: QueryTobinTaxesRequest): Uint8Array {
    return QueryTobinTaxesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTobinTaxesRequest): QueryTobinTaxesRequestProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxesRequest",
      value: QueryTobinTaxesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTobinTaxesResponse(): QueryTobinTaxesResponse {
  return {
    tobinTaxes: []
  };
}
export const QueryTobinTaxesResponse = {
  typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxesResponse",
  encode(message: QueryTobinTaxesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tobinTaxes) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTobinTaxesResponse {
    return {
      tobinTaxes: Array.isArray(object?.tobinTaxes) ? object.tobinTaxes.map((e: any) => Denom.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTobinTaxesResponse>): QueryTobinTaxesResponse {
    const message = createBaseQueryTobinTaxesResponse();
    message.tobinTaxes = object.tobinTaxes?.map(e => Denom.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTobinTaxesResponseAmino): QueryTobinTaxesResponse {
    const message = createBaseQueryTobinTaxesResponse();
    message.tobinTaxes = object.tobin_taxes?.map(e => Denom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTobinTaxesResponse): QueryTobinTaxesResponseAmino {
    const obj: any = {};
    if (message.tobinTaxes) {
      obj.tobin_taxes = message.tobinTaxes.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.tobin_taxes = message.tobinTaxes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTobinTaxesResponseAminoMsg): QueryTobinTaxesResponse {
    return QueryTobinTaxesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTobinTaxesResponseProtoMsg): QueryTobinTaxesResponse {
    return QueryTobinTaxesResponse.decode(message.value);
  },
  toProto(message: QueryTobinTaxesResponse): Uint8Array {
    return QueryTobinTaxesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTobinTaxesResponse): QueryTobinTaxesResponseProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxesResponse",
      value: QueryTobinTaxesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActivesRequest(): QueryActivesRequest {
  return {};
}
export const QueryActivesRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryActivesRequest",
  encode(_: QueryActivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryActivesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryActivesRequest>): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  fromAmino(_: QueryActivesRequestAmino): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  toAmino(_: QueryActivesRequest): QueryActivesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActivesRequestAminoMsg): QueryActivesRequest {
    return QueryActivesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest {
    return QueryActivesRequest.decode(message.value);
  },
  toProto(message: QueryActivesRequest): Uint8Array {
    return QueryActivesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryActivesRequest",
      value: QueryActivesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActivesResponse(): QueryActivesResponse {
  return {
    actives: []
  };
}
export const QueryActivesResponse = {
  typeUrl: "/terra.oracle.v1beta1.QueryActivesResponse",
  encode(message: QueryActivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryActivesResponse {
    return {
      actives: Array.isArray(object?.actives) ? object.actives.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryActivesResponse>): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryActivesResponseAmino): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryActivesResponse): QueryActivesResponseAmino {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map(e => e);
    } else {
      obj.actives = message.actives;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActivesResponseAminoMsg): QueryActivesResponse {
    return QueryActivesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse {
    return QueryActivesResponse.decode(message.value);
  },
  toProto(message: QueryActivesResponse): Uint8Array {
    return QueryActivesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryActivesResponse",
      value: QueryActivesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return {};
}
export const QueryVoteTargetsRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryVoteTargetsRequest",
  encode(_: QueryVoteTargetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryVoteTargetsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  fromAmino(_: QueryVoteTargetsRequestAmino): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  toAmino(_: QueryVoteTargetsRequest): QueryVoteTargetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVoteTargetsRequestAminoMsg): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteTargetsRequestProtoMsg): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.decode(message.value);
  },
  toProto(message: QueryVoteTargetsRequest): Uint8Array {
    return QueryVoteTargetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsRequest): QueryVoteTargetsRequestProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryVoteTargetsRequest",
      value: QueryVoteTargetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return {
    voteTargets: []
  };
}
export const QueryVoteTargetsResponse = {
  typeUrl: "/terra.oracle.v1beta1.QueryVoteTargetsResponse",
  encode(message: QueryVoteTargetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryVoteTargetsResponse {
    return {
      voteTargets: Array.isArray(object?.voteTargets) ? object.voteTargets.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.voteTargets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryVoteTargetsResponseAmino): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.vote_targets?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseAmino {
    const obj: any = {};
    if (message.voteTargets) {
      obj.vote_targets = message.voteTargets.map(e => e);
    } else {
      obj.vote_targets = message.voteTargets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVoteTargetsResponseAminoMsg): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteTargetsResponseProtoMsg): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.decode(message.value);
  },
  toProto(message: QueryVoteTargetsResponse): Uint8Array {
    return QueryVoteTargetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseProtoMsg {
    return {
      typeUrl: "/terra.oracle.v1beta1.QueryVoteTargetsResponse",
      value: QueryVoteTargetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegationRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryFeederDelegationRequest",
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
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
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
      typeUrl: "/terra.oracle.v1beta1.QueryFeederDelegationRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryFeederDelegationResponse",
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
    obj.feeder_addr = message.feederAddr === "" ? undefined : message.feederAddr;
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
      typeUrl: "/terra.oracle.v1beta1.QueryFeederDelegationResponse",
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
  typeUrl: "/terra.oracle.v1beta1.QueryMissCounterRequest",
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
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
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
      typeUrl: "/terra.oracle.v1beta1.QueryMissCounterRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryMissCounterResponse",
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
    obj.miss_counter = message.missCounter !== BigInt(0) ? message.missCounter.toString() : undefined;
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
      typeUrl: "/terra.oracle.v1beta1.QueryMissCounterResponse",
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
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevoteRequest",
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
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevoteRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevoteResponse",
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevoteResponse",
      value: QueryAggregatePrevoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatePrevotesRequest(): QueryAggregatePrevotesRequest {
  return {};
}
export const QueryAggregatePrevotesRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevotesRequest",
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevotesRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevotesResponse",
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
      obj.aggregate_prevotes = message.aggregatePrevotes;
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevotesResponse",
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
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVoteRequest",
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
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregateVoteRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVoteResponse",
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregateVoteResponse",
      value: QueryAggregateVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVotesRequest(): QueryAggregateVotesRequest {
  return {};
}
export const QueryAggregateVotesRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVotesRequest",
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregateVotesRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryAggregateVotesResponse",
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
      obj.aggregate_votes = message.aggregateVotes;
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
      typeUrl: "/terra.oracle.v1beta1.QueryAggregateVotesResponse",
      value: QueryAggregateVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/terra.oracle.v1beta1.QueryParamsRequest",
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
      typeUrl: "/terra.oracle.v1beta1.QueryParamsRequest",
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
  typeUrl: "/terra.oracle.v1beta1.QueryParamsResponse",
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
      typeUrl: "/terra.oracle.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};