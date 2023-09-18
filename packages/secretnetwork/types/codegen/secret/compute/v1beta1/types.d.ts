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
export interface AccessTypeParam {
    value: AccessType;
}
export interface AccessTypeParamProtoMsg {
    typeUrl: "/secret.compute.v1beta1.AccessTypeParam";
    value: Uint8Array;
}
export interface AccessTypeParamAmino {
    value: AccessType;
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
    code_hash: Uint8Array;
    creator: Uint8Array;
    source: string;
    builder: string;
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
export interface ContractCustomInfo {
    enclaveKey: Uint8Array;
    label: string;
}
export interface ContractCustomInfoProtoMsg {
    typeUrl: "/secret.compute.v1beta1.ContractCustomInfo";
    value: Uint8Array;
}
export interface ContractCustomInfoAmino {
    enclave_key: Uint8Array;
    label: string;
}
export interface ContractCustomInfoAminoMsg {
    type: "/secret.compute.v1beta1.ContractCustomInfo";
    value: ContractCustomInfoAmino;
}
export interface ContractCustomInfoSDKType {
    enclave_key: Uint8Array;
    label: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    codeId: bigint;
    creator: Uint8Array;
    label: string;
    /**
     * never show this in query results, just use for sorting
     * (Note: when using json tag "-" amino refused to serialize it...)
     */
    created: AbsoluteTxPosition;
    ibcPortId: string;
}
export interface ContractInfoProtoMsg {
    typeUrl: "/secret.compute.v1beta1.ContractInfo";
    value: Uint8Array;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoAmino {
    code_id: string;
    creator: Uint8Array;
    label: string;
    /**
     * never show this in query results, just use for sorting
     * (Note: when using json tag "-" amino refused to serialize it...)
     */
    created?: AbsoluteTxPositionAmino;
    ibc_port_id: string;
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
    created: AbsoluteTxPositionSDKType;
    ibc_port_id: string;
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
    block_height: string;
    /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */
    tx_index: string;
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
    Key: Uint8Array;
    /** base64-encode raw value */
    Value: Uint8Array;
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
