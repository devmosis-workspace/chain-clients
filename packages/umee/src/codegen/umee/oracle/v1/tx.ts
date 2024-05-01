import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export interface MsgAggregateExchangeRatePrevoteProtoMsg {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit an aggregate
 * exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevoteAmino {
  hash?: string;
  /** Feeder is the author and the signer of the message. */
  feeder?: string;
  validator?: string;
}
export interface MsgAggregateExchangeRatePrevoteAminoMsg {
  type: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote";
  value: MsgAggregateExchangeRatePrevoteAmino;
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
export interface MsgAggregateExchangeRatePrevoteResponse {}
export interface MsgAggregateExchangeRatePrevoteResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevoteResponse";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */
export interface MsgAggregateExchangeRatePrevoteResponseAmino {}
export interface MsgAggregateExchangeRatePrevoteResponseAminoMsg {
  type: "/umee.oracle.v1.MsgAggregateExchangeRatePrevoteResponse";
  value: MsgAggregateExchangeRatePrevoteResponseAmino;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */
export interface MsgAggregateExchangeRatePrevoteResponseSDKType {}
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
export interface MsgAggregateExchangeRateVoteProtoMsg {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit anaggregate
 * exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteAmino {
  salt?: string;
  exchange_rates?: string;
  /** Feeder is the author and the signer of the message. */
  feeder?: string;
  validator?: string;
}
export interface MsgAggregateExchangeRateVoteAminoMsg {
  type: "/umee.oracle.v1.MsgAggregateExchangeRateVote";
  value: MsgAggregateExchangeRateVoteAmino;
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
export interface MsgAggregateExchangeRateVoteResponse {}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVoteResponse";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */
export interface MsgAggregateExchangeRateVoteResponseAmino {}
export interface MsgAggregateExchangeRateVoteResponseAminoMsg {
  type: "/umee.oracle.v1.MsgAggregateExchangeRateVoteResponse";
  value: MsgAggregateExchangeRateVoteResponseAmino;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */
export interface MsgAggregateExchangeRateVoteResponseSDKType {}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */
export interface MsgDelegateFeedConsent {
  /** Operator is the author and the signer of the message. */
  operator: string;
  delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
  typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent";
  value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */
export interface MsgDelegateFeedConsentAmino {
  /** Operator is the author and the signer of the message. */
  operator?: string;
  delegate?: string;
}
export interface MsgDelegateFeedConsentAminoMsg {
  type: "/umee.oracle.v1.MsgDelegateFeedConsent";
  value: MsgDelegateFeedConsentAmino;
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
export interface MsgDelegateFeedConsentResponse {}
export interface MsgDelegateFeedConsentResponseProtoMsg {
  typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsentResponse";
  value: Uint8Array;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */
export interface MsgDelegateFeedConsentResponseAmino {}
export interface MsgDelegateFeedConsentResponseAminoMsg {
  type: "/umee.oracle.v1.MsgDelegateFeedConsentResponse";
  value: MsgDelegateFeedConsentResponseAmino;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */
export interface MsgDelegateFeedConsentResponseSDKType {}
function createBaseMsgAggregateExchangeRatePrevote(): MsgAggregateExchangeRatePrevote {
  return {
    hash: "",
    feeder: "",
    validator: ""
  };
}
export const MsgAggregateExchangeRatePrevote = {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
  encode(message: MsgAggregateExchangeRatePrevote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): MsgAggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: MsgAggregateExchangeRatePrevoteAmino): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: MsgAggregateExchangeRatePrevote): MsgAggregateExchangeRatePrevoteAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: MsgAggregateExchangeRatePrevoteAminoMsg): MsgAggregateExchangeRatePrevote {
    return MsgAggregateExchangeRatePrevote.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAggregateExchangeRatePrevoteProtoMsg): MsgAggregateExchangeRatePrevote {
    return MsgAggregateExchangeRatePrevote.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRatePrevote): Uint8Array {
    return MsgAggregateExchangeRatePrevote.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRatePrevote): MsgAggregateExchangeRatePrevoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
      value: MsgAggregateExchangeRatePrevote.encode(message).finish()
    };
  }
};
function createBaseMsgAggregateExchangeRatePrevoteResponse(): MsgAggregateExchangeRatePrevoteResponse {
  return {};
}
export const MsgAggregateExchangeRatePrevoteResponse = {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevoteResponse",
  encode(_: MsgAggregateExchangeRatePrevoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAggregateExchangeRatePrevoteResponse>): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    return message;
  },
  fromAmino(_: MsgAggregateExchangeRatePrevoteResponseAmino): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    return message;
  },
  toAmino(_: MsgAggregateExchangeRatePrevoteResponse): MsgAggregateExchangeRatePrevoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAggregateExchangeRatePrevoteResponseAminoMsg): MsgAggregateExchangeRatePrevoteResponse {
    return MsgAggregateExchangeRatePrevoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAggregateExchangeRatePrevoteResponseProtoMsg): MsgAggregateExchangeRatePrevoteResponse {
    return MsgAggregateExchangeRatePrevoteResponse.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRatePrevoteResponse): Uint8Array {
    return MsgAggregateExchangeRatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRatePrevoteResponse): MsgAggregateExchangeRatePrevoteResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevoteResponse",
      value: MsgAggregateExchangeRatePrevoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
  return {
    salt: "",
    exchangeRates: "",
    feeder: "",
    validator: ""
  };
}
export const MsgAggregateExchangeRateVote = {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
  encode(message: MsgAggregateExchangeRateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt);
    }
    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): MsgAggregateExchangeRateVote {
    return {
      salt: isSet(object.salt) ? String(object.salt) : "",
      exchangeRates: isSet(object.exchangeRates) ? String(object.exchangeRates) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    message.salt = object.salt ?? "";
    message.exchangeRates = object.exchangeRates ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: MsgAggregateExchangeRateVoteAmino): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    }
    if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
      message.exchangeRates = object.exchange_rates;
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteAmino {
    const obj: any = {};
    obj.salt = message.salt === "" ? undefined : message.salt;
    obj.exchange_rates = message.exchangeRates === "" ? undefined : message.exchangeRates;
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: MsgAggregateExchangeRateVoteAminoMsg): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAggregateExchangeRateVoteProtoMsg): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVote): Uint8Array {
    return MsgAggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
      value: MsgAggregateExchangeRateVote.encode(message).finish()
    };
  }
};
function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
  return {};
}
export const MsgAggregateExchangeRateVoteResponse = {
  typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVoteResponse",
  encode(_: MsgAggregateExchangeRateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAggregateExchangeRateVoteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
  fromAmino(_: MsgAggregateExchangeRateVoteResponseAmino): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
  toAmino(_: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAggregateExchangeRateVoteResponseAminoMsg): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAggregateExchangeRateVoteResponseProtoMsg): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array {
    return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVoteResponse",
      value: MsgAggregateExchangeRateVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}
export const MsgDelegateFeedConsent = {
  typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
  encode(message: MsgDelegateFeedConsent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },
  fromJSON(object: any): MsgDelegateFeedConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : ""
    };
  },
  fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  },
  fromAmino(object: MsgDelegateFeedConsentAmino): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = object.delegate;
    }
    return message;
  },
  toAmino(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.delegate = message.delegate === "" ? undefined : message.delegate;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateFeedConsentAminoMsg): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateFeedConsentProtoMsg): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsent): Uint8Array {
    return MsgDelegateFeedConsent.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
      value: MsgDelegateFeedConsent.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}
export const MsgDelegateFeedConsentResponse = {
  typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsentResponse",
  encode(_: MsgDelegateFeedConsentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDelegateFeedConsentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
  fromAmino(_: MsgDelegateFeedConsentResponseAmino): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
  toAmino(_: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateFeedConsentResponseAminoMsg): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateFeedConsentResponseProtoMsg): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsentResponse): Uint8Array {
    return MsgDelegateFeedConsentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsentResponse",
      value: MsgDelegateFeedConsentResponse.encode(message).finish()
    };
  }
};