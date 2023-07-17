import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum AccessType {
    UNDEFINED = 0,
    NOBODY = 1,
    ONLY_ADDRESS = 2,
    EVERYBODY = 3,
    UNRECOGNIZED = -1
}
export declare const AccessTypeSDKType: typeof AccessType;
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
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
export declare const AccessTypeParam: {
    encode(message: AccessTypeParam, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccessTypeParam;
    fromPartial(object: Partial<AccessTypeParam>): AccessTypeParam;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CodeInfo;
    fromPartial(object: Partial<CodeInfo>): CodeInfo;
};
export declare const ContractCustomInfo: {
    encode(message: ContractCustomInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractCustomInfo;
    fromPartial(object: Partial<ContractCustomInfo>): ContractCustomInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractInfo;
    fromPartial(object: Partial<ContractInfo>): ContractInfo;
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
