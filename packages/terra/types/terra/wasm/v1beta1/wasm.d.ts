import { BinaryWriter } from "../../../binary";
/** CodeInfo is data for the uploaded contract WASM code */
export interface LegacyCodeInfo {
    /** CodeID is the sequentially increasing unique identifier */
    codeId: bigint;
    /** CodeHash is the unique identifier created by wasmvm */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
}
export interface LegacyCodeInfoProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.LegacyCodeInfo";
    value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface LegacyCodeInfoAmino {
    /** CodeID is the sequentially increasing unique identifier */
    code_id?: string;
    /** CodeHash is the unique identifier created by wasmvm */
    code_hash?: string;
    /** Creator address who initially stored the code */
    creator?: string;
}
export interface LegacyCodeInfoAminoMsg {
    type: "/terra.wasm.v1beta1.LegacyCodeInfo";
    value: LegacyCodeInfoAmino;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface LegacyCodeInfoSDKType {
    code_id: bigint;
    code_hash: Uint8Array;
    creator: string;
}
/** ContractInfo stores a WASM contract instance */
export interface LegacyContractInfo {
    /** Address is the address of the contract */
    address: string;
    /** Creator is the contract creator address */
    creator: string;
    /** Admin is who can execute the contract migration */
    admin: string;
    /** CodeID is the reference to the stored Wasm code */
    codeId: bigint;
    /** InitMsg is the raw message used when instantiating a contract */
    initMsg: Uint8Array;
}
export interface LegacyContractInfoProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.LegacyContractInfo";
    value: Uint8Array;
}
/** ContractInfo stores a WASM contract instance */
export interface LegacyContractInfoAmino {
    /** Address is the address of the contract */
    address?: string;
    /** Creator is the contract creator address */
    creator?: string;
    /** Admin is who can execute the contract migration */
    admin?: string;
    /** CodeID is the reference to the stored Wasm code */
    code_id?: string;
    /** InitMsg is the raw message used when instantiating a contract */
    init_msg?: string;
}
export interface LegacyContractInfoAminoMsg {
    type: "/terra.wasm.v1beta1.LegacyContractInfo";
    value: LegacyContractInfoAmino;
}
/** ContractInfo stores a WASM contract instance */
export interface LegacyContractInfoSDKType {
    address: string;
    creator: string;
    admin: string;
    code_id: bigint;
    init_msg: Uint8Array;
}
export declare const LegacyCodeInfo: {
    typeUrl: string;
    encode(message: LegacyCodeInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LegacyCodeInfo;
    fromPartial(object: Partial<LegacyCodeInfo>): LegacyCodeInfo;
    fromAmino(object: LegacyCodeInfoAmino): LegacyCodeInfo;
    toAmino(message: LegacyCodeInfo): LegacyCodeInfoAmino;
    fromAminoMsg(object: LegacyCodeInfoAminoMsg): LegacyCodeInfo;
    fromProtoMsg(message: LegacyCodeInfoProtoMsg): LegacyCodeInfo;
    toProto(message: LegacyCodeInfo): Uint8Array;
    toProtoMsg(message: LegacyCodeInfo): LegacyCodeInfoProtoMsg;
};
export declare const LegacyContractInfo: {
    typeUrl: string;
    encode(message: LegacyContractInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LegacyContractInfo;
    fromPartial(object: Partial<LegacyContractInfo>): LegacyContractInfo;
    fromAmino(object: LegacyContractInfoAmino): LegacyContractInfo;
    toAmino(message: LegacyContractInfo): LegacyContractInfoAmino;
    fromAminoMsg(object: LegacyContractInfoAminoMsg): LegacyContractInfo;
    fromProtoMsg(message: LegacyContractInfoProtoMsg): LegacyContractInfo;
    toProto(message: LegacyContractInfo): Uint8Array;
    toProtoMsg(message: LegacyContractInfo): LegacyContractInfoProtoMsg;
};
