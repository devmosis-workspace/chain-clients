import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** AccessType permission types */
export declare enum AccessType {
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
    UNRECOGNIZED = -1
}
export declare const AccessTypeSDKType: typeof AccessType;
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
export declare const ContractCodeHistoryOperationTypeSDKType: typeof ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
/** AccessTypeParam */
export interface AccessTypeParam {
    value: AccessType;
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
/** AccessConfig access control type. */
export interface AccessConfigSDKType {
    permission: AccessType;
    address: string;
    addresses: string[];
}
/** Params defines the set of wasm parameters. */
export interface Params {
    codeUploadAccess?: AccessConfig;
    instantiateDefaultPermission: AccessType;
}
/** Params defines the set of wasm parameters. */
export interface ParamsSDKType {
    code_upload_access?: AccessConfigSDKType;
    instantiate_default_permission: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    /** CodeHash is the unique identifier created by wasmvm */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiateConfig?: AccessConfig;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
    code_hash: Uint8Array;
    creator: string;
    instantiate_config?: AccessConfigSDKType;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    codeId: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Created Tx position when the contract was instantiated. */
    created?: AbsoluteTxPosition;
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension?: Any;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
    code_id: Long;
    creator: string;
    admin: string;
    label: string;
    created?: AbsoluteTxPositionSDKType;
    ibc_port_id: string;
    extension?: AnySDKType;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPosition;
    msg: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
    operation: ContractCodeHistoryOperationType;
    code_id: Long;
    updated?: AbsoluteTxPositionSDKType;
    msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: Long;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    txIndex: Long;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionSDKType {
    block_height: Long;
    tx_index: Long;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    key: Uint8Array;
    /** base64-encode raw value */
    value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
/** EventCodeStored is emitted when contract code is checked and stored */
export interface EventCodeStored {
    /** CodeID is the reference to the stored Wasm code */
    codeId: Long;
    /** Creator address who initially stored the code */
    creator: string;
    accessConfig?: AccessConfig;
    checksum: Uint8Array;
}
/** EventCodeStored is emitted when contract code is checked and stored */
export interface EventCodeStoredSDKType {
    code_id: Long;
    creator: string;
    access_config?: AccessConfigSDKType;
    checksum: Uint8Array;
}
/** EventContractInstantiated is emitted when contract is instantiated */
export interface EventContractInstantiated {
    contractAddress: string;
    admin: string;
    codeId: Long;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    msg: Uint8Array;
    label: string;
    creator: string;
}
/** EventContractInstantiated is emitted when contract is instantiated */
export interface EventContractInstantiatedSDKType {
    contract_address: string;
    admin: string;
    code_id: Long;
    funds: CoinSDKType[];
    msg: Uint8Array;
    label: string;
    creator: string;
}
/** EventContractMigrated is emitted when a contract get migrated to another code */
export interface EventContractMigrated {
    codeId: Long;
    contractAddress: string;
    msg: Uint8Array;
}
/** EventContractMigrated is emitted when a contract get migrated to another code */
export interface EventContractMigratedSDKType {
    code_id: Long;
    contract_address: string;
    msg: Uint8Array;
}
/** EventContractAdminSet is emitted when new admin is set */
export interface EventContractAdminSet {
    contractAddress: string;
    newAdmin: string;
}
/** EventContractAdminSet is emitted when new admin is set */
export interface EventContractAdminSetSDKType {
    contract_address: string;
    new_admin: string;
}
export declare const AccessTypeParam: {
    encode(message: AccessTypeParam, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccessTypeParam;
    fromPartial(object: Partial<AccessTypeParam>): AccessTypeParam;
};
export declare const AccessConfig: {
    encode(message: AccessConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccessConfig;
    fromPartial(object: Partial<AccessConfig>): AccessConfig;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CodeInfo;
    fromPartial(object: Partial<CodeInfo>): CodeInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractInfo;
    fromPartial(object: Partial<ContractInfo>): ContractInfo;
};
export declare const ContractCodeHistoryEntry: {
    encode(message: ContractCodeHistoryEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractCodeHistoryEntry;
    fromPartial(object: Partial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AbsoluteTxPosition;
    fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition;
};
export declare const Model: {
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Model;
    fromPartial(object: Partial<Model>): Model;
};
export declare const EventCodeStored: {
    encode(message: EventCodeStored, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCodeStored;
    fromPartial(object: Partial<EventCodeStored>): EventCodeStored;
};
export declare const EventContractInstantiated: {
    encode(message: EventContractInstantiated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventContractInstantiated;
    fromPartial(object: Partial<EventContractInstantiated>): EventContractInstantiated;
};
export declare const EventContractMigrated: {
    encode(message: EventContractMigrated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventContractMigrated;
    fromPartial(object: Partial<EventContractMigrated>): EventContractMigrated;
};
export declare const EventContractAdminSet: {
    encode(message: EventContractAdminSet, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventContractAdminSet;
    fromPartial(object: Partial<EventContractAdminSet>): EventContractAdminSet;
};
