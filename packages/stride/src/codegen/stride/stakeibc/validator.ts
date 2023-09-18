import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface ValidatorExchangeRate {
  internalTokensToSharesRate: string;
  epochNumber: bigint;
}
export interface ValidatorExchangeRateProtoMsg {
  typeUrl: "/stride.stakeibc.ValidatorExchangeRate";
  value: Uint8Array;
}
export interface ValidatorExchangeRateAmino {
  internal_tokens_to_shares_rate: string;
  epoch_number: string;
}
export interface ValidatorExchangeRateAminoMsg {
  type: "/stride.stakeibc.ValidatorExchangeRate";
  value: ValidatorExchangeRateAmino;
}
export interface ValidatorExchangeRateSDKType {
  internal_tokens_to_shares_rate: string;
  epoch_number: bigint;
}
export interface Validator {
  name: string;
  address: string;
  delegationAmt: string;
  weight: bigint;
  internalExchangeRate: ValidatorExchangeRate;
}
export interface ValidatorProtoMsg {
  typeUrl: "/stride.stakeibc.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  name: string;
  address: string;
  delegation_amt: string;
  weight: string;
  internal_exchange_rate?: ValidatorExchangeRateAmino;
}
export interface ValidatorAminoMsg {
  type: "/stride.stakeibc.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  name: string;
  address: string;
  delegation_amt: string;
  weight: bigint;
  internal_exchange_rate: ValidatorExchangeRateSDKType;
}
function createBaseValidatorExchangeRate(): ValidatorExchangeRate {
  return {
    internalTokensToSharesRate: "",
    epochNumber: BigInt(0)
  };
}
export const ValidatorExchangeRate = {
  typeUrl: "/stride.stakeibc.ValidatorExchangeRate",
  encode(message: ValidatorExchangeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.internalTokensToSharesRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.internalTokensToSharesRate, 18).atomics);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorExchangeRate {
    return {
      internalTokensToSharesRate: isSet(object.internalTokensToSharesRate) ? String(object.internalTokensToSharesRate) : "",
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ValidatorExchangeRate>): ValidatorExchangeRate {
    const message = createBaseValidatorExchangeRate();
    message.internalTokensToSharesRate = object.internalTokensToSharesRate ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorExchangeRateAmino): ValidatorExchangeRate {
    return {
      internalTokensToSharesRate: object.internal_tokens_to_shares_rate,
      epochNumber: BigInt(object.epoch_number)
    };
  },
  toAmino(message: ValidatorExchangeRate): ValidatorExchangeRateAmino {
    const obj: any = {};
    obj.internal_tokens_to_shares_rate = message.internalTokensToSharesRate;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorExchangeRateAminoMsg): ValidatorExchangeRate {
    return ValidatorExchangeRate.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorExchangeRateProtoMsg): ValidatorExchangeRate {
    return ValidatorExchangeRate.decode(message.value);
  },
  toProto(message: ValidatorExchangeRate): Uint8Array {
    return ValidatorExchangeRate.encode(message).finish();
  },
  toProtoMsg(message: ValidatorExchangeRate): ValidatorExchangeRateProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.ValidatorExchangeRate",
      value: ValidatorExchangeRate.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    name: "",
    address: "",
    delegationAmt: "",
    weight: BigInt(0),
    internalExchangeRate: ValidatorExchangeRate.fromPartial({})
  };
}
export const Validator = {
  typeUrl: "/stride.stakeibc.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.delegationAmt !== "") {
      writer.uint32(42).string(message.delegationAmt);
    }
    if (message.weight !== BigInt(0)) {
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
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0),
      internalExchangeRate: isSet(object.internalExchangeRate) ? ValidatorExchangeRate.fromJSON(object.internalExchangeRate) : undefined
    };
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.delegationAmt = object.delegationAmt ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.internalExchangeRate = object.internalExchangeRate !== undefined && object.internalExchangeRate !== null ? ValidatorExchangeRate.fromPartial(object.internalExchangeRate) : undefined;
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    return {
      name: object.name,
      address: object.address,
      delegationAmt: object.delegation_amt,
      weight: BigInt(object.weight),
      internalExchangeRate: object?.internal_exchange_rate ? ValidatorExchangeRate.fromAmino(object.internal_exchange_rate) : undefined
    };
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.address = message.address;
    obj.delegation_amt = message.delegationAmt;
    obj.weight = message.weight ? message.weight.toString() : undefined;
    obj.internal_exchange_rate = message.internalExchangeRate ? ValidatorExchangeRate.toAmino(message.internalExchangeRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.Validator",
      value: Validator.encode(message).finish()
    };
  }
};