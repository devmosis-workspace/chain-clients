import { Params, ParamsAmino, ParamsSDKType } from "./dyncomm";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the dyncomm module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  validatorCommissionRates: ValidatorCommissionRate[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/terra.dyncomm.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the dyncomm module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  validator_commission_rates?: ValidatorCommissionRateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/terra.dyncomm.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the dyncomm module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  validator_commission_rates: ValidatorCommissionRateSDKType[];
}
/**
 * MinDynCommission defines a validator - min commission rate
 * pair to be enforced by the blockchain
 */
export interface ValidatorCommissionRate {
  validatorAddress: string;
  minCommissionRate: string;
  targetCommissionRate: string;
}
export interface ValidatorCommissionRateProtoMsg {
  typeUrl: "/terra.dyncomm.v1beta1.ValidatorCommissionRate";
  value: Uint8Array;
}
/**
 * MinDynCommission defines a validator - min commission rate
 * pair to be enforced by the blockchain
 */
export interface ValidatorCommissionRateAmino {
  validator_address?: string;
  min_commission_rate?: string;
  target_commission_rate?: string;
}
export interface ValidatorCommissionRateAminoMsg {
  type: "/terra.dyncomm.v1beta1.ValidatorCommissionRate";
  value: ValidatorCommissionRateAmino;
}
/**
 * MinDynCommission defines a validator - min commission rate
 * pair to be enforced by the blockchain
 */
export interface ValidatorCommissionRateSDKType {
  validator_address: string;
  min_commission_rate: string;
  target_commission_rate: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    validatorCommissionRates: []
  };
}
export const GenesisState = {
  typeUrl: "/terra.dyncomm.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validatorCommissionRates) {
      ValidatorCommissionRate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      validatorCommissionRates: Array.isArray(object?.validatorCommissionRates) ? object.validatorCommissionRates.map((e: any) => ValidatorCommissionRate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.validatorCommissionRates = object.validatorCommissionRates?.map(e => ValidatorCommissionRate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.validatorCommissionRates = object.validator_commission_rates?.map(e => ValidatorCommissionRate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.validatorCommissionRates) {
      obj.validator_commission_rates = message.validatorCommissionRates.map(e => e ? ValidatorCommissionRate.toAmino(e) : undefined);
    } else {
      obj.validator_commission_rates = message.validatorCommissionRates;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/terra.dyncomm.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseValidatorCommissionRate(): ValidatorCommissionRate {
  return {
    validatorAddress: "",
    minCommissionRate: "",
    targetCommissionRate: ""
  };
}
export const ValidatorCommissionRate = {
  typeUrl: "/terra.dyncomm.v1beta1.ValidatorCommissionRate",
  encode(message: ValidatorCommissionRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
    }
    if (message.targetCommissionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.targetCommissionRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorCommissionRate {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      minCommissionRate: isSet(object.minCommissionRate) ? String(object.minCommissionRate) : "",
      targetCommissionRate: isSet(object.targetCommissionRate) ? String(object.targetCommissionRate) : ""
    };
  },
  fromPartial(object: Partial<ValidatorCommissionRate>): ValidatorCommissionRate {
    const message = createBaseValidatorCommissionRate();
    message.validatorAddress = object.validatorAddress ?? "";
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.targetCommissionRate = object.targetCommissionRate ?? "";
    return message;
  },
  fromAmino(object: ValidatorCommissionRateAmino): ValidatorCommissionRate {
    const message = createBaseValidatorCommissionRate();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
      message.minCommissionRate = object.min_commission_rate;
    }
    if (object.target_commission_rate !== undefined && object.target_commission_rate !== null) {
      message.targetCommissionRate = object.target_commission_rate;
    }
    return message;
  },
  toAmino(message: ValidatorCommissionRate): ValidatorCommissionRateAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.min_commission_rate = message.minCommissionRate === "" ? undefined : message.minCommissionRate;
    obj.target_commission_rate = message.targetCommissionRate === "" ? undefined : message.targetCommissionRate;
    return obj;
  },
  fromAminoMsg(object: ValidatorCommissionRateAminoMsg): ValidatorCommissionRate {
    return ValidatorCommissionRate.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorCommissionRateProtoMsg): ValidatorCommissionRate {
    return ValidatorCommissionRate.decode(message.value);
  },
  toProto(message: ValidatorCommissionRate): Uint8Array {
    return ValidatorCommissionRate.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCommissionRate): ValidatorCommissionRateProtoMsg {
    return {
      typeUrl: "/terra.dyncomm.v1beta1.ValidatorCommissionRate",
      value: ValidatorCommissionRate.encode(message).finish()
    };
  }
};