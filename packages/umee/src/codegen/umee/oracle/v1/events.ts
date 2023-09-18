import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
function createBaseEventDelegateFeedConsent(): EventDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}
export const EventDelegateFeedConsent = {
  typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent",
  encode(message: EventDelegateFeedConsent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventDelegateFeedConsentAmino): EventDelegateFeedConsent {
    return {
      operator: object.operator,
      delegate: object.delegate
    };
  },
  toAmino(message: EventDelegateFeedConsent): EventDelegateFeedConsentAmino {
    const obj: any = {};
    obj.operator = message.operator;
    obj.delegate = message.delegate;
    return obj;
  },
  fromAminoMsg(object: EventDelegateFeedConsentAminoMsg): EventDelegateFeedConsent {
    return EventDelegateFeedConsent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDelegateFeedConsentProtoMsg): EventDelegateFeedConsent {
    return EventDelegateFeedConsent.decode(message.value);
  },
  toProto(message: EventDelegateFeedConsent): Uint8Array {
    return EventDelegateFeedConsent.encode(message).finish();
  },
  toProtoMsg(message: EventDelegateFeedConsent): EventDelegateFeedConsentProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent",
      value: EventDelegateFeedConsent.encode(message).finish()
    };
  }
};
function createBaseEventSetFxRate(): EventSetFxRate {
  return {
    denom: "",
    rate: ""
  };
}
export const EventSetFxRate = {
  typeUrl: "/umee.oracle.v1.EventSetFxRate",
  encode(message: EventSetFxRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rate, 18).atomics);
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
  },
  fromAmino(object: EventSetFxRateAmino): EventSetFxRate {
    return {
      denom: object.denom,
      rate: object.rate
    };
  },
  toAmino(message: EventSetFxRate): EventSetFxRateAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.rate = message.rate;
    return obj;
  },
  fromAminoMsg(object: EventSetFxRateAminoMsg): EventSetFxRate {
    return EventSetFxRate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetFxRateProtoMsg): EventSetFxRate {
    return EventSetFxRate.decode(message.value);
  },
  toProto(message: EventSetFxRate): Uint8Array {
    return EventSetFxRate.encode(message).finish();
  },
  toProtoMsg(message: EventSetFxRate): EventSetFxRateProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.EventSetFxRate",
      value: EventSetFxRate.encode(message).finish()
    };
  }
};