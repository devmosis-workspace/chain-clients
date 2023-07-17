import { CodeInfo, CodeInfoSDKType, ContractInfo, ContractInfoSDKType, Model, ModelSDKType, ContractCustomInfo, ContractCustomInfoSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    /** Params params = 1 [(gogoproto.nullable) = false]; */
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
    codes: CodeSDKType[];
    contracts: ContractSDKType[];
    sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: Long;
    codeInfo?: CodeInfo;
    codeBytes: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
    code_id: Long;
    code_info?: CodeInfoSDKType;
    code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: Uint8Array;
    contractInfo?: ContractInfo;
    contractState: Model[];
    contractCustomInfo?: ContractCustomInfo;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: Uint8Array;
    contract_info?: ContractInfoSDKType;
    contract_state: ModelSDKType[];
    contract_custom_info?: ContractCustomInfoSDKType;
}
/** Sequence id and value of a counter */
export interface Sequence {
    idKey: Uint8Array;
    value: Long;
}
/** Sequence id and value of a counter */
export interface SequenceSDKType {
    id_key: Uint8Array;
    value: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Code;
    fromPartial(object: Partial<Code>): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Contract;
    fromPartial(object: Partial<Contract>): Contract;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Sequence;
    fromPartial(object: Partial<Sequence>): Sequence;
};
