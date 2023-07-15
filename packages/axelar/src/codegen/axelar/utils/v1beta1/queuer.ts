import * as _m0 from "protobufjs/minimal";
import { isSet, isObject, bytesFromBase64 } from "../../../helpers";
export interface QueueState_ItemsEntry {
  key: string;
  value?: Item;
}
export interface QueueState_ItemsEntrySDKType {
  key: string;
  value?: ItemSDKType;
}
export interface QueueState {
  items?: {
    [key: string]: QueueState_Item;
  };
}
export interface QueueStateSDKType {
  items?: {
    [key: string]: QueueState_ItemSDKType;
  };
}
export interface QueueState_Item {
  key: Uint8Array;
  value: Uint8Array;
}
export interface QueueState_ItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
function createBaseQueueState_ItemsEntry(): QueueState_ItemsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const QueueState_ItemsEntry = {
  encode(message: QueueState_ItemsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Item.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueueState_ItemsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Item.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<QueueState_ItemsEntry>): QueueState_ItemsEntry {
    const message = createBaseQueueState_ItemsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Item.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseQueueState(): QueueState {
  return {
    items: {}
  };
}
export const QueueState = {
  encode(message: QueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.items).forEach(([key, value]) => {
      QueueState_ItemsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): QueueState {
    return {
      items: isObject(object.items) ? Object.entries(object.items).reduce<{
        [key: string]: Item;
      }>((acc, [key, value]) => {
        acc[key] = Item.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<QueueState>): QueueState {
    const message = createBaseQueueState();
    message.items = Object.entries(object.items ?? {}).reduce<{
      [key: string]: Item;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Item.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseQueueState_Item(): QueueState_Item {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const QueueState_Item = {
  encode(message: QueueState_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueueState_Item {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueueState_Item>): QueueState_Item {
    const message = createBaseQueueState_Item();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};