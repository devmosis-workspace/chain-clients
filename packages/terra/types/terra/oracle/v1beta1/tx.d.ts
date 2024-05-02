import { BinaryWriter } from "../../../binary";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
    hash: string;
    feeder: string;
    validator: string;
}
export interface MsgAggregateExchangeRatePrevoteProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote";
    value: Uint8Array;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevoteAmino {
    hash?: string;
    feeder?: string;
    validator?: string;
}
export interface MsgAggregateExchangeRatePrevoteAminoMsg {
    type: "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote";
    value: MsgAggregateExchangeRatePrevoteAmino;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevoteSDKType {
    hash: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponse {
}
export interface MsgAggregateExchangeRatePrevoteResponseProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse";
    value: Uint8Array;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponseAmino {
}
export interface MsgAggregateExchangeRatePrevoteResponseAminoMsg {
    type: "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse";
    value: MsgAggregateExchangeRatePrevoteResponseAmino;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponseSDKType {
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
    salt: string;
    exchangeRates: string;
    feeder: string;
    validator: string;
}
export interface MsgAggregateExchangeRateVoteProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.MsgAggregateExchangeRateVote";
    value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteAmino {
    salt?: string;
    exchange_rates?: string;
    feeder?: string;
    validator?: string;
}
export interface MsgAggregateExchangeRateVoteAminoMsg {
    type: "/terra.oracle.v1beta1.MsgAggregateExchangeRateVote";
    value: MsgAggregateExchangeRateVoteAmino;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteSDKType {
    salt: string;
    exchange_rates: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {
}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse";
    value: Uint8Array;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseAmino {
}
export interface MsgAggregateExchangeRateVoteResponseAminoMsg {
    type: "/terra.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse";
    value: MsgAggregateExchangeRateVoteResponseAmino;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseSDKType {
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
    operator: string;
    delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.MsgDelegateFeedConsent";
    value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentAmino {
    operator?: string;
    delegate?: string;
}
export interface MsgDelegateFeedConsentAminoMsg {
    type: "/terra.oracle.v1beta1.MsgDelegateFeedConsent";
    value: MsgDelegateFeedConsentAmino;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentSDKType {
    operator: string;
    delegate: string;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {
}
export interface MsgDelegateFeedConsentResponseProtoMsg {
    typeUrl: "/terra.oracle.v1beta1.MsgDelegateFeedConsentResponse";
    value: Uint8Array;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseAmino {
}
export interface MsgDelegateFeedConsentResponseAminoMsg {
    type: "/terra.oracle.v1beta1.MsgDelegateFeedConsentResponse";
    value: MsgDelegateFeedConsentResponseAmino;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseSDKType {
}
export declare const MsgAggregateExchangeRatePrevote: {
    typeUrl: string;
    encode(message: MsgAggregateExchangeRatePrevote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAggregateExchangeRatePrevote;
    fromPartial(object: Partial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote;
    fromAmino(object: MsgAggregateExchangeRatePrevoteAmino): MsgAggregateExchangeRatePrevote;
    toAmino(message: MsgAggregateExchangeRatePrevote): MsgAggregateExchangeRatePrevoteAmino;
    fromAminoMsg(object: MsgAggregateExchangeRatePrevoteAminoMsg): MsgAggregateExchangeRatePrevote;
    fromProtoMsg(message: MsgAggregateExchangeRatePrevoteProtoMsg): MsgAggregateExchangeRatePrevote;
    toProto(message: MsgAggregateExchangeRatePrevote): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRatePrevote): MsgAggregateExchangeRatePrevoteProtoMsg;
};
export declare const MsgAggregateExchangeRatePrevoteResponse: {
    typeUrl: string;
    encode(_: MsgAggregateExchangeRatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse;
    fromPartial(_: Partial<MsgAggregateExchangeRatePrevoteResponse>): MsgAggregateExchangeRatePrevoteResponse;
    fromAmino(_: MsgAggregateExchangeRatePrevoteResponseAmino): MsgAggregateExchangeRatePrevoteResponse;
    toAmino(_: MsgAggregateExchangeRatePrevoteResponse): MsgAggregateExchangeRatePrevoteResponseAmino;
    fromAminoMsg(object: MsgAggregateExchangeRatePrevoteResponseAminoMsg): MsgAggregateExchangeRatePrevoteResponse;
    fromProtoMsg(message: MsgAggregateExchangeRatePrevoteResponseProtoMsg): MsgAggregateExchangeRatePrevoteResponse;
    toProto(message: MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRatePrevoteResponse): MsgAggregateExchangeRatePrevoteResponseProtoMsg;
};
export declare const MsgAggregateExchangeRateVote: {
    typeUrl: string;
    encode(message: MsgAggregateExchangeRateVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAggregateExchangeRateVote;
    fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote;
    fromAmino(object: MsgAggregateExchangeRateVoteAmino): MsgAggregateExchangeRateVote;
    toAmino(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteAmino;
    fromAminoMsg(object: MsgAggregateExchangeRateVoteAminoMsg): MsgAggregateExchangeRateVote;
    fromProtoMsg(message: MsgAggregateExchangeRateVoteProtoMsg): MsgAggregateExchangeRateVote;
    toProto(message: MsgAggregateExchangeRateVote): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteProtoMsg;
};
export declare const MsgAggregateExchangeRateVoteResponse: {
    typeUrl: string;
    encode(_: MsgAggregateExchangeRateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAggregateExchangeRateVoteResponse;
    fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse;
    fromAmino(_: MsgAggregateExchangeRateVoteResponseAmino): MsgAggregateExchangeRateVoteResponse;
    toAmino(_: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseAmino;
    fromAminoMsg(object: MsgAggregateExchangeRateVoteResponseAminoMsg): MsgAggregateExchangeRateVoteResponse;
    fromProtoMsg(message: MsgAggregateExchangeRateVoteResponseProtoMsg): MsgAggregateExchangeRateVoteResponse;
    toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseProtoMsg;
};
export declare const MsgDelegateFeedConsent: {
    typeUrl: string;
    encode(message: MsgDelegateFeedConsent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDelegateFeedConsent;
    fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent;
    fromAmino(object: MsgDelegateFeedConsentAmino): MsgDelegateFeedConsent;
    toAmino(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentAmino;
    fromAminoMsg(object: MsgDelegateFeedConsentAminoMsg): MsgDelegateFeedConsent;
    fromProtoMsg(message: MsgDelegateFeedConsentProtoMsg): MsgDelegateFeedConsent;
    toProto(message: MsgDelegateFeedConsent): Uint8Array;
    toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg;
};
export declare const MsgDelegateFeedConsentResponse: {
    typeUrl: string;
    encode(_: MsgDelegateFeedConsentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDelegateFeedConsentResponse;
    fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse;
    fromAmino(_: MsgDelegateFeedConsentResponseAmino): MsgDelegateFeedConsentResponse;
    toAmino(_: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseAmino;
    fromAminoMsg(object: MsgDelegateFeedConsentResponseAminoMsg): MsgDelegateFeedConsentResponse;
    fromProtoMsg(message: MsgDelegateFeedConsentResponseProtoMsg): MsgDelegateFeedConsentResponse;
    toProto(message: MsgDelegateFeedConsentResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseProtoMsg;
};
