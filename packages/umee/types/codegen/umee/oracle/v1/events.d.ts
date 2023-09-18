import { BinaryWriter } from "../../../binary";
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */
export interface EventDelegateFeedConsent {
    /** Operator bech32 address who delegates his feed consent */
    operator: string;
    /** Delegate bech32 address */
    delegate: string;
}
export interface EventDelegateFeedConsentProtoMsg {
    typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent";
    value: Uint8Array;
}
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */
export interface EventDelegateFeedConsentAmino {
    /** Operator bech32 address who delegates his feed consent */
    operator: string;
    /** Delegate bech32 address */
    delegate: string;
}
export interface EventDelegateFeedConsentAminoMsg {
    type: "/umee.oracle.v1.EventDelegateFeedConsent";
    value: EventDelegateFeedConsentAmino;
}
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */
export interface EventDelegateFeedConsentSDKType {
    operator: string;
    delegate: string;
}
/** EventSetFxRate is emitted on exchange rate update */
export interface EventSetFxRate {
    /** uToken denom */
    denom: string;
    /** Exchange rate (based to USD) */
    rate: string;
}
export interface EventSetFxRateProtoMsg {
    typeUrl: "/umee.oracle.v1.EventSetFxRate";
    value: Uint8Array;
}
/** EventSetFxRate is emitted on exchange rate update */
export interface EventSetFxRateAmino {
    /** uToken denom */
    denom: string;
    /** Exchange rate (based to USD) */
    rate: string;
}
export interface EventSetFxRateAminoMsg {
    type: "/umee.oracle.v1.EventSetFxRate";
    value: EventSetFxRateAmino;
}
/** EventSetFxRate is emitted on exchange rate update */
export interface EventSetFxRateSDKType {
    denom: string;
    rate: string;
}
export declare const EventDelegateFeedConsent: {
    typeUrl: string;
    encode(message: EventDelegateFeedConsent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDelegateFeedConsent;
    fromPartial(object: Partial<EventDelegateFeedConsent>): EventDelegateFeedConsent;
    fromAmino(object: EventDelegateFeedConsentAmino): EventDelegateFeedConsent;
    toAmino(message: EventDelegateFeedConsent): EventDelegateFeedConsentAmino;
    fromAminoMsg(object: EventDelegateFeedConsentAminoMsg): EventDelegateFeedConsent;
    fromProtoMsg(message: EventDelegateFeedConsentProtoMsg): EventDelegateFeedConsent;
    toProto(message: EventDelegateFeedConsent): Uint8Array;
    toProtoMsg(message: EventDelegateFeedConsent): EventDelegateFeedConsentProtoMsg;
};
export declare const EventSetFxRate: {
    typeUrl: string;
    encode(message: EventSetFxRate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSetFxRate;
    fromPartial(object: Partial<EventSetFxRate>): EventSetFxRate;
    fromAmino(object: EventSetFxRateAmino): EventSetFxRate;
    toAmino(message: EventSetFxRate): EventSetFxRateAmino;
    fromAminoMsg(object: EventSetFxRateAminoMsg): EventSetFxRate;
    fromProtoMsg(message: EventSetFxRateProtoMsg): EventSetFxRate;
    toProto(message: EventSetFxRate): Uint8Array;
    toProtoMsg(message: EventSetFxRate): EventSetFxRateProtoMsg;
};
