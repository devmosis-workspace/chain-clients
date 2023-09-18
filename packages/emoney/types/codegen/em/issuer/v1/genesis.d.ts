import { Issuer, IssuerAmino, IssuerSDKType } from "./issuer";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    issuers: Issuer[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/em.issuer.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    issuers: IssuerAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/em.issuer.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    issuers: IssuerSDKType[];
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
