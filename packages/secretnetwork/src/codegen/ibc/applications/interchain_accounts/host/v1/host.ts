import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
  /** host_enabled enables or disables the host submodule. */
  hostEnabled: boolean;
  /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
  allowMessages: string[];
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsSDKType {
  host_enabled: boolean;
  allow_messages: string[];
}
function createBaseParams(): Params {
  return {
    hostEnabled: false,
    allowMessages: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }
    for (const v of message.allowMessages) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      hostEnabled: isSet(object.hostEnabled) ? Boolean(object.hostEnabled) : false,
      allowMessages: Array.isArray(object?.allowMessages) ? object.allowMessages.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.hostEnabled = object.hostEnabled ?? false;
    message.allowMessages = object.allowMessages?.map(e => e) || [];
    return message;
  }
};