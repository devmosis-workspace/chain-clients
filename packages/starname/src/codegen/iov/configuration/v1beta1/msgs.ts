import { Config, ConfigSDKType, Fees, FeesSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfig {
  /** Signer is the address of the entity who is doing the transaction */
  signer: string;
  /** NewConfiguration contains the new configuration data */
  newConfiguration?: Config;
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
  fees?: Fees;
  configurer: string;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFeesSDKType {
  fees?: FeesSDKType;
  configurer: string;
}
function createBaseMsgUpdateConfig(): MsgUpdateConfig {
  return {
    signer: "",
    newConfiguration: undefined
  };
}
export const MsgUpdateConfig = {
  encode(message: MsgUpdateConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateFees(): MsgUpdateFees {
  return {
    fees: undefined,
    configurer: ""
  };
}
export const MsgUpdateFees = {
  encode(message: MsgUpdateFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};