import * as _m0 from "protobufjs/minimal";
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */
export interface EventDelegateFeedConsent {
    /** Operator bech32 address who delegates his feed consent */
    operator: string;
    /** Delegate bech32 address */
    delegate: string;
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
/** EventSetFxRate is emitted on exchange rate update */
export interface EventSetFxRateSDKType {
    denom: string;
    rate: string;
}
export declare const EventDelegateFeedConsent: {
    encode(message: EventDelegateFeedConsent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDelegateFeedConsent;
    fromPartial(object: Partial<EventDelegateFeedConsent>): EventDelegateFeedConsent;
};
export declare const EventSetFxRate: {
    encode(message: EventSetFxRate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSetFxRate;
    fromPartial(object: Partial<EventSetFxRate>): EventSetFxRate;
};
