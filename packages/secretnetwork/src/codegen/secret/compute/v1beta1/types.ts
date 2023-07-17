import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum AccessType {
  UNDEFINED = 0,
  NOBODY = 1,
  ONLY_ADDRESS = 2,
  EVERYBODY = 3,
  UNRECOGNIZED = -1,
}
export const AccessTypeSDKType = AccessType;
export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "UNDEFINED":
      return AccessType.UNDEFINED;
    case 1:
    case "NOBODY":
      return AccessType.NOBODY;
    case 2:
    case "ONLY_ADDRESS":
      return AccessType.ONLY_ADDRESS;
    case 3:
    case "EVERYBODY":
      return AccessType.EVERYBODY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.UNDEFINED:
      return "UNDEFINED";
    case AccessType.NOBODY:
      return "NOBODY";
    case AccessType.ONLY_ADDRESS:
      return "ONLY_ADDRESS";
    case AccessType.EVERYBODY:
      return "EVERYBODY";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface AccessTypeParam {
  value: AccessType;
}
export interface AccessTypeParamSDKType {
  value: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
  codeHash: Uint8Array;
  creator: Uint8Array;
  source: string;
  builder: string;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
  code_hash: Uint8Array;
  creator: Uint8Array;
  source: string;
  builder: string;
}
export interface ContractCustomInfo {
  enclaveKey: Uint8Array;
  label: string;
}
export interface ContractCustomInfoSDKType {
  enclave_key: Uint8Array;
  label: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
  codeId: Long;
  creator: Uint8Array;
  label: string;
  /**
   * never show this in query results, just use for sorting
   * (Note: when using json tag "-" amino refused to serialize it...)
   */
  created?: AbsoluteTxPosition;
  ibcPortId: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
  code_id: Long;
  creator: Uint8Array;
  label: string;
  created?: AbsoluteTxPositionSDKType;
  ibc_port_id: string;
}
/** AbsoluteTxPosition can be used to sort contracts */
export interface AbsoluteTxPosition {
  /** BlockHeight is the block the contract was created at */
  blockHeight: Long;
  /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */
  txIndex: Long;
}
/** AbsoluteTxPosition can be used to sort contracts */
export interface AbsoluteTxPositionSDKType {
  block_height: Long;
  tx_index: Long;
}
/** Model is a struct that holds a KV pair */
export interface Model {
  /** hex-encode key to read it better (this is often ascii) */
  Key: Uint8Array;
  /** base64-encode raw value */
  Value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
  Key: Uint8Array;
  Value: Uint8Array;
}
function createBaseAccessTypeParam(): AccessTypeParam {
  return {
    value: 0
  };
}
export const AccessTypeParam = {
  encode(message: AccessTypeParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  fromJSON(object: any): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0
    };
  },
  fromPartial(object: Partial<AccessTypeParam>): AccessTypeParam {
    const message = createBaseAccessTypeParam();
    message.value = object.value ?? 0;
    return message;
  }
};
function createBaseCodeInfo(): CodeInfo {
  return {
    codeHash: new Uint8Array(),
    creator: new Uint8Array(),
    source: "",
    builder: ""
  };
}
export const CodeInfo = {
  encode(message: CodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.creator.length !== 0) {
      writer.uint32(18).bytes(message.creator);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(34).string(message.builder);
    }
    return writer;
  },
  fromJSON(object: any): CodeInfo {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : ""
    };
  },
  fromPartial(object: Partial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  }
};
function createBaseContractCustomInfo(): ContractCustomInfo {
  return {
    enclaveKey: new Uint8Array(),
    label: ""
  };
}
export const ContractCustomInfo = {
  encode(message: ContractCustomInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enclaveKey.length !== 0) {
      writer.uint32(10).bytes(message.enclaveKey);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    return writer;
  },
  fromJSON(object: any): ContractCustomInfo {
    return {
      enclaveKey: isSet(object.enclaveKey) ? bytesFromBase64(object.enclaveKey) : new Uint8Array(),
      label: isSet(object.label) ? String(object.label) : ""
    };
  },
  fromPartial(object: Partial<ContractCustomInfo>): ContractCustomInfo {
    const message = createBaseContractCustomInfo();
    message.enclaveKey = object.enclaveKey ?? new Uint8Array();
    message.label = object.label ?? "";
    return message;
  }
};
function createBaseContractInfo(): ContractInfo {
  return {
    codeId: Long.UZERO,
    creator: new Uint8Array(),
    label: "",
    created: undefined,
    ibcPortId: ""
  };
}
export const ContractInfo = {
  encode(message: ContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator.length !== 0) {
      writer.uint32(18).bytes(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.created !== undefined) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(50).string(message.ibcPortId);
    }
    return writer;
  },
  fromJSON(object: any): ContractInfo {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : ""
    };
  },
  fromPartial(object: Partial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? new Uint8Array();
    message.label = object.label ?? "";
    message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
    message.ibcPortId = object.ibcPortId ?? "";
    return message;
  }
};
function createBaseAbsoluteTxPosition(): AbsoluteTxPosition {
  return {
    blockHeight: Long.ZERO,
    txIndex: Long.UZERO
  };
}
export const AbsoluteTxPosition = {
  encode(message: AbsoluteTxPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (!message.txIndex.isZero()) {
      writer.uint32(16).uint64(message.txIndex);
    }
    return writer;
  },
  fromJSON(object: any): AbsoluteTxPosition {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      txIndex: isSet(object.txIndex) ? Long.fromValue(object.txIndex) : Long.UZERO
    };
  },
  fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? Long.fromValue(object.txIndex) : Long.UZERO;
    return message;
  }
};
function createBaseModel(): Model {
  return {
    Key: new Uint8Array(),
    Value: new Uint8Array()
  };
}
export const Model = {
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Key.length !== 0) {
      writer.uint32(10).bytes(message.Key);
    }
    if (message.Value.length !== 0) {
      writer.uint32(18).bytes(message.Value);
    }
    return writer;
  },
  fromJSON(object: any): Model {
    return {
      Key: isSet(object.Key) ? bytesFromBase64(object.Key) : new Uint8Array(),
      Value: isSet(object.Value) ? bytesFromBase64(object.Value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Model>): Model {
    const message = createBaseModel();
    message.Key = object.Key ?? new Uint8Array();
    message.Value = object.Value ?? new Uint8Array();
    return message;
  }
};