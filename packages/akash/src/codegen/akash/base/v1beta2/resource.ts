import { ResourceValue, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeSDKType } from "./attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units?: ResourceValue;
  attributes: Attribute[];
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
  units?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity?: ResourceValue;
  attributes: Attribute[];
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
  quantity?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
  name: string;
  quantity?: ResourceValue;
  attributes: Attribute[];
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
  name: string;
  quantity?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
function createBaseCPU(): CPU {
  return {
    units: undefined,
    attributes: []
  };
}
export const CPU = {
  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CPU {
    return {
      units: isSet(object.units) ? ResourceValue.fromJSON(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CPU>): CPU {
    const message = createBaseCPU();
    message.units = object.units !== undefined && object.units !== null ? ResourceValue.fromPartial(object.units) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMemory(): Memory {
  return {
    quantity: undefined,
    attributes: []
  };
}
export const Memory = {
  encode(message: Memory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Memory {
    return {
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Memory>): Memory {
    const message = createBaseMemory();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStorage(): Storage {
  return {
    name: "",
    quantity: undefined,
    attributes: []
  };
}
export const Storage = {
  encode(message: Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};