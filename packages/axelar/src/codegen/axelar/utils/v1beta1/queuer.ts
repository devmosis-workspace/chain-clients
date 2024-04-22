import { BinaryWriter } from "../../../binary";
import { isSet, isObject, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface QueueState_ItemsEntry {
  key: string;
  value?: Item;
}
export interface QueueState_ItemsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QueueState_ItemsEntryAmino {
  key?: string;
  value?: ItemAmino;
}
export interface QueueState_ItemsEntryAminoMsg {
  type: string;
  value: QueueState_ItemsEntryAmino;
}
export interface QueueState_ItemsEntrySDKType {
  key: string;
  value?: ItemSDKType;
}
export interface QueueState {
  items: {
    [key: string]: QueueState_Item;
  };
}
export interface QueueStateProtoMsg {
  typeUrl: "/axelar.utils.v1beta1.QueueState";
  value: Uint8Array;
}
export interface QueueStateAmino {
  items?: {
    [key: string]: QueueState_ItemAmino;
  };
}
export interface QueueStateAminoMsg {
  type: "/axelar.utils.v1beta1.QueueState";
  value: QueueStateAmino;
}
export interface QueueStateSDKType {
  items: {
    [key: string]: QueueState_ItemSDKType;
  };
}
export interface QueueState_Item {
  key: Uint8Array;
  value: Uint8Array;
}
export interface QueueState_ItemProtoMsg {
  typeUrl: "/axelar.utils.v1beta1.Item";
  value: Uint8Array;
}
export interface QueueState_ItemAmino {
  key?: string;
  value?: string;
}
export interface QueueState_ItemAminoMsg {
  type: "/axelar.utils.v1beta1.Item";
  value: QueueState_ItemAmino;
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
  encode(message: QueueState_ItemsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueueState_ItemsEntryAmino): QueueState_ItemsEntry {
    const message = createBaseQueueState_ItemsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Item.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QueueState_ItemsEntry): QueueState_ItemsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? Item.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueueState_ItemsEntryAminoMsg): QueueState_ItemsEntry {
    return QueueState_ItemsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueueState_ItemsEntryProtoMsg): QueueState_ItemsEntry {
    return QueueState_ItemsEntry.decode(message.value);
  },
  toProto(message: QueueState_ItemsEntry): Uint8Array {
    return QueueState_ItemsEntry.encode(message).finish();
  }
};
function createBaseQueueState(): QueueState {
  return {
    items: {}
  };
}
export const QueueState = {
  typeUrl: "/axelar.utils.v1beta1.QueueState",
  encode(message: QueueState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueueStateAmino): QueueState {
    const message = createBaseQueueState();
    message.items = Object.entries(object.items ?? {}).reduce<{
      [key: string]: Item;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Item.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QueueState): QueueStateAmino {
    const obj: any = {};
    obj.items = {};
    if (message.items) {
      Object.entries(message.items).forEach(([k, v]) => {
        obj.items[k] = Item.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: QueueStateAminoMsg): QueueState {
    return QueueState.fromAmino(object.value);
  },
  fromProtoMsg(message: QueueStateProtoMsg): QueueState {
    return QueueState.decode(message.value);
  },
  toProto(message: QueueState): Uint8Array {
    return QueueState.encode(message).finish();
  },
  toProtoMsg(message: QueueState): QueueStateProtoMsg {
    return {
      typeUrl: "/axelar.utils.v1beta1.QueueState",
      value: QueueState.encode(message).finish()
    };
  }
};
function createBaseQueueState_Item(): QueueState_Item {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const QueueState_Item = {
  typeUrl: "/axelar.utils.v1beta1.Item",
  encode(message: QueueState_Item, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueueState_ItemAmino): QueueState_Item {
    const message = createBaseQueueState_Item();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: QueueState_Item): QueueState_ItemAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueueState_ItemAminoMsg): QueueState_Item {
    return QueueState_Item.fromAmino(object.value);
  },
  fromProtoMsg(message: QueueState_ItemProtoMsg): QueueState_Item {
    return QueueState_Item.decode(message.value);
  },
  toProto(message: QueueState_Item): Uint8Array {
    return QueueState_Item.encode(message).finish();
  },
  toProtoMsg(message: QueueState_Item): QueueState_ItemProtoMsg {
    return {
      typeUrl: "/axelar.utils.v1beta1.Item",
      value: QueueState_Item.encode(message).finish()
    };
  }
};