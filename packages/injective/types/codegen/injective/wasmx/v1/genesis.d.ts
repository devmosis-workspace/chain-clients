import { RegisteredContract, RegisteredContractAmino, RegisteredContractSDKType, Params, ParamsAmino, ParamsSDKType } from "./wasmx";
import { BinaryWriter } from "../../../binary";
export interface RegisteredContractWithAddress {
    address: string;
    registeredContract: RegisteredContract;
}
export interface RegisteredContractWithAddressProtoMsg {
    typeUrl: "/injective.wasmx.v1.RegisteredContractWithAddress";
    value: Uint8Array;
}
export interface RegisteredContractWithAddressAmino {
    address: string;
    registered_contract?: RegisteredContractAmino;
}
export interface RegisteredContractWithAddressAminoMsg {
    type: "/injective.wasmx.v1.RegisteredContractWithAddress";
    value: RegisteredContractWithAddressAmino;
}
export interface RegisteredContractWithAddressSDKType {
    address: string;
    registered_contract: RegisteredContractSDKType;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to wasmx. */
    params: Params;
    /**
     * registered_contracts is an array containing the genesis registered
     * contracts
     */
    registeredContracts: RegisteredContractWithAddress[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.wasmx.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to wasmx. */
    params?: ParamsAmino;
    /**
     * registered_contracts is an array containing the genesis registered
     * contracts
     */
    registered_contracts: RegisteredContractWithAddressAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/injective.wasmx.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    registered_contracts: RegisteredContractWithAddressSDKType[];
}
export declare const RegisteredContractWithAddress: {
    typeUrl: string;
    encode(message: RegisteredContractWithAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisteredContractWithAddress;
    fromPartial(object: Partial<RegisteredContractWithAddress>): RegisteredContractWithAddress;
    fromAmino(object: RegisteredContractWithAddressAmino): RegisteredContractWithAddress;
    toAmino(message: RegisteredContractWithAddress): RegisteredContractWithAddressAmino;
    fromAminoMsg(object: RegisteredContractWithAddressAminoMsg): RegisteredContractWithAddress;
    fromProtoMsg(message: RegisteredContractWithAddressProtoMsg): RegisteredContractWithAddress;
    toProto(message: RegisteredContractWithAddress): Uint8Array;
    toProtoMsg(message: RegisteredContractWithAddress): RegisteredContractWithAddressProtoMsg;
};
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
