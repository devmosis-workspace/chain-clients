import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ValidatorExchangeRate {
  internalTokensToSharesRate: string;
  epochNumber: Long;
}
export interface ValidatorExchangeRateSDKType {
  internal_tokens_to_shares_rate: string;
  epoch_number: Long;
}
export interface Validator {
  name: string;
  address: string;
  delegationAmt: string;
  weight: Long;
  internalExchangeRate?: ValidatorExchangeRate;
}
export interface ValidatorSDKType {
  name: string;
  address: string;
  delegation_amt: string;
  weight: Long;
  internal_exchange_rate?: ValidatorExchangeRateSDKType;
}
function createBaseValidatorExchangeRate(): ValidatorExchangeRate {
  return {
    internalTokensToSharesRate: "",
    epochNumber: Long.UZERO
  };
}
export const ValidatorExchangeRate = {
  encode(message: ValidatorExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.internalTokensToSharesRate !== "") {
      writer.uint32(10).string(message.internalTokensToSharesRate);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorExchangeRate {
    return {
      internalTokensToSharesRate: isSet(object.internalTokensToSharesRate) ? String(object.internalTokensToSharesRate) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ValidatorExchangeRate>): ValidatorExchangeRate {
    const message = createBaseValidatorExchangeRate();
    message.internalTokensToSharesRate = object.internalTokensToSharesRate ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }
};
function createBaseValidator(): Validator {
  return {
    name: "",
    address: "",
    delegationAmt: "",
    weight: Long.UZERO,
    internalExchangeRate: undefined
  };
}
export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.delegationAmt !== "") {
      writer.uint32(42).string(message.delegationAmt);
    }
    if (!message.weight.isZero()) {
      writer.uint32(48).uint64(message.weight);
    }
    if (message.internalExchangeRate !== undefined) {
      ValidatorExchangeRate.encode(message.internalExchangeRate, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Validator {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      delegationAmt: isSet(object.delegationAmt) ? String(object.delegationAmt) : "",
      weight: isSet(object.weight) ? Long.fromValue(object.weight) : Long.UZERO,
      internalExchangeRate: isSet(object.internalExchangeRate) ? ValidatorExchangeRate.fromJSON(object.internalExchangeRate) : undefined
    };
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.delegationAmt = object.delegationAmt ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    message.internalExchangeRate = object.internalExchangeRate !== undefined && object.internalExchangeRate !== null ? ValidatorExchangeRate.fromPartial(object.internalExchangeRate) : undefined;
    return message;
  }
};