import { ClassConfig, ClassConfigSDKType, ClassParentType, classParentTypeFromJSON } from "./class_data";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface ClassInput {
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  metadata: Uint8Array;
  config?: ClassConfig;
}
export interface ClassInputSDKType {
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  metadata: Uint8Array;
  config?: ClassConfigSDKType;
}
export interface ClassParentInput {
  type: ClassParentType;
  iscnIdPrefix: string;
}
export interface ClassParentInputSDKType {
  type: ClassParentType;
  iscn_id_prefix: string;
}
function createBaseClassInput(): ClassInput {
  return {
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    metadata: new Uint8Array(),
    config: undefined
  };
}
export const ClassInput = {
  encode(message: ClassInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(50).bytes(message.metadata);
    }
    if (message.config !== undefined) {
      ClassConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClassInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      description: isSet(object.description) ? String(object.description) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      config: isSet(object.config) ? ClassConfig.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object: Partial<ClassInput>): ClassInput {
    const message = createBaseClassInput();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.config = object.config !== undefined && object.config !== null ? ClassConfig.fromPartial(object.config) : undefined;
    return message;
  }
};
function createBaseClassParentInput(): ClassParentInput {
  return {
    type: 0,
    iscnIdPrefix: undefined
  };
}
export const ClassParentInput = {
  encode(message: ClassParentInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.iscnIdPrefix !== undefined) {
      writer.uint32(18).string(message.iscnIdPrefix);
    }
    return writer;
  },
  fromJSON(object: any): ClassParentInput {
    return {
      type: isSet(object.type) ? classParentTypeFromJSON(object.type) : 0,
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : undefined
    };
  },
  fromPartial(object: Partial<ClassParentInput>): ClassParentInput {
    const message = createBaseClassParentInput();
    message.type = object.type ?? 0;
    message.iscnIdPrefix = object.iscnIdPrefix ?? undefined;
    return message;
  }
};