import { LegacyCodeInfo, LegacyCodeInfoAmino, LegacyCodeInfoSDKType, LegacyContractInfo, LegacyContractInfoAmino, LegacyContractInfoSDKType } from "./wasm";
import { BinaryWriter } from "../../../binary";
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
export declare const Code: {
    typeUrl: string;
    encode(message: Code, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Code;
    fromPartial(object: Partial<Code>): Code;
    fromAmino(object: CodeAmino): Code;
    toAmino(message: Code): CodeAmino;
    fromAminoMsg(object: CodeAminoMsg): Code;
    fromProtoMsg(message: CodeProtoMsg): Code;
    toProto(message: Code): Uint8Array;
    toProtoMsg(message: Code): CodeProtoMsg;
};
export declare const Contract: {
    typeUrl: string;
    encode(message: Contract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Contract;
    fromPartial(object: Partial<Contract>): Contract;
    fromAmino(object: ContractAmino): Contract;
    toAmino(message: Contract): ContractAmino;
    fromAminoMsg(object: ContractAminoMsg): Contract;
    fromProtoMsg(message: ContractProtoMsg): Contract;
    toProto(message: Contract): Uint8Array;
    toProtoMsg(message: Contract): ContractProtoMsg;
};
