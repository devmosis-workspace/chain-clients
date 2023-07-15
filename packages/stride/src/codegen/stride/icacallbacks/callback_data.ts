import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CallbackData {
  callbackKey: string;
  portId: string;
  channelId: string;
  sequence: Long;
  callbackId: string;
  callbackArgs: Uint8Array;
}
export interface CallbackDataSDKType {
  callback_key: string;
  port_id: string;
  channel_id: string;
  sequence: Long;
  callback_id: string;
  callback_args: Uint8Array;
}
function createBaseCallbackData(): CallbackData {
  return {
    callbackKey: "",
    portId: "",
    channelId: "",
    sequence: Long.UZERO,
    callbackId: "",
    callbackArgs: new Uint8Array()
  };
}
export const CallbackData = {
  encode(message: CallbackData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.callbackId !== "") {
      writer.uint32(42).string(message.callbackId);
    }
    if (message.callbackArgs.length !== 0) {
      writer.uint32(50).bytes(message.callbackArgs);
    }
    return writer;
  },
  fromJSON(object: any): CallbackData {
    return {
      callbackKey: isSet(object.callbackKey) ? String(object.callbackKey) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      callbackId: isSet(object.callbackId) ? String(object.callbackId) : "",
      callbackArgs: isSet(object.callbackArgs) ? bytesFromBase64(object.callbackArgs) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CallbackData>): CallbackData {
    const message = createBaseCallbackData();
    message.callbackKey = object.callbackKey ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.callbackId = object.callbackId ?? "";
    message.callbackArgs = object.callbackArgs ?? new Uint8Array();
    return message;
  }
};