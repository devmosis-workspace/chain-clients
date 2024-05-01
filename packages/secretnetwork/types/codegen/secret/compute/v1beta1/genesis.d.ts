import { CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType, ContractCustomInfo, ContractCustomInfoAmino, ContractCustomInfoSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    /** Params params = 1 [(gogoproto.nullable) = false]; */
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/secret.compute.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateAmino {
    /** Params params = 1 [(gogoproto.nullable) = false]; */
    codes?: CodeAmino[];
    contracts?: ContractAmino[];
    sequences?: SequenceAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/secret.compute.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
    codes: CodeSDKType[];
    contracts: ContractSDKType[];
    sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: bigint;
    codeInfo: CodeInfo;
    codeBytes: Uint8Array;
}
export interface CodeProtoMsg {
    typeUrl: "/secret.compute.v1beta1.Code";
    value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeAmino {
    code_id?: string;
    code_info?: CodeInfoAmino;
    code_bytes?: string;
}
export interface CodeAminoMsg {
    type: "/secret.compute.v1beta1.Code";
    value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
    code_id: bigint;
    code_info: CodeInfoSDKType;
    code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: Uint8Array;
    contractInfo: ContractInfo;
    contractState: Model[];
    contractCustomInfo?: ContractCustomInfo;
}
export interface ContractProtoMsg {
    typeUrl: "/secret.compute.v1beta1.Contract";
    value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
    contract_address?: string;
    contract_info?: ContractInfoAmino;
    contract_state?: ModelAmino[];
    contract_custom_info?: ContractCustomInfoAmino;
}
export interface ContractAminoMsg {
    type: "/secret.compute.v1beta1.Contract";
    value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: Uint8Array;
    contract_info: ContractInfoSDKType;
    contract_state: ModelSDKType[];
    contract_custom_info?: ContractCustomInfoSDKType;
}
/** Sequence id and value of a counter */
export interface Sequence {
    idKey: Uint8Array;
    value: bigint;
}
export interface SequenceProtoMsg {
    typeUrl: "/secret.compute.v1beta1.Sequence";
    value: Uint8Array;
}
/** Sequence id and value of a counter */
export interface SequenceAmino {
    id_key?: string;
    value?: string;
}
export interface SequenceAminoMsg {
    type: "/secret.compute.v1beta1.Sequence";
    value: SequenceAmino;
}
/** Sequence id and value of a counter */
export interface SequenceSDKType {
    id_key: Uint8Array;
    value: bigint;
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
export declare const Sequence: {
    typeUrl: string;
    encode(message: Sequence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Sequence;
    fromPartial(object: Partial<Sequence>): Sequence;
    fromAmino(object: SequenceAmino): Sequence;
    toAmino(message: Sequence): SequenceAmino;
    fromAminoMsg(object: SequenceAminoMsg): Sequence;
    fromProtoMsg(message: SequenceProtoMsg): Sequence;
    toProto(message: Sequence): Uint8Array;
    toProtoMsg(message: Sequence): SequenceProtoMsg;
};
