import { Params, ParamsSDKType, CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisState {
    /** Module params */
    params?: Params;
    /** Authorizations configured by code id */
    codeAuthorizations: CodeAuthorization[];
    /** Authorizations configured by contract addresses */
    contractAuthorizations: ContractAuthorization[];
}
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    code_authorizations: CodeAuthorizationSDKType[];
    contract_authorizations: ContractAuthorizationSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
