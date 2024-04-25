import { FeePayContract, FeePayContractAmino, FeePayContractSDKType } from "./feepay";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the feepay module parameters */
    params: Params;
    /** fee_pay_contracts are the feepay module contracts */
    feePayContracts: FeePayContract[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/juno.feepay.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
    /** params are the feepay module parameters */
    params?: ParamsAmino;
    /** fee_pay_contracts are the feepay module contracts */
    fee_pay_contracts?: FeePayContractAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/juno.feepay.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    fee_pay_contracts: FeePayContractSDKType[];
}
/** Params defines the feepay module params */
export interface Params {
    /** enable_feepay defines a parameter to enable the feepay module */
    enableFeepay: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/juno.feepay.v1.Params";
    value: Uint8Array;
}
/** Params defines the feepay module params */
export interface ParamsAmino {
    /** enable_feepay defines a parameter to enable the feepay module */
    enable_feepay?: boolean;
}
export interface ParamsAminoMsg {
    type: "/juno.feepay.v1.Params";
    value: ParamsAmino;
}
/** Params defines the feepay module params */
export interface ParamsSDKType {
    enable_feepay: boolean;
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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
