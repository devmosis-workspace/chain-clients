import { ContractMeta as ContractMeta1 } from "../../../burrow/acm";
import { ContractMetaAmino as ContractMeta1Amino } from "../../../burrow/acm";
import { ContractMetaSDKType as ContractMeta1SDKType } from "../../../burrow/acm";
import { BinaryWriter } from "../../../binary";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
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
export declare const CVMCode: {
    typeUrl: string;
    encode(message: CVMCode, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CVMCode;
    fromPartial(object: Partial<CVMCode>): CVMCode;
    fromAmino(object: CVMCodeAmino): CVMCode;
    toAmino(message: CVMCode): CVMCodeAmino;
    fromAminoMsg(object: CVMCodeAminoMsg): CVMCode;
    fromProtoMsg(message: CVMCodeProtoMsg): CVMCode;
    toProto(message: CVMCode): Uint8Array;
    toProtoMsg(message: CVMCode): CVMCodeProtoMsg;
};
export declare const Storage: {
    typeUrl: string;
    encode(message: Storage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Storage;
    fromPartial(object: Partial<Storage>): Storage;
    fromAmino(object: StorageAmino): Storage;
    toAmino(message: Storage): StorageAmino;
    fromAminoMsg(object: StorageAminoMsg): Storage;
    fromProtoMsg(message: StorageProtoMsg): Storage;
    toProto(message: Storage): Uint8Array;
    toProtoMsg(message: Storage): StorageProtoMsg;
};
export declare const ContractMeta: {
    typeUrl: string;
    encode(message: ContractMeta, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractMeta;
    fromPartial(object: Partial<ContractMeta>): ContractMeta;
    fromAmino(object: ContractMetaAmino): ContractMeta;
    toAmino(message: ContractMeta): ContractMetaAmino;
    fromAminoMsg(object: ContractMetaAminoMsg): ContractMeta;
    fromProtoMsg(message: ContractMetaProtoMsg): ContractMeta;
    toProto(message: ContractMeta): Uint8Array;
    toProtoMsg(message: ContractMeta): ContractMetaProtoMsg;
};
export declare const ContractMetas: {
    typeUrl: string;
    encode(message: ContractMetas, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractMetas;
    fromPartial(object: Partial<ContractMetas>): ContractMetas;
    fromAmino(object: ContractMetasAmino): ContractMetas;
    toAmino(message: ContractMetas): ContractMetasAmino;
    fromAminoMsg(object: ContractMetasAminoMsg): ContractMetas;
    fromProtoMsg(message: ContractMetasProtoMsg): ContractMetas;
    toProto(message: ContractMetas): Uint8Array;
    toProtoMsg(message: ContractMetas): ContractMetasProtoMsg;
};
export declare const Metadata: {
    typeUrl: string;
    encode(message: Metadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Metadata;
    fromPartial(object: Partial<Metadata>): Metadata;
    fromAmino(object: MetadataAmino): Metadata;
    toAmino(message: Metadata): MetadataAmino;
    fromAminoMsg(object: MetadataAminoMsg): Metadata;
    fromProtoMsg(message: MetadataProtoMsg): Metadata;
    toProto(message: Metadata): Uint8Array;
    toProtoMsg(message: Metadata): MetadataProtoMsg;
};
