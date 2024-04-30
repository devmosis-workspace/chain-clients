import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
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
export interface QueryAllExchangeRatesRequest {
}
export interface QueryAllExchangeRatesRequestProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.QueryAllExchangeRatesRequest";
    value: Uint8Array;
}
/**
 * QueryAllExchangeRatesRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryAllExchangeRatesRequestAmino {
}
export interface QueryAllExchangeRatesRequestAminoMsg {
    type: "/persistence.oracle.v1beta1.QueryAllExchangeRatesRequest";
    value: QueryAllExchangeRatesRequestAmino;
}
/**
 * QueryAllExchangeRatesRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryAllExchangeRatesRequestSDKType {
}
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
export interface QueryActiveExchangeRatesRequest {
}
export interface QueryActiveExchangeRatesRequestProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesRequest";
    value: Uint8Array;
}
/** QueryActiveExchangeRatesRequest is the request type for the Query/ActiveExchangeRates RPC method. */
export interface QueryActiveExchangeRatesRequestAmino {
}
export interface QueryActiveExchangeRatesRequestAminoMsg {
    type: "/persistence.oracle.v1beta1.QueryActiveExchangeRatesRequest";
    value: QueryActiveExchangeRatesRequestAmino;
}
/** QueryActiveExchangeRatesRequest is the request type for the Query/ActiveExchangeRates RPC method. */
export interface QueryActiveExchangeRatesRequestSDKType {
}
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
export interface QueryAggregatePrevotesRequest {
}
export interface QueryAggregatePrevotesRequestProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.QueryAggregatePrevotesRequest";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesRequestAmino {
}
export interface QueryAggregatePrevotesRequestAminoMsg {
    type: "/persistence.oracle.v1beta1.QueryAggregatePrevotesRequest";
    value: QueryAggregatePrevotesRequestAmino;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesRequestSDKType {
}
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
export interface QueryAggregateVotesRequest {
}
export interface QueryAggregateVotesRequestProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.QueryAggregateVotesRequest";
    value: Uint8Array;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesRequestAmino {
}
export interface QueryAggregateVotesRequestAminoMsg {
    type: "/persistence.oracle.v1beta1.QueryAggregateVotesRequest";
    value: QueryAggregateVotesRequestAmino;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesRequestSDKType {
}
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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/persistence.oracle.v1beta1.QueryParamsRequest";
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
export interface QueryRewardPoolBalanceRequest {
}
export interface QueryRewardPoolBalanceRequestProtoMsg {
    typeUrl: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceRequest";
    value: Uint8Array;
}
export interface QueryRewardPoolBalanceRequestAmino {
}
export interface QueryRewardPoolBalanceRequestAminoMsg {
    type: "/persistence.oracle.v1beta1.QueryRewardPoolBalanceRequest";
    value: QueryRewardPoolBalanceRequestAmino;
}
export interface QueryRewardPoolBalanceRequestSDKType {
}
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
export declare const QueryAllExchangeRatesRequest: {
    typeUrl: string;
    encode(_: QueryAllExchangeRatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllExchangeRatesRequest;
    fromPartial(_: Partial<QueryAllExchangeRatesRequest>): QueryAllExchangeRatesRequest;
    fromAmino(_: QueryAllExchangeRatesRequestAmino): QueryAllExchangeRatesRequest;
    toAmino(_: QueryAllExchangeRatesRequest): QueryAllExchangeRatesRequestAmino;
    fromAminoMsg(object: QueryAllExchangeRatesRequestAminoMsg): QueryAllExchangeRatesRequest;
    fromProtoMsg(message: QueryAllExchangeRatesRequestProtoMsg): QueryAllExchangeRatesRequest;
    toProto(message: QueryAllExchangeRatesRequest): Uint8Array;
    toProtoMsg(message: QueryAllExchangeRatesRequest): QueryAllExchangeRatesRequestProtoMsg;
};
export declare const QueryAllExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryAllExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllExchangeRatesResponse;
    fromPartial(object: Partial<QueryAllExchangeRatesResponse>): QueryAllExchangeRatesResponse;
    fromAmino(object: QueryAllExchangeRatesResponseAmino): QueryAllExchangeRatesResponse;
    toAmino(message: QueryAllExchangeRatesResponse): QueryAllExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryAllExchangeRatesResponseAminoMsg): QueryAllExchangeRatesResponse;
    fromProtoMsg(message: QueryAllExchangeRatesResponseProtoMsg): QueryAllExchangeRatesResponse;
    toProto(message: QueryAllExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryAllExchangeRatesResponse): QueryAllExchangeRatesResponseProtoMsg;
};
export declare const QueryActiveExchangeRatesRequest: {
    typeUrl: string;
    encode(_: QueryActiveExchangeRatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryActiveExchangeRatesRequest;
    fromPartial(_: Partial<QueryActiveExchangeRatesRequest>): QueryActiveExchangeRatesRequest;
    fromAmino(_: QueryActiveExchangeRatesRequestAmino): QueryActiveExchangeRatesRequest;
    toAmino(_: QueryActiveExchangeRatesRequest): QueryActiveExchangeRatesRequestAmino;
    fromAminoMsg(object: QueryActiveExchangeRatesRequestAminoMsg): QueryActiveExchangeRatesRequest;
    fromProtoMsg(message: QueryActiveExchangeRatesRequestProtoMsg): QueryActiveExchangeRatesRequest;
    toProto(message: QueryActiveExchangeRatesRequest): Uint8Array;
    toProtoMsg(message: QueryActiveExchangeRatesRequest): QueryActiveExchangeRatesRequestProtoMsg;
};
export declare const QueryActiveExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryActiveExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActiveExchangeRatesResponse;
    fromPartial(object: Partial<QueryActiveExchangeRatesResponse>): QueryActiveExchangeRatesResponse;
    fromAmino(object: QueryActiveExchangeRatesResponseAmino): QueryActiveExchangeRatesResponse;
    toAmino(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryActiveExchangeRatesResponseAminoMsg): QueryActiveExchangeRatesResponse;
    fromProtoMsg(message: QueryActiveExchangeRatesResponseProtoMsg): QueryActiveExchangeRatesResponse;
    toProto(message: QueryActiveExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseProtoMsg;
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
export declare const QueryRewardPoolBalanceRequest: {
    typeUrl: string;
    encode(_: QueryRewardPoolBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryRewardPoolBalanceRequest;
    fromPartial(_: Partial<QueryRewardPoolBalanceRequest>): QueryRewardPoolBalanceRequest;
    fromAmino(_: QueryRewardPoolBalanceRequestAmino): QueryRewardPoolBalanceRequest;
    toAmino(_: QueryRewardPoolBalanceRequest): QueryRewardPoolBalanceRequestAmino;
    fromAminoMsg(object: QueryRewardPoolBalanceRequestAminoMsg): QueryRewardPoolBalanceRequest;
    fromProtoMsg(message: QueryRewardPoolBalanceRequestProtoMsg): QueryRewardPoolBalanceRequest;
    toProto(message: QueryRewardPoolBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryRewardPoolBalanceRequest): QueryRewardPoolBalanceRequestProtoMsg;
};
export declare const QueryRewardPoolBalanceResponse: {
    typeUrl: string;
    encode(message: QueryRewardPoolBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRewardPoolBalanceResponse;
    fromPartial(object: Partial<QueryRewardPoolBalanceResponse>): QueryRewardPoolBalanceResponse;
    fromAmino(object: QueryRewardPoolBalanceResponseAmino): QueryRewardPoolBalanceResponse;
    toAmino(message: QueryRewardPoolBalanceResponse): QueryRewardPoolBalanceResponseAmino;
    fromAminoMsg(object: QueryRewardPoolBalanceResponseAminoMsg): QueryRewardPoolBalanceResponse;
    fromProtoMsg(message: QueryRewardPoolBalanceResponseProtoMsg): QueryRewardPoolBalanceResponse;
    toProto(message: QueryRewardPoolBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryRewardPoolBalanceResponse): QueryRewardPoolBalanceResponseProtoMsg;
};
