import { Config, ConfigAmino, ConfigSDKType, Fees, FeesAmino, FeesSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfig {
  /** Signer is the address of the entity who is doing the transaction */
  signer: string;
  /** NewConfiguration contains the new configuration data */
  newConfiguration?: Config;
}
export interface MsgUpdateConfigProtoMsg {
  typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateConfig";
  value: Uint8Array;
}
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfigAmino {
  /** Signer is the address of the entity who is doing the transaction */
  signer: string;
  /** NewConfiguration contains the new configuration data */
  new_configuration?: ConfigAmino;
}
export interface MsgUpdateConfigAminoMsg {
  type: "/starnamed.x.configuration.v1beta1.MsgUpdateConfig";
  value: MsgUpdateConfigAmino;
}
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfigSDKType {
  signer: string;
  new_configuration?: ConfigSDKType;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFees {
  fees: Fees;
  configurer: string;
}
export interface MsgUpdateFeesProtoMsg {
  typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateFees";
  value: Uint8Array;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFeesAmino {
  fees?: FeesAmino;
  configurer: string;
}
export interface MsgUpdateFeesAminoMsg {
  type: "/starnamed.x.configuration.v1beta1.MsgUpdateFees";
  value: MsgUpdateFeesAmino;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFeesSDKType {
  fees: FeesSDKType;
  configurer: string;
}
function createBaseMsgUpdateConfig(): MsgUpdateConfig {
  return {
    signer: "",
    newConfiguration: undefined
  };
}
export const MsgUpdateConfig = {
  typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateConfig",
  encode(message: MsgUpdateConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.newConfiguration !== undefined) {
      Config.encode(message.newConfiguration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateConfig {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      newConfiguration: isSet(object.newConfiguration) ? Config.fromJSON(object.newConfiguration) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateConfig>): MsgUpdateConfig {
    const message = createBaseMsgUpdateConfig();
    message.signer = object.signer ?? "";
    message.newConfiguration = object.newConfiguration !== undefined && object.newConfiguration !== null ? Config.fromPartial(object.newConfiguration) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateConfigAmino): MsgUpdateConfig {
    return {
      signer: object.signer,
      newConfiguration: object?.new_configuration ? Config.fromAmino(object.new_configuration) : undefined
    };
  },
  toAmino(message: MsgUpdateConfig): MsgUpdateConfigAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.new_configuration = message.newConfiguration ? Config.toAmino(message.newConfiguration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateConfigAminoMsg): MsgUpdateConfig {
    return MsgUpdateConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateConfigProtoMsg): MsgUpdateConfig {
    return MsgUpdateConfig.decode(message.value);
  },
  toProto(message: MsgUpdateConfig): Uint8Array {
    return MsgUpdateConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateConfig): MsgUpdateConfigProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateConfig",
      value: MsgUpdateConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFees(): MsgUpdateFees {
  return {
    fees: Fees.fromPartial({}),
    configurer: ""
  };
}
export const MsgUpdateFees = {
  typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateFees",
  encode(message: MsgUpdateFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(10).fork()).ldelim();
    }
    if (message.configurer !== "") {
      writer.uint32(18).string(message.configurer);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateFees {
    return {
      fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined,
      configurer: isSet(object.configurer) ? String(object.configurer) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateFees>): MsgUpdateFees {
    const message = createBaseMsgUpdateFees();
    message.fees = object.fees !== undefined && object.fees !== null ? Fees.fromPartial(object.fees) : undefined;
    message.configurer = object.configurer ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateFeesAmino): MsgUpdateFees {
    return {
      fees: object?.fees ? Fees.fromAmino(object.fees) : undefined,
      configurer: object.configurer
    };
  },
  toAmino(message: MsgUpdateFees): MsgUpdateFeesAmino {
    const obj: any = {};
    obj.fees = message.fees ? Fees.toAmino(message.fees) : undefined;
    obj.configurer = message.configurer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeesAminoMsg): MsgUpdateFees {
    return MsgUpdateFees.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeesProtoMsg): MsgUpdateFees {
    return MsgUpdateFees.decode(message.value);
  },
  toProto(message: MsgUpdateFees): Uint8Array {
    return MsgUpdateFees.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFees): MsgUpdateFeesProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateFees",
      value: MsgUpdateFees.encode(message).finish()
    };
  }
};