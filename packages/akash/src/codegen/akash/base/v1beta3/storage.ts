import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Storage stores resource quantity and storage attributes */
export interface Storage {
  name: string;
  quantity: ResourceValue;
  attributes: Attribute[];
}
export interface StorageProtoMsg {
  typeUrl: "/akash.base.v1beta3.Storage";
  value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
  name?: string;
  quantity?: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
  type: "/akash.base.v1beta3.Storage";
  value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
  name: string;
  quantity: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
function createBaseStorage(): Storage {
  return {
    name: "",
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Storage = {
  typeUrl: "/akash.base.v1beta3.Storage",
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Storage {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Storage>): Storage {
    const message = createBaseStorage();
    message.name = object.name ?? "";
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: StorageAminoMsg): Storage {
    return Storage.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProtoMsg): Storage {
    return Storage.decode(message.value);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta3.Storage",
      value: Storage.encode(message).finish()
    };
  }
};