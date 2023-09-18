import { Params, ParamsAmino, ParamsSDKType, State, StateAmino, StateSDKType } from "./evm";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
    /** accounts is an array containing the ethereum genesis accounts. */
    accounts: GenesisAccount[];
    /** params defines all the parameters of the module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ethermint.evm.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateAmino {
    /** accounts is an array containing the ethereum genesis accounts. */
    accounts: GenesisAccountAmino[];
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/ethermint.evm.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateSDKType {
    accounts: GenesisAccountSDKType[];
    params: ParamsSDKType;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccount {
    /** address defines an ethereum hex formated address of an account */
    address: string;
    /** code defines the hex bytes of the account code. */
    code: string;
    /** storage defines the set of state key values for the account. */
    storage: State[];
}
export interface GenesisAccountProtoMsg {
    typeUrl: "/ethermint.evm.v1.GenesisAccount";
    value: Uint8Array;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccountAmino {
    /** address defines an ethereum hex formated address of an account */
    address: string;
    /** code defines the hex bytes of the account code. */
    code: string;
    /** storage defines the set of state key values for the account. */
    storage: StateAmino[];
}
export interface GenesisAccountAminoMsg {
    type: "/ethermint.evm.v1.GenesisAccount";
    value: GenesisAccountAmino;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccountSDKType {
    address: string;
    code: string;
    storage: StateSDKType[];
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
export declare const GenesisAccount: {
    typeUrl: string;
    encode(message: GenesisAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisAccount;
    fromPartial(object: Partial<GenesisAccount>): GenesisAccount;
    fromAmino(object: GenesisAccountAmino): GenesisAccount;
    toAmino(message: GenesisAccount): GenesisAccountAmino;
    fromAminoMsg(object: GenesisAccountAminoMsg): GenesisAccount;
    fromProtoMsg(message: GenesisAccountProtoMsg): GenesisAccount;
    toProto(message: GenesisAccount): Uint8Array;
    toProtoMsg(message: GenesisAccount): GenesisAccountProtoMsg;
};
