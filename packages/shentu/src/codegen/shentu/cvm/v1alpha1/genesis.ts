import { ContractMeta as ContractMeta1 } from "../../../burrow/acm";
import { ContractMetaAmino as ContractMeta1Amino } from "../../../burrow/acm";
import { ContractMetaSDKType as ContractMeta1SDKType } from "../../../burrow/acm";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  gasRate: bigint;
  contracts: Contract[];
  metadatas: Metadata[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateAmino {
  gas_rate?: string;
  contracts?: ContractAmino[];
  metadatas?: MetadataAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/shentu.cvm.v1alpha1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
  gas_rate: bigint;
  contracts: ContractSDKType[];
  metadatas: MetadataSDKType[];
}
export interface Contract {
  Address: Uint8Array;
  code: CVMCode;
  storage: Storage[];
  abi: Uint8Array;
  meta: ContractMeta[];
}
export interface ContractProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.Contract";
  value: Uint8Array;
}
export interface ContractAmino {
  Address?: string;
  code?: CVMCodeAmino;
  storage?: StorageAmino[];
  abi?: string;
  meta?: ContractMetaAmino[];
}
export interface ContractAminoMsg {
  type: "/shentu.cvm.v1alpha1.Contract";
  value: ContractAmino;
}
export interface ContractSDKType {
  Address: Uint8Array;
  code: CVMCodeSDKType;
  storage: StorageSDKType[];
  abi: Uint8Array;
  meta: ContractMetaSDKType[];
}
export interface CVMCode {
  codeType: bigint;
  code: Uint8Array;
}
export interface CVMCodeProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.CVMCode";
  value: Uint8Array;
}
export interface CVMCodeAmino {
  code_type?: string;
  code?: string;
}
export interface CVMCodeAminoMsg {
  type: "/shentu.cvm.v1alpha1.CVMCode";
  value: CVMCodeAmino;
}
export interface CVMCodeSDKType {
  code_type: bigint;
  code: Uint8Array;
}
export interface Storage {
  key: Uint8Array;
  value: Uint8Array;
}
export interface StorageProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.Storage";
  value: Uint8Array;
}
export interface StorageAmino {
  key?: string;
  value?: string;
}
export interface StorageAminoMsg {
  type: "/shentu.cvm.v1alpha1.Storage";
  value: StorageAmino;
}
export interface StorageSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
export interface ContractMeta {
  codeHash: Uint8Array;
  metadataHash: Uint8Array;
}
export interface ContractMetaProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.ContractMeta";
  value: Uint8Array;
}
export interface ContractMetaAmino {
  code_hash?: string;
  metadata_hash?: string;
}
export interface ContractMetaAminoMsg {
  type: "/shentu.cvm.v1alpha1.ContractMeta";
  value: ContractMetaAmino;
}
export interface ContractMetaSDKType {
  code_hash: Uint8Array;
  metadata_hash: Uint8Array;
}
export interface ContractMetas {
  metas: ContractMeta1[];
}
export interface ContractMetasProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.ContractMetas";
  value: Uint8Array;
}
export interface ContractMetasAmino {
  metas?: ContractMeta1Amino[];
}
export interface ContractMetasAminoMsg {
  type: "/shentu.cvm.v1alpha1.ContractMetas";
  value: ContractMetasAmino;
}
export interface ContractMetasSDKType {
  metas: ContractMeta1SDKType[];
}
export interface Metadata {
  hash: Uint8Array;
  metadata: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.Metadata";
  value: Uint8Array;
}
export interface MetadataAmino {
  hash?: string;
  metadata?: string;
}
export interface MetadataAminoMsg {
  type: "/shentu.cvm.v1alpha1.Metadata";
  value: MetadataAmino;
}
export interface MetadataSDKType {
  hash: Uint8Array;
  metadata: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    gasRate: BigInt(0),
    contracts: [],
    metadatas: []
  };
}
export const GenesisState = {
  typeUrl: "/shentu.cvm.v1alpha1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasRate !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasRate);
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.metadatas) {
      Metadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      gasRate: isSet(object.gasRate) ? BigInt(object.gasRate.toString()) : BigInt(0),
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      metadatas: Array.isArray(object?.metadatas) ? object.metadatas.map((e: any) => Metadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.gasRate = object.gasRate !== undefined && object.gasRate !== null ? BigInt(object.gasRate.toString()) : BigInt(0);
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.metadatas = object.metadatas?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.gas_rate !== undefined && object.gas_rate !== null) {
      message.gasRate = BigInt(object.gas_rate);
    }
    message.contracts = object.contracts?.map(e => Contract.fromAmino(e)) || [];
    message.metadatas = object.metadatas?.map(e => Metadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.gas_rate = message.gasRate !== BigInt(0) ? message.gasRate.toString() : undefined;
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadatas = message.metadatas;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseContract(): Contract {
  return {
    Address: new Uint8Array(),
    code: CVMCode.fromPartial({}),
    storage: [],
    abi: new Uint8Array(),
    meta: []
  };
}
export const Contract = {
  typeUrl: "/shentu.cvm.v1alpha1.Contract",
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.code !== undefined) {
      CVMCode.encode(message.code, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.abi.length !== 0) {
      writer.uint32(34).bytes(message.abi);
    }
    for (const v of message.meta) {
      ContractMeta.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Contract {
    return {
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      code: isSet(object.code) ? CVMCode.fromJSON(object.code) : undefined,
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromJSON(e)) : [],
      abi: isSet(object.abi) ? bytesFromBase64(object.abi) : new Uint8Array(),
      meta: Array.isArray(object?.meta) ? object.meta.map((e: any) => ContractMeta.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Contract>): Contract {
    const message = createBaseContract();
    message.Address = object.Address ?? new Uint8Array();
    message.code = object.code !== undefined && object.code !== null ? CVMCode.fromPartial(object.code) : undefined;
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.abi = object.abi ?? new Uint8Array();
    message.meta = object.meta?.map(e => ContractMeta.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractAmino): Contract {
    const message = createBaseContract();
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = bytesFromBase64(object.Address);
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = CVMCode.fromAmino(object.code);
    }
    message.storage = object.storage?.map(e => Storage.fromAmino(e)) || [];
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = bytesFromBase64(object.abi);
    }
    message.meta = object.meta?.map(e => ContractMeta.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Contract): ContractAmino {
    const obj: any = {};
    obj.Address = message.Address ? base64FromBytes(message.Address) : undefined;
    obj.code = message.code ? CVMCode.toAmino(message.code) : undefined;
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    obj.abi = message.abi ? base64FromBytes(message.abi) : undefined;
    if (message.meta) {
      obj.meta = message.meta.map(e => e ? ContractMeta.toAmino(e) : undefined);
    } else {
      obj.meta = message.meta;
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
      typeUrl: "/shentu.cvm.v1alpha1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};
function createBaseCVMCode(): CVMCode {
  return {
    codeType: BigInt(0),
    code: new Uint8Array()
  };
}
export const CVMCode = {
  typeUrl: "/shentu.cvm.v1alpha1.CVMCode",
  encode(message: CVMCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeType !== BigInt(0)) {
      writer.uint32(8).int64(message.codeType);
    }
    if (message.code.length !== 0) {
      writer.uint32(18).bytes(message.code);
    }
    return writer;
  },
  fromJSON(object: any): CVMCode {
    return {
      codeType: isSet(object.codeType) ? BigInt(object.codeType.toString()) : BigInt(0),
      code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CVMCode>): CVMCode {
    const message = createBaseCVMCode();
    message.codeType = object.codeType !== undefined && object.codeType !== null ? BigInt(object.codeType.toString()) : BigInt(0);
    message.code = object.code ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CVMCodeAmino): CVMCode {
    const message = createBaseCVMCode();
    if (object.code_type !== undefined && object.code_type !== null) {
      message.codeType = BigInt(object.code_type);
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    return message;
  },
  toAmino(message: CVMCode): CVMCodeAmino {
    const obj: any = {};
    obj.code_type = message.codeType !== BigInt(0) ? message.codeType.toString() : undefined;
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    return obj;
  },
  fromAminoMsg(object: CVMCodeAminoMsg): CVMCode {
    return CVMCode.fromAmino(object.value);
  },
  fromProtoMsg(message: CVMCodeProtoMsg): CVMCode {
    return CVMCode.decode(message.value);
  },
  toProto(message: CVMCode): Uint8Array {
    return CVMCode.encode(message).finish();
  },
  toProtoMsg(message: CVMCode): CVMCodeProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.CVMCode",
      value: CVMCode.encode(message).finish()
    };
  }
};
function createBaseStorage(): Storage {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const Storage = {
  typeUrl: "/shentu.cvm.v1alpha1.Storage",
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Storage {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Storage>): Storage {
    const message = createBaseStorage();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
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
      typeUrl: "/shentu.cvm.v1alpha1.Storage",
      value: Storage.encode(message).finish()
    };
  }
};
function createBaseContractMeta(): ContractMeta {
  return {
    codeHash: new Uint8Array(),
    metadataHash: new Uint8Array()
  };
}
export const ContractMeta = {
  typeUrl: "/shentu.cvm.v1alpha1.ContractMeta",
  encode(message: ContractMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.metadataHash.length !== 0) {
      writer.uint32(18).bytes(message.metadataHash);
    }
    return writer;
  },
  fromJSON(object: any): ContractMeta {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      metadataHash: isSet(object.metadataHash) ? bytesFromBase64(object.metadataHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ContractMeta>): ContractMeta {
    const message = createBaseContractMeta();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.metadataHash = object.metadataHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ContractMetaAmino): ContractMeta {
    const message = createBaseContractMeta();
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = bytesFromBase64(object.code_hash);
    }
    if (object.metadata_hash !== undefined && object.metadata_hash !== null) {
      message.metadataHash = bytesFromBase64(object.metadata_hash);
    }
    return message;
  },
  toAmino(message: ContractMeta): ContractMetaAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
    obj.metadata_hash = message.metadataHash ? base64FromBytes(message.metadataHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractMetaAminoMsg): ContractMeta {
    return ContractMeta.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractMetaProtoMsg): ContractMeta {
    return ContractMeta.decode(message.value);
  },
  toProto(message: ContractMeta): Uint8Array {
    return ContractMeta.encode(message).finish();
  },
  toProtoMsg(message: ContractMeta): ContractMetaProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.ContractMeta",
      value: ContractMeta.encode(message).finish()
    };
  }
};
function createBaseContractMetas(): ContractMetas {
  return {
    metas: []
  };
}
export const ContractMetas = {
  typeUrl: "/shentu.cvm.v1alpha1.ContractMetas",
  encode(message: ContractMetas, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metas) {
      ContractMeta1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ContractMetas {
    return {
      metas: Array.isArray(object?.metas) ? object.metas.map((e: any) => ContractMeta1.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ContractMetas>): ContractMetas {
    const message = createBaseContractMetas();
    message.metas = object.metas?.map(e => ContractMeta1.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractMetasAmino): ContractMetas {
    const message = createBaseContractMetas();
    message.metas = object.metas?.map(e => ContractMeta1.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ContractMetas): ContractMetasAmino {
    const obj: any = {};
    if (message.metas) {
      obj.metas = message.metas.map(e => e ? ContractMeta1.toAmino(e) : undefined);
    } else {
      obj.metas = message.metas;
    }
    return obj;
  },
  fromAminoMsg(object: ContractMetasAminoMsg): ContractMetas {
    return ContractMetas.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractMetasProtoMsg): ContractMetas {
    return ContractMetas.decode(message.value);
  },
  toProto(message: ContractMetas): Uint8Array {
    return ContractMetas.encode(message).finish();
  },
  toProtoMsg(message: ContractMetas): ContractMetasProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.ContractMetas",
      value: ContractMetas.encode(message).finish()
    };
  }
};
function createBaseMetadata(): Metadata {
  return {
    hash: new Uint8Array(),
    metadata: ""
  };
}
export const Metadata = {
  typeUrl: "/shentu.cvm.v1alpha1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.metadata !== "") {
      writer.uint32(18).string(message.metadata);
    }
    return writer;
  },
  fromJSON(object: any): Metadata {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};