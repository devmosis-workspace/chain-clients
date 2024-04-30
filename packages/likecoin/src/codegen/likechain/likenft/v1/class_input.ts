import { ClassConfig, ClassConfigAmino, ClassConfigSDKType, ClassParentType, classParentTypeFromJSON } from "./class_data";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface ClassInput {
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  metadata: Uint8Array;
  config: ClassConfig;
}
export interface ClassInputProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassInput";
  value: Uint8Array;
}
export interface ClassInputAmino {
  name?: string;
  symbol?: string;
  description?: string;
  uri?: string;
  uri_hash?: string;
  metadata?: string;
  config?: ClassConfigAmino;
}
export interface ClassInputAminoMsg {
  type: "/likechain.likenft.v1.ClassInput";
  value: ClassInputAmino;
}
export interface ClassInputSDKType {
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  metadata: Uint8Array;
  config: ClassConfigSDKType;
}
export interface ClassParentInput {
  type: ClassParentType;
  iscnIdPrefix?: string;
}
export interface ClassParentInputProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassParentInput";
  value: Uint8Array;
}
export interface ClassParentInputAmino {
  type?: ClassParentType;
  iscn_id_prefix?: string;
}
export interface ClassParentInputAminoMsg {
  type: "/likechain.likenft.v1.ClassParentInput";
  value: ClassParentInputAmino;
}
export interface ClassParentInputSDKType {
  type: ClassParentType;
  iscn_id_prefix?: string;
}
function createBaseClassInput(): ClassInput {
  return {
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    metadata: new Uint8Array(),
    config: ClassConfig.fromPartial({})
  };
}
export const ClassInput = {
  typeUrl: "/likechain.likenft.v1.ClassInput",
  encode(message: ClassInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ClassInputAmino): ClassInput {
    const message = createBaseClassInput();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ClassConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: ClassInput): ClassInputAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.config = message.config ? ClassConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassInputAminoMsg): ClassInput {
    return ClassInput.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassInputProtoMsg): ClassInput {
    return ClassInput.decode(message.value);
  },
  toProto(message: ClassInput): Uint8Array {
    return ClassInput.encode(message).finish();
  },
  toProtoMsg(message: ClassInput): ClassInputProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassInput",
      value: ClassInput.encode(message).finish()
    };
  }
};
function createBaseClassParentInput(): ClassParentInput {
  return {
    type: 0,
    iscnIdPrefix: undefined
  };
}
export const ClassParentInput = {
  typeUrl: "/likechain.likenft.v1.ClassParentInput",
  encode(message: ClassParentInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      type: isSet(object.type) ? classParentTypeFromJSON(object.type) : -1,
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : undefined
    };
  },
  fromPartial(object: Partial<ClassParentInput>): ClassParentInput {
    const message = createBaseClassParentInput();
    message.type = object.type ?? 0;
    message.iscnIdPrefix = object.iscnIdPrefix ?? undefined;
    return message;
  },
  fromAmino(object: ClassParentInputAmino): ClassParentInput {
    const message = createBaseClassParentInput();
    if (object.type !== undefined && object.type !== null) {
      message.type = classParentTypeFromJSON(object.type);
    }
    if (object.iscn_id_prefix !== undefined && object.iscn_id_prefix !== null) {
      message.iscnIdPrefix = object.iscn_id_prefix;
    }
    return message;
  },
  toAmino(message: ClassParentInput): ClassParentInputAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.iscn_id_prefix = message.iscnIdPrefix;
    return obj;
  },
  fromAminoMsg(object: ClassParentInputAminoMsg): ClassParentInput {
    return ClassParentInput.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassParentInputProtoMsg): ClassParentInput {
    return ClassParentInput.decode(message.value);
  },
  toProto(message: ClassParentInput): Uint8Array {
    return ClassParentInput.encode(message).finish();
  },
  toProtoMsg(message: ClassParentInput): ClassParentInputProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassParentInput",
      value: ClassParentInput.encode(message).finish()
    };
  }
};