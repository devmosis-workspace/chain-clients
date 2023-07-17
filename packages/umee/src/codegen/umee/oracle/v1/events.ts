import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseEventDelegateFeedConsent(): EventDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}
export const EventDelegateFeedConsent = {
  encode(message: EventDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },
  fromJSON(object: any): EventDelegateFeedConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : ""
    };
  },
  fromPartial(object: Partial<EventDelegateFeedConsent>): EventDelegateFeedConsent {
    const message = createBaseEventDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  }
};
function createBaseEventSetFxRate(): EventSetFxRate {
  return {
    denom: "",
    rate: ""
  };
}
export const EventSetFxRate = {
  encode(message: EventSetFxRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    return writer;
  },
  fromJSON(object: any): EventSetFxRate {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      rate: isSet(object.rate) ? String(object.rate) : ""
    };
  },
  fromPartial(object: Partial<EventSetFxRate>): EventSetFxRate {
    const message = createBaseEventSetFxRate();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? "";
    return message;
  }
};