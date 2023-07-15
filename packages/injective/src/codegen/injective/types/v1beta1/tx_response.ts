import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessage {
  header: string;
  data: Uint8Array;
}
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessageSDKType {
  header: string;
  data: Uint8Array;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseData {
  /** improvised message to unpack length prefixed messages in tx response data */
  messages: TxResponseGenericMessage[];
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseDataSDKType {
  messages: TxResponseGenericMessageSDKType[];
}
function createBaseTxResponseGenericMessage(): TxResponseGenericMessage {
  return {
    header: "",
    data: new Uint8Array()
  };
}
export const TxResponseGenericMessage = {
  encode(message: TxResponseGenericMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== "") {
      writer.uint32(10).string(message.header);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): TxResponseGenericMessage {
    return {
      header: isSet(object.header) ? String(object.header) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<TxResponseGenericMessage>): TxResponseGenericMessage {
    const message = createBaseTxResponseGenericMessage();
    message.header = object.header ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseTxResponseData(): TxResponseData {
  return {
    messages: []
  };
}
export const TxResponseData = {
  encode(message: TxResponseData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      TxResponseGenericMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TxResponseData {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => TxResponseGenericMessage.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TxResponseData>): TxResponseData {
    const message = createBaseTxResponseData();
    message.messages = object.messages?.map(e => TxResponseGenericMessage.fromPartial(e)) || [];
    return message;
  }
};