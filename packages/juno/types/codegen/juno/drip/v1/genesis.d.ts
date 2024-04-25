import { BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the drip module parameters */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/juno.drip.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
    /** params are the drip module parameters */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/juno.drip.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
}
/** Params defines the drip module params */
export interface Params {
    /** enable_drip defines a parameter to enable the drip module */
    enableDrip: boolean;
    /** allowed_addresses defines the list of addresses authorized to use the module */
    allowedAddresses: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/juno.drip.v1.Params";
    value: Uint8Array;
}
/** Params defines the drip module params */
export interface ParamsAmino {
    /** enable_drip defines a parameter to enable the drip module */
    enable_drip?: boolean;
    /** allowed_addresses defines the list of addresses authorized to use the module */
    allowed_addresses?: string[];
}
export interface ParamsAminoMsg {
    type: "/juno.drip.v1.Params";
    value: ParamsAmino;
}
/** Params defines the drip module params */
export interface ParamsSDKType {
    enable_drip: boolean;
    allowed_addresses: string[];
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
