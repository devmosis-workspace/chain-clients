import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Denom, DenomAmino, DenomSDKType, AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
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
export interface QueryExchangeRatesRequest {
}
export interface QueryExchangeRatesRequestProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.QueryExchangeRatesRequest";
    value: Uint8Array;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestAmino {
}
export interface QueryExchangeRatesRequestAminoMsg {
    type: "/terra.oracle.v1beta1.QueryExchangeRatesRequest";
    value: QueryExchangeRatesRequestAmino;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {
}
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
export interface QueryTobinTaxesRequest {
}
export interface QueryTobinTaxesRequestProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.QueryTobinTaxesRequest";
    value: Uint8Array;
}
/** QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method. */
export interface QueryTobinTaxesRequestAmino {
}
export interface QueryTobinTaxesRequestAminoMsg {
    type: "/terra.oracle.v1beta1.QueryTobinTaxesRequest";
    value: QueryTobinTaxesRequestAmino;
}
/** QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method. */
export interface QueryTobinTaxesRequestSDKType {
}
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
export interface QueryActivesRequest {
}
export interface QueryActivesRequestProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.QueryActivesRequest";
    value: Uint8Array;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestAmino {
}
export interface QueryActivesRequestAminoMsg {
    type: "/terra.oracle.v1beta1.QueryActivesRequest";
    value: QueryActivesRequestAmino;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {
}
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
export interface QueryVoteTargetsRequest {
}
export interface QueryVoteTargetsRequestProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.QueryVoteTargetsRequest";
    value: Uint8Array;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestAmino {
}
export interface QueryVoteTargetsRequestAminoMsg {
    type: "/terra.oracle.v1beta1.QueryVoteTargetsRequest";
    value: QueryVoteTargetsRequestAmino;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {
}
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
export interface QueryAggregatePrevotesRequest {
}
export interface QueryAggregatePrevotesRequestProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.QueryAggregatePrevotesRequest";
    value: Uint8Array;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequestAmino {
}
export interface QueryAggregatePrevotesRequestAminoMsg {
    type: "/terra.oracle.v1beta1.QueryAggregatePrevotesRequest";
    value: QueryAggregatePrevotesRequestAmino;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequestSDKType {
}
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
export interface QueryAggregateVotesRequest {
}
export interface QueryAggregateVotesRequestProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.QueryAggregateVotesRequest";
    value: Uint8Array;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequestAmino {
}
export interface QueryAggregateVotesRequestAminoMsg {
    type: "/terra.oracle.v1beta1.QueryAggregateVotesRequest";
    value: QueryAggregateVotesRequestAmino;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequestSDKType {
}
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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/terra.oracle.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryExchangeRateRequest: {
    typeUrl: string;
    encode(message: QueryExchangeRateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExchangeRateRequest;
    fromPartial(object: Partial<QueryExchangeRateRequest>): QueryExchangeRateRequest;
    fromAmino(object: QueryExchangeRateRequestAmino): QueryExchangeRateRequest;
    toAmino(message: QueryExchangeRateRequest): QueryExchangeRateRequestAmino;
    fromAminoMsg(object: QueryExchangeRateRequestAminoMsg): QueryExchangeRateRequest;
    fromProtoMsg(message: QueryExchangeRateRequestProtoMsg): QueryExchangeRateRequest;
    toProto(message: QueryExchangeRateRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeRateRequest): QueryExchangeRateRequestProtoMsg;
};
export declare const QueryExchangeRateResponse: {
    typeUrl: string;
    encode(message: QueryExchangeRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExchangeRateResponse;
    fromPartial(object: Partial<QueryExchangeRateResponse>): QueryExchangeRateResponse;
    fromAmino(object: QueryExchangeRateResponseAmino): QueryExchangeRateResponse;
    toAmino(message: QueryExchangeRateResponse): QueryExchangeRateResponseAmino;
    fromAminoMsg(object: QueryExchangeRateResponseAminoMsg): QueryExchangeRateResponse;
    fromProtoMsg(message: QueryExchangeRateResponseProtoMsg): QueryExchangeRateResponse;
    toProto(message: QueryExchangeRateResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRateResponse): QueryExchangeRateResponseProtoMsg;
};
export declare const QueryExchangeRatesRequest: {
    typeUrl: string;
    encode(_: QueryExchangeRatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryExchangeRatesRequest;
    fromPartial(_: Partial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest;
    fromAmino(_: QueryExchangeRatesRequestAmino): QueryExchangeRatesRequest;
    toAmino(_: QueryExchangeRatesRequest): QueryExchangeRatesRequestAmino;
    fromAminoMsg(object: QueryExchangeRatesRequestAminoMsg): QueryExchangeRatesRequest;
    fromProtoMsg(message: QueryExchangeRatesRequestProtoMsg): QueryExchangeRatesRequest;
    toProto(message: QueryExchangeRatesRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesRequest): QueryExchangeRatesRequestProtoMsg;
};
export declare const QueryExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExchangeRatesResponse;
    fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
    fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse;
    toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse;
    fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse;
    toProto(message: QueryExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg;
};
export declare const QueryTobinTaxRequest: {
    typeUrl: string;
    encode(message: QueryTobinTaxRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTobinTaxRequest;
    fromPartial(object: Partial<QueryTobinTaxRequest>): QueryTobinTaxRequest;
    fromAmino(object: QueryTobinTaxRequestAmino): QueryTobinTaxRequest;
    toAmino(message: QueryTobinTaxRequest): QueryTobinTaxRequestAmino;
    fromAminoMsg(object: QueryTobinTaxRequestAminoMsg): QueryTobinTaxRequest;
    fromProtoMsg(message: QueryTobinTaxRequestProtoMsg): QueryTobinTaxRequest;
    toProto(message: QueryTobinTaxRequest): Uint8Array;
    toProtoMsg(message: QueryTobinTaxRequest): QueryTobinTaxRequestProtoMsg;
};
export declare const QueryTobinTaxResponse: {
    typeUrl: string;
    encode(message: QueryTobinTaxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTobinTaxResponse;
    fromPartial(object: Partial<QueryTobinTaxResponse>): QueryTobinTaxResponse;
    fromAmino(object: QueryTobinTaxResponseAmino): QueryTobinTaxResponse;
    toAmino(message: QueryTobinTaxResponse): QueryTobinTaxResponseAmino;
    fromAminoMsg(object: QueryTobinTaxResponseAminoMsg): QueryTobinTaxResponse;
    fromProtoMsg(message: QueryTobinTaxResponseProtoMsg): QueryTobinTaxResponse;
    toProto(message: QueryTobinTaxResponse): Uint8Array;
    toProtoMsg(message: QueryTobinTaxResponse): QueryTobinTaxResponseProtoMsg;
};
export declare const QueryTobinTaxesRequest: {
    typeUrl: string;
    encode(_: QueryTobinTaxesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTobinTaxesRequest;
    fromPartial(_: Partial<QueryTobinTaxesRequest>): QueryTobinTaxesRequest;
    fromAmino(_: QueryTobinTaxesRequestAmino): QueryTobinTaxesRequest;
    toAmino(_: QueryTobinTaxesRequest): QueryTobinTaxesRequestAmino;
    fromAminoMsg(object: QueryTobinTaxesRequestAminoMsg): QueryTobinTaxesRequest;
    fromProtoMsg(message: QueryTobinTaxesRequestProtoMsg): QueryTobinTaxesRequest;
    toProto(message: QueryTobinTaxesRequest): Uint8Array;
    toProtoMsg(message: QueryTobinTaxesRequest): QueryTobinTaxesRequestProtoMsg;
};
export declare const QueryTobinTaxesResponse: {
    typeUrl: string;
    encode(message: QueryTobinTaxesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTobinTaxesResponse;
    fromPartial(object: Partial<QueryTobinTaxesResponse>): QueryTobinTaxesResponse;
    fromAmino(object: QueryTobinTaxesResponseAmino): QueryTobinTaxesResponse;
    toAmino(message: QueryTobinTaxesResponse): QueryTobinTaxesResponseAmino;
    fromAminoMsg(object: QueryTobinTaxesResponseAminoMsg): QueryTobinTaxesResponse;
    fromProtoMsg(message: QueryTobinTaxesResponseProtoMsg): QueryTobinTaxesResponse;
    toProto(message: QueryTobinTaxesResponse): Uint8Array;
    toProtoMsg(message: QueryTobinTaxesResponse): QueryTobinTaxesResponseProtoMsg;
};
export declare const QueryActivesRequest: {
    typeUrl: string;
    encode(_: QueryActivesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryActivesRequest;
    fromPartial(_: Partial<QueryActivesRequest>): QueryActivesRequest;
    fromAmino(_: QueryActivesRequestAmino): QueryActivesRequest;
    toAmino(_: QueryActivesRequest): QueryActivesRequestAmino;
    fromAminoMsg(object: QueryActivesRequestAminoMsg): QueryActivesRequest;
    fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest;
    toProto(message: QueryActivesRequest): Uint8Array;
    toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg;
};
export declare const QueryActivesResponse: {
    typeUrl: string;
    encode(message: QueryActivesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActivesResponse;
    fromPartial(object: Partial<QueryActivesResponse>): QueryActivesResponse;
    fromAmino(object: QueryActivesResponseAmino): QueryActivesResponse;
    toAmino(message: QueryActivesResponse): QueryActivesResponseAmino;
    fromAminoMsg(object: QueryActivesResponseAminoMsg): QueryActivesResponse;
    fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse;
    toProto(message: QueryActivesResponse): Uint8Array;
    toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg;
};
export declare const QueryVoteTargetsRequest: {
    typeUrl: string;
    encode(_: QueryVoteTargetsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryVoteTargetsRequest;
    fromPartial(_: Partial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest;
    fromAmino(_: QueryVoteTargetsRequestAmino): QueryVoteTargetsRequest;
    toAmino(_: QueryVoteTargetsRequest): QueryVoteTargetsRequestAmino;
    fromAminoMsg(object: QueryVoteTargetsRequestAminoMsg): QueryVoteTargetsRequest;
    fromProtoMsg(message: QueryVoteTargetsRequestProtoMsg): QueryVoteTargetsRequest;
    toProto(message: QueryVoteTargetsRequest): Uint8Array;
    toProtoMsg(message: QueryVoteTargetsRequest): QueryVoteTargetsRequestProtoMsg;
};
export declare const QueryVoteTargetsResponse: {
    typeUrl: string;
    encode(message: QueryVoteTargetsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVoteTargetsResponse;
    fromPartial(object: Partial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse;
    fromAmino(object: QueryVoteTargetsResponseAmino): QueryVoteTargetsResponse;
    toAmino(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseAmino;
    fromAminoMsg(object: QueryVoteTargetsResponseAminoMsg): QueryVoteTargetsResponse;
    fromProtoMsg(message: QueryVoteTargetsResponseProtoMsg): QueryVoteTargetsResponse;
    toProto(message: QueryVoteTargetsResponse): Uint8Array;
    toProtoMsg(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseProtoMsg;
};
export declare const QueryFeederDelegationRequest: {
    typeUrl: string;
    encode(message: QueryFeederDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeederDelegationRequest;
    fromPartial(object: Partial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest;
    fromAmino(object: QueryFeederDelegationRequestAmino): QueryFeederDelegationRequest;
    toAmino(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestAmino;
    fromAminoMsg(object: QueryFeederDelegationRequestAminoMsg): QueryFeederDelegationRequest;
    fromProtoMsg(message: QueryFeederDelegationRequestProtoMsg): QueryFeederDelegationRequest;
    toProto(message: QueryFeederDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestProtoMsg;
};
export declare const QueryFeederDelegationResponse: {
    typeUrl: string;
    encode(message: QueryFeederDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeederDelegationResponse;
    fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
    fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse;
    toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino;
    fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse;
    fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse;
    toProto(message: QueryFeederDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg;
};
export declare const QueryMissCounterRequest: {
    typeUrl: string;
    encode(message: QueryMissCounterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissCounterRequest;
    fromPartial(object: Partial<QueryMissCounterRequest>): QueryMissCounterRequest;
    fromAmino(object: QueryMissCounterRequestAmino): QueryMissCounterRequest;
    toAmino(message: QueryMissCounterRequest): QueryMissCounterRequestAmino;
    fromAminoMsg(object: QueryMissCounterRequestAminoMsg): QueryMissCounterRequest;
    fromProtoMsg(message: QueryMissCounterRequestProtoMsg): QueryMissCounterRequest;
    toProto(message: QueryMissCounterRequest): Uint8Array;
    toProtoMsg(message: QueryMissCounterRequest): QueryMissCounterRequestProtoMsg;
};
export declare const QueryMissCounterResponse: {
    typeUrl: string;
    encode(message: QueryMissCounterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissCounterResponse;
    fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse;
    fromAmino(object: QueryMissCounterResponseAmino): QueryMissCounterResponse;
    toAmino(message: QueryMissCounterResponse): QueryMissCounterResponseAmino;
    fromAminoMsg(object: QueryMissCounterResponseAminoMsg): QueryMissCounterResponse;
    fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse;
    toProto(message: QueryMissCounterResponse): Uint8Array;
    toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg;
};
export declare const QueryAggregatePrevoteRequest: {
    typeUrl: string;
    encode(message: QueryAggregatePrevoteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregatePrevoteRequest;
    fromPartial(object: Partial<QueryAggregatePrevoteRequest>): QueryAggregatePrevoteRequest;
    fromAmino(object: QueryAggregatePrevoteRequestAmino): QueryAggregatePrevoteRequest;
    toAmino(message: QueryAggregatePrevoteRequest): QueryAggregatePrevoteRequestAmino;
    fromAminoMsg(object: QueryAggregatePrevoteRequestAminoMsg): QueryAggregatePrevoteRequest;
    fromProtoMsg(message: QueryAggregatePrevoteRequestProtoMsg): QueryAggregatePrevoteRequest;
    toProto(message: QueryAggregatePrevoteRequest): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevoteRequest): QueryAggregatePrevoteRequestProtoMsg;
};
export declare const QueryAggregatePrevoteResponse: {
    typeUrl: string;
    encode(message: QueryAggregatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregatePrevoteResponse;
    fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse;
    fromAmino(object: QueryAggregatePrevoteResponseAmino): QueryAggregatePrevoteResponse;
    toAmino(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseAmino;
    fromAminoMsg(object: QueryAggregatePrevoteResponseAminoMsg): QueryAggregatePrevoteResponse;
    fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse;
    toProto(message: QueryAggregatePrevoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg;
};
export declare const QueryAggregatePrevotesRequest: {
    typeUrl: string;
    encode(_: QueryAggregatePrevotesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAggregatePrevotesRequest;
    fromPartial(_: Partial<QueryAggregatePrevotesRequest>): QueryAggregatePrevotesRequest;
    fromAmino(_: QueryAggregatePrevotesRequestAmino): QueryAggregatePrevotesRequest;
    toAmino(_: QueryAggregatePrevotesRequest): QueryAggregatePrevotesRequestAmino;
    fromAminoMsg(object: QueryAggregatePrevotesRequestAminoMsg): QueryAggregatePrevotesRequest;
    fromProtoMsg(message: QueryAggregatePrevotesRequestProtoMsg): QueryAggregatePrevotesRequest;
    toProto(message: QueryAggregatePrevotesRequest): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotesRequest): QueryAggregatePrevotesRequestProtoMsg;
};
export declare const QueryAggregatePrevotesResponse: {
    typeUrl: string;
    encode(message: QueryAggregatePrevotesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregatePrevotesResponse;
    fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse;
    fromAmino(object: QueryAggregatePrevotesResponseAmino): QueryAggregatePrevotesResponse;
    toAmino(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseAmino;
    fromAminoMsg(object: QueryAggregatePrevotesResponseAminoMsg): QueryAggregatePrevotesResponse;
    fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse;
    toProto(message: QueryAggregatePrevotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg;
};
export declare const QueryAggregateVoteRequest: {
    typeUrl: string;
    encode(message: QueryAggregateVoteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVoteRequest;
    fromPartial(object: Partial<QueryAggregateVoteRequest>): QueryAggregateVoteRequest;
    fromAmino(object: QueryAggregateVoteRequestAmino): QueryAggregateVoteRequest;
    toAmino(message: QueryAggregateVoteRequest): QueryAggregateVoteRequestAmino;
    fromAminoMsg(object: QueryAggregateVoteRequestAminoMsg): QueryAggregateVoteRequest;
    fromProtoMsg(message: QueryAggregateVoteRequestProtoMsg): QueryAggregateVoteRequest;
    toProto(message: QueryAggregateVoteRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateVoteRequest): QueryAggregateVoteRequestProtoMsg;
};
export declare const QueryAggregateVoteResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVoteResponse;
    fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse;
    fromAmino(object: QueryAggregateVoteResponseAmino): QueryAggregateVoteResponse;
    toAmino(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseAmino;
    fromAminoMsg(object: QueryAggregateVoteResponseAminoMsg): QueryAggregateVoteResponse;
    fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse;
    toProto(message: QueryAggregateVoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg;
};
export declare const QueryAggregateVotesRequest: {
    typeUrl: string;
    encode(_: QueryAggregateVotesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAggregateVotesRequest;
    fromPartial(_: Partial<QueryAggregateVotesRequest>): QueryAggregateVotesRequest;
    fromAmino(_: QueryAggregateVotesRequestAmino): QueryAggregateVotesRequest;
    toAmino(_: QueryAggregateVotesRequest): QueryAggregateVotesRequestAmino;
    fromAminoMsg(object: QueryAggregateVotesRequestAminoMsg): QueryAggregateVotesRequest;
    fromProtoMsg(message: QueryAggregateVotesRequestProtoMsg): QueryAggregateVotesRequest;
    toProto(message: QueryAggregateVotesRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateVotesRequest): QueryAggregateVotesRequestProtoMsg;
};
export declare const QueryAggregateVotesResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVotesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVotesResponse;
    fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse;
    fromAmino(object: QueryAggregateVotesResponseAmino): QueryAggregateVotesResponse;
    toAmino(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseAmino;
    fromAminoMsg(object: QueryAggregateVotesResponseAminoMsg): QueryAggregateVotesResponse;
    fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse;
    toProto(message: QueryAggregateVotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg;
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
