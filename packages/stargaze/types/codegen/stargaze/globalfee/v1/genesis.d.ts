import { Params, ParamsAmino, ParamsSDKType, CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisState {
    /** Module params */
    params: Params;
    /** Authorizations configured by code id */
    codeAuthorizations: CodeAuthorization[];
    /** Authorizations configured by contract addresses */
    contractAuthorizations: ContractAuthorization[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisStateAmino {
    /** Module params */
    params?: ParamsAmino;
    /** Authorizations configured by code id */
    code_authorizations: CodeAuthorizationAmino[];
    /** Authorizations configured by contract addresses */
    contract_authorizations: ContractAuthorizationAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    code_authorizations: CodeAuthorizationSDKType[];
    contract_authorizations: ContractAuthorizationSDKType[];
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
