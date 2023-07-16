import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */
  baseDenom: string;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceSDKType {
  path: string;
  base_denom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  sendEnabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receiveEnabled: boolean;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsSDKType {
  send_enabled: boolean;
  receive_enabled: boolean;
}
function createBaseDenomTrace(): DenomTrace {
  return {
    path: "",
    baseDenom: ""
  };
}
export const DenomTrace = {
  encode(message: DenomTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },
  fromJSON(object: any): DenomTrace {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },
  fromPartial(object: Partial<DenomTrace>): DenomTrace {
    const message = createBaseDenomTrace();
    message.path = object.path ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    sendEnabled: false,
    receiveEnabled: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sendEnabled === true) {
      writer.uint32(8).bool(message.sendEnabled);
    }
    if (message.receiveEnabled === true) {
      writer.uint32(16).bool(message.receiveEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      sendEnabled: isSet(object.sendEnabled) ? Boolean(object.sendEnabled) : false,
      receiveEnabled: isSet(object.receiveEnabled) ? Boolean(object.receiveEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.sendEnabled = object.sendEnabled ?? false;
    message.receiveEnabled = object.receiveEnabled ?? false;
    return message;
  }
};