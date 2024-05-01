import { BinaryWriter } from "../../../binary";
export declare enum AccessType {
    UNDEFINED = 0,
    NOBODY = 1,
    ONLY_ADDRESS = 2,
    EVERYBODY = 3,
    UNRECOGNIZED = -1
}
export declare const AccessTypeSDKType: typeof AccessType;
export declare const AccessTypeAmino: typeof AccessType;
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
export declare const ContractCodeHistoryOperationTypeAmino: typeof ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
export interface AccessTypeParam {
    value: AccessType;
}
export interface AccessTypeParamProtoMsg {
    typeUrl: "/secret.compute.v1beta1.AccessTypeParam";
    value: Uint8Array;
}
export interface AccessTypeParamAmino {
    value?: AccessType;
}
export interface AccessTypeParamAminoMsg {
    type: "/secret.compute.v1beta1.AccessTypeParam";
    value: AccessTypeParamAmino;
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
export interface CodeInfoProtoMsg {
    typeUrl: "/secret.compute.v1beta1.CodeInfo";
    value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoAmino {
    code_hash?: string;
    creator?: string;
    source?: string;
    builder?: string;
}
export interface CodeInfoAminoMsg {
    type: "/secret.compute.v1beta1.CodeInfo";
    value: CodeInfoAmino;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
    code_hash: Uint8Array;
    creator: Uint8Array;
    source: string;
    builder: string;
}
export interface ContractKey {
    ogContractKey: Uint8Array;
    currentContractKey: Uint8Array;
    currentContractKeyProof: Uint8Array;
}
export interface ContractKeyProtoMsg {
    typeUrl: "/secret.compute.v1beta1.ContractKey";
    value: Uint8Array;
}
export interface ContractKeyAmino {
    og_contract_key?: string;
    current_contract_key?: string;
    current_contract_key_proof?: string;
}
export interface ContractKeyAminoMsg {
    type: "/secret.compute.v1beta1.ContractKey";
    value: ContractKeyAmino;
}
export interface ContractKeySDKType {
    og_contract_key: Uint8Array;
    current_contract_key: Uint8Array;
    current_contract_key_proof: Uint8Array;
}
export interface ContractCustomInfo {
    enclaveKey?: ContractKey;
    label: string;
}
export interface ContractCustomInfoProtoMsg {
    typeUrl: "/secret.compute.v1beta1.ContractCustomInfo";
    value: Uint8Array;
}
export interface ContractCustomInfoAmino {
    enclave_key?: ContractKeyAmino;
    label?: string;
}
export interface ContractCustomInfoAminoMsg {
    type: "/secret.compute.v1beta1.ContractCustomInfo";
    value: ContractCustomInfoAmino;
}
export interface ContractCustomInfoSDKType {
    enclave_key?: ContractKeySDKType;
    label: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    codeId: bigint;
    /** Creator address who initially instantiated the contract */
    creator: Uint8Array;
    /** Label is mandatory metadata to be stored with a contract instance. */
    label: string;
    /** Created Tx position when the contract was instantiated. */
    created?: AbsoluteTxPosition;
    ibcPortId: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Proof that enclave executed the instantiate command */
    adminProof: Uint8Array;
}
export interface ContractInfoProtoMsg {
    typeUrl: "/secret.compute.v1beta1.ContractInfo";
    value: Uint8Array;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoAmino {
    /** CodeID is the reference to the stored Wasm code */
    code_id?: string;
    /** Creator address who initially instantiated the contract */
    creator?: string;
    /** Label is mandatory metadata to be stored with a contract instance. */
    label?: string;
    /** Created Tx position when the contract was instantiated. */
    created?: AbsoluteTxPositionAmino;
    ibc_port_id?: string;
    /** Admin is an optional address that can execute migrations */
    admin?: string;
    /** Proof that enclave executed the instantiate command */
    admin_proof?: string;
}
export interface ContractInfoAminoMsg {
    type: "/secret.compute.v1beta1.ContractInfo";
    value: ContractInfoAmino;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
    code_id: bigint;
    creator: Uint8Array;
    label: string;
    created?: AbsoluteTxPositionSDKType;
    ibc_port_id: string;
    admin: string;
    admin_proof: Uint8Array;
}
/** AbsoluteTxPosition can be used to sort contracts */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: bigint;
    /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */
    txIndex: bigint;
}
export interface AbsoluteTxPositionProtoMsg {
    typeUrl: "/secret.compute.v1beta1.AbsoluteTxPosition";
    value: Uint8Array;
}
/** AbsoluteTxPosition can be used to sort contracts */
export interface AbsoluteTxPositionAmino {
    /** BlockHeight is the block the contract was created at */
    block_height?: string;
    /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */
    tx_index?: string;
}
export interface AbsoluteTxPositionAminoMsg {
    type: "/secret.compute.v1beta1.AbsoluteTxPosition";
    value: AbsoluteTxPositionAmino;
}
/** AbsoluteTxPosition can be used to sort contracts */
export interface AbsoluteTxPositionSDKType {
    block_height: bigint;
    tx_index: bigint;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    Key: Uint8Array;
    /** base64-encode raw value */
    Value: Uint8Array;
}
export interface ModelProtoMsg {
    typeUrl: "/secret.compute.v1beta1.Model";
    value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelAmino {
    /** hex-encode key to read it better (this is often ascii) */
    Key?: string;
    /** base64-encode raw value */
    Value?: string;
}
export interface ModelAminoMsg {
    type: "/secret.compute.v1beta1.Model";
    value: ModelAmino;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
    Key: Uint8Array;
    Value: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPosition;
    msg: Uint8Array;
}
export interface ContractCodeHistoryEntryProtoMsg {
    typeUrl: "/secret.compute.v1beta1.ContractCodeHistoryEntry";
    value: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntryAmino {
    operation?: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    code_id?: string;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPositionAmino;
    msg?: string;
}
export interface ContractCodeHistoryEntryAminoMsg {
    type: "/secret.compute.v1beta1.ContractCodeHistoryEntry";
    value: ContractCodeHistoryEntryAmino;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
    operation: ContractCodeHistoryOperationType;
    code_id: bigint;
    updated?: AbsoluteTxPositionSDKType;
    msg: Uint8Array;
}
export declare const AccessTypeParam: {
    typeUrl: string;
    encode(message: AccessTypeParam, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccessTypeParam;
    fromPartial(object: Partial<AccessTypeParam>): AccessTypeParam;
    fromAmino(object: AccessTypeParamAmino): AccessTypeParam;
    toAmino(message: AccessTypeParam): AccessTypeParamAmino;
    fromAminoMsg(object: AccessTypeParamAminoMsg): AccessTypeParam;
    fromProtoMsg(message: AccessTypeParamProtoMsg): AccessTypeParam;
    toProto(message: AccessTypeParam): Uint8Array;
    toProtoMsg(message: AccessTypeParam): AccessTypeParamProtoMsg;
};
export declare const CodeInfo: {
    typeUrl: string;
    encode(message: CodeInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CodeInfo;
    fromPartial(object: Partial<CodeInfo>): CodeInfo;
    fromAmino(object: CodeInfoAmino): CodeInfo;
    toAmino(message: CodeInfo): CodeInfoAmino;
    fromAminoMsg(object: CodeInfoAminoMsg): CodeInfo;
    fromProtoMsg(message: CodeInfoProtoMsg): CodeInfo;
    toProto(message: CodeInfo): Uint8Array;
    toProtoMsg(message: CodeInfo): CodeInfoProtoMsg;
};
export declare const ContractKey: {
    typeUrl: string;
    encode(message: ContractKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractKey;
    fromPartial(object: Partial<ContractKey>): ContractKey;
    fromAmino(object: ContractKeyAmino): ContractKey;
    toAmino(message: ContractKey): ContractKeyAmino;
    fromAminoMsg(object: ContractKeyAminoMsg): ContractKey;
    fromProtoMsg(message: ContractKeyProtoMsg): ContractKey;
    toProto(message: ContractKey): Uint8Array;
    toProtoMsg(message: ContractKey): ContractKeyProtoMsg;
};
export declare const ContractCustomInfo: {
    typeUrl: string;
    encode(message: ContractCustomInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCustomInfo;
    fromPartial(object: Partial<ContractCustomInfo>): ContractCustomInfo;
    fromAmino(object: ContractCustomInfoAmino): ContractCustomInfo;
    toAmino(message: ContractCustomInfo): ContractCustomInfoAmino;
    fromAminoMsg(object: ContractCustomInfoAminoMsg): ContractCustomInfo;
    fromProtoMsg(message: ContractCustomInfoProtoMsg): ContractCustomInfo;
    toProto(message: ContractCustomInfo): Uint8Array;
    toProtoMsg(message: ContractCustomInfo): ContractCustomInfoProtoMsg;
};
export declare const ContractInfo: {
    typeUrl: string;
    encode(message: ContractInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractInfo;
    fromPartial(object: Partial<ContractInfo>): ContractInfo;
    fromAmino(object: ContractInfoAmino): ContractInfo;
    toAmino(message: ContractInfo): ContractInfoAmino;
    fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo;
    fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo;
    toProto(message: ContractInfo): Uint8Array;
    toProtoMsg(message: ContractInfo): ContractInfoProtoMsg;
};
export declare const AbsoluteTxPosition: {
    typeUrl: string;
    encode(message: AbsoluteTxPosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AbsoluteTxPosition;
    fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition;
    fromAmino(object: AbsoluteTxPositionAmino): AbsoluteTxPosition;
    toAmino(message: AbsoluteTxPosition): AbsoluteTxPositionAmino;
    fromAminoMsg(object: AbsoluteTxPositionAminoMsg): AbsoluteTxPosition;
    fromProtoMsg(message: AbsoluteTxPositionProtoMsg): AbsoluteTxPosition;
    toProto(message: AbsoluteTxPosition): Uint8Array;
    toProtoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionProtoMsg;
};
export declare const Model: {
    typeUrl: string;
    encode(message: Model, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Model;
    fromPartial(object: Partial<Model>): Model;
    fromAmino(object: ModelAmino): Model;
    toAmino(message: Model): ModelAmino;
    fromAminoMsg(object: ModelAminoMsg): Model;
    fromProtoMsg(message: ModelProtoMsg): Model;
    toProto(message: Model): Uint8Array;
    toProtoMsg(message: Model): ModelProtoMsg;
};
export declare const ContractCodeHistoryEntry: {
    typeUrl: string;
    encode(message: ContractCodeHistoryEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCodeHistoryEntry;
    fromPartial(object: Partial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry;
    fromAmino(object: ContractCodeHistoryEntryAmino): ContractCodeHistoryEntry;
    toAmino(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAmino;
    fromAminoMsg(object: ContractCodeHistoryEntryAminoMsg): ContractCodeHistoryEntry;
    fromProtoMsg(message: ContractCodeHistoryEntryProtoMsg): ContractCodeHistoryEntry;
    toProto(message: ContractCodeHistoryEntry): Uint8Array;
    toProtoMsg(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryProtoMsg;
};
