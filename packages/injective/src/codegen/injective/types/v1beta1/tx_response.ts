import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessage {
  header: string;
  data: Uint8Array;
}
export interface TxResponseGenericMessageProtoMsg {
  typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage";
  value: Uint8Array;
}
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessageAmino {
  header: string;
  data: Uint8Array;
}
export interface TxResponseGenericMessageAminoMsg {
  type: "/injective.types.v1beta1.TxResponseGenericMessage";
  value: TxResponseGenericMessageAmino;
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
export interface TxResponseDataProtoMsg {
  typeUrl: "/injective.types.v1beta1.TxResponseData";
  value: Uint8Array;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseDataAmino {
  /** improvised message to unpack length prefixed messages in tx response data */
  messages: TxResponseGenericMessageAmino[];
}
export interface TxResponseDataAminoMsg {
  type: "/injective.types.v1beta1.TxResponseData";
  value: TxResponseDataAmino;
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
  typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
  encode(message: TxResponseGenericMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TxResponseGenericMessageAmino): TxResponseGenericMessage {
    return {
      header: object.header,
      data: object.data
    };
  },
  toAmino(message: TxResponseGenericMessage): TxResponseGenericMessageAmino {
    const obj: any = {};
    obj.header = message.header;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: TxResponseGenericMessageAminoMsg): TxResponseGenericMessage {
    return TxResponseGenericMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResponseGenericMessageProtoMsg): TxResponseGenericMessage {
    return TxResponseGenericMessage.decode(message.value);
  },
  toProto(message: TxResponseGenericMessage): Uint8Array {
    return TxResponseGenericMessage.encode(message).finish();
  },
  toProtoMsg(message: TxResponseGenericMessage): TxResponseGenericMessageProtoMsg {
    return {
      typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
      value: TxResponseGenericMessage.encode(message).finish()
    };
  }
};
function createBaseTxResponseData(): TxResponseData {
  return {
    messages: []
  };
}
export const TxResponseData = {
  typeUrl: "/injective.types.v1beta1.TxResponseData",
  encode(message: TxResponseData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TxResponseDataAmino): TxResponseData {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => TxResponseGenericMessage.fromAmino(e)) : []
    };
  },
  toAmino(message: TxResponseData): TxResponseDataAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? TxResponseGenericMessage.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromAminoMsg(object: TxResponseDataAminoMsg): TxResponseData {
    return TxResponseData.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResponseDataProtoMsg): TxResponseData {
    return TxResponseData.decode(message.value);
  },
  toProto(message: TxResponseData): Uint8Array {
    return TxResponseData.encode(message).finish();
  },
  toProtoMsg(message: TxResponseData): TxResponseDataProtoMsg {
    return {
      typeUrl: "/injective.types.v1beta1.TxResponseData",
      value: TxResponseData.encode(message).finish()
    };
  }
};