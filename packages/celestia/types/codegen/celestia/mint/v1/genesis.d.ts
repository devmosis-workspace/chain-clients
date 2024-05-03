import { BinaryWriter } from "../../../binary";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** BondDenom is the denomination of the token that should be minted. */
    bondDenom: string;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/celestia.mint.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
    /** BondDenom is the denomination of the token that should be minted. */
    bond_denom?: string;
}
export interface GenesisStateAminoMsg {
    type: "/celestia.mint.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    bond_denom: string;
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
