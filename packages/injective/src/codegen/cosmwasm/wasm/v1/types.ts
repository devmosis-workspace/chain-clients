import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
/** AccessType permission types */
export enum AccessType {
  /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
  ACCESS_TYPE_UNSPECIFIED = 0,
  /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
  ACCESS_TYPE_NOBODY = 1,
  /**
   * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
   * Deprecated: use AccessTypeAnyOfAddresses instead
   */
  ACCESS_TYPE_ONLY_ADDRESS = 2,
  /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
  ACCESS_TYPE_EVERYBODY = 3,
  /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
  ACCESS_TYPE_ANY_OF_ADDRESSES = 4,
  UNRECOGNIZED = -1,
}
export const AccessTypeSDKType = AccessType;
export const AccessTypeAmino = AccessType;
export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;
    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;
    case 2:
    case "ACCESS_TYPE_ONLY_ADDRESS":
      return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;
    case 4:
    case "ACCESS_TYPE_ANY_OF_ADDRESSES":
      return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";
    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";
    case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return "ACCESS_TYPE_ONLY_ADDRESS";
    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";
    case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
      return "ACCESS_TYPE_ANY_OF_ADDRESSES";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ContractCodeHistoryOperationType actions that caused a code change */
export enum ContractCodeHistoryOperationType {
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
  UNRECOGNIZED = -1,
}
export const ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
export const ContractCodeHistoryOperationTypeAmino = ContractCodeHistoryOperationType;
export function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractCodeHistoryOperationType.UNRECOGNIZED;
  }
}
export function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string {
  switch (object) {
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    case ContractCodeHistoryOperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AccessTypeParam */
export interface AccessTypeParam {
  value: AccessType;
}
export interface AccessTypeParamProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam";
  value: Uint8Array;
}
/** AccessTypeParam */
export interface AccessTypeParamAmino {
  value: AccessType;
}
export interface AccessTypeParamAminoMsg {
  type: "wasm/AccessTypeParam";
  value: AccessTypeParamAmino;
}
/** AccessTypeParam */
export interface AccessTypeParamSDKType {
  value: AccessType;
}
/** AccessConfig access control type. */
export interface AccessConfig {
  permission: AccessType;
  /**
   * Address
   * Deprecated: replaced by addresses
   */
  address: string;
  addresses: string[];
}
export interface AccessConfigProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfig";
  value: Uint8Array;
}
/** AccessConfig access control type. */
export interface AccessConfigAmino {
  permission: AccessType;
  /**
   * Address
   * Deprecated: replaced by addresses
   */
  address: string;
  addresses: string[];
}
export interface AccessConfigAminoMsg {
  type: "wasm/AccessConfig";
  value: AccessConfigAmino;
}
/** AccessConfig access control type. */
export interface AccessConfigSDKType {
  permission: AccessType;
  address: string;
  addresses: string[];
}
/** Params defines the set of wasm parameters. */
export interface Params {
  codeUploadAccess: AccessConfig;
  instantiateDefaultPermission: AccessType;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of wasm parameters. */
export interface ParamsAmino {
  code_upload_access?: AccessConfigAmino;
  instantiate_default_permission: AccessType;
}
export interface ParamsAminoMsg {
  type: "wasm/Params";
  value: ParamsAmino;
}
/** Params defines the set of wasm parameters. */
export interface ParamsSDKType {
  code_upload_access: AccessConfigSDKType;
  instantiate_default_permission: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
  /** CodeHash is the unique identifier created by wasmvm */
  codeHash: Uint8Array;
  /** Creator address who initially stored the code */
  creator: string;
  /** InstantiateConfig access control to apply on contract creation, optional */
  instantiateConfig: AccessConfig;
}
export interface CodeInfoProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfo";
  value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoAmino {
  /** CodeHash is the unique identifier created by wasmvm */
  code_hash: Uint8Array;
  /** Creator address who initially stored the code */
  creator: string;
  /** InstantiateConfig access control to apply on contract creation, optional */
  instantiate_config?: AccessConfigAmino;
}
export interface CodeInfoAminoMsg {
  type: "wasm/CodeInfo";
  value: CodeInfoAmino;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
  code_hash: Uint8Array;
  creator: string;
  instantiate_config: AccessConfigSDKType;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
  /** CodeID is the reference to the stored Wasm code */
  codeId: bigint;
  /** Creator address who initially instantiated the contract */
  creator: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Created Tx position when the contract was instantiated. */
  created: AbsoluteTxPosition;
  ibcPortId: string;
  /**
   * Extension is an extension point to store custom metadata within the
   * persistence model.
   */
  extension: (Any) | undefined;
}
export interface ContractInfoProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractInfo";
  value: Uint8Array;
}
export type ContractInfoEncoded = Omit<ContractInfo, "extension"> & {
  /**
   * Extension is an extension point to store custom metadata within the
   * persistence model.
   */
  extension?: AnyProtoMsg | undefined;
};
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoAmino {
  /** CodeID is the reference to the stored Wasm code */
  code_id: string;
  /** Creator address who initially instantiated the contract */
  creator: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Created Tx position when the contract was instantiated. */
  created?: AbsoluteTxPositionAmino;
  ibc_port_id: string;
  /**
   * Extension is an extension point to store custom metadata within the
   * persistence model.
   */
  extension?: AnyAmino;
}
export interface ContractInfoAminoMsg {
  type: "wasm/ContractInfo";
  value: ContractInfoAmino;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
  code_id: bigint;
  creator: string;
  admin: string;
  label: string;
  created: AbsoluteTxPositionSDKType;
  ibc_port_id: string;
  extension: AnySDKType | undefined;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
  operation: ContractCodeHistoryOperationType;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Updated Tx position when the operation was executed. */
  updated: AbsoluteTxPosition;
  msg: Uint8Array;
}
export interface ContractCodeHistoryEntryProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry";
  value: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntryAmino {
  operation: ContractCodeHistoryOperationType;
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Updated Tx position when the operation was executed. */
  updated?: AbsoluteTxPositionAmino;
  msg: Uint8Array;
}
export interface ContractCodeHistoryEntryAminoMsg {
  type: "wasm/ContractCodeHistoryEntry";
  value: ContractCodeHistoryEntryAmino;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
  operation: ContractCodeHistoryOperationType;
  code_id: bigint;
  updated: AbsoluteTxPositionSDKType;
  msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
  /** BlockHeight is the block the contract was created at */
  blockHeight: bigint;
  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   */
  txIndex: bigint;
}
export interface AbsoluteTxPositionProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition";
  value: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionAmino {
  /** BlockHeight is the block the contract was created at */
  block_height: string;
  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   */
  tx_index: string;
}
export interface AbsoluteTxPositionAminoMsg {
  type: "wasm/AbsoluteTxPosition";
  value: AbsoluteTxPositionAmino;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionSDKType {
  block_height: bigint;
  tx_index: bigint;
}
/** Model is a struct that holds a KV pair */
export interface Model {
  /** hex-encode key to read it better (this is often ascii) */
  key: Uint8Array;
  /** base64-encode raw value */
  value: Uint8Array;
}
export interface ModelProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Model";
  value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelAmino {
  /** hex-encode key to read it better (this is often ascii) */
  key: Uint8Array;
  /** base64-encode raw value */
  value: Uint8Array;
}
export interface ModelAminoMsg {
  type: "wasm/Model";
  value: ModelAmino;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/** EventCodeStored is emitted when contract code is checked and stored */
export interface EventCodeStored {
  /** CodeID is the reference to the stored Wasm code */
  codeId: bigint;
  /** Creator address who initially stored the code */
  creator: string;
  accessConfig: AccessConfig;
  checksum: Uint8Array;
}
export interface EventCodeStoredProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.EventCodeStored";
  value: Uint8Array;
}
/** EventCodeStored is emitted when contract code is checked and stored */
export interface EventCodeStoredAmino {
  /** CodeID is the reference to the stored Wasm code */
  code_id: string;
  /** Creator address who initially stored the code */
  creator: string;
  access_config?: AccessConfigAmino;
  checksum: Uint8Array;
}
export interface EventCodeStoredAminoMsg {
  type: "wasm/EventCodeStored";
  value: EventCodeStoredAmino;
}
/** EventCodeStored is emitted when contract code is checked and stored */
export interface EventCodeStoredSDKType {
  code_id: bigint;
  creator: string;
  access_config: AccessConfigSDKType;
  checksum: Uint8Array;
}
/** EventContractInstantiated is emitted when contract is instantiated */
export interface EventContractInstantiated {
  contractAddress: string;
  admin: string;
  codeId: bigint;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  msg: Uint8Array;
  label: string;
  creator: string;
}
export interface EventContractInstantiatedProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.EventContractInstantiated";
  value: Uint8Array;
}
/** EventContractInstantiated is emitted when contract is instantiated */
export interface EventContractInstantiatedAmino {
  contract_address: string;
  admin: string;
  code_id: string;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: CoinAmino[];
  msg: Uint8Array;
  label: string;
  creator: string;
}
export interface EventContractInstantiatedAminoMsg {
  type: "wasm/EventContractInstantiated";
  value: EventContractInstantiatedAmino;
}
/** EventContractInstantiated is emitted when contract is instantiated */
export interface EventContractInstantiatedSDKType {
  contract_address: string;
  admin: string;
  code_id: bigint;
  funds: CoinSDKType[];
  msg: Uint8Array;
  label: string;
  creator: string;
}
/** EventContractMigrated is emitted when a contract get migrated to another code */
export interface EventContractMigrated {
  codeId: bigint;
  contractAddress: string;
  msg: Uint8Array;
}
export interface EventContractMigratedProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.EventContractMigrated";
  value: Uint8Array;
}
/** EventContractMigrated is emitted when a contract get migrated to another code */
export interface EventContractMigratedAmino {
  code_id: string;
  contract_address: string;
  msg: Uint8Array;
}
export interface EventContractMigratedAminoMsg {
  type: "wasm/EventContractMigrated";
  value: EventContractMigratedAmino;
}
/** EventContractMigrated is emitted when a contract get migrated to another code */
export interface EventContractMigratedSDKType {
  code_id: bigint;
  contract_address: string;
  msg: Uint8Array;
}
/** EventContractAdminSet is emitted when new admin is set */
export interface EventContractAdminSet {
  contractAddress: string;
  newAdmin: string;
}
export interface EventContractAdminSetProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.EventContractAdminSet";
  value: Uint8Array;
}
/** EventContractAdminSet is emitted when new admin is set */
export interface EventContractAdminSetAmino {
  contract_address: string;
  new_admin: string;
}
export interface EventContractAdminSetAminoMsg {
  type: "wasm/EventContractAdminSet";
  value: EventContractAdminSetAmino;
}
/** EventContractAdminSet is emitted when new admin is set */
export interface EventContractAdminSetSDKType {
  contract_address: string;
  new_admin: string;
}
function createBaseAccessTypeParam(): AccessTypeParam {
  return {
    value: 0
  };
}
export const AccessTypeParam = {
  typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
  encode(message: AccessTypeParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  fromJSON(object: any): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : -1
    };
  },
  fromPartial(object: Partial<AccessTypeParam>): AccessTypeParam {
    const message = createBaseAccessTypeParam();
    message.value = object.value ?? 0;
    return message;
  },
  fromAmino(object: AccessTypeParamAmino): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : -1
    };
  },
  toAmino(message: AccessTypeParam): AccessTypeParamAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AccessTypeParamAminoMsg): AccessTypeParam {
    return AccessTypeParam.fromAmino(object.value);
  },
  toAminoMsg(message: AccessTypeParam): AccessTypeParamAminoMsg {
    return {
      type: "wasm/AccessTypeParam",
      value: AccessTypeParam.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessTypeParamProtoMsg): AccessTypeParam {
    return AccessTypeParam.decode(message.value);
  },
  toProto(message: AccessTypeParam): Uint8Array {
    return AccessTypeParam.encode(message).finish();
  },
  toProtoMsg(message: AccessTypeParam): AccessTypeParamProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
      value: AccessTypeParam.encode(message).finish()
    };
  }
};
function createBaseAccessConfig(): AccessConfig {
  return {
    permission: 0,
    address: "",
    addresses: []
  };
}
export const AccessConfig = {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
  encode(message: AccessConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): AccessConfig {
    return {
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : -1,
      address: isSet(object.address) ? String(object.address) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<AccessConfig>): AccessConfig {
    const message = createBaseAccessConfig();
    message.permission = object.permission ?? 0;
    message.address = object.address ?? "";
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AccessConfigAmino): AccessConfig {
    return {
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : -1,
      address: object.address,
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: AccessConfig): AccessConfigAmino {
    const obj: any = {};
    obj.permission = message.permission;
    obj.address = message.address;
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: AccessConfigAminoMsg): AccessConfig {
    return AccessConfig.fromAmino(object.value);
  },
  toAminoMsg(message: AccessConfig): AccessConfigAminoMsg {
    return {
      type: "wasm/AccessConfig",
      value: AccessConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessConfigProtoMsg): AccessConfig {
    return AccessConfig.decode(message.value);
  },
  toProto(message: AccessConfig): Uint8Array {
    return AccessConfig.encode(message).finish();
  },
  toProtoMsg(message: AccessConfig): AccessConfigProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
      value: AccessConfig.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    codeUploadAccess: AccessConfig.fromPartial({}),
    instantiateDefaultPermission: 0
  };
}
export const Params = {
  typeUrl: "/cosmwasm.wasm.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeUploadAccess !== undefined) {
      AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateDefaultPermission !== 0) {
      writer.uint32(16).int32(message.instantiateDefaultPermission);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      codeUploadAccess: isSet(object.codeUploadAccess) ? AccessConfig.fromJSON(object.codeUploadAccess) : undefined,
      instantiateDefaultPermission: isSet(object.instantiateDefaultPermission) ? accessTypeFromJSON(object.instantiateDefaultPermission) : -1
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.codeUploadAccess = object.codeUploadAccess !== undefined && object.codeUploadAccess !== null ? AccessConfig.fromPartial(object.codeUploadAccess) : undefined;
    message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      codeUploadAccess: object?.code_upload_access ? AccessConfig.fromAmino(object.code_upload_access) : undefined,
      instantiateDefaultPermission: isSet(object.instantiate_default_permission) ? accessTypeFromJSON(object.instantiate_default_permission) : -1
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.code_upload_access = message.codeUploadAccess ? AccessConfig.toAmino(message.codeUploadAccess) : undefined;
    obj.instantiate_default_permission = message.instantiateDefaultPermission;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "wasm/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseCodeInfo(): CodeInfo {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    instantiateConfig: AccessConfig.fromPartial({})
  };
}
export const CodeInfo = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
  encode(message: CodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.instantiateConfig !== undefined) {
      AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CodeInfo {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      instantiateConfig: isSet(object.instantiateConfig) ? AccessConfig.fromJSON(object.instantiateConfig) : undefined
    };
  },
  fromPartial(object: Partial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.instantiateConfig = object.instantiateConfig !== undefined && object.instantiateConfig !== null ? AccessConfig.fromPartial(object.instantiateConfig) : undefined;
    return message;
  },
  fromAmino(object: CodeInfoAmino): CodeInfo {
    return {
      codeHash: object.code_hash,
      creator: object.creator,
      instantiateConfig: object?.instantiate_config ? AccessConfig.fromAmino(object.instantiate_config) : undefined
    };
  },
  toAmino(message: CodeInfo): CodeInfoAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash;
    obj.creator = message.creator;
    obj.instantiate_config = message.instantiateConfig ? AccessConfig.toAmino(message.instantiateConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeInfoAminoMsg): CodeInfo {
    return CodeInfo.fromAmino(object.value);
  },
  toAminoMsg(message: CodeInfo): CodeInfoAminoMsg {
    return {
      type: "wasm/CodeInfo",
      value: CodeInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeInfoProtoMsg): CodeInfo {
    return CodeInfo.decode(message.value);
  },
  toProto(message: CodeInfo): Uint8Array {
    return CodeInfo.encode(message).finish();
  },
  toProtoMsg(message: CodeInfo): CodeInfoProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
      value: CodeInfo.encode(message).finish()
    };
  }
};
function createBaseContractInfo(): ContractInfo {
  return {
    codeId: BigInt(0),
    creator: "",
    admin: "",
    label: "",
    created: AbsoluteTxPosition.fromPartial({}),
    ibcPortId: "",
    extension: Any.fromPartial({})
  };
}
export const ContractInfo = {
  typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
  encode(message: ContractInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
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
    if (message.extension !== undefined) {
      Any.encode((message.extension as Any), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ContractInfo {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined
    };
  },
  fromPartial(object: Partial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
    message.ibcPortId = object.ibcPortId ?? "";
    message.extension = object.extension !== undefined && object.extension !== null ? Any.fromPartial(object.extension) : undefined;
    return message;
  },
  fromAmino(object: ContractInfoAmino): ContractInfo {
    return {
      codeId: BigInt(object.code_id),
      creator: object.creator,
      admin: object.admin,
      label: object.label,
      created: object?.created ? AbsoluteTxPosition.fromAmino(object.created) : undefined,
      ibcPortId: object.ibc_port_id,
      extension: object?.extension ? Cosmwasm_wasmv1ContractInfoExtension_FromAmino(object.extension) : undefined
    };
  },
  toAmino(message: ContractInfo): ContractInfoAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.creator = message.creator;
    obj.admin = message.admin;
    obj.label = message.label;
    obj.created = message.created ? AbsoluteTxPosition.toAmino(message.created) : undefined;
    obj.ibc_port_id = message.ibcPortId;
    obj.extension = message.extension ? Cosmwasm_wasmv1ContractInfoExtension_ToAmino((message.extension as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo {
    return ContractInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ContractInfo): ContractInfoAminoMsg {
    return {
      type: "wasm/ContractInfo",
      value: ContractInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo {
    return ContractInfo.decode(message.value);
  },
  toProto(message: ContractInfo): Uint8Array {
    return ContractInfo.encode(message).finish();
  },
  toProtoMsg(message: ContractInfo): ContractInfoProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
      value: ContractInfo.encode(message).finish()
    };
  }
};
function createBaseContractCodeHistoryEntry(): ContractCodeHistoryEntry {
  return {
    operation: 0,
    codeId: BigInt(0),
    updated: AbsoluteTxPosition.fromPartial({}),
    msg: new Uint8Array()
  };
}
export const ContractCodeHistoryEntry = {
  typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
  encode(message: ContractCodeHistoryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.updated !== undefined) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  fromJSON(object: any): ContractCodeHistoryEntry {
    return {
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      updated: isSet(object.updated) ? AbsoluteTxPosition.fromJSON(object.updated) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry {
    const message = createBaseContractCodeHistoryEntry();
    message.operation = object.operation ?? 0;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.updated = object.updated !== undefined && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : undefined;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ContractCodeHistoryEntryAmino): ContractCodeHistoryEntry {
    return {
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
      codeId: BigInt(object.code_id),
      updated: object?.updated ? AbsoluteTxPosition.fromAmino(object.updated) : undefined,
      msg: toUtf8(JSON.stringify(object.msg))
    };
  },
  toAmino(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAmino {
    const obj: any = {};
    obj.operation = message.operation;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.updated = message.updated ? AbsoluteTxPosition.toAmino(message.updated) : undefined;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractCodeHistoryEntryAminoMsg): ContractCodeHistoryEntry {
    return ContractCodeHistoryEntry.fromAmino(object.value);
  },
  toAminoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAminoMsg {
    return {
      type: "wasm/ContractCodeHistoryEntry",
      value: ContractCodeHistoryEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractCodeHistoryEntryProtoMsg): ContractCodeHistoryEntry {
    return ContractCodeHistoryEntry.decode(message.value);
  },
  toProto(message: ContractCodeHistoryEntry): Uint8Array {
    return ContractCodeHistoryEntry.encode(message).finish();
  },
  toProtoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
      value: ContractCodeHistoryEntry.encode(message).finish()
    };
  }
};
function createBaseAbsoluteTxPosition(): AbsoluteTxPosition {
  return {
    blockHeight: BigInt(0),
    txIndex: BigInt(0)
  };
}
export const AbsoluteTxPosition = {
  typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
  encode(message: AbsoluteTxPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.txIndex);
    }
    return writer;
  },
  fromJSON(object: any): AbsoluteTxPosition {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      txIndex: isSet(object.txIndex) ? BigInt(object.txIndex.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AbsoluteTxPositionAmino): AbsoluteTxPosition {
    return {
      blockHeight: BigInt(object.block_height),
      txIndex: BigInt(object.tx_index)
    };
  },
  toAmino(message: AbsoluteTxPosition): AbsoluteTxPositionAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.tx_index = message.txIndex ? message.txIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AbsoluteTxPositionAminoMsg): AbsoluteTxPosition {
    return AbsoluteTxPosition.fromAmino(object.value);
  },
  toAminoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionAminoMsg {
    return {
      type: "wasm/AbsoluteTxPosition",
      value: AbsoluteTxPosition.toAmino(message)
    };
  },
  fromProtoMsg(message: AbsoluteTxPositionProtoMsg): AbsoluteTxPosition {
    return AbsoluteTxPosition.decode(message.value);
  },
  toProto(message: AbsoluteTxPosition): Uint8Array {
    return AbsoluteTxPosition.encode(message).finish();
  },
  toProtoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
      value: AbsoluteTxPosition.encode(message).finish()
    };
  }
};
function createBaseModel(): Model {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const Model = {
  typeUrl: "/cosmwasm.wasm.v1.Model",
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
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: Model): ModelAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: ModelAminoMsg): Model {
    return Model.fromAmino(object.value);
  },
  toAminoMsg(message: Model): ModelAminoMsg {
    return {
      type: "wasm/Model",
      value: Model.toAmino(message)
    };
  },
  fromProtoMsg(message: ModelProtoMsg): Model {
    return Model.decode(message.value);
  },
  toProto(message: Model): Uint8Array {
    return Model.encode(message).finish();
  },
  toProtoMsg(message: Model): ModelProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Model",
      value: Model.encode(message).finish()
    };
  }
};
function createBaseEventCodeStored(): EventCodeStored {
  return {
    codeId: BigInt(0),
    creator: "",
    accessConfig: AccessConfig.fromPartial({}),
    checksum: new Uint8Array()
  };
}
export const EventCodeStored = {
  typeUrl: "/cosmwasm.wasm.v1.EventCodeStored",
  encode(message: EventCodeStored, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.accessConfig !== undefined) {
      AccessConfig.encode(message.accessConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.checksum.length !== 0) {
      writer.uint32(34).bytes(message.checksum);
    }
    return writer;
  },
  fromJSON(object: any): EventCodeStored {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      accessConfig: isSet(object.accessConfig) ? AccessConfig.fromJSON(object.accessConfig) : undefined,
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventCodeStored>): EventCodeStored {
    const message = createBaseEventCodeStored();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.accessConfig = object.accessConfig !== undefined && object.accessConfig !== null ? AccessConfig.fromPartial(object.accessConfig) : undefined;
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventCodeStoredAmino): EventCodeStored {
    return {
      codeId: BigInt(object.code_id),
      creator: object.creator,
      accessConfig: object?.access_config ? AccessConfig.fromAmino(object.access_config) : undefined,
      checksum: object.checksum
    };
  },
  toAmino(message: EventCodeStored): EventCodeStoredAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.creator = message.creator;
    obj.access_config = message.accessConfig ? AccessConfig.toAmino(message.accessConfig) : undefined;
    obj.checksum = message.checksum;
    return obj;
  },
  fromAminoMsg(object: EventCodeStoredAminoMsg): EventCodeStored {
    return EventCodeStored.fromAmino(object.value);
  },
  toAminoMsg(message: EventCodeStored): EventCodeStoredAminoMsg {
    return {
      type: "wasm/EventCodeStored",
      value: EventCodeStored.toAmino(message)
    };
  },
  fromProtoMsg(message: EventCodeStoredProtoMsg): EventCodeStored {
    return EventCodeStored.decode(message.value);
  },
  toProto(message: EventCodeStored): Uint8Array {
    return EventCodeStored.encode(message).finish();
  },
  toProtoMsg(message: EventCodeStored): EventCodeStoredProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.EventCodeStored",
      value: EventCodeStored.encode(message).finish()
    };
  }
};
function createBaseEventContractInstantiated(): EventContractInstantiated {
  return {
    contractAddress: "",
    admin: "",
    codeId: BigInt(0),
    funds: [],
    msg: new Uint8Array(),
    label: "",
    creator: ""
  };
}
export const EventContractInstantiated = {
  typeUrl: "/cosmwasm.wasm.v1.EventContractInstantiated",
  encode(message: EventContractInstantiated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): EventContractInstantiated {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      label: isSet(object.label) ? String(object.label) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<EventContractInstantiated>): EventContractInstantiated {
    const message = createBaseEventContractInstantiated();
    message.contractAddress = object.contractAddress ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.msg = object.msg ?? new Uint8Array();
    message.label = object.label ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: EventContractInstantiatedAmino): EventContractInstantiated {
    return {
      contractAddress: object.contract_address,
      admin: object.admin,
      codeId: BigInt(object.code_id),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : [],
      msg: toUtf8(JSON.stringify(object.msg)),
      label: object.label,
      creator: object.creator
    };
  },
  toAmino(message: EventContractInstantiated): EventContractInstantiatedAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.admin = message.admin;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    obj.label = message.label;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: EventContractInstantiatedAminoMsg): EventContractInstantiated {
    return EventContractInstantiated.fromAmino(object.value);
  },
  toAminoMsg(message: EventContractInstantiated): EventContractInstantiatedAminoMsg {
    return {
      type: "wasm/EventContractInstantiated",
      value: EventContractInstantiated.toAmino(message)
    };
  },
  fromProtoMsg(message: EventContractInstantiatedProtoMsg): EventContractInstantiated {
    return EventContractInstantiated.decode(message.value);
  },
  toProto(message: EventContractInstantiated): Uint8Array {
    return EventContractInstantiated.encode(message).finish();
  },
  toProtoMsg(message: EventContractInstantiated): EventContractInstantiatedProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.EventContractInstantiated",
      value: EventContractInstantiated.encode(message).finish()
    };
  }
};
function createBaseEventContractMigrated(): EventContractMigrated {
  return {
    codeId: BigInt(0),
    contractAddress: "",
    msg: new Uint8Array()
  };
}
export const EventContractMigrated = {
  typeUrl: "/cosmwasm.wasm.v1.EventContractMigrated",
  encode(message: EventContractMigrated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    return writer;
  },
  fromJSON(object: any): EventContractMigrated {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventContractMigrated>): EventContractMigrated {
    const message = createBaseEventContractMigrated();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventContractMigratedAmino): EventContractMigrated {
    return {
      codeId: BigInt(object.code_id),
      contractAddress: object.contract_address,
      msg: toUtf8(JSON.stringify(object.msg))
    };
  },
  toAmino(message: EventContractMigrated): EventContractMigratedAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.contract_address = message.contractAddress;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventContractMigratedAminoMsg): EventContractMigrated {
    return EventContractMigrated.fromAmino(object.value);
  },
  toAminoMsg(message: EventContractMigrated): EventContractMigratedAminoMsg {
    return {
      type: "wasm/EventContractMigrated",
      value: EventContractMigrated.toAmino(message)
    };
  },
  fromProtoMsg(message: EventContractMigratedProtoMsg): EventContractMigrated {
    return EventContractMigrated.decode(message.value);
  },
  toProto(message: EventContractMigrated): Uint8Array {
    return EventContractMigrated.encode(message).finish();
  },
  toProtoMsg(message: EventContractMigrated): EventContractMigratedProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.EventContractMigrated",
      value: EventContractMigrated.encode(message).finish()
    };
  }
};
function createBaseEventContractAdminSet(): EventContractAdminSet {
  return {
    contractAddress: "",
    newAdmin: ""
  };
}
export const EventContractAdminSet = {
  typeUrl: "/cosmwasm.wasm.v1.EventContractAdminSet",
  encode(message: EventContractAdminSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    return writer;
  },
  fromJSON(object: any): EventContractAdminSet {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  fromPartial(object: Partial<EventContractAdminSet>): EventContractAdminSet {
    const message = createBaseEventContractAdminSet();
    message.contractAddress = object.contractAddress ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: EventContractAdminSetAmino): EventContractAdminSet {
    return {
      contractAddress: object.contract_address,
      newAdmin: object.new_admin
    };
  },
  toAmino(message: EventContractAdminSet): EventContractAdminSetAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: EventContractAdminSetAminoMsg): EventContractAdminSet {
    return EventContractAdminSet.fromAmino(object.value);
  },
  toAminoMsg(message: EventContractAdminSet): EventContractAdminSetAminoMsg {
    return {
      type: "wasm/EventContractAdminSet",
      value: EventContractAdminSet.toAmino(message)
    };
  },
  fromProtoMsg(message: EventContractAdminSetProtoMsg): EventContractAdminSet {
    return EventContractAdminSet.decode(message.value);
  },
  toProto(message: EventContractAdminSet): Uint8Array {
    return EventContractAdminSet.encode(message).finish();
  },
  toProtoMsg(message: EventContractAdminSet): EventContractAdminSetProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.EventContractAdminSet",
      value: EventContractAdminSet.encode(message).finish()
    };
  }
};
export const Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmwasm_wasmv1ContractInfoExtension_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Cosmwasm_wasmv1ContractInfoExtension_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};