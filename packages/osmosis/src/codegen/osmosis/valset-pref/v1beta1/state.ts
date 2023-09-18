import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreference {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  valOperAddress: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */
  weight: string;
}
export interface ValidatorPreferenceProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference";
  value: Uint8Array;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceAmino {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  val_oper_address: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */
  weight: string;
}
export interface ValidatorPreferenceAminoMsg {
  type: "osmosis/valsetpref/validator-preference";
  value: ValidatorPreferenceAmino;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceSDKType {
  val_oper_address: string;
  weight: string;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferences {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreference[];
}
export interface ValidatorSetPreferencesProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences";
  value: Uint8Array;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesAmino {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreferenceAmino[];
}
export interface ValidatorSetPreferencesAminoMsg {
  type: "osmosis/valsetpref/validator-set-preferences";
  value: ValidatorSetPreferencesAmino;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesSDKType {
  preferences: ValidatorPreferenceSDKType[];
}
function createBaseValidatorPreference(): ValidatorPreference {
  return {
    valOperAddress: "",
    weight: ""
  };
}
export const ValidatorPreference = {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
  encode(message: ValidatorPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valOperAddress !== "") {
      writer.uint32(10).string(message.valOperAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorPreference {
    return {
      valOperAddress: isSet(object.valOperAddress) ? String(object.valOperAddress) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<ValidatorPreference>): ValidatorPreference {
    const message = createBaseValidatorPreference();
    message.valOperAddress = object.valOperAddress ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: ValidatorPreferenceAmino): ValidatorPreference {
    return {
      valOperAddress: object.val_oper_address,
      weight: object.weight
    };
  },
  toAmino(message: ValidatorPreference): ValidatorPreferenceAmino {
    const obj: any = {};
    obj.val_oper_address = message.valOperAddress;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: ValidatorPreferenceAminoMsg): ValidatorPreference {
    return ValidatorPreference.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorPreference): ValidatorPreferenceAminoMsg {
    return {
      type: "osmosis/valsetpref/validator-preference",
      value: ValidatorPreference.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorPreferenceProtoMsg): ValidatorPreference {
    return ValidatorPreference.decode(message.value);
  },
  toProto(message: ValidatorPreference): Uint8Array {
    return ValidatorPreference.encode(message).finish();
  },
  toProtoMsg(message: ValidatorPreference): ValidatorPreferenceProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
      value: ValidatorPreference.encode(message).finish()
    };
  }
};
function createBaseValidatorSetPreferences(): ValidatorSetPreferences {
  return {
    preferences: []
  };
}
export const ValidatorSetPreferences = {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
  encode(message: ValidatorSetPreferences, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ValidatorSetPreferences {
    return {
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ValidatorSetPreferences>): ValidatorSetPreferences {
    const message = createBaseValidatorSetPreferences();
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorSetPreferencesAmino): ValidatorSetPreferences {
    return {
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorSetPreferences): ValidatorSetPreferencesAmino {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorSetPreferencesAminoMsg): ValidatorSetPreferences {
    return ValidatorSetPreferences.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSetPreferences): ValidatorSetPreferencesAminoMsg {
    return {
      type: "osmosis/valsetpref/validator-set-preferences",
      value: ValidatorSetPreferences.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSetPreferencesProtoMsg): ValidatorSetPreferences {
    return ValidatorSetPreferences.decode(message.value);
  },
  toProto(message: ValidatorSetPreferences): Uint8Array {
    return ValidatorSetPreferences.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSetPreferences): ValidatorSetPreferencesProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
      value: ValidatorSetPreferences.encode(message).finish()
    };
  }
};