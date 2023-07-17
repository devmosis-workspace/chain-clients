import * as _m0 from "protobufjs/minimal";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit an aggregate
 * exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
    hash: string;
    /** Feeder is the author and the signer of the message. */
    feeder: string;
    validator: string;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit an aggregate
 * exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevoteSDKType {
    hash: string;
    feeder: string;
    validator: string;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */
export interface MsgAggregateExchangeRatePrevoteResponse {
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */
export interface MsgAggregateExchangeRatePrevoteResponseSDKType {
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit anaggregate
 * exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
    salt: string;
    exchangeRates: string;
    /** Feeder is the author and the signer of the message. */
    feeder: string;
    validator: string;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit anaggregate
 * exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteSDKType {
    salt: string;
    exchange_rates: string;
    feeder: string;
    validator: string;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */
export interface MsgAggregateExchangeRateVoteResponse {
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */
export interface MsgAggregateExchangeRateVoteResponseSDKType {
}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */
export interface MsgDelegateFeedConsent {
    /** Operator is the author and the signer of the message. */
    operator: string;
    delegate: string;
}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */
export interface MsgDelegateFeedConsentSDKType {
    operator: string;
    delegate: string;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */
export interface MsgDelegateFeedConsentResponse {
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */
export interface MsgDelegateFeedConsentResponseSDKType {
}
export declare const MsgAggregateExchangeRatePrevote: {
    encode(message: MsgAggregateExchangeRatePrevote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAggregateExchangeRatePrevote;
    fromPartial(object: Partial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote;
};
export declare const MsgAggregateExchangeRatePrevoteResponse: {
    encode(_: MsgAggregateExchangeRatePrevoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse;
    fromPartial(_: Partial<MsgAggregateExchangeRatePrevoteResponse>): MsgAggregateExchangeRatePrevoteResponse;
};
export declare const MsgAggregateExchangeRateVote: {
    encode(message: MsgAggregateExchangeRateVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAggregateExchangeRateVote;
    fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote;
};
export declare const MsgAggregateExchangeRateVoteResponse: {
    encode(_: MsgAggregateExchangeRateVoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAggregateExchangeRateVoteResponse;
    fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse;
};
export declare const MsgDelegateFeedConsent: {
    encode(message: MsgDelegateFeedConsent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDelegateFeedConsent;
    fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent;
};
export declare const MsgDelegateFeedConsentResponse: {
    encode(_: MsgDelegateFeedConsentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDelegateFeedConsentResponse;
    fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse;
};
