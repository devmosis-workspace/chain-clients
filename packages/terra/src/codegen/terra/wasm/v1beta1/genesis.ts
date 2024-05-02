import { LegacyCodeInfo, LegacyCodeInfoAmino, LegacyCodeInfoSDKType, LegacyContractInfo, LegacyContractInfoAmino, LegacyContractInfoSDKType } from "./wasm";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Model is a struct that holds a KV pair */
export interface Model {
  key: Uint8Array;
  value: Uint8Array;
}
export interface ModelProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.Model";
  value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelAmino {
  key?: string;
  value?: string;
}
export interface ModelAminoMsg {
  type: "/terra.wasm.v1beta1.Model";
  value: ModelAmino;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeInfo: LegacyCodeInfo;
  codeBytes: Uint8Array;
}
export interface CodeProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.Code";
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeAmino {
  code_info?: LegacyCodeInfoAmino;
  code_bytes?: string;
}
export interface CodeAminoMsg {
  type: "/terra.wasm.v1beta1.Code";
  value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
  code_info: LegacyCodeInfoSDKType;
  code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractInfo: LegacyContractInfo;
  contractStore: Model[];
}
export interface ContractProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.Contract";
  value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
  contract_info?: LegacyContractInfoAmino;
  contract_store?: ModelAmino[];
}
export interface ContractAminoMsg {
  type: "/terra.wasm.v1beta1.Contract";
  value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
  contract_info: LegacyContractInfoSDKType;
  contract_store: ModelSDKType[];
}
function createBaseModel(): Model {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const Model = {
  typeUrl: "/terra.wasm.v1beta1.Model",
  encode(message: Model, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Model {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Model>): Model {
    const message = createBaseModel();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ModelAmino): Model {
    const message = createBaseModel();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: Model): ModelAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ModelAminoMsg): Model {
    return Model.fromAmino(object.value);
  },
  fromProtoMsg(message: ModelProtoMsg): Model {
    return Model.decode(message.value);
  },
  toProto(message: Model): Uint8Array {
    return Model.encode(message).finish();
  },
  toProtoMsg(message: Model): ModelProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.Model",
      value: Model.encode(message).finish()
    };
  }
};
function createBaseCode(): Code {
  return {
    codeInfo: LegacyCodeInfo.fromPartial({}),
    codeBytes: new Uint8Array()
  };
}
export const Code = {
  typeUrl: "/terra.wasm.v1beta1.Code",
  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeInfo !== undefined) {
      LegacyCodeInfo.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(18).bytes(message.codeBytes);
    }
    return writer;
  },
  fromJSON(object: any): Code {
    return {
      codeInfo: isSet(object.codeInfo) ? LegacyCodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Code>): Code {
    const message = createBaseCode();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? LegacyCodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CodeAmino): Code {
    const message = createBaseCode();
    if (object.code_info !== undefined && object.code_info !== null) {
      message.codeInfo = LegacyCodeInfo.fromAmino(object.code_info);
    }
    if (object.code_bytes !== undefined && object.code_bytes !== null) {
      message.codeBytes = bytesFromBase64(object.code_bytes);
    }
    return message;
  },
  toAmino(message: Code): CodeAmino {
    const obj: any = {};
    obj.code_info = message.codeInfo ? LegacyCodeInfo.toAmino(message.codeInfo) : undefined;
    obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeAminoMsg): Code {
    return Code.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },
  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },
  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.Code",
      value: Code.encode(message).finish()
    };
  }
};
function createBaseContract(): Contract {
  return {
    contractInfo: LegacyContractInfo.fromPartial({}),
    contractStore: []
  };
}
export const Contract = {
  typeUrl: "/terra.wasm.v1beta1.Contract",
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractInfo !== undefined) {
      LegacyContractInfo.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractStore) {
      Model.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Contract {
    return {
      contractInfo: isSet(object.contractInfo) ? LegacyContractInfo.fromJSON(object.contractInfo) : undefined,
      contractStore: Array.isArray(object?.contractStore) ? object.contractStore.map((e: any) => Model.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Contract>): Contract {
    const message = createBaseContract();
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? LegacyContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractStore = object.contractStore?.map(e => Model.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractAmino): Contract {
    const message = createBaseContract();
    if (object.contract_info !== undefined && object.contract_info !== null) {
      message.contractInfo = LegacyContractInfo.fromAmino(object.contract_info);
    }
    message.contractStore = object.contract_store?.map(e => Model.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Contract): ContractAmino {
    const obj: any = {};
    obj.contract_info = message.contractInfo ? LegacyContractInfo.toAmino(message.contractInfo) : undefined;
    if (message.contractStore) {
      obj.contract_store = message.contractStore.map(e => e ? Model.toAmino(e) : undefined);
    } else {
      obj.contract_store = message.contractStore;
    }
    return obj;
  },
  fromAminoMsg(object: ContractAminoMsg): Contract {
    return Contract.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },
  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};