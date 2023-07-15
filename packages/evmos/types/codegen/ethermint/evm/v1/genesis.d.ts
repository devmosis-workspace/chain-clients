import { Params, ParamsSDKType, State, StateSDKType } from "./evm";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
    /** accounts is an array containing the ethereum genesis accounts. */
    accounts: GenesisAccount[];
    /** params defines all the parameters of the module. */
    params?: Params;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateSDKType {
    accounts: GenesisAccountSDKType[];
    params?: ParamsSDKType;
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
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const GenesisAccount: {
    encode(message: GenesisAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisAccount;
    fromPartial(object: Partial<GenesisAccount>): GenesisAccount;
};
