import { RegisteredContract, RegisteredContractSDKType, Params, ParamsSDKType } from "./wasmx";
import * as _m0 from "protobufjs/minimal";
export interface RegisteredContractWithAddress {
    address: string;
    registeredContract?: RegisteredContract;
}
export interface RegisteredContractWithAddressSDKType {
    address: string;
    registered_contract?: RegisteredContractSDKType;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to wasmx. */
    params?: Params;
    /**
     * registered_contracts is an array containing the genesis registered
     * contracts
     */
    registeredContracts: RegisteredContractWithAddress[];
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    registered_contracts: RegisteredContractWithAddressSDKType[];
}
export declare const RegisteredContractWithAddress: {
    encode(message: RegisteredContractWithAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisteredContractWithAddress;
    fromPartial(object: Partial<RegisteredContractWithAddress>): RegisteredContractWithAddress;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
